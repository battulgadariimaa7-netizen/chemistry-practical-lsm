import React from 'react';
import {
  ArtFrame,
  ArtProps,
  Beaker,
  BenchLine,
  Bubbles,
  Burette,
  Burner,
  ConicalFlask,
  Dropper,
  Stand,
  Stopwatch,
  TestTube,
  Thermometer,
  TubeRack,
  colors,
  glass,
  labelText,
  line,
  steel,
} from './primitives';

// Colours follow the observations recorded for each practical in data/chapters.ts.

const CrucibleHeating = () => (
  <g>
    <BenchLine />
    <Burner x={120} y={170} />
    <path d="M86 92 H154 M92 92 L80 170 M148 92 L160 170" {...line} strokeWidth={3} />
    <path d="M100 58 L106 90 H134 L140 58 Z" fill="#f1f5f9" stroke={colors.muted} strokeWidth="2" strokeLinejoin="round" />
    <ellipse cx="120" cy="58" rx="20" ry="4" fill="#bfdbfe" stroke={colors.muted} />
    <path d="M97 53 Q120 42 143 53" fill="none" stroke="#f1f5f9" strokeWidth="4" strokeLinecap="round" />
  </g>
);

const ConductivityCircuit = () => (
  <g>
    <BenchLine />
    <Beaker x={120} y={170} width={96} height={70} fill="rgba(125, 211, 252, 0.3)" level={0.62} />
    <rect x="96" y="82" width="8" height="66" {...steel} />
    <rect x="136" y="82" width="8" height="66" {...steel} />
    <rect x="52" y="18" width="46" height="24" rx="2" fill="#334155" stroke={colors.muted} strokeWidth="1.5" />
    <text x="75" y="34" textAnchor="middle" {...labelText} fill="#e2e8f0">−     +</text>
    <path d="M60 42 V60 H100 V82" {...line} stroke="#f87171" />
    <path d="M98 30 H164 V46" {...line} stroke="#f87171" />
    <path d="M164 62 V70 H140 V82" {...line} stroke="#f87171" />
    <circle cx="164" cy="54" r="11" fill="rgba(250, 204, 21, 0.2)" />
    <circle cx="164" cy="54" r="7" fill="#facc15" stroke="#fde68a" strokeWidth="2" />
    <text x="180" y="57" {...labelText} fill="#fde68a">LED</text>
    <text x="120" y="160" textAnchor="middle" {...labelText} fill="#e2e8f0">NaCl(aq)</text>
  </g>
);

const Calorimetry: React.FC<{ reading?: string }> = ({ reading }) => (
  <g>
    <BenchLine />
    <Beaker x={120} y={170} width={92} height={86} fill="transparent" level={0} />
    <path d="M86 90 L94 164 Q95 167 98 167 H142 Q145 167 146 164 L154 90 Z" fill="#f8fafc" stroke={colors.muted} strokeWidth="2" strokeLinejoin="round" />
    <rect x="80" y="82" width="80" height="8" rx="2" fill="#e2e8f0" stroke={colors.muted} strokeWidth="1.5" />
    <path d="M92 112 L97 162 Q98 164 100 164 H140 Q142 164 143 162 L148 112 Z" fill="rgba(56, 189, 248, 0.45)" />
    <Thermometer x={120} top={16} bottom={150} level={56} />
    <path d="M140 60 V132 M132 132 H148" {...line} stroke="#94a3b8" />
    {reading && (
      <g>
        <rect x="160" y="28" width="54" height="24" rx="3" fill="#020617" stroke={colors.muted} />
        <text x="187" y="44" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700">{reading}</text>
      </g>
    )}
  </g>
);

const NeutralisationCalorimetry = () => <Calorimetry reading="27.8°C" />;

const RedoxTitration = () => (
  <g>
    <BenchLine />
    <Stand x={50} y={170} top={10} baseWidth={130} />
    <Burette x={120} rodX={50} top={8} bottom={92} level={18} fill="#7e22ce" />
    <rect x="72" y="162" width="96" height="8" fill="#f8fafc" />
    <ConicalFlask x={120} y={162} width={70} height={64} fill="rgba(244, 114, 182, 0.5)" level={0.45} />
  </g>
);

const EquilibriumTubes = () => (
  <TubeRack
    tubes={[
      { fill: '#b91c1c', label: '1' },
      { fill: '#7f1d1d', label: '2 +Fe³⁺' },
      { fill: 'rgba(226, 232, 240, 0.18)', label: '3 +F⁻' },
      { fill: 'rgba(234, 138, 90, 0.75)', label: '4 Δ' },
    ]}
    y={156}
  />
);

