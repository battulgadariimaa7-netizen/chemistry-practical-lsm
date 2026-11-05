import { Language } from '../types/chemistry';

// Mongolian display labels for values the data files store only in English.
const equipmentNamesMn: Record<string, string> = {
  crucible_and_lid: 'Шаазан тигель ба таг',
  analytical_balance: 'Аналитик жин',
  bunsen_burner: 'Бунзены халаагуур',
  pipeclay_triangle: 'Шаазан гурвалжин',
  tripod: 'Гурван хөлт суурь',
  crucible_tongs: 'Тигелийн хавчаар',
  conductivity_circuit: 'Цахилгаан дамжуулалт хэмжих хэлхээ',
  test_tubes: 'Хуруу шил',
  test_tube_rack: 'Хуруу шилний тавиур',
  polystyrene_cup: 'Полистирол аяга',
  thermometer: 'Термометр',
  measuring_cylinder: 'Хэмжээст цилиндр',
  stopwatch: 'Секундомер',
  burette: 'Бюретка',
  volumetric_pipette: 'Эзлэхүүний пипетк',
  conical_flask: 'Конусан колбо',
  beaker: 'Шилэн аяга',
  beakers: 'Шилэн аяга',
  white_paper_cross: 'Загалмай зурсан цагаан цаас',
  dropping_pipettes: 'Дуслын пипетк',
  water_bath: 'Усан халаагуур',
  high_impedance_voltmeter: 'Өндөр эсэргүүцэлтэй вольтметр',
  strips_copper_zinc: 'Зэс ба цайрын хавтан',
  filter_paper_salt_bridge: 'Шүүлтүүр цаасан давсан гүүр',
  ph_meter: 'pH метр',
  magnetic_stirrer: 'Соронзон хутгуур',
  gas_syringe: 'Хийн шприц',
  delivery_tube: 'Хий дамжуулах хоолой',
  reflux_apparatus: 'Буцаан хөргөх (рефлюкс) төхөөрөмж',
  separating_funnel: 'Ялгах юүлүүр',
  distillation_kit: 'Нэрэх төхөөрөмж',
  micro_well_plates: 'Бичил нүхтэй хавтан',
};

const hazardLabelsMn: Record<string, string> = {
  'Harmful, Aquatic Toxic (GHS07, GHS09)': 'Хор хөнөөлтэй, усны амьд организмд хортой (GHS07, GHS09)',
  'Low hazard': 'Аюул багатай',
  'Combustible': 'Шатах чадвартай',
  'Dust irritant': 'Тоос нь цочроодог',
  'Hexane: Flammable, Harmful': 'Гексан: амархан шатдаг, хор хөнөөлтэй',
  'Corrosive (GHS05)': 'Идэмхий (GHS05)',
  'Oxidizer, Stain (GHS03, GHS07)': 'Исэлдүүлэгч, толбо үлдээдэг (GHS03, GHS07)',
  'Corrosive, Irritant': 'Идэмхий, цочроогч',
  'Harmful if swallowed': 'Залгивал хор хөнөөлтэй',
  'Toxic': 'Хортой',
  'Corrosive': 'Идэмхий',
  'Varies by metal': 'Металлаас хамаарна',
  'Irritant vapor': 'Уур нь цочроодог',
  'Stains skin (GHS03, GHS05)': 'Арьсанд толбо үүсгэдэг (GHS03, GHS05)',
  'Corrosive vapor': 'Уур нь идэмхий',
  'Flammable, Toxic vapors': 'Амархан шатдаг, уур нь хортой',
  'Flammable': 'Амархан шатдаг',
  'Stains skin': 'Арьсанд толбо үүсгэдэг',
  'Carcinogen, Toxic (GHS08, GHS06)': 'Хорт хавдар үүсгэгч, хортой (GHS08, GHS06)',
  'Explosive if dried (silver fulminate)': 'Хатвал дэлбэрдэг (мөнгөний фульминат)',
  'Irritant (GHS07)': 'Цочроогч (GHS07)',
  'Aquatic toxic': 'Усны амьд организмд хортой',
  'Irritant': 'Цочроогч',
  'Oxidizer': 'Исэлдүүлэгч',
  'Oxidizer, Bleaches skin': 'Исэлдүүлэгч, арьсыг цайруулдаг',
  'Harmful, Oxidizer': 'Хор хөнөөлтэй, исэлдүүлэгч',
  'Corrosive, toxic vapors': 'Идэмхий, уур нь хортой',
  'Corrosive, choking fumes': 'Идэмхий, амьсгал боогдуулах утаатай',
  'Corrosive, Flammable': 'Идэмхий, амархан шатдаг',
  'Severe Corrosive': 'Хүчтэй идэмхий',
  'Unknown': 'Тодорхойгүй',
  'Toxic, Corrosive': 'Хортой, идэмхий',
  'Toxic, Flammable': 'Хортой, амархан шатдаг',
};

