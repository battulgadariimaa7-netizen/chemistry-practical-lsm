import React, { useState } from 'react';
import { Language, ChemicalItem } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { chemicalDatabase } from '../data/chemicals';
import { getHazardStatement, getPictogramLabel } from '../data/labLabels';
import { ChemText } from './ChemText';
import { GhsPictogram, ghsCodeOf } from './art/GhsPictogram';
import { ReagentBottle } from './art/ReagentBottle';
import { pagePhotos } from '../data/pagePhotos';
import { chemicalPhotos } from '../data/chemicalPhotos';
import { PhotoCredit } from './PhotoCredit';
import {
  Flame,
  Search,
  AlertTriangle,
  Shield,
  FileText,
  Archive,
  Droplet,
  HeartPulse,
  X,
  Printer
} from 'lucide-react';

interface ChemicalSafetyDbProps {
  language: Language;
}

/** A real photo of the reagent bottle with its credit, or the drawn amber bottle when there is no photo. */
const ChemicalPicture: React.FC<{ id: string; label: string; language: Language; className?: string }> = ({ id, label, language, className = '' }) => {
  const photo = chemicalPhotos[id];
  return (
    <figure className={className}>
      <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-50">
        {photo ? (
          <img src={photo.src} alt={language === 'en' ? photo.altEn : photo.altMn} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <ReagentBottle id={id} label={label} light />
        )}
      </div>
      {photo && <PhotoCredit photo={photo} language={language} cropped={photo.cropped} className="mt-1 text-slate-400" />}
    </figure>
  );
};

