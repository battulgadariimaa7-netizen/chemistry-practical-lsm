import React, { useState } from 'react';
import { Language } from '../types/chemistry';
import { Bi, PaperPrepSpec, PrepMaterial, PrepUnit, benchDefaults, benchHowNaoh } from '../exams/examPrep';
import { HazardCode, findRecipe, hazardCodeGhs } from '../data/solutionRecipes';
import { getGhsName } from '../data/labLabels';
import { ChemText } from './ChemText';
import { GhsPictogram } from './art/GhsPictogram';
import { ChevronDown } from 'lucide-react';

// Shared by Exam Preparation and the task checklist in Exam Practice. Both keep their ticks under one key,
// so a line ticked in one place is ticked in the other. Saved in this browser only.

export const prepStorageKey = 'chem_lab_exam_prep';

export type ItemStatus = 'todo' | 'doing' | 'ready';

export interface ExamPrepState {
  candidates: number;
  examDate: string;
  preparedBy: string;
  /** Materials ("m:fa1") and bench reagents ("b:hcl"). */
  items: Record<string, { status: ItemStatus; on?: string }>;
  /** Apparatus ("a:burette50"), shared items ("x:litmus"), final checks ("c:labels") and, per task, "t2:a:burette50". */
  ticks: Record<string, boolean>;
  acknowledgedOn?: string;
}

export const blankState = (): ExamPrepState => ({ candidates: 12, examDate: '', preparedBy: '', items: {}, ticks: {} });

export interface BenchRow { key: string; label: string; amount: number; identity: Bi; how?: Bi; recipe?: string; hazards: HazardCode[] }

export const benchRows = (spec: PaperPrepSpec): BenchRow[] =>
  (Object.keys(benchDefaults) as (keyof typeof benchDefaults)[]).flatMap((key) => {
    const change = spec.bench?.find((b) => b.key === key);
    if (change?.omit) return [];
    const base = benchDefaults[key];
    const identity = change?.identity ?? base.identity;
    // Sodium hydroxide at 2.0 mol/dm³ has no standard recipe in the app, so its preparation is given here.
    const how = key === 'naoh' && !change?.identity ? benchHowNaoh : undefined;
    const recipe = key === 'naoh' && change?.identity ? 'aqueous_sodium_hydroxide' : base.recipe;
    return [{ key, label: base.label, amount: change?.amount ?? 10, identity, how, recipe, hazards: base.hazards }];
  });

// Totals for the candidates plus one set for the supervisor, with the extra the instructions ask for.
export const unitText = (unit: PrepUnit, en: boolean) => (unit === 'cm3' ? (en ? 'cm³' : 'см³') : unit === 'g' ? (en ? 'g' : 'г') : en ? 'pieces' : 'ширхэг');
export const totalText = (material: { amount: number; unit: PrepUnit }, sets: number, excess: number, en: boolean) => {
  const raw = material.amount * sets * (1 + excess / 100);
  if (material.unit === 'cm3') {
    if (raw >= 1000) return `${(Math.ceil(raw / 100) / 10).toFixed(1)} ${en ? 'dm³' : 'дм³'}`;
    return `${Math.ceil(raw / 10) * 10} ${unitText('cm3', en)}`;
  }
  if (material.unit === 'g') return `${raw < 10 ? (Math.ceil(raw * 10) / 10).toFixed(1) : Math.ceil(raw)} ${unitText('g', en)}`;
  return `${Math.ceil(raw)} ${unitText('piece', en)}`;
};
export const perCandidateText = (material: PrepMaterial, en: boolean) =>
  material.amountNote ? material.amountNote[en ? 'en' : 'mn'] : `${material.amount} ${unitText(material.unit, en)}`;

export const Hazards: React.FC<{ codes?: HazardCode[]; language: Language }> = ({ codes, language }) =>
  codes && codes.length > 0 ? (
    <span className="inline-flex flex-wrap items-center gap-1">
      {codes.map((code) => {
        const ghs = hazardCodeGhs[code];
        const label = `[${code}] ${getGhsName(ghs, language)}`;
        return <span key={code} title={label}><GhsPictogram code={ghs} label={label} className="w-6 h-6" /></span>;
      })}
    </span>
  ) : null;

export const Bar: React.FC<{ done: number; total: number; label: string }> = ({ done, total, label }) => (
  <div role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} className="h-2 rounded-full bg-slate-100 overflow-hidden">
    <div className={`h-full ${done === total ? 'bg-emerald-600' : 'bg-cyan-600'}`} style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
  </div>
);

/** «How to prepare», folded away until asked for, and always shown on paper. Opens by itself unless `open` is given. */
export const PrepDetails: React.FC<{ how?: Bi; recipeId?: string; language: Language; open?: boolean; onToggle?: () => void }> = ({ how, recipeId, language, open, onToggle }) => {
  const [ownOpen, setOwnOpen] = useState(false);
  const isOpen = open ?? ownOpen;
  const en = language === 'en';
  const recipe = findRecipe(recipeId);
  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => (onToggle ? onToggle() : setOwnOpen(!ownOpen))}
        aria-expanded={isOpen}
        className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 hover:text-cyan-800 print:hidden"
      >
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        <span>{en ? 'How to prepare' : 'Бэлтгэх заавар'}</span>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} print:block mt-1.5 p-3 rounded-lg bg-white border border-slate-200 space-y-1.5 text-xs text-slate-700 leading-relaxed`}>
        {how && <p><ChemText text={how[language]} /></p>}
        {recipe && (
          <p>
            <span className="font-semibold text-cyan-800">{en ? 'Standard recipe' : 'Стандарт заавар'} ({en ? recipe.nameEn : recipe.nameMn}, <ChemText text={en ? recipe.identityEn : recipe.identityMn} />): </span>
            <ChemText text={en ? recipe.instructionsEn : recipe.instructionsMn} />
          </p>
        )}
      </div>
    </div>
  );
};
