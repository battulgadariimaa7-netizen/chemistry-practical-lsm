// Which of a paper's Confidential Instructions materials, bench reagents and apparatus each question uses,
// so the lab can set out one task at a time. Worked out from the question papers' text: an item the paper does
// not name in any question (a spare beaker, the wash bottle) is listed under every question, and the bench
// reagents go with the qualitative analysis question. The ids match examPrep.ts.
import type { ApparatusKey, Bi, ExtraKey } from './examPrep';

export interface QuestionPrep {
  q: number;
  title: Bi;
  /** Ids of the paper's materials. */
  materials: string[];
  apparatus: ApparatusKey[];
  extras: ExtraKey[];
  /** The bench reagents are used in this question. */
  bench?: boolean;
}

export const questionPreps: Record<string, QuestionPrep[]> = {
  '9701-35-mj17': [
    { q: 1, title: { en: 'Concentration of peroxodisulfate and rate of reaction', mn: 'Пероксодисульфатын концентраци ба урвалын хурд' }, materials: ['fa1', 'fa2', 'fa3', 'starch', 'water'], apparatus: ['burette50', 'buretteStand', 'funnelBurette', 'cyl25', 'beaker100', 'glassRod', 'whiteTile', 'teatPipette', 'washBottle', 'pen', 'stopclock'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa4', 'fa5', 'fa6', 'fa7', 'fa8', 'mg', 'water'], apparatus: ['beaker100', 'glassRod', 'testTube', 'boilingTube', 'rack', 'ttHolder', 'spatula', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on17': [
    { q: 1, title: { en: 'Oxidation state of iodine in an iodine compound', mn: 'Иодын нэгдэл дэх иодын исэлдэлтийн зэрэг' }, materials: ['fa1', 'fa2', 'fa3', 'fa4', 'starch'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'conical', 'cyl25', 'buretteStand', 'funnelBurette', 'whiteTile', 'teatPipette', 'glassRod', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'y in ZnCO₃·yZn(OH)₂', mn: 'ZnCO₃·yZn(OH)₂ дахь y' }, materials: ['fa5'], apparatus: ['spatula', 'glassRod', 'crucible', 'tongs', 'mat', 'tripod', 'bunsen', 'triangle', 'washBottle', 'pen', 'stopclock'], extras: ['paperTowels', 'balance01'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa6', 'fa7', 'fa8'], apparatus: ['glassRod', 'mat', 'bunsen', 'boilingTube', 'testTube', 'rack', 'ttHolder', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj18': [
    { q: 1, title: { en: 'x in Na₂CO₃·xH₂O', mn: 'Na₂CO₃·xH₂O дахь x' }, materials: ['fa1', 'fa2', 'mo', 'water'], apparatus: ['beaker250', 'glassRod', 'spatula', 'volFlask250', 'pipette25', 'pipetteFiller', 'burette50', 'buretteStand', 'funnelBurette', 'whiteTile', 'conical', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'The Group 2 element Y (YSO₄·7H₂O)', mn: '2-р бүлгийн элемент Y (YSO₄·7H₂O)' }, materials: ['fa4'], apparatus: ['spatula', 'stopclock', 'crucible', 'triangle', 'tongs', 'tripod', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa4', 'fa5', 'h2o2', 'scn', 'water'], apparatus: ['glassRod', 'spatula', 'beaker100', 'bunsen', 'mat', 'ttHolder', 'hardGlass', 'testTube', 'boilingTube', 'rack', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on18': [
    { q: 1, title: { en: 'Purity of impure anhydrous Na₂CO₃', mn: 'Хольцтой усгүй Na₂CO₃-ийн цэвэршил' }, materials: ['fa1', 'fa2', 'fa3'], apparatus: ['cyl25', 'polyCup', 'beaker250', 'thermometer', 'stopclock', 'glassRod', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa4', 'fa6', 'fa7'], apparatus: ['glassRod', 'bunsen', 'mat', 'ttHolder', 'hardGlass', 'testTube', 'boilingTube', 'rack', 'spatula', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj19': [
    { q: 1, title: { en: 'Concentration of the monobasic acid HZ (thermometric method)', mn: 'Нэг суурьт хүчил HZ-ийн концентраци (термометрийн арга)' }, materials: ['fa1', 'fa2'], apparatus: ['beaker250', 'cyl50', 'polyCup', 'thermometer', 'burette50', 'buretteStand', 'funnelBurette', 'glassRod', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'Concentration of HZ by titration', mn: 'HZ-ийн концентрацийг титрлэлтээр' }, materials: ['fa1', 'fa3', 'water', 'mo'], apparatus: ['burette50', 'pipette25', 'pipette10', 'pipetteFiller', 'volFlask250', 'buretteStand', 'funnelBurette', 'conical', 'whiteTile', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa6', 'fa7', 'mg', 'ban', 'na2co3'], apparatus: ['testTube', 'rack', 'bunsen', 'mat', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on19': [
    { q: 1, title: { en: 'Concentration of HCl from a volume of gas', mn: 'Хийн эзлэхүүнээр HCl-ийн концентраци' }, materials: ['fa1', 'fa2'], apparatus: ['cyl250', 'cyl25', 'gasFlask', 'trough', 'standClamp', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'Concentration of FA 2 by titration', mn: 'FA 2-ын концентрацийг титрлэлтээр' }, materials: ['fa2', 'fa3', 'water', 'mo'], apparatus: ['volFlask250', 'burette50', 'buretteClamp', 'funnelBurette', 'pipette25', 'pipetteFiller', 'conical', 'whiteTile', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa8', 'water', 'starch'], apparatus: ['glassRod', 'spatula', 'testTube', 'boilingTube', 'hardGlass', 'rack', 'ttHolder', 'teatPipette', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj20': [
    { q: 1, title: { en: 'The metal Z in the ethanedioate salt (COO)₂Z₂', mn: 'Этандиоатын давс (COO)₂Z₂ дахь металл Z' }, materials: ['fa1', 'fa2', 'fa3'], apparatus: ['pipetteFiller', 'pipette25', 'burette50', 'conical', 'cyl25', 'buretteStand', 'funnelBurette', 'whiteTile', 'thermometer', 'tripod', 'gauze', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'x in MnSO₄·xH₂O', mn: 'MnSO₄·xH₂O дахь x' }, materials: ['fa4'], apparatus: ['stopclock', 'spatula', 'crucible', 'tongs', 'triangle', 'tripod', 'gauze', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa1', 'fa5', 'fa6', 'fa7', 'fa8', 'h2o2', 'i2'], apparatus: ['beaker250', 'teatPipette', 'tripod', 'gauze', 'bunsen', 'mat', 'ttHolder', 'boilingTube', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on20': [
    { q: 1, title: { en: 'Finding x in Na₂S₂O₃·xH₂O', mn: 'Na₂S₂O₃·xH₂O дахь x-ийг тодорхойлох' }, materials: ['fa1', 'fa3', 'water', 'starch'], apparatus: ['pipetteFiller', 'volFlask250', 'burette50', 'pipette25', 'buretteStand', 'funnelBurette', 'conical', 'whiteTile', 'beaker250', 'glassRod', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'Concentration of thiosulfate and rate of reaction', mn: 'Тиосульфатын концентраци ба урвалын хурд' }, materials: ['fa4', 'fa5', 'water'], apparatus: ['cyl50', 'cyl25', 'beaker100', 'glassRod', 'stopclock', 'washBottle', 'pen'], extras: ['paperTowels', 'quench'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa6', 'fa8', 'h2o2', 'ki', 'water'], apparatus: ['beaker100', 'testTube', 'boilingTube', 'rack', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj21': [
    { q: 1, title: { en: 'Mr of the monobasic acid HX', mn: 'Нэг суурьт хүчил HX-ийн Mr' }, materials: ['fa1', 'fa2', 'mo', 'water'], apparatus: ['pipette25', 'pipetteFiller', 'burette', 'conical', 'buretteStand', 'volFlask250', 'beaker250', 'funnelBurette', 'whiteTile', 'glassRod', 'teatPipette', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'Percentage by mass of water of crystallisation', mn: 'Талстын усны массын хувь' }, materials: ['fa4'], apparatus: ['stopclock', 'spatula', 'crucible', 'tongs', 'triangle', 'tripod', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa4', 'fa5'], apparatus: ['beaker100', 'spatula', 'bunsen', 'mat', 'hardGlass', 'testTube', 'boilingTube', 'rack', 'ttHolder', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on21': [
    { q: 1, title: { en: 'Heating X₂CO₃ to identify X', mn: 'X₂CO₃-ыг халааж X-ийг тодорхойлох' }, materials: ['fa1'], apparatus: ['beaker100', 'crucible', 'tongs', 'triangle', 'tripod', 'bunsen', 'mat', 'spatula', 'glassRod', 'stopclock', 'washBottle', 'pen'], extras: ['paperTowels', 'balance01'] },
    { q: 2, title: { en: 'Titrating ZOH to identify Z', mn: 'ZOH-ийг титрлэж Z-ийг тодорхойлох' }, materials: ['fa2', 'fa3', 'bpb'], apparatus: ['burette50', 'pipette25', 'pipetteFiller', 'buretteStand', 'funnelBurette', 'whiteTile', 'conical', 'beaker100', 'volFlask250', 'glassRod', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa6', 'fa7', 'fa8', 'mgcl2', 'na2co3', 'nh4cl', 'cuso4', 'mg'], apparatus: ['beaker100', 'beaker250', 'tripod', 'gauze', 'bunsen', 'mat', 'spatula', 'glassRod', 'testTube', 'boilingTube', 'ttHolder', 'rack', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj22': [
    { q: 1, title: { en: 'CuCO₃·xCu(OH)₂: loss in mass of CO₂', mn: 'CuCO₃·xCu(OH)₂ — CO₂-ын массын алдагдал' }, materials: ['fa1', 'fa2'], apparatus: ['conical', 'cyl25', 'beaker100', 'glassRod', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 2, title: { en: 'Iodometric titration', mn: 'Иодометр титрлэлт' }, materials: ['fa3', 'fa4', 'fa5', 'fa6'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'conical', 'cyl25', 'buretteStand', 'beaker100', 'funnelBurette', 'whiteTile', 'glassRod', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa7', 'fa8', 'm', 'fa9', 'fa10', 'conchcl', 'edta'], apparatus: ['beaker100', 'glassRod', 'teatPipette', 'spatula', 'bunsen', 'mat', 'ttHolder', 'hardGlass', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on22': [
    { q: 1, title: { en: 'Ethanedioate titration: finding the metal M', mn: 'Этандиоатын титрлэлт — металл M-ийг олох' }, materials: ['fa1', 'fa2', 'fa3'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'conical', 'cyl25', 'buretteStand', 'beaker100', 'funnelBurette', 'whiteTile', 'thermometer', 'tripod', 'gauze', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'Hess’s law: dehydration of CuSO₄·5H₂O', mn: 'Hess-ийн хууль — CuSO₄·5H₂O-ийн усгүйжүүлэлт' }, materials: ['fa4', 'fa5'], apparatus: ['cyl25', 'beaker100', 'beaker250', 'thermometer', 'cup', 'glassRod', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa6', 'fa7', 'h2o2', 'i2'], apparatus: ['beaker100', 'beaker250', 'teatPipette', 'bunsen', 'mat', 'ttHolder', 'boilingTube', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj23': [
    { q: 1, title: { en: 'Purity of magnesium: volume of H₂', mn: 'Магнийн цэвэршил — H₂-ын эзлэхүүн' }, materials: ['fa1', 'fa2'], apparatus: ['cyl50', 'cyl250', 'beaker100', 'standClamp', 'trough', 'gasFlask', 'stopclock', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 2, title: { en: 'Finding the purity of magnesium from an enthalpy', mn: 'Энтальпиэр магнийн цэвэршлийг олох' }, materials: ['fa3', 'fa4'], apparatus: ['cyl50', 'beaker250', 'beaker100', 'thermometer', 'cup', 'glassRod', 'stopclock', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa6', 'starch', 'h2o2'], apparatus: ['beaker100', 'teatPipette', 'spatula', 'ttHolder', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on23': [
    { q: 1, title: { en: 'x in hydrated sodium carbonate', mn: 'Ус агуулсан натрийн карбонатын x' }, materials: ['fa1', 'fa2', 'fa3', 'fa4', 'fa5'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'conical', 'cyl50', 'cyl250', 'buretteStand', 'beaker100', 'funnelBurette', 'whiteTile', 'standClamp', 'trough', 'gasFlask', 'glassRod', 'teatPipette', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 2, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa6', 'fa7', 'fa8', 'fa9', 'fa10', 'feso4', 'ki'], apparatus: ['beaker100', 'glassRod', 'teatPipette', 'spatula', 'bunsen', 'mat', 'ttHolder', 'boilingTube', 'hardGlass', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj24': [
    { q: 1, title: { en: 'The effect of concentration on rate (the «iodine clock»)', mn: 'Урвалын хурдад концентрацийн нөлөө («иодын цаг»)' }, materials: ['fa1', 'fa2', 'fa3', 'fa4', 'water'], apparatus: ['burette50', 'cyl25', 'buretteStand', 'beaker100', 'funnelBurette', 'whiteTile', 'glassRod', 'stopclock', 'teatPipette', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'Enthalpy of solution of ammonium chloride', mn: 'Аммонийн хлоридын уусалтын энтальпи' }, materials: ['fa5', 'water'], apparatus: ['cyl25', 'beaker100', 'beaker250', 'thermometer', 'cup', 'glassRod', 'stopclock', 'spatula', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa6', 'fa8', 'fa9'], apparatus: ['beaker100', 'glassRod', 'spatula', 'bunsen', 'mat', 'ttHolder', 'boilingTube', 'hardGlass', 'testTube', 'rack', 'washBottle', 'pen', 'funnelFilter', 'filterPaper'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on24': [
    { q: 1, title: { en: 'Thermometric titration', mn: 'Дулааны (термометрийн) титрлэлт' }, materials: ['fa1', 'fa2'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'buretteStand', 'beaker250', 'beaker100', 'funnelBurette', 'thermometer', 'cup', 'glassRod', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'Finding the acid concentration from the mass of CO₂ given off', mn: 'Ялгарсан CO₂-ын массаар хүчлийн концентрацийг олох' }, materials: ['fa2', 'fa3'], apparatus: ['conical', 'cyl25', 'beaker100', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 3, title: { en: 'Three compounds of one metal', mn: 'Нэг металлын гурван нэгдэл' }, materials: ['fa4', 'fa5', 'fa6', 'feso4', 'h2o2', 'conchcl'], apparatus: ['beaker100', 'teatPipette', 'spatula', 'bunsen', 'mat', 'ttHolder', 'boilingTube', 'hardGlass', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj25': [
    { q: 1, title: { en: 'Volume of CO₂ given off by a carbonate', mn: 'Карбонатаас ялгарах CO₂-ын эзлэхүүн' }, materials: ['fa1', 'fa2'], apparatus: ['cyl50', 'cyl250', 'beaker100', 'standClamp', 'trough', 'gasFlask', 'glassRod', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 2, title: { en: 'Identifying the metal in Z₂CO₃ by titration', mn: 'Титрлэлтээр Z₂CO₃-ын металлыг тодорхойлох' }, materials: ['fa3', 'fa4', 'fa5'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'conical', 'buretteStand', 'beaker100', 'funnelBurette', 'whiteTile', 'glassRod', 'teatPipette', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa6', 'fa7', 'fa8', 'h2o2', 'na2co3'], apparatus: ['beaker100', 'beaker250', 'glassRod', 'teatPipette', 'spatula', 'tripod', 'gauze', 'bunsen', 'mat', 'ttHolder', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-on25': [
    { q: 1, title: { en: 'Finding x in hydrated ethanedioic acid', mn: 'Ус агуулсан этандиойн хүчлийн x-ийг тодорхойлох' }, materials: ['fa1', 'fa2', 'fa3'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'conical', 'cyl25', 'buretteStand', 'beaker100', 'funnelBurette', 'whiteTile', 'thermometer', 'teatPipette', 'tripod', 'gauze', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 2, title: { en: 'Finding y in ZnSO₄·yH₂O', mn: 'ZnSO₄·yH₂O-ийн y-ийг тодорхойлох' }, materials: ['fa4'], apparatus: ['beaker100', 'stopclock', 'spatula', 'crucible', 'tongs', 'triangle', 'tripod', 'bunsen', 'mat', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa6', 'fa7', 'fa8', 'fa9', 'h2o2', 'feso4'], apparatus: ['beaker100', 'glassRod', 'spatula', 'bunsen', 'mat', 'ttHolder', 'testTube', 'hardGlass', 'rack', 'washBottle', 'pen', 'funnelFilter', 'filterPaper'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
  '9701-35-mj26': [
    { q: 1, title: { en: 'Finding the concentration of HCl from a volume of hydrogen', mn: 'Устөрөгчийн эзлэхүүнээр HCl-ийн концентрацийг олох' }, materials: ['fa1', 'fa2'], apparatus: ['cyl50', 'cyl250', 'beaker100', 'standClamp', 'trough', 'gasFlask', 'spatula', 'washBottle', 'pen'], extras: ['paperTowels', 'balance001'] },
    { q: 2, title: { en: 'Finding the concentration of another HCl by thermometric titration', mn: 'Дулааны титрлэлтээр өөр HCl-ийн концентрацийг олох' }, materials: ['fa3', 'fa4'], apparatus: ['pipette25', 'pipetteFiller', 'burette50', 'buretteStand', 'beaker100', 'beaker250', 'funnelBurette', 'thermometer', 'cup', 'glassRod', 'washBottle', 'pen'], extras: ['paperTowels'] },
    { q: 3, title: { en: 'Qualitative analysis', mn: 'Чанарын шинжилгээ' }, materials: ['fa5', 'fa6', 'fa7', 'fa8'], apparatus: ['beaker100', 'teatPipette', 'spatula', 'bunsen', 'mat', 'ttHolder', 'boilingTube', 'hardGlass', 'testTube', 'rack', 'washBottle', 'pen'], extras: ['paperTowels', 'litmus', 'alFoil', 'splints', 'limewaterKit'], bench: true },
  ],
};
