import React, { useState, useMemo } from 'react';
import { Language, NavigationTab } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { apparatusList } from '../data/apparatus';
import { chemicalDatabase } from '../data/chemicals';
import { safetyRules, emergencyProtocols } from '../data/safetyRules';
import { chaptersData } from '../data/chapters';
import { getSeverityLabel } from '../data/labLabels';
import { ChemText } from './ChemText';
import { apparatusPhotos } from '../data/apparatusPhotos';
import { emergencyPhotos, rulePhotos } from '../data/safetyPhotos';
import { PhotoCreditList } from './PhotoCredit';
import {
  ClipboardCheck,
  Search,
  CheckCircle2,
  Circle,
  AlertTriangle,
  Beaker,
  ShieldCheck,
  Flame,
  BookOpen,
  ArrowRight,
  Eye,
  Layers,
  Sparkles
} from 'lucide-react';

const menuPhotos = {
  safety: rulePhotos[2],
  glassware: apparatusPhotos.conical_flask,
  equipment: apparatusPhotos.analytical_balance,
  chemicals: rulePhotos[8],
  experiments: rulePhotos[11],
  emergency: emergencyPhotos.eye_splash,
};

interface ControlCenterProps {
  language: Language;
  onNavigate: (tab: NavigationTab) => void;
  preLabChecks: {
    rulesReviewed: boolean;
    ppeSelected: boolean;
    quizCleared: boolean;
    teacherApproved: boolean;
  };
  onTogglePreLabCheck: (key: 'rulesReviewed' | 'ppeSelected' | 'quizCleared' | 'teacherApproved') => void;
  onOpenEmergencyModal: (protocolId?: string) => void;
}

