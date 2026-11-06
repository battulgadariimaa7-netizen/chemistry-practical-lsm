import chemicalStorageImage from '../assets/images/pages/chemical_storage.jpg';
import copperSulfateImage from '../assets/images/pages/copper_sulfate_pentahydrate.jpg';
import labNotebookImage from '../assets/images/pages/lab_notebook.jpg';
import titrationEndpointImage from '../assets/images/pages/titration_endpoint.jpg';
import titrationSetupImage from '../assets/images/pages/titration_setup.jpg';
import { ApparatusPhoto } from './apparatusPhotos';

export interface PagePhoto extends ApparatusPhoto {
  altEn: string;
  altMn: string;
  cropped?: boolean;
  /** Says what the photo shows when it is not the set-up the text beside it describes. */
  noteEn?: string;
  noteMn?: string;
}

// Freely licensed photos from Wikimedia Commons, resized for the site. Keep the credits with them.
export const pagePhotos: Record<'chemicalStorage' | 'copperSulfate' | 'labNotebook' | 'titrationEndpoint' | 'titrationSetup', PagePhoto> = {
  chemicalStorage: {
    src: chemicalStorageImage,
    author: 'Bamrsykp',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Flammable_solvent_cabinet.jpg',
    altEn: 'Yellow safety cabinet for flammable chemicals',
    altMn: 'Шатамхай бодисын шар хамгаалалтын шүүгээ',
    cropped: true,
  },
  copperSulfate: {
    src: copperSulfateImage,
    author: 'Benjah-bmm27',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Copper(II)-sulfate-pentahydrate-sample.jpg',
    altEn: 'Blue hydrated copper(II) sulfate, CuSO₄·5H₂O, as powder and small lumps',
    altMn: 'Цэнхэр зэсийн байван CuSO₄·5H₂O: нунтаг ба жижиг бөөм',
    noteEn: 'In the photo: blue hydrated copper(II) sulfate before heating. It turns white as the water leaves.',
    noteMn: 'Зурагт: халаахаас өмнөх цэнхэр зэсийн байван. Ус нь ялгарахад цагаан болно.',
  },
  labNotebook: {
    src: labNotebookImage,
    author: 'Katherine Stember',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lab_Notebook.jpg',
    altEn: 'Researcher in gloves recording results in a lab notebook',
    altMn: 'Бээлий өмссөн судлаач лабораторийн дэвтэрт үр дүнгээ бичиж байна',
    cropped: true,
  },
  titrationEndpoint: {
    src: titrationEndpointImage,
    author: 'Kengksn',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Acid_and_Base_Titration.jpg',
    altEn: 'Pale pink end-point in a conical flask on a white tile',
    altMn: 'Цагаан хавтан дээрх конус колбонд гарсан цайвар ягаан төгсгөлийн цэг',
    cropped: true,
  },
  titrationSetup: {
    src: titrationSetupImage,
    author: 'Lisa Simpson 23',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vinegar_Titration_-_Color_of_the_Phenolphthalein_reacting_to_NaOH.jpg',
    altEn: 'Titration set-up: a gloved hand on the burette tap above a conical flask',
    altMn: 'Титрлэлтийн угсралт: конус колбын дээрх бюретийн кранийг бээлийтэй гараар барьсан',
    cropped: true,
  },
};
