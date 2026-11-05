// Acid-base titration chemistry for the virtual titration: NaOH from the burette into a pipetted monoprotic acid.

export type AcidId = 'hcl' | 'ethanoic';
export type IndicatorId = 'phenolphthalein' | 'methyl_orange' | 'bromothymol_blue';

export const BASE_CONCENTRATION = 0.1; // mol/dm³
export const ANALYTE_VOLUME = 25.0; // cm³
export const BURETTE_CAPACITY = 50.0; // cm³
export const DROP_VOLUME = 0.05; // cm³

const WATER_IONIC_PRODUCT = 1e-14;

export const acids: Record<AcidId, { nameEn: string; nameMn: string; formula: string; ka: number | null }> = {
  hcl: { nameEn: 'Hydrochloric acid (strong)', nameMn: 'Давсны хүчил (хүчтэй)', formula: 'HCl', ka: null },
  ethanoic: { nameEn: 'Ethanoic acid (weak)', nameMn: 'Цууны хүчил (сул)', formula: 'CH₃COOH', ka: 1.8e-5 },
};

interface ColorStop {
  pH: number;
  rgb: [number, number, number];
  alpha: number;
}

export const indicators: Record<IndicatorId, { nameEn: string; nameMn: string; low: number; high: number; stops: ColorStop[] }> = {
  phenolphthalein: {
    nameEn: 'Phenolphthalein',
    nameMn: 'Фенолфталеин',
    low: 8.2,
    high: 10.0,
    stops: [
      { pH: 8.2, rgb: [224, 36, 140], alpha: 0 },
      { pH: 10.0, rgb: [224, 36, 140], alpha: 0.85 },
    ],
  },
  methyl_orange: {
    nameEn: 'Methyl orange',
    nameMn: 'Метил улбар шар',
    low: 3.1,
    high: 4.4,
    stops: [
      { pH: 3.1, rgb: [214, 48, 49], alpha: 0.8 },
      { pH: 4.4, rgb: [245, 196, 40], alpha: 0.8 },
    ],
  },
  bromothymol_blue: {
    nameEn: 'Bromothymol blue',
    nameMn: 'Бромтимол цэнхэр',
    low: 6.0,
    high: 7.6,
    stops: [
      { pH: 6.0, rgb: [232, 205, 50], alpha: 0.8 },
      { pH: 6.8, rgb: [70, 170, 90], alpha: 0.8 },
      { pH: 7.6, rgb: [40, 90, 200], alpha: 0.85 },
    ],
  },
};

/** pH of the flask from the charge balance [H⁺] + [Na⁺] = [OH⁻] + [A⁻], solved by bisection on log[H⁺]. */
export const flaskPH = (acid: AcidId, acidConcentration: number, baseVolume: number) => {
  const totalVolume = ANALYTE_VOLUME + baseVolume;
  const acidTotal = (acidConcentration * ANALYTE_VOLUME) / totalVolume;
  const sodium = (BASE_CONCENTRATION * baseVolume) / totalVolume;
  const ka = acids[acid].ka;

  const chargeImbalance = (h: number) => {
    const anion = ka === null ? acidTotal : (acidTotal * ka) / (ka + h);
    return h + sodium - WATER_IONIC_PRODUCT / h - anion;
  };

  let low = -15;
  let high = 1;
  for (let i = 0; i < 70; i++) {
    const mid = (low + high) / 2;
    if (chargeImbalance(10 ** mid) > 0) high = mid;
    else low = mid;
  }
  return -(low + high) / 2;
};

export const equivalenceVolume = (acidConcentration: number) => (acidConcentration * ANALYTE_VOLUME) / BASE_CONCENTRATION;

/** Burette reading at which the indicator is halfway through its colour change. */
export const colorChangeVolume = (acid: AcidId, acidConcentration: number, indicator: IndicatorId) => {
  const target = (indicators[indicator].low + indicators[indicator].high) / 2;
  for (let v = 0; v <= BURETTE_CAPACITY; v += DROP_VOLUME) {
    if (flaskPH(acid, acidConcentration, v) >= target) return v;
  }
  return BURETTE_CAPACITY;
};

export const indicatorColor = (indicator: IndicatorId, pH: number) => {
  const { stops } = indicators[indicator];
  if (pH <= stops[0].pH) return { rgb: stops[0].rgb, alpha: stops[0].alpha };
  const last = stops[stops.length - 1];
  if (pH >= last.pH) return { rgb: last.rgb, alpha: last.alpha };
  for (let i = 1; i < stops.length; i++) {
    if (pH <= stops[i].pH) {
      const from = stops[i - 1];
      const to = stops[i];
      const t = (pH - from.pH) / (to.pH - from.pH);
      return {
        rgb: from.rgb.map((c, k) => Math.round(c + (to.rgb[k] - c) * t)) as [number, number, number],
        alpha: from.alpha + (to.alpha - from.alpha) * t,
      };
    }
  }
  return { rgb: last.rgb, alpha: last.alpha };
};

export const randomUnknownConcentration = () => Math.round((0.08 + Math.random() * 0.04) * 1000) / 1000;
