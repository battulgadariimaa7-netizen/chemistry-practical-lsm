import { Language, PracticalExperiment, PrepJob, PrepLine } from '../types/chemistry';
import { chaptersData } from './chapters';

export type HazardCode = 'C' | 'MH' | 'HH' | 'T' | 'F' | 'O' | 'N';

export const hazardCodeGhs: Record<HazardCode, string> = {
  C: 'GHS05',
  MH: 'GHS07',
  HH: 'GHS08',
  T: 'GHS06',
  F: 'GHS02',
  O: 'GHS03',
  N: 'GHS09',
};

export interface SolutionRecipe {
  id: string;
  nameEn: string;
  nameMn: string;
  identityEn: string;
  identityMn: string;
  instructionsEn: string;
  instructionsMn: string;
  careEn?: string;
  careMn?: string;
  // Hazards of the prepared solution, and of the substances it is made from.
  solutionCodes: HazardCode[];
  stockCodes: HazardCode[];
  // Lesson reagent formula that this standard solution can supply.
  lessonFormula?: string;
}

const fromIms = {
  solutionCodes: ['F', 'HH', 'MH'] as HazardCode[],
  stockCodes: ['F', 'HH', 'MH'] as HazardCode[],
};
const dissolveInImsEn = 'Dissolve 0.4 g of the solid in 200 cm³ of ethanol (IMS) and make up to 1 dm³ with distilled water.';
const dissolveInImsMn = '0.4 г хатуу индикаторыг 200 см³ этанолд (IMS) уусгаад нэрмэл усаар 1 дм³ хүртэл дүүргэнэ.';

