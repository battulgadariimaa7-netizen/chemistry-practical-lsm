import React, { useState } from 'react';
import { Language, PrepJob, UserRole } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { mockInventory, mockBreakage } from '../data/mockManagement';
import { jobReadyDate, jobTitle, teacherNotices, todayText } from '../data/solutionRecipes';
import { useStoredState } from '../hooks/useStoredState';
import { EquipmentRegister } from './EquipmentRegister';
import { LabJournal } from './LabJournal';
import { SolutionPrep } from './SolutionPrep';
import { StudentReports } from './StudentReports';
import { SafetyArt } from './art/SafetyArt';
import { BellRing, CheckCircle2 } from 'lucide-react';

interface TeacherLabDashboardProps {
  language: Language;
  role: UserRole;
  prepJobs: PrepJob[];
  onChangePrepJobs: React.Dispatch<React.SetStateAction<PrepJob[]>>;
}

const assessmentRubric = [
  {
    titleEn: 'Skill 1: Manipulation, Measurement & Observation (MMO)',
    titleMn: 'Чадвар 1: Ажиллагаа, хэмжилт ба ажиглалт (MMO)',
    itemsEn: [
      'Accurately align liquid meniscus without parallax error.',
      'Maintain continuous swirling during titrations.',
      'Record burette readings to nearest 0.05 cm³ consistently.',
      'Record observations including color nuances and effervescence.',
    ],
    itemsMn: [
      'Шингэний менискийг параллаксын алдаагүй зөв уншина.',
      'Титрлэлтийн үед колбыг тасралтгүй эргүүлж хутгана.',
      'Бюреткийн заалтыг байнга 0.05 см³ нарийвчлалтай бичнэ.',
      'Өнгөний нарийн өөрчлөлт, хий ялгаралт зэрэг ажиглалтыг тэмдэглэнэ.',
    ],
  },
  {
    titleEn: 'Skill 2: Presentation of Data & Observations (PDO)',
    titleMn: 'Чадвар 2: Өгөгдөл ба ажиглалтын танилцуулга (PDO)',
    itemsEn: [
      'Tabulate raw measurements with explicit headings and units (cm³, g, °C).',
      'Maintain uniform decimal precision across columns.',
      'Plot line graphs with axes scaled to occupy ≥ 50% of graph grid.',
      'Draw smooth best-fit lines or curves without force-fitting outliers.',
    ],
    itemsMn: [
      'Анхны хэмжилтийг тодорхой гарчиг, нэгжтэй (см³, г, °C) хүснэгтэд оруулна.',
      'Багана бүрт таслалаас хойших оронгийн тоог ижил байлгана.',
      'Графикийн тэнхлэгийг торны ≥ 50%-ийг эзлэхээр масштаблан зурна.',
      'Хамгийн сайн тохирох шулуун эсвэл муруйг гажсан цэгт хүчээр тааруулалгүй жигд татна.',
    ],
  },
  {
    titleEn: 'Skill 3: Analysis, Conclusions & Evaluation (ACE)',
    titleMn: 'Чадвар 3: Шинжилгээ, дүгнэлт ба үнэлгээ (ACE)',
    itemsEn: [
      'Select only concordant titres within ±0.10 cm³ for mean calculation.',
      'Calculate stoichiometric molarities, ΔH and percentage uncertainties.',
      'Identify genuine apparatus errors vs procedural limitations.',
      'Propose concrete, reproducible experimental improvements.',
    ],
    itemsMn: [
      'Дунджийг тооцоолоход зөвхөн ±0.10 см³ дотор тохирсон титрүүдийг сонгоно.',
      'Стехиометрийн моляр концентраци, ΔH болон хувийн алдааг тооцоолно.',
      'Багажийн жинхэнэ алдааг аргачлалын хязгаарлалтаас ялгана.',
      'Давтан хийж болох тодорхой сайжруулалт санал болгоно.',
    ],
  },
  {
    titleEn: 'Skill 4: Planning & Safety Assessment (Paper 5)',
    titleMn: 'Чадвар 4: Төлөвлөлт ба аюулгүй байдлын үнэлгээ (Paper 5)',
    itemsEn: [
      'Identify independent, dependent, and controlled variables.',
      'Specify suitable apparatus capacities and reagent concentrations.',
      'Identify major chemical hazards with corresponding PPE control measures.',
      'Formulate step-by-step reproducible experimental instructions.',
    ],
    itemsMn: [
      'Бие даасан, хамааралтай болон хянагдах хувьсагчийг тодорхойлно.',
      'Тохирох багажийн багтаамж, урвалжийн концентрацийг заана.',
      'Химийн гол аюулыг тодорхойлж, харгалзах хамгаалах хэрэгслийг заана.',
      'Давтан хийж болох туршилтын алхам алхмаар заавар боловсруулна.',
    ],
  },
];

