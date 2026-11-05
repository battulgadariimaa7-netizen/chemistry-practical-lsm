export type CalcError = 'syntax' | 'divideByZero' | 'domain' | 'overflow';
export type CalcResult = { value: number } | { error: CalcError };

type Token =
  | { type: 'number'; value: number }
  | { type: 'name'; value: string }
  | { type: 'op'; value: string };

const fail = (error: CalcError): never => {
  throw { calcError: error };
};

const operators: Record<string, string> = { '+': '+', '-': '-', '−': '-', '*': '*', '×': '*', '/': '/', '÷': '/', '^': '^', '(': '(', ')': ')', '√': 'sqrt' };

const tokenize = (text: string): Token[] => {
  const tokens: Token[] = [];
  let i = 0;
  while (i < text.length) {
    const rest = text.slice(i);
    const space = /^\s+/.exec(rest);
    const number = /^(\d+\.?\d*|\.\d+)([eE][+\-−]?\d+)?/.exec(rest);
    const name = /^(ans|log|ln|sqrt|exp)/i.exec(rest);
    if (space) {
      i += space[0].length;
    } else if (number) {
      tokens.push({ type: 'number', value: Number(number[0].replace('−', '-')) });
      i += number[0].length;
    } else if (name) {
      tokens.push({ type: 'name', value: name[0].toLowerCase() });
      i += name[0].length;
    } else if (operators[rest[0]] === 'sqrt') {
      tokens.push({ type: 'name', value: 'sqrt' });
      i += 1;
    } else if (operators[rest[0]]) {
      tokens.push({ type: 'op', value: operators[rest[0]] });
      i += 1;
    } else {
      fail('syntax');
    }
  }
  return tokens;
};

const applyFunction = (name: string, x: number): number => {
  if (name === 'log' || name === 'ln') {
    if (x <= 0) fail('domain');
    return name === 'log' ? Math.log10(x) : Math.log(x);
  }
  if (name === 'sqrt') {
    if (x < 0) fail('domain');
    return Math.sqrt(x);
  }
  return Math.exp(x);
};

// Precedence, lowest first: + -, then × ÷ and implied ×, then unary minus, then ^ (right to left), so -2^2 = -4.
const parse = (tokens: Token[], ans: number): number => {
  let pos = 0;
  const peek = () => tokens[pos];
  const isOp = (value: string) => peek()?.type === 'op' && peek().value === value;

  const expression = (): number => {
    let left = term();
    while (isOp('+') || isOp('-')) {
      const op = tokens[pos++].value;
      const right = term();
      left = op === '+' ? left + right : left - right;
    }
    return left;
  };

  const startsImpliedProduct = () => {
    const next = peek();
    if (!next) return false;
    if (next.type === 'name') return true;
    if (next.type === 'op') return next.value === '(';
    const previous = tokens[pos - 1];
    return previous?.type === 'op' && previous.value === ')';
  };

  const term = (): number => {
    let left = unary();
    while (isOp('*') || isOp('/') || startsImpliedProduct()) {
      if (isOp('/')) {
        pos++;
        const right = unary();
        if (right === 0) fail('divideByZero');
        left /= right;
      } else {
        if (isOp('*')) pos++;
        left *= unary();
      }
    }
    return left;
  };

  const unary = (): number => {
    if (isOp('-')) {
      pos++;
      return -unary();
    }
    if (isOp('+')) {
      pos++;
      return unary();
    }
    return power();
  };

  const power = (): number => {
    const base = primary();
    if (!isOp('^')) return base;
    pos++;
    const exponent = unary();
    if (base === 0 && exponent < 0) fail('divideByZero');
    const value = Math.pow(base, exponent);
    if (Number.isNaN(value)) fail('domain');
    return value;
  };

  // A missing closing bracket at the end is accepted, as on a scientific calculator.
  const closeBracket = () => {
    if (isOp(')')) pos++;
    else if (peek()) fail('syntax');
  };

  const primary = (): number => {
    const token = peek();
    if (!token) return fail('syntax');
    if (token.type === 'number') {
      pos++;
      return token.value;
    }
    if (token.type === 'name') {
      pos++;
      if (token.value === 'ans') return ans;
      if (!isOp('(')) {
        // √4 works without brackets; log and ln need them.
        if (token.value !== 'sqrt') return fail('syntax');
        return applyFunction('sqrt', power());
      }
      pos++;
      const inner = expression();
      closeBracket();
      return applyFunction(token.value, inner);
    }
    if (token.value === '(') {
      pos++;
      const inner = expression();
      closeBracket();
      return inner;
    }
    return fail('syntax');
  };

  const value = expression();
  if (pos !== tokens.length) fail('syntax');
  return value;
};