export const solutionRecipes: SolutionRecipe[] = [
  {
    id: 'dilute_hydrochloric_acid',
    nameEn: 'Dilute hydrochloric acid',
    nameMn: 'Шингэрүүлсэн давсны хүчил',
    identityEn: '2.0 mol/dm³ HCl',
    identityMn: '2.0 моль/дм³ HCl',
    instructionsEn: 'Slowly add 170 cm³ of concentrated hydrochloric acid (35–37%, about 11 mol/dm³) to water and make up to 1 dm³.',
    instructionsMn: '170 см³ өтгөн давсны хүчлийг (35–37%, ойролцоогоор 11 моль/дм³) усанд аажмаар нэмж, 1 дм³ хүртэл шингэрүүлнэ.',
    solutionCodes: [],
    stockCodes: ['C', 'MH'],
    lessonFormula: 'HCl',
  },
  {
    id: 'dilute_nitric_acid',
    nameEn: 'Dilute nitric acid',
    nameMn: 'Шингэрүүлсэн азотын хүчил',
    identityEn: '2.0 mol/dm³ HNO3',
    identityMn: '2.0 моль/дм³ HNO3',
    instructionsEn: 'Slowly add 128 cm³ of concentrated nitric acid (70%) to water and make up to 1 dm³.',
    instructionsMn: '128 см³ өтгөн азотын хүчлийг (70%) усанд аажмаар нэмж, 1 дм³ хүртэл шингэрүүлнэ.',
    solutionCodes: ['C'],
    stockCodes: ['C', 'O'],
    lessonFormula: 'HNO3',
  },
  {
    id: 'dilute_sulfuric_acid',
    nameEn: 'Dilute sulfuric acid',
    nameMn: 'Шингэрүүлсэн хүхрийн хүчил',
    identityEn: '1.0 mol/dm³ H2SO4',
    identityMn: '1.0 моль/дм³ H2SO4',
    instructionsEn: 'Carefully pour 55 cm³ of concentrated sulfuric acid (98%) into 500 cm³ of distilled water, stirring all the time. Make up to 1 dm³ with distilled water.',
    instructionsMn: '55 см³ өтгөн хүхрийн хүчлийг (98%) 500 см³ нэрмэл усанд тасралтгүй хутгаж байгаад болгоомжтой цутгана. Нэрмэл усаар 1 дм³ хүртэл дүүргэнэ.',
    careEn: 'Concentrated sulfuric acid is very corrosive.',
    careMn: 'Өтгөн хүхрийн хүчил маш идэмхий.',
    solutionCodes: ['MH'],
    stockCodes: ['C'],
    lessonFormula: 'H2SO4',
  },
  {
    id: 'aqueous_ammonia',
    nameEn: 'Aqueous ammonia',
    nameMn: 'Аммиакийн усан уусмал',
    identityEn: '2.0 mol/dm³ NH3',
    identityMn: '2.0 моль/дм³ NH3',
    instructionsEn: 'Dilute 112 cm³ of concentrated ammonia (35%) to 1 dm³.',
    instructionsMn: '112 см³ өтгөн аммиакийг (35%) 1 дм³ хүртэл шингэрүүлнэ.',
    solutionCodes: ['C', 'MH', 'N'],
    stockCodes: ['C', 'MH', 'N'],
    lessonFormula: 'NH3(aq)',
  },
  {
    id: 'aqueous_sodium_hydroxide',
    nameEn: 'Aqueous sodium hydroxide',
    nameMn: 'Натрийн гидроксидын усан уусмал',
    identityEn: '1.0 mol/dm³ NaOH',
    identityMn: '1.0 моль/дм³ NaOH',
    instructionsEn: 'Dissolve 40.0 g of NaOH for each dm³ of solution.',
    instructionsMn: '1 дм³ уусмалд 40.0 г NaOH уусгана.',
    careEn: 'Dissolving gives out heat, and any concentrated solution is very corrosive.',
    careMn: 'Уусахад дулаан ялгардаг, өтгөн уусмал нь маш идэмхий.',
    solutionCodes: ['C'],
    stockCodes: ['C'],
    lessonFormula: 'NaOH',
  },
  {
    id: 'barium_salt',
    nameEn: 'Barium chloride or barium nitrate',
    nameMn: 'Барийн хлорид эсвэл барийн нитрат',
    identityEn: '0.1 mol/dm³ BaCl2 or Ba(NO3)2',
    identityMn: '0.1 моль/дм³ BaCl2 эсвэл Ba(NO3)2',
    instructionsEn: 'Dissolve 24.4 g of BaCl2·2H2O, or 26.1 g of Ba(NO3)2, for each dm³ of solution.',
    instructionsMn: '1 дм³ уусмалд 24.4 г BaCl2·2H2O эсвэл 26.1 г Ba(NO3)2 уусгана.',
    solutionCodes: [],
    stockCodes: ['T', 'HH', 'O'],
  },
  {
    id: 'silver_nitrate',
    nameEn: 'Silver nitrate',
    nameMn: 'Мөнгөний нитрат',
    identityEn: '0.05 mol/dm³ AgNO3',
    identityMn: '0.05 моль/дм³ AgNO3',
    instructionsEn: 'Dissolve 8.5 g of AgNO3 for each dm³ of solution.',
    instructionsMn: '1 дм³ уусмалд 8.5 г AgNO3 уусгана.',
    solutionCodes: ['N'],
    stockCodes: ['C', 'O', 'N'],
    lessonFormula: 'AgNO3',
  },
  {
    id: 'limewater',
    nameEn: 'Limewater',
    nameMn: 'Шохойн ус',
    identityEn: 'Saturated aqueous Ca(OH)2',
    identityMn: 'Ca(OH)2-ийн ханасан усан уусмал',
    instructionsEn: 'Prepare it fresh. Leave distilled water standing over solid calcium hydroxide for several days, shaking now and then. Decant or filter the solution.',
    instructionsMn: 'Шинээр бэлтгэнэ. Нэрмэл усыг хатуу кальцийн гидроксид дээр хэд хоног байлгаж, үе үе сэгсэрнэ. Уусмалыг тунгааж юүлэх эсвэл шүүнэ.',
    solutionCodes: ['MH'],
    stockCodes: ['C', 'MH'],
  },
  {
    id: 'acidified_manganate',
    nameEn: 'Acidified aqueous potassium manganate(VII)',
    nameMn: 'Хүчиллэгжүүлсэн калийн перманганатын уусмал',
    identityEn: '0.01 mol/dm³ KMnO4 in 0.5 mol/dm³ H2SO4',
    identityMn: '0.5 моль/дм³ H2SO4 дахь 0.01 моль/дм³ KMnO4',
    instructionsEn: 'Mix equal volumes of 0.02 mol/dm³ KMnO4 and 1.0 mol/dm³ H2SO4.',
    instructionsMn: 'Тэнцүү эзлэхүүнтэй 0.02 моль/дм³ KMnO4 ба 1.0 моль/дм³ H2SO4-ийг холино.',
    solutionCodes: ['MH'],
    stockCodes: ['MH'],
  },
  {
    id: 'starch_solution',
    nameEn: 'Starch solution',
    nameMn: 'Цардуулын уусмал',
    identityEn: 'Freshly prepared aqueous starch, about 2% w/v',
    identityMn: 'Шинээр бэлтгэсэн усан уусмал, ойролцоогоор 2% (м/э)',
    instructionsEn: 'Mix 2 g of soluble starch with a little cold water to a smooth paste. Add 100 cm³ of boiling water and stir, then boil until clear, about 5 minutes.',
    instructionsMn: 'Уусдаг 2 г цардуулыг бага зэрэг хүйтэн усаар зуурч жигд зуурмаг болгоно. 100 см³ буцалж буй ус нэмж хутгаад, тунгалаг болтол 5 орчим минут буцалгана.',
    solutionCodes: [],
    stockCodes: [],
  },
  {
    id: 'methyl_orange',
    nameEn: 'Methyl orange indicator',
    nameMn: 'Метилоранж индикатор',
    identityEn: 'pH range 2.9 to 4.6',
    identityMn: 'pH-ийн муж 2.9 – 4.6',
    instructionsEn: `Use a commercial solution, or: ${dissolveInImsEn}`,
    instructionsMn: `Бэлэн уусмал хэрэглэх, эсвэл: ${dissolveInImsMn}`,
    solutionCodes: fromIms.solutionCodes,
    stockCodes: ['T', 'F', 'HH', 'MH'],
  },
  {
    id: 'bromophenol_blue',
    nameEn: 'Bromophenol blue indicator',
    nameMn: 'Бромфенол хөх индикатор',
    identityEn: 'pH range 3.0 to 4.5',
    identityMn: 'pH-ийн муж 3.0 – 4.5',
    instructionsEn: dissolveInImsEn,
    instructionsMn: dissolveInImsMn,
    ...fromIms,
  },
  {
    id: 'thymol_blue',
    nameEn: 'Thymol blue indicator',
    nameMn: 'Тимол хөх индикатор',
    identityEn: 'pH range 8.0 to 9.6',
    identityMn: 'pH-ийн муж 8.0 – 9.6',
    instructionsEn: dissolveInImsEn,
    instructionsMn: dissolveInImsMn,
    ...fromIms,
  },
  {
    id: 'thymolphthalein',
    nameEn: 'Thymolphthalein indicator',
    nameMn: 'Тимолфталеин индикатор',
    identityEn: 'pH range 9.3 to 10.5',
    identityMn: 'pH-ийн муж 9.3 – 10.5',
    instructionsEn: 'Dissolve 2.0 g of the solid in 1 dm³ of ethanol (IMS).',
    instructionsMn: '2.0 г хатуу индикаторыг 1 дм³ этанолд (IMS) уусгана.',
    ...fromIms,
  },
];

