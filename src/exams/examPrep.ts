// What the lab has to get ready for each exam paper, summarised from the paper's Confidential Instructions:
// the FA materials and other materials per candidate, the bench reagents, the apparatus per candidate and
// the shared items. The ids match the papers in papers.ts. Kept with the papers, so it stays out of the public site.
import type { HazardCode } from '../data/solutionRecipes';

export interface Bi { en: string; mn: string }
export type PrepUnit = 'cm3' | 'g' | 'piece';

export interface PrepMaterial {
  /** Unique within the paper. */
  id: string;
  /** Exactly what goes on the container. */
  label: string;
  /** Per candidate, in `unit`, used for the totals. */
  amount: number;
  unit: PrepUnit;
  /** Shown instead of the plain amount when the instructions give a range or pieces. */
  amountNote?: Bi;
  identity: Bi;
  how: Bi;
  hazards?: HazardCode[];
  /** A standard recipe in data/solutionRecipes.ts that matches "see the syllabus". */
  recipe?: string;
}

export type ApparatusKey = keyof typeof apparatusNames;
export type ExtraKey = keyof typeof extraNames;
export type BenchKey = keyof typeof benchDefaults;

export interface PaperPrepSpec {
  paperId: string;
  /** Extra material to prepare, as a percentage. */
  excess: number;
  supervisor: Bi;
  materials: PrepMaterial[];
  apparatus: [ApparatusKey, number][];
  extras: ExtraKey[];
  bench?: { key: BenchKey; amount?: number; identity?: Bi; omit?: boolean }[];
  notes?: Bi[];
  /** Gases that may be given off; the room must be ventilated. */
  ventilation?: string;
}

// ---- Wording helpers, so each instruction is written once in each language ----
const mnUnits = (s: string) => s.replace(/\babout /g, '≈').replace(/\bconcentrated\b/g, 'өтгөн').replace(/(\d) volume\b/g, '$1 эзлэхүүний').replace(/(\d) g\b/g, '$1 г').replace(/cm³/g, 'см³').replace(/dm³/g, 'дм³').replace(/mol\/дм³|mol\/dm³/g, 'моль/дм³');
// A formula that contains words is given in both languages.
type Text = string | Bi;
const inLang = (text: Text, lang: keyof Bi) => (typeof text === 'string' ? text : text[lang]);
const conc = (c: string, en: string, mn: string): Bi => ({ en: `${c} mol/dm³ ${en}`, mn: `${c} моль/дм³ ${mn}` });
/** Dissolve the solids (["5.41 g", "K2S2O8"]) and make up to 1 dm³. Pairs in one inner list are alternatives. */
const dissolve = (parts: [string, Text][][], addEn = '', addMn = ''): Bi => {
  const en = parts.map((alts) => alts.map(([m, f]) => `${m} of ${inLang(f, 'en')}`).join(' or ')).join(' and ');
  const mn = parts.map((alts) => alts.map(([m, f], i) => (i ? `(эсвэл ${mnUnits(m)} ${inLang(f, 'mn')})` : `${mnUnits(m)} ${inLang(f, 'mn')}`)).join(' ')).join(' ба ');
  return {
    en: `Dissolve ${en} in water and make up to 1 dm³.${addEn ? ` ${addEn}` : ''}`,
    mn: `${mn} авч усанд уусгаад 1 дм³ болгоно.${addMn ? ` ${addMn}` : ''}`,
  };
};
const weigh = (mass: string, what: Text, addEn = '', addMn = ''): Bi => ({
  en: `Weigh ${mass} of ${inLang(what, 'en')} into a stoppered container.${addEn ? ` ${addEn}` : ''}`,
  mn: `Таглаатай саванд ${mnUnits(mass)} ${inLang(what, 'mn')} жигнэж хийнэ.${addMn ? ` ${addMn}` : ''}`,
});
const dilute = (volume: string, from: string, addEn = '', addMn = ''): Bi => ({
  en: `Dilute ${volume} of ${from} to 1 dm³.${addEn ? ` ${addEn}` : ''}`,
  mn: `${mnUnits(from)} уусмалаас ${mnUnits(volume)} авч 1 дм³ хүртэл шингэрүүлнэ.${addMn ? ` ${addMn}` : ''}`,
});
const syllabus: Bi = { en: 'Prepare as in the syllabus; the standard recipe is shown below.', mn: 'Хөтөлбөрийн зааврын дагуу бэлтгэнэ; стандарт заавар доор байна.' };
const stoppered = (what: Bi): Bi => ({ en: `${what.en} in a stoppered container.`, mn: `Таглаатай саванд ${what.mn} хийж олгоно.` });
const note = (en: string, mn: string): Bi => ({ en, mn });

const water = (amount: number): PrepMaterial => ({
  id: 'water', label: 'distilled water', amount, unit: 'cm3',
  identity: { en: 'distilled water', mn: 'нэрмэл ус' },
  how: { en: 'Supply in a wash bottle or labelled bottle.', mn: 'Угаагч сав эсвэл шошготой саванд олгоно.' },
});
const starch = (id: string, label: string, amount: number): PrepMaterial => ({
  id, label, amount, unit: 'cm3', identity: { en: 'starch indicator (about 2%)', mn: 'цардуулын индикатор (ойролцоогоор 2%)' }, how: syllabus, recipe: 'starch_solution',
});
const methylOrange = (amount: number): PrepMaterial => ({
  id: 'mo', label: 'methyl orange indicator', amount, unit: 'cm3',
  identity: { en: 'methyl orange indicator', mn: 'метилоранж индикатор' }, how: syllabus, recipe: 'methyl_orange', hazards: ['T', 'C', 'N', 'F', 'MH', 'HH'],
});
const bromophenol = (id: string, label: string, amount: number): PrepMaterial => ({
  id, label, amount, unit: 'cm3', identity: { en: 'bromophenol blue indicator', mn: 'бромфенол хөх индикатор' }, how: syllabus, recipe: 'bromophenol_blue', hazards: ['F', 'MH', 'HH'],
});
const sulfuric1 = (id: string, label: string, amount: number, c = '1.0'): PrepMaterial => ({
  id, label, amount, unit: 'cm3', identity: conc(c, 'sulfuric acid', 'хүхрийн хүчил'), how: syllabus, recipe: 'dilute_sulfuric_acid', hazards: ['MH'],
});
const hcl2 = (id: string, label: string, amount: number, c = '2.0'): PrepMaterial => ({
  id, label, amount, unit: 'cm3', identity: conc(c, 'hydrochloric acid', 'давсны хүчил'), how: syllabus, recipe: 'dilute_hydrochloric_acid',
});
const peroxide10 = (amount: number, extra?: Bi): PrepMaterial => ({
  id: 'h2o2', label: 'hydrogen peroxide', amount, unit: 'cm3',
  identity: { en: '10 volume hydrogen peroxide', mn: '10 эзлэхүүний устөрөгчийн хэт исэл' },
  how: {
    en: `Dilute 100 cm³ of 100 volume H2O2 (or 500 cm³ of 20 volume) to 1 dm³.${extra ? ` ${extra.en}` : ''}`,
    mn: `100 эзлэхүүний H2O2-оос 100 см³ (эсвэл 20 эзлэхүүнийхээс 500 см³) авч 1 дм³ хүртэл шингэрүүлнэ.${extra ? ` ${extra.mn}` : ''}`,
  },
  hazards: ['C'],
});
const basicCopper = (id: string, label: string, mass: string, amount: number, addEn = '', addMn = ''): PrepMaterial => ({
  id, label, amount, unit: 'g', amountNote: { en: mass, mn: mnUnits(mass) },
  identity: { en: 'basic copper(II) carbonate, CuCO3·Cu(OH)2', mn: 'суурилаг зэс(II) карбонат, CuCO3·Cu(OH)2' },
  how: weigh(mass, 'CuCO3·Cu(OH)2', `Any type of basic copper(II) carbonate is suitable.${addEn ? ` ${addEn}` : ''}`, `Ямар ч төрлийн суурилаг зэс(II) карбонат тохирно.${addMn ? ` ${addMn}` : ''}`),
  hazards: ['MH', 'N'],
});
const solid = (id: string, label: string, mass: string, amount: number, identity: Bi, formula: Text, hazards?: HazardCode[], addEn = '', addMn = ''): PrepMaterial => ({
  id, label, amount, unit: 'g', amountNote: { en: mass, mn: mnUnits(mass) }, identity, how: weigh(mass, formula, addEn, addMn), hazards,
});

