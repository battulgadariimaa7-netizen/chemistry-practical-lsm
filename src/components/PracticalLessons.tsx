import React, { useState } from 'react';
import { Language, PracticalExperiment, UserRole } from '../types/chemistry';
import { chaptersData } from '../data/chapters';
import { getAmountLabel, getEquipmentName, getGhsName, getHazardLabel, getHazardPictograms, needsSdsCheck } from '../data/labLabels';
import { practicalVisuals } from '../data/practicalVisuals';
import { useStoredState } from '../hooks/useStoredState';
import { ChemText } from './ChemText';
import { GhsPictogram } from './art/GhsPictogram';
import { SetupArt } from './art/SetupArt';
import { LessonEntryTest, PASS_PERCENT } from './LessonEntryTest';
import { pagePhotos, PagePhoto } from '../data/pagePhotos';
import { PhotoCredit } from './PhotoCredit';
import {
  BookOpen,
  Search,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  FileEdit,
  ArrowRight,
  Flame,
  Calculator,
  ChevronRight,
  SlidersHorizontal,
  Download,
  Lock,
  Printer
} from 'lucide-react';

// Practicals with a real photo; the rest use a drawn setup.
// 1.1 shows the salt that is heated, since no free photo of the crucible set-up was found; its note says so.
const setupPhotos: Record<string, PagePhoto> = {
  p1_1: pagePhotos.copperSulfate,
  p4_1: pagePhotos.titrationSetup,
};

const HazardPictograms: React.FC<{ hazard: string; language: Language; size?: string }> = ({ hazard, language, size = 'w-9 h-9' }) => {
  const codes = getHazardPictograms(hazard);
  if (codes.length === 0) {
    return (
      <span className="text-[11px] font-medium text-slate-500">
        {needsSdsCheck(hazard)
          ? (language === 'en' ? 'Check the SDS ·' : 'SDS-ийг шалгана уу ·')
          : (language === 'en' ? 'No GHS symbol ·' : 'GHS тэмдэггүй ·')}
      </span>
    );
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {codes.map((code) => (
        <span key={code} title={`${code}: ${getGhsName(code, language)}`}>
          <GhsPictogram code={code} label={`${code}: ${getGhsName(code, language)}`} className={size} />
        </span>
      ))}
    </span>
  );
};

interface PracticalLessonsProps {
  language: Language;
  role: UserRole;
  onSendToNotebook: (experiment: PracticalExperiment) => void;
  onTestPassed: () => void;
  onOpenSafetyRules: () => void;
}

