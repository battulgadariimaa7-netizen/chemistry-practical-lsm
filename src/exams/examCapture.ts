// Turns a student's work in an exam paper into a Lab Notebook entry: the answers and tables of each
// question, the marks of each part, and the whiteboard pages as pictures. The paper runs in a frame of
// the same site, so its page and its saved data can be read directly.
import type { Language, LabNotebookEntry } from '../types/chemistry';
import type { ExamPaper } from './papers';
import { paperLabel } from './papers';

interface Stroke { tool: string; color: string; size: number; pts: [number, number][] }
interface PaperData { score: Record<string, number>; parts: [string, string, number][]; wb: [string, Stroke[]][] }

const clean = (text: string | null | undefined) => (text ?? '').replace(/\s+/g, ' ').trim();

/** What the student typed or chose in a field; empty when nothing was entered.
 *  The fields belong to the frame's own page, so they are told apart by tag name, not by instanceof. */
const valueOf = (el: Element) => {
  const tag = el.tagName;
  if (tag === 'SELECT') { const s = el as HTMLSelectElement; return s.value ? clean(s.selectedOptions[0]?.textContent) : ''; }
  if (tag === 'INPUT') { const i = el as HTMLInputElement; return ['checkbox', 'radio'].includes(i.type) ? (i.checked ? '✓' : '') : clean(i.value); }
  if (tag === 'TEXTAREA') return (el as HTMLTextAreaElement).value.trim();
  return '';
};

/** The words that go with a field: its label, or the text just before it. */
const labelOf = (doc: Document, el: Element) => {
  const id = el.getAttribute('id');
  const forLabel = id ? doc.querySelector(`label[for="${CSS.escape(id)}"]`) : null;
  if (forLabel) return clean(forLabel.textContent);
  const wrapping = el.closest('label');
  if (wrapping) return clean(wrapping.textContent);
  let prev = el.previousSibling;
  while (prev && !clean(prev.textContent)) prev = prev.previousSibling;
  if (prev) return clean(prev.textContent).slice(-90);
  return clean(el.parentElement?.textContent).slice(0, 90) || clean(el.getAttribute('placeholder'));
};

const fields = 'input:not([type=button]):not([type=submit]):not([type=hidden]):not([type=file]), select, textarea';

/** Controls of the simulations, graph tools and whiteboard, and show/hide switches, are not answers. */
const isControl = (field: Element) =>
  !!field.closest('.grid-sim, .gtools, #wb') ||
  /^(ck_|mx_|cr_sel|sc_which|q1col)/.test(field.id) ||
  (field.tagName === 'INPUT' && (field as HTMLInputElement).type === 'checkbox');

/** The tables the student filled in and the answers outside them, question by question. */
const answersOf = (doc: Document) =>
  [...doc.querySelectorAll<HTMLElement>('section.tab[id^="tab-q"]')].map((section) => {
    const lines: string[] = [];
    const title = clean(section.querySelector('h2')?.textContent) || section.id;
    for (const table of section.querySelectorAll('table')) {
      if (!table.querySelector(fields)) continue;
      const rows = [...table.querySelectorAll('tr')].map((tr) =>
        [...tr.querySelectorAll('th, td')].map((cell) => {
          const field = cell.querySelector(fields);
          return field ? valueOf(field) : clean(cell.textContent);
        }),
      );
      // Leave out a table nobody wrote in.
      if (![...table.querySelectorAll(fields)].some((f) => valueOf(f))) continue;
      lines.push(...rows.filter((r) => r.some(Boolean)).map((r) => r.join(' | ')), '');
    }
    for (const field of section.querySelectorAll(fields)) {
      if (field.closest('table') || isControl(field)) continue;
      const value = valueOf(field);
      if (value) lines.push(`${labelOf(doc, field)}: ${value}`);
    }
    return { title, text: lines.join('\n').trim() };
  });

