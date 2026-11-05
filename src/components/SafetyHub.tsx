import React, { useState } from 'react';
import { Language, SafetyRule, EmergencyProtocol } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { safetyRules, emergencyProtocols } from '../data/safetyRules';
import { getSeverityLabel } from '../data/labLabels';
import { emergencyPhotos, ruleBannerPhotos, ruleMontagePhotos, rulePhotos, SafetyPhoto, stationPhoto } from '../data/safetyPhotos';
import { PhotoCredit } from './PhotoCredit';
import { GhsPictogram } from './art/GhsPictogram';
import { VisualBanner } from './art/VisualBanner';
import { WaftingArt } from './art/WaftingArt';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ruleBanners = {
  all: {
    titleEn: 'Laboratory Code of Practice',
    titleMn: 'Лабораторийн ажиллах журам',
    textEn: 'The 15 rules every student follows before and during practical work.',
    textMn: 'Туршилтын өмнө болон явцад сурагч бүрийн мөрдөх 15 дүрэм.',
  },
  ppe: {
    titleEn: 'Personal Protective Equipment',
    titleMn: 'Хувийн хамгаалах хэрэгсэл',
    textEn: 'Goggles, a buttoned lab coat, gloves where required and tied-back hair, from the start until clean-up ends.',
    textMn: 'Нүдний шил, товчилсон халад, шаардлагатай бол бээлий зүүж, үсээ боогоод цэвэрлэгээ дуустал байна.',
  },
  conduct: {
    titleEn: 'Bench Conduct',
    titleMn: 'Ажлын байрны дэг журам',
    textEn: 'No food or drink, no tasting, no mouth-pipetting, and nothing starts without your teacher’s authorization.',
    textMn: 'Хоол, ундаа хэрэглэхгүй, бодис амтлахгүй, пипеткийг амаар соруулахгүй, багшийн зөвшөөрөлгүй юу ч эхлүүлэхгүй.',
  },
  heating: {
    titleEn: 'Safe Heating',
    titleMn: 'Аюулгүй халаалт',
    textEn: 'Heat only under your teacher’s supervision and never leave a lit burner unattended.',
    textMn: 'Зөвхөн багшийн хяналт дор халааж, асаалттай халаагуурыг хараа хяналтгүй орхихгүй.',
  },
  spills: {
    titleEn: 'Spills & Waste',
    titleMn: 'Асгаралт ба хаягдал',
    textEn: 'Report every spill at once and put waste only in its designated container.',
    textMn: 'Асгарсан бодисыг даруй мэдэгдэж, хаягдлыг зөвхөн зориулалтын саванд хийнэ.',
  },
  hygiene: {
    titleEn: 'Clean-Up & Hand Hygiene',
    titleMn: 'Цэвэрлэгээ ба гарын ариун цэвэр',
    textEn: 'Clear and wipe your bench, then wash your hands thoroughly before leaving.',
    textMn: 'Ажлын байраа цэвэрлээд гарахаасаа өмнө гараа сайтар угаана.',
  },
};

const photoFit = (photo: SafetyPhoto) => `w-full h-full ${photo.contain ? 'object-contain bg-[#ececf0]' : 'object-cover'}`;

const PhotoFigure: React.FC<{ photo: SafetyPhoto; language: Language; boxClassName: string }> = ({ photo, language, boxClassName }) => (
  <figure className="space-y-1">
    <div className={`${boxClassName} overflow-hidden border border-slate-200`}>
      <img src={photo.src} alt={language === 'en' ? photo.altEn : photo.altMn} loading="lazy" className={photoFit(photo)} />
    </div>
    <PhotoCredit photo={photo} language={language} cropped={photo.cropped} />
  </figure>
);

interface SafetyHubProps {
  language: Language;
}

