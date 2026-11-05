import rule1Image from '../assets/images/safety/rule_1.jpg';
import rule2Image from '../assets/images/safety/rule_2.jpg';
import labCoatsImage from '../assets/images/lab/lab_coats.jpg';
import rule4Image from '../assets/images/safety/rule_4.jpg';
import rule5Image from '../assets/images/safety/rule_5.jpg';
import rule7Image from '../assets/images/safety/rule_7.jpg';
import rule8Image from '../assets/images/safety/rule_8.jpg';
import rule9Image from '../assets/images/safety/rule_9.jpg';
import rule10Image from '../assets/images/safety/rule_10.jpg';
import rule11Image from '../assets/images/safety/rule_11.jpg';
import rule12Image from '../assets/images/safety/rule_12.jpg';
import rule13Image from '../assets/images/safety/rule_13.jpg';
import rule14Image from '../assets/images/safety/rule_14.jpg';
import rule15Image from '../assets/images/safety/rule_15.jpg';
import eyewashImage from '../assets/images/lab/eyewash.jpg';
import skinContactImage from '../assets/images/safety/skin_contact.jpg';
import chemicalSpillImage from '../assets/images/safety/chemical_spill.jpg';
import fireExtinguisherImage from '../assets/images/lab/fire_extinguisher.jpg';
import fumeCupboardImage from '../assets/images/lab/fume_cupboard.jpg';
import stationImage from '../assets/images/safety/station.jpg';
import benchConductImage from '../assets/images/safety/bench_conduct.jpg';
import handWashImage from '../assets/images/safety/hand_wash.jpg';
import { ApparatusPhoto, apparatusPhotos } from './apparatusPhotos';

export interface SafetyPhoto extends ApparatusPhoto {
  altEn: string;
  altMn: string;
  cropped?: boolean;
  contain?: boolean;
}

// Photos taken in our own laboratory have no outside source to credit.
const ourLaboratory = { author: '', license: '', licenseUrl: '', sourceUrl: '' };

// The rest are freely licensed photos from Wikimedia Commons, resized for the site. Keep the credits with them.
// Rule 6 (wafting) keeps its drawing: no photo showing the technique correctly could be found.
export const rulePhotos: Record<number, SafetyPhoto> = {
  1: {
    src: rule1Image,
    author: 'Globetrotter19',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Geb%C3%A4ude_B,_1er_Stock,_B._112_Labor,_Th%C3%B6k%C3%B6ly_%C3%BAt_48-54,_2024_Zugl%C3%B3.jpg',
    altEn: 'School chemistry laboratory with benches and a board',
    altMn: 'Сургуулийн химийн лаборатори: ажлын ширээ, самбар',
  },
  2: {
    src: rule2Image,
    author: 'Martin Schaier',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Working_in_analytical_chemistry_2.jpg',
    altEn: 'Safety glasses on a laboratory bench',
    altMn: 'Лабораторийн ширээн дээрх хамгаалалтын шил',
    cropped: true,
  },
  3: {
    ...ourLaboratory,
    src: labCoatsImage,
    altEn: 'Lab coats on hooks in our laboratory',
    altMn: 'Манай лабораторийн дэгээнд өлгөсөн халадууд',
    cropped: true,
  },
  4: {
    src: rule4Image,
    author: 'National Eye Institute',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Preparing_Scientific_Equipment_(9955310676).jpg',
    altEn: 'Scientists at work in coats, gloves and safety glasses, long hair tied back',
    altMn: 'Халад, бээлий, хамгаалалтын шил зүүсэн, урт үсээ боосон судлаачид',
    cropped: true,
  },
  5: {
    src: rule5Image,
    author: 'Praewnaaaaaam',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Protective_nitrile_gloves.jpg',
    altEn: 'Hands in blue nitrile gloves',
    altMn: 'Цэнхэр нитрил бээлийтэй гар',
    cropped: true,
  },
  7: {
    src: rule7Image,
    author: 'Andra Mihali',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mouth_pipette_(4740277664).jpg',
    altEn: 'Red rubber pipette filler on a pipette',
    altMn: 'Пипетк дээрх улаан резин соруулагч',
    cropped: true,
  },
  8: {
    src: rule8Image,
    author: 'Mfomich',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:D4meth_label.jpg',
    altEn: 'Reagent bottle label with GHS hazard symbols',
    altMn: 'GHS аюулын тэмдэгтэй урвалжийн савны шошго',
    cropped: true,
  },
  9: {
    src: rule9Image,
    author: 'Walkerma',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:ChemistPouringFromCylinder.JPG',
    altEn: 'Student in goggles, gloves and a coat pouring a measured liquid',
    altMn: 'Нүдний шил, бээлий, халад өмссөн оюутан хэмжсэн шингэн асгаж байна',
  },
  10: {
    src: rule10Image,
    author: 'JunK',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:No_eating,_drinking_or_smoking_in_MTR_Airport_Express_20060622.jpg',
    altEn: 'Signs: no eating or drinking, no smoking',
    altMn: 'Тэмдэг: хоол, ундаа хэрэглэхгүй, тамхи татахгүй',
  },
  11: {
    src: rule11Image,
    author: 'Brian Kelleher',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Molten_Flinak_Salt.JPG',
    altEn: 'Test tube heated in a blue burner flame',
    altMn: 'Халаагуурын цэнхэр дөлөн дээр халааж буй хуруу шил',
    cropped: true,
  },
  12: {
    src: rule12Image,
    author: 'Richard Webb',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spill_kit,_Griffin_wind_farm_-_geograph.org.uk_-_4140767.jpg',
    altEn: 'Yellow emergency spill equipment bin',
    altMn: 'Асгаралтын ослын хэрэгслийн шар сав',
  },
  13: {
    src: rule13Image,
    author: 'F ASTILY',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Broken_glass_1_2021-01-08.jpeg',
    altEn: 'Broken glass in a steel sink',
    altMn: 'Төмөр угаалтуур дахь хагарсан шил',
    cropped: true,
  },
  14: {
    src: rule14Image,
    author: 'Cplabsafety',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:ECO_Funnel_Family,_OSHA_and_EPA_Compliant_Waste_Management_System,_March_2013.jpg',
    altEn: 'Laboratory waste containers with funnels',
    altMn: 'Юүлүүртэй лабораторийн хаягдлын савнууд',
  },
  15: {
    src: rule15Image,
    author: 'Davyimage',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Water_and_soap_one_of_the_used_in_Rwanda_in_prevention_of_spreading_og_covid-19.jpg',
    altEn: 'Washing hands with soap at a sink',
    altMn: 'Угаалтуурт гараа савандаж угааж байна',
    cropped: true,
  },
};

