import { chaptersData } from './chapters';
import { Language } from '../types/chemistry';

export const newMeasurementRow = (language: Language) => ({
  parameter: language === 'en' ? 'New Parameter' : 'Шинэ хэмжигдэхүүн',
  trial1: '0.00',
  trial2: '0.00',
  trial3: '0.00',
  mean: '0.00',
  unit: language === 'en' ? 'cm³' : 'см³',
});

// The worked example a new notebook opens with.
export const notebookSamples = {
  en: {
    studentName: 'Student Researcher',
    experimentTitle: chaptersData[0].practicals[0].titleEn,
    aim: 'Determine the value of x in hydrated copper(II) sulfate by heating to constant mass.',
    equipmentUsed: 'Porcelain crucible with lid, analytical balance, Bunsen burner, pipeclay triangle, crucible tongs.',
    measurements: [
      { parameter: 'Mass of empty crucible + lid (m1)', trial1: '21.45', trial2: '21.45', trial3: '21.45', mean: '21.45', unit: 'g' },
      { parameter: 'Mass of crucible + lid + hydrated salt (m2)', trial1: '24.30', trial2: '24.30', trial3: '24.30', mean: '24.30', unit: 'g' },
      { parameter: 'Mass of crucible + lid + residue after heating (m3)', trial1: '23.27', trial2: '23.27', trial3: '23.27', mean: '23.27', unit: 'g' },
    ],
    observations: 'Bright blue crystalline granules crackled gently during heating, releasing steam. The solid converted into a uniform chalky white powder.',
    calculations: 'Mass of hydrated salt = 2.85 g\nMass of anhydrous salt = 1.82 g\nMass of water lost = 1.03 g\nMoles of CuSO4 = 1.82 / 159.61 = 0.0114 mol\nMoles of H2O = 1.03 / 18.02 = 0.0572 mol\nRatio x = 0.0572 / 0.0114 = 5.01 ≈ 5\nFormula: CuSO4·5H2O',
    conclusion: 'The empirical formula of hydrated copper(II) sulfate is established experimentally as CuSO4·5H2O.',
    evaluations: 'Crucible must be allowed to cool completely in a desiccator before final mass measurement to avoid buoyant convection errors on the analytical balance.',
  },
  mn: {
    studentName: 'Сурагчийн нэр',
    experimentTitle: chaptersData[0].practicals[0].titleMn,
    aim: 'Талст гидратыг тогтмол масс хүртэл халааж CuSO4·xH2O дахь x-ийн утгыг тодорхойлох.',
    equipmentUsed: 'Таглаатай шаазан тигель, аналитик жин, Бунзены халаагуур, шаазан гурвалжин, тигелийн хавчаар.',
    measurements: [
      { parameter: 'Хоосон тигель + тагны масс (m1)', trial1: '21.45', trial2: '21.45', trial3: '21.45', mean: '21.45', unit: 'г' },
      { parameter: 'Тигель + таг + талст гидратын масс (m2)', trial1: '24.30', trial2: '24.30', trial3: '24.30', mean: '24.30', unit: 'г' },
      { parameter: 'Халаасны дараах тигель + таг + үлдэгдлийн масс (m3)', trial1: '23.27', trial2: '23.27', trial3: '23.27', mean: '23.27', unit: 'г' },
    ],
    observations: 'Тод цэнхэр талстууд халаах үед зөөлөн тачигнаж, уур ялгарав. Хатуу бодис жигд цагаан нунтаг болж хувирав.',
    calculations: 'Талст гидратын масс = 2.85 г\nУсгүй давсны масс = 1.82 г\nУурссан усны масс = 1.03 г\nCuSO4-ийн моль = 1.82 / 159.61 = 0.0114 моль\nH2O-ийн моль = 1.03 / 18.02 = 0.0572 моль\nХарьцаа x = 0.0572 / 0.0114 = 5.01 ≈ 5\nТомьёо: CuSO4·5H2O',
    conclusion: 'Зэсийн (II) сульфатын талст гидратын томьёо CuSO4·5H2O болох нь туршилтаар тогтоогдлоо.',
    evaluations: 'Жингийн алдаанаас зайлсхийхийн тулд сүүлчийн хэмжилтийн өмнө тигелийг эксикаторт бүрэн хөргөх шаардлагатай.',
  },
};