const pictogramLabelsMn: Record<string, string> = {
  'GHS02 (Flame)': 'GHS02 (Дөл)',
  'GHS03 (Flame over circle)': 'GHS03 (Исэлдүүлэгч)',
  'GHS05 (Corrosion)': 'GHS05 (Идэмхий)',
  'GHS06 (Skull and crossbones)': 'GHS06 (Хортой)',
  'GHS07 (Exclamation mark)': 'GHS07 (Анхааруулга)',
  'GHS07 (Exclamation)': 'GHS07 (Анхааруулга)',
  'GHS08 (Health hazard)': 'GHS08 (Эрүүл мэндэд аюултай)',
  'GHS09 (Environment)': 'GHS09 (Байгаль орчин)',
};

const severityLabelsMn: Record<string, string> = {
  critical: 'Онц ноцтой',
  high: 'Ноцтой',
  moderate: 'Дунд зэрэг',
};

const apparatusCategoryLabelsMn: Record<string, string> = {
  glassware: 'Шил сав',
  measuring: 'Хэмжих',
  heating: 'Халаах',
  separation: 'Ялгах',
  support: 'Туслах хэрэгсэл',
  electrical: 'Цахилгаан',
};

const toleranceLabelsMn: Record<string, string> = {
  '±0.06 cm³ (Class B) / ±0.03 cm³ (Class A)': '±0.06 см³ (B анги) / ±0.03 см³ (A анги)',
  '±0.05 cm³ (Readings recorded to nearest 0.05 cm³)': '±0.05 см³ (Заалтыг 0.05 см³ нарийвчлалтай бичнэ)',
  '±5% (Nominal approximate scale)': '±5% (Ойролцоо хуваарь)',
  '±0.15 cm³ at 20°C': '20°C-д ±0.15 см³',
  '±0.01 g (Standard) / ±0.001 g (High precision)': '±0.01 г (Стандарт) / ±0.001 г (Өндөр нарийвчлал)',
  '±1.0 cm³': '±1.0 см³',
  'Temperature range: 300°C – 1100°C': 'Температурын муж: 300°C – 1100°C',
  'Withstands up to 1150°C': '1150°C хүртэл тэсвэрлэнэ',
  '±0.5 cm³ (for 50 cm³ cylinder) / ±1.0 cm³ (for 100 cm³)': '±0.5 см³ (50 см³ цилиндр) / ±1.0 см³ (100 см³)',
  '±0.2°C (Graduated in 0.5°C or 0.2°C divisions)': '±0.2°C (0.5°C эсвэл 0.2°C хуваарьтай)',
  'Not a measuring item': 'Хэмжих зориулалтгүй',
  'Approximate (about 20 drops per cm³)': 'Ойролцоо (1 см³-д 20 орчим дусал)',
};

const inventoryCategoryLabelsMn: Record<string, string> = {
  chemicals: 'Бодис',
  glassware: 'Шил сав',
  equipment: 'Багаж',
};

const inventoryUnitLabelsMn: Record<string, string> = {
  liters: 'литр',
  kg: 'кг',
  pcs: 'ш',
};

const hazardStatementsMn: Record<string, string> = {
  'Not classified as hazardous': 'Аюултай бодист ангилагдаагүй',
  'H225: Highly flammable liquid and vapor': 'H225: Шингэн ба уур нь маш амархан шатдаг',
  'H272: May intensify fire; oxidizer': 'H272: Галыг хүчтэй болгож болзошгүй; исэлдүүлэгч',
  'H272: Oxidizer': 'H272: Исэлдүүлэгч',
  'H290: May be corrosive to metals': 'H290: Металлыг идэж болзошгүй',
  'H301: Toxic if swallowed': 'H301: Залгивал хортой',
  'H302: Harmful if swallowed': 'H302: Залгивал хор хөнөөлтэй',
  'H314: Causes severe skin burns': 'H314: Арьсыг хүчтэй түлнэ',
  'H314: Causes severe skin burns and eye damage': 'H314: Арьсыг хүчтэй түлж, нүдийг гэмтээнэ',
  'H315: Causes skin irritation': 'H315: Арьсыг цочрооно',
  'H318: Causes serious eye damage': 'H318: Нүдийг ноцтой гэмтээнэ',
  'H319: Causes serious eye irritation': 'H319: Нүдийг хүчтэй цочрооно',
  'H335: May cause respiratory irritation': 'H335: Амьсгалын замыг цочроож болзошгүй',
  'H332: Harmful if inhaled': 'H332: Амьсгалвал хор хөнөөлтэй',
  'H400: Very toxic to aquatic life': 'H400: Усны амьд организмд маш хортой',
  'H410: Very toxic to aquatic life': 'H410: Усны амьд организмд маш хортой',
  'H410: Very toxic to aquatic life with long lasting effects': 'H410: Усны амьд организмд маш хортой, удаан хугацаанд нөлөөлнө',
};

const lookup = (labels: Record<string, string>, value: string, language: Language) =>
  language === 'mn' ? labels[value] ?? value : value;

export const getHazardStatement = (statement: string, language: Language) =>
  lookup(hazardStatementsMn, statement, language);

export const getEquipmentName = (id: string, language: Language) =>
  language === 'mn' && equipmentNamesMn[id] ? equipmentNamesMn[id] : id.replace(/_/g, ' ');

