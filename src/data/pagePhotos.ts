import chemicalStorageImage from '../assets/images/pages/chemical_storage.jpg';
import labNotebookImage from '../assets/images/pages/lab_notebook.jpg';
import titrationEndpointImage from '../assets/images/pages/titration_endpoint.jpg';
import titrationSetupImage from '../assets/images/pages/titration_setup.jpg';
import { ApparatusPhoto } from './apparatusPhotos';

export interface PagePhoto extends ApparatusPhoto {
  altEn: string;
  altMn: string;
  cropped?: boolean;
}

// Freely licensed photos from Wikimedia Commons, resized for the site. Keep the credits with them.
export const pagePhotos: Record<'chemicalStorage' | 'labNotebook' | 'titrationEndpoint' | 'titrationSetup', PagePhoto> = {
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
