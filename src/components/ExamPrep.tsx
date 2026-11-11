import React, { useEffect, useState } from 'react';
import { Language, UserRole } from '../types/chemistry';
import { examPapers, paperLabel } from '../exams/papers';
import {
  Bi,
  PaperPrepSpec,
  PrepMaterial,
  PrepUnit,
  apparatusNames,
  benchDefaults,
  benchHowNaoh,
  extraNames,
  findPaperPrep,
  paperPreps,
} from '../exams/examPrep';
import { HazardCode, findRecipe, hazardCodeGhs, todayText } from '../data/solutionRecipes';
import { getGhsName } from '../data/labLabels';
import { useStoredState } from '../hooks/useStoredState';
import { ChemText } from './ChemText';
import { StaffCard } from './StaffCard';
import { GhsPictogram } from './art/GhsPictogram';
import { BellRing, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, Lock, Printer, Search, Send, ShieldCheck, TestTubes } from 'lucide-react';

// ---- Finding the same and similar solutions across all the papers ----
interface Found { paperId: string; material: PrepMaterial }
const allMaterials: Found[] = paperPreps.flatMap((spec) => spec.materials.map((material) => ({ paperId: spec.paperId, material })));
/** Lower case, ordinary digits, no spaces or punctuation, so «KMnO₄», «kmno4» and «KMnO 4» match. */
const normalise = (text: string) =>
  text.toLowerCase().replace(/[₀-₉]/g, (c) => String(c.charCodeAt(0) - 0x2080)).replace(/[\s·.,()\-–:;«»]/g, '');
const searchText = new Map(allMaterials.map((f) => [f, normalise([f.material.label, f.material.identity.en, f.material.identity.mn, f.material.how.en].join(' '))]));
const benchText = Object.values(benchDefaults).map((b) => normalise([b.label, b.identity.en, b.identity.mn].join(' ')));
/** Materials in other papers with exactly the same description: the same solution or substance. */
const sameElsewhere = (paperId: string, material: PrepMaterial) =>
  material.identity.en === 'distilled water' ? [] : allMaterials.filter((f) => f.paperId !== paperId && f.material.identity.en === material.identity.en);
const shortPaper = (paperId: string) => {
  const p = examPapers.find((item) => item.id === paperId);
  return p ? `${p.series} ${p.year}` : paperId;
};

// The lab technician gets the solutions, materials and apparatus of an exam paper ready, following its
// Confidential Instructions, and the teacher sees how far it has got. Saved in this browser only.

type ItemStatus = 'todo' | 'doing' | 'ready';

interface ExamPrepState {
  candidates: number;
  examDate: string;
  preparedBy: string;
  /** Materials ("m:fa1") and bench reagents ("b:hcl"). */
  items: Record<string, { status: ItemStatus; on?: string }>;
  /** Apparatus ("a:burette50"), shared items ("x:litmus") and final checks ("c:labels"). */
  ticks: Record<string, boolean>;
  acknowledgedOn?: string;
}

const blankState = (): ExamPrepState => ({ candidates: 12, examDate: '', preparedBy: '', items: {}, ticks: {} });

interface BenchRow { key: string; label: string; amount: number; identity: Bi; how?: Bi; recipe?: string; hazards: HazardCode[] }

const benchRows = (spec: PaperPrepSpec): BenchRow[] =>
  (Object.keys(benchDefaults) as (keyof typeof benchDefaults)[]).flatMap((key) => {
    const change = spec.bench?.find((b) => b.key === key);
    if (change?.omit) return [];
    const base = benchDefaults[key];
    const identity = change?.identity ?? base.identity;
    // Sodium hydroxide at 2.0 mol/dm³ has no standard recipe in the app, so its preparation is given here.
    const how = key === 'naoh' && !change?.identity ? benchHowNaoh : undefined;
    const recipe = key === 'naoh' && change?.identity ? 'aqueous_sodium_hydroxide' : base.recipe;
    return [{ key, label: base.label, amount: change?.amount ?? 10, identity, how, recipe, hazards: base.hazards }];
  });

