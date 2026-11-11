// Every exam paper in the Exam Practice tab. To add one, put its HTML file in this folder
// (text written as @@English|||Mongolian@@) and add a line below; the list orders itself by year.
// Each paper is loaded only when it is opened.
export type ExamSeries = 'F/M' | 'M/J' | 'O/N';

export interface ExamPaper {
  id: string;
  year: number;
  series: ExamSeries;
  /** Syllabus and component, as printed on the paper. */
  code: string;
  load: () => Promise<string>;
}

const papers: ExamPaper[] = [
  { id: '9701-35-mj26', year: 2026, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj26.html?raw').then((m) => m.default) },
  { id: '9701-35-on25', year: 2025, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on25.html?raw').then((m) => m.default) },
  { id: '9701-35-mj25', year: 2025, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj25.html?raw').then((m) => m.default) },
  { id: '9701-35-on24', year: 2024, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on24.html?raw').then((m) => m.default) },
  { id: '9701-35-mj24', year: 2024, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj24.html?raw').then((m) => m.default) },
  { id: '9701-35-on23', year: 2023, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on23.html?raw').then((m) => m.default) },
  { id: '9701-35-mj23', year: 2023, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj23.html?raw').then((m) => m.default) },
  { id: '9701-35-on22', year: 2022, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on22.html?raw').then((m) => m.default) },
  { id: '9701-35-mj22', year: 2022, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj22.html?raw').then((m) => m.default) },
  { id: '9701-35-on21', year: 2021, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on21.html?raw').then((m) => m.default) },
  { id: '9701-35-mj21', year: 2021, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj21.html?raw').then((m) => m.default) },
  { id: '9701-35-on20', year: 2020, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on20.html?raw').then((m) => m.default) },
  { id: '9701-35-mj20', year: 2020, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj20.html?raw').then((m) => m.default) },
  { id: '9701-35-on19', year: 2019, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on19.html?raw').then((m) => m.default) },
  { id: '9701-35-mj19', year: 2019, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj19.html?raw').then((m) => m.default) },
  { id: '9701-35-on18', year: 2018, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on18.html?raw').then((m) => m.default) },
  { id: '9701-35-mj18', year: 2018, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj18.html?raw').then((m) => m.default) },
  { id: '9701-35-on17', year: 2017, series: 'O/N', code: '9701/35', load: () => import('./9701-35-on17.html?raw').then((m) => m.default) },
  { id: '9701-35-mj17', year: 2017, series: 'M/J', code: '9701/35', load: () => import('./9701-35-mj17.html?raw').then((m) => m.default) },
];

// February/March comes first in a year, then May/June, then October/November.
const seriesOrder: Record<ExamSeries, number> = { 'F/M': 1, 'M/J': 2, 'O/N': 3 };

/** Newest first: by year, then by exam series within the year, then by paper code. */
export const examPapers = [...papers].sort(
  (a, b) => b.year - a.year || seriesOrder[b.series] - seriesOrder[a.series] || a.code.localeCompare(b.code),
);

const seriesName: Record<ExamSeries, { en: string; mn: string }> = {
  'F/M': { en: 'February/March', mn: '2/3-р сар' },
  'M/J': { en: 'May/June', mn: '5/6-р сар' },
  'O/N': { en: 'October/November', mn: '10/11-р сар' },
};

export const paperLabel = (paper: ExamPaper, language: 'en' | 'mn') =>
  language === 'en'
    ? `${paper.code}, ${seriesName[paper.series].en} ${paper.year}`
    : `${paper.code}, ${paper.year} оны ${seriesName[paper.series].mn}`;