export const evaluateExpression = (text: string, ans = 0): CalcResult => {
  try {
    const tokens = tokenize(text);
    if (tokens.length === 0) return { error: 'syntax' };
    const value = parse(tokens, ans);
    if (Number.isNaN(value)) return { error: 'domain' };
    if (!Number.isFinite(value)) return { error: 'overflow' };
    // Hides binary noise such as 0.1 + 0.2 = 0.30000000000000004.
    return { value: Number(value.toPrecision(15)) };
  } catch (thrown) {
    const known = (thrown as { calcError?: CalcError }).calcError;
    return { error: known ?? 'syntax' };
  }
};

const superscripts: Record<string, string> = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const toSuperscript = (n: number) => String(n).split('').map((c) => superscripts[c]).join('');

// Rounds half up on the decimal digits, so 2.675 to 3 s.f. is 2.68 even though its binary value is slightly lower.
const roundedDigits = (value: number, count: number) => {
  const [mantissa, exponentText] = Math.abs(value).toExponential(14).split('e');
  const all = mantissa.replace('.', '');
  const digits = all.slice(0, count).split('').map(Number);
  let exponent = Number(exponentText);
  if (Number(all[count] ?? 0) >= 5) {
    let i = digits.length - 1;
    while (i >= 0 && digits[i] === 9) digits[i--] = 0;
    if (i >= 0) {
      digits[i] += 1;
    } else {
      digits.unshift(1);
      digits.pop();
      exponent += 1;
    }
  }
  return { digits: digits.join(''), exponent };
};

// Without sigFigs, shows up to 12 digits. With sigFigs, keeps trailing zeros, because they carry meaning in a result.
export const formatNumber = (value: number, sigFigs?: number): string => {
  if (value === 0) return sigFigs && sigFigs > 1 ? `0.${'0'.repeat(sigFigs - 1)}` : '0';
  const sign = value < 0 ? '-' : '';
  const rounded = roundedDigits(value, sigFigs ?? 12);
  const digits = sigFigs ? rounded.digits : rounded.digits.replace(/0+$/, '');
  const { exponent } = rounded;
  const ambiguousZeros = sigFigs !== undefined && exponent >= sigFigs;
  if (exponent >= 10 || exponent < -4 || ambiguousZeros) {
    const fraction = digits.slice(1);
    return `${sign}${digits[0]}${fraction ? `.${fraction}` : ''} × 10${toSuperscript(exponent)}`;
  }
  if (exponent < 0) return `${sign}0.${'0'.repeat(-exponent - 1)}${digits}`;
  const whole = digits.slice(0, exponent + 1).padEnd(exponent + 1, '0');
  const fraction = digits.slice(exponent + 1);
  return `${sign}${whole}${fraction ? `.${fraction}` : ''}`;
};

// A value written so that the calculator can read it back, such as 2.5E-7.
export const toExpressionText = (value: number) => String(Number(value.toPrecision(12))).replace('e+', 'E').replace('e', 'E');

export interface UnitDef {
  id: string;
  en: string;
  mn: string;
  factor: number;
}

export interface UnitCategory {
  id: string;
  en: string;
  mn: string;
  from: string;
  to: string;
  units: UnitDef[];
}

export const GRAMS_PER_DM3 = 'g/dm3';