export const emergencyPhotos: Record<string, SafetyPhoto> = {
  eye_splash: {
    ...ourLaboratory,
    src: eyewashImage,
    altEn: 'Emergency eyewash station in our laboratory',
    altMn: 'Манай лабораторийн ослын нүд угаагч',
    cropped: true,
  },
  skin_contact: {
    src: skinContactImage,
    author: 'Zelda F. Scott',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Safety_shower.JPG',
    altEn: 'Safety shower head',
    altMn: 'Ослын шүршүүрийн толгой',
    cropped: true,
  },
  chemical_spill: {
    src: chemicalSpillImage,
    author: 'PEO ACWA',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Blue_Grass_Chemical_Agent-Destruction_Pilot_Plant_Laboratory_(40900060582).jpg',
    altEn: 'Responder in a protective suit cleaning up a practice spill in a laboratory',
    altMn: 'Хамгаалалтын хувцастай ажилтан лабораторид дадлагын асгаралт цэвэрлэж байна',
    cropped: true,
  },
  lab_fire: {
    ...ourLaboratory,
    src: fireExtinguisherImage,
    altEn: 'Fire extinguisher on the wall of our laboratory',
    altMn: 'Манай лабораторийн хананд байгаа гал унтраагуур',
    cropped: true,
  },
  broken_glass: rulePhotos[13],
  toxic_gas: {
    ...ourLaboratory,
    src: fumeCupboardImage,
    altEn: 'Fume cupboard in our laboratory',
    altMn: 'Манай лабораторийн сорох шүүгээ',
    cropped: true,
  },
};

export const stationPhoto: SafetyPhoto = {
  src: stationImage,
  author: 'Cjp24',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Safety_equipment.jpg',
  altEn: 'Safety shower, eyewash and fire extinguishers on a laboratory wall',
  altMn: 'Лабораторийн хана дахь ослын шүршүүр, нүд угаагч, гал унтраагуур',
  cropped: true,
};

export const ruleBannerPhotos: Record<'ppe' | 'conduct' | 'heating' | 'spills' | 'hygiene', SafetyPhoto> = {
  ppe: rulePhotos[9],
  conduct: {
    src: benchConductImage,
    author: 'Walkerma',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:WorkingAtFumeHood.JPG',
    altEn: 'Student in goggles and gloves working at a fume cupboard',
    altMn: 'Нүдний шил, бээлий зүүсэн оюутан сорох шүүгээнд ажиллаж байна',
  },
  heating: { ...apparatusPhotos.bunsen_burner, altEn: 'Bunsen burner', altMn: 'Бунзены халаагуур', contain: true },
  spills: emergencyPhotos.chemical_spill,
  hygiene: {
    src: handWashImage,
    author: 'Shixart1985',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hands_washing_with_soap_at_a_sink_in_a_bright_bathroom.jpg',
    altEn: 'Washing hands at a sink',
    altMn: 'Угаалтуурт гараа угааж байна',
    cropped: true,
  },
};

/** Four of the rules at once, for the "all rules" banner. Their credits are on the rule cards below it. */
export const ruleMontagePhotos: SafetyPhoto[] = [rulePhotos[2], rulePhotos[5], rulePhotos[8], rulePhotos[15]];