const finalChecks = (spec: PaperPrepSpec): { key: string; text: Bi }[] => [
  { key: 'labels', text: { en: 'Every container is labelled exactly as in the label column: FA codes, never the identities.', mn: 'Сав бүрийг зөвхөн «label» баганад заасан нэрээр шошголсон: FA код, бодисын нэргүй.' } },
  { key: 'excess', text: { en: `At least ${spec.excess}% extra of every material is ready for spills and requests.`, mn: `Материал бүрийн дор хаяж ${spec.excess}% нөөц асгарах, нэмж хүсэхэд бэлэн.` } },
  { key: 'mixed', text: { en: 'Every solution is thoroughly mixed, and each batch is noted for the supervisor’s report.', mn: 'Уусмал бүрийг сайтар хольсон, багц бүрийг хянагчийн тайланд тэмдэглэнэ.' } },
  { key: 'supervisorSet', text: { en: 'A complete set of materials and apparatus is set aside for the supervisor’s experiments.', mn: 'Хянагчийн туршилтад зориулсан материал, багажийн бүрэн иж бүрдэл тусад нь бэлэн.' } },
  { key: 'spareCopy', text: { en: 'A spare question paper is ready for the supervisor’s results.', mn: 'Хянагчийн үр дүнд зориулсан нөөц асуултын хуудас бэлэн.' } },
  { key: 'spares', text: { en: 'Spare apparatus, especially test-tubes, is available.', mn: 'Нөөц багаж, ялангуяа хуруу шил бэлэн.' } },
  { key: 'safety', text: { en: 'Hazard data sheets and eye protection for every candidate are available.', mn: 'Аюулын мэдээллийн хуудас (SDS), сурагч бүрт нүдний хамгаалалт бэлэн.' } },
  ...(spec.ventilation
    ? [{ key: 'ventilation', text: { en: `The laboratory is well ventilated: small amounts of ${spec.ventilation} may be given off.`, mn: `Лаборатори сайн агааржуулалттай: бага хэмжээний ${spec.ventilation} ялгарч болно.` } }]
    : []),
];

// Totals for the candidates plus one set for the supervisor, with the extra the instructions ask for.
const unitText = (unit: PrepUnit, en: boolean) => (unit === 'cm3' ? (en ? 'cm³' : 'см³') : unit === 'g' ? (en ? 'g' : 'г') : en ? 'pieces' : 'ширхэг');
const totalText = (material: { amount: number; unit: PrepUnit }, sets: number, excess: number, en: boolean) => {
  const raw = material.amount * sets * (1 + excess / 100);
  if (material.unit === 'cm3') {
    if (raw >= 1000) return `${(Math.ceil(raw / 100) / 10).toFixed(1)} ${en ? 'dm³' : 'дм³'}`;
    return `${Math.ceil(raw / 10) * 10} ${unitText('cm3', en)}`;
  }
  if (material.unit === 'g') return `${raw < 10 ? (Math.ceil(raw * 10) / 10).toFixed(1) : Math.ceil(raw)} ${unitText('g', en)}`;
  return `${Math.ceil(raw)} ${unitText('piece', en)}`;
};
const perCandidateText = (material: PrepMaterial, en: boolean) =>
  material.amountNote ? material.amountNote[en ? 'en' : 'mn'] : `${material.amount} ${unitText(material.unit, en)}`;

const Hazards: React.FC<{ codes?: HazardCode[]; language: Language }> = ({ codes, language }) =>
  codes && codes.length > 0 ? (
    <span className="inline-flex flex-wrap items-center gap-1">
      {codes.map((code) => {
        const ghs = hazardCodeGhs[code];
        const label = `[${code}] ${getGhsName(ghs, language)}`;
        return <span key={code} title={label}><GhsPictogram code={ghs} label={label} className="w-6 h-6" /></span>;
      })}
    </span>
  ) : null;

const statusStyle: Record<ItemStatus, string> = {
  todo: 'bg-slate-100 text-slate-700 border-slate-300',
  doing: 'bg-amber-100 text-amber-900 border-amber-300',
  ready: 'bg-emerald-100 text-emerald-900 border-emerald-300',
};

