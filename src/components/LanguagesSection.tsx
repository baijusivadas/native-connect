'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { name: 'French', description: 'Speak with confidence in everyday situations.', icon: '🇫🇷' },
  { name: 'German', description: 'Build your career with German language skills.', icon: '🇩🇪' },
  { name: 'Italian', description: 'Explore rich culture and communicate naturally.', icon: '🇮🇹' },
  { name: 'Romanian', description: 'Start learning a unique and rich language.', icon: '🇷🇴' },
];

const LanguagesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="languages" className="w-full py-24 bg-gray-950 border-t border-gray-800/60">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold uppercase tracking-[0.2em] text-xs sm:text-sm">
            {t('Our Languages')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">
            {t('Learn from Native Speakers')}
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            {t('Choose from four amazing languages and start your journey today.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="group bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 hover:bg-gray-900 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300 origin-left">
                {lang.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{t(lang.name)}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{t(lang.description)}</p>
              <Link
                href="#"
                className="text-purple-400 font-medium text-sm hover:text-purple-300 transition-colors inline-flex items-center gap-1"
              >
                {t('Start Learning')}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;