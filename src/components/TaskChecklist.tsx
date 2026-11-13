import React from 'react';
import { Language } from '../types/chemistry';
import { PaperPrepSpec, apparatusNames, extraNames } from '../exams/examPrep';
import { QuestionPrep, questionPreps } from '../exams/examPrepQuestions';
import { ChemText } from './ChemText';
import { StaffCard } from './StaffCard';
import { Bar, ExamPrepState, Hazards, PrepDetails, benchRows, perCandidateText, totalText, unitText } from './prepParts';
import { CheckCircle2, ClipboardList, Printer } from 'lucide-react';

// The solutions, apparatus and glassware one question of a paper needs, ticked off line by line, so a single
// task can be set out for a class. The ticks are kept with the paper's preparation, with the task number in
// front of each key ("t2:a:burette50"), apart from the whole paper's own ticks.

interface TaskChecklistProps {
  spec: PaperPrepSpec;
  language: Language;
  state: ExamPrepState;
  onToggle: (key: string) => void;
  onTickAll: (keys: string[], value: boolean) => void;
  taskNo: number;
  onTaskNo: (q: number) => void;
  /** A student sees the FA labels, amounts and apparatus, but not the confidential identities, totals or recipes. */
  student?: boolean;
  onPrint?: () => void;
  /** Lets staff change the number of candidates the totals are for. */
  onCandidates?: (candidates: number) => void;
  className?: string;
}

const rowsOf = (spec: PaperPrepSpec, item: QuestionPrep) => ({
  materials: spec.materials.filter((m) => item.materials.includes(m.id)),
  bench: item.bench ? benchRows(spec) : [],
  apparatus: spec.apparatus.filter(([key]) => item.apparatus.includes(key)),
  extras: spec.extras.filter((key) => item.extras.includes(key)),
});

export const taskKeys = (spec: PaperPrepSpec, item: QuestionPrep) => {
  const rows = rowsOf(spec, item);
  return [
    ...rows.materials.map((m) => `t${item.q}:m:${m.id}`),
    ...rows.bench.map((b) => `t${item.q}:b:${b.key}`),
    ...rows.apparatus.map(([key]) => `t${item.q}:a:${key}`),
    ...rows.extras.map((key) => `t${item.q}:x:${key}`),
  ];
};

/** One line: the box and its text are one label, any details go below it. */
const TaskTick: React.FC<{ checked: boolean; onChange: () => void; children: React.ReactNode; details?: React.ReactNode }> = ({ checked, onChange, children, details }) => (
  <li className={`py-2 px-1 border-b border-slate-100 text-xs text-slate-800 break-inside-avoid ${checked ? 'bg-emerald-50/50' : ''}`}>
    <label className="flex items-start gap-2.5 cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} className="w-4 h-4 mt-0.5 shrink-0 accent-emerald-600" />
      <span className="flex-1 min-w-0">{children}</span>
    </label>
    {details && <div className="pl-7">{details}</div>}
  </li>
);

