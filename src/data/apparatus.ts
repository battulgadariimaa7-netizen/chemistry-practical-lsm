import { ApparatusItem } from '../types/chemistry';

export const apparatusList: ApparatusItem[] = [
  {
    id: 'beaker',
    nameEn: 'Beaker',
    nameMn: 'Шилэн аяга (стакан)',
    category: 'glassware',
    purposeEn: 'General-purpose vessel for holding, mixing and gently heating liquids and for dissolving solids. Its scale is only approximate, so volumes used in calculations are measured with other apparatus.',
    purposeMn: 'Шингэн хадгалах, холих, зөөлөн халаах, хатуу бодис уусгахад хэрэглэнэ. Хуваарь нь ойролцоо тул тооцоололд орох эзлэхүүнийг өөр багажаар хэмжинэ.',
    tolerance: '±5% (Nominal approximate scale)',
    capacity: '50 cm³ to 500 cm³',
    correctUseEn: [
      'Pour from the spout down a glass rod so that liquid does not run down the outside.',
      'Stir with a glass rod, never with a thermometer.',
      'Stand on a wire gauze when heating over a Bunsen burner, and fill to no more than two-thirds.',
    ],
    correctUseMn: [
      'Шингэн гадуур нь урсахгүйн тулд хошуугаар нь шилэн саваа дагуулан цутгана.',
      'Термометрээр биш, зөвхөн шилэн саваагаар хутгана.',
      'Бунзены халаагуураар халаахдаа торон дэвсгэр дээр тавьж, гуравны хоёроос илүүгүй дүүргэнэ.',
    ],
    safetyEn: [
      'Check for cracks and chips before heating.',
      'Hot glass looks the same as cold glass. Let it cool, or lift it with tongs or heat-resistant gloves.',
    ],
    safetyMn: [
      'Халаахын өмнө ан цав, эмтрэлтэй эсэхийг шалгана.',
      'Халуун шил хүйтэн шилтэй адилхан харагддаг. Хөргөх эсвэл хавчаар, халуунд тэсвэртэй бээлийгээр барина.',
    ],
    cleaningEn: [
      'Wash with detergent and a soft brush, rinse with tap water and finish with deionised water.',
    ],
    cleaningMn: [
      'Угаалгын бодис, зөөлөн сойзоор угааж, цоргоны усаар зайлаад эцэст нь нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'test_tubes',
    nameEn: 'Test Tube',
    nameMn: 'Хуруу шил (туршилтын хоолой)',
    category: 'glassware',
    purposeEn: 'Small glass tube for small-scale reactions and qualitative tests, such as testing for cations, anions and functional groups.',
    purposeMn: 'Бага хэмжээний урвал, чанарын шинжилгээнд хэрэглэнэ. Жишээ нь катион, анион, функционал бүлгийг тодорхойлох туршилт.',
    tolerance: 'Not a measuring item',
    capacity: '10 cm³ to 20 cm³',
    correctUseEn: [
      'Keep tubes upright in a rack when they are not being held.',
      'Fill to no more than one-third when heating, and hold with a test tube holder.',
      'Heat gently near the surface of the liquid while shaking, not at the very bottom.',
      'Use a wider boiling tube for larger volumes or longer heating.',
    ],
    correctUseMn: [
      'Гартаа бариагүй үед хуруу шилний тавиурт босоо байрлуулна.',
      'Халаахдаа гуравны нэгээс илүүгүй дүүргэж, зориулалтын хавчаараар барина.',
      'Шингэний гадаргуугийн ойролцоо зөөлөн халааж сэгсэрнэ. Яг ёроолд нь халаахгүй.',
      'Их хэмжээний шингэн эсвэл удаан халаахад илүү өргөн буцалгах хуруу шил хэрэглэнэ.',
    ],
    safetyEn: [
      'Never point the open end at yourself or anyone else, because heated liquid can spurt out suddenly.',
      'Do not heat flammable liquids over a naked flame. Use a water bath.',
    ],
    safetyMn: [
      'Халсан шингэн гэнэт цацарч болзошгүй тул амсрыг өөр рүүгээ болон бусад руу хэзээ ч чиглүүлэхгүй.',
      'Шатамхай шингэнийг ил дөлөөр халаахгүй, усан халаагуур хэрэглэнэ.',
    ],
    cleaningEn: [
      'Clean straight after use with a test tube brush and detergent, then rinse with deionised water and dry upside down.',
    ],
    cleaningMn: [
      'Хэрэглэсний дараа шууд сойз, угаалгын бодисоор угааж, нэрмэл усаар зайлаад доош харуулж хатаана.',
    ],
  },
  {
    id: 'round_bottom_flask',
    nameEn: 'Round-Bottom Flask',
    nameMn: 'Бөөрөнхий ёроолтой колбо',
    category: 'glassware',
    purposeEn: 'Spherical flask that spreads heat evenly. It is the main reaction vessel for heating under reflux and for distillation, as in the preparation of an ester.',
    purposeMn: 'Дулааныг жигд тараадаг бөмбөлөг хэлбэртэй колбо. Буцаан хөргөлттэй халаах, нэрэх үед гол урвалын сав болно. Жишээ нь нийлмэл эфир гарган авах.',
    tolerance: 'Not a measuring item',
    capacity: '50 cm³ to 500 cm³',
    correctUseEn: [
      'Fill to no more than half, and add anti-bumping granules before heating.',
      'Clamp the flask at the neck. It cannot stand on its own, so rest it on a cork ring when it is not clamped.',
      'Heat with a water bath or heating mantle when the contents are flammable.',
    ],
    correctUseMn: [
      'Хагасаас илүүгүй дүүргэж, халаахын өмнө жигд буцалгах мөхлөг нэмнэ.',
      'Колбыг хүзүүгээр нь хавчиж бэхэлнэ. Өөрөө зогсож чаддаггүй тул хавчаагүй үед үйсэн цагираг дээр тавина.',
      'Агуулга нь шатамхай бол усан халаагуур эсвэл цахилгаан халаагуураар халаана.',
    ],
    safetyEn: [
      'Never heat a closed system. Pressure can build up and shatter the flask.',
      'Check for star cracks before use, especially around the base.',
    ],
    safetyMn: [
      'Битүү системийг хэзээ ч халаахгүй. Даралт ихсэж колбо хагарч болно.',
      'Хэрэглэхийн өмнө ялангуяа ёроолын хэсэгт од хэлбэрийн ан цав байгаа эсэхийг шалгана.',
    ],
    cleaningEn: [
      'Rinse out organic residues with a little suitable solvent, wash with detergent, then rinse with deionised water.',
    ],
    cleaningMn: [
      'Органик үлдэгдлийг тохирох уусгагч бага зэргээр зайлж, угаалгын бодисоор угаагаад нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'filter_funnel',
    nameEn: 'Filter Funnel',
    nameMn: 'Шүүлтүүрийн юүлүүр',
    category: 'glassware',
    purposeEn: 'Holds filter paper to separate a solid residue from a liquid filtrate. It also guides liquids into narrow openings such as a burette.',
    purposeMn: 'Шүүлтүүрийн цаасыг барьж, хатуу үлдэгдлийг шүүгдсэн шингэнээс ялгана. Мөн бюретка зэрэг нарийн амсарт шингэн цутгахад хэрэглэнэ.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Fold the filter paper, fit it in the funnel and wet it with a little solvent.',
      'Keep the liquid level below the top edge of the paper.',
      'Remove the funnel from a burette before taking a reading, so that no drop falls in afterwards.',
    ],
    correctUseMn: [
      'Шүүлтүүрийн цаасыг нугалж юүлүүрт суулгаад бага зэрэг уусгагчаар норгоно.',
      'Шингэний түвшинг цаасны дээд ирмэгээс доогуур барина.',
      'Бюреткийн заалт авахаасаа өмнө юүлүүрийг авна. Ингэснээр дараа нь дусал орохгүй.',
    ],
    safetyEn: [
      'Support the funnel in a ring or on a flask so that it cannot tip over.',
    ],
    safetyMn: [
      'Юүлүүрийг цагираг эсвэл колбо дээр байрлуулж, хөмрөхөөс сэргийлнэ.',
    ],
    cleaningEn: [
      'Discard the used paper as directed, wash the funnel with detergent and rinse with deionised water.',
    ],
    cleaningMn: [
      'Хэрэглэсэн цаасыг заавраар хаяж, юүлүүрийг угаалгын бодисоор угаагаад нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'separating_funnel',
    nameEn: 'Separating Funnel',
    nameMn: 'Ялгах юүлүүр',
    category: 'separation',
    purposeEn: 'Separates two liquids that do not mix, using the tap to run off the lower layer. It is used to wash an impure ester with sodium carbonate solution.',
    purposeMn: 'Холилддоггүй хоёр шингэнийг ялгаж, доод давхаргыг цоргоор гаргана. Цэвэр бус нийлмэл эфирийг натрийн карбонатын уусмалаар угаахад хэрэглэнэ.',
    tolerance: 'Not a measuring item',
    capacity: '100 cm³ to 250 cm³',
    correctUseEn: [
      'Close the tap before filling, and support the funnel in a ring.',
      'Stopper, invert and shake gently, opening the tap often to release pressure.',
      'Remove the stopper before draining, then run off the lower layer slowly.',
    ],
    correctUseMn: [
      'Дүүргэхийн өмнө цоргыг хааж, юүлүүрийг цагираг дээр байрлуулна.',
      'Бөглөж, хөмрүүлээд зөөлөн сэгсэрч, даралтыг гаргахын тулд цоргыг байнга нээнэ.',
      'Гаргахын өмнө бөглөөг авч, доод давхаргыг аажмаар урсгана.',
    ],
    safetyEn: [
      'Point the stem away from people when releasing pressure, because carbonate washes give off carbon dioxide.',
    ],
    safetyMn: [
      'Даралт гаргахдаа хоолойг хүнээс зайлуулж чиглүүлнэ. Карбонатаар угаахад нүүрсхүчлийн хий ялгардаг.',
    ],
    cleaningEn: [
      'Wash and rinse, then store with the stopper out and the tap loosened so that they do not seize.',
    ],
    cleaningMn: [
      'Угааж зайлаад, бөглөө цорго нь гацахгүйн тулд бөглөөг авч, цоргыг сулруулж хадгална.',
    ],
  },
  {
    id: 'watch_glass',
    nameEn: 'Watch Glass',
    nameMn: 'Цагны шил',
    category: 'glassware',
    purposeEn: 'Shallow curved glass disc for covering a beaker, weighing small amounts of solid and letting small samples evaporate or crystallise.',
    purposeMn: 'Гүдгэр нимгэн шилэн таваг. Стаканыг таглах, бага хэмжээний хатуу бодис жинлэх, бага дээжийг ууршуулах, талстжуулахад хэрэглэнэ.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Rest it on a beaker to keep dust out and reduce spitting.',
      'Tare the balance with the clean watch glass on the pan before adding the solid.',
    ],
    correctUseMn: [
      'Тоос орох, шингэн цацрахаас сэргийлж стаканы дээр тавина.',
      'Хатуу бодис нэмэхийн өмнө цэвэр цагны шилтэй нь жинг тэглэнэ.',
    ],
    safetyEn: [
      'The glass is thin, so never heat it directly in a flame.',
    ],
    safetyMn: [
      'Шил нь нимгэн тул дөлөнд шууд халаахгүй.',
    ],
    cleaningEn: [
      'Wash with detergent, rinse with deionised water and dry before weighing.',
    ],
    cleaningMn: [
      'Угаалгын бодисоор угааж, нэрмэл усаар зайлаад жинлэхийн өмнө хатаана.',
    ],
  },
  {
    id: 'evaporating_basin',
    nameEn: 'Evaporating Basin',
    nameMn: 'Ууршуулах аяга',
    category: 'heating',
    purposeEn: 'Shallow porcelain dish for evaporating a solution to concentrate it and form crystals of a salt.',
    purposeMn: 'Уусмалыг ууршуулан өтгөрүүлж, давсны талст гарган авахад хэрэглэдэг гүехэн шаазан аяга.',
    tolerance: 'Not a measuring item',
    capacity: '50 cm³ to 150 cm³',
    correctUseEn: [
      'Heat over a water bath, or on a wire gauze with a gentle flame.',
      'Stop heating when crystals first appear at the edge, and let the rest crystallise as it cools.',
    ],
    correctUseMn: [
      'Усан халаагуур дээр, эсвэл торон дэвсгэр дээр бага дөлөөр халаана.',
      'Ирмэгт нь талст анх гармагц халаахаа зогсоож, үлдсэнийг нь хөргөж талстжуулна.',
    ],
    safetyEn: [
      'Solutions can spit near dryness, so wear eye protection and do not lean over the dish.',
      'Porcelain stays hot for a long time. Lift it with tongs and place it on a heat-resistant mat.',
    ],
    safetyMn: [
      'Хатах дөхөхөд уусмал цацарч болзошгүй тул хамгаалалтын нүдний шил зүүж, дээгүүр нь тонгойхгүй.',
      'Шаазан удаан халуун байдаг. Хавчаараар барьж, халуунд тэсвэртэй дэвсгэр дээр тавина.',
    ],
    cleaningEn: [
      'Soak off the residue when cool, wash with detergent and rinse with deionised water.',
    ],
    cleaningMn: [
      'Хөрсний дараа үлдэгдлийг норгож авч, угаалгын бодисоор угаагаад нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'dropping_pipettes',
    nameEn: 'Dropping Pipette',
    nameMn: 'Дуслын пипетк',
    category: 'glassware',
    purposeEn: 'Adds small amounts of liquid drop by drop, such as an indicator or a test reagent. It does not measure accurate volumes.',
    purposeMn: 'Индикатор, шинжилгээний урвалж зэрэг шингэнийг дуслаар нэмнэ. Нарийн эзлэхүүн хэмжихгүй.',
    tolerance: 'Approximate (about 20 drops per cm³)',
    correctUseEn: [
      'Hold it upright just above the mouth of the vessel, without touching the inside.',
      'Use a separate pipette for each reagent so that bottles do not become contaminated.',
    ],
    correctUseMn: [
      'Савны амсраас дээш босоо барьж, дотор талд нь хүргэхгүй.',
      'Урвалж бохирдохоос сэргийлж, урвалж тус бүрт тусдаа пипетк хэрэглэнэ.',
    ],
    safetyEn: [
      'Do not lay it on its side while it holds liquid, because the liquid can run into the bulb or onto the bench.',
    ],
    safetyMn: [
      'Шингэнтэй үед хажуу тийш нь хэвтүүлэхгүй. Шингэн резин хэсэг рүү эсвэл ширээн дээр урсаж болзошгүй.',
    ],
    cleaningEn: [
      'Rinse several times with deionised water straight after use, or discard single-use pipettes as directed.',
    ],
    cleaningMn: [
      'Хэрэглэсний дараа шууд нэрмэл усаар хэд хэдэн удаа зайлах, нэг удаагийнхыг заавраар хаяна.',
    ],
  },
  {
    id: 'liebig_condenser',
    nameEn: 'Liebig Condenser',
    nameMn: 'Либигийн хөргөгч',
    category: 'separation',
    purposeEn: 'Cools vapour back into a liquid using cold water in an outer jacket. It is used for heating under reflux and for distillation.',
    purposeMn: 'Гадна бүрхүүлийн хүйтэн усаар уурыг хөргөж шингэн болгоно. Буцаан хөргөлттэй халаах, нэрэхэд хэрэглэнэ.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Connect the water so that it enters at the lower end and leaves at the upper end.',
      'Start the water flow before heating, and keep it running until the apparatus has cooled.',
      'Clamp the condenser firmly and secure the hoses.',
    ],
    correctUseMn: [
      'Усыг доод төгсгөлөөр оруулж, дээд төгсгөлөөр гаргахаар холбоно.',
      'Халаахаас өмнө усаа нээж, төхөөрөмж хөртөл урсгасаар байна.',
      'Хөргөгчийг бат бөх хавчиж, хоолойнуудыг бэхэлнэ.',
    ],
    safetyEn: [
      'The apparatus must stay open to the air at one point, because a sealed system can burst when heated.',
    ],
    safetyMn: [
      'Битүү систем халаахад дэлбэрч болзошгүй тул төхөөрөмж нэг цэгт агаарт нээлттэй байх ёстой.',
    ],
    cleaningEn: [
      'Drain the jacket, rinse the inner tube with a suitable solvent and then with deionised water.',
    ],
    cleaningMn: [
      'Бүрхүүлийн усыг гаргаж, дотор хоолойг тохирох уусгагчаар, дараа нь нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'stirring_rod',
    nameEn: 'Glass Stirring Rod',
    nameMn: 'Шилэн саваа',
    category: 'glassware',
    purposeEn: 'Solid glass rod for stirring solutions, guiding liquid while pouring and transferring a drop of solution to indicator paper.',
    purposeMn: 'Уусмал хутгах, цутгахдаа шингэнийг чиглүүлэх, индикатор цаасанд дусал хүргэхэд хэрэглэдэг бүтэн шилэн саваа.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Stir gently without striking the sides or base of the vessel.',
      'Rinse the rod before moving it to a different solution, and rinse it back into the vessel in quantitative work.',
    ],
    correctUseMn: [
      'Савны хана, ёроолд цохилгүй зөөлөн хутгана.',
      'Өөр уусмалд хийхийн өмнө саваагаа зайлна. Тоон ажилд зайлсан усаа буцааж саванд нь хийнэ.',
    ],
    safetyEn: [
      'Check that both ends are smooth, and do not use the rod to force or lever anything.',
    ],
    safetyMn: [
      'Хоёр үзүүр нь гөлгөр эсэхийг шалгаж, юм шахах, хөшүүрэг болгоход хэрэглэхгүй.',
    ],
    cleaningEn: [
      'Wash with detergent and rinse with deionised water.',
    ],
    cleaningMn: [
      'Угаалгын бодисоор угааж, нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'wash_bottle',
    nameEn: 'Wash Bottle',
    nameMn: 'Угаагч сав',
    category: 'support',
    purposeEn: 'Squeeze bottle that gives a fine jet of deionised water, for rinsing flask walls near a titration end-point and making solutions up to the mark.',
    purposeMn: 'Шахахад нэрмэл усыг нарийн урсгалаар гаргадаг сав. Титрлэлтийн төгсгөлийн цэгийн ойролцоо колбын ханыг зайлах, уусмалыг зураас хүртэл дүүргэхэд хэрэглэнэ.',
    tolerance: 'Not a measuring item',
    capacity: '250 cm³ to 500 cm³',
    correctUseEn: [
      'Label the bottle with its contents, and refill it only with that liquid.',
      'Direct the jet down the inside wall of the flask, and add water drop by drop near the mark.',
    ],
    correctUseMn: [
      'Савыг агуулгаар нь шошголж, зөвхөн тэр шингэнээр дүүргэнэ.',
      'Урсгалыг колбын дотор ханаар чиглүүлж, зураас дөхөхөд дуслаар нэмнэ.',
    ],
    safetyEn: [
      'Do not let the nozzle touch solutions, because this contaminates the water in the bottle.',
    ],
    safetyMn: [
      'Хошууг уусмалд хүргэхгүй. Эс бөгөөс савны ус бохирдоно.',
    ],
    cleaningEn: [
      'Rinse with deionised water before refilling, and replace the bottle if the water looks cloudy.',
    ],
    cleaningMn: [
      'Дахин дүүргэхийн өмнө нэрмэл усаар зайлж, ус булингартай бол савыг солино.',
    ],
  },
  {
    id: 'test_tube_rack',
    nameEn: 'Test Tube Rack',
    nameMn: 'Хуруу шилний тавиур',
    category: 'support',
    purposeEn: 'Holds test tubes upright and in order, so that several tests can be compared side by side.',
    purposeMn: 'Хуруу шилнүүдийг босоо, дэс дараатай барьж, хэд хэдэн туршилтыг зэрэгцүүлэн харьцуулах боломж олгоно.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Label the tubes and keep them in the same order as your results table.',
      'Let heated tubes cool before standing them in a plastic rack.',
    ],
    correctUseMn: [
      'Хуруу шилнүүдийг шошголж, үр дүнгийн хүснэгтийн дарааллаар байрлуулна.',
      'Халсан хуруу шилийг хөргөсний дараа хуванцар тавиурт тавина.',
    ],
    safetyEn: [
      'Keep the rack away from the edge of the bench, and carry it with both hands.',
    ],
    safetyMn: [
      'Тавиурыг ширээний ирмэгээс холдуулж, хоёр гараар барьж зөөнө.',
    ],
    cleaningEn: [
      'Wipe up any spills straight away and dry the rack.',
    ],
    cleaningMn: [
      'Асгарсан шингэнийг шууд арчиж, тавиурыг хатаана.',
    ],
  },
  {
    id: 'retort_stand',
    nameEn: 'Retort Stand and Clamp',
    nameMn: 'Штатив ба хавчаар',
    category: 'support',
    purposeEn: 'Holds apparatus such as burettes, condensers and flasks firmly in position during an experiment.',
    purposeMn: 'Бюретка, хөргөгч, колбо зэрэг багажийг туршилтын турш бат бөх байрлалд барина.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Position the heavy base directly under the apparatus so that the stand cannot tip.',
      'Tighten the clamp just enough to hold the glass, and check that a burette hangs vertically.',
    ],
    correctUseMn: [
      'Хөмрөхөөс сэргийлж хүнд суурийг багажийн яг доор байрлуулна.',
      'Шилийг барихад хангалттай хэмжээнд хавчиж, бюретка босоо байгаа эсэхийг шалгана.',
    ],
    safetyEn: [
      'Over-tightening can crack glass, so use clamps with soft linings.',
    ],
    safetyMn: [
      'Хэт чангалбал шил хагарч болзошгүй тул зөөлөн доторлогоотой хавчаар хэрэглэнэ.',
    ],
    cleaningEn: [
      'Wipe clean and dry, because spilled acids corrode the metal.',
    ],
    cleaningMn: [
      'Асгарсан хүчил төмрийг идэмхийлдэг тул арчиж хатаана.',
    ],
  },
  {
    id: 'alcohol_burner',
    nameEn: 'Alcohol Burner (Spirit Lamp)',
    nameMn: 'Спиртэн дэн',
    category: 'heating',
    purposeEn: 'Small burner fuelled by ethanol or another alcohol, for gentle heating of small amounts where there is no gas supply. It is also used to measure the enthalpy of combustion of alcohols.',
    purposeMn: 'Этанол эсвэл бусад спиртээр ажилладаг жижиг халаагуур. Хийн хангамжгүй үед бага хэмжээний бодисыг зөөлөн халаахад хэрэглэнэ. Спиртийн шаталтын энтальпи хэмжихэд ч ашиглана.',
    tolerance: 'Not a measuring item',
    capacity: '100 cm³ to 250 cm³',
    correctUseEn: [
      'Keep the fuel level between one-quarter and two-thirds of the burner.',
      'Light it with a match or long lighter, never from another burner.',
      'Heat with the outer part of the flame, which is the hottest.',
      'Put the flame out by placing the cap over it. Never blow it out.',
    ],
    correctUseMn: [
      'Спиртний түвшинг дэнгийн дөрөвний нэгээс гуравны хоёрын хооронд байлгана.',
      'Шүдэнз эсвэл урт асаагуураар асаана. Өөр дэнгээс хэзээ ч асаахгүй.',
      'Дөлийн хамгийн халуун хэсэг болох гадна бүсээр халаана.',
      'Таглаагаар нь дарж унтраана. Хэзээ ч үлээж унтраахгүй.',
    ],
    safetyEn: [
      'Never refill a lit or hot burner. Let it cool completely, fill it away from any flame and wipe up spills.',
      'An alcohol flame can be almost invisible in bright light, so do not move or tilt a lit burner.',
      'If burning alcohol spills, smother it with a damp cloth or fire blanket and tell your teacher.',
    ],
    safetyMn: [
      'Асаалттай эсвэл халуун дэнд спирт хэзээ ч нэмэхгүй. Бүрэн хөргөж, галаас хол дүүргээд асгарсныг арчина.',
      'Спиртний дөл гэрэлтэй өрөөнд бараг харагдахгүй байж болох тул асаалттай дэнг хөдөлгөж, хазайлгахгүй.',
      'Шатаж буй спирт асгарвал чийгтэй даавуу эсвэл галын хөнжлөөр дарж, багшид мэдэгдэнэ.',
    ],
    cleaningEn: [
      'Store capped and away from flames so that the fuel does not evaporate. Trim or replace a charred wick.',
    ],
    cleaningMn: [
      'Спирт ууршихаас сэргийлж таглаатай, галаас хол хадгална. Хар болсон голыг тайрч, шаардлагатай бол солино.',
    ],
  },
  {
    id: 'tripod',
    nameEn: 'Tripod and Wire Gauze',
    nameMn: 'Гурван хөлт суурь ба торон дэвсгэр',
    category: 'heating',
    purposeEn: 'Supports a beaker or basin above a Bunsen burner. The gauze spreads the heat across the base of the vessel.',
    purposeMn: 'Стакан, аяга зэргийг Бунзены халаагуурын дээр барина. Торон дэвсгэр нь дулааныг савны ёроолд жигд тараана.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Set it up on a heat-resistant mat, away from the edge of the bench.',
      'Place the vessel in the centre of the gauze before lighting the burner.',
    ],
    correctUseMn: [
      'Халуунд тэсвэртэй дэвсгэр дээр, ширээний ирмэгээс хол байрлуулна.',
      'Халаагуур асаахаас өмнө савыг торон дэвсгэрийн голд тавина.',
    ],
    safetyEn: [
      'The tripod and gauze stay hot long after the flame is out, so let them cool before moving them.',
      'Old gauzes with a white centre may contain asbestos. Use only gauzes your teacher has approved, and report any that are damaged or crumbling.',
    ],
    safetyMn: [
      'Дөл унтарсны дараа ч суурь, торон дэвсгэр удаан халуун байдаг тул хөргөөд зөөнө.',
      'Голдоо цагаан бүрхүүлтэй хуучин торон дэвсгэр асбест агуулж болзошгүй. Зөвхөн багшийн зөвшөөрсөн дэвсгэрийг хэрэглэж, гэмтсэн эсвэл нунтагласан байвал мэдэгдэнэ.',
    ],
    cleaningEn: [
      'Brush off residue when cool, and replace any gauze that is torn or badly rusted.',
    ],
    cleaningMn: [
      'Хөрсний дараа үлдэгдлийг цэвэрлэж, урагдсан эсвэл их зэвэрсэн торон дэвсгэрийг солино.',
    ],
  },
  {
    id: 'crucible_tongs',
    nameEn: 'Crucible Tongs',
    nameMn: 'Тигелийн хавчаар',
    category: 'heating',
    purposeEn: 'Long metal tongs for lifting hot crucibles, lids and evaporating basins safely.',
    purposeMn: 'Халуун тигель, таг, ууршуулах аягыг аюулгүй өргөхөд зориулсан урт төмөр хавчаар.',
    tolerance: 'Not a measuring item',
    correctUseEn: [
      'Grip the crucible firmly with the curved part of the tongs, close to its rim.',
      'Place hot items on a heat-resistant mat or pipeclay triangle, and cool them in a desiccator before weighing.',
    ],
    correctUseMn: [
      'Хавчаарын муруй хэсгээр тигелийг амсрын ойролцоо сайн чанга барина.',
      'Халуун савыг халуунд тэсвэртэй дэвсгэр эсвэл шаазан гурвалжин дээр тавьж, жинлэхийн өмнө эксикаторт хөргөнө.',
    ],
    safetyEn: [
      'The tips become hot too, so do not touch them or rest them on the bench or on paper.',
    ],
    safetyMn: [
      'Үзүүр нь бас халдаг тул гараар хүрэхгүй, ширээ болон цаасан дээр тавихгүй.',
    ],
    cleaningEn: [
      'Wipe clean when cool and store dry to prevent rust.',
    ],
    cleaningMn: [
      'Хөрсний дараа арчиж, зэврэхээс сэргийлж хуурай хадгална.',
    ],
  },
  {
    id: 'volumetric_pipette',
    nameEn: 'Volumetric Pipette',
    nameMn: 'Эзлэхүүний пипетк',
    category: 'measuring',
    purposeEn: 'Accurate transfer of a fixed, calibrated volume of solution (typically 25.0 cm³ or 10.0 cm³) for quantitative titration analysis.',
    purposeMn: 'Титрлэлтийн үед тогтмол нарийн эзлэхүүнтэй (ихэвчлэн 25.0 см³ эсвэл 10.0 см³) уусмалыг нарийвчлалтай авч шилжүүлэхэд ашиглана.',
    tolerance: '±0.06 cm³ (Class B) / ±0.03 cm³ (Class A)',
    capacity: '25.0 cm³',
    meniscusNotes: {
      en: 'The bottom of the curved liquid meniscus must sit tangent to the etched calibration ring at eye level.',
      mn: 'Нүдний харааны түвшинд шингэний муруйлтын доод цэг (мениск) цагираг зураастай яг нийцэх ёстой.',
    },
    correctUseEn: [
      'Condition pipette by pre-rinsing twice with small volumes of the test solution to be transferred.',
      'Always use a rubber pipette filler bulb; never ingest or mouth-suck solution.',
      'Draw liquid ~2 cm above graduation mark, then depress drain valve slowly until meniscus base touches the mark.',
      'Allow liquid to drain by gravity into conical flask. Touch tip to flask wall for 3 seconds; do not blow out remaining droplet in nozzle.',
    ],
    correctUseMn: [
      'Пипеткийг ашиглахын өмнө шилжүүлэх уусмалаараа 2 удаа зайлж бэлтгэнэ.',
      'Үргэлж зориулалтын резин соруулагч (pipette filler) ашиглана. Амаар сорохыг хатуу хориглоно.',
      'Шингэнийг зурааснаас 2 см дээш соруулаад, аажмаар суллан менискийн ёроолыг зураастай тааруулна.',
      'Шингэнийг эрчээрээ урсаж дуусахыг хүлээж, үзүүрийг колбын хананд 3 секунд хүргэнэ. Үзүүрт үлдсэн дуслыг үлээж болохгүй.',
    ],
    safetyEn: [
      'Do not force pipette filler tightly onto glass neck to prevent snapping glass tubing and lacerations.',
      'Inspect stem carefully for chips or hair-line fractures before applying vacuum suction.',
    ],
    safetyMn: [
      'Соруулагчийг шилний үзүүрт хүчээр чихэж болохгүй, шил хагарч гар зүсэх аюултай.',
      'Ашиглахын өмнө шилний их биед цууралт, эмтрэл байгаа эсэхийг сайтар шалгана.',
    ],
    cleaningEn: [
      'Rinse immediately after titration with deionized water.',
      'Store vertically in designated dust-free pipette rack.',
    ],
    cleaningMn: [
      'Туршилтын дараа нэрмэл усаар сайтар зайлж цэвэрлэнэ.',
      'Зориулалтын босоо тавиур дээр тоос шорооноос хамгаалж хадгална.',
    ],
  },
  {
    id: 'burette',
    nameEn: 'Calibrated Burette',
    nameMn: 'Бюретка',
    category: 'measuring',
    purposeEn: 'Precise dispensing and measurement of variable titrant volumes to 2 decimal places (±0.05 cm³), indispensable for Cambridge Paper 3 practicals.',
    purposeMn: 'Титрлэлтийн явцад дусааж буй уусмалын эзлэхүүнийг 2 оронгийн нарийвчлалтайгаар (±0.05 см³) хэмжихэд ашиглана.',
    tolerance: '±0.05 cm³ (Readings recorded to nearest 0.05 cm³)',
    capacity: '50.00 cm³',
    meniscusNotes: {
      en: 'Readings are recorded to 2 decimal places with the second digit as 0 or 5 (e.g. 24.35 cm³). Maintain perpendicular line of sight to avoid parallax.',
      mn: 'Заалтыг таслалаас хойш 2 оронгоор (0 эсвэл 5, ж нь: 24.35 см³) тэмдэглэнэ. Параллакс алдаанаас сэргийлж нүдтэйгээ нэг түвшинд харна.',
    },
    correctUseEn: [
      'Rinse with deionized water, then condition twice with small portions of titrant reagent.',
      'Fill through clean funnel; remove funnel before taking initial zero reading.',
      'Ensure the tip below the PTFE stopcock is completely filled with solution and free of trapped air bubbles.',
      'Swirl receiving conical flask continuously with dominant hand while controlling stopcock with other hand.',
    ],
    correctUseMn: [
      'Эхлээд нэрмэл усаар, дараа нь хэрэглэх уусмалаараа 2 удаа зайлна.',
      'Юүлүүрээр дүүргээд, эхний заалт авахаас өмнө юүлүүрийг заавал авна.',
      'Крантны доод үзүүрт агаарын бөмбөлөг үлдээгүй, уусмалаар бүрэн дүүрсэн эсэхийг шалгана.',
      'Нэг гараараа краныг тохируулж, нөгөө гараараа конусан колбыг тасралтгүй эргүүлэн хутгана.',
    ],
    safetyEn: [
      'Clamp burette vertically without excessive mechanical pressure on the glass barrel.',
      'Fill at eye level or lower the burette stand so that liquid does not pour above head height.',
    ],
    safetyMn: [
      'Бюреткийг штативт хавчихдаа шилийг хэт чанга боож хагалахаас сэргийлнэ.',
      'Уусмал хийхдээ нүдний түвшнээс доош байрлуулж хийнэ (дээрээс асгарахаас сэргийлнэ).',
    ],
    cleaningEn: [
      'Drain remaining titrant into waste container. Flush thoroughly with deionized water and clamp inverted with stopcock open.',
    ],
    cleaningMn: [
      'Үлдсэн уусмалыг асгаж, нэрмэл усаар угаагаад краныг нь онгойлгож урвуу харуулан хатаана.',
    ],
  },
  {
    id: 'conical_flask',
    nameEn: 'Conical Flask (Erlenmeyer)',
    nameMn: 'Конусан колбо (Эрленмейер)',
    category: 'glassware',
    purposeEn: 'Ideal vessel for volumetric titrations and swirling liquids without spilling or splashing reactant droplets out of the mouth.',
    purposeMn: 'Титрлэлтийн явцад уусмалыг асгаруулахгүйгээр тойрог хөдөлгөөнөөр жигд хутгах, урвал явуулахад ашиглана.',
    tolerance: '±5% (Nominal approximate scale)',
    capacity: '250 cm³',
    correctUseEn: [
      'Place over a white tile or clean white paper underneath to observe sharp indicator end-point color changes.',
      'Swirl vigorously during titrant addition. Rinse interior walls with wash bottle near the endpoint.',
    ],
    correctUseMn: [
      'Индикаторын өнгө хувирлыг тод харахын тулд доор нь цагаан хавтан эсвэл цаас тавина.',
      'Титрлэх үедээ тасралтгүй жигд эргүүлнэ. Төгсгөлийн цэг дөхөхөд хананд наалдсан дуслыг угаагч савнаас нэрмэл усаар угаана.',
    ],
    safetyEn: [
      'Check neck and lip for jagged chips before handling. Avoid rapid thermal shocks if heated.',
    ],
    safetyMn: [
      'Хэрэглэхийн өмнө амсар нь эмтэрсэн эсэхийг шалгана.',
    ],
    cleaningEn: [
      'Wash with laboratory detergent, rinse twice with tap water and final rinse with deionized water.',
    ],
    cleaningMn: [
      'Угаалгын бодисоор угааж, цоргоны усаар 2 удаа, эцэст нь нэрмэл усаар зайлна.',
    ],
  },
  {
    id: 'volumetric_flask',
    nameEn: 'Volumetric Flask with Stopper',
    nameMn: 'Хэмжээст колбо (Таглаатай)',
    category: 'measuring',
    purposeEn: 'Preparation of primary standard chemical solutions with precise, defined molar concentrations (e.g. 250.0 cm³ standard Na2CO3).',
    purposeMn: 'Тодорхой нарийн молийн концентрацитай стандарт уусмал бэлтгэхэд (ж нь: 250.0 см³ Na2CO3) ашиглана.',
    tolerance: '±0.15 cm³ at 20°C',
    capacity: '250.0 cm³',
    meniscusNotes: {
      en: 'Fill dropwise with a dropper pipette until bottom of meniscus rests exactly on the etched line.',
      mn: 'Зураас дөхөж ирэхэд дусаагуураар болгоомжтой дусааж, менискийн доод хэсгийг зураастай тааруулна.',
    },
    correctUseEn: [
      'Dissolve solid solute in a beaker with 80 cm³ of distilled water first, stir thoroughly.',
      'Transfer solution quantitatively using a funnel, rinsing beaker and stirring rod repeatedly.',
      'Fill with distilled water to 1 cm below the graduation mark, then add last drops with Pasteur pipette.',
      'Invert 10–12 times with stopper firmly pressed to achieve absolute solution homogeneity.',
    ],
    correctUseMn: [
      'Уусах хатуу бодисоо эхлээд стаканд 80 см³ нэрмэл усаар бүрэн уусгана.',
      'Юүлүүрээр хэмжээст колбо руу шилжүүлж, стакан болон шилэн савхаа нэрмэл усаар сайтар зайлж юүлнэ.',
      'Зурааснаас 1 см дутуу хүртэл ус хийгээд, сүүлийн хэсгийг дусаагуураар тааруулна.',
      'Таглааг нягт таглаж, уусмалыг жигд холихын тулд 10–12 удаа хөмөрч сэгсэрнэ.',
    ],
    safetyEn: [
      'Never heat volumetric flasks directly over flames or ovens; thermal expansion permanently destroys volumetric calibration.',
    ],
    safetyMn: [
      'Хэмжээст колбыг гал дээр хэзээ ч бүү халаа! Халууны тэлэлтээс болж эзлэхүүний нарийвчлал нь бүрмөсөн алдагддаг.',
    ],
    cleaningEn: ['Rinse repeatedly with distilled water. Never scrub vigorously with abrasive brushes.'],
    cleaningMn: ['Нэрмэл усаар сайтар зайлж хатаана. Дотор ханыг ширүүн сойзоор үрж болохгүй.'],
  },
  {
    id: 'analytical_balance',
    nameEn: 'Digital Analytical Balance',
    nameMn: 'Дижитал аналитик жин',
    category: 'measuring',
    purposeEn: 'Accurate determination of solid reagents, precipitates, and crucibles to 2 or 3 decimal places (0.01 g or 0.001 g).',
    purposeMn: 'Хатуу бодис, тунадас, тиглийг 2 буюу 3 оронгийн нарийвчлалтай (0.01 г эсвэл 0.001 г) хэмжихэд ашиглана.',
    tolerance: '±0.01 g (Standard) / ±0.001 g (High precision)',
    correctUseEn: [
      'Ensure the leveling bubble is centered before zeroing.',
      'Always tare the weighing boat or watch glass prior to adding solid.',
      'Never weigh hot objects; thermal convection currents cause significant false negative mass errors.',
      'Brush away spilled chemical granules immediately with a soft camel-hair brush.',
    ],
    correctUseMn: [
      'Ажиллуулахын өмнө усны түвшин (бөмбөлөг) төвдөө байгааг шалгана.',
      'Бодис жинлэх цаас эсвэл шилийг тавиад заавал Tare (Тэг) товчийг дарна.',
      'Халуун зүйлийг хэзээ ч бүү жинлэ (агаарын конвекц нь массыг буруу заахад хүргэдэг).',
      'Асгарсан нунтаг бодисыг зөөлөн багсаар тэр дор нь цэвэрлэнэ.',
    ],
    safetyEn: ['Do not exceed maximum weight load (typically 200 g). Avoid spilling liquids into housing.'],
    safetyMn: ['Даацын дээд хэмжээнээс (ихэвчлэн 200 г) хэтрүүлж болохгүй. Шингэн асгарахаас сэргийлнэ.'],
    cleaningEn: ['Keep draft shields clean. Disconnect before damp cloth cleaning of external case.'],
    cleaningMn: ['Хамгаалалтын шилийг цэвэр байлгана. Бага зэрэг чийгтэй алчуураар арчина.'],
  },
  {
    id: 'gas_syringe',
    nameEn: 'Gas Syringe with Luer Lock',
    nameMn: 'Хийн шприц',
    category: 'measuring',
    purposeEn: 'Measuring volume of gas evolved over time in reaction kinetics and determination of molar volume (Cambridge 9701 Paper 3 & 5).',
    purposeMn: 'Урвалын явцад ялгарч буй хийн эзлэхүүнийг хугацаанаас хамааруулан хэмжих, хийн молийн эзлэхүүнийг тодорхойлоход ашиглана.',
    tolerance: '±1.0 cm³',
    capacity: '100 cm³',
    correctUseEn: [
      'Check that the glass plunger slides effortlessly without friction before connecting delivery tubing.',
      'Clamp barrel lightly and horizontally with rubber-sleeved bosshead.',
      'Record initial gas volume (should be 0.0 cm³). Start stopwatch concurrently with addition of solid catalyst/metal.',
      'Tap barrel gently before taking timed readings to eliminate static friction.',
    ],
    correctUseMn: [
      'Шприцийн бүлүүр ямар нэг саадгүй чөлөөтэй гулсаж байгаа эсэхийг холбохоос өмнө шалгана.',
      'Хэвтээ байрлалаар резинэн зөөлөвчтэй штативаар зөөлөн хавчина.',
      'Эхний эзлэхүүнийг (0.0 см³) бүртгэж, урвал эхлэх мөчид секундомероо хамт дарна.',
      'Үрэлтийн нөлөөг арилгахын тулд хэмжилт авах бүртээ шприцийг хуруугаараа зөөлөн товшино.',
    ],
    safetyEn: ['Never allow plunger to blow out of barrel at high reaction rates. Disconnect if rate surges.'],
    safetyMn: ['Урвал хэт ширүүсвэл бүлүүр цохигдож унахаас сэргийлж хоолойг салгах арга хэмжээ авна.'],
    cleaningEn: ['Rinse barrel and plunger with distilled water; dry thoroughly before reassembly.'],
    cleaningMn: ['Бүлүүр болон хоолойг нэрмэл усаар угааж, бүрэн хатаасны дараа угсарна.'],
  },
  {
    id: 'bunsen_burner',
    nameEn: 'Bunsen Burner & Heat Mat',
    nameMn: 'Бунзены халаагуур ба халуунд тэсвэртэй суурь',
    category: 'heating',
    purposeEn: 'Provides adjustable heat source for heating solutions, qualitative flame tests, and thermal decomposition of metal salts.',
    purposeMn: 'Уусмал халаах, металлын дөлийн сорил явуулах, давсны дулааны задралын туршилт хийх халаах төхөөрөмж.',
    tolerance: 'Temperature range: 300°C – 1100°C',
    correctUseEn: [
      'Ensure collar air-hole is closed before igniting to produce safe, visible yellow flame.',
      'Open collar gradually to obtain roaring non-luminous blue flame with inner cone tip for maximum heating.',
      'Always place on top of an insulated heat-proof ceramic mat.',
      'Return to yellow flame whenever temporarily stepping away from the bench.',
    ],
    correctUseMn: [
      'Асаахдаа агаарын нүхийг нь хааж, тод шар (аюулгүй) дөлөөр асаана.',
      'Халаахын тулд агаарын нүхийг нээж, цэнхэр хүчирхэг дөлийн дотоод конусын орой дээр халаалтаа хийнэ.',
      'Үргэлж халуунд тэсвэртэй керамик дэвсгэр дээр байрлуулна.',
      'Туршилтын завсарлагаар түр холдохдоо шар дөл рүү шилжүүлнэ.',
    ],
    safetyEn: [
      'Inspect rubber hose for cracks or dry rot before opening bench gas tap.',
      'Never heat volatile organic solvents (ethanol, propanone) directly over a naked flame.',
    ],
    safetyMn: [
      'Хийн резинэн хоолой цуурсан эсэхийг асаахаас өмнө заавал шалгана.',
      'Дэгдэмхий спирт, ацетон зэрэг органик уусгагчийг ил гал дээр хэзээ ч бүү халаа (усан банн хэрэглэнэ).',
    ],
    cleaningEn: ['Clear burner chimney nozzle of carbon soot using wire needle. Keep dry.'],
    cleaningMn: ['Хөө тортгийг төмөр утсаар цэвэрлэж хуурай хадгална.'],
  },
  {
    id: 'crucible_and_lid',
    nameEn: 'Porcelain Crucible with Lid',
    nameMn: 'Шаазан тигель ба таг',
    category: 'heating',
    purposeEn: 'High-temperature thermal decomposition and gravimetric determination of water of crystallization (Hydrated copper sulfate).',
    purposeMn: 'Талст гидратын ус тодорхойлох болон өндөр температурт бодисыг улайсган задлах, шатаахад ашиглана.',
    tolerance: 'Withstands up to 1150°C',
    capacity: '30 cm³',
    correctUseEn: [
      'Heat strongly on a pipeclay triangle supported by an iron tripod.',
      'Keep lid slightly ajar during dehydration to allow steam escape while preventing spitting.',
      'Cool inside a glass desiccator before re-weighing on the balance.',
      'Reheat and weigh until two consecutive mass readings agree within 0.02 g (heating to constant mass).',
    ],
    correctUseMn: [
      'Шаазан гурвалжин дээр төмөр штативтай хослуулан халаана.',
      'Ус уурших үед үсрэхээс хамгаалж тагийг үл ялиг зайтай тавина.',
      'Жинлэхийн өмнө эксикаторт хөргөж тасалгааны температурт очно.',
      'Дараалсан 2 хэмжилт 0.02 г дотор зөрүүгүй болтол тогтмол масстай болтол давтан халаана.',
    ],
    safetyEn: ['Handle exclusively with crucible tongs. Never touch hot porcelain with bare fingers.'],
    safetyMn: ['Зөвхөн тигелийн зориулалтын хавчаараар барина. Гараараа хэзээ ч бүү хүр!'],
    cleaningEn: ['Soak in dilute hydrochloric acid to remove baked-on metallic oxides, scrub gently.'],
    cleaningMn: ['Шатаж наалдсан үлдэгдлийг сул давсны хүчилд дэвтээж арилгана.'],
  },
  {
    id: 'measuring_cylinder',
    nameEn: 'Graduated Measuring Cylinder',
    nameMn: 'Хэмжээст цилиндр',
    category: 'measuring',
    purposeEn: 'Quick volume measurement of reagent solutions where high volumetric accuracy is not the limiting uncertainty.',
    purposeMn: 'Нарийн титрлэлтээс бусад урвалын уусмал, шингэний эзлэхүүнийг хурдан хэмжихэд ашиглана.',
    tolerance: '±0.5 cm³ (for 50 cm³ cylinder) / ±1.0 cm³ (for 100 cm³)',
    capacity: '10 cm³, 50 cm³, 100 cm³',
    correctUseEn: [
      'Place on a perfectly horizontal bench. Align eye level to the lowest curve of the meniscus.',
      'Pour from the beaker down the spout without splashing against the rim.',
    ],
    correctUseMn: [
      'Тэгш ширээн дээр тавьж, нүдээ менискийн доод цэгтэй нэг түвшинд барьж харна.',
      'Стаканаас хана дагуулан болгоомжтой хийнэ.',
    ],
    safetyEn: ['Use hexagonal plastic anti-roll collar to prevent cylinder toppling and shattering.'],
    safetyMn: ['Өнхөрч унахаас хамгаалсан хуванцар суурьтай ашиглана.'],
    cleaningEn: ['Wash with brush and test tube cleaner; drain inverted.'],
    cleaningMn: ['Сойзоор угааж урвуу харуулан хатаана.'],
  },
  {
    id: 'thermometer',
    nameEn: 'Precision Laboratory Thermometer (-10 to 110°C)',
    nameMn: 'Лабораторийн термометр (-10...+110°C)',
    category: 'measuring',
    purposeEn: 'Accurate determination of temperature rise and fall during thermochemical enthalpy experiments and calorimetry.',
    purposeMn: 'Калориметрийн туршилт, энтальпийн өөрчлөлт тодорхойлох үеийн температурын хэлбэлзлийг нарийн хэмжихэд ашиглана.',
    tolerance: '±0.2°C (Graduated in 0.5°C or 0.2°C divisions)',
    capacity: '-10°C to +110°C',
    correctUseEn: [
      'Submerge the sensing bulb fully in the stirred liquid without contacting flask bottoms or magnetic stirrers.',
      'Wait for reading to stabilize before logging temperature.',
      'Record to nearest 0.1°C or 0.2°C.',
    ],
    correctUseMn: [
      'Булцууг шингэнд бүрэн дүрнэ, гэхдээ савны ёроолд хүргэхгүй.',
      'Заалт бүрэн тогтворжсоны дараа температурыг тэмдэглэнэ.',
      '0.1°C эсвэл 0.2°C нарийвчлалтай уншина.',
    ],
    safetyEn: ['Never use glass thermometer as a stirring rod; use a glass rod with rubber policeman.'],
    safetyMn: ['Термометрийг уусмал хутгахад хэзээ ч ашиглаж болохгүй! Заавал шилэн савх хэрэглэнэ.'],
    cleaningEn: ['Wipe clean with tissue; store securely in padded protective plastic sleeve.'],
    cleaningMn: ['Салфеткаар арчиж, зориулалтын хатуу хайрцагт нь хадгална.'],
  },
];
