import { LabNotebookEntry } from '../types/chemistry';

// Enrichment lessons («Хөгжүүлэх хичээл»): worksheets beyond the Cambridge practicals. Each worksheet is a complete
// page with its own script, shown in a frame, and loaded only when it is opened. To add one, put its HTML file in
// this folder and add an entry below; `capture` reads the student's work from the open worksheet for the teacher.

export interface EnrichmentLesson {
  id: string;
  title: { en: string; mn: string };
  /** The language the worksheet itself is written in. */
  language: 'en' | 'mn';
  load: () => Promise<string>;
  /** The student's work as a report, and a few lines (label, value) shown before it is sent. */
  capture: (doc: Document) => { entry: LabNotebookEntry; summary: [string, string][] };
}

const valueOf = (doc: Document, id: string) => {
  const el = doc.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
  return el?.value?.trim() ?? '';
};
const textOf = (doc: Document, id: string) => {
  const text = doc.getElementById(id)?.textContent?.trim() ?? '';
  return text === '—' ? '' : text;
};
const checked = (doc: Document, id: string) => !!(doc.getElementById(id) as HTMLInputElement | null)?.checked;
const or = (text: string) => text || '—';

const hardnessQuestions = [
  'Нийт хатуулгийг тодорхойлохдоо яагаад pH ≈ 10-д ажилладаг вэ?',
  'Кальци тодорхойлохдоо NaOH нэмэхэд магни ямар болдог вэ?',
  'ЭХТ болон мурексидийн өнгө эквивалент цэгт яагаад өөрчлөгддөг вэ?',
  'Хатуулгийн томьёонд «2» коэффициент яагаад орсон бэ?',
  'Магнийн агуулалтыг тусад нь титрлэхгүйгээр хэрхэн олдог вэ?',
];
const hardnessReagents = ['0.01 М Трилон Б', 'Буфер (pH 10)', '2 М NaOH', 'Хар эриохром Т (ЭХТ)', 'Мурексид'];
const hardnessSafety = [
  'Аммиак, NaOH-тай бээлий, нүдний шилтэй ажилласан.',
  'Аммиакийн уусмалтай сорох шүүгээнд ажилласан.',
  'Титрлэлтийг 2–3 удаа давтаж, дунджийг авсан (давталтын зөрүү ≤ 0.1 мл).',
];

const captureHardness = (doc: Document) => {
  const volumes = (prefix: 'a' | 'b', label: string) => ({
    parameter: label,
    trial1: textOf(doc, `${prefix}v1`),
    trial2: textOf(doc, `${prefix}v2`),
    trial3: textOf(doc, `${prefix}v3`),
    mean: textOf(doc, `${prefix}avg`),
    unit: 'мл',
  });
  const ready = hardnessReagents.filter((_, i) => checked(doc, `r${i + 1}`));
  const answered = hardnessQuestions.map((q, i) => `${i + 1}. ${q}\n${or(valueOf(doc, `q${i + 1}`))}`);
  const safety = hardnessSafety.map((s, i) => `${checked(doc, `s${i + 1}`) ? '☑' : '☐'} ${s}`);
  const extra = [
    ['Анги', valueOf(doc, 'cls')],
    ['Дээжийн дугаар', valueOf(doc, 'sample')],
    ['Дээжийн эх үүсвэр', valueOf(doc, 'source')],
  ].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`);
  const answeredCount = hardnessQuestions.filter((_, i) => valueOf(doc, `q${i + 1}`)).length;
  const summary: [string, string][] = [
    ['Ажлын хуудас', 'Усны хатуулаг, Ca, Mg'],
    ['Нийт хатуулаг', `${or(textOf(doc, 'sH'))} мг-экв/л`],
    ['Ca²⁺ / Mg²⁺', `${or(textOf(doc, 'sCa'))} / ${or(textOf(doc, 'sMg'))} мг/л`],
    ['Хариулсан асуулт', `${answeredCount} / ${hardnessQuestions.length}`],
  ];
  const entry: LabNotebookEntry = {
    id: `lesson-water-hardness-${Date.now()}`,
    date: valueOf(doc, 'date') || new Date().toISOString().split('T')[0],
    studentName: valueOf(doc, 'name'),
    experimentTitle: 'Хөгжүүлэх хичээл: Ундны усны хатуулаг, кальци, магнийн титрийн шинжилгээ',
    practicalId: 'enrichment:water-hardness',
    chapterCode: '',
    aim: doc.querySelector('h2 + p')?.textContent?.trim() ?? '',
    equipmentUsed: `Бэлэн гэж тэмдэглэсэн бодис: ${ready.length ? ready.join(', ') : '—'}`,
    measurements: [volumes('a', 'V₁: нийт хатуулаг (ЭХТ, pH ≈ 10)'), volumes('b', 'V₂: кальци (мурексид, pH 12–13)')],
    observations: [
      ...extra,
      `А. Нийт хатуулаг: ${or(valueOf(doc, 'obsA1'))} → ${or(valueOf(doc, 'obsA2'))}`,
      `Б. Кальци: ${or(valueOf(doc, 'obsB1'))} → ${or(valueOf(doc, 'obsB2'))}`,
    ].join('\n'),
    calculations: [
      `C (Трилон Б) = ${or(valueOf(doc, 'C'))} М, V (дээж) = ${or(valueOf(doc, 'V'))} мл`,
      `Нийт хатуулаг = ${or(textOf(doc, 'sH'))} мг-экв/л`,
      `Ca²⁺ = ${or(textOf(doc, 'sCa'))} мг/л`,
      `Mg²⁺ = ${or(textOf(doc, 'sMg'))} мг/л`,
    ].join('\n'),
    conclusion: `Стандартын зөвшөөрөх хэмжээ: ${or(valueOf(doc, 'std'))}\n${or(valueOf(doc, 'concl'))}`,
    evaluations: [`Шалгах асуултууд`, ...answered, '', 'Аюулгүй ажиллагаа', ...safety].join('\n'),
    status: 'draft',
  };
  return { entry, summary };
};

export const enrichmentLessons: EnrichmentLesson[] = [
  {
    id: 'water-hardness',
    title: {
      en: 'Hardness, calcium and magnesium in drinking water (EDTA titration)',
      mn: 'Ундны усны хатуулаг, кальци, магнийн титрийн шинжилгээ',
    },
    language: 'mn',
    load: () => import('./water-hardness.html?raw').then((m) => m.default),
    capture: captureHardness,
  },
];