export const TaskChecklist: React.FC<TaskChecklistProps> = ({ spec, language, state, onToggle, onTickAll, taskNo, onTaskNo, student = false, onPrint, onCandidates, className = '' }) => {
  const en = language === 'en';
  const t = (text: { en: string; mn: string }) => text[language];
  const tasks = questionPreps[spec.paperId] ?? [];
  const task = tasks.find((item) => item.q === taskNo) ?? tasks[0];
  if (!task) return null;

  const sets = Math.max(1, state.candidates) + 1;
  const rows = rowsOf(spec, task);
  const keys = taskKeys(spec, task);
  const doneOf = (list: string[]) => list.filter((key) => state.ticks[key]).length;
  const done = doneOf(keys);
  const taskName = (q: number) => (en ? `Task ${q}` : `${q}-р даалгавар`);
  const others = (id: string) => tasks.filter((item) => item.q !== task.q && item.materials.includes(id)).map((item) => item.q);
  const heading = 'text-xs font-semibold text-slate-700 mb-1 mt-1';

  return (
    <StaffCard
      icon={ClipboardList}
      tone="emerald"
      className={className}
      title={en ? 'Checklist by Task' : 'Даалгавар тус бүрийн шалгах жагсаалт'}
      subtitle={student
        ? (en ? 'Before you start a task, check that everything below is on your bench.' : 'Даалгавар эхлэхээс өмнө доорх бүх зүйл ширээн дээр чинь байгаа эсэхийг шалгана.')
        : (en ? 'The solutions, apparatus and glassware each question needs, to set out a single task for a class.' : 'Асуулт бүрт хэрэгтэй уусмал, багаж, шил сав. Нэг даалгаврыг ангид тусад нь ажиллуулахад бэлтгэнэ.')}
      actions={
        <div className="flex flex-wrap items-center gap-3 print:hidden">
          <button type="button" onClick={() => onTickAll(keys, !keys.every((key) => state.ticks[key]))} className="text-[11px] font-semibold text-cyan-700 hover:text-cyan-800">
            {en ? 'Tick or clear all' : 'Бүгдийг тэмдэглэх / арилгах'}
          </button>
          {onPrint && (
            <button type="button" onClick={onPrint} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 transition-colors">
              <Printer className="w-3.5 h-3.5" />
              <span>{en ? 'Print this task' : 'Энэ даалгаврыг хэвлэх'}</span>
            </button>
          )}
        </div>
      }
    >
      <div className={`grid grid-cols-1 gap-2 print:hidden ${tasks.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {tasks.map((item) => {
          const itemKeys = taskKeys(spec, item);
          const itemDone = doneOf(itemKeys);
          const selected = item.q === task.q;
          return (
            <button
              key={item.q}
              type="button"
              aria-pressed={selected}
              onClick={() => onTaskNo(item.q)}
              className={`text-left p-3 rounded-xl border transition-colors ${selected ? 'border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500' : 'border-slate-200 bg-white hover:border-emerald-300'}`}
            >
              <span className="flex items-center justify-between gap-2 text-[11px] font-semibold text-emerald-800">
                <span>{taskName(item.q)}</span>
                <span className={`tabular-nums ${itemDone === itemKeys.length ? 'text-emerald-700' : 'text-slate-500'}`}>
                  {itemDone === itemKeys.length && <CheckCircle2 className="inline w-3.5 h-3.5 mr-1 -mt-0.5" />}
                  {itemDone}/{itemKeys.length}
                </span>
              </span>
              <span className="block mt-0.5 text-xs font-semibold text-slate-900"><ChemText text={t(item.title)} /></span>
            </button>
          );
        })}
      </div>
      <div className="hidden print:block text-sm font-semibold text-slate-900">
        {taskName(task.q)}: <ChemText text={t(task.title)} />
      </div>
      {onCandidates && (
        <div className="flex flex-wrap items-center gap-2 text-xs print:hidden">
          <label htmlFor={`task-candidates-${spec.paperId}`} className="font-medium text-slate-700">{en ? 'Number of candidates' : 'Сурагчийн тоо'}</label>
          <input
            id={`task-candidates-${spec.paperId}`}
            type="number"
            min={1}
            max={200}
            value={state.candidates}
            onChange={(event) => onCandidates(Math.max(1, Math.min(200, Number(event.target.value) || 1)))}
            className="w-20 px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500"
          />
          <span className="text-slate-500">{en ? `+ 1 set for the supervisor = ${sets} sets` : `+ хянагчийн 1 иж бүрдэл = ${sets} иж бүрдэл`}</span>
        </div>
      )}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-800">{taskName(task.q)} · {en ? (student ? 'checked' : 'set out') : (student ? 'шалгасан' : 'бэлэн')}</span>
          <span className="tabular-nums text-slate-600">{done}/{keys.length}</span>
        </div>
        <Bar done={done} total={keys.length} label={taskName(task.q)} />
      </div>

      <div>
        <div className={heading}>{en ? 'Solutions and materials' : 'Уусмал, бодис'}</div>
        <ul>
          {rows.materials.map((material) => {
            const key = `t${task.q}:m:${material.id}`;
            const also = others(material.id);
            // An FA code stands for a confidential substance, so its identity is not shown to a student.
            const hidden = student && /^FA \d+$/.test(material.label);
            return (
              <TaskTick key={key} checked={!!state.ticks[key]} onChange={() => onToggle(key)} details={student ? undefined : <PrepDetails how={material.how} recipeId={material.recipe} language={language} />}>
                <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 text-white font-mono text-[11px] font-bold">{material.label}</span>
                  {!hidden && <span className="font-semibold text-slate-900"><ChemText text={t(material.identity)} /></span>}
                  <Hazards codes={material.hazards} language={language} />
                </span>
                <span className="block mt-0.5 text-slate-600 tabular-nums">
                  {en ? 'Per candidate' : 'Нэг сурагчид'}: <strong className="text-slate-800">{perCandidateText(material, en)}</strong>
                  {!student && (
                    <>
                      <span aria-hidden="true"> · </span>
                      {en ? 'Total' : 'Нийт'}: <strong className="text-slate-800">{totalText(material, sets, spec.excess, en)}</strong>
                    </>
                  )}
                  {also.length > 0 && (
                    <span className="text-amber-800">
                      <span aria-hidden="true"> · </span>
                      {en ? `also in task ${also.join(', ')}` : `${also.join(', ')}-р даалгаварт мөн хэрэглэнэ`}
                    </span>
                  )}
                </span>
              </TaskTick>
            );
          })}
        </ul>
      </div>

      {rows.bench.length > 0 && (
        <div>
          <div className={heading}>{en ? 'Bench reagents' : 'Ширээний урвалж'}</div>
          <ul>
            {rows.bench.map((row) => {
              const key = `t${task.q}:b:${row.key}`;
              return (
                <TaskTick key={key} checked={!!state.ticks[key]} onChange={() => onToggle(key)} details={student ? undefined : <PrepDetails how={row.how} recipeId={row.recipe} language={language} />}>
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-semibold text-slate-900">{row.label}</span>
                    <span className="text-slate-600"><ChemText text={t(row.identity)} /></span>
                    <Hazards codes={row.hazards} language={language} />
                  </span>
                  <span className="block mt-0.5 text-slate-600 tabular-nums">
                    {en ? 'Per candidate' : 'Нэг сурагчид'}: <strong className="text-slate-800">{row.amount} {unitText('cm3', en)}</strong>
                    {!student && (
                      <>
                        <span aria-hidden="true"> · </span>
                        {en ? 'Total' : 'Нийт'}: <strong className="text-slate-800">{totalText({ amount: row.amount, unit: 'cm3' }, sets, spec.excess, en)}</strong>
                      </>
                    )}
                  </span>
                </TaskTick>
              );
            })}
          </ul>
        </div>
      )}

      <div>
        <div className={heading}>
          {student
            ? (en ? 'Apparatus and glassware' : 'Багаж, шил сав')
            : (en ? `Apparatus and glassware (${sets} sets)` : `Багаж, шил сав (${sets} иж бүрдэл)`)}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
          {rows.apparatus.map(([key, quantity]) => {
            const tick = `t${task.q}:a:${key}`;
            return (
              <TaskTick key={tick} checked={!!state.ticks[tick]} onChange={() => onToggle(tick)}>
                <span className="flex items-start justify-between gap-2">
                  <span className="min-w-0"><ChemText text={t(apparatusNames[key])} /></span>
                  <span className="tabular-nums text-slate-500 whitespace-nowrap">
                    {student ? <>× <strong className="text-slate-800">{quantity}</strong></> : <>{quantity} × {sets} = <strong className="text-slate-800">{quantity * sets}</strong></>}
                  </span>
                </span>
              </TaskTick>
            );
          })}
        </ul>
      </div>

      <div>
        <div className={heading}>{en ? 'Shared items' : 'Нийтийн хэрэгсэл'}</div>
        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
          {rows.extras.map((key) => {
            const tick = `t${task.q}:x:${key}`;
            return (
              <TaskTick key={tick} checked={!!state.ticks[tick]} onChange={() => onToggle(tick)}>
                <ChemText text={t(extraNames[key])} />
              </TaskTick>
            );
          })}
        </ul>
      </div>

      <p className="text-[11px] text-slate-500 leading-relaxed">
        {student
          ? (en ? 'If anything is missing, ask your teacher or the lab staff before you start.' : 'Аль нэг зүйл дутуу байвал эхлэхээсээ өмнө багш эсвэл лаборантаас асуугаарай.')
          : en
            ? 'Sorted from the question paper’s text. Items the paper does not name in any question, such as the wash bottle or a spare beaker, are under every task, and the bench reagents are with the qualitative analysis. Amounts are the instructions’ amounts per candidate, so a solution used in two tasks is counted once. Check against the printed instructions.'
            : 'Асуултын хуудасны текстээс ангилсан. Аль ч асуултад нэрлэгдээгүй хэрэгсэл (угаагч сав, нөөц стакан гэх мэт) бүх даалгаварт, ширээний урвалж чанарын шинжилгээний даалгаварт орсон. Хэмжээ нь зааварт нэг сурагчид заасан хэмжээ тул хоёр даалгаварт хэрэглэх уусмалыг нэг л удаа тоолно. Хэвлэмэл зааврыг тулгаж шалгана уу.'}
      </p>
    </StaffCard>
  );
};
