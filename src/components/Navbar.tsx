import React, { useState } from 'react';
import { Language, UserRole, NavigationTab } from '../types/chemistry';
import {
  AlertTriangle,
  BookOpen,
  Calculator,
  ClipboardCheck,
  FlaskConical,
  Globe,
  House,
  Menu,
  NotebookPen,
  ShieldCheck,
  TestTubes,
  UserCheck,
  Users,
  X,
} from 'lucide-react';

interface NavbarProps {
  currentTab: NavigationTab;
  onSelectTab: (tab: NavigationTab) => void;
  language: Language;
  onToggleLanguage: () => void;
  role: UserRole;
  onSelectRole: (role: UserRole) => void;
  noticeCount: number;
}

const navItems: { tab: NavigationTab; en: string; mn: string; icon: React.ElementType }[] = [
  { tab: 'dashboard', en: 'Home', mn: 'Нүүр', icon: House },
  { tab: 'safety_hub', en: 'Safety Hub', mn: 'Аюулгүй байдал', icon: ShieldCheck },
  { tab: 'lessons', en: 'Practical Lessons', mn: 'Туршилтын хичээл', icon: BookOpen },
  { tab: 'exam_practice', en: 'Exam Practice', mn: 'Шалгалтын дадлага', icon: ClipboardCheck },
  { tab: 'apparatus', en: 'Apparatus', mn: 'Шил сав, багаж', icon: TestTubes },
  { tab: 'chemicals', en: 'Chemical Safety', mn: 'Бодисын аюул', icon: AlertTriangle },
  { tab: 'results', en: 'Results Studio', mn: 'Үр дүн, тооцоолол', icon: Calculator },
  { tab: 'notebook', en: 'Lab Notebook', mn: 'Цахим дэвтэр', icon: NotebookPen },
  { tab: 'management', en: 'Staff Portal', mn: 'Багш, лаборант', icon: Users },
];

/**
 * A fixed list down the left side from 1024px up; a top bar with a menu button on narrower screens.
 * It starts at lg, not xl: a 1280px laptop screen leaves the page about 1265px once the scroll bar is drawn.
 */
export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  language,
  onToggleLanguage,
  role,
  onSelectRole,
  noticeCount,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelectTab = (tab: NavigationTab) => {
    onSelectTab(tab);
    setMenuOpen(false);
  };

  const brand = (
    <button
      onClick={() => handleSelectTab('dashboard')}
      className="flex items-center gap-2.5 min-w-0 text-left text-slate-900 hover:text-cyan-700 transition-colors"
    >
      <span className="shrink-0 w-8 h-8 rounded-lg bg-cyan-700 text-white flex items-center justify-center">
        <FlaskConical className="w-4 h-4" aria-hidden="true" />
      </span>
      <span className="text-sm sm:text-[15px] font-bold leading-tight tracking-tight">Chemistry Practical & LSM</span>
    </button>
  );

  const links = navItems.map(({ tab, en, mn, icon: Icon }) => (
    <button
      key={tab}
      onClick={() => handleSelectTab(tab)}
      aria-current={currentTab === tab ? 'page' : undefined}
      className={`flex items-center gap-2.5 w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
        currentTab === tab
          ? 'bg-cyan-50 text-cyan-700 font-semibold'
          : 'text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span className="flex-1 min-w-0">{language === 'en' ? en : mn}</span>
      {tab === 'management' && noticeCount > 0 && (
        <span
          aria-label={language === 'en' ? `${noticeCount} practicals ready` : `Бэлэн болсон ${noticeCount} туршилт`}
          className="inline-flex items-center justify-center min-w-4 h-4 px-1 rounded-full bg-rose-600 text-white text-[10px] font-bold"
        >
          {noticeCount}
        </span>
      )}
    </button>
  ));

  const languageButton = (
    <button
      onClick={onToggleLanguage}
      className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-800 bg-slate-100 hover:text-cyan-700 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
      title="Toggle English / Mongolian language"
    >
      <Globe className="w-3.5 h-3.5 text-slate-500" />
      <span>{language.toUpperCase()}</span>
    </button>
  );

  const roleSelect = (
    <div className="flex items-center min-w-0 bg-slate-100 text-slate-800 border border-slate-200 rounded-lg px-2.5 py-1.5 gap-2 text-xs font-medium">
      <UserCheck className="w-3.5 h-3.5 shrink-0 text-cyan-700" />
      <select
        value={role}
        onChange={(e) => onSelectRole(e.target.value as UserRole)}
        aria-label={language === 'en' ? 'User role' : 'Хэрэглэгчийн төрөл'}
        className="w-full min-w-0 bg-transparent text-xs font-medium focus:outline-none cursor-pointer"
      >
        <option value="student">{language === 'en' ? 'Student' : 'Сурагч'}</option>
        <option value="teacher">{language === 'en' ? 'Teacher' : 'Багш'}</option>
        <option value="lab_staff">{language === 'en' ? 'Lab Staff' : 'Лаборант'}</option>
      </select>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 lg:static print:hidden">
      {/* Wide screens: the list down the left side */}
      <div className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-60 flex-col bg-white border-r border-slate-200">
        <div className="h-16 shrink-0 px-4 flex items-center border-b border-slate-100">{brand}</div>
        <nav
          aria-label={language === 'en' ? 'Main' : 'Үндсэн цэс'}
          className="flex-1 min-h-0 overflow-y-auto px-3 py-3 space-y-0.5"
        >
          {links}
        </nav>
        <div className="shrink-0 p-3 border-t border-slate-100 flex items-center gap-2">
          {languageButton}
          <div className="flex-1 min-w-0">{roleSelect}</div>
        </div>
      </div>

      {/* Narrower screens: a bar across the top */}
      <div className="lg:hidden h-16 px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4 bg-white/95 backdrop-blur-md border-b border-slate-200">
        {brand}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {languageButton}
          <div className="hidden sm:block">{roleSelect}</div>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={
              menuOpen
                ? (language === 'en' ? 'Close menu' : 'Цэс хаах')
                : (language === 'en' ? 'Open menu' : 'Цэс нээх')
            }
            className="relative p-2 text-slate-700 hover:text-cyan-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            {noticeCount > 0 && !menuOpen && <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-600" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="lg:hidden border-b border-slate-200 bg-white px-4 sm:px-6 py-2">
          <div className="space-y-0.5">
            {links}
            <div className="sm:hidden px-3 py-3 border-t border-slate-100 mt-1">{roleSelect}</div>
          </div>
        </nav>
      )}
    </header>
  );
};
