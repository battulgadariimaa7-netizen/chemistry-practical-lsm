// The lab safety rules a student reads in Exam Practice before a paper opens, and the questions that check
// they were read. The slides are the school's own deck «Lab_ayulgui_ajillagaa.pptx», exported from PowerPoint;
// each slide's text is kept here too, for screen readers and small screens.

const pictures = import.meta.glob<string>('../assets/images/exam-safety/slide*.webp', { eager: true, import: 'default' });

export interface SafetySlide {
  picture: string;
  /** The slide's own words, in Mongolian like the deck. */
  text: string;
}

const slideText = [
  'Химийн лабораторийн аюулгүй ажиллагааны дүрэм. Сургуулийн химийн лабораторид мөрдөх журам.',
  'Лабораторид орохын өмнө. Зөвшөөрөлгүй орохгүй: багшийн зөвшөөрөлгүйгээр лабораторид орохгүй, туршилт эхлүүлэхгүй. Зааврыг уншина: туршилтын заавартай урьдчилан танилцаж, алхам бүрийг ойлгосон байна. Хоол, ундаа хориотой: лабораторид хоол идэх, ус уух, бохь зажлахыг хориглоно. Зөв хувцаслана: урт үсээ боож, хаалттай гутал өмсөнө, халаадаа заавал өмсөнө. Аюулгүйн хэрэгслээ мэд: нүд угаагуур, гал унтраагуур, гарц хаана байгааг мэдэж ав. Ширээгээ цэгцтэй байлга: ажлын ширээн дээр зөвхөн хэрэгтэй багаж, заавраа тавина.',
  'Хамгаалах хувцас. 1. Халаадаа заавал өмс: цагаан халаадаа өмсөж, товчийг бүрэн товчилно. 2. Нүд, гараа хамгаал: хүчил, шүлт, халаах туршилтын үед хамгаалалтын шил, бээлий зүүнэ. 3. Гадуур өмсөхгүй: халаадаа лабораториос гадуур өмсөж явахгүй, дууссаны дараа өлгүүрт өлгөнө. 4. Бохирдвол мэдэгд: бодис асгарч бохирдсон халаадыг даруй тайлж, багшид мэдэгдэнэ.',
  'Жижиг хэрэглэгдэхүүний хайрцаг. Хайрцагт байх багажууд: дусаагуур, резин бөглөө, хавчуур, хямсаа, шилэн хутгуур, туршуурын атгуур, шпатель (халбага), секундомер, лакмус цаас (цэнхэр, улаан), универсал индикатор. Хайрцаг дахь жагсаалтаар багажаа тоолж аваад, ажлын төгсгөлд бүрэн хүлээлгэж өгнө.',
  'Бодис, багажтай ажиллах дүрэм. Бодисыг амсаж, гараар хүрч болохгүй. Үнэрлэхдээ гараараа сэвэлж, холоос үнэрлэнэ. Бодисыг шпатель, дусаагуураар авна; илүү гарсныг буцааж саванд хийхгүй. Туршуурыг халаахдаа амсрыг өөрөөсөө болон бусдаас холдуулна. Шилэн эдлэл хагарвал гараар түүхгүй, багшид мэдэгдэнэ. Хүчил шингэлэхдээ хүчлийг ус руу аажмаар нэмнэ, эсрэгээр хийхгүй.',
  'Татах шүүгээ (Fume hood). 1. Хортой, хурц үнэртэй хий ялгаруулах туршилтыг зөвхөн татах шүүгээнд хийнэ. 2. Ажиллахын өмнө сэнс болон гэрлийг асааж, агаар татаж байгааг шалгана. 3. Хаалтын шилийг аль болох доош буулгаж, толгойгоо шүүгээ рүү оруулахгүй. 4. Шүүгээн дотор шаардлагагүй бодис, эд зүйл хадгалахгүй. 5. Ажил дуусмагц цэвэрлэж, сэнс, гэрэл, цахилгааныг унтраана.',
  'Нүд угаагуур (Eyewash). Нүдэнд бодис орвол секунд бүр чухал. 1. Нээх: хар тагийг (PULL) доош татаж нээнэ, ус автоматаар урсана. 2. Угаах: нүдээ хуруугаар томруулж нээгээд, 15-аас доошгүй минут угаана. 3. Мэдэгдэх: багшид даруй мэдэгдэж, эмнэлгийн тусламж авна. Контакт линз зүүдэг бол угааж эхлэхдээ аль болох хурдан авна.',
  'Гал унтраагуур. Нунтаг (BC төрөл) гал унтраагуур — хэрэглэх 3 алхам: 1. Баруун дээд талын хамгаалалтын цагиргийг сугалж авна. 2. Хоолойг галын голомт (доод хэсэг) руу чиглүүлнэ. 3. Бариулыг дарж, галын голомт руу шүршинэ. Гал гарвал юуны өмнө багшид мэдэгдэнэ. Гал томорвол унтраах гэж оролдолгүй, даруй гарч, 101-д залгана.',
  'Хог хаягдлыг ангилж хаях. Шингэн хаягдлын сав: туршилтын дараах уусмал, шингэн үлдэгдлийг угаалтуур руу асгахгүй, тэмдэглэгээтэй саванд хийнэ. Хуурай хаягдлын сав: ашигласан индикатор цаас, салфетка, хатуу үлдэгдлийг энэ саванд хаяна. Хагарсан шил, хурц зүйлийг энгийн хогонд хаяхгүй — багшид тусад нь өгнө. Хаягдлын савны тагийг үргэлж хаалттай байлгана.',
  'Осол гарвал юу хийх вэ? Арьсанд асгарвал: их хэмжээний урсгал усаар 15 минут угаана. Нүдэнд орвол: нүд угаагуураар 15 минутаас доошгүй угаана. Түлэгдвэл: хүйтэн урсгал усаар 10-аас доошгүй минут хөргөнө. Бодис асгарвал: хүрэлгүй, багшид мэдэгдэж, зааврын дагуу цэвэрлэнэ. Шилэнд зүсэгдвэл: шархыг дарж, багшаас анхны тусламж авна. Гал гарвал: багшид мэдэгдэж, шаардлагатай бол гарч явна. Ямар ч осол, гэмтлийг, хичнээн жижиг байсан ч багшид даруй мэдэгдэнэ. Гал: 101, Түргэн: 103.',
  'Ажил дууссаны дараа. Ширээгээ цэвэрлэж, багажаа угаана. Багажаа жагсаалтаар тоолж хүлээлгэнэ. Хаягдлыг зөв саванд нь хаяна. Халаадаа тайлж, өлгүүрт өлгөнө. Гараа савантай усаар сайтар угаана. Аюулгүй байдал — хүн бүрийн хариуцлага.',
];

