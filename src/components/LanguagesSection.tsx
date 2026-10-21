'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { LANGUAGE_OPTIONS } from '@/constants/pageContent';

export default function LanguagesSection() {
  const { t } = useLanguage();

  const handleBookDemo = (languageName: string) => {
    window.dispatchEvent(
      new CustomEvent('native-connects:open-demo', {
        detail: { language: languageName, goal: `Learn ${languageName}` },
      })
    );
  };

  return (
    <section id="languages" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-[#0b192c] p-5 text-[#f7f4ef] sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#c19a68]">{t('Our Languages')}</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t('Learn from people who live the language.')}</h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/60">{t('Choose a language, tell us your goal, and build practical confidence with native-speaking tutors.')}</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {LANGUAGE_OPTIONS.map((lang) => (
              <article key={lang.name} className={`group flex flex-col justify-between rounded-[1.5rem] border p-5 sm:p-6 transition duration-300 hover:-translate-y-1 ${lang.featured ? 'border-[#c19a68]/55 bg-[#c19a68]/10' : 'border-[#f7f4ef]/10 bg-[#f7f4ef]/5 hover:border-[#c19a68]/40'}`}>
                <div>
                  <div className="flex items-start justify-between">
                    <span className="text-3xl sm:text-4xl">{lang.icon}</span>
                    {lang.featured && <span className="rounded-full bg-[#9b1c31] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">{t('Popular')}</span>}
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold">{t(lang.name)}</h3>
                  <p className="mt-2 min-h-[3.5rem] text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/60">{t(lang.description)}</p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-[#f7f4ef]/10 space-y-2.5">
                  {lang.name === 'German' && (
                    <Link
                      href="/german-for-nurses"
                      className="block w-full rounded-xl bg-[#9b1c31] px-4 py-2.5 text-center text-xs font-bold text-white transition hover:bg-[#85172a] shadow-sm"
                    >
                      {t('German for nurses')} →
                    </Link>
                  )}
                  <div className="pt-0.5">
                    <button
                      type="button"
                      onClick={() => handleBookDemo(lang.name)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#c19a68] hover:text-white transition group cursor-pointer"
                    >
                      <span>{t('Book a Free Demo')}</span>
                      <FaArrowRight className="text-[9px] transition group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