// Each factor converts the unit to the first unit with factor 1 in its category. Temperature is handled separately.
export const unitCategories: UnitCategory[] = [
  {
    id: 'volume', en: 'Volume', mn: 'Эзлэхүүн', from: 'cm3', to: 'dm3',
    units: [
      { id: 'cm3', en: 'cm³', mn: 'см³', factor: 1 },
      { id: 'mm3', en: 'mm³', mn: 'мм³', factor: 0.001 },
      { id: 'mL', en: 'mL', mn: 'мл', factor: 1 },
      { id: 'dm3', en: 'dm³', mn: 'дм³', factor: 1000 },
      { id: 'L', en: 'L', mn: 'л', factor: 1000 },
      { id: 'm3', en: 'm³', mn: 'м³', factor: 1e6 },
    ],
  },
  {
    id: 'mass', en: 'Mass', mn: 'Масс', from: 'g', to: 'kg',
    units: [
      { id: 'g', en: 'g', mn: 'г', factor: 1 },
      { id: 'mg', en: 'mg', mn: 'мг', factor: 0.001 },
      { id: 'kg', en: 'kg', mn: 'кг', factor: 1000 },
      { id: 't', en: 'tonne', mn: 'тонн', factor: 1e6 },
    ],
  },
  {
    id: 'amount', en: 'Amount', mn: 'Бодисын хэмжээ', from: 'mol', to: 'mmol',
    units: [
      { id: 'mol', en: 'mol', mn: 'моль', factor: 1 },
      { id: 'umol', en: 'µmol', mn: 'мкмоль', factor: 1e-6 },
      { id: 'mmol', en: 'mmol', mn: 'ммоль', factor: 1e-3 },
      { id: 'kmol', en: 'kmol', mn: 'кмоль', factor: 1e3 },
    ],
  },
  {
    id: 'concentration', en: 'Concentration', mn: 'Концентраци', from: 'mol/dm3', to: 'mmol/dm3',
    units: [
      { id: 'mol/dm3', en: 'mol/dm³', mn: 'моль/дм³', factor: 1 },
      { id: 'mmol/dm3', en: 'mmol/dm³', mn: 'ммоль/дм³', factor: 1e-3 },
      { id: 'mol/cm3', en: 'mol/cm³', mn: 'моль/см³', factor: 1e3 },
      { id: 'mol/m3', en: 'mol/m³', mn: 'моль/м³', factor: 1e-3 },
      { id: GRAMS_PER_DM3, en: 'g/dm³', mn: 'г/дм³', factor: 1 },
    ],
  },
  {
    id: 'pressure', en: 'Pressure', mn: 'Даралт', from: 'kPa', to: 'Pa',
    units: [
      { id: 'Pa', en: 'Pa', mn: 'Па', factor: 1 },
      { id: 'kPa', en: 'kPa', mn: 'кПа', factor: 1e3 },
      { id: 'bar', en: 'bar', mn: 'бар', factor: 1e5 },
      { id: 'atm', en: 'atm', mn: 'атм', factor: 101325 },
      { id: 'mmHg', en: 'mmHg', mn: 'мм м.у.б.', factor: 133.322 },
    ],
  },
  {
    id: 'temperature', en: 'Temperature', mn: 'Температур', from: 'C', to: 'K',
    units: [
      { id: 'C', en: '°C', mn: '°C', factor: 1 },
      { id: 'K', en: 'K', mn: 'K', factor: 1 },
      { id: 'F', en: '°F', mn: '°F', factor: 1 },
    ],
  },
  {
    id: 'energy', en: 'Energy', mn: 'Энерги', from: 'kJ', to: 'J',
    units: [
      { id: 'J', en: 'J', mn: 'Ж', factor: 1 },
      { id: 'kJ', en: 'kJ', mn: 'кЖ', factor: 1e3 },
      { id: 'MJ', en: 'MJ', mn: 'МЖ', factor: 1e6 },
      { id: 'cal', en: 'cal', mn: 'кал', factor: 4.184 },
      { id: 'kcal', en: 'kcal', mn: 'ккал', factor: 4184 },
    ],
  },
  {
    id: 'length', en: 'Length', mn: 'Урт', from: 'nm', to: 'pm',
    units: [
      { id: 'm', en: 'm', mn: 'м', factor: 1 },
      { id: 'pm', en: 'pm', mn: 'пм', factor: 1e-12 },
      { id: 'nm', en: 'nm', mn: 'нм', factor: 1e-9 },
      { id: 'um', en: 'µm', mn: 'мкм', factor: 1e-6 },
      { id: 'mm', en: 'mm', mn: 'мм', factor: 1e-3 },
      { id: 'cm', en: 'cm', mn: 'см', factor: 1e-2 },
      { id: 'dm', en: 'dm', mn: 'дм', factor: 1e-1 },
      { id: 'km', en: 'km', mn: 'км', factor: 1e3 },
    ],
  },
  {
    id: 'time', en: 'Time', mn: 'Хугацаа', from: 'min', to: 's',
    units: [
      { id: 's', en: 's', mn: 'с', factor: 1 },
      { id: 'ms', en: 'ms', mn: 'мс', factor: 1e-3 },
      { id: 'min', en: 'min', mn: 'мин', factor: 60 },
      { id: 'h', en: 'h', mn: 'цаг', factor: 3600 },
    ],
  },
];

export type ConversionResult = { value: number } | { error: 'belowAbsoluteZero' | 'needMolarMass' };

const clean = (value: number) => Number(value.toPrecision(14));

const toKelvin = (value: number, unit: string) => {
  if (unit === 'C') return value + 273.15;
  if (unit === 'F') return ((value - 32) * 5) / 9 + 273.15;
  return value;
};

const fromKelvin = (kelvin: number, unit: string) => {
  if (unit === 'C') return kelvin - 273.15;
  if (unit === 'F') return ((kelvin - 273.15) * 9) / 5 + 32;
  return kelvin;
};

export const convertUnit = (value: number, categoryId: string, fromId: string, toId: string, molarMass?: number): ConversionResult => {
  if (categoryId === 'temperature') {
    const kelvin = toKelvin(value, fromId);
    if (kelvin < -1e-9) return { error: 'belowAbsoluteZero' };
    return { value: clean(fromKelvin(kelvin, toId)) };
  }
  const units = unitCategories.find((category) => category.id === categoryId)?.units ?? [];
  const from = units.find((unit) => unit.id === fromId);
  const to = units.find((unit) => unit.id === toId);
  if (!from || !to) return { value };
  if (fromId === toId) return { value };
  if (fromId === GRAMS_PER_DM3 || toId === GRAMS_PER_DM3) {
    if (!molarMass || molarMass <= 0) return { error: 'needMolarMass' };
    const molar = fromId === GRAMS_PER_DM3 ? value / molarMass : value * from.factor;
    return { value: clean(toId === GRAMS_PER_DM3 ? molar * molarMass : molar / to.factor) };
  }
  return { value: clean((value * from.factor) / to.factor) };
};
