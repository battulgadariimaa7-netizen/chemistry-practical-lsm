import { LabNotebookEntry } from '../types/chemistry';

// Reports can go straight to the teacher's own Google Sheet, through a small Google Apps Script web app
// that the teacher sets up (src/reportServer/Code.gs). The web app address is kept in each browser:
// the teacher saves it in the Staff Portal and shares a link that saves it on the students' devices.

const SERVER_KEY = 'chem_lab_report_server';
const TEACHER_KEY = 'chem_lab_report_teacher_key';
const LINK_PARAM = 'reports';

/** Only a Google Apps Script web app is accepted (and a local test server while developing). */
export const isValidServerUrl = (url: string) =>
  /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]{20,}\/exec$/.test(url) ||
  (import.meta.env.DEV && /^http:\/\/localhost:\d+\/exec$/.test(url));

const readStore = (key: string) => {
  try {
    return localStorage.getItem(key) ?? '';
  } catch {
    return '';
  }
};
const writeStore = (key: string, value: string) => {
  try {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    // Storage blocked: the connection lasts only until the page is closed.
  }
};

export const getServerUrl = () => {
  const url = readStore(SERVER_KEY);
  return isValidServerUrl(url) ? url : '';
};
export const setServerUrl = (url: string) => writeStore(SERVER_KEY, url.trim());
export const getTeacherKey = () => readStore(TEACHER_KEY);
export const setTeacherKey = (key: string) => writeStore(TEACHER_KEY, key.trim());

/** The link a teacher shares with students: opening it once connects their device to the Sheet. */
export const studentLink = (url: string) => `${location.origin}${location.pathname}?${LINK_PARAM}=${encodeURIComponent(url)}`;

/** Called when the site opens: saves the address from a shared link, then tidies the address bar. */
export const adoptServerFromLink = () => {
  try {
    const params = new URLSearchParams(location.search);
    const url = params.get(LINK_PARAM);
    if (url === null) return false;
    const ok = isValidServerUrl(url);
    if (ok) setServerUrl(url);
    params.delete(LINK_PARAM);
    const rest = params.toString();
    history.replaceState(null, '', `${location.pathname}${rest ? `?${rest}` : ''}${location.hash}`);
    return ok;
  } catch {
    return false;
  }
};

type Reply = { ok: boolean; error?: string; reports?: (LabNotebookEntry & { pictureCount?: number; received?: string })[]; report?: LabNotebookEntry };

// A plain-text body keeps the request simple, so Google's server answers it without a separate check.
const post = async (url: string, body: unknown): Promise<Reply> => {
  const res = await fetch(url, { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
  return res.json();
};
const get = async (url: string, params: Record<string, string>): Promise<Reply> => {
  const res = await fetch(`${url}?${new URLSearchParams(params)}`);
  return res.json();
};

export const sendReport = (url: string, entry: LabNotebookEntry) => post(url, { type: 'chemistry-practical-report', version: 1, entry });
export const listReports = (url: string, key: string) => get(url, { action: 'list', key });
export const getReport = (url: string, key: string, id: string) => get(url, { action: 'get', key, id });
export const saveGrade = (url: string, key: string, entry: LabNotebookEntry) =>
  post(url, { action: 'grade', key, id: entry.id, gradeScore: entry.gradeScore, teacherRemarks: entry.teacherRemarks, skillScores: entry.skillScores });
