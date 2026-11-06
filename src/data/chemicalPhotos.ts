import bariumNitrateImage from '../assets/images/chemicals/barium-nitrate.jpg';
import bromophenolBlueImage from '../assets/images/chemicals/bromophenol-blue.jpg';
import copperSulfateImage from '../assets/images/chemicals/copper-sulfate.jpg';
import ethanolImage from '../assets/images/chemicals/ethanol.jpg';
import hydrochloricAcidImage from '../assets/images/chemicals/hydrochloric-acid.jpg';
import methylOrangeImage from '../assets/images/chemicals/methyl-orange.jpg';
import nitricAcidImage from '../assets/images/chemicals/nitric-acid.jpg';
import potassiumManganateImage from '../assets/images/chemicals/potassium-manganate.jpg';
import sulfuricAcidImage from '../assets/images/chemicals/sulfuric-acid.jpg';
import { PagePhoto } from './pagePhotos';

const bySa4 = { license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0' };
const bySa3 = { license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0' };
const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

// Real reagent bottles, mostly as sold to laboratories, from Wikimedia Commons. Each photo is fitted to 4:3
// with a blurred copy behind it. Keep the credits with them.
// Chemicals with no freely licensed bottle photo keep the drawn amber bottle.
export const chemicalPhotos: Record<string, PagePhoto> = {
  hydrochloric_acid: {
    src: hydrochloricAcidImage,
    author: 'Aleksander Sobolewski',
    ...bySa4,
    sourceUrl: commons('Chempur_reagents.jpg'),
    altEn: 'Chempur bottle of 35–38% hydrochloric acid',
    altMn: 'Chempur-ийн 35–38%-ийн давсны хүчлийн шил',
    cropped: true,
  },
  nitric_acid: {
    src: nitricAcidImage,
    author: 'Kapitánka Nemo',
    ...bySa3,
    sourceUrl: commons('Kyselina_dusičná_65%25.jpg'),
    altEn: 'Amber bottle of 65% nitric acid',
    altMn: '65%-ийн азотын хүчилтэй бор шил',
  },
  sulfuric_acid: {
    src: sulfuricAcidImage,
    author: 'Hugo',
    ...bySa4,
    sourceUrl: commons('Bottle-H2SO4.jpg'),
    altEn: 'Amber bottle of sulfuric acid for analysis (p.a.)',
    altMn: 'Шинжилгээний зэрэглэлийн (p.a.) хүхрийн хүчилтэй бор шил',
  },
  potassium_manganate: {
    src: potassiumManganateImage,
    author: 'KondratiukM',
    ...bySa4,
    sourceUrl: commons('KMnO4_GHS_view_1.jpg'),
    altEn: 'Brown bottle of potassium permanganate with GHS hazard labels',
    altMn: 'GHS аюулын тэмдэгтэй калийн перманганатын бор шил',
  },
  barium_nitrate: {
    src: bariumNitrateImage,
    author: 'Leiem',
    ...bySa4,
    sourceUrl: commons('Xiaosuan_bei.jpg'),
    altEn: 'Small jar of analytical-grade barium nitrate, a white powder',
    altMn: 'Шинжилгээний зэрэглэлийн барийн нитрат: цагаан нунтагтай жижиг сав',
  },
  copper_sulfate: {
    src: copperSulfateImage,
    author: 'Parvathisri',
    ...bySa3,
    sourceUrl: commons('2.copper_sulphate.jpg'),
    altEn: 'Laboratory-reagent tub of copper(II) sulfate, with blue crystals in a dish',
    altMn: 'Лабораторийн урвалжийн зэс(II)-ийн сульфатын сав, тавган дахь цэнхэр талст',
  },
  ethanol: {
    src: ethanolImage,
    author: 'Diane A. Reid',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: commons('Ethyl_alcohol_usp_grade.jpg'),
    altEn: 'Bottle of USP-grade ethyl alcohol in a laboratory',
    altMn: 'Лаборатори дахь USP зэрэглэлийн этилийн спиртийн шил',
  },
  methyl_orange: {
    src: methylOrangeImage,
    author: 'Sébastien Bruneau',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: commons('Helianthine_flacon.jpg'),
    altEn: 'Bottle of methyl orange indicator solution',
    altMn: 'Метил улбар шар индикаторын уусмалтай шил',
  },
  bromophenol_blue: {
    src: bromophenolBlueImage,
    author: 'Rayhana Alhour',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    sourceUrl: commons('أزرق_البروموفينول.jpg'),
    altEn: 'Dropper bottle of bromophenol blue indicator held in a gloved hand',
    altMn: 'Бээлийтэй гарт барьсан бромфенол хөх индикаторын дусаагуур шил',
  },
};
