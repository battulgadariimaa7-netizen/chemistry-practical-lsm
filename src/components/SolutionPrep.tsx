import React, { useState } from 'react';
import { Language, PrepJob, PrepLine } from '../types/chemistry';
import { getAmountLabel, getGhsName } from '../data/labLabels';
import {
  HazardCode,
  SolutionRecipe,
  allPracticals,
  findRecipe,
  hazardCodeGhs,
  isJobReady,
  jobReadyDate,
  jobTitle,
  linesFromLesson,
  newLine,
  solutionRecipes,
  todayText,
} from '../data/solutionRecipes';
import { ChemText } from './ChemText';
import { StaffCard } from './StaffCard';
import { GhsPictogram } from './art/GhsPictogram';
import { BellRing, BookOpen, CheckCircle2, ChevronDown, ClipboardCheck, FlaskConical, Plus, Send, Trash2 } from 'lucide-react';

const HazardCodes: React.FC<{ codes: HazardCode[]; language: Language }> = ({ codes, language }) => {
  if (codes.length === 0) {
    return <span className="text-[11px] text-slate-500">{language === 'en' ? 'No symbol listed' : 'Тэмдэг заагаагүй'}</span>;
  }
  return (
    <span className="inline-flex flex-wrap items-center gap-1">
      {codes.map((code) => {
        const ghs = hazardCodeGhs[code];
        const label = `${ghs}: ${getGhsName(ghs, language)}`;
        return (
          <span key={code} title={label}>
            <GhsPictogram code={ghs} label={label} className="w-7 h-7" />
          </span>
        );
      })}
    </span>
  );
};

const RecipeDetails: React.FC<{ recipe: SolutionRecipe; language: Language }> = ({ recipe, language }) => {
  const en = language === 'en';
  return (
    <div className="mt-2 p-3 rounded-lg bg-white border border-slate-200 space-y-2 text-xs text-slate-700">
      <div className="font-semibold text-slate-900">
        <ChemText text={en ? recipe.identityEn : recipe.identityMn} />
      </div>
      <p className="leading-relaxed"><ChemText text={en ? recipe.instructionsEn : recipe.instructionsMn} /></p>
      {recipe.careEn && (
        <p className="font-medium text-rose-800">
          {en ? 'Care' : 'Анхаар'}: {en ? recipe.careEn : recipe.careMn}
        </p>
      )}
    </div>
  );
};

interface SolutionPrepProps {
  language: Language;
  jobs: PrepJob[];
  onChangeJobs: React.Dispatch<React.SetStateAction<PrepJob[]>>;
}

