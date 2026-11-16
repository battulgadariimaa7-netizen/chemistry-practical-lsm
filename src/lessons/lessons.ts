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

// The drinking water sampling lesson is interactive: its activities mark themselves, so what is sent is how far
// the student got and how they did, read from the page as it stands.
const captureSampling = (doc: Document) => {
  const all = (selector: string) => [...doc.querySelectorAll<HTMLElement>(selector)];
  const result = (id: string) => {
    const el = doc.getElementById(id);
    if (!el || !/\b(ok|bad)\b/.test(el.className)) return 'хийгээгүй';
    return `${el.classList.contains('ok') ? 'зөв' : 'буруу'}: ${el.textContent?.trim() ?? ''}`;
  };
  const sections = all('#nav button');
  const visited = sections.filter((b) => b.classList.contains('done')).length;
  const typeRows = all('#typeGame .tfrow');
  const typeAnswered = typeRows.filter((r) => /[✅❌]/.test(r.textContent ?? '')).length;
  const typeRight = typeRows.filter((r) => /✅/.test(r.textContent ?? '')).length;
  const stepsSeen = all('#stepper button.seen').length;
  const stepsTotal = all('#stepper button').length;
  const prepTicked = all('#stList .pc.on .pt').map((e) => e.textContent?.trim() ?? '');
  const tfRows = all('#tf .tfrow');
  const tfAnswered = tfRows.filter((r) => r.classList.contains('answered'));
  const tfRight = tfAnswered.filter((r) => r.querySelector('.why')?.textContent?.trim().startsWith('✅')).length;
  const finalScore = doc.querySelector('#quiz .score')?.textContent?.trim() ?? '';
  const quizProgress = all('#quiz .pill').map((e) => e.textContent?.trim()).join(', ');
  const [right, total] = finalScore.split('/').map(Number);
  const quizText = finalScore ? `${finalScore}${total ? ` (${Math.round((right / total) * 100)}%)` : ''}` : `дуусаагүй${quizProgress ? ` (${quizProgress})` : ''}`;
  const label = [
    ['Дээжийн дугаар', valueOf(doc, 'lN')],
    ['Огноо', valueOf(doc, 'lD')],
    ['Цаг', valueOf(doc, 'lT')],
    ['Дээжийн төрөл', valueOf(doc, 'lK')],
    ['Хариуцсан хүн', valueOf(doc, 'lP')],
    ['Шошгоны төрөл', ({ w: 'Ус нэвтрэхгүй шошго', p: 'Энгийн цаас' } as Record<string, string>)[valueOf(doc, 'lM')] ?? ''],
  ].map(([k, v]) => `${k}: ${or(v)}`);

  const summary: [string, string][] = [
    ['Хичээл', 'Ундны усны дээж авалт'],
    ['Эцсийн шалгалт', quizText],
    ['Үзсэн хэсэг', `${visited} / ${sections.length}`],
    ['Үнэн / худал', `${tfRight} / ${tfRows.length} зөв`],
  ];
  const entry: LabNotebookEntry = {
    id: `lesson-water-sampling-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    studentName: '',
    experimentTitle: 'Хөгжүүлэх хичээл: Ундны усны дээж авалт',
    practicalId: 'enrichment:water-sampling',
    chapterCode: '',
    aim: doc.querySelector('section .lead')?.textContent?.trim() ?? '',
    equipmentUsed: `Бэлтгэлийн шалгах хуудсанд бэлэн гэж тэмдэглэсэн: ${prepTicked.length ? prepTicked.join(', ') : '—'}`,
    measurements: [],
    observations: [
      `Үзсэн хэсэг: ${visited} / ${sections.length}`,
      `Бодоод үзээрэй (гар хүрэх): ${result('thinkFb')}`,
      `Дээжийн төрөл тааруулах: ${typeRight} / ${typeRows.length} зөв (${typeAnswered} хариулсан)`,
      `Дээж авах алхам: ${stepsSeen} / ${stepsTotal} үзсэн`,
      `Сав сонгох: ${result('contFb')}`,
      `Алхмуудыг дараалуулах: ${result('sortFb')}`,
      `Шошго бөглөх: ${result('lblFb')}`,
      `Үнэн үү, худал уу: ${tfRight} / ${tfRows.length} зөв (${tfAnswered.length} хариулсан)`,
    ].join('\n'),
    calculations: [
      'Тээвэрлэлтийн симуляцын сүүлийн байдал:',
      `Температур ${or(textOf(doc, 'tV'))}°C, хугацаа ${or(textOf(doc, 'hV'))} цаг — ${or(textOf(doc, 'simStatus'))}`,
    ].join('\n'),
    conclusion: `Эцсийн шалгалт: ${quizText}`,
    evaluations: ['Бөглөсөн шошго', ...label].join('\n'),
    status: 'draft',
  };
  return { entry, summary };
};

// In the order of the work: the sample is taken before it is analysed.
export const enrichmentLessons: EnrichmentLesson[] = [
  {
    id: 'water-sampling',
    title: {
      en: 'Taking drinking water samples',
      mn: 'Ундны усны дээж авалт',
    },
    language: 'mn',
    load: () => import('./water-sampling.html?raw').then((m) => m.default),
    capture: captureSampling,
  },
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
