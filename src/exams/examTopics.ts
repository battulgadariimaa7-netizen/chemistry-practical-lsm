// The topics of each question in the exam papers, so a student can pick a topic and see every paper
// that tests it, year by year. A question can have more than one topic. Ids match papers.ts.
export type TopicKey =
  | 'acidbase' | 'redox' | 'thermometric' | 'enthalpy' | 'rate' | 'gas' | 'mass' | 'water'
  | 'standard' | 'graph' | 'qa' | 'organic' | 'planning';

export const topics: { key: TopicKey; en: string; mn: string }[] = [
  { key: 'acidbase', en: 'Acid–base titration', mn: 'Хүчил-шүлтийн титрлэлт' },
  { key: 'redox', en: 'Redox titration (KMnO₄, iodine–thiosulfate)', mn: 'Исэлдэн ангижрах титрлэлт (KMnO₄, иод–тиосульфат)' },
  { key: 'thermometric', en: 'Thermometric titration', mn: 'Термометрийн титрлэлт' },
  { key: 'enthalpy', en: 'Enthalpy change', mn: 'Энтальпийн өөрчлөлт' },
  { key: 'rate', en: 'Rate of reaction', mn: 'Урвалын хурд' },
  { key: 'gas', en: 'Volume of gas', mn: 'Хийн эзлэхүүн' },
  { key: 'mass', en: 'Mass change (heating, loss of CO₂)', mn: 'Массын өөрчлөлт (халаалт, CO₂ алдагдал)' },
  { key: 'water', en: 'Water of crystallisation (finding x)', mn: 'Талстын ус (x-ийг олох)' },
  { key: 'standard', en: 'Making and diluting a standard solution', mn: 'Стандарт уусмал бэлтгэх, шингэлэх' },
  { key: 'graph', en: 'Drawing a graph', mn: 'График зурах' },
  { key: 'qa', en: 'Qualitative analysis (ions)', mn: 'Чанарын шинжилгээ (ион)' },
  { key: 'organic', en: 'Organic tests', mn: 'Органик бодисын сорил' },
  { key: 'planning', en: 'Planning tests', mn: 'Сорил төлөвлөх' },
];

/** For each paper, the topics of question 1, 2 and 3 in order. */
const byPaper: Record<string, TopicKey[][]> = {
  '9701-35-mj17': [['rate', 'graph'], ['qa']],
  '9701-35-on17': [['redox'], ['mass'], ['qa']],
  '9701-35-mj18': [['acidbase', 'standard', 'water'], ['mass', 'water'], ['qa']],
  '9701-35-on18': [['enthalpy', 'graph'], ['qa']],
  '9701-35-mj19': [['thermometric', 'graph'], ['acidbase', 'standard'], ['qa']],
  '9701-35-on19': [['gas'], ['acidbase', 'standard'], ['qa']],
  '9701-35-mj20': [['redox'], ['mass', 'water'], ['qa', 'organic']],
  '9701-35-on20': [['redox', 'standard', 'water'], ['rate'], ['qa']],
  '9701-35-mj21': [['acidbase', 'standard'], ['mass', 'water'], ['qa']],
  '9701-35-on21': [['mass'], ['acidbase', 'standard'], ['qa', 'organic']],
  '9701-35-mj22': [['mass'], ['redox'], ['qa', 'planning']],
  '9701-35-on22': [['redox'], ['enthalpy'], ['qa', 'organic', 'planning']],
  '9701-35-mj23': [['gas'], ['enthalpy', 'graph'], ['qa', 'planning']],
  '9701-35-on23': [['gas', 'acidbase', 'water'], ['qa', 'planning']],
  '9701-35-mj24': [['rate'], ['enthalpy', 'graph'], ['qa']],
  '9701-35-on24': [['thermometric', 'graph'], ['mass'], ['qa']],
  '9701-35-mj25': [['gas'], ['acidbase'], ['qa', 'organic']],
  '9701-35-on25': [['redox', 'water'], ['mass', 'water'], ['qa']],
  '9701-35-mj26': [['gas'], ['thermometric', 'graph'], ['qa']],
};

/** The question numbers (1, 2, 3) of a paper that test a topic. */
export const questionsOn = (paperId: string, topic: TopicKey) =>
  (byPaper[paperId] ?? []).flatMap((keys, i) => (keys.includes(topic) ? [i + 1] : []));

export const hasTopics = (paperId: string) => paperId in byPaper;
