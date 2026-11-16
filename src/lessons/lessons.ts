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

// ---- Helpers for worksheets that follow the same layout: the label next to a box, the ticked rows of a table ----
const labelOf = (doc: Document, id: string) => doc.querySelector(`label[for="${id}"]`)?.textContent?.trim().replace(/^\d+\.\s*/, '') ?? '';
/** The names in the second column of the rows whose «ready» box (r1, r2…) is ticked. */
const readyItems = (doc: Document, count: number) =>
  Array.from({ length: count }, (_, i) => doc.getElementById(`r${i + 1}`) as HTMLInputElement | null)
    .filter((box) => box?.checked)
    .map((box) => box!.closest('tr')?.children[1]?.textContent?.trim() ?? '');
const questionsOf = (doc: Document, count: number) =>
  Array.from({ length: count }, (_, i) => `${i + 1}. ${labelOf(doc, `q${i + 1}`)}\n${or(valueOf(doc, `q${i + 1}`))}`);
const answeredOf = (doc: Document, count: number) => Array.from({ length: count }, (_, i) => valueOf(doc, `q${i + 1}`)).filter(Boolean).length;
const safetyOf = (doc: Document, count: number) =>
  Array.from({ length: count }, (_, i) => `${checked(doc, `s${i + 1}`) ? '☑' : '☐'} ${labelOf(doc, `s${i + 1}`)}`);