export const SolutionPrep: React.FC<SolutionPrepProps> = ({ language, jobs, onChangeJobs }) => {
  const en = language === 'en';

  const [practicalId, setPracticalId] = useState('');
  const [neededOn, setNeededOn] = useState('');
  const [preparedBy, setPreparedBy] = useState('');
  const [draftLines, setDraftLines] = useState<(PrepLine & { included: boolean })[]>([]);
  const [customName, setCustomName] = useState('');
  const [openLineId, setOpenLineId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const lineName = (line: PrepLine) => (en ? line.nameEn : line.nameMn);
  const includedCount = draftLines.filter((line) => line.included).length;

  const handleChooseExperiment = (id: string) => {
    setPracticalId(id);
    const practical = allPracticals.find((item) => item.id === id);
    setDraftLines(practical ? linesFromLesson(practical).map((line) => ({ ...line, included: true })) : []);
  };

  const handleAddRecipe = (id: string) => {
    const recipe = findRecipe(id);
    if (!recipe) return;
    setDraftLines((lines) => [...lines, { ...newLine(recipe.nameEn, recipe.nameMn, recipe.id), included: true }]);
  };

  const handleAddCustom = () => {
    const name = customName.trim();
    if (!name) return;
    setDraftLines((lines) => [...lines, { ...newLine(name, name), included: true }]);
    setCustomName('');
  };

  const handleStart = (event: React.FormEvent) => {
    event.preventDefault();
    if (!practicalId || includedCount === 0) return;
    const job: PrepJob = {
      id: `prep-${Date.now()}`,
      practicalId,
      neededOn,
      preparedBy: preparedBy.trim(),
      createdOn: todayText(),
      lines: draftLines.filter((line) => line.included).map(({ included: _included, ...line }) => line),
    };
    onChangeJobs((current) => [job, ...current]);
    setPracticalId('');
    setNeededOn('');
    setDraftLines([]);
    setCustomName('');
  };

  // A job that is no longer complete needs the teacher to be told again when it is finished.
  const updateLine = (jobId: string, lineId: string, changes: Partial<PrepLine>) => {
    onChangeJobs((current) =>
      current.map((job) => {
        if (job.id !== jobId) return job;
        const next = { ...job, lines: job.lines.map((line) => (line.id === lineId ? { ...line, ...changes } : line)) };
        return isJobReady(next) ? next : { ...next, acknowledgedOn: undefined };
      })
    );
  };

  const handleMarkReadyToday = (job: PrepJob, line: PrepLine) => {
    const today = todayText();
    updateLine(job.id, line.id, { readyOn: today, startedOn: line.startedOn || today });
  };

  // There is no server, so the phone or computer's own sharing passes the message between devices.
  const handleShare = async (job: PrepJob) => {
    const title = jobTitle(job, language);
    const subject = en ? 'Practical ready' : 'Туршилт бэлэн боллоо';
    const text = en
      ? `The solutions for "${title}" were ready on ${jobReadyDate(job)}.${job.neededOn ? ` Lesson date: ${job.neededOn}.` : ''}`
      : `«${title}» туршилтын уусмал, бодис ${jobReadyDate(job)}-нд бэлэн боллоо.${job.neededOn ? ` Хичээлийн огноо: ${job.neededOn}.` : ''}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: subject, text });
        return;
      } catch (error) {
        if ((error as Error).name === 'AbortError') return;
      }
    }
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
  };

  const inputClass = 'w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500';

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* New preparation */}
        <StaffCard
          className="lg:col-span-5"
          icon={FlaskConical}
          title={en ? 'Start a Preparation' : 'Шинэ бэлтгэл эхлүүлэх'}
          subtitle={en
            ? 'Choose the practical. Its reagents come from the Practical Lessons section.'
            : 'Туршилтаа сонгоно уу. Хэрэгтэй урвалжийг «Туршилтын хичээл» хэсгээс авна.'}
          onSubmit={handleStart}
        >
          <div>
            <label htmlFor="prep-experiment" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'Practical' : 'Туршилт'}
            </label>
            <select id="prep-experiment" required value={practicalId} onChange={(event) => handleChooseExperiment(event.target.value)} className={inputClass}>
              <option value="">{en ? 'Select a practical' : 'Туршилт сонгоно уу'}</option>
              {allPracticals.map((practical) => (
                <option key={practical.id} value={practical.id}>{en ? practical.titleEn : practical.titleMn}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="prep-needed" className="block text-xs font-medium text-slate-700 mb-1">
                {en ? 'Lesson date' : 'Хичээлийн огноо'}
              </label>
              <input id="prep-needed" type="date" value={neededOn} onChange={(event) => setNeededOn(event.target.value)} className={inputClass} />
            </div>
            <div>
              <label htmlFor="prep-by" className="block text-xs font-medium text-slate-700 mb-1">
                {en ? 'Prepared by' : 'Бэлтгэсэн лаборант'}
              </label>
              <input id="prep-by" type="text" value={preparedBy} onChange={(event) => setPreparedBy(event.target.value)} className={inputClass} />
            </div>
          </div>

          {practicalId && (
            <div className="space-y-3">
              <fieldset>
                <legend className="text-xs font-medium text-slate-700 mb-1">{en ? 'To prepare' : 'Бэлтгэх уусмал, бодис'}</legend>
                <div className="space-y-1">
                  {draftLines.map((line) => {
                    const recipe = findRecipe(line.recipeId);
                    return (
                      <label key={line.id} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800">
                        <input
                          type="checkbox"
                          checked={line.included}
                          onChange={() =>
                            setDraftLines((lines) => lines.map((item) => (item.id === line.id ? { ...item, included: !item.included } : item)))
                          }
                          className="mt-0.5"
                        />
                        <span className="min-w-0">
                          <span className="font-medium">{lineName(line)}</span>
                          {line.amount && <span className="text-slate-500"> ({getAmountLabel(line.amount, language)})</span>}
                          {recipe && (
                            <span className="block text-[11px] text-cyan-800">
                              {en ? 'Standard recipe' : 'Стандарт заавар'}: <ChemText text={en ? recipe.identityEn : recipe.identityMn} />
                            </span>
                          )}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="prep-add-recipe" className="block text-xs font-medium text-slate-700 mb-1">
                  {en ? 'Add from the solution list' : 'Уусмалын жагсаалтаас нэмэх'}
                </label>
                <select
                  id="prep-add-recipe"
                  value=""
                  onChange={(event) => handleAddRecipe(event.target.value)}
                  className={inputClass}
                >
                  <option value="">{en ? 'Choose a solution' : 'Уусмал сонгоно уу'}</option>
                  {solutionRecipes.map((recipe) => (
                    <option key={recipe.id} value={recipe.id}>{en ? recipe.nameEn : recipe.nameMn}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="prep-add-custom" className="block text-xs font-medium text-slate-700 mb-1">
                  {en ? 'Add another solution' : 'Өөр уусмал нэмэх'}
                </label>
                <div className="flex gap-2">
                  <input
                    id="prep-add-custom"
                    type="text"
                    value={customName}
                    onChange={(event) => setCustomName(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        event.preventDefault();
                        handleAddCustom();
                      }
                    }}
                    className={inputClass}
                  />
                  <button
                    type="button"
                    onClick={handleAddCustom}
                    aria-label={en ? 'Add this solution' : 'Энэ уусмалыг нэмэх'}
                    className="px-3 rounded-lg border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={!practicalId || includedCount === 0}
            className="w-full py-2.5 px-4 bg-cyan-700 hover:bg-cyan-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold text-xs rounded-lg transition-colors"
          >
            {en ? 'Start preparation' : 'Бэлтгэл эхлүүлэх'}
          </button>
        </StaffCard>

        {/* Progress */}
        <StaffCard
          className="lg:col-span-7"
          icon={ClipboardCheck}
          tone="emerald"
          title={en ? 'Preparation Progress' : 'Бэлтгэлийн явц'}
          subtitle={en
            ? 'Record the dates for each solution. When all are ready, the teacher is notified.'
            : 'Уусмал бүрийн огноог тэмдэглэнэ. Бүгд бэлэн болоход багшид мэдэгдэл очно.'}
        >
          {jobs.length === 0 && (
            <p className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-600">
              {en ? 'No preparations yet. Start one with the form.' : 'Бэлтгэл одоогоор алга. Маягтаар шинээр эхлүүлнэ үү.'}
            </p>
          )}

          {jobs.map((job) => {
            const readyCount = job.lines.filter((line) => line.readyOn).length;
            const complete = isJobReady(job);
            return (
              <article
                key={job.id}
                className={`p-4 rounded-xl bg-white border border-slate-200 border-l-4 shadow-xs space-y-3 ${
                  complete ? 'border-l-emerald-500' : readyCount > 0 ? 'border-l-amber-400' : 'border-l-cyan-400'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <FlaskConical className="w-4 h-4 text-cyan-700 shrink-0" />
                      <span>{jobTitle(job, language)}</span>
                    </h4>
                    <div className="text-[11px] text-slate-500 mt-0.5 tabular-nums">
                      {job.neededOn && <span>{en ? 'Lesson date' : 'Хичээлийн огноо'}: {job.neededOn}</span>}
                      {job.neededOn && job.preparedBy && <span aria-hidden="true"> · </span>}
                      {job.preparedBy && <span>{en ? 'Prepared by' : 'Бэлтгэсэн'}: {job.preparedBy}</span>}
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700 tabular-nums">
                    {readyCount}/{job.lines.length} {en ? 'ready' : 'бэлэн'}
                  </span>
                </div>

                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={job.lines.length}
                  aria-valuenow={readyCount}
                  aria-label={en ? 'Solutions ready' : 'Бэлэн болсон уусмал'}
                  className="h-2 rounded-full bg-slate-100 overflow-hidden"
                >
                  <div className={`h-full ${complete ? 'bg-emerald-600' : 'bg-cyan-600'}`} style={{ width: `${(readyCount / job.lines.length) * 100}%` }} />
                </div>

                <ul className="space-y-2">
                  {job.lines.map((line) => {
                    const recipe = findRecipe(line.recipeId);
                    const wrongOrder = line.startedOn && line.readyOn && line.readyOn < line.startedOn;
                    return (
                      <li key={line.id} className="p-3 rounded-lg bg-slate-50/80 border border-slate-100 text-xs">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="min-w-0 font-medium text-slate-900">
                            {lineName(line)}
                            {line.amount && <span className="font-normal text-slate-500"> ({getAmountLabel(line.amount, language)})</span>}
                          </div>
                          <span
                            className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                              line.readyOn
                                ? 'bg-emerald-100 text-emerald-800'
                                : line.startedOn
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {line.readyOn
                              ? (en ? 'Ready' : 'Бэлэн')
                              : line.startedOn
                                ? (en ? 'In progress' : 'Бэлтгэж байна')
                                : (en ? 'Not started' : 'Эхлээгүй')}
                          </span>
                        </div>

                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] items-end gap-2">
                          <div>
                            <label htmlFor={`${line.id}-start`} className="block text-[11px] text-slate-600 mb-0.5">
                              {en ? 'Started on' : 'Эхэлсэн огноо'}
                            </label>
                            <input
                              id={`${line.id}-start`}
                              type="date"
                              value={line.startedOn}
                              onChange={(event) => updateLine(job.id, line.id, { startedOn: event.target.value })}
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label htmlFor={`${line.id}-ready`} className="block text-[11px] text-slate-600 mb-0.5">
                              {en ? 'Ready on' : 'Бэлэн болсон огноо'}
                            </label>
                            <input
                              id={`${line.id}-ready`}
                              type="date"
                              value={line.readyOn}
                              onChange={(event) => updateLine(job.id, line.id, { readyOn: event.target.value })}
                              className={inputClass}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => handleMarkReadyToday(job, line)}
                            className="px-3 py-2 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold transition-colors whitespace-nowrap"
                          >
                            {en ? 'Ready today' : 'Өнөөдөр бэлэн'}
                          </button>
                        </div>

                        {wrongOrder && (
                          <p className="mt-1.5 text-[11px] font-medium text-rose-700">
                            {en ? 'The ready date is before the start date.' : 'Бэлэн болсон огноо эхэлсэн огнооноос өмнө байна.'}
                          </p>
                        )}

                        {recipe && (
                          <div className="mt-2">
                            <button
                              type="button"
                              onClick={() => setOpenLineId(openLineId === line.id ? null : line.id)}
                              aria-expanded={openLineId === line.id}
                              className="inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-700 hover:text-cyan-800"
                            >
                              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openLineId === line.id ? 'rotate-180' : ''}`} />
                              <span>{en ? 'How to prepare' : 'Бэлтгэх заавар'}</span>
                            </button>
                            {openLineId === line.id && <RecipeDetails recipe={recipe} language={language} />}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {complete && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                    <div className="flex items-start gap-2 font-semibold">
                      {job.acknowledgedOn ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <BellRing className="w-4 h-4 shrink-0" />}
                      <span>
                        {job.acknowledgedOn
                          ? (en ? `Everything is ready. The teacher confirmed on ${job.acknowledgedOn}.` : `Бүгд бэлэн. Багш ${job.acknowledgedOn}-нд танилцсан.`)
                          : (en ? 'Everything is ready. The teacher has been notified on this device.' : 'Бүгд бэлэн. Энэ төхөөрөмж дээрх багшид мэдэгдэл очлоо.')}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleShare(job)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold rounded-lg bg-white border border-emerald-300 hover:bg-emerald-100 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{en ? 'Send to the teacher’s phone or email' : 'Багшийн утас, имэйл рүү илгээх'}</span>
                    </button>
                  </div>
                )}

                <div className="flex justify-end">
                  {confirmDeleteId === job.id ? (
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-700">{en ? 'Delete this preparation?' : 'Энэ бэлтгэлийг устгах уу?'}</span>
                      <button
                        type="button"
                        onClick={() => {
                          onChangeJobs((current) => current.filter((item) => item.id !== job.id));
                          setConfirmDeleteId(null);
                        }}
                        className="px-2.5 py-1 rounded-md bg-rose-700 hover:bg-rose-800 text-white font-semibold transition-colors"
                      >
                        {en ? 'Delete' : 'Устгах'}
                      </button>
                      <button type="button" onClick={() => setConfirmDeleteId(null)} className="px-2.5 py-1 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors">
                        {en ? 'Keep' : 'Болих'}
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmDeleteId(job.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-rose-700 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{en ? 'Delete preparation' : 'Бэлтгэлийг устгах'}</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </StaffCard>
      </div>

      {/* Solution list */}
      <StaffCard
        icon={BookOpen}
        title={en ? 'Solutions and How to Prepare Them' : 'Уусмалын жагсаалт, бэлтгэх заавар'}
        subtitle={en
          ? 'Hazard symbols follow the codes in the reagent table. Check the supplier’s SDS as well.'
          : 'Аюулын тэмдэг нь урвалжийн хүснэгтийн тэмдэглэгээг дагасан. Нийлүүлэгчийн SDS-ийг мөн шалгана уу.'}
      >
        <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
          <div className="hidden md:grid grid-cols-12 gap-3 px-4 py-2.5 bg-cyan-50 text-[11px] font-bold uppercase text-cyan-900">
            <div className="col-span-3">{en ? 'Solution' : 'Уусмал'}</div>
            <div className="col-span-2">{en ? 'Identity' : 'Найрлага'}</div>
            <div className="col-span-4">{en ? 'Instructions' : 'Бэлтгэх заавар'}</div>
            <div className="col-span-3">{en ? 'Hazards' : 'Аюул'}</div>
          </div>
          {solutionRecipes.map((recipe) => (
            <div key={recipe.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 px-4 py-3 text-xs text-slate-700 odd:bg-slate-50/60 hover:bg-cyan-50/40 transition-colors">
              <div className="md:col-span-3 font-bold text-slate-900">{en ? recipe.nameEn : recipe.nameMn}</div>
              <div className="md:col-span-2"><ChemText text={en ? recipe.identityEn : recipe.identityMn} /></div>
              <div className="md:col-span-4 leading-relaxed">
                <ChemText text={en ? recipe.instructionsEn : recipe.instructionsMn} />
                {recipe.careEn && (
                  <span className="block mt-1 font-medium text-rose-800">
                    {en ? 'Care' : 'Анхаар'}: {en ? recipe.careEn : recipe.careMn}
                  </span>
                )}
              </div>
              <div className="md:col-span-3 space-y-1.5">
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5">{en ? 'Prepared solution' : 'Бэлтгэсэн уусмал'}</div>
                  <HazardCodes codes={recipe.solutionCodes} language={language} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 mb-0.5">{en ? 'Starting substances' : 'Анхны бодис'}</div>
                  <HazardCodes codes={recipe.stockCodes} language={language} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </StaffCard>
    </div>
  );
};
