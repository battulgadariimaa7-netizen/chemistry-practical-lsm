import { getClient } from './reportServer';

// The answer key to the Enrichment worksheets lives in the staff-only table "answer_key" of the school's Supabase
// project, not in the site's code, so only a signed-in teacher or lab staff account can read it. The answers are
// kept in supabase/private/answer-key.json; answer-key-sql.mjs in that folder loads a changed file into the table.

export interface KeyAnswer {
  question: string;
  /** What a complete answer must contain: the marking points. */
  points: string[];
  answer: string;
  /** Equations or working, shown in a separate block. */
  working?: string[];
}

export interface LessonKey {
  lessonId: string;
  answers: KeyAnswer[];
}

/** The answer key, worksheet by worksheet in lesson order. Throws when it cannot be read. */
export const loadAnswerKey = async (): Promise<LessonKey[]> => {
  const { data, error } = await (await getClient()).from('answer_key').select('lesson_id, answers').order('position');
  if (error) throw error;
  return (data ?? []).map((row) => ({ lessonId: row.lesson_id as string, answers: row.answers as KeyAnswer[] }));
};
