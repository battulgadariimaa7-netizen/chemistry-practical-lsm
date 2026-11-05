import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Language } from '../types/chemistry';
import {
  ANALYTE_VOLUME,
  AcidId,
  BASE_CONCENTRATION,
  BURETTE_CAPACITY,
  DROP_VOLUME,
  IndicatorId,
  acids,
  colorChangeVolume,
  equivalenceVolume,
  flaskPH,
  indicatorColor,
  indicators,
  randomUnknownConcentration,
} from '../data/titrationModel';
import { ArtFrame, Burette, ConicalFlask, Stand, colors, labelText } from './art/primitives';
import { CheckCircle2, Droplet, FlaskConical, RotateCcw, TableProperties, XCircle } from 'lucide-react';

interface TitrationSimulatorProps {
  language: Language;
  active: boolean;
  onRecordTitre: (titre: number) => void;
  onShowResults: () => void;
}

type Tap = 'closed' | 'slow' | 'fast';

const roundToDrop = (volume: number) => Math.round(volume / DROP_VOLUME) * DROP_VOLUME;

const CHART = { width: 520, height: 300, left: 42, right: 12, top: 12, bottom: 34 };
const chartX = (v: number) => CHART.left + (v / BURETTE_CAPACITY) * (CHART.width - CHART.left - CHART.right);
const chartY = (pH: number) => CHART.top + ((14 - pH) / 14) * (CHART.height - CHART.top - CHART.bottom);