const DisappearingCross = () => (
  <g>
    <path d="M28 160 H176 L196 176 H8 Z" fill="#f8fafc" />
    <path d="M86 164 L118 173 M118 164 L86 173" stroke="#020617" strokeWidth="3.5" strokeLinecap="round" />
    <ConicalFlask x={102} y={166} width={94} height={112} fill="rgba(250, 204, 21, 0.72)" level={0.42} />
    <path d="M102 34 V8" {...line} stroke={colors.accent} strokeDasharray="3 4" />
    <path d="M86 8 Q102 -2 118 8 Q102 18 86 8 Z" fill="#e2e8f0" />
    <circle cx="102" cy="8" r="4" fill="#0f172a" />
    <Stopwatch x={196} y={70} r={21} text="24 s" />
  </g>
);

const CationTests = () => (
  <g>
    <TubeRack
      y={156}
      top={46}
      tubes={[
        { fill: 'rgba(125, 211, 252, 0.3)', precipitate: '#7dd3fc', label: 'Cu²⁺' },
        { fill: 'rgba(163, 190, 140, 0.3)', precipitate: '#6b8e4e', label: 'Fe²⁺' },
        { fill: 'rgba(251, 191, 36, 0.3)', precipitate: '#9a3412', label: 'Fe³⁺' },
        { fill: 'rgba(226, 232, 240, 0.2)', precipitate: '#f8fafc', label: 'Zn²⁺' },
      ]}
    />
    <Dropper x={54} y={40} />
    <text x="66" y="22" {...labelText}>NaOH(aq)</text>
  </g>
);

const HalideTests = () => (
  <g>
    <TubeRack
      y={156}
      top={46}
      tubes={[
        { fill: 'rgba(226, 232, 240, 0.25)', precipitate: '#f8fafc', label: 'Cl⁻' },
        { fill: 'rgba(254, 243, 199, 0.25)', precipitate: '#fde9b0', label: 'Br⁻' },
        { fill: 'rgba(254, 240, 138, 0.25)', precipitate: '#facc15', label: 'I⁻' },
      ]}
    />
    <Dropper x={120} y={30} drop="#e2e8f0" />
    <text x="132" y="14" {...labelText}>AgNO₃(aq)</text>
  </g>
);

const WaterBath: React.FC<{
  tubes: { fill?: string; precipitate?: string; coating?: string; label: string }[];
  extra?: React.ReactNode;
}> = ({ tubes, extra }) => (
  <g>
    <BenchLine />
    <Beaker x={104} y={170} width={156} height={92} level={0.68} fill="rgba(56, 189, 248, 0.22)" />
    {tubes.map((tube, i) => (
      <g key={tube.label}>
        <TestTube x={60 + i * 44} top={50} height={108} width={22} fill={tube.fill} precipitate={tube.precipitate} coating={tube.coating} level={0.45} />
        <text x={60 + i * 44} y={44} textAnchor="middle" {...labelText}>{tube.label}</text>
      </g>
    ))}
    <Thermometer x={174} top={50} bottom={160} level={110} />
    {extra}
  </g>
);

const HydrolysisRace = () => (
  <WaterBath
    tubes={[
      { fill: 'rgba(254, 240, 138, 0.35)', precipitate: '#facc15', label: 'C–I' },
      { fill: 'rgba(254, 243, 199, 0.22)', label: 'C–Br' },
      { fill: 'rgba(226, 232, 240, 0.12)', label: 'C–Cl' },
    ]}
    extra={<Stopwatch x={210} y={40} r={19} text="30 s" />}
  />
);

const CarbonylTests = () => (
  <WaterBath
    tubes={[
      { fill: '#16a34a', label: 'Cr³⁺' },
      { coating: 'url(#silverMirror)', label: 'Ag' },
      { fill: 'rgba(37, 99, 235, 0.3)', precipitate: '#b4431f', label: 'Cu₂O' },
    ]}
    extra={
      <defs>
        <linearGradient id="silverMirror" x1="0" x2="1">
          <stop offset="0" stopColor="#64748b" />
          <stop offset="0.45" stopColor="#f8fafc" />
          <stop offset="1" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
    }
  />
);

const HessCalorimetry = () => (
  <g>
    <Calorimetry />
    <rect x="16" y="30" width="58" height="42" rx="3" fill="#1e293b" stroke={colors.muted} />
    <text x="45" y="46" textAnchor="middle" {...labelText} fill="#e2e8f0">ΔH = 2ΔH₁</text>
    <text x="45" y="60" textAnchor="middle" {...labelText} fill="#e2e8f0">− ΔH₂</text>
  </g>
);