const StatusPicker: React.FC<{ value: ItemStatus; onChange: (status: ItemStatus) => void; en: boolean; name: string }> = ({ value, onChange, en, name }) => {
  const options: { id: ItemStatus; label: string }[] = [
    { id: 'todo', label: en ? 'Not started' : 'Эхлээгүй' },
    { id: 'doing', label: en ? 'Preparing' : 'Бэлтгэж байна' },
    { id: 'ready', label: en ? 'Ready' : 'Бэлэн' },
  ];
  return (
    <div role="group" aria-label={en ? `Status of ${name}` : `${name}: явц`} className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 print:hidden">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={value === option.id}
          onClick={() => onChange(option.id)}
          className={`px-2 py-1 text-[11px] font-semibold rounded-md border transition-colors whitespace-nowrap ${
            value === option.id ? statusStyle[option.id] : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

const Bar: React.FC<{ done: number; total: number; label: string }> = ({ done, total, label }) => (
  <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} className="h-2 rounded-full bg-slate-100 overflow-hidden">
    <div className={`h-full ${done === total ? 'bg-emerald-600' : 'bg-cyan-600'}`} style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
  </div>
);

const years = [...new Set(examPapers.map((p) => p.year))];

const progressOf = (spec: PaperPrepSpec, state: ExamPrepState) => {
  const items = (keys: string[]) => keys.filter((key) => state.items[key]?.status === 'ready').length;
  const ticks = (keys: string[]) => keys.filter((key) => state.ticks[key]).length;
  const materialKeys = spec.materials.map((m) => `m:${m.id}`);
  const benchKeys = benchRows(spec).map((b) => `b:${b.key}`);
  const apparatusKeys = [...spec.apparatus.map(([key]) => `a:${key}`), ...spec.extras.map((key) => `x:${key}`)];
  const checkKeys = finalChecks(spec).map((c) => `c:${c.key}`);
  const sections = [
    { id: 'materials', done: items(materialKeys), total: materialKeys.length },
    { id: 'bench', done: items(benchKeys), total: benchKeys.length },
    { id: 'apparatus', done: ticks(apparatusKeys), total: apparatusKeys.length },
    { id: 'checks', done: ticks(checkKeys), total: checkKeys.length },
  ];
  const done = sections.reduce((n, s) => n + s.done, 0);
  const total = sections.reduce((n, s) => n + s.total, 0);
  return { sections, done, total, complete: done === total };
};

const daysUntil = (date: string) => {
  if (!date) return null;
  const [y, m, d] = date.split('-').map(Number);
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((new Date(y, m - 1, d).getTime() - start.getTime()) / 86400000);
};

export const ExamPrep: React.FC<{ language: Language; role: UserRole }> = ({ language, role }) => {
  const en = language === 'en';
  const t = (text: Bi) => text[language];
  const [paperId, setPaperId] = useStoredState<string>('chem_lab_exam_prep_paper', examPapers[0].id);
  const [allStates, setAllStates] = useStoredState<Record<string, ExamPrepState>>('chem_lab_exam_prep', {});
  const [openId, setOpenId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [focusKey, setFocusKey] = useState<string | null>(null);

  // Opening a material from the search or from «also in» brings it into view and marks it for a moment.
  useEffect(() => {
    if (!focusKey) return;
    const timer = window.setTimeout(() => document.getElementById(`prep-${focusKey}`)?.scrollIntoView({ block: 'center' }), 50);
    const clear = window.setTimeout(() => setFocusKey(null), 2500);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(clear);
    };
  }, [focusKey, paperId]);

  if (role === 'student') {
    return (
      <StaffCard icon={Lock} tone="amber" title={en ? 'For Staff Only' : 'Зөвхөн ажилтанд'}>
        <p className="text-sm text-slate-700">
          {en
            ? 'Exam preparation shows the confidential identities of the exam materials. Choose Teacher or Lab Staff at the bottom of the menu to open it.'
            : 'Шалгалтын бэлтгэл хэсэгт шалгалтын бодисын нууц нэрс харагдана. Нээхийн тулд цэсний доод хэсгээс «Багш» эсвэл «Лаборант»-ыг сонгоно уу.'}
        </p>
      </StaffCard>
    );
  }

  const paper = examPapers.find((p) => p.id === paperId) ?? examPapers[0];
  const spec = findPaperPrep(paper.id);
  const state = allStates[paper.id] ?? blankState();
  const sets = Math.max(1, state.candidates) + 1;
  const label = paperLabel(paper, language);

  // A preparation that is no longer complete needs the teacher to look at it again when it is.
  const update = (change: (current: ExamPrepState) => ExamPrepState) =>
    setAllStates((all) => {
      const next = change(all[paper.id] ?? blankState());
      const complete = spec ? progressOf(spec, next).complete : false;
      return { ...all, [paper.id]: complete ? next : { ...next, acknowledgedOn: undefined } };
    });
  const setStatus = (key: string, status: ItemStatus) =>
    update((s) => ({ ...s, items: { ...s.items, [key]: { status, on: status === 'ready' ? todayText() : undefined } } }));
  const toggle = (key: string) => update((s) => ({ ...s, ticks: { ...s.ticks, [key]: !s.ticks[key] } }));
  const tickAll = (keys: string[], value: boolean) =>
    update((s) => ({ ...s, ticks: { ...s.ticks, ...Object.fromEntries(keys.map((key) => [key, value])) } }));

  const inputClass = 'w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500';

  const progress = spec ? progressOf(spec, state) : null;
  const sectionName: Record<string, string> = {
    materials: en ? 'Solutions and materials' : 'Уусмал, бодис',
    bench: en ? 'Bench reagents' : 'Ширээний урвалж',
    apparatus: en ? 'Apparatus' : 'Багаж хэрэгсэл',
    checks: en ? 'Final checks' : 'Эцсийн шалгалт',
  };
  const days = daysUntil(state.examDate);

  // There is no server, so the phone or computer's own sharing passes the status on to the teacher.
  const handleShare = async () => {
    if (!progress) return;
    const parts = progress.sections.map((s) => `${sectionName[s.id]} ${s.done}/${s.total}`).join(', ');
    const subject = en ? `Exam preparation: ${label}` : `Шалгалтын бэлтгэл: ${label}`;
    const text = en
      ? `${label}: ${progress.complete ? 'everything is ready' : `${progress.done} of ${progress.total} done`} (${parts}).${state.examDate ? ` Exam date: ${state.examDate}.` : ''}`
      : `${label}: ${progress.complete ? 'бүгд бэлэн' : `${progress.total}-аас ${progress.done} бэлэн`} (${parts}).${state.examDate ? ` Шалгалтын огноо: ${state.examDate}.` : ''}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: subject, text });
        return;
      } catch (error) {
        if ((error as Error).name === 'AbortError') return;
      }
    }
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  };

  const started = examPapers.filter((p) => allStates[p.id] && findPaperPrep(p.id));

  const openMaterial = (otherPaperId: string, key: string) => {
    setPaperId(otherPaperId);
    setOpenId(key);
    setFocusKey(key);
  };

  // Search results, one group per description: a group found in several papers is the same solution,
  // and the other groups are similar ones (the same substance at another concentration or amount).
  const needle = normalise(query);
  const groups = needle.length >= 2
    ? [...allMaterials.filter((f) => searchText.get(f)!.includes(needle)).reduce((map, f) => {
        const list = map.get(f.material.identity.en) ?? [];
        list.push(f);
        return map.set(f.material.identity.en, list);
      }, new Map<string, Found[]>()).values()].sort((a, b) => b.length - a.length || a[0].material.identity.en.localeCompare(b[0].material.identity.en))
    : [];
  const benchMatch = needle.length >= 2 && benchText.some((text) => text.includes(needle));
  const chipClass = 'inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-slate-200 bg-white text-[11px] text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 transition-colors';

  const prepDetails = (id: string, how: Bi | undefined, recipeId: string | undefined) => {
    const recipe = findRecipe(recipeId);
    return (
      <div className="mt-2">
        <button
          type="button"
          onClick={() => setOpenId(openId === id ? null : id)}
          aria-expanded={openId === id}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 hover:text-cyan-800 print:hidden"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openId === id ? 'rotate-180' : ''}`} />
          <span>{en ? 'How to prepare' : 'Бэлтгэх заавар'}</span>
        </button>
        <div className={`${openId === id ? 'block' : 'hidden'} print:block mt-1.5 p-3 rounded-lg bg-white border border-slate-200 space-y-1.5 text-xs text-slate-700 leading-relaxed`}>
          {how && <p><ChemText text={t(how)} /></p>}
          {recipe && (
            <p>
              <span className="font-semibold text-cyan-800">{en ? 'Standard recipe' : 'Стандарт заавар'} ({en ? recipe.nameEn : recipe.nameMn}, <ChemText text={en ? recipe.identityEn : recipe.identityMn} />): </span>
              <ChemText text={en ? recipe.instructionsEn : recipe.instructionsMn} />
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Choosing the paper and the size of the session */}
      <StaffCard
        icon={FlaskConical}
        title={en ? 'Exam Preparation' : 'Шалгалтын бэлтгэл'}
        subtitle={en
          ? 'Solutions, materials and apparatus for a 9701/35 practical exam, from its Confidential Instructions.'
          : '9701/35 практик шалгалтын уусмал, бодис, багажийг Confidential Instructions-ийн дагуу бэлтгэнэ.'}
        actions={
          <div className="flex flex-wrap gap-2 print:hidden">
            <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors">
              <Printer className="w-3.5 h-3.5" />
              <span>{en ? 'Print checklist' : 'Жагсаалт хэвлэх'}</span>
            </button>
            <button type="button" onClick={handleShare} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors">
              <Send className="w-3.5 h-3.5" />
              <span>{en ? 'Send status to the teacher' : 'Явцыг багш руу илгээх'}</span>
            </button>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 print:hidden">
          <div className="sm:col-span-2 lg:col-span-1">
            <label htmlFor="prep-paper" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Exam paper' : 'Шалгалт'}</label>
            <select id="prep-paper" value={paper.id} onChange={(event) => setPaperId(event.target.value)} className={inputClass}>
              {years.map((year) => (
                <optgroup key={year} label={String(year)}>
                  {examPapers.filter((p) => p.year === year).map((p) => (
                    <option key={p.id} value={p.id}>{paperLabel(p, language)}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="prep-candidates" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Number of candidates' : 'Сурагчийн тоо'}</label>
            <input
              id="prep-candidates"
              type="number"
              min={1}
              max={200}
              value={state.candidates}
              onChange={(event) => update((s) => ({ ...s, candidates: Math.max(1, Math.min(200, Number(event.target.value) || 1)) }))}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="prep-date" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Exam date' : 'Шалгалтын огноо'}</label>
            <input id="prep-date" type="date" value={state.examDate} onChange={(event) => update((s) => ({ ...s, examDate: event.target.value }))} className={inputClass} />
          </div>
          <div>
            <label htmlFor="prep-by" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Prepared by' : 'Бэлтгэсэн лаборант'}</label>
            <input id="prep-by" type="text" value={state.preparedBy} onChange={(event) => update((s) => ({ ...s, preparedBy: event.target.value }))} className={inputClass} />
          </div>
        </div>
        <div className="hidden print:block text-sm text-slate-900">
          <strong>{label}</strong> · {en ? 'Candidates' : 'Сурагч'}: {state.candidates}
          {state.examDate && <> · {en ? 'Exam date' : 'Шалгалтын огноо'}: {state.examDate}</>}
          {state.preparedBy && <> · {en ? 'Prepared by' : 'Бэлтгэсэн'}: {state.preparedBy}</>}
        </div>
        <p className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-xs text-rose-900 flex items-start gap-2">
          <Lock className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            {en
              ? 'Confidential: the identities of the materials must not reach candidates. Totals cover every candidate plus one set for the supervisor, with the extra the instructions ask for. Saved only in this browser.'
              : 'Нууц: бодисын нэрс сурагчдад хүрэх ёсгүй. Нийт хэмжээнд сурагч бүр болон хянагчийн нэг иж бүрдэл, зааварт заасан нөөц орсон. Зөвхөн энэ хөтөчид хадгалагдана.'}
          </span>
        </p>
      </StaffCard>

      {/* Finding a solution in every paper */}
      <StaffCard
        icon={Search}
        title={en ? 'Find a Solution' : 'Уусмалаар хайх'}
        subtitle={en
          ? 'Type a name or formula, such as thiosulfate or KMnO4, to see the same and similar solutions in every paper.'
          : 'Нэр эсвэл томьёо бичнэ үү (жишээ нь тиосульфат, KMnO4). Бүх шалгалтаас ижил болон төстэй уусмалыг гаргана.'}
        className="print:hidden"
      >
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label={en ? 'Solution name or formula' : 'Уусмалын нэр эсвэл томьёо'}
          placeholder={en ? 'e.g. sodium thiosulfate, KMnO4, FeSO4' : 'жишээ нь натрийн тиосульфат, KMnO4, FeSO4'}
          className={inputClass}
        />
        {needle.length >= 2 && (
          <div className="space-y-3">
            <p className="text-[11px] text-slate-500">
              {groups.length === 0
                ? (en ? 'No exam material matches this.' : 'Тохирох шалгалтын бодис олдсонгүй.')
                : en
                  ? `${groups.length} matching description${groups.length === 1 ? '' : 's'}. «Same solution» means the identical description in several papers; the rest are similar: the same substance at another concentration or amount.`
                  : `${groups.length} тохирох тайлбар. «Ижил уусмал» нь хэд хэдэн шалгалтад яг ижил тайлбартай; бусад нь төстэй: ижил бодис, өөр концентраци эсвэл хэмжээтэй.`}
            </p>
            {benchMatch && (
              <p className="p-2.5 rounded-lg bg-cyan-50 border border-cyan-100 text-[11px] text-cyan-900">
                {en ? 'This also matches a bench reagent, which every paper needs.' : 'Энэ нь бүх шалгалтад хэрэгтэй ширээний урвалжтай мөн таарч байна.'}
              </p>
            )}
            <ul className="space-y-2">
              {groups.slice(0, 30).map((group) => (
                <li key={group[0].material.identity.en} className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 text-xs space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-slate-900"><ChemText text={t(group[0].material.identity)} /></span>
                    {group.length > 1 && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
                        {en ? `Same solution · ${group.length} papers` : `Ижил уусмал · ${group.length} шалгалт`}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.map((f) => (
                      <button key={`${f.paperId}-${f.material.id}`} type="button" onClick={() => openMaterial(f.paperId, `m:${f.material.id}`)} className={chipClass}>
                        <strong className="text-slate-900">{shortPaper(f.paperId)}</strong>
                        <span>· {f.material.label} · {perCandidateText(f.material, en)}</span>
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </StaffCard>

      {!spec || !progress ? (
        <p className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-600">
          {en ? 'There are no preparation details for this paper yet.' : 'Энэ шалгалтын бэлтгэлийн мэдээлэл одоогоор алга.'}
        </p>
      ) : (
        <>
          {/* Readiness, for the teacher at a glance */}
          <StaffCard
            icon={ClipboardCheck}
            tone={progress.complete ? 'emerald' : 'cyan'}
            title={en ? 'Readiness' : 'Бэлэн байдал'}
            subtitle={role === 'teacher'
              ? (en ? 'How far the lab has got with this paper.' : 'Лаборатори энэ шалгалтад хэр бэлтгэснийг харуулна.')
              : (en ? 'The teacher sees this summary.' : 'Энэ хураангуйг багш харна.')}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${progress.complete ? statusStyle.ready : progress.done > 0 ? statusStyle.doing : statusStyle.todo}`}>
                  {progress.complete
                    ? (en ? 'Ready for the exam' : 'Шалгалтад бэлэн')
                    : progress.done > 0 ? (en ? 'In preparation' : 'Бэлтгэж байна') : (en ? 'Not started' : 'Эхлээгүй')}
                </span>
                <span className="text-sm font-semibold text-slate-800 tabular-nums">
                  {progress.done}/{progress.total} · {Math.round((progress.done / progress.total) * 100)}%
                </span>
              </div>
              {days !== null && (
                <span className={`text-xs font-semibold tabular-nums ${days < 0 ? 'text-slate-500' : days <= 3 && !progress.complete ? 'text-rose-700' : 'text-slate-700'}`}>
                  {days > 0
                    ? (en ? `${days} day${days === 1 ? '' : 's'} until the exam` : `Шалгалт хүртэл ${days} хоног`)
                    : days === 0 ? (en ? 'The exam is today' : 'Шалгалт өнөөдөр') : (en ? 'The exam date has passed' : 'Шалгалтын огноо өнгөрсөн')}
                </span>
              )}
            </div>
            <Bar done={progress.done} total={progress.total} label={en ? 'Overall readiness' : 'Нийт бэлэн байдал'} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {progress.sections.map((section) => (
                <div key={section.id} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{sectionName[section.id]}</span>
                    <span className="tabular-nums text-slate-600">{section.done}/{section.total}</span>
                  </div>
                  <Bar done={section.done} total={section.total} label={sectionName[section.id]} />
                </div>
              ))}
            </div>
            {progress.complete && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex flex-wrap items-center justify-between gap-2">
                <span className="flex items-center gap-2 font-semibold">
                  {state.acknowledgedOn ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <BellRing className="w-4 h-4 shrink-0" />}
                  {state.acknowledgedOn
                    ? (en ? `Everything is ready. The teacher confirmed on ${state.acknowledgedOn}.` : `Бүгд бэлэн. Багш ${state.acknowledgedOn}-нд танилцсан.`)
                    : (en ? 'Everything is ready for the exam.' : 'Шалгалтад бүх зүйл бэлэн.')}
                </span>
                {role === 'teacher' && !state.acknowledgedOn && (
                  <button type="button" onClick={() => update((s) => ({ ...s, acknowledgedOn: todayText() }))} className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors print:hidden">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{en ? 'Seen' : 'Танилцсан'}</span>
                  </button>
                )}
              </div>
            )}
            {started.length > 1 && (
              <div className="pt-2 border-t border-slate-100 print:hidden">
                <div className="text-xs font-semibold text-slate-700 mb-2">{en ? 'Other papers being prepared' : 'Бэлтгэж буй бусад шалгалт'}</div>
                <ul className="space-y-1.5">
                  {started.filter((p) => p.id !== paper.id).map((p) => {
                    const other = progressOf(findPaperPrep(p.id)!, allStates[p.id]);
                    return (
                      <li key={p.id}>
                        <button type="button" onClick={() => setPaperId(p.id)} className="w-full grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1 p-2 rounded-lg hover:bg-slate-50 text-left text-xs">
                          <span className="font-medium text-slate-800">{paperLabel(p, language)}{allStates[p.id].examDate && <span className="text-slate-500"> · {allStates[p.id].examDate}</span>}</span>
                          <span className="tabular-nums text-slate-600">{other.done}/{other.total}</span>
                          <span className="col-span-2"><Bar done={other.done} total={other.total} label={paperLabel(p, language)} /></span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </StaffCard>

          {/* FA materials and the other materials of this paper */}
          <StaffCard
            icon={FlaskConical}
            title={en ? 'Solutions and Materials' : 'Уусмал ба бодис'}
            subtitle={en
              ? `Per candidate, and the total for ${state.candidates} candidates + supervisor with ${spec.excess}% extra.`
              : `Нэг сурагчид, мөн ${state.candidates} сурагч + хянагчид ${spec.excess}% нөөцтэй нийт хэмжээ.`}
          >
            <ul className="space-y-2">
              {spec.materials.map((material) => {
                const key = `m:${material.id}`;
                const status = state.items[key]?.status ?? 'todo';
                const elsewhere = sameElsewhere(paper.id, material);
                return (
                  <li id={`prep-${key}`} key={key} className={`p-3 rounded-xl border border-l-4 text-xs break-inside-avoid scroll-mt-24 transition-shadow ${focusKey === key ? 'ring-2 ring-cyan-500 ring-offset-2' : ''} ${status === 'ready' ? 'border-l-emerald-500 border-emerald-100 bg-emerald-50/30' : status === 'doing' ? 'border-l-amber-400 border-slate-200 bg-white' : 'border-l-slate-300 border-slate-200 bg-white'}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono text-[11px] font-bold">{material.label}</span>
                          <span className="font-semibold text-slate-900"><ChemText text={t(material.identity)} /></span>
                          <Hazards codes={material.hazards} language={language} />
                        </div>
                        <div className="text-slate-600 tabular-nums">
                          {en ? 'Per candidate' : 'Нэг сурагчид'}: <strong className="text-slate-800">{perCandidateText(material, en)}</strong>
                          <span aria-hidden="true"> · </span>
                          {en ? 'Prepare in total' : 'Нийт бэлтгэх'}: <strong className="text-slate-800">{totalText(material, sets, spec.excess, en)}</strong>
                          {status === 'ready' && state.items[key]?.on && <span className="text-emerald-700"> · {en ? 'Ready on' : 'Бэлэн болсон'} {state.items[key].on}</span>}
                        </div>
                      </div>
                      <StatusPicker value={status} onChange={(next) => setStatus(key, next)} en={en} name={material.label} />
                    </div>
                    {elsewhere.length > 0 && (
                      <div className="mt-2 flex flex-wrap items-center gap-1.5 print:hidden">
                        <span className="text-[11px] font-semibold text-emerald-800">{en ? 'Same in' : 'Мөн ашигласан'}:</span>
                        {elsewhere.map((f) => (
                          <button key={`${f.paperId}-${f.material.id}`} type="button" onClick={() => openMaterial(f.paperId, `m:${f.material.id}`)} className={chipClass}>
                            <strong className="text-slate-900">{shortPaper(f.paperId)}</strong>
                            <span>· {f.material.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    {prepDetails(key, material.how, material.recipe)}
                  </li>
                );
              })}
            </ul>
          </StaffCard>

          {/* Bench reagents */}
          <StaffCard
            icon={TestTubes}
            title={en ? 'Bench Reagents' : 'Ширээний урвалж'}
            subtitle={en
              ? 'If needed, each can be a shared supply for up to 6 candidates; watch for contamination.'
              : 'Шаардлагатай бол 6 хүртэлх сурагчид нэг сав хуваалцаж болно; бохирдохоос сэргийлнэ.'}
          >
            <ul className="space-y-2">
              {benchRows(spec).map((row) => {
                const key = `b:${row.key}`;
                const status = state.items[key]?.status ?? 'todo';
                return (
                  <li key={key} className={`p-3 rounded-xl border border-l-4 text-xs break-inside-avoid ${status === 'ready' ? 'border-l-emerald-500 border-emerald-100 bg-emerald-50/30' : status === 'doing' ? 'border-l-amber-400 border-slate-200 bg-white' : 'border-l-slate-300 border-slate-200 bg-white'}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="min-w-0 space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-slate-900">{row.label}</span>
                          <span className="text-slate-600"><ChemText text={t(row.identity)} /></span>
                          <Hazards codes={row.hazards} language={language} />
                        </div>
                        <div className="text-slate-600 tabular-nums">
                          {en ? 'Per candidate' : 'Нэг сурагчид'}: <strong className="text-slate-800">{row.amount} {unitText('cm3', en)}</strong>
                          <span aria-hidden="true"> · </span>
                          {en ? 'Prepare in total' : 'Нийт бэлтгэх'}: <strong className="text-slate-800">{totalText({ amount: row.amount, unit: 'cm3' }, sets, spec.excess, en)}</strong>
                        </div>
                      </div>
                      <StatusPicker value={status} onChange={(next) => setStatus(key, next)} en={en} name={row.label} />
                    </div>
                    {prepDetails(key, row.how, row.recipe)}
                  </li>
                );
              })}
            </ul>
          </StaffCard>

          {/* Apparatus */}
          <StaffCard
            icon={TestTubes}
            tone="amber"
            title={en ? 'Apparatus' : 'Багаж хэрэгсэл'}
            subtitle={en
              ? `For each candidate and one set for the supervisor (${sets} sets). Tick each line when it is counted and set out.`
              : `Сурагч бүрт болон хянагчид нэг иж бүрдэл (${sets} иж бүрдэл). Тоолж, байрлуулсны дараа мөр бүрийг тэмдэглэнэ.`}
            actions={
              <button
                type="button"
                onClick={() => {
                  const keys = [...spec.apparatus.map(([key]) => `a:${key}`), ...spec.extras.map((key) => `x:${key}`)];
                  tickAll(keys, !keys.every((key) => state.ticks[key]));
                }}
                className="text-[11px] font-semibold text-cyan-700 hover:text-cyan-800 print:hidden"
              >
                {en ? 'Tick or clear all' : 'Бүгдийг тэмдэглэх / арилгах'}
              </button>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
              {spec.apparatus.map(([key, quantity]) => {
                const tick = `a:${key}`;
                return (
                  <label key={tick} className="flex items-center gap-2.5 py-1.5 border-b border-slate-100 text-xs text-slate-800 break-inside-avoid">
                    <input type="checkbox" checked={!!state.ticks[tick]} onChange={() => toggle(tick)} className="w-4 h-4 accent-emerald-600" />
                    <span className="flex-1 min-w-0"><ChemText text={t(apparatusNames[key])} /></span>
                    <span className="tabular-nums text-slate-500 whitespace-nowrap">{quantity} × {sets} = <strong className="text-slate-800">{quantity * sets}</strong></span>
                  </label>
                );
              })}
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-700 mb-1">{en ? 'Shared items' : 'Нийтийн хэрэгсэл'}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                {spec.extras.map((key) => {
                  const tick = `x:${key}`;
                  return (
                    <label key={tick} className="flex items-start gap-2.5 py-1.5 border-b border-slate-100 text-xs text-slate-800 break-inside-avoid">
                      <input type="checkbox" checked={!!state.ticks[tick]} onChange={() => toggle(tick)} className="w-4 h-4 mt-0.5 accent-emerald-600" />
                      <span><ChemText text={t(extraNames[key])} /></span>
                    </label>
                  );
                })}
              </div>
            </div>
          </StaffCard>

          {/* The supervisor, special notes and the last checks */}
          <StaffCard icon={ShieldCheck} tone="emerald" title={en ? 'Supervisor and Final Checks' : 'Хянагч ба эцсийн шалгалт'}>
            <div className="p-3 rounded-xl bg-cyan-50/70 border border-cyan-100 text-xs text-slate-800 space-y-1.5">
              <p><strong>{en ? 'Supervisor' : 'Хянагч'}:</strong> {t(spec.supervisor)}</p>
              {spec.notes?.map((n) => <p key={n.en}><ChemText text={t(n)} /></p>)}
            </div>
            <div className="space-y-1">
              {finalChecks(spec).map((check) => {
                const tick = `c:${check.key}`;
                return (
                  <label key={tick} className="flex items-start gap-2.5 py-1.5 border-b border-slate-100 text-xs text-slate-800 break-inside-avoid">
                    <input type="checkbox" checked={!!state.ticks[tick]} onChange={() => toggle(tick)} className="w-4 h-4 mt-0.5 accent-emerald-600" />
                    <span><ChemText text={t(check.text)} /></span>
                  </label>
                );
              })}
            </div>
          </StaffCard>
        </>
      )}
    </div>
  );
};