export const SafetyHub: React.FC<SafetyHubProps> = ({
  language,
}) => {
  const t = getTranslation(language);

  const [activeSection, setActiveSection] = useState<'rules' | 'ghs' | 'emergency'>('rules');
  const [ruleFilter, setRuleFilter] = useState<'all' | 'ppe' | 'conduct' | 'heating' | 'spills' | 'hygiene'>('all');
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  const filteredRules = safetyRules.filter((r) => {
    if (ruleFilter === 'all') return true;
    return r.category === ruleFilter;
  });
  const bannerPhoto = ruleFilter === 'all' ? null : ruleBannerPhotos[ruleFilter];

  return (
    <div className="art-light space-y-8">
      {/* Header with Navigation Pills */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'Safety First' : 'Аюулгүй байдал эн тэргүүнд'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.safety.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.safety.subtitle}
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto border border-slate-200">
            <button
              onClick={() => setActiveSection('rules')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeSection === 'rules'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? '15 Golden Rules' : '15 алтан дүрэм'}
            </button>
            <button
              onClick={() => setActiveSection('emergency')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeSection === 'emergency'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'Emergency Protocols' : 'Ослын үеийн заавар'}
            </button>
            <button
              onClick={() => setActiveSection('ghs')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeSection === 'ghs'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'GHS Pictograms' : 'GHS тэмдэглэгээ'}
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 1: 15 GOLDEN RULES */}
      {activeSection === 'rules' && (
        <div className="space-y-6">
          <VisualBanner
            light
            eyebrow={language === 'en' ? 'Safety First' : 'Аюулгүй байдал эн тэргүүнд'}
            title={language === 'en' ? ruleBanners[ruleFilter].titleEn : ruleBanners[ruleFilter].titleMn}
            description={language === 'en' ? ruleBanners[ruleFilter].textEn : ruleBanners[ruleFilter].textMn}
            credit={bannerPhoto ? (
              <PhotoCredit photo={bannerPhoto} language={language} cropped={bannerPhoto.cropped} />
            ) : (
              <figcaption className="text-[11px] text-slate-500 leading-snug">
                {language === 'en' ? 'Each photo is credited on its rule below.' : 'Зураг бүрийн эх сурвалжийг доорх дүрэм дээр бичсэн.'}
              </figcaption>
            )}
          >
            {bannerPhoto ? (
              <img src={bannerPhoto.src} alt={language === 'en' ? bannerPhoto.altEn : bannerPhoto.altMn} className={photoFit(bannerPhoto)} />
            ) : (
              <div
                role="img"
                aria-label={language === 'en' ? ruleBanners.all.titleEn : ruleBanners.all.titleMn}
                className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 bg-white"
              >
                {ruleMontagePhotos.map((photo) => (
                  <div key={photo.src} className="min-h-0 overflow-hidden">
                    <img src={photo.src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </VisualBanner>

          {/* Sub-filter tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', labelEn: 'All Rules (15)', labelMn: 'Бүх 15 дүрэм' },
              { id: 'ppe', labelEn: 'PPE & Attire', labelMn: 'Хувийн хамгаалалт' },
              { id: 'conduct', labelEn: 'Lab Conduct', labelMn: 'Дэг журам' },
              { id: 'heating', labelEn: 'Heating & Flames', labelMn: 'Халаах ажиллагаа' },
              { id: 'spills', labelEn: 'Spills & Waste', labelMn: 'Асгаралт, хаягдал' },
              { id: 'hygiene', labelEn: 'Hygiene & Cleanliness', labelMn: 'Цэвэрлэгээ, ариун цэвэр' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setRuleFilter(f.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                  ruleFilter === f.id
                    ? 'bg-cyan-700 text-white border-cyan-700'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {language === 'en' ? f.labelEn : f.labelMn}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRules.map((rule) => {
              const isExpanded = expandedRule === rule.id;
              return (
                <div
                  key={rule.id}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="mb-3">
                      {rulePhotos[rule.id] ? (
                        <PhotoFigure photo={rulePhotos[rule.id]} language={language} boxClassName="aspect-[4/3] rounded-lg" />
                      ) : (
                        <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                          <WaftingArt label={language === 'en' ? rule.titleEn : rule.titleMn} />
                        </div>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-400 mb-1">
                      {language === 'en' ? 'RULE' : 'ДҮРЭМ'} {rule.id < 10 ? `0${rule.id}` : rule.id}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {language === 'en' ? rule.titleEn : rule.titleMn}
                    </h3>

                    <p className={`mt-2 text-xs text-slate-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
                      {language === 'en' ? rule.descEn : rule.descMn}
                    </p>
                  </div>

                  <button
                    onClick={() => setExpandedRule(isExpanded ? null : rule.id)}
                    className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-cyan-700 font-medium hover:text-cyan-800"
                  >
                    <span>{isExpanded ? (language === 'en' ? 'Show less' : 'Хураах') : (language === 'en' ? 'Full standard details' : 'Дэлгэрэнгүй заавар')}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 2: EMERGENCY PROTOCOLS */}
      {activeSection === 'emergency' && (
        <div className="space-y-6">
          {/* Emergency Safety Station Banner Image */}
          <div className="relative rounded-2xl overflow-hidden border border-rose-100 bg-linear-to-br from-rose-50 via-white to-sky-50 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <span className="text-xs uppercase tracking-wider text-rose-700 font-semibold">
                {language === 'en' ? 'Critical Action Station' : 'Ослын яаралтай станц'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {language === 'en' ? 'Laboratory Emergency Stations' : 'Лабораторийн ослын төхөөрөмжүүд'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {language === 'en'
                  ? 'All personnel must know the exact location of the Deluge Shower, Eyewash Basin, Fire Blanket, and Master Gas Cutoff Button prior to commencing experimental work.'
                  : 'Бүх сурагч, ажилтнууд туршилт эхлэхээс өмнө нүд угаагч, ослын шүршүүр, галын хөнжил, хийн ерөнхий таслагчийн байршлыг нүдээр шалгасан байх ёстой.'}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <PhotoFigure photo={stationPhoto} language={language} boxClassName="aspect-[16/9] rounded-xl shadow-md" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyProtocols.map((protocol) => (
              <div
                key={protocol.id}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <PhotoFigure photo={emergencyPhotos[protocol.id]} language={language} boxClassName="aspect-[16/9] rounded-lg" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[11px] uppercase font-semibold px-2 py-0.5 rounded ${
                        protocol.severity === 'critical'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {getSeverityLabel(protocol.severity, language)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">
                    {language === 'en' ? protocol.titleEn : protocol.titleMn}
                  </h3>

                  <div className="mt-4 space-y-2">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      {language === 'en' ? 'Immediate Actions:' : 'Авах арга хэмжээ:'}
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {(language === 'en' ? protocol.firstActionsEn : protocol.firstActionsMn).map((action, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                            {i + 1}
                          </span>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-800">
                    <span className="font-semibold">{language === 'en' ? 'Critical Caution: ' : 'Анхааруулга: '}</span>
                    {language === 'en' ? protocol.cautionEn : protocol.cautionMn}
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    <span className="font-semibold text-slate-700">{language === 'en' ? 'Equipment: ' : 'Хэрэгсэл: '}</span>
                    {language === 'en' ? protocol.equipmentNeededEn : protocol.equipmentNeededMn}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: GHS PICTOGRAMS */}
      {activeSection === 'ghs' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { code: 'GHS01', nameEn: 'Explosive', nameMn: 'Тэсрэмтгий', descEn: 'Unstable explosives, self-reactive substances', descMn: 'Өөрөө тэсрэх, дулаан цохилтод мэдрэмтгий бодисууд' },
              { code: 'GHS02', nameEn: 'Flammable', nameMn: 'Шатамхай', descEn: 'Flammable gases, liquids, and aerosols (Ethanol, acetone)', descMn: 'Шатамхай хий, уур, спирт, ацетон' },
              { code: 'GHS03', nameEn: 'Oxidizing', nameMn: 'Исэлдүүлэгч', descEn: 'Oxidizing gases, liquids, and solids (KMnO4, conc HNO3)', descMn: 'Бусад бодисыг шатаагч исэлдүүлэгч (KMnO4, HNO3)' },
              { code: 'GHS04', nameEn: 'Compressed Gas', nameMn: 'Даралтат хий', descEn: 'Gases under pressure; may explode if heated', descMn: 'Даралттай баллон дахь хий; халаахад тэсрэх аюултай' },
              { code: 'GHS05', nameEn: 'Corrosive', nameMn: 'Идэмхий', descEn: 'Causes severe skin burns and serious eye damage (HCl, NaOH)', descMn: 'Арьс, нүдэнд хүнд зэргийн түлэгдэлт үүсгэнэ (HCl, NaOH)' },
              { code: 'GHS06', nameEn: 'Acute Toxicity', nameMn: 'Хурц хортой', descEn: 'Fatal or toxic if swallowed, inhaled, or in contact with skin', descMn: 'Залгих, уураар амьсгалахад үхэлд хүргэх аюултай хор' },
              { code: 'GHS07', nameEn: 'Health Hazard / Irritant', nameMn: 'Цочроогч', descEn: 'Harmful, skin irritant, narcotic effects, respiratory irritant', descMn: 'Арьс, амьсгалын замыг цочроогч бодисууд' },
              { code: 'GHS08', nameEn: 'Serious Health Hazard', nameMn: 'Эрүүл мэндэд ноцтой аюултай', descEn: 'May cause cancer, genetic defects, organ damage or respiratory sensitization', descMn: 'Хорт хавдар, удамшлын гэмтэл, эрхтний гэмтэл, амьсгалын замын харшил үүсгэж болзошгүй' },
              { code: 'GHS09', nameEn: 'Environmental Hazard', nameMn: 'Байгаль орчинд аюултай', descEn: 'Very toxic to aquatic life with long-lasting ecological effects', descMn: 'Усан орчны амьтан ургамалд онцгой хортой (CuSO4)' },
            ].map((ghs) => (
              <div key={ghs.code} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs text-center flex flex-col items-center">
                <GhsPictogram code={ghs.code} label={language === 'en' ? ghs.nameEn : ghs.nameMn} className="w-24 h-24 my-2" />
                <span className="font-bold text-red-600 text-xs">{ghs.code}</span>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  {language === 'en' ? ghs.nameEn : ghs.nameMn}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {language === 'en' ? ghs.descEn : ghs.descMn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
