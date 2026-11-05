import React, { useState } from 'react';
import { Language, ApparatusItem } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { apparatusList } from '../data/apparatus';
import { apparatusPhotos, meniscusPhoto } from '../data/apparatusPhotos';
import { getApparatusCategoryLabel, getCapacityLabel, getToleranceLabel } from '../data/labLabels';
import { PhotoCredit } from './PhotoCredit';
import {
  Beaker,
  Search,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Eye,
  Layers,
  Sliders,
  Info
} from 'lucide-react';

interface GlasswareCatalogProps {
  language: Language;
}

export const GlasswareCatalog: React.FC<GlasswareCatalogProps> = ({ language }) => {
  const t = getTranslation(language);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedApparatusId, setSelectedApparatusId] = useState<string>(apparatusList[0].id);

  const filteredItems = apparatusList.filter((item) => {
    if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.nameEn.toLowerCase().includes(q) ||
      item.nameMn.toLowerCase().includes(q) ||
      item.purposeEn.toLowerCase().includes(q) ||
      item.purposeMn.toLowerCase().includes(q)
    );
  });

  const activeItem = apparatusList.find((i) => i.id === selectedApparatusId) || apparatusList[0];
  const activePhoto = apparatusPhotos[activeItem.id];

  return (
    <div className="space-y-8">
      {/* Top Banner and Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'Calibrated Instrumentation' : 'Стандарт багаж, хэмжилт'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.apparatus.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.apparatus.subtitle}
            </p>
          </div>

          {/* Categories Tab Strip */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto">
            {[
              { id: 'all', labelEn: 'All', labelMn: 'Бүгд' },
              { id: 'measuring', labelEn: 'Measuring', labelMn: 'Хэмжих' },
              { id: 'glassware', labelEn: 'Glassware', labelMn: 'Шил сав' },
              { id: 'heating', labelEn: 'Heating', labelMn: 'Халаах' },
              { id: 'separation', labelEn: 'Separation', labelMn: 'Ялгах' },
              { id: 'support', labelEn: 'Support', labelMn: 'Туслах хэрэгсэл' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'en' ? cat.labelEn : cat.labelMn}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search apparatus by name, purpose, or tolerance...'
                : 'Багажийн нэр, зориулалт, алдааны нарийвчлалаар хайх...'
            }
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Meniscus guide, shown with the measuring apparatus only */}
      {selectedCategory === 'measuring' && (
        <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 space-y-3">
            <span className="text-xs uppercase tracking-wider text-cyan-700 font-semibold">
              {language === 'en' ? 'Volumetric Precision Standards' : 'Эзлэхүүний хэмжилтийн стандарт'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              {language === 'en' ? 'Avoiding Parallax Error & Correct Meniscus Reading' : 'Параллакс алдаа ба Менискийг зөв харах арга'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'en'
                ? 'In Cambridge Paper 3 volumetric titrations, accurate burette and pipette alignment at perpendicular eye-level is mandatory. For concave water menisci, read strictly the bottom curve tangent.'
                : 'Cambridge практик шалгалтад параллакс алдаанаас сэргийлэхийн тулд нүдээ шингэний гадаргуутай яг нэг түвшинд тэгш барьж, хотгор менискийн ёроолын цэгийг зураастай тааруулна.'}
            </p>

            <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200 text-xs text-cyan-900">
              {language === 'en'
                ? 'Rule: Burette readings recorded to 2 decimal places (ending in .00 or .05 cm³)'
                : 'Дүрэм: Бюреткийн заалтыг таслалаас хойш 2 оронтой (.00 эсвэл .05 см³) бичнэ'}
            </div>
          </div>

          <figure className="w-full md:w-1/2 space-y-1.5">
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src={meniscusPhoto.src}
                alt={language === 'en' ? 'Curved liquid surface against a burette scale, read at the bottom of the curve' : 'Бюреткийн хуваарь дээрх шингэний муруй гадаргуу. Муруйн доод цэгээр уншина'}
                className="w-full h-full object-cover"
              />
            </div>
            <PhotoCredit photo={meniscusPhoto} language={language} cropped />
          </figure>
        </div>
      )}

      {/* Main Two-Column View: List on Left, Active Details on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Apparatus Grid / Selector (5 cols) */}
        <div className="lg:col-span-5 space-y-2 max-h-[780px] overflow-y-auto pr-1">
          {filteredItems.map((item) => {
            const isSelected = item.id === selectedApparatusId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedApparatusId(item.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-white border-cyan-600 shadow-xs ring-1 ring-cyan-600'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-20 aspect-[4/3] shrink-0 rounded-md overflow-hidden border border-slate-200 bg-white">
                    <img src={apparatusPhotos[item.id].src} alt="" loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-x-2 mb-1">
                      <span className="text-xs uppercase font-semibold text-cyan-700">
                        {getApparatusCategoryLabel(item.category, language)}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {getToleranceLabel(item.tolerance, language)}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {language === 'en' ? item.nameEn : item.nameMn}
                    </div>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                      {language === 'en' ? item.purposeEn : item.purposeMn}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Full Technical Specifications (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center justify-between text-xs text-slate-400 uppercase mb-1">
              <span>{getApparatusCategoryLabel(activeItem.category, language)}</span>
              <span>{language === 'en' ? 'Tolerance' : 'Алдааны хязгаар'}: {getToleranceLabel(activeItem.tolerance, language)}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {language === 'en' ? activeItem.nameEn : activeItem.nameMn}
            </h3>
            {activeItem.capacity && (
              <span className="inline-block mt-2 text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                {language === 'en' ? 'Standard Capacity' : 'Стандарт багтаамж'}: {getCapacityLabel(activeItem.capacity, language)}
              </span>
            )}
          </div>

          <figure className="max-w-sm mx-auto space-y-1.5">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-white">
              <img
                src={activePhoto.src}
                alt={language === 'en' ? activeItem.nameEn : activeItem.nameMn}
                className="w-full h-full object-contain"
              />
            </div>
            <PhotoCredit photo={activePhoto} language={language} />
          </figure>

          {/* Purpose */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              {t.apparatus.purpose}
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              {language === 'en' ? activeItem.purposeEn : activeItem.purposeMn}
            </p>
          </div>

          {/* Meniscus Guide if applicable */}
          {activeItem.meniscusNotes && (
            <div className="p-4 rounded-lg bg-cyan-50/70 border border-cyan-200 text-cyan-950 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-800">
                <Eye className="w-4 h-4 text-cyan-700" />
                <span>{language === 'en' ? 'Meniscus & Alignment Guidance' : 'Мениск тохируулах ба Харааны өнцөг'}</span>
              </div>
              <p className="text-xs leading-relaxed">
                {language === 'en' ? activeItem.meniscusNotes.en : activeItem.meniscusNotes.mn}
              </p>
            </div>
          )}

          {/* Correct Technique */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {t.apparatus.correctUse}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {(language === 'en' ? activeItem.correctUseEn : activeItem.correctUseMn).map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Breakage prevention */}
          <div className="p-4 rounded-lg bg-rose-50/70 border border-rose-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>{t.apparatus.safetyNotes}</span>
            </h4>
            <ul className="space-y-1 text-xs text-rose-950">
              {(language === 'en' ? activeItem.safetyEn : activeItem.safetyMn).map((safe, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold">·</span>
                  <span>{safe}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cleaning and maintenance */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>{t.apparatus.cleaning}</span>
            </h4>
            <ul className="space-y-1 text-xs text-slate-600">
              {(language === 'en' ? activeItem.cleaningEn : activeItem.cleaningMn).map((cl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold">·</span>
                  <span>{cl}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
