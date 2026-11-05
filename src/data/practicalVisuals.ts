export interface PracticalVisual {
  titleEn: string;
  titleMn: string;
  captionEn: string;
  captionMn: string;
}

// The apparatus setup shown at the top of each practical, keyed by practical id.
export const practicalVisuals: Record<string, PracticalVisual> = {
  p1_1: {
    titleEn: 'Crucible Thermal Decomposition & Heating',
    titleMn: 'Тигель ба Бунзены халаагуурын угсралт',
    captionEn: 'Heated over a non-luminous blue flame supported on a pipeclay triangle to obtain constant mass.',
    captionMn: 'Тогтмол масстай болтол шаазан гурвалжин дээр Бунзены халаагуурын цэнхэр дөлөөр халаана.',
  },
  p2_1: {
    titleEn: 'Conductivity Test Circuit',
    titleMn: 'Цахилгаан дамжуулалт шалгах хэлхээ',
    captionEn: 'Dissolved NaCl completes the circuit and lights the LED; stearic acid and SiO₂ leave it dark.',
    captionMn: 'Ууссан NaCl хэлхээг холбож LED-г асаана; стеарины хүчил ба SiO₂ асаадаггүй.',
  },
  p3_1: {
    titleEn: 'Polystyrene Cup Calorimeter',
    titleMn: 'Хөөсөнцөр аяган калориметр',
    captionEn: 'Mix the solutions in a lidded cup supported in a beaker and record the highest temperature reached.',
    captionMn: 'Стакан дотор тавьсан таглаатай хөөсөнцөр аяганд уусмалуудыг хольж, хамгийн өндөр температурыг тэмдэглэнэ.',
  },
  p4_1: {
    titleEn: 'Redox Titration with Self-Indicating KMnO₄',
    titleMn: 'KMnO₄-ээр исэлдэн ангижрах титрлэлт',
    captionEn: 'Purple drops decolorize on entering the flask until one drop leaves a permanent faint pink.',
    captionMn: 'Нил ягаан дусал колбонд ормогц өнгөгүй болно; нэг дусал байнгын бүдэг ягаан өнгө үлдээвэл төгсгөлийн цэг.',
  },
  p5_1: {
    titleEn: 'Equilibrium Shifts in Test Tubes',
    titleMn: 'Туршилтын хоолойд тэнцвэрийг шилжүүлэх',
    captionEn: 'Compared with the red reference, added Fe³⁺ darkens the color, F⁻ removes it and warming makes it paler.',
    captionMn: 'Улаан жишиг хоолойтой харьцуулахад Fe³⁺ нэмэхэд өнгө гүнзгийрч, F⁻ нэмэхэд арилж, халаахад цайвар болно.',
  },
  p6_1: {
    titleEn: 'Disappearing Cross Rate Measurement',
    titleMn: 'Чагт арилах хугацаагаар хурд хэмжих',
    captionEn: 'Look down through the flask and time how long the sulfur takes to hide the cross on the paper.',
    captionMn: 'Колбоор доош харж, хүхрийн тунадас цаасан дээрх чагтыг халхлах хугацааг хэмжинэ.',
  },
  p7_1: {
    titleEn: 'Cation Tests with Sodium Hydroxide',
    titleMn: 'Натрийн гидроксидоор катион таних',
    captionEn: 'Dropwise NaOH gives a pale blue Cu²⁺, dirty green Fe²⁺, red-brown Fe³⁺ and white Zn²⁺ precipitate.',
    captionMn: 'NaOH дуслаар нэмэхэд Cu²⁺ цайвар цэнхэр, Fe²⁺ бохир ногоон, Fe³⁺ улаан хүрэн, Zn²⁺ цагаан тунадас үүсгэнэ.',
  },
  p8_1: {
    titleEn: 'Silver Halide Precipitates',
    titleMn: 'Мөнгөний галидын тунадас',
    captionEn: 'Acidified AgNO₃ gives white AgCl, cream AgBr and yellow AgI. Aqueous ammonia then separates them.',
    captionMn: 'Хүчиллэгжүүлсэн AgNO₃ нь цагаан AgCl, цөцгий өнгийн AgBr, шар AgI үүсгэнэ. Дараа нь аммиакаар ялгана.',
  },
  p9_1: {
    titleEn: 'Hydrolysis Race in a Warm Water Bath',
    titleMn: 'Бүлээн усан халаагуурт гидролизийн хурд харьцуулах',
    captionEn: 'At 50°C the yellow AgI appears first, cream AgBr next and white AgCl last. No naked flames near these volatile liquids.',
    captionMn: '50°C-д эхлээд шар AgI, дараа нь цөцгий өнгийн AgBr, хамгийн сүүлд цагаан AgCl үүснэ. Дэгдэмхий бодисын ойролцоо ил гал хэрэглэхгүй.',
  },
  p10_1: {
    titleEn: 'Oxidation and Carbonyl Tests in a Water Bath',
    titleMn: 'Усан халаагуурт исэлдэлт ба карбонилын урвал',
    captionEn: 'Positive results: dichromate turns green, Tollens’ forms a silver mirror and Fehling’s gives brick-red Cu₂O.',
    captionMn: 'Эерэг үр дүн: дихромат ногоон болж, Толленс мөнгөн толь, Фелинг тоосгон улаан Cu₂O үүсгэнэ.',
  },
  p11_1: {
    titleEn: 'Hess’s Law by Calorimetry',
    titleMn: 'Калориметрээр Гессийн хуулийг батлах',
    captionEn: 'Measure NaHCO₃ and Na₂CO₃ separately with excess HCl in the cup, then combine ΔH₁ and ΔH₂.',
    captionMn: 'NaHCO₃ ба Na₂CO₃-ийг илүүдэл HCl-тай аяганд тус тусад нь хэмжиж, ΔH₁ ба ΔH₂-оос тооцоолно.',
  },
  p12_1: {
    titleEn: 'Zinc–Copper Galvanic Cell',
    titleMn: 'Цайр–зэсийн гальваны элемент',
    captionEn: 'Two half-cells joined by a salt bridge. A high-resistance voltmeter reads about +1.10 V with copper as the positive electrode.',
    captionMn: 'Хоёр хагас элементийг давсан гүүрээр холбоно. Өндөр эсэргүүцэлтэй вольтметр ойролцоогоор +1.10 В заах ба зэс нь эерэг электрод.',
  },
  p13_1: {
    titleEn: 'pH Titration Curve',
    titleMn: 'pH титрлэлтийн муруй',
    captionEn: 'Add NaOH from the burette into stirred ethanoic acid while the pH meter records the curve. pH at half-equivalence equals pKa.',
    captionMn: 'Хутгаж буй цууны хүчилд бюреткээс NaOH нэмэхийн зэрэгцээ pH метрээр муруйг бичнэ. Хагас саармагжилтын цэгийн pH нь pKa-тай тэнцүү.',
  },
  p14_1: {
    titleEn: 'Gas Syringe Kinetics',
    titleMn: 'Хийн шприцээр кинетик хэмжих',
    captionEn: 'Oxygen from H₂O₂ and MnO₂ pushes the plunger out. Record the gas volume against time.',
    captionMn: 'H₂O₂ ба MnO₂-оос ялгарсан хүчилтөрөгч бүлүүрийг түлхэнэ. Хийн эзлэхүүнийг хугацаанаас хамааруулан тэмдэглэнэ.',
  },
  p15_1: {
    titleEn: 'Copper(II) Ligand Exchange',
    titleMn: 'Зэс(II)-ийн лиганд солилцоо',
    captionEn: 'Pale blue aqua complex, deep blue with ammonia, and yellow-green with concentrated HCl.',
    captionMn: 'Цайвар цэнхэр усан комплекс аммиактай гүн хөх, өтгөн HCl-тай шар-ногоон өнгөтэй болно.',
  },
  p16_1: {
    titleEn: 'Ester Reflux and Separation',
    titleMn: 'Нийлмэл эфирийг буцаан хөргөлтөөр гарган авч ялгах',
    captionEn: 'Reflux over a heating mantle with water entering the condenser at the bottom. The ester floats above the aqueous layer in the separating funnel.',
    captionMn: 'Халаагч дээр буцаан хөргөхдөө усыг хөргөгчийн доод талаас оруулна. Ялгагч юүлүүрт эфир усан давхаргын дээр хөвнө.',
  },
  p17_1: {
    titleEn: 'Microscale Functional Group Tests',
    titleMn: 'Функц бүлгийг бичил хэмжээгээр таних',
    captionEn: 'Each row of the well plate is one diagnostic reagent, such as bromine water, 2,4-DNPH or neutral FeCl₃.',
    captionMn: 'Хавтангийн мөр бүр нэг оношилгооны урвалж юм: бромын ус, 2,4-DNPH, саармаг FeCl₃ гэх мэт.',
  },
};
