import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { Language, LabNotebookEntry } from '../types/chemistry';
import { MAX_SKILL_SCORE, ao3Skills, downloadReport, readReportFile, statusLabel } from '../data/reportFiles';
import { InboxReport, deleteReport, getSession, isStaff, listReports, loadPictures, onSessionChange, saveGrade, signIn, signOut } from '../data/reportServer';
import { useStoredState } from '../hooks/useStoredState';
import { CheckCircle2, Database, Download, LogIn, LogOut, RefreshCw, Trash2, Upload } from 'lucide-react';

interface StudentReportsProps {
  language: Language;
}

type Pictures = NonNullable<LabNotebookEntry['whiteboardImages']>;
/** A report on screen: from the report inbox (Supabase), or from a report file opened in this browser. */
type Report = LabNotebookEntry & { source: 'inbox' | 'file'; received?: string; row?: InboxReport };

const fromRow = (row: InboxReport): Report => ({
  ...row.entry,
  id: row.id,
  status: row.status,
  gradeScore: row.grade_score ?? undefined,
  teacherRemarks: row.teacher_remarks ?? undefined,
  skillScores: row.skill_scores ?? undefined,
  whiteboardImages: undefined,
  source: 'inbox',
  received: row.received_at,
  row,
});

/** The report as the notebook file format holds it, without what only this page uses. */
const plainEntry = (report: Report, pictures?: Pictures): LabNotebookEntry => {
  const { source: _source, received: _received, row: _row, ...entry } = report;
  return pictures?.length ? { ...entry, whiteboardImages: pictures } : entry;
};

const staffSteps = {
  en: [
    'In the Supabase dashboard, open the project «Chemistry Practical & LSM» → Authentication → Users → Add user → Create new user. Enter the teacher’s email and a password, tick «Auto Confirm User», and press Create user.',
    'Open SQL Editor and run: insert into public.staff (user_id, role) select id, \'teacher\' from auth.users where email = \'the email\'; (use \'lab_staff\' for lab staff).',
    'Sign in here with that email and password.',
    'Recommended: Authentication → Sign In / Providers → turn off «Allow new users to sign up», so nobody else can make an account.',
  ],
  mn: [
    'Supabase-ийн самбарт «Chemistry Practical & LSM» төслийг нээгээд Authentication → Users → Add user → Create new user-ийг сонгоно. Багшийн и-мэйл, нууц үгийг оруулж, «Auto Confirm User»-ийг чагтлаад Create user дарна.',
    'SQL Editor-ийг нээж ажиллуулна: insert into public.staff (user_id, role) select id, \'teacher\' from auth.users where email = \'и-мэйл\'; (лаборантад \'lab_staff\').',
    'Тэр и-мэйл, нууц үгээрээ энд нэвтэрнэ.',
    'Зөвлөмж: Authentication → Sign In / Providers хэсэгт «Allow new users to sign up»-ийг унтраавал өөр хэн ч бүртгэл үүсгэж чадахгүй.',
  ],
};