// The GHS code in brackets is shown as a pictogram beside the label, so the text leaves it out.
export const getHazardLabel = (hazard: string, language: Language) =>
  lookup(hazardLabelsMn, hazard, language).replace(/\s*\(GHS[^)]*\)/, '');

const ghsNames: Record<string, { en: string; mn: string }> = {
  GHS01: { en: 'Explosive', mn: 'Тэсрэмтгий' },
  GHS02: { en: 'Flammable', mn: 'Шатамхай' },
  GHS03: { en: 'Oxidizing', mn: 'Исэлдүүлэгч' },
  GHS05: { en: 'Corrosive', mn: 'Идэмхий' },
  GHS06: { en: 'Acute toxicity', mn: 'Хурц хортой' },
  GHS07: { en: 'Harmful or irritant', mn: 'Хор хөнөөлтэй, цочроогч' },
  GHS08: { en: 'Serious health hazard', mn: 'Эрүүл мэндэд ноцтой аюултай' },
  GHS09: { en: 'Environmental hazard', mn: 'Байгаль орчинд аюултай' },
};

export const getGhsName = (code: string, language: Language) => ghsNames[code]?.[language] ?? code;

// GHS pictograms for each hazard description used by the practicals in data/chapters.ts.
// An empty list means the reagent needs no symbol here, or that its hazard must be read from the SDS.
const hazardPictograms: Record<string, string[]> = {
  'Harmful, Aquatic Toxic (GHS07, GHS09)': ['GHS07', 'GHS09'],
  'Low hazard': [],
  'Combustible': [],
  'Dust irritant': ['GHS07'],
  'Hexane: Flammable, Harmful': ['GHS02', 'GHS07', 'GHS08', 'GHS09'],
  'Corrosive (GHS05)': ['GHS05'],
  'Oxidizer, Stain (GHS03, GHS07)': ['GHS03', 'GHS07'],
  'Corrosive, Irritant': ['GHS05', 'GHS07'],
  'Harmful if swallowed': ['GHS07'],
  'Toxic': ['GHS06'],
  'Corrosive': ['GHS05'],
  'Varies by metal': [],
  'Irritant vapor': ['GHS07'],
  'Stains skin (GHS03, GHS05)': ['GHS03', 'GHS05'],
  'Corrosive vapor': ['GHS05', 'GHS07', 'GHS09'],
  'Flammable, Toxic vapors': ['GHS02', 'GHS07'],
  'Flammable': ['GHS02', 'GHS07'],
  'Stains skin': ['GHS03', 'GHS05'],
  'Carcinogen, Toxic (GHS08, GHS06)': ['GHS03', 'GHS05', 'GHS06', 'GHS08', 'GHS09'],
  'Explosive if dried (silver fulminate)': ['GHS01', 'GHS05'],
  'Irritant (GHS07)': ['GHS07'],
  'Aquatic toxic': ['GHS07', 'GHS09'],
  'Irritant': ['GHS07'],
  'Oxidizer': ['GHS03'],
  'Oxidizer, Bleaches skin': ['GHS03', 'GHS07'],
  'Harmful, Oxidizer': ['GHS03', 'GHS07'],
  'Corrosive, toxic vapors': ['GHS05', 'GHS07', 'GHS09'],
  'Corrosive, choking fumes': ['GHS05', 'GHS07'],
  'Corrosive, Flammable': ['GHS02', 'GHS05'],
  'Severe Corrosive': ['GHS05'],
  'Unknown': [],
  'Toxic, Corrosive': ['GHS05', 'GHS06'],
  'Toxic, Flammable': ['GHS02', 'GHS06'],
};

export const getAmountLabel = (amount: string, language: Language) =>
  language === 'en'
    ? amount
    : amount.replace(/cm³/g, 'см³').replace(/(\d) g\b/g, '$1 г').replace(/\beach\b/, 'тус бүр');

export const getHazardPictograms = (hazard: string) => hazardPictograms[hazard] ?? [];

export const needsSdsCheck = (hazard: string) => hazard === 'Unknown' || hazard === 'Varies by metal';

export const getPictogramLabel = (pictogram: string, language: Language) =>
  lookup(pictogramLabelsMn, pictogram, language);

export const getSeverityLabel = (severity: string, language: Language) =>
  lookup(severityLabelsMn, severity, language);

export const getApparatusCategoryLabel = (category: string, language: Language) =>
  lookup(apparatusCategoryLabelsMn, category, language);

export const getToleranceLabel = (tolerance: string, language: Language) =>
  lookup(toleranceLabelsMn, tolerance, language);

export const getCapacityLabel = (capacity: string, language: Language) =>
  language === 'mn' ? capacity.replace(/cm³/g, 'см³').replace(' to ', ' – ') : capacity;

export const getInventoryCategoryLabel = (category: string, language: Language) =>
  lookup(inventoryCategoryLabelsMn, category, language);

export const getInventoryUnitLabel = (unit: string, language: Language) =>
  lookup(inventoryUnitLabelsMn, unit, language);