export const safetySlides: SafetySlide[] = Object.keys(pictures)
  .sort()
  .map((file, i) => ({ picture: pictures[file], text: slideText[i] ?? '' }));

export interface SafetyQuestion {
  id: string;
  /** The slide, counted from 1, that answers it. */
  slide: number;
  question: { en: string; mn: string };
  options: { en: string; mn: string }[];
  correct: number;
}

/** Three of these are asked each time, so the answers cannot simply be passed on. */
export const safetyQuestions: SafetyQuestion[] = [
  {
    id: 'eyewash',
    slide: 7,
    question: { en: 'A chemical gets into your eye. For at least how long do you rinse it at the eyewash?', mn: 'Нүдэнд бодис орвол нүд угаагуураар хамгийн багадаа хэдэн минут угаах вэ?' },
    options: [
      { en: '30 seconds', mn: '30 секунд' },
      { en: '1 minute', mn: '1 минут' },
      { en: '5 minutes', mn: '5 минут' },
      { en: '15 minutes', mn: '15 минут' },
    ],
    correct: 3,
  },
  {
    id: 'dilute',
    slide: 5,
    question: { en: 'How do you dilute an acid?', mn: 'Хүчил шингэлэхдээ яах вэ?' },
    options: [
      { en: 'Pour the water quickly into the acid', mn: 'Усыг хүчил рүү хурдан хийнэ' },
      { en: 'Add the acid slowly to the water', mn: 'Хүчлийг ус руу аажмаар нэмнэ' },
      { en: 'Pour both in at the same time', mn: 'Хоёуланг нь нэг дор хийнэ' },
      { en: 'Heat the acid first, then add water', mn: 'Хүчлийг халааж байгаад ус нэмнэ' },
    ],
    correct: 1,
  },
  {
    id: 'hood',
    slide: 6,
    question: { en: 'Where do you do an experiment that gives off a toxic or sharp-smelling gas?', mn: 'Хортой, хурц үнэртэй хий ялгаруулах туршилтыг хаана хийх вэ?' },
    options: [
      { en: 'On the bench, near the window', mn: 'Цонхны дэргэдэх ширээн дээр' },
      { en: 'Next to the sink', mn: 'Угаалтуурын дэргэд' },
      { en: 'Only in the fume hood', mn: 'Зөвхөн татах шүүгээнд' },
      { en: 'Anywhere, if you hold your breath', mn: 'Амьсгаагаа түгжвэл хаана ч болно' },
    ],
    correct: 2,
  },
  {
    id: 'extinguisher',
    slide: 8,
    question: { en: 'Where do you aim the fire extinguisher’s hose?', mn: 'Гал унтраагуурын хоолойг хаашаа чиглүүлэх вэ?' },
    options: [
      { en: 'At the base of the fire', mn: 'Галын голомт (доод хэсэг) руу' },
      { en: 'At the top of the flames', mn: 'Дөлний орой руу' },
      { en: 'Into the smoke', mn: 'Утаа руу' },
      { en: 'At the wall behind the fire', mn: 'Галын арын хана руу' },
    ],
    correct: 0,
  },
  {
    id: 'liquidWaste',
    slide: 9,
    question: { en: 'What do you do with the solutions left after an experiment?', mn: 'Туршилтын дараах уусмал, шингэн үлдэгдлийг яах вэ?' },
    options: [
      { en: 'Pour them down the sink', mn: 'Угаалтуур руу асгана' },
      { en: 'Put them in the labelled liquid waste container', mn: 'Тэмдэглэгээтэй шингэн хаягдлын саванд хийнэ' },
      { en: 'Put them in the dry waste container', mn: 'Хуурай хаягдлын саванд хийнэ' },
      { en: 'Pour them back into the reagent bottle', mn: 'Буцааж урвалжийн савандаа хийнэ' },
    ],
    correct: 1,
  },
  {
    id: 'glass',
    slide: 5,
    question: { en: 'A piece of glassware breaks. What do you do?', mn: 'Шилэн эдлэл хагарвал юу хийх вэ?' },
    options: [
      { en: 'Pick up the pieces by hand and put them in the bin', mn: 'Хэлтэрхийг гараараа түүж хогонд хаяна' },
      { en: 'Push the pieces aside and carry on', mn: 'Хэлтэрхийг нэг тийш болгоод үргэлжлүүлнэ' },
      { en: 'Do not touch it, and tell the teacher', mn: 'Гараар түүхгүй, багшид мэдэгдэнэ' },
      { en: 'Wrap it in paper towel and take it home', mn: 'Цаасан алчуурт ороож гэртээ авч явна' },
    ],
    correct: 2,
  },
  {
    id: 'smell',
    slide: 5,
    question: { en: 'How do you smell a substance?', mn: 'Бодисыг хэрхэн үнэрлэх вэ?' },
    options: [
      { en: 'Waft the vapour towards you with your hand, from a distance', mn: 'Гараараа сэвэлж, холоос үнэрлэнэ' },
      { en: 'Hold the bottle under your nose and breathe in deeply', mn: 'Савыг хамартаа ойртуулж гүнзгий амьсгална' },
      { en: 'Taste a little first', mn: 'Эхлээд бага зэрэг амсаж үзнэ' },
      { en: 'Warm it, then smell it closely', mn: 'Халааж байгаад ойроос үнэрлэнэ' },
    ],
    correct: 0,
  },
  {
    id: 'burn',
    slide: 10,
    question: { en: 'You burn your skin. What do you do first?', mn: 'Түлэгдвэл юуны өмнө юу хийх вэ?' },
    options: [
      { en: 'Put oil or cream on it', mn: 'Тос эсвэл крем түрхэнэ' },
      { en: 'Cool it under cold running water for at least 10 minutes', mn: 'Хүйтэн урсгал усаар 10-аас доошгүй минут хөргөнө' },
      { en: 'Cover it tightly and carry on working', mn: 'Чанга боогоод ажлаа үргэлжлүүлнэ' },
      { en: 'Nothing, unless it hurts a lot', mn: 'Их өвдөхгүй бол юу ч хийхгүй' },
    ],
    correct: 1,
  },
  {
    id: 'heatTube',
    slide: 5,
    question: { en: 'Where do you point the mouth of a test-tube while you heat it?', mn: 'Туршуурыг халаахдаа амсрыг нь хаашаа чиглүүлэх вэ?' },
    options: [
      { en: 'At yourself, so you can see inside', mn: 'Дотрыг нь харахын тулд өөр рүүгээ' },
      { en: 'At the student next to you', mn: 'Хажуугийн сурагч руу' },
      { en: 'Straight up, over your face', mn: 'Нүүрнийхээ дээгүүр шууд дээш' },
      { en: 'Away from yourself and from everyone else', mn: 'Өөрөөсөө болон бусдаас холдуулна' },
    ],
    correct: 3,
  },
  {
    id: 'ambulance',
    slide: 10,
    question: { en: 'Which number do you call for an ambulance?', mn: 'Түргэн тусламжийг ямар дугаараар дуудах вэ?' },
    options: [
      { en: '101', mn: '101' },
      { en: '102', mn: '102' },
      { en: '103', mn: '103' },
      { en: '105', mn: '105' },
    ],
    correct: 2,
  },
];

/** How many questions are asked, all of which must be right. */
export const SAFETY_QUESTION_COUNT = 3;

/** Three questions at random, each answered by a different slide where possible. */
export const pickSafetyQuestions = (): SafetyQuestion[] => {
  const shuffled = [...safetyQuestions].sort(() => Math.random() - 0.5);
  const picked: SafetyQuestion[] = [];
  for (const question of shuffled) {
    if (picked.length < SAFETY_QUESTION_COUNT && !picked.some((p) => p.slide === question.slide)) picked.push(question);
  }
  for (const question of shuffled) if (picked.length < SAFETY_QUESTION_COUNT && !picked.includes(question)) picked.push(question);
  return picked;
};
