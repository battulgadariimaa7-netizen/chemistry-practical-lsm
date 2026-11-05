import React from 'react';
import { Language, NavigationTab } from '../types/chemistry';
import { getTranslation } from '../data/translations';
import { rulePhotos } from '../data/safetyPhotos';
import { PhotoCredit } from './PhotoCredit';
import { BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  language: Language;
  onNavigate: (tab: NavigationTab) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ language, onNavigate }) => {
  const t = getTranslation(language);
  const en = language === 'en';
  // A student in goggles, gloves and a coat: the practice this site teaches.
  const photo = rulePhotos[9];
  const stats = [
    { value: '17', label: en ? 'Core Practical Chapters' : 'Үндсэн бүлэг' },
    { value: '15', label: en ? 'Laboratory Safety Rules' : 'Алтан дүрэм' },
    { value: '±0.05', label: en ? 'Burette Precision (cm³)' : 'Бюреткийн алдаа (см³)' },
    { value: 'AO3', label: en ? 'Investigation Skills' : 'Туршилтын үнэлгээ' },
  ];

  return (
    <section className="bg-linear-to-br from-cyan-50 via-white to-sky-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-cyan-700 tracking-wide uppercase">
              <span>{en ? 'Cambridge 9701 Syllabus 2025–2027' : 'Cambridge 9701 хөтөлбөр 2025–2027'}</span>
              <span aria-hidden="true">·</span>
              <span>{en ? 'Paper 3 & Paper 5' : 'Paper 3 ба Paper 5'}</span>
              <span aria-hidden="true">·</span>
              <span>{en ? 'Grade 11–12' : '11–12-р анги'}</span>
            </div>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Chemistry Practical & LSM
            </h1>
            <p className="mt-1 text-base sm:text-lg font-medium text-slate-700 text-balance">
              {en ? 'Laboratory Safety Management' : 'Лабораторийн сургалт, туршилт ба аюулгүй ажиллагааны нэгдсэн систем'}
            </p>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.hero.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('lessons')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.hero.startExperiment}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('safety_hub')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.viewSafety}</span>
              </button>
            </div>
          </div>

          <figure className="space-y-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white ring-1 ring-cyan-100 shadow-md">
              <img src={photo.src} alt={en ? photo.altEn : photo.altMn} className="w-full h-full object-cover" />
            </div>
            <PhotoCredit photo={photo} language={language} cropped={photo.cropped} />
          </figure>
        </div>

        <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.value} className="bg-white/80 border border-slate-200 rounded-xl px-4 py-3">
              <dd className="text-lg font-bold text-slate-900 tabular-nums">{stat.value}</dd>
              <dt className="text-xs text-slate-500">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