// ---- Apparatus and shared items ----
export const apparatusNames = {
  burette50: { en: '50 cm³ burette', mn: '50 см³ бюретк' },
  burette: { en: 'burette', mn: 'бюретк' },
  buretteStand: { en: 'burette stand and clamp', mn: 'бюреткийн штатив ба хавчаар' },
  buretteClamp: { en: 'burette clamp', mn: 'бюреткийн хавчаар' },
  standClamp: { en: 'stand and clamp', mn: 'штатив ба хавчаар' },
  funnelBurette: { en: 'funnel (for filling the burette)', mn: 'юүлүүр (бюретк дүүргэх)' },
  funnelFilter: { en: 'funnel (for filtering)', mn: 'шүүлтүүрийн юүлүүр' },
  filterPaper: { en: 'filter paper', mn: 'шүүлтүүрийн цаас' },
  pipette25: { en: '25 cm³ pipette', mn: '25 см³ пипетк' },
  pipette10: { en: '10 cm³ pipette', mn: '10 см³ пипетк' },
  pipetteFiller: { en: 'pipette filler', mn: 'пипеткийн соруур' },
  volFlask250: { en: '250 cm³ volumetric flask', mn: '250 см³ хэмжээст колбо' },
  conical: { en: '150 cm³ or 250 cm³ conical flask', mn: '150 эсвэл 250 см³ конусан колбо' },
  cyl25: { en: '25 cm³ measuring cylinder', mn: '25 см³ хэмжээст цилиндр' },
  cyl50: { en: '50 cm³ measuring cylinder', mn: '50 см³ хэмжээст цилиндр' },
  cyl250: { en: '250 cm³ measuring cylinder (plastic or glass)', mn: '250 см³ хэмжээст цилиндр (хуванцар эсвэл шилэн)' },
  beaker100: { en: '100 cm³ beaker', mn: '100 см³ стакан' },
  beaker250: { en: '250 cm³ beaker', mn: '250 см³ стакан' },
  whiteTile: { en: 'white tile', mn: 'цагаан хавтан' },
  glassRod: { en: 'glass rod', mn: 'шилэн саваа' },
  thermometer: { en: 'thermometer (−10 °C to +110 °C, 1 °C divisions)', mn: 'термометр (−10 °C … +110 °C, 1 °C хуваарь)' },
  cup: { en: 'plastic or cardboard cup (about 150 cm³)', mn: 'хуванцар эсвэл цаасан аяга (≈150 см³)' },
  polyCup: { en: 'polystyrene cup (about 150 cm³)', mn: 'хөөсөнцөр аяга (≈150 см³)' },
  stopclock: { en: 'stop-clock reading to 1 second', mn: 'секундомер (1 с нарийвчлалтай)' },
  teatPipette: { en: 'teat/dropping pipette', mn: 'дуслын пипетк' },
  spatula: { en: 'spatula', mn: 'шпатель' },
  bunsen: { en: 'Bunsen burner', mn: 'Бунзены халаагуур' },
  mat: { en: 'heat-proof mat', mn: 'халуунд тэсвэртэй дэвсгэр' },
  tripod: { en: 'tripod', mn: 'гурван хөлт суурь' },
  gauze: { en: 'gauze', mn: 'торон дэвсгэр' },
  crucible: { en: 'crucible with lid (about 15 cm³)', mn: 'таглаатай тигель (≈15 см³)' },
  tongs: { en: 'crucible tongs', mn: 'тигелийн хавчаар' },
  triangle: { en: 'pipe-clay triangle', mn: 'шавар гурвалжин' },
  ttHolder: { en: 'test-tube holder', mn: 'хуруу шилний барьцаа' },
  boilingTube: { en: 'boiling tube', mn: 'буцалгах хуруу шил' },
  hardGlass: { en: 'hard-glass test-tube', mn: 'халуунд тэсвэртэй хуруу шил' },
  testTube: { en: 'test-tube', mn: 'хуруу шил' },
  rack: { en: 'test-tube rack', mn: 'хуруу шилний тавиур' },
  washBottle: { en: 'wash bottle of distilled water', mn: 'нэрмэл устай угаагч сав' },
  pen: { en: 'pen for labelling glassware', mn: 'шил тэмдэглэх үзэг' },
  trough: { en: 'tub to use as a trough (at least 1 dm³)', mn: 'тэвш болгох сав (дор хаяж 1 дм³)' },
  gasFlask: { en: 'side-arm conical flask with bung and about 50 cm of delivery tube (or a conical flask with a one-hole bung), labelled as in the question', mn: 'хажуу хоолойтой конусан колбо, бөглөө ба ≈50 см хий дамжуулах хоолойтой (эсвэл нэг нүхтэй бөглөөтэй колбо), асуултад заасан шошготой' },
} satisfies Record<string, Bi>;

export const extraNames = {
  paperTowels: { en: 'paper towels', mn: 'цаасан алчуур' },
  litmus: { en: 'red and blue litmus papers', mn: 'улаан, хөх лакмус цаас' },
  alFoil: { en: 'aluminium foil (for the nitrate/nitrite test)', mn: 'хөнгөн цагаан цаас (нитрат/нитритийн сорилд)' },
  splints: { en: 'wooden splints', mn: 'модон хэлтэрхий' },
  limewaterKit: { en: 'the centre’s usual apparatus for testing CO2 with limewater', mn: 'шохойн усаар CO2 шалгах ердийн хэрэгсэл' },
  balance01: { en: 'access to a balance reading to 0.1 g', mn: '0.1 г хүртэл жигнэх жин' },
  balance001: { en: 'single-pan balance reading to 0.01 g, up to 200 g (1 per 8–12 candidates)', mn: '0.01 г нарийвчлалтай, 200 г хүртэл жигнэх жин (8–12 сурагчид 1)' },
  quench: { en: 'a bucket labelled Quenching Bath for every five candidates: 1 dm³ of 5% sodium carbonate solution (50 g Na2CO3 or 135 g Na2CO3·10H2O) with universal indicator; the supervisor adds more if it turns acidic', mn: 'таван сурагч тутамд «Quenching Bath» гэж шошголсон хувин: 1 дм³ 5% натрийн карбонатын уусмал (50 г Na2CO3 эсвэл 135 г Na2CO3·10H2O), универсал индикатортай; хүчиллэг болвол хянагч нэмж хийнэ' },
} satisfies Record<string, Bi>;

const commonExtras: ExtraKey[] = ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'];

/** The bench reagents every paper uses, 10 cm³ each unless a paper says otherwise. They may be shared by up to 6 candidates. */
export const benchDefaults = {
  hcl: { label: 'dilute hydrochloric acid', identity: conc('2.0', 'HCl', 'HCl'), recipe: 'dilute_hydrochloric_acid', hazards: [] as HazardCode[] },
  hno3: { label: 'dilute nitric acid', identity: conc('2.0', 'HNO3', 'HNO3'), recipe: 'dilute_nitric_acid', hazards: ['C'] as HazardCode[] },
  h2so4: { label: 'dilute sulfuric acid', identity: conc('1.0', 'H2SO4', 'H2SO4'), recipe: 'dilute_sulfuric_acid', hazards: ['MH'] as HazardCode[] },
  nh3: { label: 'aqueous ammonia', identity: conc('2.0', 'NH3', 'NH3'), recipe: 'aqueous_ammonia', hazards: ['C', 'MH', 'N'] as HazardCode[] },
  naoh: { label: 'aqueous sodium hydroxide', identity: conc('2.0', 'NaOH', 'NaOH'), recipe: undefined as string | undefined, hazards: ['C'] as HazardCode[] },
  ba: { label: 'aqueous barium chloride or aqueous barium nitrate', identity: { en: '0.1 mol/dm³ BaCl2 or 0.1 mol/dm³ Ba(NO3)2', mn: '0.1 моль/дм³ BaCl2 эсвэл 0.1 моль/дм³ Ba(NO3)2' }, recipe: 'barium_salt', hazards: [] as HazardCode[] },
  agno3: { label: 'aqueous silver nitrate', identity: conc('0.05', 'AgNO3', 'AgNO3'), recipe: 'silver_nitrate', hazards: [] as HazardCode[] },
  limewater: { label: 'limewater', identity: { en: 'saturated aqueous calcium hydroxide, Ca(OH)2', mn: 'ханасан кальцийн гидроксидын уусмал, Ca(OH)2' }, recipe: 'limewater', hazards: ['MH'] as HazardCode[] },
  kmno4: { label: 'acidified aqueous potassium manganate(VII)', identity: { en: '0.01 mol/dm³ KMnO4 in 0.5 mol/dm³ H2SO4', mn: '0.5 моль/дм³ H2SO4 дахь 0.01 моль/дм³ KMnO4' }, recipe: 'acidified_manganate', hazards: ['MH'] as HazardCode[] },
};
export const benchHowNaoh: Bi = { en: 'Dissolve 80.0 g of NaOH in water, cool, and make up to 1 dm³.', mn: '80.0 г NaOH-ыг усанд уусгаж, хөргөөд 1 дм³ болгоно.' };

const allQuestions: Bi = { en: 'The supervisor (not the invigilator) does all the experiments out of sight of the candidates and records the results on a spare question paper labelled «supervisor’s results». A separate set of results is needed for each batch of solutions.', mn: 'Хянагч (ажиглагч биш) бүх туршилтыг сурагчдад харагдахгүй газар хийж, үр дүнгээ «supervisor’s results» гэж бичсэн нөөц асуултын хуудсанд тэмдэглэнэ. Уусмалын багц бүрт тусдаа үр дүн хэрэгтэй.' };
const questionsOnly = (q: string, qMn: string): Bi => ({ en: `The supervisor, or another competent chemist, does the experiments in ${q} out of sight of the candidates and records the readings on a spare question paper labelled «Supervisor’s Results», for each session, laboratory and batch of solutions.`, mn: `Хянагч эсвэл туршлагатай химич ${qMn} туршилтыг сурагчдад харагдахгүй газар хийж, хэмжилтээ «Supervisor’s Results» гэж бичсэн нөөц асуултын хуудсанд тэмдэглэнэ; хичээлийн цаг, лаборатори, уусмалын багц бүрт.` });