export const ControlCenter: React.FC<ControlCenterProps> = ({
  language,
  onNavigate,
  preLabChecks,
  onTogglePreLabCheck,
  onOpenEmergencyModal,
}) => {
  const t = getTranslation(language);
  const [searchQuery, setSearchQuery] = useState('');

  // Combined search results
  const searchResults = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return null;

    const matchedApparatus = apparatusList.filter(
      (a) =>
        a.nameEn.toLowerCase().includes(q) ||
        a.nameMn.toLowerCase().includes(q) ||
        a.purposeEn.toLowerCase().includes(q) ||
        a.purposeMn.toLowerCase().includes(q)
    );

    const matchedChemicals = chemicalDatabase.filter(
      (c) =>
        c.nameEn.toLowerCase().includes(q) ||
        c.nameMn.toLowerCase().includes(q) ||
        c.formula.toLowerCase().includes(q) ||
        c.casNumber.toLowerCase().includes(q)
    );

    const matchedPracticals = chaptersData.flatMap((ch) =>
      ch.practicals.filter(
        (p) =>
          p.titleEn.toLowerCase().includes(q) ||
          p.titleMn.toLowerCase().includes(q) ||
          p.aimEn.toLowerCase().includes(q) ||
          p.aimMn.toLowerCase().includes(q)
      )
    );

    const matchedRules = safetyRules.filter(
      (r) =>
        r.titleEn.toLowerCase().includes(q) ||
        r.titleMn.toLowerCase().includes(q) ||
        r.descEn.toLowerCase().includes(q) ||
        r.descMn.toLowerCase().includes(q)
    );

    return {
      apparatus: matchedApparatus,
      chemicals: matchedChemicals,
      practicals: matchedPracticals,
      rules: matchedRules,
      total:
        matchedApparatus.length +
        matchedChemicals.length +
        matchedPracticals.length +
        matchedRules.length,
    };
  }, [searchQuery]);

  const allChecksCleared =
    preLabChecks.rulesReviewed &&
    preLabChecks.ppeSelected &&
    preLabChecks.quizCleared &&
    preLabChecks.teacherApproved;

  return (
    <div className="space-y-8">
      {/* Top Banner and Search Hub */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'Centralized Hub' : 'Нэгдсэн удирдлагын төв'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.controlCenter.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.controlCenter.subtitle}
            </p>
          </div>

          {/* Quick Emergency Button */}
          <button
            onClick={() => onOpenEmergencyModal()}
            className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors"
          >
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>{t.controlCenter.emergencyAction}</span>
          </button>
        </div>

        {/* Global Instant Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.controlCenter.searchPlaceholder}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-slate-400 hover:text-slate-600"
            >
              {language === 'en' ? 'Clear' : 'Цэвэрлэх'}
            </button>
          )}
        </div>

        {/* Live Search Results Drawer */}
        {searchResults && (
          <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-lg divide-y divide-slate-200 max-h-96 overflow-y-auto">
            <div className="text-xs font-medium text-slate-500 pb-2">
              {language === 'en'
                ? `Found ${searchResults.total} matches for "${searchQuery}"`
                : `"${searchQuery}" хайлтаар ${searchResults.total} үр дүн олдлоо`}
            </div>

            {searchResults.total === 0 && (
              <div className="py-4 text-center text-sm text-slate-500">
                {language === 'en'
                  ? 'No apparatus, chemicals, or practicals match this query.'
                  : 'Ийм нэртэй багаж, бодис эсвэл туршилт олдсонгүй.'}
              </div>
            )}

            {/* Apparatus matches */}
            {searchResults.apparatus.length > 0 && (
              <div className="py-2">
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Beaker className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{language === 'en' ? 'Apparatus & Glassware' : 'Багаж, шил сав'}</span>
                </div>
                <div className="space-y-1">
                  {searchResults.apparatus.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onNavigate('apparatus')}
                      className="w-full text-left p-2 rounded-md hover:bg-white flex items-center justify-between text-xs transition-colors"
                    >
                      <span className="font-medium text-slate-900">
                        {language === 'en' ? item.nameEn : item.nameMn}
                      </span>
                      <span className="text-slate-500">{item.tolerance}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chemical matches */}
            {searchResults.chemicals.length > 0 && (
              <div className="py-2">
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'en' ? 'Chemical Reagents' : 'Химийн бодис'}</span>
                </div>
                <div className="space-y-1">
                  {searchResults.chemicals.map((chem) => (
                    <button
                      key={chem.id}
                      onClick={() => onNavigate('chemicals')}
                      className="w-full text-left p-2 rounded-md hover:bg-white flex items-center justify-between text-xs transition-colors"
                    >
                      <div>
                        <span className="font-medium text-slate-900">
                          {language === 'en' ? chem.nameEn : chem.nameMn}
                        </span>
                        <span className="ml-2 text-cyan-700">[<ChemText text={chem.formula} />]</span>
                      </div>
                      <span className="text-slate-500 text-[11px]">CAS: {chem.casNumber}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Practical matches */}
            {searchResults.practicals.length > 0 && (
              <div className="py-2">
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'en' ? 'Practical Experiments' : 'Туршилтын хичээлүүд'}</span>
                </div>
                <div className="space-y-1">
                  {searchResults.practicals.map((prac) => (
                    <button
                      key={prac.id}
                      onClick={() => onNavigate('lessons')}
                      className="w-full text-left p-2 rounded-md hover:bg-white flex items-center justify-between text-xs transition-colors"
                    >
                      <span className="font-medium text-slate-900">
                        {language === 'en' ? prac.titleEn : prac.titleMn}
                      </span>
                      <span className="text-slate-500 text-[11px]">{prac.paper}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 6 Core Functional Navigation Portals */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => onNavigate('safety_hub')}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-center group"
          >
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-2 group-hover:scale-[1.03] transition-transform">
              <img src={menuPhotos.safety.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-900">
              {language === 'en' ? 'Safety Rules' : 'Дүрэм, заавар'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">{language === 'en' ? '15 Rules' : '15 дүрэм'}</span>
          </button>

          <button
            onClick={() => onNavigate('apparatus')}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-center group"
          >
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-2 group-hover:scale-[1.03] transition-transform">
              <img src={menuPhotos.glassware.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-900">
              {language === 'en' ? 'Glassware' : 'Шил сав'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">{language === 'en' ? 'Calibrated' : 'Шалгаж тохируулсан'}</span>
          </button>

          <button
            onClick={() => onNavigate('apparatus')}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-center group"
          >
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-2 group-hover:scale-[1.03] transition-transform">
              <img src={menuPhotos.equipment.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-900">
              {language === 'en' ? 'Equipment' : 'Багаж ашиглалт'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">{language === 'en' ? 'Apparatus' : 'Багаж хэрэгсэл'}</span>
          </button>

          <button
            onClick={() => onNavigate('chemicals')}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-center group"
          >
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-2 group-hover:scale-[1.03] transition-transform">
              <img src={menuPhotos.chemicals.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-900">
              {language === 'en' ? 'Chemicals' : 'Бодисын аюул'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">GHS / SDS</span>
          </button>

          <button
            onClick={() => onNavigate('lessons')}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-all text-center group"
          >
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-2 group-hover:scale-[1.03] transition-transform">
              <img src={menuPhotos.experiments.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-slate-900">
              {language === 'en' ? 'Experiments' : 'Туршилтын сан'}
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">{language === 'en' ? '17 Chapters' : '17 бүлэг'}</span>
          </button>

          <button
            onClick={() => onOpenEmergencyModal()}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-rose-50/60 hover:bg-rose-100/60 border border-rose-200 hover:border-rose-300 transition-all text-center group"
          >
            <div className="w-full aspect-[4/3] rounded-md overflow-hidden mb-2 group-hover:scale-[1.03] transition-transform">
              <img src={menuPhotos.emergency.src} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <span className="text-xs font-semibold text-rose-900">
              {language === 'en' ? 'Emergency' : 'Ослын заавар'}
            </span>
            <span className="text-[11px] text-rose-600 mt-0.5">{language === 'en' ? 'First Aid' : 'Анхны тусламж'}</span>
          </button>
        </div>
        <div className="mt-3">
          <PhotoCreditList photos={Object.values(menuPhotos)} language={language} />
        </div>
      </div>

      {/* Pre-Lab Authorization Checklist (Before Starting Practical Work) */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 shrink-0 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center">
              <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-slate-900">
              {t.controlCenter.checklistTitle}
            </h3>
          </div>
          <div className="text-xs">
            {allChecksCleared ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {language === 'en' ? 'SELF-CHECK COMPLETE' : 'ӨӨРИЙГӨӨ ШАЛГАЖ ДУУССАН'}
              </span>
            ) : (
              <span className="text-amber-700 font-medium">
                {language === 'en' ? 'CHECKLIST PENDING' : 'ШАЛГАЛТ ХҮЛЭЭГДЭЖ БУЙ'}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            onClick={() => onTogglePreLabCheck('rulesReviewed')}
            className={`p-3.5 rounded-lg border text-left flex items-start gap-3 transition-colors ${
              preLabChecks.rulesReviewed
                ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {preLabChecks.rulesReviewed ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs">
              <div className="font-semibold">{t.controlCenter.check1}</div>
              <div className="text-slate-500 mt-0.5">
                {language === 'en' ? '15 rules acknowledged' : '15 дүрэмтэй танилцсан'}
              </div>
            </div>
          </button>

          <button
            onClick={() => onTogglePreLabCheck('ppeSelected')}
            className={`p-3.5 rounded-lg border text-left flex items-start gap-3 transition-colors ${
              preLabChecks.ppeSelected
                ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {preLabChecks.ppeSelected ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs">
              <div className="font-semibold">{t.controlCenter.check2}</div>
              <div className="text-slate-500 mt-0.5">
                {language === 'en' ? 'Goggles, coat & gloves on' : 'Шил, халад, бээлий бүрэн'}
              </div>
            </div>
          </button>

          <button
            onClick={() => onTogglePreLabCheck('quizCleared')}
            className={`p-3.5 rounded-lg border text-left flex items-start gap-3 transition-colors ${
              preLabChecks.quizCleared
                ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {preLabChecks.quizCleared ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs">
              <div className="font-semibold">{t.controlCenter.check3}</div>
              <div className="text-slate-500 mt-0.5">
                {language === 'en' ? 'Passed with over 85%' : '85%-иас дээш оноо авсан'}
              </div>
            </div>
          </button>

          <button
            onClick={() => onTogglePreLabCheck('teacherApproved')}
            className={`p-3.5 rounded-lg border text-left flex items-start gap-3 transition-colors ${
              preLabChecks.teacherApproved
                ? 'bg-emerald-50/60 border-emerald-300 text-slate-900'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {preLabChecks.teacherApproved ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            )}
            <div className="text-xs">
              <div className="font-semibold">{t.controlCenter.check4}</div>
              <div className="text-slate-500 mt-0.5">
                {language === 'en' ? 'Teacher bench sign-off' : 'Багшийн гарын үсэг, зөвшөөрөл'}
              </div>
            </div>
          </button>
        </div>

        <div className="mt-4 p-3 rounded-lg text-xs flex items-center justify-between bg-slate-100/70 border border-slate-200 text-slate-700">
          <span>
            {allChecksCleared ? t.controlCenter.allClear : t.controlCenter.pendingCheck}
          </span>
          <button
            onClick={() => onNavigate('lessons')}
            className="text-cyan-700 hover:text-cyan-800 font-semibold underline underline-offset-2 shrink-0"
          >
            {language === 'en' ? 'Launch Safety Quiz →' : 'Шалгалт өгөх →'}
          </button>
        </div>
      </div>

      {/* Emergency Quick Action Strip */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <h3 className="text-base font-bold text-slate-900">
              {language === 'en' ? 'Emergency Fast Protocols' : 'Яаралтай тусламжийн шуурхай заавар'}
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            {language === 'en' ? 'Instant Step-by-Step' : 'Алхамчилсан заавар'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {emergencyProtocols.slice(0, 3).map((protocol) => (
            <div
              key={protocol.id}
              onClick={() => onOpenEmergencyModal(protocol.id)}
              className="p-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 cursor-pointer transition-colors group"
            >
              <div className="aspect-[16/9] rounded-md overflow-hidden mb-3 border border-slate-200">
                <img src={emergencyPhotos[protocol.id].src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-rose-700 uppercase mb-1">
                <span>{getSeverityLabel(protocol.severity, language)}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </div>
              <h4 className="text-sm font-semibold text-slate-900">
                {language === 'en' ? protocol.titleEn : protocol.titleMn}
              </h4>
              <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                {language === 'en' ? protocol.firstActionsEn[0] : protocol.firstActionsMn[0]}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <PhotoCreditList photos={emergencyProtocols.slice(0, 3).map((protocol) => emergencyPhotos[protocol.id])} language={language} />
        </div>
      </div>
    </div>
  );
};