/** Draws one whiteboard page the way the paper does, on white, and returns it as a JPEG. */
const drawPage = (strokes: Stroke[]) => {
  const points = strokes.flatMap((s) => s.pts);
  if (!points.length) return null;
  const pad = 24;
  const minX = Math.max(0, Math.min(...points.map((p) => p[0])) - pad);
  const minY = Math.max(0, Math.min(...points.map((p) => p[1])) - pad);
  const width = Math.max(...points.map((p) => p[0])) - minX + pad;
  const height = Math.max(...points.map((p) => p[1])) - minY + pad;
  const scale = Math.min(1.5, 1400 / width);
  const ink = document.createElement('canvas');
  ink.width = Math.ceil(width * scale);
  ink.height = Math.ceil(height * scale);
  const c = ink.getContext('2d');
  if (!c) return null;
  c.setTransform(scale, 0, 0, scale, -minX * scale, -minY * scale);
  for (const st of strokes) {
    if (!st.pts.length) continue;
    c.save();
    c.lineCap = 'round';
    c.lineJoin = 'round';
    if (st.tool === 'eraser') { c.globalCompositeOperation = 'destination-out'; c.strokeStyle = '#000'; c.lineWidth = st.size * 5; }
    else if (st.tool === 'hl') { c.globalAlpha = 0.3; c.strokeStyle = st.color; c.lineWidth = st.size * 5; }
    else { c.strokeStyle = st.color; c.lineWidth = st.size; }
    c.beginPath();
    c.moveTo(st.pts[0][0], st.pts[0][1]);
    if (st.tool === 'line') { const p = st.pts[st.pts.length - 1]; c.lineTo(p[0], p[1]); }
    else {
      for (let i = 1; i < st.pts.length; i++) { const a = st.pts[i - 1], b = st.pts[i]; c.quadraticCurveTo(a[0], a[1], (a[0] + b[0]) / 2, (a[1] + b[1]) / 2); }
      if (st.pts.length === 1) c.lineTo(st.pts[0][0] + 0.1, st.pts[0][1]);
    }
    c.stroke();
    c.restore();
  }
  // The eraser leaves holes in the ink, so the ink goes onto a white page last.
  const page = document.createElement('canvas');
  page.width = ink.width;
  page.height = ink.height;
  const pc = page.getContext('2d');
  if (!pc) return null;
  pc.fillStyle = '#ffffff';
  pc.fillRect(0, 0, page.width, page.height);
  pc.drawImage(ink, 0, 0);
  return page.toDataURL('image/jpeg', 0.8);
};

/** The paper keeps its marks and whiteboard in this site's storage under its own prefix, and lists its
 *  parts in its script. Both are read from outside, because the paper's script keeps its names private. */
const savedData = (doc: Document): PaperData => {
  const script = doc.querySelector('script')?.textContent ?? '';
  const read = <T,>(key: string, fallback: T): T => {
    try {
      const value = localStorage.getItem(key);
      return value == null ? fallback : (JSON.parse(value) as T);
    } catch {
      return fallback;
    }
  };
  const cfgId = /const CFG=\{"id":\s*"([^"]+)"/.exec(script)?.[1];
  const prefix = /"(chem9701_35[a-z]\d{2}_)"/.exec(script)?.[1] ?? (cfgId ? `chem9701_35${cfgId}_` : '');
  let parts: [string, string, number][] = [];
  try {
    const listed = /"parts":\s*(\[\[[\s\S]*?\]\])\}/.exec(script)?.[1] ?? /const PARTS=(\[\[[\s\S]*?\]\]);/.exec(script)?.[1];
    if (listed) parts = JSON.parse(listed);
  } catch {
    // Without the list of parts the answers still go across.
  }
  if (!prefix) return { score: {}, parts, wb: [] };
  return {
    score: read<Record<string, number>>(`${prefix}score`, {}),
    parts,
    wb: ['Q1', 'Q2', 'Q3', 'free'].map((page) => [page, read<Stroke[]>(`${prefix}_wb_${page}`, [])]),
  };
};

const pageName = (page: string, language: Language) =>
  page === 'free' ? (language === 'en' ? 'Free page' : 'Чөлөөт хуудас') : language === 'en' ? `Question ${page.slice(1)}` : `${page.slice(1)}-р асуулт`;

export const captureExam = (frame: HTMLIFrameElement, paper: ExamPaper, language: Language): LabNotebookEntry | null => {
  const doc = frame.contentDocument;
  if (!doc) return null;
  const data = savedData(doc);
  const en = language === 'en';
  const done = data.parts.filter(([key]) => typeof data.score[key] === 'number');
  const got = done.reduce((sum, [key]) => sum + data.score[key], 0);
  const max = data.parts.reduce((sum, [, , m]) => sum + m, 0);
  const marks = data.parts.map(([key, label, m]) => `${label}: ${typeof data.score[key] === 'number' ? data.score[key] : '—'} / ${m}`).join('\n');
  const answers = answersOf(doc);
  const label = paperLabel(paper, language);
  const whiteboardImages = data.wb
    .map(([page, strokes]) => ({ page: pageName(page, language), image: drawPage(strokes) }))
    .filter((p): p is { page: string; image: string } => !!p.image);

  return {
    id: `exam-${paper.id}-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    studentName: '',
    experimentTitle: en ? `Exam practice: ${label}` : `Шалгалтын дадлага: ${label}`,
    practicalId: `exam:${paper.id}`,
    chapterCode: '',
    aim: en
      ? `Practice of the Cambridge ${label} practical exam in the simulation.`
      : `Cambridge ${label} практик шалгалтыг симуляцид дадлагажсан.`,
    equipmentUsed: en ? 'Exam Practice simulation' : 'Шалгалтын дадлагын симуляци',
    measurements: [],
    observations: answers.map((a) => `${a.title}\n${a.text || (en ? '(nothing written)' : '(юу ч бичээгүй)')}`).join('\n\n'),
    calculations: '',
    conclusion: `${en ? 'Marks' : 'Оноо'}: ${got} / ${max} (${en ? `${done.length} of ${data.parts.length} parts checked` : `${data.parts.length}-аас ${done.length} хэсгийг шалгасан`})\n${marks}`,
    evaluations: '',
    status: 'draft',
    examPaperId: paper.id,
    examScore: `${got} / ${max}`,
    whiteboardImages,
  };
};