export const PracticalLessons: React.FC<PracticalLessonsProps> = ({
  language,
  role,
  onSendToNotebook,
  onTestPassed,
  onOpenSafetyRules,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [selectedExperimentId, setSelectedExperimentId] = useState<string>('p1_1');
  const [levelFilter, setLevelFilter] = useState<'all' | 'AS Level' | 'A Level'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [testScores, setTestScores] = useStoredState<Record<string, number>>('chem_lab_lesson_test_scores', {});
  // A student who has just passed stays on the test to read the explanations, until they choose to go in.
  const [reviewingTestId, setReviewingTestId] = useState<string | null>(null);

  const isTestPassed = (practicalId: string) => (testScores[practicalId] ?? -1) >= PASS_PERCENT;
  const isStudent = role === 'student';
  const passedCount = chaptersData.flatMap((c) => c.practicals).filter((p) => isTestPassed(p.id)).length;
  const practicalCount = chaptersData.flatMap((c) => c.practicals).length;

  const currentChapter = chaptersData.find((c) => c.id === selectedChapterId) || chaptersData[0];
  const currentExperiment =
    currentChapter.practicals.find((p) => p.id === selectedExperimentId) ||
    currentChapter.practicals[0] ||
    chaptersData[0].practicals[0];
  const showTest = isStudent && (!isTestPassed(currentExperiment.id) || reviewingTestId === currentExperiment.id);
  const setupVisual = practicalVisuals[currentExperiment.id];
  const setupPhoto = setupPhotos[currentExperiment.id];

  const filteredChapters = chaptersData.filter((ch) => {
    if (levelFilter !== 'all' && ch.level !== levelFilter) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesChapter =
      ch.titleEn.toLowerCase().includes(q) ||
      ch.titleMn.toLowerCase().includes(q) ||
      ch.code.includes(q);
    const matchesPracticals = ch.practicals.some(
      (p) =>
        p.titleEn.toLowerCase().includes(q) ||
        p.titleMn.toLowerCase().includes(q) ||
        p.aimEn.toLowerCase().includes(q) ||
        p.aimMn.toLowerCase().includes(q)
    );
    return matchesChapter || matchesPracticals;
  });

  return (
    <div className="space-y-8">
      {/* Top Banner and Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'Cambridge 9701 Syllabus Practicals' : 'Cambridge 9701 Хөтөлбөрийн туршилтууд'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {language === 'en' ? '17 Practical Chapters' : 'Туршилтын 17 үндсэн бүлэг'}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {language === 'en'
                ? 'Written for the Cambridge 9701 syllabus. Every lesson follows the same 11-step method.'
                : 'Cambridge 9701 хөтөлбөрт зориулж бичсэн. Хичээл бүр ижил 11 алхамт аргачлалаар явагдана.'}
            </p>
            <p className="text-xs text-cyan-800 mt-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {language === 'en'
                  ? `Pre-practical tests passed: ${passedCount} of ${practicalCount}`
                  : `Туршилтын өмнөх тестэд тэнцсэн: ${practicalCount}-с ${passedCount}`}
              </span>
            </p>
          </div>

          {/* Level Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setLevelFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                levelFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'All (17 Chapters)' : 'Бүх 17 бүлэг'}
            </button>
            <button
              onClick={() => setLevelFilter('AS Level')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                levelFilter === 'AS Level'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'AS Level (Ch 01–10)' : 'AS Level (01–10)'}
            </button>
            <button
              onClick={() => setLevelFilter('A Level')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                levelFilter === 'A Level'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'A2 Level (Ch 11–17)' : 'A2 Level (11–17)'}
            </button>
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
                ? 'Filter chapters by topic (e.g. Enthalpy, Titration, Kinetics, Redox)...'
                : 'Туршилтын сэдвээр хайх (жишээ: Энтальпи, Титрлэлт, Кинетик)...'
            }
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Main Two-Column Console Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start print:block">
        {/* Left Column: Chapters Navigation List (4 cols) */}
        <div className="lg:col-span-4 space-y-2 max-h-[820px] overflow-y-auto pr-1 print:hidden">
          {filteredChapters.map((chapter) => {
            const isSelected = chapter.id === selectedChapterId;
            return (
              <div
                key={chapter.id}
                className={`rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-white border-cyan-600 shadow-xs ring-1 ring-cyan-600'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => {
                    setSelectedChapterId(chapter.id);
                    if (chapter.practicals.length > 0) {
                      setSelectedExperimentId(chapter.practicals[0].id);
                    }
                  }}
                  className="w-full p-3.5 text-left flex items-start gap-3"
                >
                  <span
                    className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-cyan-100 text-cyan-900'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {chapter.code}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 text-[11px] text-slate-400">
                      <span>{chapter.level}</span>
                      <span className="flex items-center gap-1">
                        {chapter.practicals.some((p) => isTestPassed(p.id)) ? (
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-emerald-600"
                            aria-label={language === 'en' ? 'Test passed' : 'Тестэд тэнцсэн'}
                          />
                        ) : isStudent && (
                          <Lock
                            className="w-3.5 h-3.5 text-slate-400"
                            aria-label={language === 'en' ? 'Opens after the test' : 'Тестийн дараа нээгдэнэ'}
                          />
                        )}
                        {chapter.practicals.length} {language === 'en' ? 'practical' : 'туршилт'}
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 truncate mt-0.5">
                      {language === 'en' ? chapter.titleEn : chapter.titleMn}
                    </div>
                  </div>
                </button>

                {/* Practicals sub-list */}
                {isSelected && (
                  <div className="border-t border-slate-100 px-3 py-2 bg-slate-50/50 space-y-1">
                    {chapter.practicals.map((prac) => {
                      const isPracSelected = prac.id === selectedExperimentId;
                      return (
                        <button
                          key={prac.id}
                          onClick={() => setSelectedExperimentId(prac.id)}
                          className={`w-full text-left p-2 rounded-md text-xs transition-colors flex items-center justify-between ${
                            isPracSelected
                              ? 'bg-cyan-700 text-white font-medium'
                              : 'text-slate-700 hover:bg-slate-200/60'
                          }`}
                        >
                          <span className="truncate">
                            {language === 'en' ? prac.titleEn : prac.titleMn}
                          </span>
                          <span className="text-[10px] ml-2 opacity-80 shrink-0">
                            {prac.paper}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep-Dive 11-Step Practical Guide (8 cols) */}
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6 print:border-0 print:shadow-none print:p-0">
          {/* Name line that only appears on the printed worksheet */}
          <div className="hidden print:flex items-center justify-between gap-6 text-xs text-slate-800">
            <span>{language === 'en' ? 'Student name' : 'Сурагчийн нэр'}: ______________________________</span>
            <span>{language === 'en' ? 'Date' : 'Огноо'}: ________________</span>
          </div>

          {/* Practical Title Header */}
          <div className="border-b border-slate-200 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2 text-xs text-cyan-700 uppercase">
                <span>{language === 'en' ? 'Chapter' : 'Бүлэг'} {currentChapter.code}</span>
                <span aria-hidden="true">·</span>
                <span>{currentExperiment.level} Level</span>
                <span aria-hidden="true">·</span>
                <span>{currentExperiment.paper}</span>
              </div>

              {!showTest && (
                <div className="flex flex-wrap items-center gap-2 print:hidden">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>{language === 'en' ? 'Print worksheet / PDF' : 'Ажлын хуудас хэвлэх / PDF'}</span>
                  </button>

                  {/* Send to Lab Notebook Button */}
                  <button
                    onClick={() => onSendToNotebook(currentExperiment)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors shadow-xs"
                  >
                    <FileEdit className="w-3.5 h-3.5 text-cyan-400" />
                    <span>
                      {language === 'en' ? 'Copy into Digital Lab Notebook' : 'Цахим дэвтэрт хуулах'}
                    </span>
                  </button>
                </div>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {language === 'en' ? currentExperiment.titleEn : currentExperiment.titleMn}
            </h2>
          </div>

          {showTest ? (
            <LessonEntryTest
              key={currentExperiment.id}
              language={language}
              practicalId={currentExperiment.id}
              onFinished={(percent) => {
                setTestScores((prev) => ({ ...prev, [currentExperiment.id]: Math.max(percent, prev[currentExperiment.id] ?? 0) }));
                if (percent >= PASS_PERCENT) {
                  setReviewingTestId(currentExperiment.id);
                  onTestPassed();
                }
              }}
              onEnterLesson={() => setReviewingTestId(null)}
              onOpenSafetyRules={onOpenSafetyRules}
            />
          ) : (
          <>
            {/* Practical Visual Showcase Banner */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-white p-4 sm:p-6 flex flex-col md:flex-row print:flex-row items-center gap-5">
              <div className="w-full md:w-3/5 print:w-3/5 space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-cyan-400 font-semibold">
                  {language === 'en' ? 'Standard Apparatus Setup' : 'Стандарт туршилтын угсралт'}
                </span>
                <h4 className="text-base font-bold text-white">
                  {language === 'en' ? setupVisual.titleEn : setupVisual.titleMn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {language === 'en' ? setupVisual.captionEn : setupVisual.captionMn}
                </p>
              </div>
              <figure className="w-full md:w-2/5 print:w-2/5 space-y-1">
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-700 shadow-md">
                  {setupPhoto ? (
                    <img
                      src={setupPhoto.src}
                      alt={language === 'en' ? setupPhoto.altEn : setupPhoto.altMn}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <SetupArt id={currentExperiment.id} label={language === 'en' ? setupVisual.titleEn : setupVisual.titleMn} />
                  )}
                </div>
                {setupPhoto?.noteEn && (
                  <p className="text-[11px] leading-snug text-slate-200">{language === 'en' ? setupPhoto.noteEn : setupPhoto.noteMn}</p>
                )}
                {setupPhoto && <PhotoCredit photo={setupPhoto} language={language} cropped={setupPhoto.cropped} className="text-slate-400" />}
              </figure>
            </div>

            {/* 1. Aim */}

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'en' ? '1. Aim & Scientific Objective' : '1. Туршилтын зорилго'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200">
                <ChemText text={language === 'en' ? currentExperiment.aimEn : currentExperiment.aimMn} />
              </p>
            </div>

            {/* 2. Theory */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'en' ? '2. Chemical Theory & Principles' : '2. Химийн онол, зарчим'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <ChemText text={language === 'en' ? currentExperiment.theoryEn : currentExperiment.theoryMn} />
              </p>
            </div>

            {/* 3 & 4. Reagents and Apparatus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Beaker className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{language === 'en' ? '3. Apparatus & Glassware' : '3. Багаж, шил сав'}</span>
                </h4>
                <ul className="space-y-1 text-xs text-slate-600">
                  {currentExperiment.equipmentIds.map((id) => (
                    <li key={id} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span className="text-[11px] text-slate-800">
                        {getEquipmentName(id, language)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'en' ? '4. Chemical Reagents' : '4. Химийн бодис, урвалж'}</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {currentExperiment.chemicals.map((chem, idx) => (
                    <li key={idx} className="border-b border-slate-200/70 pb-2.5 last:border-b-0 last:pb-0 break-inside-avoid">
                      <div className="font-medium text-slate-900">
                        {language === 'en' ? chem.name : chem.nameMn} ({getAmountLabel(chem.amount, language)})
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-cyan-800">
                        {chem.formula
                          ? <ChemText text={chem.formula} />
                          : <span className="text-xs font-medium text-slate-500">{language === 'en' ? 'No fixed formula' : 'Тогтмол томьёогүй'}</span>}
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <HazardPictograms hazard={chem.hazard} language={language} />
                        <span className="text-[11px] text-slate-700">
                          {getHazardLabel(chem.hazard, language)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. Safety Considerations */}
            <div className="p-4 rounded-lg bg-rose-50/70 border border-rose-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>{language === 'en' ? '5. Safety Considerations & Hazards' : '5. Аюулгүй ажиллагаа ба аюулын мэдээлэл'}</span>
              </h4>
              <ul className="space-y-1 text-xs text-rose-950">
                {(language === 'en' ? currentExperiment.safetyNotesEn : currentExperiment.safetyNotesMn).map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold">·</span>
                    <span><ChemText text={note} /></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Step-by-Step Procedure */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                {language === 'en' ? '6. Method & Experimental Procedure' : '6. Туршилтын арга, дараалал'}
              </h3>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-800">
                {(language === 'en' ? currentExperiment.procedureEn : currentExperiment.procedureMn).map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed"><ChemText text={step} /></span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 7. Expected Observations */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'en' ? '7. Expected Qualitative Observations' : '7. Хүлээгдэж буй чанарын ажиглалт'}
              </h3>
              <div className="space-y-1 text-xs text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {(language === 'en' ? currentExperiment.observationsEn : currentExperiment.observationsMn).map((obs, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                    <span><ChemText text={obs} /></span>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 & 9. Calculations & Formulas */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-cyan-600" />
                  <span>{language === 'en' ? '8 & 9. Quantitative Calculations & Formula' : '8 ба 9. Тоон тооцоолол ба томьёо'}</span>
                </h4>
                <span className="text-[11px] text-slate-500">
                  {language === 'en' ? 'Cambridge Paper 3 / 5 Specimen' : 'Cambridge Paper 3 / 5 загвар'}
                </span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-1 text-xs sm:text-sm font-medium text-slate-900 leading-relaxed">
                {(language === 'en' ? currentExperiment.calculationsTemplate.formulaEn : currentExperiment.calculationsTemplate.formulaMn)
                  .split(';')
                  .map((part) => part.trim())
                  .filter(Boolean)
                  .map((part) => (
                    <div key={part}><ChemText text={part} /></div>
                  ))}
              </div>

              <ol className="space-y-2 text-xs sm:text-sm text-slate-800">
                {currentExperiment.calculationsTemplate.steps.map((st, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-cyan-700 text-white text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed"><ChemText text={language === 'en' ? st.en : st.mn} /></span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 10. Scientific Conclusion */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                {language === 'en' ? '10. Scientific Conclusion' : '10. Шинжлэх ухааны дүгнэлт'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 bg-emerald-50/50 border border-emerald-200 p-3 rounded-lg">
                <ChemText text={language === 'en' ? currentExperiment.conclusionEn : currentExperiment.conclusionMn} />
              </p>
            </div>

            {/* 11. Evaluation and Error Analysis */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                {language === 'en'
                  ? '11. Evaluation, Error Sources & Improvements (AO3 Skills)'
                  : '11. Үнэлгээ, алдааны эх үүсвэр ба сайжруулалт (AO3 чадвар)'}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {(language === 'en' ? currentExperiment.evaluationEn : currentExperiment.evaluationMn).map((ev, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-semibold text-cyan-700">[{idx + 1}]</span>
                    <span><ChemText text={ev} /></span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk assessment table for the student to complete on paper */}
            <div className="hidden print:block space-y-2 break-inside-avoid">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {language === 'en' ? 'My Risk Assessment' : 'Миний эрсдэлийн үнэлгээ'}
              </h4>
              <table className="w-full text-xs border border-slate-400 border-collapse">
                <thead>
                  <tr>
                    <th className="border border-slate-400 p-1.5 text-left">{language === 'en' ? 'Substance' : 'Бодис'}</th>
                    <th className="border border-slate-400 p-1.5 text-left">{language === 'en' ? 'Hazard' : 'Аюул'}</th>
                    <th className="border border-slate-400 p-1.5 text-left w-1/2">{language === 'en' ? 'How I will control the risk' : 'Эрсдэлийг хэрхэн бууруулах вэ'}</th>
                  </tr>
                </thead>
                <tbody>
                  {currentExperiment.chemicals.map((chem, idx) => (
                    <tr key={idx}>
                      <td className="border border-slate-400 p-1.5">
                        <div>{language === 'en' ? chem.name : chem.nameMn}</div>
                        {chem.formula && <div className="font-semibold"><ChemText text={chem.formula} /></div>}
                      </td>
                      <td className="border border-slate-400 p-1.5">
                        <div className="flex flex-wrap items-center gap-1">
                          <HazardPictograms hazard={chem.hazard} language={language} size="w-6 h-6" />
                          <span>{getHazardLabel(chem.hazard, language)}</span>
                        </div>
                      </td>
                      <td className="border border-slate-400 p-1.5 h-9"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-800 pt-2">
                {language === 'en' ? 'Teacher approval (signature)' : 'Багшийн зөвшөөрөл (гарын үсэг)'}: ______________________________
              </p>
            </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
};