const headerLines = (doc: Document) =>
  [
    ['Анги', valueOf(doc, 'cls')],
    ['Дээжийн дугаар', valueOf(doc, 'sample')],
    ['Дээжийн эх үүсвэр', valueOf(doc, 'source')],
  ].filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`);
const yesNo = (doc: Document, id: string) => (checked(doc, id) ? 'тийм' : 'үгүй');
const single = (parameter: string, value: string, unit: string) => ({ parameter, trial1: '', trial2: '', trial3: '', mean: value, unit });

const captureSampling = (doc: Document) => {
  const dateTime = (id: string) => valueOf(doc, id).replace('T', ' ');
  const requirements = Array.from(doc.querySelectorAll('#sumBody tr')).map((tr) => {
    const td = tr.querySelectorAll('td');
    const number = td[0]?.textContent?.trim();
    return `${number ? `${number}. ` : ''}${td[1]?.textContent?.trim()}: ${td[2]?.textContent?.trim()}${td[3]?.textContent?.trim() ? ` — ${td[3].textContent.trim()}` : ''}`;
  });
  const ready = readyItems(doc, 6);
  const summary: [string, string][] = [
    ['Ажлын хуудас', 'Ундны усны дээж авалт'],
    ['Хангасан шаардлага', or(textOf(doc, 'cOk'))],
    ['Хүргэлтийн хугацаа', `${or(textOf(doc, 'cH'))} цаг`],
    ['Хариулсан асуулт', `${answeredOf(doc, 5)} / 5`],
  ];
  const entry: LabNotebookEntry = {
    id: `lesson-water-sampling-${Date.now()}`,
    date: valueOf(doc, 'date') || new Date().toISOString().split('T')[0],
    studentName: valueOf(doc, 'name'),
    experimentTitle: 'Хөгжүүлэх хичээл: Ундны усны дээж авалт',
    practicalId: 'enrichment:water-sampling',
    chapterCode: '',
    aim: doc.querySelector('h2 + p')?.textContent?.trim() ?? '',
    equipmentUsed: `Бэлэн гэж тэмдэглэсэн хэрэгсэл: ${ready.length ? ready.join(', ') : '—'}`,
    measurements: [
      single('Савны багтаамж', valueOf(doc, 'bVol'), 'мл'),
      single('Савыг зайлсан тоо', valueOf(doc, 'rinse'), 'удаа'),
      single('Хүргэлтийн хугацаа', textOf(doc, 'hVal'), 'цаг'),
      single('Хөргөгч савны температур', valueOf(doc, 'cool'), '°C'),
    ],
    observations: [
      ...headerLines(doc),
      `А. Цэг: ${or(valueOf(doc, 'kind'))}, ${or(valueOf(doc, 'point'))} — ${or(valueOf(doc, 'place'))}; цоргыг ${or(valueOf(doc, 'flush'))} мин урсгасан; цаг агаар: ${or(valueOf(doc, 'weather'))}`,
      `Б. Сав: ${or(valueOf(doc, 'bType'))}, ${or(valueOf(doc, 'bVol'))} мл, ${or(valueOf(doc, 'rinse'))} удаа зайлсан; ариутгасан ${yesNo(doc, 'b1')}, агаарын зай ${yesNo(doc, 'b2')}, гар хүргээгүй ${yesNo(doc, 'b3')}`,
      `В. Шошго: ${or(valueOf(doc, 'lN'))} | ${or(valueOf(doc, 'lD'))} | ${or(valueOf(doc, 'lT'))} | ${or(valueOf(doc, 'lK'))} | ${or(valueOf(doc, 'lP'))}; ус нэвтрэхгүй ${yesNo(doc, 'lW')}`,
      `Г. Тээвэрлэлт: ${or(dateTime('tStart'))} → ${or(dateTime('tEnd'))}; ${or(valueOf(doc, 'cool'))} °C; битүүмжилсэн ${yesNo(doc, 'c1')}, нарнаас хамгаалсан ${yesNo(doc, 'c2')}`,
    ].join('\n'),
    calculations: [`Хүргэлтийн хугацаа = ${or(textOf(doc, 'hExpr'))} = ${or(textOf(doc, 'hVal'))} цаг`, '', 'Шаардлагын хураангуй', ...requirements].join('\n'),
    conclusion: `Шаардлагын ${or(textOf(doc, 'cOk'))}-ийг хангасан. Хүргэлтийн хугацаа ${or(textOf(doc, 'cH'))} цаг, хадгалсан температур ${or(textOf(doc, 'cT'))} °C.\n${or(valueOf(doc, 'concl'))}`,
    evaluations: ['Шалгах асуултууд', ...questionsOf(doc, 5), '', 'Аюулгүй ажиллагаа', ...safetyOf(doc, 3)].join('\n'),
    status: 'draft',
  };
  return { entry, summary };
};

const capturePhysical = (doc: Document) => {
  const ready = readyItems(doc, 7);
  const summary: [string, string][] = [
    ['Ажлын хуудас', 'Физик үзүүлэлт, жинлэгдэх бодис'],
    ['Температур', `${or(textOf(doc, 'tVal'))} °C`],
    ['Жинлэгдэх бодис', `${or(textOf(doc, 'sAvg'))} мг/л`],
    ['Хариулсан асуулт', `${answeredOf(doc, 5)} / 5`],
  ];
  const entry: LabNotebookEntry = {
    id: `lesson-water-physical-${Date.now()}`,
    date: valueOf(doc, 'date') || new Date().toISOString().split('T')[0],
    studentName: valueOf(doc, 'name'),
    experimentTitle: 'Хөгжүүлэх хичээл: Ундны усны физик үзүүлэлт ба жинлэгдэх бодис',
    practicalId: 'enrichment:water-physical',
    chapterCode: '',
    aim: doc.querySelector('h2 + p')?.textContent?.trim() ?? '',
    equipmentUsed: `Бэлэн гэж тэмдэглэсэн бодис, багаж: ${ready.length ? ready.join(', ') : '—'}`,
    measurements: [
      { parameter: 'Температур', trial1: valueOf(doc, 'tt1'), trial2: valueOf(doc, 'tt2'), trial3: valueOf(doc, 'tt3'), mean: textOf(doc, 'tavg'), unit: '°C' },
      { parameter: 'Жинлэгдэх бодис, Cₓ', trial1: textOf(doc, 'cx1'), trial2: textOf(doc, 'cx2'), trial3: '', mean: textOf(doc, 'cxavg'), unit: 'мг/л' },
    ],
    observations: [
      ...headerLines(doc),
      `Температур хэмжсэн гүн: ${[1, 2, 3].map((i) => or(valueOf(doc, `td${i}`))).join(', ')} м`,
      `Тунгалагшил (хар суурь): ${or(valueOf(doc, 'tu'))} — ${or(valueOf(doc, 'obsTu'))}`,
      `Өнгө (цагаан суурь): ${or(valueOf(doc, 'cv'))} — ${or(valueOf(doc, 'obsCo'))}`,
      `Өнгө (стандарт): ${or(valueOf(doc, 'co'))} градус, ${or(valueOf(doc, 'coT'))} °C-т — ${or(valueOf(doc, 'coNote'))}`,
      `Үнэр: ${or(valueOf(doc, 'ot'))}, илрэл ${or(valueOf(doc, 'ol'))}`,
    ].join('\n'),
    calculations: [
      `t = ${or(textOf(doc, 'tExpr'))} = ${or(textOf(doc, 'tVal'))} °C`,
      ...[1, 2].map((i) => `${i}-р давталт: m₁ = ${or(valueOf(doc, `m1_${i}`))} мг, m₂ = ${or(valueOf(doc, `m2_${i}`))} мг, V = ${or(valueOf(doc, `v_${i}`))} мл; Cₓ = ${or(textOf(doc, `s${i}Expr`))} = ${or(textOf(doc, `s${i}Val`))} мг/л`),
      `Дундаж Cₓ = ${or(textOf(doc, 'sAvg'))} мг/л`,
    ].join('\n'),
    conclusion: `Стандартын зөвшөөрөх хэмжээ: ${or(valueOf(doc, 'std'))}\n${or(valueOf(doc, 'concl'))}`,
    evaluations: ['Шалгах асуултууд', ...questionsOf(doc, 5), '', 'Аюулгүй ажиллагаа', ...safetyOf(doc, 4)].join('\n'),
    status: 'draft',
  };
  return { entry, summary };
};

const captureChloride = (doc: Document) => {
  const ready = readyItems(doc, 3);
  const trials = [1, 2, 3].map((i) => textOf(doc, `av${i}`));
  const summary: [string, string][] = [
    ['Ажлын хуудас', 'Хлорын ион (Морын арга)'],
    ['Дундаж V(AgNO₃)', `${or(textOf(doc, 'aavg'))} мл`],
    ['Cl⁻', `${or(textOf(doc, 'clVal'))} мг/л`],
    ['Хариулсан асуулт', `${answeredOf(doc, 5)} / 5`],
  ];
  const entry: LabNotebookEntry = {
    id: `lesson-water-chloride-${Date.now()}`,
    date: valueOf(doc, 'date') || new Date().toISOString().split('T')[0],
    studentName: valueOf(doc, 'name'),
    experimentTitle: 'Хөгжүүлэх хичээл: Ундны усны хлорын ионыг тодорхойлох (Морын арга)',
    practicalId: 'enrichment:water-chloride',
    chapterCode: '',
    aim: doc.querySelector('h2 + p')?.textContent?.trim() ?? '',
    equipmentUsed: `Бэлэн гэж тэмдэглэсэн бодис: ${ready.length ? ready.join(', ') : '—'}`,
    measurements: [{ parameter: 'V(AgNO₃), зарцуулсан', trial1: trials[0], trial2: trials[1], trial3: trials[2], mean: textOf(doc, 'aavg'), unit: 'мл' }],
    observations: [
      ...headerLines(doc),
      `Индикатор нэмсний дараах өнгө: ${or(valueOf(doc, 'obs1'))}`,
      `Титрлэлтийн явцад үүссэн тунадас: ${or(valueOf(doc, 'obs2'))}`,
      `Төгсгөлийн цэгийн өнгө: ${or(valueOf(doc, 'obs3'))}`,
      ...[1, 2, 3].map((i) => `${i}-р давталт: ${or(valueOf(doc, `as${i}`))} → ${or(valueOf(doc, `ae${i}`))} мл`),
    ].join('\n'),
    calculations: [
      `Уусмал бэлтгэх: C = ${or(valueOf(doc, 'pC'))} М, V = ${or(valueOf(doc, 'pV'))} мл, сурагчийн бодсон m = ${or(valueOf(doc, 'pM'))} г${textOf(doc, 'msgP') ? ` (${textOf(doc, 'msgP')})` : ''}`,
      `C(AgNO₃) = ${or(valueOf(doc, 'C'))} М, V(дээж) = ${or(valueOf(doc, 'V'))} мл`,
      `C(Cl⁻) = ${or(textOf(doc, 'clExpr'))} = ${or(textOf(doc, 'clVal'))} мг/л`,
    ].join('\n'),
    conclusion: `Стандартын зөвшөөрөх дээд хэмжээ: ${or(valueOf(doc, 'std'))} мг/л → ${or(textOf(doc, 'sCmp'))}\n${or(valueOf(doc, 'concl'))}`,
    evaluations: ['Шалгах асуултууд', ...questionsOf(doc, 5), '', 'Аюулгүй ажиллагаа', ...safetyOf(doc, 4)].join('\n'),
    status: 'draft',
  };
  return { entry, summary };
};

// In the order of the work: the sample is taken, then its physical properties are measured, then it is titrated.
export const enrichmentLessons: EnrichmentLesson[] = [
  {
    id: 'water-sampling',
    title: { en: 'Taking drinking water samples', mn: 'Ундны усны дээж авалт' },
    language: 'mn',
    load: () => import('./water-sampling.html?raw').then((m) => m.default),
    capture: captureSampling,
  },
  {
    id: 'water-physical',
    title: { en: 'Physical properties and suspended solids of drinking water', mn: 'Ундны усны физик үзүүлэлт ба жинлэгдэх бодис' },
    language: 'mn',
    load: () => import('./water-physical.html?raw').then((m) => m.default),
    capture: capturePhysical,
  },
  {
    id: 'water-chloride',
    title: { en: 'Chloride in drinking water (Mohr titration)', mn: 'Ундны усны хлорын ионыг тодорхойлох (Морын арга)' },
    language: 'mn',
    load: () => import('./water-chloride.html?raw').then((m) => m.default),
    capture: captureChloride,
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