export const ChemicalSafetyDb: React.FC<ChemicalSafetyDbProps> = ({ language }) => {
  const t = getTranslation(language);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHazard, setSelectedHazard] = useState('all');
  const [activeSdsModal, setActiveSdsModal] = useState<ChemicalItem | null>(null);

  const filteredChemicals = chemicalDatabase.filter((chem) => {
    if (selectedHazard !== 'all' && !chem.hazardClasses.includes(selectedHazard)) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      chem.nameEn.toLowerCase().includes(q) ||
      chem.nameMn.toLowerCase().includes(q) ||
      chem.formula.toLowerCase().includes(q) ||
      chem.casNumber.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8">
      {/* Top Banner and Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'GHS & SDS Regulatory Database' : 'GHS ба SDS химийн бодисын лавлах'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.chemicals.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.chemicals.subtitle}
            </p>
          </div>

          {/* Hazard Class Filters */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto">
            {[
              { id: 'all', labelEn: 'All Hazards', labelMn: 'Бүгд' },
              { id: 'Corrosive', labelEn: 'Corrosive', labelMn: 'Идэмхий' },
              { id: 'Oxidizing', labelEn: 'Oxidizing', labelMn: 'Исэлдүүлэгч' },
              { id: 'Flammable', labelEn: 'Flammable', labelMn: 'Шатамхай' },
              { id: 'Toxic', labelEn: 'Toxic', labelMn: 'Хортой' },
              { id: 'Irritant', labelEn: 'Irritant', labelMn: 'Цочроогч' },
            ].map((hz) => (
              <button
                key={hz.id}
                onClick={() => setSelectedHazard(hz.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedHazard === hz.id
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {language === 'en' ? hz.labelEn : hz.labelMn}
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
            placeholder={t.chemicals.search}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Chemical Reagent Storage Showcase */}
      <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 print:hidden">
        <div className="w-full md:w-1/2 space-y-3">
          <span className="text-xs uppercase tracking-wider text-cyan-700 font-semibold">
            {language === 'en' ? 'GHS Storage Compatibility' : 'Бодисын ангилал ба аюулгүй хадгалалт'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            {language === 'en' ? 'Ventilated Chemical Cabinets & Amber Bottle Reagents' : 'Агааржуулалттай шүүгээ ба бараан шилэн савны хадгалалт'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {language === 'en'
              ? 'Flammable solvents, strong mineral acids, caustics, and oxidizers must strictly be segregated into designated storage vaults with clear secondary containment.'
              : 'Шатамхай уусгагч, хүчтэй хүчил, шүлт, исэлдүүлэгчдийг хооронд нь тусгаарлаж, зориулалтын шошготой галд тэсвэртэй шүүгээнд хадгална.'}
          </p>
          <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200 text-xs text-cyan-900">
            {language === 'en'
              ? 'Safety Protocol: Always check GHS hazard pictograms and CAS identifiers before dispensing.'
              : 'Дүрэм: Бодис авахын өмнө GHS аюулын тэмдэг болон CAS дугаарыг 2 удаа нягталж шалгана.'}
          </div>
        </div>

        <figure className="w-full md:w-1/2 space-y-1">
          <div className="aspect-[16/9] rounded-lg overflow-hidden border border-slate-200">
            <img src={pagePhotos.chemicalStorage.src} alt={language === 'en' ? pagePhotos.chemicalStorage.altEn : pagePhotos.chemicalStorage.altMn} className="w-full h-full object-cover" />
          </div>
          <PhotoCredit photo={pagePhotos.chemicalStorage} language={language} cropped={pagePhotos.chemicalStorage.cropped} />
        </figure>
      </div>

      {/* Chemicals Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:hidden">
        {filteredChemicals.map((chem) => (
          <div
            key={chem.id}
            className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors"
          >
            <div>
              <ChemicalPicture id={chem.id} label={language === 'en' ? chem.nameEn : chem.nameMn} language={language} className="mb-4" />

              {/* Header with CAS & Formula */}
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs mb-2">
                <span className="text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                  <ChemText text={chem.formula} />
                </span>
                <span className="text-slate-500">
                  CAS {chem.casNumber}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900">
                {language === 'en' ? chem.nameEn : chem.nameMn}
              </h3>

              {/* GHS Pictograms tags */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {chem.pictograms.map((pic, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-[10px] font-semibold pl-1 pr-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200"
                  >
                    <GhsPictogram code={ghsCodeOf(pic)} className="w-6 h-6 shrink-0" />
                    {getPictogramLabel(pic, language)}
                  </span>
                ))}
                {chem.pictograms.length === 0 && (
                  <span className="text-[11px] font-medium text-slate-500">
                    {language === 'en' ? 'No GHS symbol' : 'GHS тэмдэггүй'}
                  </span>
                )}
              </div>

              {/* Risk Info */}
              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                {language === 'en' ? chem.riskInfoEn : chem.riskInfoMn}
              </p>

              {/* PPE Preview */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-700 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{t.chemicals.ppe}:</span>
                </div>
                <div className="text-[11px] text-slate-500 pl-5">
                  {(language === 'en' ? chem.ppeRequirementsEn : chem.ppeRequirementsMn).slice(0, 2).join(' · ')}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                {language === 'en' ? 'MW' : 'Мол. масс'}: {chem.molecularWeight ? `${chem.molecularWeight} ${language === 'en' ? 'g/mol' : 'г/моль'}` : 'N/A'}
              </span>
              <button
                onClick={() => setActiveSdsModal(chem)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition-colors border border-cyan-200"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{t.chemicals.viewSds}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Full Safety Data Sheet (SDS) Modal */}
      {activeSdsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs print:static print:block print:p-0 print:bg-white print:backdrop-blur-none">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl space-y-6 print:max-w-none print:max-h-none print:overflow-visible print:border-0 print:shadow-none print:p-0">
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs uppercase text-cyan-700 font-bold">
                  {language === 'en'
                    ? 'Safety Data Sheet Summary · Check the supplier’s full SDS'
                    : 'Аюулгүй ажиллагааны мэдээллийн хураангуй · Нийлүүлэгчийн бүрэн SDS-ийг шалгана уу'}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {language === 'en' ? activeSdsModal.nameEn : activeSdsModal.nameMn}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                  <span>{language === 'en' ? 'Formula' : 'Томьёо'}: <ChemText text={activeSdsModal.formula} /></span>
                  <span aria-hidden="true">·</span>
                  <span>CAS: {activeSdsModal.casNumber}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveSdsModal(null)}
                aria-label={language === 'en' ? 'Close' : 'Хаах'}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 print:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <ChemicalPicture
                id={activeSdsModal.id}
                label={language === 'en' ? activeSdsModal.nameEn : activeSdsModal.nameMn}
                language={language}
                className="w-full sm:w-44 shrink-0"
              />
              <div className="flex flex-wrap items-center gap-2">
                {activeSdsModal.pictograms.map((pic) => (
                  <GhsPictogram key={pic} code={ghsCodeOf(pic)} label={getPictogramLabel(pic, language)} className="w-16 h-16" />
                ))}
              </div>
            </div>

            {/* GHS Hazard statements */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {language === 'en' ? 'Hazard & Precautionary Statements (GHS)' : 'Аюул ба урьдчилан сэргийлэх мэдэгдэл (GHS)'}
              </h4>
              <ul className="space-y-1 text-xs text-rose-800">
                {activeSdsModal.ghsCodes.map((code, i) => (
                  <li key={i}>{getHazardStatement(code, language)}</li>
                ))}
              </ul>
            </div>

            {/* PPE */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-cyan-600" />
                <span>{t.chemicals.ppe}</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {(language === 'en' ? activeSdsModal.ppeRequirementsEn : activeSdsModal.ppeRequirementsMn).map((ppe, i) => (
                  <li key={i} className="p-2 rounded bg-slate-50 border border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                    <span>{ppe}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Storage */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <Archive className="w-4 h-4 text-amber-600" />
                <span>{t.chemicals.storage}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                {language === 'en' ? activeSdsModal.storageEn : activeSdsModal.storageMn}
              </p>
            </div>

            {/* Spill Response */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <Droplet className="w-4 h-4 text-blue-600" />
                <span>{t.chemicals.spill}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                {language === 'en' ? activeSdsModal.spillResponseEn : activeSdsModal.spillResponseMn}
              </p>
            </div>

            {/* First Aid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-rose-600" />
                <span>{t.chemicals.firstAid}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-rose-50/70 p-3 rounded-lg border border-rose-200 text-rose-950">
                {language === 'en' ? activeSdsModal.firstAidEn : activeSdsModal.firstAidMn}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 flex justify-end print:hidden">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Print SDS Summary / PDF' : 'SDS хураангуй хэвлэх / PDF'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
