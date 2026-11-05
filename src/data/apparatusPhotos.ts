import beakerImage from '../assets/images/apparatus/beaker.jpg';
import testTubesImage from '../assets/images/apparatus/test_tubes.jpg';
import roundBottomFlaskImage from '../assets/images/apparatus/round_bottom_flask.jpg';
import filterFunnelImage from '../assets/images/apparatus/filter_funnel.jpg';
import separatingFunnelImage from '../assets/images/apparatus/separating_funnel.jpg';
import watchGlassImage from '../assets/images/apparatus/watch_glass.jpg';
import evaporatingBasinImage from '../assets/images/apparatus/evaporating_basin.jpg';
import droppingPipettesImage from '../assets/images/apparatus/dropping_pipettes.jpg';
import liebigCondenserImage from '../assets/images/apparatus/liebig_condenser.jpg';
import stirringRodImage from '../assets/images/apparatus/stirring_rod.jpg';
import washBottleImage from '../assets/images/apparatus/wash_bottle.jpg';
import testTubeRackImage from '../assets/images/apparatus/test_tube_rack.jpg';
import retortStandImage from '../assets/images/apparatus/retort_stand.jpg';
import alcoholBurnerImage from '../assets/images/apparatus/alcohol_burner.jpg';
import tripodImage from '../assets/images/apparatus/tripod.jpg';
import crucibleTongsImage from '../assets/images/apparatus/crucible_tongs.jpg';
import volumetricPipetteImage from '../assets/images/apparatus/volumetric_pipette.jpg';
import buretteImage from '../assets/images/apparatus/burette.jpg';
import conicalFlaskImage from '../assets/images/apparatus/conical_flask.jpg';
import volumetricFlaskImage from '../assets/images/apparatus/volumetric_flask.jpg';
import analyticalBalanceImage from '../assets/images/apparatus/analytical_balance.jpg';
import gasSyringeImage from '../assets/images/apparatus/gas_syringe.jpg';
import bunsenBurnerImage from '../assets/images/apparatus/bunsen_burner.jpg';
import crucibleAndLidImage from '../assets/images/apparatus/crucible_and_lid.jpg';
import measuringCylinderImage from '../assets/images/apparatus/measuring_cylinder.jpg';
import thermometerImage from '../assets/images/apparatus/thermometer.jpg';
import meniscusImage from '../assets/images/apparatus/meniscus.jpg';

export interface ApparatusPhoto {
  src: string;
  author: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

// Freely licensed photos from Wikimedia Commons, resized for the site. Keep the credits with them.
export const apparatusPhotos: Record<string, ApparatusPhoto> = {
  beaker: {
    src: beakerImage,
    author: 'Lilly_M',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Glass_100ml_beaker.jpg',
  },
  test_tubes: {
    src: testTubesImage,
    author: 'Jeffrey M. Vinocur',
    license: 'CC BY 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.5',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Test_tubes.jpg',
  },
  round_bottom_flask: {
    src: roundBottomFlaskImage,
    author: 'Lilly_M',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Round_bottom_flask_500ml.jpg',
  },
  filter_funnel: {
    src: filterFunnelImage,
    author: 'MediaLab TH Köln',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Analysentrichter.png',
  },
  separating_funnel: {
    src: separatingFunnelImage,
    author: 'Lilly_M',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Separating_funnel-round.jpg',
  },
  watch_glass: {
    src: watchGlassImage,
    author: 'Milda 444',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hodinov%C3%A1_skla.jpg',
  },
  evaporating_basin: {
    src: evaporatingBasinImage,
    author: 'Lysippos',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abdampfschalen,_porzellan_innen_glasiert.jpg',
  },
  dropping_pipettes: {
    src: droppingPipettesImage,
    author: 'Beliason',
    license: 'CC BY 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.5',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pasteur_Pipets.jpg',
  },
  liebig_condenser: {
    src: liebigCondenserImage,
    author: 'Nadina Wiórkiewicz',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Liebig_condensers-two_2.jpg',
  },
  stirring_rod: {
    src: stirringRodImage,
    author: 'TarnPraewan',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stirring_rod.jpg',
  },
  wash_bottle: {
    src: washBottleImage,
    author: 'Masur',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lab_wash-bottles_water_EtOH.jpg',
  },
  test_tube_rack: {
    src: testTubeRackImage,
    author: 'Sth.niv',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Stainless_Steel_Test_Tube_Rack.JPG',
  },
  retort_stand: {
    src: retortStandImage,
    author: 'Tsaenmai',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Retort_stand_with_a_clamp.jpg',
  },
  alcohol_burner: {
    src: alcoholBurnerImage,
    author: 'Trisawan',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alcohol_burner2.jpg',
  },
  tripod: {
    src: tripodImage,
    author: 'Zax71',
    license: 'CC0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.en',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bunsen_Burner_Set_Up.jpg',
  },
  crucible_tongs: {
    src: crucibleTongsImage,
    author: 'Lilly_M',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Crucible-tongs-02.jpg',
  },
  volumetric_pipette: {
    src: volumetricPipetteImage,
    author: 'Gmhofmann',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Vollpipetten.jpg',
  },
  burette: {
    src: buretteImage,
    author: 'Gemsgy',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:50_mL_Buret.jpg',
  },
  conical_flask: {
    src: conicalFlaskImage,
    author: 'Lucasbosch',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Simax_erlenmeyer_flask_narrow_neck_100ml.jpg',
  },
  volumetric_flask: {
    src: volumetricFlaskImage,
    author: 'Lucasbosch',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Brand_volumetric_flask_100ml.jpg',
  },
  analytical_balance: {
    src: analyticalBalanceImage,
    author: 'Karelj',
    license: 'Public domain',
    licenseUrl: '',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Balance_Mettler_AJ100.jpg',
  },
  gas_syringe: {
    src: gasSyringeImage,
    author: 'Geni',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gas_syringe.jpg',
  },
  bunsen_burner: {
    src: bunsenBurnerImage,
    author: 'Amfeli',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mechero_Bunsen.jpg',
  },
  crucible_and_lid: {
    src: crucibleAndLidImage,
    author: 'Gmhofmann',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Porzellantiegel.jpg',
  },
  measuring_cylinder: {
    src: measuringCylinderImage,
    author: 'Lilly_M',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Glass_graduated_cylinder-250ml.jpg',
  },
  thermometer: {
    src: thermometerImage,
    author: 'Cjp24',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lab_thermometer,_%E2%80%9310_%C2%B0C_to_110_%C2%B0C.jpg',
  },
};

export const meniscusPhoto: ApparatusPhoto = {
  src: meniscusImage,
  author: 'PRHaney',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Meniscus.jpg',
};