export const allPracticals = chaptersData.flatMap((chapter) => chapter.practicals);

export const findRecipe = (id?: string) => solutionRecipes.find((recipe) => recipe.id === id);

// The device's own date, so that the morning in Mongolia does not count as yesterday.
export const todayText = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

export const isJobReady = (job: PrepJob) => job.lines.length > 0 && job.lines.every((line) => line.readyOn);

export const jobReadyDate = (job: PrepJob) => job.lines.map((line) => line.readyOn).sort().pop() ?? '';

export const jobTitle = (job: PrepJob, language: Language) => {
  const practical = allPracticals.find((item) => item.id === job.practicalId);
  if (!practical) return job.practicalId;
  return language === 'en' ? practical.titleEn : practical.titleMn;
};

export const teacherNotices = (jobs: PrepJob[]) => jobs.filter((job) => isJobReady(job) && !job.acknowledgedOn);

export const newLine = (nameEn: string, nameMn: string, recipeId?: string, amount?: string): PrepLine => ({
  id: `line-${Date.now()}-${Math.round(Math.random() * 1e6)}`,
  nameEn,
  nameMn,
  recipeId,
  amount,
  startedOn: '',
  readyOn: '',
});

// One line for each reagent the lesson lists. Concentrated stock and glacial acid are not solutions to prepare.
export const linesFromLesson = (practical: PracticalExperiment): PrepLine[] =>
  practical.chemicals.map((chemical) => {
    const recipe = /concentrated|glacial/i.test(chemical.name)
      ? undefined
      : solutionRecipes.find((item) => item.lessonFormula === chemical.formula);
    return newLine(chemical.name, chemical.nameMn, recipe?.id, chemical.amount);
  });
