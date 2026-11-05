import React, { useState } from 'react';
import { Language } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { pagePhotos } from '../data/pagePhotos';
import { PhotoCredit } from './PhotoCredit';
import { SafetyArt } from './art/SafetyArt';
import { SetupArt } from './art/SetupArt';
import { VisualBanner } from './art/VisualBanner';
import { LabCalculator } from './LabCalculator';
import { TitrationSimulator } from './TitrationSimulator';
import { ANALYTE_VOLUME, BASE_CONCENTRATION } from '../data/titrationModel';
import {
  Calculator,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Trash2,
  TrendingUp,
  Activity,
  Flame,
  HelpCircle
} from 'lucide-react';

interface ResultsAnalysisStudioProps {
  language: Language;
}

interface TitreTrial {
  id: string;
  initial: number;
  final: number;
  selectedForAverage: boolean;
}

export const ResultsAnalysisStudio: React.FC<ResultsAnalysisStudioProps> = ({ language }) => {
  const t = getTranslation(language);
  const [activeTab, setActiveTab] = useState<'simulator' | 'titration' | 'calorimetry' | 'kinetics' | 'uncertainty' | 'calculator'>('titration');
  const [simulatorUsed, setSimulatorUsed] = useState(false);

  // --- 1. Titration State ---
  const [trials, setTrials] = useState<TitreTrial[]>([
    { id: '1', initial: 0.00, final: 24.80, selectedForAverage: false }, // rough trial
    { id: '2', initial: 0.00, final: 24.35, selectedForAverage: true },
    { id: '3', initial: 0.00, final: 24.40, selectedForAverage: true },
  ]);
  const [knownConc, setKnownConc] = useState<number>(0.100);
  const [pipetteVol, setPipetteVol] = useState<number>(25.0);
  const [moleRatioAcid, setMoleRatioAcid] = useState<number>(1);
  const [moleRatioBase, setMoleRatioBase] = useState<number>(1);

  // --- 2. Calorimetry State ---
  const [massSoln, setMassSoln] = useState<number>(50.0);
  const [initialTemp, setInitialTemp] = useState<number>(20.5);
  const [finalTemp, setFinalTemp] = useState<number>(27.3);
  const [molesReacted, setMolesReacted] = useState<number>(0.0250);

  // --- 3. Uncertainty State ---
  const [measuredValue, setMeasuredValue] = useState<number>(24.35);
  const [apparatusError, setApparatusError] = useState<number>(0.05);
  const [numReadings, setNumReadings] = useState<number>(2);

  // Titration calculations
  const calculatedTrials = trials.map((t) => ({
    ...t,
    titre: Number((t.final - t.initial).toFixed(2)),
  }));

  const selectedTitres = calculatedTrials.filter((t) => t.selectedForAverage);
  const meanTitre =
    selectedTitres.length > 0
      ? Number(
          (
            selectedTitres.reduce((sum, item) => sum + item.titre, 0) /
            selectedTitres.length
          ).toFixed(2)
        )
      : 0;

  // Concordancy check (diff between min and max within selected is <= 0.10)
  const isConcordant =
    selectedTitres.length >= 2 &&
    Math.max(...selectedTitres.map((t) => t.titre)) -
      Math.min(...selectedTitres.map((t) => t.titre)) <=
      0.101;

  // Unknown concentration (c1 * V1 / n1 = c2 * V2 / n2)
  const unknownConc =
    pipetteVol > 0 && meanTitre > 0
      ? Number(
          ((knownConc * meanTitre * (moleRatioAcid / moleRatioBase)) / pipetteVol).toFixed(4)
        )
      : 0;

  // Calorimetry calculations: q = mcΔT
  const deltaT = Number((finalTemp - initialTemp).toFixed(2));
  const heatEnergyJ = Number((massSoln * 4.18 * deltaT).toFixed(1));
  const heatEnergyKJ = Number((heatEnergyJ / 1000).toFixed(3));
  const molarDeltaH =
    molesReacted > 0 ? Number((-heatEnergyKJ / molesReacted).toFixed(1)) : 0;

  // Percentage uncertainty calculation
  const percentageUncertainty =
    measuredValue > 0
      ? Number(((apparatusError * numReadings) / measuredValue * 100).toFixed(2))
      : 0;

  const handleAddTrial = () => {
    setTrials((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        initial: 0.00,
        final: 24.35,
        selectedForAverage: true,
      },
    ]);
  };

  // The first simulator run replaces the worked example and counts as the rough titre.
  const handleSimulatorTitre = (titre: number) => {
    setKnownConc(BASE_CONCENTRATION);
    setPipetteVol(ANALYTE_VOLUME);
    setMoleRatioAcid(1);
    setMoleRatioBase(1);
    setTrials((prev) => {
      const rows = simulatorUsed ? prev : [];
      return [...rows, { id: String(Date.now()), initial: 0, final: titre, selectedForAverage: rows.length > 0 }];
    });
    setSimulatorUsed(true);
  };

  const handleRemoveTrial = (id: string) => {
    if (trials.length <= 1) return;
    setTrials((prev) => prev.filter((t) => t.id !== id));
  };

  const handleUpdateTrial = (id: string, field: 'initial' | 'final', value: number) => {
    setTrials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const handleToggleAverage = (id: string) => {
    setTrials((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, selectedForAverage: !t.selectedForAverage } : t
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Top Banner and Tabs */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {language === 'en' ? 'Scientific Calculation Hub' : 'Тооцоолол ба шинжилгээний студи'}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.results.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.results.subtitle}
            </p>
          </div>

          {/* Tab Strip */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('titration')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'titration'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.results.titrationTab}
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'simulator'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'Virtual Titration' : 'Виртуал титрлэлт'}
            </button>
            <button
              onClick={() => setActiveTab('calorimetry')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'calorimetry'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.results.calorimetryTab}
            </button>
            <button
              onClick={() => setActiveTab('uncertainty')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'uncertainty'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.results.uncertaintyTab}
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'calculator'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'en' ? 'Calculator & Units' : 'Тооцоолуур, нэгж'}
            </button>
          </div>
        </div>
      </div>

      {/* Stays mounted so the unknown sample and titres survive a visit to the results table */}
      <div className={activeTab === 'simulator' ? '' : 'hidden'}>
        <TitrationSimulator
          language={language}
          active={activeTab === 'simulator'}
          onRecordTitre={handleSimulatorTitre}
          onShowResults={() => setActiveTab('titration')}
        />
      </div>

      {/* Stays mounted so the calculation survives a look at another tab */}
      <div className={activeTab === 'calculator' ? '' : 'hidden'}>
        <LabCalculator language={language} />
      </div>

      {/* TAB 1: TITRATION & CONCORDANCY */}
      {activeTab === 'titration' && (
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-xl overflow-hidden border border-slate-800 p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-3/5 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-pink-400 font-semibold">
                {language === 'en' ? 'Stoichiometric Equivalence Point' : 'Төгсгөлийн цэгийн өнгө хувирал'}
              </span>
              <h3 className="text-lg font-bold text-white">
                {language === 'en' ? 'Concordancy & Single-Drop Sensitivity' : 'Давтагдах чадвар ба Нэг дуслын мэдрэг чанар'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {language === 'en'
                  ? 'A burette dispenses ~0.05 cm³ per droplet. The endpoint is signaled by the first permanent color change that persists for over 30 seconds upon vigorous swirling.'
                  : 'Бюретка нь нэг дусалд ойролцоогоор 0.05 см³ уусмал дусаадаг. Конусан колбыг жигд эргүүлэн хутгаж, 30 секундээс дээш хугацаанд арилахгүй тогтвортой өнгө үүсэх агшинг төгсгөлийн цэг гэнэ.'}
              </p>
            </div>
            <figure className="w-full md:w-2/5 space-y-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-700 shadow-md">
                <img src={pagePhotos.titrationEndpoint.src} alt={language === 'en' ? pagePhotos.titrationEndpoint.altEn : pagePhotos.titrationEndpoint.altMn} className="w-full h-full object-cover" />
              </div>
              <PhotoCredit photo={pagePhotos.titrationEndpoint} language={language} cropped={pagePhotos.titrationEndpoint.cropped} className="text-slate-400" />
            </figure>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Burette Table (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {language === 'en' ? 'Burette Titre Readings' : 'Бюреткийн хэмжилтийн хүснэгт'}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.results.concordancyRule}
                </p>
              </div>

              <button
                onClick={handleAddTrial}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>{t.results.addTrial}</span>
              </button>
            </div>

            {/* Titre Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-xs text-left tabular-nums">
                <thead className="bg-slate-50 text-slate-700 uppercase text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="p-3">{language === 'en' ? 'Trial' : 'Туршилт'}</th>
                    <th className="p-3">{t.results.finalBurette}</th>
                    <th className="p-3">{t.results.initialBurette}</th>
                    <th className="p-3 font-bold text-cyan-900">{t.results.titre}</th>
                    <th className="p-3 text-center">{language === 'en' ? 'Include in Mean' : 'Дунджид оруулах'}</th>
                    <th className="p-3 text-right">{language === 'en' ? 'Action' : 'Үйлдэл'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {calculatedTrials.map((tr, index) => (
                    <tr key={tr.id} className={tr.selectedForAverage ? 'bg-cyan-50/30' : ''}>
                      <td className="p-3 font-semibold text-slate-900">
                        {index === 0
                          ? (language === 'en' ? 'Rough' : 'Барагцаа')
                          : (language === 'en' ? `Trial ${index}` : `Туршилт ${index}`)}
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          step="0.05"
                          value={tr.final}
                          onChange={(e) =>
                            handleUpdateTrial(tr.id, 'final', parseFloat(e.target.value) || 0)
                          }
                          className="w-20 px-2 py-1 bg-white border border-slate-300 rounded text-xs tabular-nums"
                        />
                      </td>
                      <td className="p-3">
                        <input
                          type="number"
                          step="0.05"
                          value={tr.initial}
                          onChange={(e) =>
                            handleUpdateTrial(tr.id, 'initial', parseFloat(e.target.value) || 0)
                          }
                          className="w-20 px-2 py-1 bg-white border border-slate-300 rounded text-xs tabular-nums"
                        />
                      </td>
                      <td className="p-3 font-bold text-cyan-900 text-sm tabular-nums">
                        {tr.titre.toFixed(2)}
                      </td>
                      <td className="p-3 text-center">
                        <input
                          type="checkbox"
                          checked={tr.selectedForAverage}
                          onChange={() => handleToggleAverage(tr.id)}
                          className="w-4 h-4 text-cyan-600 rounded border-slate-300 focus:ring-cyan-500 cursor-pointer"
                        />
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleRemoveTrial(tr.id)}
                          disabled={trials.length <= 1}
                          className="text-slate-400 hover:text-rose-600 disabled:opacity-30"
                        >
                          <Trash2 className="w-4 h-4 inline" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Concordancy notification */}
            <div
              className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                isConcordant
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-amber-50 border-amber-300 text-amber-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {isConcordant ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                )}
                <span>
                  {isConcordant
                    ? (language === 'en' ? 'Concordancy confirmed (within ±0.10 cm³)' : 'Тохирох титрүүд баталгаажлаа (±0.10 см³ зөрүүтэй)')
                    : (language === 'en' ? 'Select at least 2 titres within ±0.10 cm³ of each other' : 'Хоорондоо ±0.10 см³ зөрүүтэй 2-оос доошгүй титрийг сонгоно уу')}
                </span>
              </div>
              <span className="font-bold text-sm">
                {language === 'en' ? `Mean: ${meanTitre.toFixed(2)} cm³` : `Дундаж: ${meanTitre.toFixed(2)} см³`}
              </span>
            </div>
          </div>

          {/* Right Column: Stoichiometry & Unknown Concentration (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {language === 'en' ? 'Stoichiometry & Molar Concentration' : 'Стехиометр ба молийн концентраци'}
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  {language === 'en' ? 'Standard Solution Molarity (mol/dm³)' : 'Стандарт уусмалын моляр концентраци'}
                </label>
                <input
                  type="number"
                  step="0.001"
                  value={knownConc}
                  onChange={(e) => setKnownConc(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  {language === 'en' ? 'Pipetted Analyte Volume (cm³)' : 'Пипеткээр авсан уусмалын эзлэхүүн (см³)'}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={pipetteVol}
                  onChange={(e) => setPipetteVol(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">
                    {language === 'en' ? 'Reactant 1 Ratio' : 'Урвалж 1-ийн харьцаа'}
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={moleRatioAcid}
                    onChange={(e) => setMoleRatioAcid(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums text-xs"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">
                    {language === 'en' ? 'Reactant 2 Ratio' : 'Урвалж 2-ын харьцаа'}
                  </label>
                  <input
                    type="number"
                    step="1"
                    value={moleRatioBase}
                    onChange={(e) => setMoleRatioBase(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums text-xs"
                  />
                </div>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="p-4 rounded-lg bg-slate-900 text-white mt-4 space-y-2">
              <span className="text-[11px] text-cyan-400 uppercase tracking-wider">
                {language === 'en' ? 'Calculated Unknown Concentration' : 'Тооцоолсон үл мэдэгдэх концентраци'}
              </span>
              <div className="text-3xl font-bold text-white tabular-nums">
                {unknownConc.toFixed(4)} <span className="text-sm text-slate-400 font-normal">{language === 'en' ? 'mol/dm³' : 'моль/дм³'}</span>
              </div>
              <div className="text-[11px] text-slate-300 pt-2 border-t border-slate-800">
                {language === 'en'
                  ? 'Formula: c = (c_std × V_mean × ratio) / V_pipette'
                  : 'Томьёо: c = (c_стандарт × V_дундаж × харьцаа) / V_пипетк'}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}



      {/* TAB 2: CALORIMETRY & ENTHALPY */}
      {activeTab === 'calorimetry' && (
        <div className="space-y-6">
        <VisualBanner
          eyebrow={language === 'en' ? 'Thermochemistry' : 'Термохими'}
          title={language === 'en' ? 'Measuring Heat with a Cup Calorimeter' : 'Хөөсөнцөр аягаар дулаан хэмжих'}
          description={
            language === 'en'
              ? 'Insulate the reaction, record the highest temperature reached, then apply q = mcΔT.'
              : 'Урвалыг дулаан тусгаарлаж, хамгийн өндөр температурыг тэмдэглээд q = mcΔT томьёог хэрэглэнэ.'
          }
        >
          <SetupArt id="p3_1" label={language === 'en' ? 'Polystyrene cup calorimeter' : 'Хөөсөнцөр аяган калориметр'} />
        </VisualBanner>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              {language === 'en' ? 'Calorimeter Heat Transfer (q = mcΔT)' : 'Калориметрийн дулааны хэмжилт (q = mcΔT)'}
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  {language === 'en' ? 'Total Mass of Solution (m, grams)' : 'Уусмалын нийт масс (м, грамм)'}
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={massSoln}
                  onChange={(e) => setMassSoln(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">
                    {language === 'en' ? 'Initial Temperature T1 (°C)' : 'Эхний температур T1 (°C)'}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={initialTemp}
                    onChange={(e) => setInitialTemp(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 font-medium">
                    {language === 'en' ? 'Maximum Temperature T2 (°C)' : 'Хамгийн их температур T2 (°C)'}
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={finalTemp}
                    onChange={(e) => setFinalTemp(parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 mb-1 font-medium">
                  {language === 'en' ? 'Moles of Limiting Reactant (mol)' : 'Урвалд орсон моль хэмжээ (n)'}
                </label>
                <input
                  type="number"
                  step="0.001"
                  value={molesReacted}
                  onChange={(e) => setMolesReacted(parseFloat(e.target.value) || 0.001)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 text-white rounded-xl p-6 shadow-xs space-y-4">
            <span className="text-xs uppercase tracking-wider text-cyan-400">
              {language === 'en' ? 'Calorimetric Thermodynamic Output' : 'Термодинамикийн үр дүн'}
            </span>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-400">{language === 'en' ? 'ΔT (Temperature change)' : 'ΔT (Температурын өөрчлөлт)'}</div>
                <div className="text-2xl font-bold text-white tabular-nums">
                  {deltaT > 0 ? `+${deltaT}` : deltaT} <span className="text-xs text-slate-400">°C</span>
                </div>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                <div className="text-xs text-slate-400">{language === 'en' ? 'q (Heat released)' : 'q (Ялгарсан дулаан)'}</div>
                <div className="text-2xl font-bold text-white tabular-nums">
                  {heatEnergyKJ} <span className="text-xs text-slate-400">{language === 'en' ? 'kJ' : 'кЖ'}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-800/90 rounded-lg border border-slate-700 mt-4 space-y-1">
              <div className="text-xs text-cyan-400">{language === 'en' ? 'Molar Enthalpy Change (ΔH)' : 'Молийн энтальпийн өөрчлөлт (ΔH)'}</div>
              <div className="text-3xl font-bold text-white tabular-nums">
                {molarDeltaH > 0 ? `+${molarDeltaH}` : molarDeltaH} <span className="text-sm font-normal text-slate-400">{language === 'en' ? 'kJ/mol' : 'кЖ/моль'}</span>
              </div>
              <div className="text-xs text-slate-300 mt-1">
                {molarDeltaH < 0
                  ? (language === 'en' ? 'Exothermic Reaction (ΔH < 0)' : 'Экзотерм урвал (ΔH < 0)')
                  : (language === 'en' ? 'Endothermic Reaction (ΔH > 0)' : 'Эндотерм урвал (ΔH > 0)')}
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* TAB 3: UNCERTAINTY & ERROR ANALYSIS */}
      {activeTab === 'uncertainty' && (
        <div className="space-y-6">
        <VisualBanner
          eyebrow={language === 'en' ? 'Measurement Skill' : 'Хэмжилтийн чадвар'}
          title={language === 'en' ? 'Reading the Meniscus' : 'Менискийг зөв унших'}
          description={
            language === 'en'
              ? 'Read the bottom of the meniscus at eye level. Every reading carries the uncertainty of the apparatus.'
              : 'Менискийн доод ирмэгийг нүдний түвшнээс уншина. Заалт бүр багажийн алдааг агуулдаг.'
          }
        >
          <SafetyArt id="meniscus" label={language === 'en' ? 'Burette meniscus read at eye level' : 'Бюреткийн менискийг нүдний түвшнээс унших'} />
        </VisualBanner>
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {language === 'en' ? 'Cambridge AO3 Percentage Uncertainty Calculator' : 'Cambridge AO3 Хэмжилтийн алдааны тооцоолуур'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'en'
                ? 'Formula: (Apparatus Uncertainty × Number of Readings / Measured Value) × 100%'
                : 'Томьёо: (Багажийн алдаа × Уншилтын тоо / Хэмжсэн утга) × 100%'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-medium mb-1">
                {language === 'en' ? 'Measured Value' : 'Хэмжсэн утга'}
              </label>
              <input
                type="number"
                step="0.01"
                value={measuredValue}
                onChange={(e) => setMeasuredValue(parseFloat(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                {language === 'en' ? 'Apparatus Tolerance (±)' : 'Багажийн нарийвчлал (±)'}
              </label>
              <input
                type="number"
                step="0.005"
                value={apparatusError}
                onChange={(e) => setApparatusError(parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-medium mb-1">
                {language === 'en' ? 'No. of Readings' : 'Уншсан тоо'}
              </label>
              <input
                type="number"
                step="1"
                value={numReadings}
                onChange={(e) => setNumReadings(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg tabular-nums"
              />
            </div>
          </div>

          <div className="p-5 bg-slate-900 text-white rounded-xl text-center space-y-2">
            <span className="text-xs uppercase text-cyan-400">
              {language === 'en' ? 'Percentage Uncertainty' : 'Хувийн алдаа'}
            </span>
            <div className="text-4xl font-bold text-white tabular-nums">
              ±{percentageUncertainty}%
            </div>
            <p className="text-xs text-slate-400 pt-2">
              {percentageUncertainty < 1.0
                ? (language === 'en' ? 'Excellent precision (< 1.0% error)' : 'Маш өндөр нарийвчлал (< 1.0% алдаа)')
                : (language === 'en' ? 'Significant source of experimental error' : 'Туршилтын үр дүнд нөлөөлөхүйц алдаа')}
            </p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};