export const paperPreps: PaperPrepSpec[] = [
  // ---------------- 2017 ----------------
  {
    paperId: '9701-35-mj17', excess: 25, supervisor: questionsOnly('Question 1', '1-р асуултын'), ventilation: 'SO2, NO2',
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 120, unit: 'cm3', identity: conc('0.020', 'potassium peroxodisulfate', 'калийн пероксодисульфат'), how: dissolve([[['5.41 g', 'K2S2O8']]]), hazards: ['HH', 'MH', 'O'] },
      { id: 'fa2', label: 'FA 2', amount: 150, unit: 'cm3', identity: conc('1.0', 'potassium iodide', 'калийн иодид'), how: dissolve([[['166.0 g', 'KI']]]) },
      { id: 'fa3', label: 'FA 3', amount: 100, unit: 'cm3', identity: conc('0.0050', 'sodium thiosulfate', 'натрийн тиосульфат'), how: dissolve([[['24.8 g', 'Na2S2O3·5H2O']]], 'Then dilute this solution 20 times (50 cm³ to 1 dm³).', 'Дараа нь энэ уусмалыг 20 дахин шингэрүүлнэ (50 см³-ийг 1 дм³ болгоно).') },
      starch('starch', 'starch indicator', 15),
      { id: 'fa4', label: 'FA 4', amount: 20, unit: 'cm3', identity: conc('0.2', 'ammonium iron(II) sulfate', 'аммонийн төмөр(II) сульфат'), how: dissolve([[['78.4 g', '(NH4)2Fe(SO4)2·6H2O']]]), hazards: ['MH'] },
      { id: 'fa5', label: 'FA 5', amount: 20, unit: 'cm3', identity: conc('0.2', 'potassium aluminium sulfate', 'калийн хөнгөн цагааны сульфат'), how: dissolve([[['94.8 g', 'KAl(SO4)2·12H2O']]]) },
      solid('fa6', 'FA 6', 'about 0.5 g', 0.5, { en: 'sodium sulfite', mn: 'натрийн сульфит' }, 'Na2SO3', ['HH']),
      sulfuric1('fa7', 'FA 7', 10),
      { id: 'fa8', label: 'FA 8', amount: 10, unit: 'cm3', identity: conc('1.0', 'sodium nitrite', 'натрийн нитрит'), how: dissolve([[['69.0 g', 'NaNO2']]]), hazards: ['O', 'T', 'N'] },
      { id: 'mg', label: 'magnesium', amount: 1, unit: 'piece', amountNote: { en: '1 × 2 cm strip', mn: '1 × 2 см тууз' }, identity: { en: 'magnesium ribbon', mn: 'магнийн тууз' }, how: { en: 'Cut 2 cm strips of magnesium ribbon. Keep more cut strips for candidates who repeat the test.', mn: 'Магнийн туузыг 2 см-ээр хэрчинэ. Сорилоо давтах сурагчдад зориулж нэмэлт хэрчим бэлдэнэ.' }, hazards: ['F'] },
      water(100),
    ],
    apparatus: [['burette50', 2], ['buretteStand', 2], ['funnelBurette', 2], ['cyl25', 1], ['beaker100', 2], ['glassRod', 1], ['whiteTile', 1], ['testTube', 5], ['boilingTube', 2], ['rack', 1], ['ttHolder', 1], ['teatPipette', 3], ['spatula', 1], ['bunsen', 1], ['mat', 1], ['washBottle', 1], ['pen', 1], ['stopclock', 1]],
    extras: commonExtras,
    notes: [note('Label one of the two burettes FA 1.', 'Хоёр бюреткийн нэгийг FA 1 гэж шошголно.')],
  },
  {
    paperId: '9701-35-on17', excess: 25, supervisor: questionsOnly('Questions 1 and 2', '1 ба 2-р асуултын'), ventilation: 'NO2',
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 125, unit: 'cm3', identity: conc('0.0197', 'potassium iodate(V)', 'калийн иодат(V)'), how: dissolve([[['4.22 g', 'KIO3']]]), hazards: ['O', 'MH'] },
      sulfuric1('fa2', 'FA 2', 50, '1.00'),
      { id: 'fa3', label: 'FA 3', amount: 100, unit: 'cm3', identity: conc('0.500', 'potassium iodide', 'калийн иодид'), how: dissolve([[['83.0 g', 'KI']]]) },
      { id: 'fa4', label: 'FA 4', amount: 150, unit: 'cm3', identity: conc('0.105', 'sodium thiosulfate', 'натрийн тиосульфат'), how: dissolve([[['26.1 g', 'Na2S2O3·5H2O']]]) },
      solid('fa5', 'FA 5', '5.0–5.1 g', 5.0, { en: 'basic zinc carbonate, ZnCO3·Zn(OH)2', mn: 'суурилаг цайрын карбонат, ZnCO3·Zn(OH)2' }, 'ZnCO3·Zn(OH)2', undefined, 'Any type of basic zinc carbonate is suitable.', 'Ямар ч төрлийн суурилаг цайрын карбонат тохирно.'),
      { id: 'fa6', label: 'FA 6', amount: 20, unit: 'cm3', identity: conc('0.4', 'sodium nitrite', 'натрийн нитрит'), how: dissolve([[['27.6 g', 'NaNO2']]]), hazards: ['MH', 'N'] },
      { id: 'fa7', label: 'FA 7', amount: 20, unit: 'cm3', identity: conc('0.2', 'ammonium bromide', 'аммонийн бромид'), how: dissolve([[['19.6 g', 'NH4Br']]], 'Without NH4Br, use 20.6 g of NaBr and 10.7 g of NH4Cl in each dm³.', 'NH4Br байхгүй бол дм³ тутамд 20.6 г NaBr ба 10.7 г NH4Cl уусгана.'), hazards: ['MH'] },
      { id: 'fa8', label: 'FA 8', amount: 20, unit: 'cm3', identity: conc('0.2', 'barium nitrate', 'барийн нитрат'), how: dissolve([[['52.3 g', 'Ba(NO3)2']]]), hazards: ['HH', 'O'] },
      starch('starch', 'starch indicator', 10),
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 2], ['cyl25', 1], ['buretteStand', 1], ['funnelBurette', 1], ['whiteTile', 1], ['spatula', 1], ['teatPipette', 2], ['glassRod', 1], ['crucible', 2], ['tongs', 1], ['mat', 1], ['tripod', 1], ['bunsen', 1], ['triangle', 1], ['boilingTube', 3], ['testTube', 8], ['rack', 1], ['ttHolder', 1], ['washBottle', 1], ['pen', 1], ['stopclock', 1]],
    extras: [...commonExtras, 'balance01'],
  },
  // ---------------- 2018 ----------------
  {
    paperId: '9701-35-mj18', excess: 25, supervisor: questionsOnly('Questions 1 and 2', '1 ба 2-р асуултын'), ventilation: 'SO2',
    materials: [
      solid('fa1', 'FA 1', '3.5 ± 0.1 g', 3.5, { en: 'hydrated sodium carbonate, Na2CO3·10H2O', mn: 'усжсан натрийн карбонат, Na2CO3·10H2O' }, 'Na2CO3·10H2O', ['MH']),
      { id: 'fa2', label: 'FA 2', amount: 150, unit: 'cm3', identity: conc('0.110', 'hydrochloric acid', 'давсны хүчил'), how: dilute('55 cm³', '2.0 mol/dm³ HCl', 'Make the 2.0 mol/dm³ HCl as in the syllabus.', '2.0 моль/дм³ HCl-ийг хөтөлбөрийн зааврын дагуу бэлтгэнэ.'), recipe: 'dilute_hydrochloric_acid' },
      methylOrange(10),
      solid('fa4', 'FA 4', '2.5 ± 0.2 g', 2.5, { en: 'hydrated magnesium sulfate, MgSO4·7H2O', mn: 'усжсан магнийн сульфат, MgSO4·7H2O' }, 'MgSO4·7H2O'),
      solid('fa5', 'FA 5', 'about 1 g', 1, { en: 'hydrated iron(II) sulfate, FeSO4·7H2O', mn: 'усжсан төмөр(II) сульфат, FeSO4·7H2O' }, 'FeSO4·7H2O', ['MH']),
      { id: 'h2o2', label: 'hydrogen peroxide', amount: 5, unit: 'cm3', identity: { en: '5 volume hydrogen peroxide', mn: '5 эзлэхүүний устөрөгчийн хэт исэл' }, how: dilute('50 cm³', '100 volume H2O2'), hazards: ['C'] },
      { id: 'scn', label: 'ammonium thiocyanate', amount: 5, unit: 'cm3', identity: conc('0.1', 'ammonium thiocyanate', 'аммонийн тиоцианат'), how: dissolve([[['7.6 g', 'NH4SCN']]]), hazards: ['MH'] },
      water(300),
    ],
    apparatus: [['beaker250', 1], ['glassRod', 1], ['spatula', 1], ['stopclock', 1], ['volFlask250', 1], ['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['buretteStand', 1], ['funnelBurette', 1], ['whiteTile', 1], ['conical', 2], ['crucible', 1], ['triangle', 1], ['tongs', 1], ['beaker100', 1], ['tripod', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['hardGlass', 1], ['testTube', 8], ['boilingTube', 1], ['rack', 1], ['teatPipette', 2], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01'],
  },
  {
    paperId: '9701-35-on18', excess: 25, supervisor: questionsOnly('Question 1', '1-р асуултын'), ventilation: 'NH3',
    materials: [
      solid('fa1', 'FA 1', '3.0 ± 0.1 g', 3.0, { en: 'mixture of anhydrous sodium carbonate and sodium chloride (2 : 1 by mass)', mn: 'усгүй натрийн карбонат ба натрийн хлоридын холимог (массаар 2 : 1)' }, { en: 'the Na2CO3 + NaCl mixture', mn: 'Na2CO3 + NaCl холимог' }, ['MH'], 'Mix Na2CO3 and NaCl 2 : 1 by mass and mix the solids well.', 'Na2CO3 ба NaCl-ийг массаар 2 : 1 харьцаагаар сайтар холино.'),
      hcl2('fa2', 'FA 2', 100),
      solid('fa3', 'FA 3', '3.0 ± 0.1 g', 3.0, { en: 'a second sample of the same mixture as FA 1', mn: 'FA 1-тэй ижил холимгийн хоёр дахь дээж' }, { en: 'the Na2CO3 + NaCl mixture', mn: 'Na2CO3 + NaCl холимог' }, ['MH']),
      solid('fa4', 'FA 4', '1 g', 1, { en: 'sodium chloride', mn: 'натрийн хлорид' }, 'NaCl'),
      basicCopper('fa6', 'FA 6', '1 g', 1),
      { id: 'fa7', label: 'FA 7', amount: 20, unit: 'cm3', identity: { en: 'a solution 0.2 mol/dm³ in zinc nitrate and 0.1 mol/dm³ in zinc sulfate', mn: '0.2 моль/дм³ цайрын нитрат ба 0.1 моль/дм³ цайрын сульфатын уусмал' }, how: dissolve([[['59.5 g', 'Zn(NO3)2·6H2O']], [['28.8 g', 'ZnSO4·7H2O']]]), hazards: ['MH', 'N'] },
    ],
    apparatus: [['cyl25', 1], ['polyCup', 2], ['beaker250', 1], ['thermometer', 1], ['stopclock', 1], ['glassRod', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['hardGlass', 1], ['testTube', 8], ['boilingTube', 2], ['rack', 1], ['spatula', 1], ['teatPipette', 2], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01'],
  },
  // ---------------- 2019 ----------------
  {
    paperId: '9701-35-mj19', excess: 10, supervisor: allQuestions,
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 200, unit: 'cm3', identity: conc('1.8', 'hydrochloric acid', 'давсны хүчил'), how: dilute('900 cm³', '2.0 mol/dm³ HCl'), recipe: 'dilute_hydrochloric_acid' },
      { id: 'fa2', label: 'FA 2', amount: 180, unit: 'cm3', identity: conc('2.0', 'sodium hydroxide', 'натрийн гидроксид'), how: benchHowNaoh, hazards: ['C'] },
      { id: 'fa3', label: 'FA 3', amount: 150, unit: 'cm3', identity: conc('0.0353', 'sodium carbonate', 'натрийн карбонат'), how: dissolve([[['3.74 g', 'Na2CO3'], ['10.10 g', 'Na2CO3·10H2O']]]), hazards: ['MH'] },
      { id: 'fa5', label: 'FA 5', amount: 15, unit: 'cm3', identity: { en: '0.2 mol/dm³ iron(III) chloride in 1.0 mol/dm³ HCl', mn: '1.0 моль/дм³ HCl дахь 0.2 моль/дм³ төмөр(III) хлорид' }, how: { en: 'Dissolve 32.5 g of FeCl3 or 54.1 g of FeCl3·6H2O in each dm³ of 1.0 mol/dm³ HCl (500 cm³ of 2.0 mol/dm³ HCl made up to 1 dm³). If it is cloudy, let it settle and decant, or filter.', mn: '1.0 моль/дм³ HCl-ийн (2.0 моль/дм³ HCl-ийн 500 см³-ийг 1 дм³ болгосон) дм³ тутамд 32.5 г FeCl3 эсвэл 54.1 г FeCl3·6H2O уусгана. Булингартай бол тунгааж юүлэх эсвэл шүүнэ.' }, hazards: ['C', 'MH'] },
      sulfuric1('fa6', 'FA 6', 15),
      { id: 'fa7', label: 'FA 7', amount: 20, unit: 'cm3', identity: conc('0.05', 'silver nitrate', 'мөнгөний нитрат'), how: syllabus, recipe: 'silver_nitrate' },
      water(300),
      methylOrange(10),
      { id: 'mg', label: 'magnesium', amount: 2, unit: 'piece', amountNote: { en: '2 × 1 cm strips', mn: '2 × 1 см тууз' }, identity: { en: 'freshly cleaned magnesium ribbon', mn: 'шинээр цэвэрлэсэн магнийн тууз' }, how: { en: 'Cut 1 cm strips of freshly cleaned magnesium ribbon.', mn: 'Шинээр цэвэрлэсэн магнийн туузыг 1 см-ээр хэрчинэ.' }, hazards: ['F'] },
      { id: 'ban', label: 'aqueous barium nitrate', amount: 10, unit: 'cm3', identity: conc('0.1', 'barium nitrate', 'барийн нитрат'), how: { en: 'Prepare as in the syllabus. Barium chloride is not a suitable substitute here.', mn: 'Хөтөлбөрийн зааврын дагуу бэлтгэнэ. Энд барийн хлоридоор орлуулж болохгүй.' }, recipe: 'barium_salt' },
      { id: 'na2co3', label: 'aqueous sodium carbonate', amount: 10, unit: 'cm3', identity: conc('1.0', 'sodium carbonate', 'натрийн карбонат'), how: dissolve([[['106.0 g', 'Na2CO3'], ['286.0 g', 'Na2CO3·10H2O']]]), hazards: ['MH'] },
    ],
    apparatus: [['beaker250', 1], ['cyl50', 1], ['polyCup', 1], ['thermometer', 1], ['burette50', 2], ['pipette25', 1], ['pipette10', 1], ['pipetteFiller', 1], ['volFlask250', 1], ['buretteStand', 2], ['funnelBurette', 2], ['conical', 2], ['whiteTile', 1], ['glassRod', 1], ['testTube', 8], ['rack', 1], ['bunsen', 1], ['mat', 1], ['teatPipette', 2], ['washBottle', 1], ['pen', 1]],
    extras: commonExtras,
  },
  {
    paperId: '9701-35-on19', excess: 10, supervisor: allQuestions, ventilation: 'NH3',
    materials: [
      solid('fa1', 'FA 1', '0.30 ± 0.05 g', 0.3, { en: 'magnesium powder', mn: 'магнийн нунтаг' }, { en: 'Mg powder', mn: 'Mg нунтаг' }, ['F']),
      { id: 'fa2', label: 'FA 2', amount: 100, unit: 'cm3', identity: conc('0.60', 'hydrochloric acid', 'давсны хүчил'), how: dilute('50.0 cm³', 'concentrated HCl (35–37%, about 11 mol/dm³)'), hazards: ['C', 'MH'] },
      { id: 'fa3', label: 'FA 3', amount: 125, unit: 'cm3', identity: conc('0.10', 'sodium hydroxide', 'натрийн гидроксид'), how: dilute('50.0 cm³', '2.0 mol/dm³ NaOH', 'Make the 2.0 mol/dm³ NaOH first (80.0 g in each dm³).', 'Эхлээд 2.0 моль/дм³ NaOH бэлтгэнэ (дм³ тутамд 80.0 г).'), hazards: ['C'] },
      solid('fa5', 'FA 5', '1.5 ± 0.1 g', 1.5, { en: 'aluminium ammonium sulfate, AlNH4(SO4)2·12H2O', mn: 'хөнгөн цагаан аммонийн сульфат, AlNH4(SO4)2·12H2O' }, 'AlNH4(SO4)2·12H2O', ['MH']),
      { id: 'fa8', label: 'FA 8', amount: 10, unit: 'cm3', identity: { en: '0.1 mol/dm³ iron(II) sulfate and 0.1 mol/dm³ potassium iodide', mn: '0.1 моль/дм³ төмөр(II) сульфат ба 0.1 моль/дм³ калийн иодид' }, how: dissolve([[['27.8 g', 'FeSO4·7H2O']], [['16.6 g', 'KI']]]), hazards: ['MH'] },
      water(250),
      starch('starch', 'starch indicator', 5),
      methylOrange(10),
    ],
    apparatus: [['cyl250', 1], ['cyl25', 1], ['gasFlask', 1], ['trough', 1], ['standClamp', 2], ['volFlask250', 1], ['burette50', 1], ['buretteClamp', 1], ['funnelBurette', 1], ['pipette25', 1], ['pipetteFiller', 1], ['conical', 2], ['whiteTile', 1], ['glassRod', 1], ['spatula', 1], ['testTube', 8], ['boilingTube', 2], ['hardGlass', 1], ['rack', 1], ['ttHolder', 1], ['teatPipette', 2], ['bunsen', 1], ['mat', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01'],
    notes: [note('Where 250 cm³ measuring cylinders are few, start some candidates on different questions.', '250 см³ цилиндр цөөн бол зарим сурагчийг өөр асуултаас эхлүүлнэ.')],
  },
  // ---------------- 2020 ----------------
  {
    paperId: '9701-35-mj20', excess: 10, supervisor: allQuestions,
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 150, unit: 'cm3', identity: conc('0.0200', 'potassium manganate(VII)', 'калийн манганат(VII)'), how: dissolve([[['3.16 g', 'KMnO4']]]), hazards: ['O', 'MH', 'N'] },
      { id: 'fa2', label: 'FA 2', amount: 150, unit: 'cm3', identity: conc('0.05', 'sodium ethanedioate', 'натрийн этандиоат'), how: dissolve([[['6.70 g', '(COO)2Na2']]]), hazards: ['MH'] },
      sulfuric1('fa3', 'FA 3', 150),
      solid('fa4', 'FA 4', '2.0 ± 0.1 g', 2.0, { en: 'hydrated manganese(II) sulfate', mn: 'усжсан манган(II) сульфат' }, { en: 'MnSO4·4H2O or MnSO4·H2O', mn: 'MnSO4·4H2O эсвэл MnSO4·H2O' }, ['HH', 'N']),
      { id: 'fa5', label: 'FA 5', amount: 15, unit: 'cm3', identity: conc('0.2', 'manganese(II) chloride', 'манган(II) хлорид'), how: dissolve([[['25.2 g', 'MnCl2'], ['39.6 g', 'MnCl2·4H2O']]]), hazards: ['MH'] },
      { id: 'fa6', label: 'FA 6', amount: 2, unit: 'cm3', identity: { en: 'distilled water', mn: 'нэрмэл ус' }, how: stoppered({ en: 'Provide 2 cm³ of distilled water', mn: '2 см³ нэрмэл ус' }), hazards: ['F', 'C', 'MH'] },
      { id: 'fa7', label: 'FA 7', amount: 2, unit: 'cm3', identity: { en: 'propan-1-ol (butan-1-ol is also suitable)', mn: 'пропан-1-ол (бутан-1-ол ч тохирно)' }, how: stoppered({ en: 'Provide 2 cm³', mn: '2 см³' }), hazards: ['F', 'C', 'MH'] },
      { id: 'fa8', label: 'FA 8', amount: 2, unit: 'cm3', identity: { en: 'propan-2-ol (butan-2-ol is also suitable)', mn: 'пропан-2-ол (бутан-2-ол ч тохирно)' }, how: stoppered({ en: 'Provide 2 cm³', mn: '2 см³' }), hazards: ['F', 'C', 'MH'] },
      { id: 'h2o2', label: 'hydrogen peroxide', amount: 2, unit: 'cm3', identity: { en: '10 volume hydrogen peroxide', mn: '10 эзлэхүүний устөрөгчийн хэт исэл' }, how: dilute('100 cm³', '100 volume H2O2'), hazards: ['C'] },
      { id: 'i2', label: 'aqueous iodine', amount: 5, unit: 'cm3', identity: { en: '0.1 mol/dm³ iodine in potassium iodide', mn: 'калийн иодид дахь 0.1 моль/дм³ иод' }, how: { en: 'Dissolve 25.4 g of I2 in 500 cm³ of 0.5 mol/dm³ KI (83.0 g KI in each dm³) and make up to 1.0 dm³. Supply 5 cm³ in a stoppered container.', mn: '25.4 г I2-ыг 500 см³ 0.5 моль/дм³ KI-д (дм³ тутамд 83.0 г KI) уусгаад 1.0 дм³ болгоно. 5 см³-ийг таглаатай саванд олгоно.' }, hazards: ['MH', 'N'] },
    ],
    apparatus: [['pipetteFiller', 1], ['pipette25', 1], ['burette50', 1], ['conical', 2], ['cyl25', 1], ['buretteStand', 1], ['beaker250', 1], ['funnelBurette', 1], ['whiteTile', 1], ['thermometer', 1], ['stopclock', 1], ['teatPipette', 2], ['spatula', 1], ['crucible', 1], ['tongs', 1], ['triangle', 1], ['tripod', 1], ['gauze', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['boilingTube', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01'],
    notes: [note('Label FA 6, FA 7 and FA 8 all with [F][C][MH], so they look the same.', 'FA 6, FA 7, FA 8-ыг бүгдийг нь [F][C][MH] гэж ижил шошголно.')],
  },
  {
    paperId: '9701-35-on20', excess: 10, supervisor: allQuestions, ventilation: 'SO2',
    materials: [
      solid('fa1', 'FA 1', '6.20 ± 0.1 g', 6.2, { en: 'hydrated sodium thiosulfate, Na2S2O3·5H2O', mn: 'усжсан натрийн тиосульфат, Na2S2O3·5H2O' }, 'Na2S2O3·5H2O'),
      { id: 'fa3', label: 'FA 3', amount: 150, unit: 'cm3', identity: conc('0.0500', 'iodine', 'иод'), how: dissolve([[['40.0 g', 'KI']], [['12.7 g', 'I2']]]), hazards: ['MH', 'N'] },
      hcl2('fa4', 'FA 4', 60, '2.00'),
      { id: 'fa5', label: 'FA 5', amount: 80, unit: 'cm3', identity: conc('0.100', 'sodium thiosulfate', 'натрийн тиосульфат'), how: dissolve([[['24.8 g', 'Na2S2O3·5H2O']]]) },
      solid('fa6', 'FA 6', '0.5 ± 0.1 g', 0.5, { en: 'sodium sulfite (from a freshly opened supply)', mn: 'натрийн сульфит (шинээр онгойлгосон савнаас)' }, 'Na2SO3', ['C', 'MH']),
      { id: 'fa8', label: 'FA 8', amount: 10, unit: 'cm3', identity: conc('0.25', 'copper(II) sulfate', 'зэс(II) сульфат'), how: dissolve([[['15.6 g', 'CuSO4·5H2O']]]), hazards: ['C', 'N'] },
      { id: 'h2o2', label: 'aqueous hydrogen peroxide', amount: 10, unit: 'cm3', identity: { en: '20 volume hydrogen peroxide', mn: '20 эзлэхүүний устөрөгчийн хэт исэл' }, how: dilute('200 cm³', '100 volume H2O2'), hazards: ['MH'] },
      { id: 'ki', label: 'aqueous potassium iodide', amount: 10, unit: 'cm3', identity: conc('1.00', 'potassium iodide', 'калийн иодид'), how: dissolve([[['166 g', 'KI']]]) },
      water(400),
      starch('starch', 'starch indicator', 10),
    ],
    apparatus: [['pipetteFiller', 1], ['volFlask250', 1], ['burette50', 1], ['pipette25', 1], ['cyl50', 1], ['cyl25', 1], ['buretteStand', 1], ['funnelBurette', 1], ['conical', 1], ['whiteTile', 1], ['beaker100', 1], ['beaker250', 1], ['glassRod', 1], ['testTube', 6], ['boilingTube', 1], ['rack', 1], ['teatPipette', 2], ['stopclock', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01', 'quench'],
  },
  // ---------------- 2021 ----------------
  {
    paperId: '9701-35-mj21', excess: 10, supervisor: allQuestions, ventilation: 'NH3',
    materials: [
      solid('fa1', 'FA 1', '2.2–2.3 g', 2.2, { en: 'amidosulfonic acid (sulfamic acid), NH2SO3H', mn: 'амидосульфоны хүчил (сульфамын хүчил), NH2SO3H' }, 'NH2SO3H', ['MH']),
      { id: 'fa2', label: 'FA 2', amount: 150, unit: 'cm3', identity: conc('0.0450', 'sodium carbonate', 'натрийн карбонат'), how: dissolve([[['4.77 g', 'Na2CO3']]]), hazards: ['MH'] },
      solid('fa4', 'FA 4', '3.0–3.1 g', 3.0, { en: 'hydrated barium chloride, BaCl2·2H2O', mn: 'усжсан барийн хлорид, BaCl2·2H2O' }, 'BaCl2·2H2O', ['T']),
      solid('fa5', 'FA 5', '3.0 ± 0.1 g', 3.0, { en: 'ammonium carbonate', mn: 'аммонийн карбонат' }, '(NH4)2CO3', ['MH'], 'The notes column of the instructions says 2.0–2.1 g, so check the printed instructions.', 'Зааврын тайлбар баганад 2.0–2.1 г гэж бичсэн тул хэвлэмэл зааврыг шалгана уу.'),
      methylOrange(10),
      water(350),
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette', 1], ['conical', 2], ['buretteStand', 1], ['volFlask250', 1], ['beaker100', 1], ['beaker250', 1], ['funnelBurette', 1], ['whiteTile', 1], ['glassRod', 1], ['stopclock', 1], ['teatPipette', 2], ['spatula', 1], ['crucible', 1], ['tongs', 1], ['triangle', 1], ['tripod', 1], ['bunsen', 1], ['mat', 1], ['hardGlass', 1], ['testTube', 4], ['boilingTube', 1], ['rack', 1], ['ttHolder', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01'],
  },
  {
    paperId: '9701-35-on21', excess: 10, supervisor: allQuestions,
    materials: [
      solid('fa1', 'FA 1', '1.8–2.2 g', 2.0, { en: 'hydrated sodium carbonate, Na2CO3·10H2O', mn: 'усжсан натрийн карбонат, Na2CO3·10H2O' }, 'Na2CO3·10H2O', ['MH']),
      { id: 'fa2', label: 'FA 2', amount: 50, unit: 'cm3', identity: conc('1.00', 'sodium hydroxide', 'натрийн гидроксид'), how: dissolve([[['40.0 g', 'NaOH']]]), hazards: ['C'] },
      { id: 'fa3', label: 'FA 3', amount: 120, unit: 'cm3', identity: conc('0.0500', 'sulfuric acid', 'хүхрийн хүчил'), how: dilute('50.0 cm³', '1.00 mol/dm³ H2SO4'), hazards: ['MH'], recipe: 'dilute_sulfuric_acid' },
      { id: 'fa5', label: 'FA 5', amount: 20, unit: 'cm3', identity: conc('0.10', 'barium chloride', 'барийн хлорид'), how: syllabus, recipe: 'barium_salt' },
      sulfuric1('fa6', 'FA 6', 20),
      { id: 'fa7', label: 'FA 7', amount: 20, unit: 'cm3', identity: conc('1.0', 'sodium hydroxide', 'натрийн гидроксид'), how: { en: 'Prepare as in the syllabus, or dilute 500 cm³ of 2 mol/dm³ NaOH to 1 dm³.', mn: 'Хөтөлбөрийн зааврын дагуу, эсвэл 2 моль/дм³ NaOH-ийн 500 см³-ийг 1 дм³ болгож бэлтгэнэ.' }, recipe: 'aqueous_sodium_hydroxide', hazards: ['C'] },
      { id: 'fa8', label: 'FA 8', amount: 20, unit: 'cm3', identity: conc('1.0', 'methanoic acid', 'метаны хүчил'), how: dissolve([[['46.0 g', 'HCOOH']]]), hazards: ['MH'] },
      bromophenol('bpb', 'bromophenol blue indicator', 10),
      { id: 'mgcl2', label: 'magnesium chloride', amount: 10, unit: 'cm3', identity: conc('0.5', 'magnesium chloride', 'магнийн хлорид'), how: dissolve([[['47.5 g', 'MgCl2'], ['101.5 g', 'MgCl2·6H2O']]]) },
      { id: 'na2co3', label: 'sodium carbonate', amount: 10, unit: 'cm3', identity: conc('0.5', 'sodium carbonate', 'натрийн карбонат'), how: dissolve([[['53.0 g', 'Na2CO3'], ['143.0 g', 'Na2CO3·10H2O']]]), hazards: ['MH'] },
      solid('nh4cl', 'ammonium chloride', 'about 0.5 g', 0.5, { en: 'ammonium chloride', mn: 'аммонийн хлорид' }, 'NH4Cl', ['MH']),
      { id: 'cuso4', label: 'copper(II) sulfate', amount: 10, unit: 'cm3', identity: conc('0.2', 'copper(II) sulfate', 'зэс(II) сульфат'), how: dissolve([[['49.9 g', 'CuSO4·5H2O']]]), hazards: ['C', 'N'] },
      { id: 'mg', label: 'magnesium', amount: 2, unit: 'piece', amountNote: { en: '2 × about 1 cm lengths', mn: '2 × ≈1 см тууз' }, identity: { en: 'magnesium ribbon', mn: 'магнийн тууз' }, how: { en: 'Cut lengths of about 1 cm of magnesium ribbon.', mn: 'Магнийн туузыг ≈1 см-ээр хэрчинэ.' }, hazards: ['F'] },
    ],
    apparatus: [['burette50', 1], ['pipette25', 1], ['pipetteFiller', 1], ['buretteStand', 1], ['funnelBurette', 1], ['whiteTile', 1], ['conical', 2], ['beaker100', 1], ['beaker250', 1], ['volFlask250', 1], ['crucible', 1], ['tongs', 1], ['triangle', 1], ['tripod', 1], ['gauze', 1], ['bunsen', 1], ['mat', 1], ['spatula', 1], ['glassRod', 1], ['testTube', 8], ['boilingTube', 1], ['ttHolder', 1], ['rack', 1], ['stopclock', 1], ['teatPipette', 2], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance01'],
  },
  // ---------------- 2022 ----------------
  {
    paperId: '9701-35-mj22', excess: 10, supervisor: allQuestions,
    materials: [
      basicCopper('fa1', 'FA 1', '2.0 ± 0.1 g', 2.0),
      hcl2('fa2', 'FA 2', 30),
      { id: 'fa3', label: 'FA 3', amount: 130, unit: 'cm3', identity: conc('0.095', 'copper(II) sulfate', 'зэс(II) сульфат'), how: dissolve([[['23.73 g', 'CuSO4·5H2O']]]), hazards: ['MH'] },
      { id: 'fa4', label: 'FA 4', amount: 150, unit: 'cm3', identity: conc('0.100', 'sodium thiosulfate', 'натрийн тиосульфат'), how: dissolve([[['24.82 g', 'Na2S2O3·5H2O'], ['15.82 g', 'Na2S2O3']]]) },
      { id: 'fa5', label: 'FA 5', amount: 75, unit: 'cm3', identity: conc('0.50', 'potassium iodide', 'калийн иодид'), how: dissolve([[['83.0 g', 'KI']]]) },
      starch('fa6', 'FA 6', 10),
      basicCopper('fa7', 'FA 7', '1.0 ± 0.1 g', 1.0, 'The same compound as FA 1.', 'FA 1-тэй ижил бодис.'),
      { id: 'fa8', label: 'FA 8', amount: 10, unit: 'cm3', identity: conc('0.105', 'copper(II) sulfate', 'зэс(II) сульфат'), how: dissolve([[['26.21 g', 'CuSO4·5H2O']]], 'The instructions call this the same solution as FA 3.', 'Зааварт үүнийг FA 3-тай ижил уусмал гэжээ.'), hazards: ['MH'] },
      solid('m', 'M', '1.0 ± 0.1 g', 1.0, { en: 'magnesium powder', mn: 'магнийн нунтаг' }, 'Mg', ['F']),
      { id: 'fa9', label: 'FA 9', amount: 10, unit: 'cm3', identity: conc('0.2', 'sodium carbonate', 'натрийн карбонат'), how: dissolve([[['21.2 g', 'Na2CO3'], ['57.2 g', 'Na2CO3·10H2O']]], 'Prepare it fresh for the practical.', 'Шалгалтын өмнө шинээр бэлтгэнэ.'), hazards: ['MH'] },
      { id: 'fa10', label: 'FA 10', amount: 10, unit: 'cm3', identity: conc('0.1', 'potassium iodide', 'калийн иодид'), how: dissolve([[['16.6 g', 'KI']]]) },
      { id: 'conchcl', label: 'Conc. HCl', amount: 3, unit: 'cm3', identity: { en: 'concentrated hydrochloric acid', mn: 'өтгөн давсны хүчил' }, how: stoppered({ en: 'Provide 3 cm³', mn: '3 см³' }), hazards: ['C', 'MH'] },
      { id: 'edta', label: 'aqueous EDTA', amount: 10, unit: 'cm3', identity: conc('0.1', 'disodium EDTA', 'EDTA-ийн динатрийн давс'), how: dissolve([[['37.2 g', { en: 'disodium EDTA dihydrate', mn: 'EDTA-ийн динатрийн давс (2 усжсан)' }]]]), hazards: ['MH'] },
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 3], ['cyl25', 1], ['buretteStand', 1], ['beaker100', 1], ['funnelBurette', 1], ['whiteTile', 1], ['glassRod', 1], ['teatPipette', 2], ['spatula', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['hardGlass', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
  },
  {
    paperId: '9701-35-on22', excess: 10, supervisor: allQuestions,
    bench: [{ key: 'naoh', amount: 20 }],
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 150, unit: 'cm3', identity: conc('0.0500', 'ethanedioic acid', 'этандионы хүчил'), how: dissolve([[['6.30 g', '(COOH)2·2H2O']]]), hazards: ['MH'] },
      { id: 'fa2', label: 'FA 2', amount: 150, unit: 'cm3', identity: { en: '0.0200 mol/dm³ potassium manganate(VII) in 0.5 mol/dm³ sulfuric acid', mn: '0.5 моль/дм³ хүхрийн хүчил дахь 0.0200 моль/дм³ калийн манганат(VII)' }, how: { en: 'Dissolve 3.16 g of KMnO4 in each dm³ of 0.5 mol/dm³ H2SO4.', mn: '0.5 моль/дм³ H2SO4-ийн дм³ тутамд 3.16 г KMnO4 уусгана.' }, hazards: ['MH'] },
      sulfuric1('fa3', 'FA 3', 100, '1.00'),
      solid('fa4', 'FA 4', '5.0 ± 0.2 g', 5.0, { en: 'hydrated copper(II) sulfate, CuSO4·5H2O', mn: 'усжсан зэс(II) сульфат, CuSO4·5H2O' }, 'CuSO4·5H2O', ['C', 'MH', 'N']),
      solid('fa5', 'FA 5', '1.5 ± 0.1 g', 1.5, { en: 'anhydrous copper(II) sulfate', mn: 'усгүй зэс(II) сульфат' }, 'CuSO4', ['C', 'MH', 'N']),
      { id: 'fa6', label: 'FA 6', amount: 20, unit: 'cm3', identity: { en: '0.2 mol/dm³ zinc nitrate and 0.2 mol/dm³ potassium iodide', mn: '0.2 моль/дм³ цайрын нитрат ба 0.2 моль/дм³ калийн иодид' }, how: dissolve([[['59.4 g', 'Zn(NO3)2·6H2O']], [['33.2 g', 'KI']]]), hazards: ['N'] },
      { id: 'fa7', label: 'FA 7', amount: 5, unit: 'cm3', identity: { en: 'butan-2-ol (ethanol if butan-2-ol is not available)', mn: 'бутан-2-ол (байхгүй бол этанол)' }, how: stoppered({ en: 'Provide 5 cm³', mn: '5 см³' }), hazards: ['F', 'MH'] },
      peroxide10(5),
      { id: 'i2', label: 'aqueous iodine', amount: 5, unit: 'cm3', identity: { en: '0.05 mol/dm³ iodine in 0.02 mol/dm³ potassium iodide', mn: '0.02 моль/дм³ калийн иодид дахь 0.05 моль/дм³ иод' }, how: { en: 'Make a KI solution with 3.32 g of KI in each dm³, then dissolve 12.7 g of I2 in each dm³ of it.', mn: 'Дм³ тутамд 3.32 г KI-тэй уусмал бэлтгээд, түүний дм³ тутамд 12.7 г I2 уусгана.' }, hazards: ['MH', 'N'] },
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 2], ['cyl25', 1], ['buretteStand', 1], ['beaker100', 1], ['beaker250', 1], ['funnelBurette', 1], ['whiteTile', 1], ['thermometer', 1], ['cup', 1], ['glassRod', 1], ['teatPipette', 2], ['spatula', 1], ['tripod', 1], ['gauze', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['boilingTube', 2], ['testTube', 6], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
  },
  // ---------------- 2023 ----------------
  {
    paperId: '9701-35-mj23', excess: 10, supervisor: allQuestions,
    bench: [{ key: 'nh3', amount: 20 }, { key: 'naoh', amount: 20 }],
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 70, unit: 'cm3', identity: conc('1.0', 'hydrochloric acid', 'давсны хүчил'), how: dilute('500 cm³', '2.0 mol/dm³ HCl'), recipe: 'dilute_hydrochloric_acid' },
      solid('fa2', 'FA 2', '0.20 ± 0.02 g', 0.2, { en: 'magnesium ribbon (for experiment 1)', mn: 'магнийн тууз (1-р туршилтад)' }, { en: 'magnesium ribbon', mn: 'магнийн тууз' }, ['F'], 'Label the container «For experiment 1». Use ribbon from the same source for the supervisor and every candidate in a group.', 'Савыг «For experiment 1» гэж шошголно. Хянагч ба нэг бүлгийн бүх сурагчид нэг эх үүсвэрийн тууз хэрэглэнэ.'),
      hcl2('fa3', 'FA 3', 40),
      solid('fa4', 'FA 4', '0.40 ± 0.02 g', 0.4, { en: 'magnesium ribbon cut into 1 cm strips (for experiment 2)', mn: '1 см-ээр хэрчсэн магнийн тууз (2-р туршилтад)' }, { en: 'magnesium ribbon', mn: 'магнийн тууз' }, ['F'], 'Label the container «For experiment 2». Same source as FA 2.', 'Савыг «For experiment 2» гэж шошголно. FA 2-той нэг эх үүсвэрийнх.'),
      solid('fa5', 'FA 5', '0.5 ± 0.1 g', 0.5, { en: 'magnesium carbonate (any basic magnesium carbonate)', mn: 'магнийн карбонат (ямар ч суурилаг магнийн карбонат)' }, 'MgCO3'),
      { id: 'fa6', label: 'FA 6', amount: 10, unit: 'cm3', identity: { en: '0.10 mol/dm³ iron(II) sulfate and 0.10 mol/dm³ potassium iodide in dilute sulfuric acid', mn: 'шингэрүүлсэн хүхрийн хүчил дахь 0.10 моль/дм³ төмөр(II) сульфат ба 0.10 моль/дм³ калийн иодид' }, how: { en: 'Dissolve 27.8 ± 0.2 g of FeSO4·7H2O and 16.6 ± 0.2 g of KI in about 50 cm³ of 1.0 mol/dm³ H2SO4 and dilute to 1.0 dm³.', mn: '27.8 ± 0.2 г FeSO4·7H2O ба 16.6 ± 0.2 г KI-г ≈50 см³ 1.0 моль/дм³ H2SO4-д уусгаад 1.0 дм³ хүртэл шингэрүүлнэ.' }, hazards: ['MH'] },
      starch('starch', 'starch', 5),
      peroxide10(5),
    ],
    apparatus: [['cyl50', 1], ['cyl250', 1], ['beaker250', 1], ['beaker100', 1], ['standClamp', 2], ['trough', 1], ['gasFlask', 1], ['thermometer', 1], ['cup', 1], ['glassRod', 1], ['stopclock', 1], ['teatPipette', 2], ['spatula', 1], ['ttHolder', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
  },
  {
    paperId: '9701-35-on23', excess: 10, supervisor: allQuestions,
    bench: [{ key: 'naoh', amount: 20 }],
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 70, unit: 'cm3', identity: conc('0.500', 'hydrochloric acid', 'давсны хүчил'), how: dilute('250 cm³', '2.0 mol/dm³ HCl'), recipe: 'dilute_hydrochloric_acid' },
      solid('fa2', 'FA 2', '1.9 ± 0.1 g', 1.9, { en: 'hydrated sodium carbonate, Na2CO3·10H2O', mn: 'усжсан натрийн карбонат, Na2CO3·10H2O' }, 'Na2CO3·10H2O', ['MH'], 'A fresh supply is not needed.', 'Шинэ савнаас авах шаардлагагүй.'),
      { id: 'fa3', label: 'FA 3', amount: 120, unit: 'cm3', identity: conc('0.100', 'hydrochloric acid', 'давсны хүчил'), how: dilute('50 cm³', '2.0 mol/dm³ HCl'), recipe: 'dilute_hydrochloric_acid' },
      { id: 'fa4', label: 'FA 4', amount: 120, unit: 'cm3', identity: { en: '14.30 g/dm³ hydrated sodium carbonate', mn: '14.30 г/дм³ усжсан натрийн карбонат' }, how: dissolve([[['14.30 ± 0.20 g', 'Na2CO3·10H2O']]]), hazards: ['MH'] },
      bromophenol('fa5', 'FA 5', 5),
      solid('fa6', 'FA 6', 'about 1 g', 1, { en: 'sodium nitrate', mn: 'натрийн нитрат' }, 'NaNO3', ['O', 'N', 'T']),
      solid('fa7', 'FA 7', 'about 1 g', 1, { en: 'sodium nitrite', mn: 'натрийн нитрит' }, 'NaNO2', ['O', 'N', 'T']),
      solid('fa8', 'FA 8', 'about 1 g', 1, { en: 'ammonium chloride', mn: 'аммонийн хлорид' }, 'NH4Cl', ['O', 'N', 'T']),
      solid('fa9', 'FA 9', 'about 1 g', 1, { en: 'potassium manganate(VII)', mn: 'калийн манганат(VII)' }, 'KMnO4', ['O', 'MH', 'HH', 'N']),
      solid('fa10', 'FA 10', 'about 1 g', 1, { en: 'manganese(II) chloride or manganese(II) sulfate', mn: 'манган(II) хлорид эсвэл манган(II) сульфат' }, { en: 'MnCl2 or MnSO4', mn: 'MnCl2 эсвэл MnSO4' }, ['MH', 'N']),
      { id: 'feso4', label: 'aqueous iron(II) sulfate', amount: 5, unit: 'cm3', identity: { en: '0.1 mol/dm³ acidified iron(II) sulfate', mn: '0.1 моль/дм³ хүчиллэгжүүлсэн төмөр(II) сульфат' }, how: dissolve([[['28.1 g', 'FeSO4·7H2O']]], 'Each dm³ also contains 10 cm³ of 1 mol/dm³ H2SO4.', 'Дм³ бүрт 1 моль/дм³ H2SO4-ийн 10 см³ мөн орно.'), hazards: ['MH'] },
      { id: 'ki', label: 'aqueous potassium iodide', amount: 5, unit: 'cm3', identity: conc('0.1', 'potassium iodide', 'калийн иодид'), how: dissolve([[['16.6 g', 'KI']]]) },
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 2], ['cyl50', 1], ['cyl250', 1], ['buretteStand', 1], ['beaker100', 1], ['funnelBurette', 1], ['whiteTile', 1], ['standClamp', 2], ['trough', 1], ['gasFlask', 1], ['glassRod', 1], ['teatPipette', 2], ['spatula', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['boilingTube', 3], ['hardGlass', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
    notes: [note('FA 6, FA 7 and FA 8 all carry the same hazard label [O][N][T].', 'FA 6, FA 7, FA 8 бүгд [O][N][T] гэсэн ижил аюулын шошготой.')],
  },
  // ---------------- 2024 ----------------
  {
    paperId: '9701-35-mj24', excess: 10, supervisor: allQuestions,
    bench: [{ key: 'limewater', amount: 20 }],
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 60, unit: 'cm3', identity: conc('0.020', 'potassium peroxodisulfate', 'калийн пероксодисульфат'), how: dissolve([[['5.41 g', 'K2S2O8']]], 'Suppliers may call it potassium persulfate.', 'Нийлүүлэгч «potassium persulfate» гэж нэрлэж болно.'), hazards: ['O', 'HH', 'MH'] },
      { id: 'fa2', label: 'FA 2', amount: 60, unit: 'cm3', identity: conc('0.0050', 'sodium thiosulfate', 'натрийн тиосульфат'), how: dissolve([[['1.24 g', 'Na2S2O3·5H2O']]]) },
      { id: 'fa3', label: 'FA 3', amount: 50, unit: 'cm3', identity: conc('1.0', 'potassium iodide', 'калийн иодид'), how: dissolve([[['166.0 g', 'KI']]]) },
      starch('fa4', 'FA 4', 2),
      solid('fa5', 'FA 5', '5.0 ± 0.1 g', 5.0, { en: 'ammonium chloride', mn: 'аммонийн хлорид' }, 'NH4Cl', ['MH']),
      solid('fa6', 'FA 6', '0.5 ± 0.1 g', 0.5, { en: 'potassium manganate(VII)', mn: 'калийн манганат(VII)' }, 'KMnO4', ['O', 'MH', 'HH', 'N']),
      { id: 'fa8', label: 'FA 8', amount: 10, unit: 'cm3', identity: conc('0.50', 'sodium carbonate', 'натрийн карбонат'), how: dissolve([[['53.0 g', 'Na2CO3'], ['143.0 g', 'Na2CO3·10H2O']]]), hazards: ['MH'] },
      { id: 'fa9', label: 'FA 9', amount: 10, unit: 'cm3', identity: { en: '0.20 mol/dm³ copper(II) sulfate in 0.10 mol/dm³ sulfuric acid', mn: '0.10 моль/дм³ хүхрийн хүчил дахь 0.20 моль/дм³ зэс(II) сульфат' }, how: { en: 'Dilute 100 cm³ of 1.0 mol/dm³ H2SO4 to 1 dm³, then dissolve 49.9 g of CuSO4·5H2O in each dm³ of this acid.', mn: '1.0 моль/дм³ H2SO4-ийн 100 см³-ийг 1 дм³ болгоод, энэ хүчлийн дм³ тутамд 49.9 г CuSO4·5H2O уусгана.' }, hazards: ['C', 'N'] },
      water(100),
    ],
    apparatus: [['burette50', 2], ['cyl25', 1], ['buretteStand', 2], ['beaker100', 2], ['beaker250', 1], ['funnelBurette', 1], ['whiteTile', 1], ['thermometer', 1], ['cup', 1], ['glassRod', 1], ['stopclock', 1], ['teatPipette', 2], ['spatula', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['boilingTube', 2], ['hardGlass', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1], ['funnelFilter', 1], ['filterPaper', 1]],
    extras: [...commonExtras, 'balance001'],
  },
  {
    paperId: '9701-35-on24', excess: 10, supervisor: allQuestions,
    bench: [{ key: 'hno3', amount: 15 }, { key: 'kmno4', omit: true }],
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 100, unit: 'cm3', identity: conc('2.01', 'sodium hydroxide', 'натрийн гидроксид'), how: dissolve([[['80.4 g', 'NaOH']]]), hazards: ['C'] },
      sulfuric1('fa2', 'FA 2', 150, '1.00'),
      solid('fa3', 'FA 3', '6.0 ± 0.1 g', 6.0, { en: 'sodium carbonate', mn: 'натрийн карбонат' }, 'Na2CO3', ['MH'], 'Na2CO3·10H2O is also suitable: use 16.0 ± 0.1 g.', 'Na2CO3·10H2O ч тохирно: 16.0 ± 0.1 г хэрэглэнэ.'),
      solid('fa4', 'FA 4', 'about 1 g', 1, { en: 'potassium manganate(VII)', mn: 'калийн манганат(VII)' }, 'KMnO4', ['N', 'O', 'MH', 'HH']),
      solid('fa5', 'FA 5', 'about 1 g', 1, { en: 'manganese(II) sulfate', mn: 'манган(II) сульфат' }, 'MnSO4·7H2O', ['HH', 'N']),
      solid('fa6', 'FA 6', 'about 1 g', 1, { en: 'manganese(IV) oxide', mn: 'манган(IV) исэл' }, 'MnO2', ['MH']),
      { id: 'feso4', label: 'iron(II) sulfate', amount: 5, unit: 'cm3', identity: conc('0.2', 'iron(II) sulfate', 'төмөр(II) сульфат'), how: dissolve([[['about 56 g', 'FeSO4·7H2O']]], 'Prepare it fresh, or use about 500 cm³ of 1.00 mol/dm³ H2SO4 in each dm³.', 'Шинээр бэлтгэх, эсвэл дм³ тутамд ≈500 см³ 1.00 моль/дм³ H2SO4 хэрэглэнэ.'), hazards: ['MH'] },
      peroxide10(10),
      { id: 'conchcl', label: 'concentrated hydrochloric acid', amount: 2, unit: 'cm3', identity: { en: 'concentrated hydrochloric acid', mn: 'өтгөн давсны хүчил' }, how: stoppered({ en: 'Provide about 2 cm³', mn: '≈2 см³' }), hazards: ['C', 'MH'] },
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 1], ['cyl25', 1], ['buretteStand', 1], ['beaker250', 1], ['beaker100', 1], ['funnelBurette', 1], ['thermometer', 1], ['cup', 1], ['glassRod', 1], ['teatPipette', 2], ['spatula', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['boilingTube', 2], ['hardGlass', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
  },
  // ---------------- 2025 ----------------
  {
    paperId: '9701-35-mj25', excess: 10, supervisor: allQuestions,
    materials: [
      solid('fa1', 'FA 1', '1.10 ± 0.10 g', 1.1, { en: 'potassium carbonate', mn: 'калийн карбонат' }, 'K2CO3', ['MH']),
      { id: 'fa2', label: 'FA 2', amount: 70, unit: 'cm3', identity: conc('0.250', 'sulfuric acid', 'хүхрийн хүчил'), how: dilute('250 cm³', '1.00 mol/dm³ H2SO4'), hazards: ['MH'], recipe: 'dilute_sulfuric_acid' },
      { id: 'fa3', label: 'FA 3', amount: 150, unit: 'cm3', identity: conc('0.105', 'sodium hydroxide', 'натрийн гидроксид'), how: dissolve([[['4.20 g', 'NaOH']]], 'The question paper describes FA 3 differently.', 'Асуултын хуудсанд FA 3-ыг өөрөөр тайлбарласан.'), hazards: ['C'] },
      { id: 'fa4', label: 'FA 4', amount: 150, unit: 'cm3', identity: conc('0.0500', 'sulfuric acid', 'хүхрийн хүчил'), how: dilute('50.0 cm³', '1.00 mol/dm³ H2SO4'), hazards: ['MH'], recipe: 'dilute_sulfuric_acid' },
      bromophenol('fa5', 'FA 5', 2),
      { id: 'fa6', label: 'FA 6', amount: 20, unit: 'cm3', identity: conc('0.20', 'iron(II) sulfate', 'төмөр(II) сульфат'), how: { en: 'Add 55.6 g of FeSO4·7H2O to 100 cm³ of 1.00 mol/dm³ H2SO4 and make up to 1 dm³ with distilled water.', mn: '55.6 г FeSO4·7H2O-ыг 100 см³ 1.00 моль/дм³ H2SO4-д хийж, нэрмэл усаар 1 дм³ болгоно.' }, hazards: ['MH'] },
      { id: 'fa7', label: 'FA 7', amount: 20, unit: 'cm3', identity: conc('0.050', 'chromium(III) chloride', 'хром(III) хлорид'), how: dissolve([[['13.3 g', 'CrCl3·6H2O']]]), hazards: ['MH'] },
      { id: 'fa8', label: 'FA 8', amount: 5, unit: 'cm3', identity: { en: 'aqueous ethanol (50%)', mn: 'этанолын усан уусмал (50%)' }, how: { en: 'Dilute 500.0 cm³ of ethanol to 1 dm³. Supply in a stoppered container.', mn: '500.0 см³ этанолыг 1 дм³ хүртэл шингэрүүлнэ. Таглаатай саванд олгоно.' }, hazards: ['F', 'MH', 'HH'] },
      peroxide10(5, { en: 'Supply in a stoppered container.', mn: 'Таглаатай саванд олгоно.' }),
      solid('na2co3', 'sodium carbonate', '0.9–1.1 g', 1.0, { en: 'sodium carbonate (any hydrate is also suitable)', mn: 'натрийн карбонат (усжсан хэлбэр ч тохирно)' }, 'Na2CO3', ['MH']),
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 2], ['cyl50', 1], ['cyl250', 1], ['buretteStand', 1], ['beaker100', 1], ['beaker250', 1], ['funnelBurette', 1], ['whiteTile', 1], ['standClamp', 2], ['trough', 1], ['gasFlask', 1], ['glassRod', 1], ['teatPipette', 2], ['spatula', 1], ['tripod', 1], ['gauze', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
    notes: [note('The supervisor and all candidates use the same size of conical flask for collecting gas.', 'Хянагч ба бүх сурагч хий цуглуулахдаа ижил хэмжээтэй конусан колбо хэрэглэнэ.')],
  },
  {
    paperId: '9701-35-on25', excess: 10, supervisor: allQuestions,
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 150, unit: 'cm3', identity: { en: '0.0492 mol/dm³ ethanedioic acid or sodium ethanedioate', mn: '0.0492 моль/дм³ этандионы хүчил эсвэл натрийн этандиоат' }, how: dissolve([[['6.20 g', '(COOH)2·2H2O'], ['6.59 g', 'Na2C2O4']]], 'Ethanedioic acid is also called oxalic acid.', 'Этандионы хүчлийг оксалийн хүчил гэж бас нэрлэдэг.'), hazards: ['MH'] },
      { id: 'fa2', label: 'FA 2', amount: 150, unit: 'cm3', identity: { en: '0.0200 mol/dm³ potassium manganate(VII) in 0.5 mol/dm³ sulfuric acid', mn: '0.5 моль/дм³ хүхрийн хүчил дахь 0.0200 моль/дм³ калийн манганат(VII)' }, how: { en: 'Dissolve 3.16 g of KMnO4 in each dm³ of 0.5 mol/dm³ H2SO4. Also used as FA 7.', mn: '0.5 моль/дм³ H2SO4-ийн дм³ тутамд 3.16 г KMnO4 уусгана. FA 7-д мөн хэрэглэнэ.' }, hazards: ['MH'] },
      sulfuric1('fa3', 'FA 3', 100, '1.00'),
      solid('fa4', 'FA 4', '3.20 ± 0.20 g', 3.2, { en: 'hydrated zinc sulfate, ZnSO4·7H2O', mn: 'усжсан цайрын сульфат, ZnSO4·7H2O' }, 'ZnSO4·7H2O', ['C', 'MH', 'N']),
      solid('fa5', 'FA 5', '2.0 ± 0.1 g', 2.0, { en: 'hydrated magnesium sulfate, MgSO4·7H2O', mn: 'усжсан магнийн сульфат, MgSO4·7H2O' }, 'MgSO4·7H2O'),
      solid('fa6', 'FA 6', '0.4 ± 0.1 g', 0.4, { en: 'potassium manganate(VII)', mn: 'калийн манганат(VII)' }, 'KMnO4', ['O', 'MH', 'HH', 'N']),
      { id: 'fa7', label: 'FA 7', amount: 10, unit: 'cm3', identity: { en: '0.0200 mol/dm³ acidified potassium manganate(VII)', mn: '0.0200 моль/дм³ хүчиллэгжүүлсэн калийн манганат(VII)' }, how: { en: 'The same solution as FA 2.', mn: 'FA 2-той ижил уусмал.' }, hazards: ['MH'] },
      { id: 'fa8', label: 'FA 8', amount: 10, unit: 'cm3', identity: { en: '0.10 mol/dm³ manganese(II) sulfate or manganese(II) chloride', mn: '0.10 моль/дм³ манган(II) сульфат эсвэл манган(II) хлорид' }, how: dissolve([[['16.9 g', 'MnSO4·H2O'], ['19.8 g', 'MnCl2·4H2O']]], 'MnSO4·H2O needs stirring with the water to dissolve.', 'MnSO4·H2O уусахын тулд сайн хутгах хэрэгтэй.'), hazards: ['HH', 'N'] },
      solid('fa9', 'FA 9', '2.0 ± 0.2 g', 2.0, { en: 'manganese(IV) oxide', mn: 'манган(IV) исэл' }, 'MnO2', ['MH']),
      peroxide10(10),
      { id: 'feso4', label: 'aqueous iron(II) sulfate', amount: 10, unit: 'cm3', identity: { en: '0.20 mol/dm³ iron(II) sulfate in 1.0 mol/dm³ sulfuric acid', mn: '1.0 моль/дм³ хүхрийн хүчил дахь 0.20 моль/дм³ төмөр(II) сульфат' }, how: { en: 'Dissolve 55.6 g of FeSO4·7H2O in each dm³ of 1.0 mol/dm³ H2SO4.', mn: '1.0 моль/дм³ H2SO4-ийн дм³ тутамд 55.6 г FeSO4·7H2O уусгана.' }, hazards: ['MH'] },
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['conical', 2], ['cyl25', 1], ['buretteStand', 1], ['beaker100', 1], ['funnelBurette', 1], ['whiteTile', 1], ['thermometer', 1], ['glassRod', 1], ['stopclock', 1], ['teatPipette', 3], ['spatula', 1], ['crucible', 1], ['tongs', 1], ['triangle', 1], ['tripod', 1], ['gauze', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['testTube', 8], ['hardGlass', 2], ['rack', 1], ['washBottle', 1], ['pen', 1], ['funnelFilter', 1], ['filterPaper', 1]],
    extras: [...commonExtras, 'balance001'],
    notes: [note('Any number of waters of crystallisation is acceptable for the hydrated compounds, if it is noted in the supervisor’s report.', 'Усжсан бодисын талстын усны тоо ямар ч байж болно; хянагчийн тайланд тэмдэглэнэ.')],
  },
  // ---------------- 2026 ----------------
  {
    paperId: '9701-35-mj26', excess: 10, supervisor: allQuestions,
    bench: [{ key: 'naoh', amount: 20, identity: conc('1.0', 'NaOH', 'NaOH') }],
    materials: [
      { id: 'fa1', label: 'FA 1', amount: 40, unit: 'cm3', identity: conc('0.50', 'hydrochloric acid', 'давсны хүчил'), how: dilute('250 cm³', '2.00 mol/dm³ HCl'), recipe: 'dilute_hydrochloric_acid' },
      solid('fa2', 'FA 2', '0.40 ± 0.05 g', 0.4, { en: 'magnesium pieces (turnings; ribbon cut small is also acceptable)', mn: 'магнийн хэлтэрхий (жижиглэн хэрчсэн тууз ч болно)' }, { en: 'magnesium pieces', mn: 'магнийн хэлтэрхий' }, ['F']),
      { id: 'fa3', label: 'FA 3', amount: 50, unit: 'cm3', identity: conc('1.90', 'sodium hydroxide', 'натрийн гидроксид'), how: dissolve([[['76.0 g', 'NaOH']]], 'Care: dissolving gives out heat and the concentrated solution is very corrosive.', 'Анхаар: уусахад дулаан ялгарна, өтгөн уусмал маш идэмхий.'), hazards: ['C'] },
      hcl2('fa4', 'FA 4', 70, '2.00'),
      { id: 'fa5', label: 'FA 5', amount: 15, unit: 'cm3', identity: conc('0.10', 'manganese(II) chloride', 'манган(II) хлорид'), how: dissolve([[['19.8 g', 'MnCl2·4H2O']]]), hazards: ['MH'] },
      { id: 'fa6', label: 'FA 6', amount: 15, unit: 'cm3', identity: conc('0.10', 'ammonium iron(II) sulfate', 'аммонийн төмөр(II) сульфат'), how: dissolve([[['39.2 g', '(NH4)2Fe(SO4)2·6H2O']]]), hazards: ['MH'] },
      { id: 'fa7', label: 'FA 7', amount: 15, unit: 'cm3', identity: conc('0.10', 'zinc nitrate', 'цайрын нитрат'), how: dissolve([[['29.8 g', 'Zn(NO3)2·6H2O']]]), hazards: ['N'] },
      basicCopper('fa8', 'FA 8', '1.0 ± 0.1 g', 1.0),
    ],
    apparatus: [['pipette25', 1], ['pipetteFiller', 1], ['burette50', 1], ['cyl50', 1], ['cyl250', 1], ['buretteStand', 1], ['beaker100', 1], ['beaker250', 1], ['funnelBurette', 1], ['standClamp', 2], ['trough', 1], ['gasFlask', 1], ['thermometer', 1], ['cup', 1], ['glassRod', 1], ['teatPipette', 2], ['spatula', 1], ['bunsen', 1], ['mat', 1], ['ttHolder', 1], ['boilingTube', 3], ['hardGlass', 1], ['testTube', 8], ['rack', 1], ['washBottle', 1], ['pen', 1]],
    extras: [...commonExtras, 'balance001'],
  },
];

export const findPaperPrep = (paperId: string) => paperPreps.find((spec) => spec.paperId === paperId);
