import React, { useRef, useState } from 'react';
import { Language } from '../types/chemistry';
import {
  CalcError,
  ConversionResult,
  GRAMS_PER_DM3,
  convertUnit,
  evaluateExpression,
  formatNumber,
  toExpressionText,
  unitCategories,
} from '../data/calculatorEngine';
import { ArrowLeftRight, Calculator, Ruler } from 'lucide-react';

interface CalcKey {
  label: React.ReactNode;
  insert?: string;
  action?: 'clear' | 'delete' | 'equals';
  kind: 'digit' | 'operator' | 'function' | 'clear' | 'equals';
  // After an answer, these keys carry on from it instead of starting a new calculation.
  continues?: boolean;
  aria?: { en: string; mn: string };
}

const digit = (value: string): CalcKey => ({ label: value, insert: value, kind: 'digit' });

const keys: CalcKey[] = [
  { label: '(', insert: '(', kind: 'function' },
  { label: ')', insert: ')', kind: 'function', continues: true },
  { label: <>x²</>, insert: '^2', kind: 'function', continues: true, aria: { en: 'Square', mn: 'Квадрат' } },
  { label: <>x<sup>y</sup></>, insert: '^', kind: 'function', continues: true, aria: { en: 'Power', mn: 'Зэрэг' } },
  { label: '√', insert: '√(', kind: 'function', aria: { en: 'Square root', mn: 'Квадрат язгуур' } },
  { label: 'log', insert: 'log(', kind: 'function', aria: { en: 'Logarithm base 10', mn: '10 суурьтай логарифм' } },
  { label: 'ln', insert: 'ln(', kind: 'function', aria: { en: 'Natural logarithm', mn: 'Натурал логарифм' } },
  { label: <>10<sup>x</sup></>, insert: '10^(', kind: 'function', aria: { en: '10 to the power x', mn: '10-ын x зэрэг' } },
  { label: <>e<sup>x</sup></>, insert: 'exp(', kind: 'function', aria: { en: 'e to the power x', mn: 'e-ийн x зэрэг' } },
  { label: 'x⁻¹', insert: '^-1', kind: 'function', continues: true, aria: { en: 'Reciprocal', mn: 'Урвуу утга' } },
  digit('7'),
  digit('8'),
  digit('9'),
  { label: '÷', insert: '÷', kind: 'operator', continues: true, aria: { en: 'Divide', mn: 'Хуваах' } },
  { label: 'DEL', action: 'delete', kind: 'clear', aria: { en: 'Delete', mn: 'Устгах' } },
  digit('4'),
  digit('5'),
  digit('6'),
  { label: '×', insert: '×', kind: 'operator', continues: true, aria: { en: 'Multiply', mn: 'Үржүүлэх' } },
  { label: 'AC', action: 'clear', kind: 'clear', aria: { en: 'Clear all', mn: 'Бүгдийг арилгах' } },
  digit('1'),
  digit('2'),
  digit('3'),
  { label: '−', insert: '−', kind: 'operator', continues: true, aria: { en: 'Subtract', mn: 'Хасах' } },
  { label: 'Ans', insert: 'Ans', kind: 'function', aria: { en: 'Previous answer', mn: 'Өмнөх хариу' } },
  digit('0'),
  digit('.'),
  { label: <>×10<sup>n</sup></>, insert: 'E', kind: 'function', aria: { en: 'Times ten to the power', mn: '10-ын зэргээр үржүүлэх' } },
  { label: '+', insert: '+', kind: 'operator', continues: true, aria: { en: 'Add', mn: 'Нэмэх' } },
  { label: '=', action: 'equals', kind: 'equals', aria: { en: 'Equals', mn: 'Тэнцүү' } },
];

const keyStyles: Record<CalcKey['kind'], string> = {
  digit: 'bg-white text-slate-900 border-slate-300 hover:bg-slate-50 text-base font-semibold',
  operator: 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 text-lg font-semibold',
  function: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 text-sm font-medium',
  clear: 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100 text-sm font-semibold',
  equals: 'bg-cyan-700 text-white border-cyan-700 hover:bg-cyan-800 text-lg font-bold',
};

const errorText: Record<CalcError, { en: string; mn: string }> = {
  syntax: { en: 'Check the expression', mn: 'Илэрхийллээ шалгана уу' },
  divideByZero: { en: 'Cannot divide by zero', mn: 'Тэгд хуваах боломжгүй' },
  domain: { en: 'No real answer. Check the values inside log, ln and √', mn: 'Бодит хариу байхгүй. log, ln, √ доторх утгыг шалгана уу' },
  overflow: { en: 'The answer is too large', mn: 'Хариу хэт их байна' },
};

const sigFigOptions: (number | 'all')[] = ['all', 2, 3, 4, 5];

interface LabCalculatorProps {
  language: Language;
}

