import React, { useState } from 'react';
import { Language } from '../types/chemistry';
import { SAFETY_QUESTION_COUNT, SafetyQuestion, pickSafetyQuestions, safetySlides } from '../exams/examSafety';
import { SlideViewer } from './SlideViewer';
import { BookOpen, CheckCircle2, ClipboardCheck, LockOpen, RefreshCw, ShieldCheck, XCircle } from 'lucide-react';

// Before a student opens an exam paper, they read the lab safety rules slide by slide and answer three
// questions about them. All three must be right. With `review`, only the slides are shown, to read again.

interface ExamSafetyGateProps {
  language: Language;
  /** Called when all the questions are answered correctly. */
  onPassed?: () => void;
  /** Only the slides, without the questions. */
  review?: boolean;
}

export const ExamSafetyGate: React.FC<ExamSafetyGateProps> = ({ language, onPassed, review = false }) => {
  const en = language === 'en';
  const total = safetySlides.length;
  const [slide, setSlide] = useState(0);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));
  const [step, setStep] = useState<'read' | 'quiz'>('read');
  const [questions, setQuestions] = useState<SafetyQuestion[]>(() => pickSafetyQuestions());
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);

  const goTo = (index: number) => {
    setSlide(index);
    setSeen((prev) => new Set(prev).add(index));
  };
  const allSeen = seen.size === total;

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const wrong = checked ? questions.filter((q) => answers[q.id] !== q.correct) : [];
  const passed = checked && wrong.length === 0;

  const newQuestions = () => {
    setQuestions(pickSafetyQuestions());
    setAnswers({});
    setChecked(false);
  };
  const backToSlide = (number: number) => {
    setStep('read');
    goTo(number - 1);
  };

  const stepClass = (active: boolean, done: boolean) =>
    `flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold border ${
      done ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : active ? 'bg-cyan-50 border-cyan-300 text-cyan-900' : 'bg-white border-slate-200 text-slate-500'
    }`;

  return (
    <div className="max-w-4xl mx-auto w-full p-3 sm:p-6 space-y-4">
      {!review && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-start gap-3">
            <span className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0"><ShieldCheck className="w-5 h-5" /></span>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">{en ? 'Lab Safety Before the Task' : 'Даалгаврын өмнөх аюулгүй ажиллагаа'}</h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {en
                  ? `Read every slide of the lab safety rules, then answer ${SAFETY_QUESTION_COUNT} questions. The exam task opens when all of them are right.`
                  : `Лабораторийн аюулгүй ажиллагааны дүрмийн слайд бүрийг уншаад ${SAFETY_QUESTION_COUNT} асуултад хариулна. Бүгдийг нь зөв хариулбал даалгавар нээгдэнэ.`}
              </p>
            </div>
          </div>
          <ol className="flex flex-wrap gap-2" aria-label={en ? 'Steps' : 'Алхам'}>
            <li className={stepClass(step === 'read', allSeen)}><BookOpen className="w-3.5 h-3.5" />{en ? `1. Read the rules (${seen.size}/${total})` : `1. Дүрэм унших (${seen.size}/${total})`}</li>
            <li className={stepClass(step === 'quiz', passed)}><ClipboardCheck className="w-3.5 h-3.5" />{en ? `2. ${SAFETY_QUESTION_COUNT} questions` : `2. ${SAFETY_QUESTION_COUNT} асуулт`}</li>
            <li className={stepClass(false, false)}><LockOpen className="w-3.5 h-3.5" />{en ? '3. The task opens' : '3. Даалгавар нээгдэнэ'}</li>
          </ol>
        </div>
      )}

      {step === 'read' && (
        <SlideViewer
          slides={safetySlides}
          language={language}
          slide={slide}
          onSlide={goTo}
          seen={seen}
          note={en ? 'The safety slides are in Mongolian, as the school wrote them.' : undefined}
        >
          {!review && (
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-slate-600">
                {allSeen
                  ? (en ? 'You have read every slide.' : 'Бүх слайдыг уншлаа.')
                  : (en ? `The questions open after every slide is read (${seen.size}/${total}).` : `Бүх слайдыг уншсаны дараа асуулт нээгдэнэ (${seen.size}/${total}).`)}
              </span>
              <button
                type="button"
                onClick={() => setStep('quiz')}
                disabled={!allSeen}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>{en ? 'Answer the questions' : 'Асуултад хариулах'}</span>
              </button>
            </div>
          )}
        </SlideViewer>
      )}

      {step === 'quiz' && !review && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          {questions.map((q, number) => {
            const isWrong = checked && answers[q.id] !== q.correct;
            return (
              <fieldset key={q.id} className="space-y-1.5">
                <legend className="text-sm font-semibold text-slate-900 mb-1">{number + 1}. {q.question[language]}</legend>
                {q.options.map((option, index) => {
                  const chosen = answers[q.id] === index;
                  let tone = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
                  if (checked && chosen) tone = index === q.correct ? 'bg-emerald-50 border-emerald-400 text-emerald-950' : 'bg-rose-50 border-rose-400 text-rose-950';
                  else if (chosen) tone = 'bg-cyan-100 border-cyan-500 text-cyan-950';
                  return (
                    <label key={index} className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${tone}`}>
                      <input type="radio" name={`safety-${q.id}`} checked={chosen} disabled={checked} onChange={() => setAnswers((prev) => ({ ...prev, [q.id]: index }))} className="mt-0.5" />
                      <span className="flex-1">{option[language]}</span>
                      {checked && chosen && (index === q.correct ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <XCircle className="w-4 h-4 text-rose-600 shrink-0" />)}
                    </label>
                  );
                })}
                {isWrong && (
                  <p className="text-[11px] text-rose-800 flex flex-wrap items-center gap-1.5 pl-1">
                    <span>{en ? `Not right. The answer is on slide ${q.slide}.` : `Буруу байна. Хариулт нь ${q.slide}-р слайдад байгаа.`}</span>
                    <button type="button" onClick={() => backToSlide(q.slide)} className="font-semibold underline underline-offset-2 hover:text-rose-950">
                      {en ? 'Read it again' : 'Дахин унших'}
                    </button>
                  </p>
                )}
              </fieldset>
            );
          })}

          {!checked && (
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setChecked(true)}
                disabled={!allAnswered}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-cyan-700 text-white hover:bg-cyan-800 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
              >
                {en ? 'Check my answers' : 'Хариултаа шалгах'}
              </button>
              <button type="button" onClick={() => setStep('read')} className="px-4 py-2.5 text-xs font-semibold rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors">
                {en ? 'Back to the slides' : 'Слайд руу буцах'}
              </button>
            </div>
          )}

          {checked && (
            <div role="status" className={`p-4 rounded-xl border space-y-3 ${passed ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`}>
              <p className="text-sm font-bold">
                {passed
                  ? (en ? `All ${SAFETY_QUESTION_COUNT} answers are right. The task is open.` : `${SAFETY_QUESTION_COUNT} асуултад бүгдэд нь зөв хариуллаа. Даалгавар нээгдлээ.`)
                  : (en
                      ? `${SAFETY_QUESTION_COUNT - wrong.length} of ${SAFETY_QUESTION_COUNT} right. Every answer must be right: read the slides again and answer new questions.`
                      : `${SAFETY_QUESTION_COUNT}-аас ${SAFETY_QUESTION_COUNT - wrong.length} зөв. Бүгдийг зөв хариулах ёстой: слайдаа дахин уншаад шинэ асуултад хариулна уу.`)}
              </p>
              {passed ? (
                <button type="button" onClick={onPassed} className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors">
                  <LockOpen className="w-3.5 h-3.5" />
                  <span>{en ? 'Go to the task' : 'Даалгавар руу нэвтрэх'}</span>
                </button>
              ) : (
                <button type="button" onClick={newQuestions} className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-700 text-white hover:bg-cyan-800 transition-colors">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{en ? 'New questions' : 'Шинэ асуулт'}</span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
