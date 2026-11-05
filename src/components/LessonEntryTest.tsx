import React, { useState } from 'react';
import { Language, QuizQuestion } from '../types/chemistry';
import { practicalQuizzes } from '../data/practicalQuizzes';
import { safetyQuizQuestions } from '../data/quizQuestions';
import { ChemText } from './ChemText';
import { ArrowRight, Award, CheckCircle2, RefreshCw, ShieldCheck, XCircle } from 'lucide-react';

export const PASS_PERCENT = 85;

interface LessonEntryTestProps {
  language: Language;
  practicalId: string;
  onFinished: (percent: number) => void;
  onEnterLesson: () => void;
  onOpenSafetyRules: () => void;
}

export const LessonEntryTest: React.FC<LessonEntryTestProps> = ({ language, practicalId, onFinished, onEnterLesson, onOpenSafetyRules }) => {
  const en = language === 'en';
  const groups = [
    { id: 'safety', titleEn: 'Laboratory safety', titleMn: 'Аюулгүй ажиллагаа', questions: safetyQuizQuestions },
    { id: 'practical', titleEn: 'This practical', titleMn: 'Энэ туршилт', questions: practicalQuizzes[practicalId] ?? [] },
  ];
  const all = groups.flatMap((group) => group.questions.map((question) => ({ key: `${group.id}-${question.id}`, question })));
  const neededCorrect = Math.ceil((all.length * PASS_PERCENT) / 100);

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const correct = all.filter(({ key, question }) => answers[key] === question.correctIndex).length;
  const percent = (correct / all.length) * 100;
  const passed = percent >= PASS_PERCENT;
  const allAnswered = all.every(({ key }) => answers[key] !== undefined);

  const handleSubmit = () => {
    setSubmitted(true);
    onFinished(percent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderQuestion = (key: string, question: QuizQuestion, number: number) => (
    <fieldset key={key} className="space-y-1.5">
      <legend className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">
        {number}. <ChemText text={en ? question.questionEn : question.questionMn} />
      </legend>
      {(en ? question.optionsEn : question.optionsMn).map((option, optionIndex) => {
        const chosen = answers[key] === optionIndex;
        const isCorrect = optionIndex === question.correctIndex;
        let tone = 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50';
        if (submitted && isCorrect) tone = 'bg-emerald-50 border-emerald-400 text-emerald-950';
        else if (submitted && chosen) tone = 'bg-rose-50 border-rose-400 text-rose-950';
        else if (chosen) tone = 'bg-cyan-100 border-cyan-500 text-cyan-950';
        return (
          <label key={optionIndex} className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs cursor-pointer transition-colors ${tone}`}>
            <input
              type="radio"
              name={key}
              checked={chosen}
              disabled={submitted}
              onChange={() => setAnswers((prev) => ({ ...prev, [key]: optionIndex }))}
              className="mt-0.5"
            />
            <span className="flex-1"><ChemText text={option} /></span>
            {submitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
            {submitted && chosen && !isCorrect && <XCircle className="w-4 h-4 text-rose-600 shrink-0" />}
          </label>
        );
      })}
      {submitted && (
        <p className="text-[11px] text-slate-600 pl-1">
          <ChemText text={en ? question.explanationEn : question.explanationMn} />
        </p>
      )}
    </fieldset>
  );

  let number = 0;
  return (
    <section className="space-y-5 print:hidden">
      <div className="p-4 rounded-xl bg-linear-to-br from-cyan-50 to-white border border-cyan-200">
        <h3 className="text-sm font-bold text-cyan-950 flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-700 shrink-0" />
          <span>{en ? 'Test Before the Practical' : 'Туршилтын өмнөх тест'}</span>
        </h3>
        <p className="text-xs text-cyan-950 mt-1 leading-relaxed">
          {en
            ? `Score above ${PASS_PERCENT}% to open this practical: at least ${neededCorrect} of ${all.length} answers correct.`
            : `Энэ туршилтын хичээлийг нээхийн тулд ${PASS_PERCENT}%-иас дээш оноо авна: ${all.length} асуултаас ${neededCorrect}-оос доошгүй зөв хариулт.`}
        </p>
      </div>

      {submitted && (
        <div
          role="status"
          className={`p-4 rounded-xl border space-y-3 ${passed ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-amber-300 text-amber-950'}`}
        >
          <p className="text-sm font-bold">
            {en ? 'Score' : 'Оноо'}: {correct}/{all.length} ({Math.round(percent)}%).{' '}
            {passed
              ? (en ? 'You passed. Your teacher still gives the final approval.' : 'Тэнцлээ. Эцсийн зөвшөөрлийг багш өгнө.')
              : (en ? `You need above ${PASS_PERCENT}%. Read the explanations and try again.` : `${PASS_PERCENT}%-д хүрсэнгүй. Тайлбарыг уншаад дахин оролдоно уу.`)}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {passed ? (
              <button
                onClick={onEnterLesson}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
              >
                <span>{en ? 'Open the practical' : 'Хичээл рүү орох'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <>
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{en ? 'Try again' : 'Дахин оролдох'}</span>
                </button>
                <button
                  onClick={onOpenSafetyRules}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{en ? 'Read the safety rules' : 'Аюулгүй ажиллагааны дүрэм унших'}</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {groups.map((group) => (
        <div key={group.id} className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5">
            {en ? group.titleEn : group.titleMn}
          </h4>
          {group.questions.map((question) => {
            number += 1;
            return renderQuestion(`${group.id}-${question.id}`, question, number);
          })}
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {en ? 'Check my answers' : 'Хариултаа шалгах'}
        </button>
      )}
    </section>
  );
};