export const LabCalculator: React.FC<LabCalculatorProps> = ({ language }) => {
  const en = language === 'en';
  const inputRef = useRef<HTMLInputElement>(null);

  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState<number | null>(null);
  const [error, setError] = useState<CalcError | null>(null);
  const [lastAnswer, setLastAnswer] = useState(0);
  const [justEvaluated, setJustEvaluated] = useState(false);
  const [sigFigs, setSigFigs] = useState<number | 'all'>('all');

  const [categoryId, setCategoryId] = useState(unitCategories[0].id);
  const [fromId, setFromId] = useState(unitCategories[0].from);
  const [toId, setToId] = useState(unitCategories[0].to);
  const [valueText, setValueText] = useState('25');
  const [molarMassText, setMolarMassText] = useState('');

  const category = unitCategories.find((item) => item.id === categoryId) ?? unitCategories[0];
  const unitLabel = (id: string) => {
    const unit = category.units.find((item) => item.id === id);
    return unit ? (en ? unit.en : unit.mn) : id;
  };

  const placeCaret = (position: number) => {
    requestAnimationFrame(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(position, position);
    });
  };

  const insertText = (text: string, continues = false) => {
    const input = inputRef.current;
    const base = justEvaluated ? (continues ? 'Ans' : '') : expression;
    const start = justEvaluated ? base.length : input?.selectionStart ?? base.length;
    const end = justEvaluated ? base.length : input?.selectionEnd ?? base.length;
    setExpression(base.slice(0, start) + text + base.slice(end));
    setJustEvaluated(false);
    placeCaret(start + text.length);
  };

  const evaluate = () => {
    if (!expression.trim()) return;
    const result = evaluateExpression(expression, lastAnswer);
    if ('value' in result) {
      setAnswer(result.value);
      setLastAnswer(result.value);
      setError(null);
      setJustEvaluated(true);
    } else {
      setAnswer(null);
      setError(result.error);
      setJustEvaluated(false);
    }
  };

  const clearAll = () => {
    setExpression('');
    setAnswer(null);
    setError(null);
    setJustEvaluated(false);
    placeCaret(0);
  };

  // Removes a whole name such as log( or Ans at once.
  const deleteBack = () => {
    const input = inputRef.current;
    const caret = justEvaluated ? expression.length : input?.selectionStart ?? expression.length;
    const before = expression.slice(0, caret);
    const trimmed = before.replace(/(log\(|ln\(|exp\(|√\(|10\^\(|Ans|.)$/, '');
    setExpression(trimmed + expression.slice(caret));
    setJustEvaluated(false);
    placeCaret(trimmed.length);
  };

  const pressKey = (key: CalcKey) => {
    if (key.action === 'equals') evaluate();
    else if (key.action === 'clear') clearAll();
    else if (key.action === 'delete') deleteBack();
    else if (key.insert) insertText(key.insert, key.continues);
  };

  const shownAnswer = answer === null ? '' : sigFigs === 'all' ? formatNumber(answer) : formatNumber(answer, sigFigs);

  const chooseCategory = (id: string) => {
    const next = unitCategories.find((item) => item.id === id) ?? unitCategories[0];
    setCategoryId(next.id);
    setFromId(next.from);
    setToId(next.to);
  };

  const parsedValue = valueText.trim() === '' ? NaN : Number(valueText);
  const parsedMolarMass = Number(molarMassText);
  const usesMolarMass = fromId !== toId && (fromId === GRAMS_PER_DM3 || toId === GRAMS_PER_DM3);
  const conversion: ConversionResult | null = Number.isFinite(parsedValue)
    ? convertUnit(parsedValue, categoryId, fromId, toId, parsedMolarMass)
    : null;
  const oneUnit = convertUnit(1, categoryId, fromId, toId, parsedMolarMass);
  const showsFactor = categoryId !== 'temperature' && !usesMolarMass && fromId !== toId && 'value' in oneUnit;

  const selectClass = 'w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Calculator */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-700" />
            <span>{en ? 'Scientific Calculator' : 'Шинжлэх ухааны тооцоолуур'}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {en
              ? 'Use the keys or type on a keyboard, and press Enter for the answer. 2.45E-3 means 2.45 × 10⁻³.'
              : 'Товчлуур дарах эсвэл гараар бичиж, Enter дарж хариуг авна. 2.45E-3 нь 2.45 × 10⁻³ гэсэн үг.'}
          </p>
        </div>

        <div className="p-3 bg-slate-50 border border-slate-300 rounded-lg space-y-1">
          <input
            ref={inputRef}
            type="text"
            inputMode="none"
            maxLength={200}
            autoComplete="off"
            spellCheck={false}
            value={expression}
            onChange={(event) => {
              setExpression(event.target.value);
              setJustEvaluated(false);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                evaluate();
              } else if (event.key === 'Escape') {
                clearAll();
              }
            }}
            aria-label={en ? 'Calculation' : 'Тооцоолол'}
            placeholder="0.0200 × 24.50 ÷ 1000"
            className="w-full bg-transparent text-right text-sm sm:text-base text-slate-700 tabular-nums placeholder:text-slate-400 focus:outline-none"
          />
          <div aria-live="polite" className="min-h-9 text-right break-words">
            {error ? (
              <span className="text-sm font-medium text-rose-700">{en ? errorText[error].en : errorText[error].mn}</span>
            ) : (
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 tabular-nums">{shownAnswer}</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-medium text-slate-600">{en ? 'Significant figures' : 'Утгат цифр'}:</span>
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
            {sigFigOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSigFigs(option)}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  sigFigs === option ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {option === 'all' ? (en ? 'All' : 'Бүгд') : option}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {keys.map((key, index) => (
            <button
              key={index}
              type="button"
              onClick={() => pressKey(key)}
              aria-label={key.aria ? (en ? key.aria.en : key.aria.mn) : undefined}
              className={`min-h-11 rounded-lg border transition-colors ${keyStyles[key.kind]}`}
            >
              {key.label}
            </button>
          ))}
        </div>
      </section>

      {/* Unit converter */}
      <section className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Ruler className="w-5 h-5 text-cyan-700" />
            <span>{en ? 'Unit Converter' : 'Нэгж хувиргагч'}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {en ? 'Choose a quantity, enter a value and pick the two units.' : 'Хэмжигдэхүүнээ сонгож, утгаа оруулаад хоёр нэгжээ сонгоно.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
          {unitCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => chooseCategory(item.id)}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                categoryId === item.id ? 'bg-white text-slate-900 shadow-xs font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {en ? item.en : item.mn}
            </button>
          ))}
        </div>

        <div>
          <label htmlFor="unit-value" className="block text-xs font-medium text-slate-700 mb-1">
            {en ? 'Value' : 'Утга'}
          </label>
          <input
            id="unit-value"
            type="number"
            step="any"
            value={valueText}
            onChange={(event) => setValueText(event.target.value)}
            className={`${selectClass} tabular-nums`}
          />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
          <div className="min-w-0">
            <label htmlFor="unit-from" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'From' : 'Хаанаас'}
            </label>
            <select id="unit-from" value={fromId} onChange={(event) => setFromId(event.target.value)} className={selectClass}>
              {category.units.map((unit) => (
                <option key={unit.id} value={unit.id}>{en ? unit.en : unit.mn}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => {
              setFromId(toId);
              setToId(fromId);
            }}
            aria-label={en ? 'Swap the units' : 'Нэгжүүдийг солих'}
            className="h-[38px] w-10 flex items-center justify-center rounded-lg border border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
          <div className="min-w-0">
            <label htmlFor="unit-to" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'To' : 'Хаашаа'}
            </label>
            <select id="unit-to" value={toId} onChange={(event) => setToId(event.target.value)} className={selectClass}>
              {category.units.map((unit) => (
                <option key={unit.id} value={unit.id}>{en ? unit.en : unit.mn}</option>
              ))}
            </select>
          </div>
        </div>

        {usesMolarMass && (
          <div>
            <label htmlFor="unit-mr" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'Molar mass, Mr (g/mol)' : 'Молийн масс, Mr (г/моль)'}
            </label>
            <input
              id="unit-mr"
              type="number"
              step="any"
              min="0"
              value={molarMassText}
              onChange={(event) => setMolarMassText(event.target.value)}
              placeholder={en ? 'For example 40.00 for NaOH' : 'Жишээ нь NaOH-д 40.00'}
              className={`${selectClass} tabular-nums`}
            />
          </div>
        )}

        <div aria-live="polite" className="p-4 rounded-lg bg-cyan-50 border border-cyan-200 min-h-24 space-y-1">
          {conversion === null && (
            <p className="text-sm text-cyan-900">{en ? 'Enter a value' : 'Утга оруулна уу'}</p>
          )}
          {conversion && 'error' in conversion && (
            <p className="text-sm font-medium text-rose-700">
              {conversion.error === 'belowAbsoluteZero'
                ? (en ? 'This is below absolute zero (0 K)' : 'Энэ утга үнэмлэхүй тэгээс (0 K) доош байна')
                : (en ? 'Enter the molar mass to convert to or from g/dm³' : 'г/дм³ нэгжтэй хувиргахад молийн массыг оруулна уу')}
            </p>
          )}
          {conversion && 'value' in conversion && (
            <>
              <p className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums break-words">
                {formatNumber(parsedValue)} {unitLabel(fromId)} = {formatNumber(conversion.value)} {unitLabel(toId)}
              </p>
              {showsFactor && 'value' in oneUnit && (
                <p className="text-xs text-cyan-900 tabular-nums">
                  1 {unitLabel(fromId)} = {formatNumber(oneUnit.value)} {unitLabel(toId)}
                </p>
              )}
              {categoryId === 'temperature' && (
                <p className="text-xs text-cyan-900">T(K) = T(°C) + 273.15</p>
              )}
              {usesMolarMass && (
                <p className="text-xs text-cyan-900">
                  {en ? 'g/dm³ = mol/dm³ × Mr' : 'г/дм³ = моль/дм³ × Mr'}
                </p>
              )}
            </>
          )}
        </div>

        {conversion && 'value' in conversion && (
          <button
            type="button"
            onClick={() => insertText(toExpressionText(conversion.value))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 bg-cyan-50 hover:bg-cyan-100 rounded-lg transition-colors border border-cyan-200"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{en ? 'Use this value in the calculator' : 'Энэ утгыг тооцоолуурт оруулах'}</span>
          </button>
        )}
      </section>
    </div>
  );
};