type StaffTab = 'solutions' | 'equipment' | 'journal' | 'rubric' | 'reports';

export const TeacherLabDashboard: React.FC<TeacherLabDashboardProps> = ({
  language,
  role,
  prepJobs,
  onChangePrepJobs,
}) => {
  const t = getTranslation(language);
  const en = language === 'en';
  const [activeTab, setActiveTab] = useState<StaffTab>('solutions');

  const [inventoryList, setInventoryList] = useStoredState('chem_lab_staff_inventory', mockInventory);
  const [breakageList, setBreakageList] = useStoredState('chem_lab_staff_breakage', mockBreakage);

  const handleResetSampleData = () => {
    setInventoryList(mockInventory);
    setBreakageList(mockBreakage);
  };

  const handleAcknowledge = (jobId: string) => {
    onChangePrepJobs((current) => current.map((job) => (job.id === jobId ? { ...job, acknowledgedOn: todayText() } : job)));
  };

  const tabs: { id: StaffTab; label: string }[] = [
    { id: 'solutions', label: t.management.tabSolutions },
    { id: 'equipment', label: t.management.tabEquipment },
    { id: 'journal', label: t.management.tabJournal },
    { id: 'rubric', label: t.management.tabGrading },
    { id: 'reports', label: en ? 'Student Reports' : 'Сурагчдын тайлан' },
  ];
  const notices = role === 'teacher' ? teacherNotices(prepJobs) : [];

  return (
    <>
    {/* Soft wash behind the top of the page. It sits outside the content so that it reaches both edges. */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-16 lg:top-0 h-[30rem] bg-linear-to-b from-cyan-100/80 via-sky-50/60 to-transparent print:hidden" />
    <div className="relative space-y-8">
      {/* Top Banner and Navigation */}
      <div className="bg-white/90 backdrop-blur-sm border border-white rounded-2xl p-6 shadow-sm print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium uppercase tracking-wider text-cyan-700 mb-1">
              {role === 'teacher'
                ? (en ? 'Teacher Management Console' : 'Багшийн удирдлагын хэсэг')
                : (en ? 'Laboratory Technician Portal' : 'Лаборантын бүртгэлийн хэсэг')}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {t.management.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.management.subtitle}
            </p>
          </div>

          {/* Tab Strip */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start md:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-cyan-800 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Honest labelling: nothing here is shared, and only the register holds sample data */}
        {activeTab === 'equipment' && (
          <div className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-100 text-xs text-amber-900 flex flex-wrap items-center justify-between gap-2">
            <span>
              {en
                ? 'Sample data for demonstration. Changes are saved only in this browser, not shared with other staff.'
                : 'Энэ бол жишээ мэдээлэл. Өөрчлөлт зөвхөн энэ хөтөчид хадгалагдах ба бусад ажилтанд харагдахгүй.'}
            </span>
            <button onClick={handleResetSampleData} className="font-semibold underline underline-offset-2 hover:text-amber-700">
              {en ? 'Reset sample data' : 'Жишээ мэдээллийг сэргээх'}
            </button>
          </div>
        )}
        {(activeTab === 'solutions' || activeTab === 'journal') && (
          <p className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-100 text-xs text-amber-900">
            {en
              ? 'Saved only in this browser, so staff on other devices do not see it.'
              : 'Зөвхөн энэ хөтөчид хадгалагдах тул бусад төхөөрөмж дээрх ажилтанд харагдахгүй.'}
          </p>
        )}
      </div>

      {/* Notices for the teacher */}
      {notices.length > 0 && (
        <section aria-label={en ? 'Notices for the teacher' : 'Багшид ирсэн мэдэгдэл'} className="bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 shadow-sm space-y-3 print:hidden">
          <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2">
            <BellRing className="w-4 h-4" />
            <span>{en ? 'Practicals Ready' : 'Бэлэн болсон туршилт'}</span>
          </h3>
          {notices.map((job) => (
            <div key={job.id} className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-white border border-emerald-100 shadow-xs text-xs text-slate-800">
              <div className="min-w-0">
                <div className="font-bold text-slate-900">{jobTitle(job, language)}</div>
                <div className="text-slate-600 tabular-nums">
                  {en ? 'Solutions ready' : 'Уусмал бэлэн болсон'}: {jobReadyDate(job)}
                  {job.neededOn && <span> · {en ? 'Lesson date' : 'Хичээлийн огноо'}: {job.neededOn}</span>}
                  {job.preparedBy && <span> · {en ? 'Prepared by' : 'Бэлтгэсэн'}: {job.preparedBy}</span>}
                </div>
              </div>
              <button
                onClick={() => handleAcknowledge(job.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{en ? 'Seen' : 'Танилцсан'}</span>
              </button>
            </div>
          ))}
        </section>
      )}

      {/* STUDENT REPORTS */}
      {activeTab === 'reports' && <StudentReports language={language} />}

      {/* SOLUTION PREPARATION */}
      {activeTab === 'solutions' && <SolutionPrep language={language} jobs={prepJobs} onChangeJobs={onChangePrepJobs} />}

      {/* GLASSWARE, EQUIPMENT AND BREAKAGES */}
      {activeTab === 'equipment' && (
        <EquipmentRegister
          language={language}
          items={inventoryList}
          onChangeItems={setInventoryList}
          breakages={breakageList}
          onChangeBreakages={setBreakageList}
        />
      )}

      {/* LAB TECHNICIAN'S DAILY JOURNAL */}
      {activeTab === 'journal' && <LabJournal language={language} jobs={prepJobs} breakages={breakageList} />}

      {/* TAB 4: CAMBRIDGE AO3 ASSESSMENT RUBRIC */}
      {activeTab === 'rubric' && (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-full sm:w-32 max-w-xs aspect-[4/3] shrink-0 rounded-lg overflow-hidden">
              <SafetyArt id="rubric" />
            </div>
            <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              {language === 'en'
                ? 'Cambridge International 9701 AO3 Assessment Rubric (Paper 3 & 5)'
                : 'Cambridge International 9701 AO3 үнэлгээний шалгуур (Paper 3 ба 5)'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'en'
                ? 'Official Assessment Objective 3: Experimental skills and investigations'
                : 'Албан ёсны үнэлгээний зорилт 3: Туршилтын чадвар ба судалгаа'}
            </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {assessmentRubric.map((skill) => (
              <div key={skill.titleEn} className="p-4 rounded-xl bg-linear-to-br from-cyan-50/70 to-white border border-cyan-100 space-y-2">
                <span className="text-[11px] font-bold text-cyan-700 uppercase">
                  {language === 'en' ? skill.titleEn : skill.titleMn}
                </span>
                <ul className="space-y-1 text-slate-700">
                  {(language === 'en' ? skill.itemsEn : skill.itemsMn).map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};
