import type { Session, SupabaseClient } from '@supabase/supabase-js';
import { LabNotebookEntry } from '../types/chemistry';

// Students' reports go to the school's Supabase project (database tables "reports" and "staff", and the
// private storage bucket "report-pictures"; the access rules are in supabase/migrations).
// Anyone on the site may send a report, but cannot read any. Only a signed-in account listed in "staff"
// can read, grade or delete reports. The address and the publishable key below are meant to be public.
const SUPABASE_URL = 'https://jxvmylqworpmxgotmvha.supabase.co';
const SUPABASE_KEY = 'sb_publishable_VbSFIaHYUIbCNTtpptMKew_CIfe6eMt';
const BUCKET = 'report-pictures';

type Pictures = NonNullable<LabNotebookEntry['whiteboardImages']>;

/** A report row as the teacher reads it. */
export interface InboxReport {
  id: string;
  received_at: string;
  entry: LabNotebookEntry;
  pictures: { page: string; path: string }[];
  status: 'submitted' | 'graded';
  grade_score: string | null;
  teacher_remarks: string | null;
  skill_scores: Record<string, number> | null;
}

// The library is loaded only when a report is sent or the teacher opens the inbox.
let client: Promise<SupabaseClient> | null = null;
export const getClient = () =>
  (client ??= import('@supabase/supabase-js').then(({ createClient }) => createClient(SUPABASE_URL, SUPABASE_KEY)));

/** The pictures' folder, the same each time one report is sent, so sending it again stores nothing twice. */
const folderFor = async (entry: LabNotebookEntry) => {
  const text = new TextEncoder().encode(`${entry.id}|${entry.studentName.trim()}`);
  const hex = [...new Uint8Array(await crypto.subtle.digest('SHA-256', text))].map((b) => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
};

/** Sends a report: whiteboard pictures to the bucket first, then the report itself. Throws when it fails. */
export const sendReport = async (entry: LabNotebookEntry) => {
  const supabase = await getClient();
  const { whiteboardImages, ...report } = entry;
  const folder = await folderFor(entry);
  const pictures: InboxReport['pictures'] = [];
  for (const [i, picture] of (whiteboardImages ?? []).slice(0, 8).entries()) {
    const png = picture.image.startsWith('data:image/png');
    const path = `${folder}/${i + 1}.${png ? 'png' : 'jpg'}`;
    const blob = await (await fetch(picture.image)).blob();
    const { error } = await supabase.storage.from(BUCKET).upload(path, blob, { contentType: png ? 'image/png' : 'image/jpeg', upsert: false });
    // Already there from an earlier try of the same report.
    if (error && !/exists|duplicate/i.test(error.message)) throw error;
    pictures.push({ page: picture.page, path });
  }
  const { error } = await supabase.from('reports').insert({
    entry_id: entry.id,
    student_name: entry.studentName.trim(),
    title: entry.experimentTitle,
    exam_score: entry.examScore ?? null,
    entry: { ...report, status: 'submitted' },
    pictures,
  });
  // 23505: this report was already sent (a retry), so it is there.
  if (error && error.code !== '23505') throw error;
};

// ---- For teachers and lab staff ----

export const getSession = async (): Promise<Session | null> => (await (await getClient()).auth.getSession()).data.session;

export const onSessionChange = async (callback: (session: Session | null) => void) => {
  const { data } = (await getClient()).auth.onAuthStateChange((_event, session) => callback(session));
  return () => data.subscription.unsubscribe();
};

export const signIn = async (email: string, password: string) => {
  const { error } = await (await getClient()).auth.signInWithPassword({ email: email.trim(), password });
  if (error) throw error;
};

export const signOut = async () => {
  await (await getClient()).auth.signOut();
};

/** Whether the signed-in account is on the staff list. */
export const isStaff = async () => {
  const supabase = await getClient();
  const { data, error } = await supabase.from('staff').select('role').maybeSingle();
  if (error) throw error;
  return !!data;
};

export const listReports = async (): Promise<InboxReport[]> => {
  const { data, error } = await (await getClient())
    .from('reports')
    .select('id, received_at, entry, pictures, status, grade_score, teacher_remarks, skill_scores')
    .order('received_at', { ascending: false })
    .limit(500);
  if (error) throw error;
  return (data ?? []) as InboxReport[];
};

const asDataUrl = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });

/** The whiteboard pages of a report, as pictures that can also go into a report file. */
export const loadPictures = async (report: InboxReport): Promise<Pictures> => {
  const storage = (await getClient()).storage.from(BUCKET);
  return Promise.all(
    report.pictures.map(async (picture) => {
      const { data, error } = await storage.download(picture.path);
      if (error) throw error;
      return { page: picture.page, image: await asDataUrl(data) };
    }),
  );
};

export const saveGrade = async (id: string, grade: { gradeScore: string; teacherRemarks: string; skillScores: Record<string, number> }) => {
  const { data, error } = await (await getClient())
    .from('reports')
    .update({
      status: 'graded',
      grade_score: grade.gradeScore,
      teacher_remarks: grade.teacherRemarks,
      skill_scores: grade.skillScores,
      graded_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select('id');
  if (error) throw error;
  // The access rules give no error for a row they keep out of reach, only no row.
  if (!data?.length) throw new Error('not-saved');
};

/** Deletes a report and its whiteboard pictures for good. */
export const deleteReport = async (report: InboxReport) => {
  const supabase = await getClient();
  if (report.pictures.length) {
    const { error } = await supabase.storage.from(BUCKET).remove(report.pictures.map((p) => p.path));
    if (error) throw error;
  }
  const { data, error } = await supabase.from('reports').delete().eq('id', report.id).select('id');
  if (error) throw error;
  if (!data?.length) throw new Error('not-deleted');
};