export const StudentReports: React.FC<StudentReportsProps> = ({ language }) => {
  const en = language === 'en';
  const [fileReports, setFileReports] = useStoredState<LabNotebookEntry[]>('chem_lab_teacher_reports', []);
  const [inbox, setInbox] = useState<Report[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  // Signing in to the report inbox. Pictures are kept in memory only, so they never fill the browser's storage.
  const [session, setSession] = useState<Session | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [staff, setStaff] = useState<boolean | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState<'signin' | 'load' | 'save' | null>(null);
  const [pictures, setPictures] = useState<Record<string, Pictures>>({});
  const [pictureError, setPictureError] = useState<string | null>(null);
  const userId = session?.user.id ?? null;

  const reports: Report[] = [...inbox, ...fileReports.map((r): Report => ({ ...r, source: 'file' }))];
  const selected = reports.find((r) => r.id === selectedId) ?? null;
  const skillScores = selected?.skillScores ?? {};
  const total = ao3Skills.reduce((sum, skill) => sum + (skillScores[skill.id] ?? 0), 0);
  const maxTotal = ao3Skills.length * MAX_SKILL_SCORE;
  const boards = selected ? (selected.whiteboardImages ?? pictures[selected.id]) : undefined;
  const waitingForPictures = !!selected?.row?.pictures.length && !boards && pictureError !== selected.id;

  const unreachable = en
    ? 'The report inbox could not be reached. Check the internet and try again.'
    : 'Тайлангийн хайрцагтай холбогдож чадсангүй. Интернэтээ шалгаад дахин оролдоно уу.';

  useEffect(() => {
    let live = true;
    let stop: (() => void) | undefined;
    getSession()
      .then((s) => live && setSession(s))
      .catch(() => undefined)
      .finally(() => live && setAuthReady(true));
    onSessionChange((s) => live && setSession(s))
      .then((unsubscribe) => (live ? (stop = unsubscribe) : unsubscribe()))
      .catch(() => undefined);
    return () => {
      live = false;
      stop?.();
    };
  }, []);

  const load = useCallback(async () => {
    setBusy('load');
    try {
      const rows = await listReports();
      setInbox(rows.map(fromRow));
      setMessage({ ok: true, text: en ? `${rows.length} report(s) in the inbox.` : `Хайрцагт ${rows.length} тайлан байна.` });
    } catch {
      setMessage({ ok: false, text: unreachable });
    } finally {
      setBusy(null);
    }
  }, [en, unreachable]);

  // Once signed in: check the account is on the staff list, then fetch the reports.
  useEffect(() => {
    setInbox([]);
    setStaff(null);
    if (!userId) return;
    let live = true;
    isStaff()
      .then((ok) => {
        if (!live) return;
        setStaff(ok);
        if (ok) load();
      })
      .catch(() => live && setMessage({ ok: false, text: unreachable }));
    return () => {
      live = false;
    };
  }, [userId]); // load and the message text follow the language; a new language needs no new fetch

  // The whiteboard pages of an inbox report are fetched when the report is opened.
  useEffect(() => {
    const row = selected?.row;
    if (!row || !row.pictures.length || pictures[row.id]) return;
    let stale = false;
    loadPictures(row)
      .then((list) => !stale && setPictures((prev) => ({ ...prev, [row.id]: list })))
      .catch(() => !stale && setPictureError(row.id));
    return () => {
      stale = true;
    };
  }, [selected?.row, pictures]);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim() || !password) return;
    setBusy('signin');
    try {
      await signIn(email, password);
      setPassword('');
      setMessage(null);
    } catch (error) {
      const wrong = error instanceof Error && /invalid/i.test(error.message);
      setMessage({
        ok: false,
        text: wrong ? (en ? 'The email or password is not right.' : 'И-мэйл эсвэл нууц үг буруу байна.') : unreachable,
      });
    } finally {
      setBusy(null);
    }
  };

  const handleSignOut = async () => {
    await signOut().catch(() => undefined);
    setSession(null);
    setPictures({});
    if (selected?.source === 'inbox') setSelectedId(null);
    setMessage({ ok: true, text: en ? 'Signed out.' : 'Гарлаа.' });
  };

  const handleImport = async (files: FileList | null) => {
    if (!files) return;
    let added = 0;
    let failed = 0;
    const incoming: LabNotebookEntry[] = [];
    for (const file of Array.from(files)) {
      try {
        incoming.push(await readReportFile(file));
        added += 1;
      } catch {
        failed += 1;
      }
    }
    setFileReports((prev) => {
      const ids = new Set(incoming.map((r) => r.id));
      return [...incoming, ...prev.filter((r) => !ids.has(r.id))];
    });
    setMessage(
      failed > 0
        ? {
            ok: false,
            text: en
              ? `${added} report(s) added. ${failed} file(s) could not be read: use the file downloaded from the Lab Notebook.`
              : `${added} тайлан нэмэгдлээ. ${failed} файлыг уншиж чадсангүй: Цахим дэвтрээс татсан файлыг ашиглана уу.`,
          }
        : { ok: true, text: en ? `${added} report(s) added.` : `${added} тайлан нэмэгдлээ.` }
    );
    if (fileInput.current) fileInput.current.value = '';
  };

  const updateSelected = (changes: Partial<LabNotebookEntry>) => {
    if (!selected) return;
    if (selected.source === 'inbox') setInbox((prev) => prev.map((r) => (r.id === selected.id ? { ...r, ...changes } : r)));
    else setFileReports((prev) => prev.map((r) => (r.id === selected.id ? { ...r, ...changes } : r)));
  };

  const handleSetScore = (skillId: string, value: number) => {
    const next = { ...skillScores, [skillId]: Math.max(0, Math.min(MAX_SKILL_SCORE, value)) };
    updateSelected({ skillScores: next });
  };

  const handleSaveGrade = async () => {
    if (!selected) return;
    const gradeScore = `${total}/${maxTotal}`;
    if (selected.source === 'file') {
      const graded: Report = { ...selected, status: 'graded', gradeScore };
      updateSelected(graded);
      downloadReport(plainEntry(graded));
      setMessage({
        ok: true,
        text: en ? 'Grade saved. The downloaded file can now be returned to the student.' : 'Дүн хадгалагдлаа. Татагдсан файлыг сурагчид буцааж өгнө үү.',
      });
      return;
    }
    setBusy('save');
    try {
      await saveGrade(selected.id, { gradeScore, teacherRemarks: selected.teacherRemarks ?? '', skillScores });
      updateSelected({ status: 'graded', gradeScore });
      setMessage({ ok: true, text: en ? 'Grade saved in the report inbox.' : 'Дүн тайлангийн хайрцагт хадгалагдлаа.' });
    } catch {
      setMessage({ ok: false, text: en ? 'The grade could not be saved. Check the internet and that you are signed in, then try again.' : 'Дүнг хадгалж чадсангүй. Интернэт болон нэвтэрсэн эсэхээ шалгаад дахин оролдоно уу.' });
    } finally {
      setBusy(null);
    }
  };

  const handleRemove = async (report: Report) => {
    if (report.source === 'file') {
      setFileReports((prev) => prev.filter((r) => r.id !== report.id));
    } else {
      const question = en
        ? `Delete ${report.studentName}’s report «${report.experimentTitle}» from the inbox for good? This cannot be undone.`
        : `${report.studentName}-ийн «${report.experimentTitle}» тайланг хайрцагнаас бүр мөсөн устгах уу? Буцаах боломжгүй.`;
      if (!report.row || !window.confirm(question)) return;
      try {
        await deleteReport(report.row);
        setInbox((prev) => prev.filter((r) => r.id !== report.id));
      } catch {
        setMessage({ ok: false, text: en ? 'The report could not be deleted. Try again.' : 'Тайланг устгаж чадсангүй. Дахин оролдоно уу.' });
        return;
      }
    }
    if (selectedId === report.id) setSelectedId(null);
  };

  const section = (title: string, text: string) => (
    <div>
      <h5 className="text-xs font-bold uppercase text-slate-500 mb-1">{title}</h5>
      <p className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">{text || '—'}</p>
    </div>
  );

  const signedInAs = session?.user.email ?? '';

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">{en ? 'Student Lab Reports' : 'Сурагчдын лабораторийн тайлан'}</h3>
            <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
              {en
                ? 'Students press «Send to teacher» in the Lab Notebook, and the report arrives in the report inbox with its whiteboard pages. Sign in to read and grade them. Report files sent by hand can still be opened too.'
                : 'Сурагч Цахим дэвтрийн «Багшид илгээх» товчийг дарахад тайлан нь самбарын зурагтайгаа тайлангийн хайрцагт ирнэ. Уншиж дүгнэхийн тулд нэвтэрнэ үү. Гараар илгээсэн тайлангийн файл нээх боломж хэвээр.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {staff && (
              <button
                onClick={load}
                disabled={busy === 'load'}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors disabled:opacity-60"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${busy === 'load' ? 'animate-spin' : ''}`} />
                <span>{busy === 'load' ? (en ? 'Loading…' : 'Ачаалж байна…') : en ? 'Load new reports' : 'Шинэ тайлан татах'}</span>
              </button>
            )}
            <button
              onClick={() => fileInput.current?.click()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{en ? 'Open report files' : 'Тайлангийн файл нээх'}</span>
            </button>
          </div>
          <input
            ref={fileInput}
            type="file"
            accept=".json,application/json"
            multiple
            className="hidden"
            aria-label={en ? 'Open report files' : 'Тайлангийн файл нээх'}
            onChange={(e) => handleImport(e.target.files)}
          />
        </div>
        {message && (
          <div role="status" className={`p-2.5 rounded-lg border text-xs ${message.ok ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-amber-50 border-amber-300 text-amber-900'}`}>
            {message.text}
          </div>
        )}
      </div>

      <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4" aria-labelledby="inbox-title">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 id="inbox-title" className="text-sm font-bold text-slate-900">{en ? 'Report inbox' : 'Тайлангийн хайрцаг'}</h3>
              <p className="text-xs text-slate-500 mt-0.5 max-w-2xl">
                {en
                  ? 'Reports are kept in the school’s Supabase database. Anyone can send one, but only teacher and lab staff accounts can read and grade them.'
                  : 'Тайлангууд сургуулийн Supabase өгөгдлийн санд хадгалагдана. Хэн ч илгээж чадна, харин зөвхөн багш, лаборантын бүртгэлээр уншиж дүгнэнэ.'}
              </p>
            </div>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${
              staff ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : staff === false ? 'bg-amber-50 border-amber-300 text-amber-900' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            {staff ? (en ? 'Signed in' : 'Нэвтэрсэн') : staff === false ? (en ? 'Not on the staff list' : 'Ажилтны жагсаалтад алга') : en ? 'Not signed in' : 'Нэвтрээгүй'}
          </span>
        </div>

        {!authReady ? (
          <p className="text-xs text-slate-500">{en ? 'Connecting…' : 'Холбогдож байна…'}</p>
        ) : session ? (
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-700">
            <span>
              {en ? 'Signed in as ' : 'Нэвтэрсэн: '}
              <strong>{signedInAs}</strong>
            </span>
            <button
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>{en ? 'Sign out' : 'Гарах'}</span>
            </button>
            {staff === false && (
              <p className="basis-full text-amber-900">
                {en
                  ? 'This account is not on the staff list yet, so it cannot read reports. Add it with step 2 below.'
                  : 'Энэ бүртгэл ажилтны жагсаалтад хараахан ороогүй тул тайлан уншиж чадахгүй. Доорх 2-р алхмаар нэмнэ үү.'}
              </p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSignIn} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            <label className="md:col-span-5 block text-xs text-slate-700">
              <span className="block font-medium mb-1">{en ? 'Email' : 'И-мэйл'}</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
              />
            </label>
            <label className="md:col-span-4 block text-xs text-slate-700">
              <span className="block font-medium mb-1">{en ? 'Password' : 'Нууц үг'}</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
              />
            </label>
            <button
              type="submit"
              disabled={busy === 'signin'}
              className="md:col-span-3 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-60"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{busy === 'signin' ? (en ? 'Signing in…' : 'Нэвтэрч байна…') : en ? 'Sign in' : 'Нэвтрэх'}</span>
            </button>
          </form>
        )}

        <details className="rounded-lg border border-slate-200 bg-slate-50/60" open={staff === false}>
          <summary className="cursor-pointer select-none px-4 py-2.5 text-xs font-semibold text-slate-800">
            {en ? 'How to add a teacher or lab staff account' : 'Багш, лаборантын бүртгэл хэрхэн нэмэх вэ'}
          </summary>
          <div className="px-4 pb-4 space-y-2">
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              {staffSteps[language].map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              {en
                ? 'A free Supabase project pauses after a week with no use. If reports stop arriving after a holiday, open the project in the Supabase dashboard and press Restore. Until then, students’ reports are downloaded as files.'
                : 'Үнэгүй Supabase төсөл долоо хоног ашиглагдахгүй бол түр зогсдог. Амралтын дараа тайлан ирэхгүй бол Supabase-ийн самбарт төслөө нээж Restore дарна уу. Тэр хооронд сурагчийн тайлан файл болж татагдана.'}
            </p>
          </div>
        </details>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-2">
          {reports.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              {staff
                ? en ? 'No reports yet.' : 'Одоогоор тайлан алга.'
                : en ? 'Sign in to see the reports students have sent.' : 'Сурагчдын илгээсэн тайланг харахын тулд нэвтэрнэ үү.'}
            </div>
          ) : (
            reports.map((report) => (
              <div
                key={report.id}
                className={`rounded-lg border text-xs transition-colors ${
                  report.id === selectedId ? 'border-cyan-600 bg-cyan-50/40' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button onClick={() => setSelectedId(report.id)} className="w-full text-left p-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>{report.date}</span>
                    <span className="text-cyan-700 font-semibold uppercase">
                      {statusLabel(report.status, language)}
                      {report.gradeScore ? ` · ${report.gradeScore}` : ''}
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 truncate">{report.studentName}</div>
                  <div className="text-slate-500 truncate mt-0.5">{report.experimentTitle}</div>
                </button>
                <div className="px-3 pb-2 flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-400">
                    {report.source === 'inbox' ? (en ? 'From the inbox' : 'Хайрцагнаас') : en ? 'From a file' : 'Файлаас'}
                  </span>
                  <button
                    onClick={() => handleRemove(report)}
                    title={report.source === 'inbox' ? (en ? 'Deletes it from the inbox for good.' : 'Хайрцагнаас бүр мөсөн устгана.') : en ? 'Removes it from this browser.' : 'Энэ хөтчөөс хасна.'}
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-600"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>{en ? 'Delete' : 'Устгах'}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
          {!selected ? (
            <div className="p-10 text-center text-xs text-slate-400">{en ? 'Select a report to read and grade it.' : 'Унших, дүгнэх тайлангаа сонгоно уу.'}</div>
          ) : (
            <>
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500">
                  {selected.date}
                  {selected.chapterCode && <> · {en ? 'Chapter' : 'Бүлэг'} {selected.chapterCode}</>}
                </div>
                <h4 className="text-lg font-bold text-slate-900">{selected.experimentTitle}</h4>
                <div className="text-sm text-slate-600">{selected.studentName}</div>
                {selected.examScore && (
                  <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs text-cyan-900">
                    <span>{en ? 'Exam Practice marks' : 'Шалгалтын дадлагын оноо'}:</span>
                    <strong className="tabular-nums">{selected.examScore}</strong>
                  </div>
                )}
              </div>

              {section(en ? 'Aim' : 'Зорилго', selected.aim)}
              {section(en ? 'Apparatus' : 'Багаж', selected.equipmentUsed)}

              {selected.measurements.length > 0 && (
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-slate-700 text-[11px] border-b border-slate-200">
                      <tr>
                        <th className="p-2">{en ? 'Quantity' : 'Хэмжигдэхүүн'}</th>
                        <th className="p-2">1</th>
                        <th className="p-2">2</th>
                        <th className="p-2">3</th>
                        <th className="p-2">{en ? 'Mean' : 'Дундаж'}</th>
                        <th className="p-2">{en ? 'Unit' : 'Нэгж'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selected.measurements.map((row, i) => (
                        <tr key={i}>
                          <td className="p-2 font-sans">{row.parameter}</td>
                          <td className="p-2">{row.trial1}</td>
                          <td className="p-2">{row.trial2}</td>
                          <td className="p-2">{row.trial3}</td>
                          <td className="p-2 font-bold">{row.mean}</td>
                          <td className="p-2">{row.unit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section(selected.examPaperId ? (en ? 'Answers' : 'Хариултууд') : en ? 'Observations' : 'Ажиглалт', selected.observations)}
              {section(en ? 'Calculations' : 'Тооцоолол', selected.calculations)}
              {section(selected.examPaperId ? (en ? 'Marks' : 'Оноо') : en ? 'Conclusion' : 'Дүгнэлт', selected.conclusion)}
              {section(en ? 'Evaluation' : 'Үнэлгээ', selected.evaluations)}

              {waitingForPictures && <p className="text-xs text-slate-500">{en ? 'Loading the whiteboard pages…' : 'Самбарын зургийг ачаалж байна…'}</p>}
              {pictureError === selected.id && !boards && (
                <p className="text-xs text-amber-800">
                  {en ? 'The whiteboard pages could not be loaded. Press «Load new reports» and open the report again.' : 'Самбарын зургийг ачаалж чадсангүй. «Шинэ тайлан татах» дараад тайлангаа дахин нээнэ үү.'}
                </p>
              )}
              {!!boards?.length && (
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase text-slate-500">{en ? 'Whiteboard' : 'Самбар'}</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {boards.map((wb, i) => (
                      <figure key={`${wb.page}-${i}`} className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                        <img src={wb.image} alt={`${en ? 'Whiteboard' : 'Самбар'}: ${wb.page}`} className="w-full h-auto" />
                        <figcaption className="px-2.5 py-1.5 text-[11px] text-slate-600 border-t border-slate-100">{wb.page}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="text-sm font-bold text-slate-900">{en ? 'Grade with the AO3 skills' : 'AO3 чадвараар дүгнэх'}</h5>
                  <span className="text-sm font-bold text-cyan-800">
                    {total} / {maxTotal}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">
                  {en
                    ? 'This 0–5 scale is a simple classroom guide, not the official Cambridge mark scheme.'
                    : 'Энэ 0–5 оноо нь ангид хэрэглэх энгийн чиглүүлэг бөгөөд Cambridge-ийн албан ёсны үнэлгээ биш.'}
                </p>
                {ao3Skills.map((skill) => (
                  <label key={skill.id} className="flex items-center justify-between gap-3 text-xs text-slate-700">
                    <span>{en ? skill.labelEn : skill.labelMn}</span>
                    <input
                      type="number"
                      min={0}
                      max={MAX_SKILL_SCORE}
                      step={1}
                      value={skillScores[skill.id] ?? 0}
                      onChange={(e) => handleSetScore(skill.id, parseInt(e.target.value, 10) || 0)}
                      className="w-16 px-2 py-1 bg-white border border-slate-300 rounded tabular-nums"
                    />
                  </label>
                ))}
                <label className="block text-xs text-slate-700">
                  <span className="block font-medium mb-1">{en ? 'Teacher remarks' : 'Багшийн тэмдэглэл'}</span>
                  <textarea
                    rows={3}
                    value={selected.teacherRemarks ?? ''}
                    onChange={(e) => updateSelected({ teacherRemarks: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg"
                  />
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={handleSaveGrade}
                    disabled={busy === 'save'}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-60"
                  >
                    {selected.source === 'inbox' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                    <span>
                      {selected.source === 'inbox'
                        ? busy === 'save'
                          ? en ? 'Saving…' : 'Хадгалж байна…'
                          : en ? 'Save grade' : 'Дүн хадгалах'
                        : en ? 'Save grade and download file' : 'Дүн хадгалж файл татах'}
                    </span>
                  </button>
                  {selected.source === 'inbox' && (
                    <button
                      onClick={() => downloadReport(plainEntry(selected, boards))}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{en ? 'Download file for the student' : 'Сурагчид өгөх файл татах'}</span>
                    </button>
                  )}
                </div>
                {selected.status === 'graded' && (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{en ? `Graded: ${selected.gradeScore}` : `Дүгнэсэн: ${selected.gradeScore}`}</span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