const GalvanicCell = () => (
  <g>
    <BenchLine />
    <Beaker x={66} y={170} width={86} height={72} fill="rgba(226, 232, 240, 0.18)" level={0.62} />
    <Beaker x={174} y={170} width={86} height={72} fill="rgba(37, 99, 235, 0.55)" level={0.62} />
    <rect x="60" y="78" width="12" height="74" fill="#94a3b8" stroke="#cbd5e1" />
    <rect x="168" y="78" width="12" height="74" fill="#c2703d" stroke="#e29a6a" />
    <path d="M86 150 V112 Q86 98 100 98 H140 Q154 98 154 112 V150" fill="none" stroke="#e7e5e4" strokeWidth="7" strokeLinecap="round" />
    <path d="M66 78 V44 H92 M148 44 H174 V78" {...line} stroke="#f87171" />
    <rect x="92" y="24" width="56" height="36" rx="4" fill="#1e293b" stroke={colors.stroke} strokeWidth="2" />
    <rect x="98" y="30" width="44" height="17" rx="2" fill="#020617" />
    <text x="120" y="43" textAnchor="middle" fill="#4ade80" fontSize="11" fontWeight="700">1.10 V</text>
    <text x="120" y="56" textAnchor="middle" {...labelText} fontSize={8}>−   V   +</text>
    <text x="52" y="72" textAnchor="end" {...labelText} fill="#e2e8f0">Zn −</text>
    <text x="188" y="72" {...labelText} fill="#e2e8f0">Cu +</text>
  </g>
);

const PhTitration = () => (
  <g>
    <BenchLine />
    <Stand x={30} y={170} top={10} baseWidth={118} />
    <Burette x={92} rodX={30} top={8} bottom={84} level={20} />
    <rect x="58" y="158" width="70" height="12" rx="2" {...steel} />
    <circle cx="66" cy="164" r="2.5" fill={colors.accent} />
    <Beaker x={93} y={158} width={54} height={50} fill={colors.water} level={0.55} />
    <rect x="84" y="150" width="16" height="4" rx="2" fill="#f8fafc" />
    <path d="M110 118 V140" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
    <path d="M110 118 C110 80 140 92 152 86" {...line} strokeWidth={1.5} />
    <rect x="150" y="26" width="76" height="92" rx="4" fill="#1e293b" stroke={colors.stroke} strokeWidth="2" />
    <rect x="156" y="32" width="64" height="62" fill="#020617" />
    <path d="M160 88 C176 86 188 84 190 72 C191 56 192 50 200 46 C206 43 212 42 217 42" {...line} stroke={colors.accent} />
    <path d="M190 34 V92" stroke="#475569" strokeWidth="1" strokeDasharray="2 3" />
    <text x="188" y="110" textAnchor="middle" {...labelText} fill="#e2e8f0">pH / V</text>
  </g>
);

const GasSyringeKinetics = () => (
  <g>
    <BenchLine />
    <ConicalFlask x={52} y={170} width={70} height={84} fill="rgba(51, 65, 85, 0.9)" level={0.34} stopper />
    <Bubbles points={[[44, 142, 2], [54, 134, 1.6], [60, 146, 2.2], [48, 126, 1.5], [54, 112, 1.5], [50, 100, 1.2]]} />
    <path d="M52 79 V58 H96" {...line} strokeWidth={3} />
    <rect x="96" y="44" width="110" height="28" rx="3" {...glass} />
    <path d="M96 58 H88" {...line} />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <line key={i} x1={100 + i * 20} y1="44" x2={100 + i * 20} y2="52" stroke={colors.stroke} strokeWidth="1" />
    ))}
    <rect x="96" y="47" width="86" height="22" fill={colors.clear} />
    <rect x="182" y="47" width="7" height="22" fill="#334155" stroke={colors.muted} />
    <rect x="189" y="55" width="36" height="6" {...steel} />
    <text x="150" y="34" textAnchor="middle" {...labelText} fill="#e2e8f0">86 cm³</text>
    <rect x="140" y="72" width="4" height="98" {...steel} />
    <rect x="118" y="164" width="48" height="6" rx="1" {...steel} />
    <Stopwatch x={200} y={132} r={20} text="4:00" />
  </g>
);

