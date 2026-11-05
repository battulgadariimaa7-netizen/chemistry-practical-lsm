import React, { useEffect, useState } from 'react';
import { Language, UserRole, NavigationTab, PracticalExperiment, PrepJob } from './types/chemistry';
import { teacherNotices } from './data/solutionRecipes';
import { useStoredState } from './hooks/useStoredState';
import { getTranslation } from './data/translations';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ControlCenter } from './components/ControlCenter';
import { SafetyHub } from './components/SafetyHub';
import { PracticalLessons } from './components/PracticalLessons';
import { GlasswareCatalog } from './components/GlasswareCatalog';
import { ChemicalSafetyDb } from './components/ChemicalSafetyDb';
import { ResultsAnalysisStudio } from './components/ResultsAnalysisStudio';
import { DigitalLabNotebook } from './components/DigitalLabNotebook';
import { TeacherLabDashboard } from './components/TeacherLabDashboard';
import { EmergencyModal } from './components/EmergencyModal';

const LANGUAGE_KEY = 'chem_lab_language';
const PRE_LAB_CHECKS_KEY = 'chem_lab_pre_lab_checks';

const defaultPreLabChecks = {
  rulesReviewed: false,
  ppeSelected: false,
  quizCleared: false,
  teacherApproved: false,
};

const loadLanguage = (): Language => {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === 'mn' ? 'mn' : 'en';
  } catch {
    return 'en';
  }
};

// Sign-offs belong to one lab session, so they survive a reload but not a new session.
const loadPreLabChecks = (): typeof defaultPreLabChecks => {
  try {
    const stored = sessionStorage.getItem(PRE_LAB_CHECKS_KEY);
    return stored ? { ...defaultPreLabChecks, ...JSON.parse(stored) } : defaultPreLabChecks;
  } catch {
    return defaultPreLabChecks;
  }
};

export default function App() {
  const [language, setLanguage] = useState<Language>(loadLanguage);
  const [role, setRole] = useState<UserRole>('student');
  const [currentTab, setCurrentTab] = useState<NavigationTab>('dashboard');
  const [prepJobs, setPrepJobs] = useStoredState<PrepJob[]>('chem_lab_prep_jobs', []);

  // Pre-lab authorization checklist state
  const [preLabChecks, setPreLabChecks] = useState(loadPreLabChecks);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      // Storage can be blocked; the choice then lasts only until reload.
    }
  }, [language]);

  useEffect(() => {
    try {
      sessionStorage.setItem(PRE_LAB_CHECKS_KEY, JSON.stringify(preLabChecks));
    } catch {
      // Storage can be blocked; the checklist then lasts only until reload.
    }
  }, [preLabChecks]);

  // Emergency Modal state
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [emergencyProtocolId, setEmergencyProtocolId] = useState<string | undefined>(undefined);

  // Experiment to preload into notebook
  const [preloadedExperiment, setPreloadedExperiment] = useState<PracticalExperiment | null>(null);

  const t = getTranslation(language);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'mn' : 'en'));
  };

  const handleTogglePreLabCheck = (key: 'rulesReviewed' | 'ppeSelected' | 'quizCleared' | 'teacherApproved') => {
    setPreLabChecks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleClearQuiz = () => {
    setPreLabChecks((prev) => ({
      ...prev,
      quizCleared: true,
    }));
  };

  const handleOpenEmergency = (protocolId?: string) => {
    setEmergencyProtocolId(protocolId);
    setEmergencyModalOpen(true);
  };

  const handleSendToNotebook = (experiment: PracticalExperiment) => {
    setPreloadedExperiment(experiment);
    setCurrentTab('notebook');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans xl:pl-60 print:pl-0">
      {/* Navigation Top Bar strictly adhering to Top Bar Contract */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        language={language}
        onToggleLanguage={handleToggleLanguage}
        role={role}
        onSelectRole={setRole}
        noticeCount={role === 'teacher' ? teacherNotices(prepJobs).length : 0}
      />

      {/* Hero Banner only shown on Dashboard view */}
      {currentTab === 'dashboard' && (
        <HeroBanner language={language} onNavigate={setCurrentTab} />
      )}

      {/* Main Workspace Stage */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'dashboard' && (
          <ControlCenter
            language={language}
            onNavigate={setCurrentTab}
            preLabChecks={preLabChecks}
            onTogglePreLabCheck={handleTogglePreLabCheck}
            onOpenEmergencyModal={handleOpenEmergency}
          />
        )}

        {currentTab === 'safety_hub' && (
          <SafetyHub language={language} />
        )}

        {currentTab === 'lessons' && (
          <PracticalLessons
            language={language}
            role={role}
            onSendToNotebook={handleSendToNotebook}
            onTestPassed={handleClearQuiz}
            onOpenSafetyRules={() => setCurrentTab('safety_hub')}
          />
        )}

        {currentTab === 'apparatus' && (
          <GlasswareCatalog language={language} />
        )}

        {currentTab === 'chemicals' && (
          <ChemicalSafetyDb language={language} />
        )}

        {currentTab === 'results' && (
          <ResultsAnalysisStudio language={language} />
        )}

        {currentTab === 'notebook' && (
          <DigitalLabNotebook
            language={language}
            preloadedExperiment={preloadedExperiment}
            onPreloadUsed={() => setPreloadedExperiment(null)}
          />
        )}

        {currentTab === 'management' && (
          <TeacherLabDashboard
            language={language}
            role={role}
            prepJobs={prepJobs}
            onChangePrepJobs={setPrepJobs}
          />
        )}
      </main>

      {/* Emergency Modal */}
      <EmergencyModal
        language={language}
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        initialProtocolId={emergencyProtocolId}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-8 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 text-xs text-slate-500 font-mono">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-bold text-slate-800">Chemistry Practical & LSM</span> — Cambridge International AS & A Level Chemistry (9701)
            </div>
            <div>{language === 'en' ? 'EN / MN Bilingual Edition' : 'Англи / монгол хоёр хэлтэй хувилбар'}</div>
          </div>
          <p className="text-center sm:text-left">
            {language === 'en'
              ? 'Independent study tool, not an official Cambridge or publisher product. Always follow your teacher and your school’s laboratory rules. After your first visit, this site also opens without internet.'
              : 'Бие даасан сургалтын хэрэгсэл, Cambridge эсвэл хэвлэлийн газрын албан ёсны бүтээгдэхүүн биш. Багшийнхаа заавар, сургуулийнхаа лабораторийн дүрмийг үргэлж мөрдөнө үү. Анх нээсний дараа энэ сайт интернэтгүй ч нээгдэнэ.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