export const TitrationSimulator: React.FC<TitrationSimulatorProps> = ({ language, active, onRecordTitre, onShowResults }) => {
  const en = language === 'en';
  const [acid, setAcid] = useState<AcidId>('hcl');
  const [indicator, setIndicator] = useState<IndicatorId>('phenolphthalein');
  const [concentration, setConcentration] = useState(randomUnknownConcentration);
  const [volume, setVolume] = useState(0);
  const [tap, setTap] = useState<Tap>('closed');
  const [flash, setFlash] = useState(false);
  const [titres, setTitres] = useState<number[]>([]);
  const [answer, setAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pH = flaskPH(acid, concentration, volume);
  const reading = volume.toFixed(2);
  const color = indicatorColor(indicator, pH);
  const flaskFill =
    color.alpha > 0.02 ? `rgba(${color.rgb.join(',')},${Math.max(color.alpha, 0.25).toFixed(2)})` : colors.water;

  const changeAt = useMemo(() => colorChangeVolume(acid, concentration, indicator), [acid, concentration, indicator]);

  // Near the end-point a drop shows the final colour for a moment before swirling mixes it away.
  const showDropFlash = (next: number) => {
    if (Math.abs(next - changeAt) > 2.5) return;
    setFlash(true);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(false), 240);
  };

  const addVolume = (amount: number) => {
    setVolume((prev) => {
      const next = Math.min(BURETTE_CAPACITY, roundToDrop(prev + amount));
      if (next >= BURETTE_CAPACITY) setTap('closed');
      showDropFlash(next);
      return next;
    });
  };

  useEffect(() => {
    if (tap === 'closed') return;
    const timer = setInterval(() => addVolume(tap === 'fast' ? 0.1 : DROP_VOLUME), tap === 'fast' ? 100 : 250);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tap, changeAt]);

  useEffect(() => {
    if (!active) setTap('closed');
  }, [active]);

  useEffect(() => () => {
    if (flashTimer.current) clearTimeout(flashTimer.current);
  }, []);

  const curve = useMemo(() => {
    const points: string[] = [];
    const steps = Math.max(1, Math.round(volume / 0.25));
    for (let i = 0; i <= steps; i++) {
      const v = (volume * i) / steps;
      points.push(`${chartX(v).toFixed(1)},${chartY(flaskPH(acid, concentration, v)).toFixed(1)}`);
    }
    return points.join(' ');
  }, [acid, concentration, volume]);

  const resetRun = () => {
    setTap('closed');
    setVolume(0);
    setFlash(false);
  };

  const handleAcidChange = (value: AcidId) => {
    setAcid(value);
    resetRun();
    setChecked(false);
  };

  const handleIndicatorChange = (value: IndicatorId) => {
    setIndicator(value);
    resetRun();
  };

  const handleRecord = () => {
    const titre = Number(volume.toFixed(2));
    setTitres((prev) => [...prev, titre]);
    onRecordTitre(titre);
    setNotice(
      en
        ? `Titre ${titre.toFixed(2)} cm³ added to the results table. The flask has been refilled for your next run.`
        : `${titre.toFixed(2)} см³ титр үр дүнгийн хүснэгтэд нэмэгдлээ. Дараагийн туршилтад колбыг дахин дүүргэлээ.`
    );
    resetRun();
  };

  const handleNewSample = () => {
    setConcentration(randomUnknownConcentration());
    setTitres([]);
    setAnswer('');
    setChecked(false);
    setNotice(null);
    resetRun();
  };

  const answerValue = parseFloat(answer);
  const answerCorrect = Math.abs(answerValue - concentration) / concentration <= 0.02;
  const veq = equivalenceVolume(concentration);
  const indicatorUnsuitable = Math.abs(changeAt - veq) > 0.3;

  const stepButton = 'px-3 py-2 text-xs font-semibold rounded-lg border transition-colors disabled:opacity-40 disabled:cursor-not-allowed';

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-1">
        <h3 className="text-base font-bold text-slate-900">
          {en ? 'Virtual Titration: Find the Unknown Acid Concentration' : 'Виртуал титрлэлт: Хүчлийн үл мэдэгдэх концентрацийг олох'}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          {en
            ? `${ANALYTE_VOLUME.toFixed(1)} cm³ of acid is in the flask and ${BASE_CONCENTRATION.toFixed(3)} mol/dm³ NaOH is in the burette. Add quickly at first, then drop by drop, stop at the first lasting colour change and record your titre. This is practice for the real titration, not a replacement for it.`
            : `Колбонд ${ANALYTE_VOLUME.toFixed(1)} см³ хүчил, бюреткэнд ${BASE_CONCENTRATION.toFixed(3)} моль/дм³ NaOH байна. Эхлээд хурдан, дараа нь дусал дуслаар нэмж, өнгө тогтвортой өөрчлөгдмөгц зогсоож титрээ тэмдэглэнэ. Энэ нь бодит титрлэлтийн бэлтгэл бөгөөд түүнийг орлохгүй.`}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Apparatus and controls */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <label className="block text-slate-600 font-medium">
              <span className="block mb-1">{en ? 'Acid in flask' : 'Колбон дахь хүчил'}</span>
              <select
                value={acid}
                onChange={(e) => handleAcidChange(e.target.value as AcidId)}
                className="w-full px-2 py-2 bg-slate-50 border border-slate-300 rounded-lg"
              >
                {(Object.keys(acids) as AcidId[]).map((id) => (
                  <option key={id} value={id}>{en ? acids[id].nameEn : acids[id].nameMn}</option>
                ))}
              </select>
            </label>
            <label className="block text-slate-600 font-medium">
              <span className="block mb-1">{en ? 'Indicator' : 'Индикатор'}</span>
              <select
                value={indicator}
                onChange={(e) => handleIndicatorChange(e.target.value as IndicatorId)}
                className="w-full px-2 py-2 bg-slate-50 border border-slate-300 rounded-lg"
              >
                {(Object.keys(indicators) as IndicatorId[]).map((id) => (
                  <option key={id} value={id}>{en ? indicators[id].nameEn : indicators[id].nameMn}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <ArtFrame label={en ? `Burette reading ${reading} cubic centimetres` : `Бюреткийн заалт ${reading} см³`}>
              <Stand x={60} y={172} top={6} baseWidth={130} />
              <Burette
                x={120}
                rodX={60}
                top={6}
                bottom={100}
                level={14 + (volume / BURETTE_CAPACITY) * 62}
                drop={tap !== 'closed'}
              />
              <rect x="74" y="164" width="92" height="8" fill="#f8fafc" />
              <ConicalFlask x={120} y={164} width={80} height={58} fill={flaskFill} level={0.5} />
              <ellipse
                cx="120"
                cy="154"
                rx="24"
                ry="7"
                fill={(() => {
                  const end = indicatorColor(indicator, flaskPH(acid, concentration, volume + 1));
                  return `rgb(${end.rgb.join(',')})`;
                })()}
                style={{ opacity: flash ? 0.85 : 0, transition: 'opacity 0.35s' }}
              />
              <rect x="152" y="14" width="78" height="44" rx="4" fill="#020617" stroke={colors.muted} />
              <text x="191" y="28" textAnchor="middle" {...labelText}>{en ? 'BURETTE' : 'БЮРЕТКА'}</text>
              <text className="tabular-nums" x="191" y="48" textAnchor="middle" fill="#4ade80" fontSize="15" fontWeight="700">
                {reading}
              </text>
              <rect x="170" y="66" width="60" height="30" rx="4" fill="#020617" stroke={colors.muted} />
              <text className="tabular-nums" x="200" y="86" textAnchor="middle" fill={colors.accent} fontSize="12" fontWeight="700">
                pH {pH.toFixed(2)}
              </text>
            </ArtFrame>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setTap(tap === 'fast' ? 'closed' : 'fast')}
              disabled={volume >= BURETTE_CAPACITY}
              className={`${stepButton} ${tap === 'fast' ? 'bg-cyan-700 text-white border-cyan-700' : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'}`}
            >
              {tap === 'fast' ? (en ? 'Close tap' : 'Хаах') : (en ? 'Open: fast' : 'Хурдан нээх')}
            </button>
            <button
              onClick={() => setTap(tap === 'slow' ? 'closed' : 'slow')}
              disabled={volume >= BURETTE_CAPACITY}
              className={`${stepButton} ${tap === 'slow' ? 'bg-cyan-700 text-white border-cyan-700' : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'}`}
            >
              {tap === 'slow' ? (en ? 'Close tap' : 'Хаах') : (en ? 'Open: slow' : 'Удаан нээх')}
            </button>
            <button
              onClick={() => addVolume(DROP_VOLUME)}
              disabled={tap !== 'closed' || volume >= BURETTE_CAPACITY}
              className={`${stepButton} bg-slate-900 text-white border-slate-900 hover:bg-slate-800 inline-flex items-center justify-center gap-1`}
            >
              <Droplet className="w-3.5 h-3.5 text-cyan-300" />
              <span>{en ? '1 drop' : '1 дусал'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleRecord}
              disabled={volume <= 0 || tap !== 'closed'}
              className={`${stepButton} bg-emerald-700 text-white border-emerald-700 hover:bg-emerald-800`}
            >
              {en ? 'Record this titre' : 'Титрийг тэмдэглэх'}
            </button>
            <button
              onClick={resetRun}
              className={`${stepButton} bg-white text-slate-700 border-slate-300 hover:bg-slate-50 inline-flex items-center justify-center gap-1`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{en ? 'Start this run again' : 'Дахин эхлэх'}</span>
            </button>
          </div>

          {volume >= BURETTE_CAPACITY && (
            <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-lg p-2">
              {en ? 'The burette is empty. You went far past the end-point: start this run again.' : 'Бюретка хоосорлоо. Төгсгөлийн цэгээс хэтэрсэн тул дахин эхэлнэ үү.'}
            </p>
          )}
          {notice && (
            <p role="status" className="text-xs text-emerald-900 bg-emerald-50 border border-emerald-200 rounded-lg p-2">{notice}</p>
          )}
        </div>

        {/* Curve and answer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
            <h4 className="text-sm font-bold text-slate-900 mb-2">{en ? 'pH curve of your titration' : 'Таны титрлэлтийн pH муруй'}</h4>
            <svg
              viewBox={`0 0 ${CHART.width} ${CHART.height}`}
              className="w-full h-auto"
              role="img"
              aria-label={en ? `pH ${pH.toFixed(2)} after ${reading} cubic centimetres of NaOH` : `${reading} см³ NaOH нэмсний дараа pH ${pH.toFixed(2)}`}
            >
              <rect
                x={chartX(0)}
                y={chartY(indicators[indicator].high)}
                width={chartX(BURETTE_CAPACITY) - chartX(0)}
                height={chartY(indicators[indicator].low) - chartY(indicators[indicator].high)}
                fill={`rgba(${indicatorColor(indicator, indicators[indicator].high).rgb.join(',')},0.16)`}
              />
              {[0, 2, 4, 6, 8, 10, 12, 14].map((p) => (
                <g key={p}>
                  <line x1={chartX(0)} x2={chartX(BURETTE_CAPACITY)} y1={chartY(p)} y2={chartY(p)} stroke="#e2e8f0" strokeWidth="1" />
                  <text x={chartX(0) - 6} y={chartY(p) + 3} textAnchor="end" fontSize="10" fill="#64748b">{p}</text>
                </g>
              ))}
              {[0, 10, 20, 30, 40, 50].map((v) => (
                <g key={v}>
                  <line x1={chartX(v)} x2={chartX(v)} y1={chartY(14)} y2={chartY(0)} stroke="#f1f5f9" strokeWidth="1" />
                  <text x={chartX(v)} y={chartY(0) + 14} textAnchor="middle" fontSize="10" fill="#64748b">{v}</text>
                </g>
              ))}
              <text x={(chartX(0) + chartX(BURETTE_CAPACITY)) / 2} y={CHART.height - 4} textAnchor="middle" fontSize="11" fill="#334155">
                {en ? 'Volume of NaOH added (cm³)' : 'Нэмсэн NaOH-ийн эзлэхүүн (см³)'}
              </text>
              <text x="10" y={(chartY(14) + chartY(0)) / 2} textAnchor="middle" fontSize="11" fill="#334155" transform={`rotate(-90 10 ${(chartY(14) + chartY(0)) / 2})`}>pH</text>
              {checked && (
                <line x1={chartX(veq)} x2={chartX(veq)} y1={chartY(14)} y2={chartY(0)} stroke="#0e7490" strokeWidth="1.5" strokeDasharray="4 3" />
              )}
              <polyline points={curve} fill="none" stroke="#0e7490" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx={chartX(volume)} cy={chartY(pH)} r="4" fill="#0e7490" />
            </svg>
            <p className="text-[11px] text-slate-500 mt-1">
              {en
                ? `Shaded band: ${indicators[indicator].nameEn} changes colour between pH ${indicators[indicator].low} and ${indicators[indicator].high}.`
                : `Сүүдэртэй муж: ${indicators[indicator].nameMn} pH ${indicators[indicator].low}–${indicators[indicator].high} хооронд өнгөө өөрчилнө.`}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                <FlaskConical className="w-4 h-4 text-cyan-600" />
                <span>{en ? 'Your titres' : 'Таны титрүүд'}</span>
              </h4>
              <button
                onClick={onShowResults}
                disabled={titres.length === 0}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:underline disabled:opacity-40 disabled:no-underline"
              >
                <TableProperties className="w-3.5 h-3.5" />
                <span>{en ? 'Open the results table' : 'Үр дүнгийн хүснэгт нээх'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-700">
              {titres.length === 0
                ? (en ? 'None recorded yet. Your first run counts as the rough titre.' : 'Одоогоор тэмдэглээгүй. Эхний туршилт нь барагцаа титр болно.')
                : titres.map((titre) => titre.toFixed(2)).join('  ·  ') + (en ? ' cm³' : ' см³')}
            </p>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <label className="block text-xs font-medium text-slate-700">
                {en ? 'Your calculated acid concentration (mol/dm³)' : 'Таны тооцоолсон хүчлийн концентраци (моль/дм³)'}
              </label>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="number"
                  step="0.001"
                  min="0"
                  value={answer}
                  onChange={(e) => { setAnswer(e.target.value); setChecked(false); }}
                  className="w-32 px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                />
                <button
                  onClick={() => setChecked(true)}
                  disabled={!answer || titres.length === 0}
                  className={`${stepButton} bg-slate-900 text-white border-slate-900 hover:bg-slate-800`}
                >
                  {en ? 'Check my answer' : 'Хариугаа шалгах'}
                </button>
                <button onClick={handleNewSample} className={`${stepButton} bg-white text-slate-700 border-slate-300 hover:bg-slate-50`}>
                  {en ? 'New unknown sample' : 'Шинэ сорьц'}
                </button>
              </div>
              {titres.length === 0 && (
                <p className="text-[11px] text-slate-500">{en ? 'Record at least one titre first.' : 'Эхлээд дор хаяж нэг титр тэмдэглэнэ үү.'}</p>
              )}
              {checked && (
                <div className={`p-3 rounded-lg border text-xs space-y-1 ${answerCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`}>
                  <div className="font-bold flex items-center gap-1.5">
                    {answerCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-amber-600" />}
                    <span>
                      {answerCorrect
                        ? (en ? 'Correct, within 2% of the true value.' : 'Зөв, жинхэнэ утгаас 2%-ийн дотор байна.')
                        : (en ? 'Not within 2% yet.' : '2%-ийн дотор хараахан ороогүй байна.')}
                    </span>
                  </div>
                  <p>
                    {en
                      ? `True concentration: ${concentration.toFixed(3)} mol/dm³. Equivalence point: ${veq.toFixed(2)} cm³. c = (${BASE_CONCENTRATION.toFixed(3)} × titre) ÷ ${ANALYTE_VOLUME.toFixed(1)}.`
                      : `Жинхэнэ концентраци: ${concentration.toFixed(3)} моль/дм³. Эквивалент цэг: ${veq.toFixed(2)} см³. c = (${BASE_CONCENTRATION.toFixed(3)} × титр) ÷ ${ANALYTE_VOLUME.toFixed(1)}.`}
                  </p>
                  {indicatorUnsuitable && (
                    <p>
                      {en
                        ? `${indicators[indicator].nameEn} changes colour near ${changeAt.toFixed(2)} cm³, away from the equivalence point, so it is a poor choice for this acid. Try phenolphthalein.`
                        : `${indicators[indicator].nameMn} ойролцоогоор ${changeAt.toFixed(2)} см³-т өнгөө өөрчилж, эквивалент цэгээс зөрдөг тул энэ хүчилд тохиромжгүй. Фенолфталеин хэрэглэж үзээрэй.`}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