const LigandExchange = () => (
  <g>
    <TubeRack
      y={150}
      top={40}
      gap={63}
      tubes={[
        { fill: 'rgba(125, 211, 252, 0.7)', label: '[Cu(H₂O)₆]²⁺' },
        { fill: '#1e3a8a', label: '[Cu(NH₃)₄]²⁺' },
        { fill: '#bef264', label: '[CuCl₄]²⁻' },
      ]}
    />
    <text x="120" y="30" textAnchor="middle" {...labelText} fill="#e2e8f0">+NH₃</text>
    <text x="183" y="30" textAnchor="middle" {...labelText} fill="#e2e8f0">+HCl</text>
  </g>
);

const EsterReflux = () => (
  <g>
    <BenchLine />
    <path d="M38 170 Q36 136 72 132 Q108 136 106 170 Z" fill="#475569" stroke={colors.muted} strokeWidth="1.5" />
    <circle cx="72" cy="124" r="26" fill="rgba(254, 240, 138, 0.2)" stroke={colors.stroke} strokeWidth="2" />
    <path d="M47 130 A26 26 0 0 0 97 130 Z" fill="rgba(254, 240, 138, 0.5)" />
    <rect x="66" y="84" width="12" height="16" {...glass} />
    <rect x="60" y="24" width="24" height="60" rx="4" fill={colors.water} stroke={colors.stroke} strokeWidth="2" />
    <path d="M72 12 V84" stroke={colors.stroke} strokeWidth="2" />
    <path d="M60 74 H42 M34 74 L42 74 M38 70 L42 74 L38 78" {...line} stroke={colors.accent} />
    <path d="M84 34 H102 M98 30 L102 34 L98 38" {...line} stroke={colors.accent} />
    <text x="30" y="68" {...labelText} fill={colors.accent}>H₂O</text>
    <text x="90" y="28" {...labelText} fill={colors.accent}>H₂O</text>
    <g>
      <path d="M168 24 L150 76 Q148 86 160 90 H180 Q192 86 190 76 L172 24" {...glass} fill="rgba(148, 163, 184, 0.06)" />
      <path d="M160 42 H180 L188 70 H152 Z" fill="rgba(254, 240, 138, 0.42)" />
      <path d="M152 70 H188 L190 76 Q192 86 180 90 H160 Q148 86 150 76 Z" fill="rgba(125, 211, 252, 0.45)" />
      <rect x="164" y="14" width="12" height="10" rx="2" {...steel} />
      <rect x="168" y="90" width="4" height="30" {...steel} />
      <rect x="158" y="102" width="24" height="5" rx="1" fill={colors.accent} />
      <path d="M168 120 L170 132 L172 120" {...line} />
      <Beaker x={170} y={170} width={44} height={30} level={0.4} />
    </g>
  </g>
);

const MicroWellPlate = () => {
  const wells = [
    ['#d97706', '#d97706', 'rgba(226,232,240,0.2)', '#d97706'],
    ['rgba(226,232,240,0.2)', '#f8fafc', 'rgba(226,232,240,0.2)', 'rgba(226,232,240,0.2)'],
    ['#ea580c', 'rgba(226,232,240,0.2)', '#ea580c', 'rgba(226,232,240,0.2)'],
    ['#7c3aed', 'rgba(250,204,21,0.6)', 'rgba(250,204,21,0.6)', 'rgba(250,204,21,0.6)'],
  ];
  return (
    <g>
      <rect x="28" y="62" width="184" height="100" rx="8" fill="#1e293b" stroke={colors.stroke} strokeWidth="2" />
      {wells.map((row, r) =>
        row.map((fill, c) => (
          <circle key={`${r}-${c}`} cx={58 + c * 42} cy={78 + r * 23} r="9" fill={fill} stroke={colors.muted} strokeWidth="1.5" />
        ))
      )}
      <Dropper x={142} y={52} />
    </g>
  );
};

const scenes: Record<string, React.FC> = {
  p1_1: CrucibleHeating,
  p2_1: ConductivityCircuit,
  p3_1: NeutralisationCalorimetry,
  p4_1: RedoxTitration,
  p5_1: EquilibriumTubes,
  p6_1: DisappearingCross,
  p7_1: CationTests,
  p8_1: HalideTests,
  p9_1: HydrolysisRace,
  p10_1: CarbonylTests,
  p11_1: HessCalorimetry,
  p12_1: GalvanicCell,
  p13_1: PhTitration,
  p14_1: GasSyringeKinetics,
  p15_1: LigandExchange,
  p16_1: EsterReflux,
  p17_1: MicroWellPlate,
};

export const SetupArt: React.FC<ArtProps & { id: string }> = ({ id, label, className }) => {
  const Scene = scenes[id] ?? CrucibleHeating;
  return (
    <ArtFrame label={label} className={className}>
      <Scene />
    </ArtFrame>
  );
};
