'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
  { name: 'German', description: 'Build your career, study and everyday confidence in Germany.', icon: '🇩🇪', featured: true },
  { name: 'French', description: 'Speak naturally in everyday situations and connect with French culture.', icon: '🇫🇷' },
  { name: 'Italian', description: 'Learn the language of travel, culture, food and connection.', icon: '🇮🇹' },
  { name: 'Romanian', description: 'Start a practical and rewarding journey with a rich language.', icon: '🇷🇴' },
];

export default function LanguagesSection() {
  const { t } = useLanguage();
  return (
    <section id="languages" className="bg-[#0b192c] py-24 text-[#f7f4ef]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t('Our Languages')}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t('Learn from people who live the language.')}</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#f7f4ef]/60">{t('Choose a language, tell us your goal, and build practical confidence with native-speaking tutors.')}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {languages.map((lang) => (
            <article key={lang.name} className={`group rounded-[1.75rem] border p-7 transition duration-300 hover:-translate-y-1 ${lang.featured ? 'border-[#c19a68]/55 bg-[#c19a68]/10' : 'border-[#f7f4ef]/10 bg-[#f7f4ef]/5 hover:border-[#c19a68]/40'}`}>
              <div className="flex items-start justify-between">
                <span className="text-4xl">{lang.icon}</span>
                {lang.featured && <span className="rounded-full bg-[#9b1c31] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{t('Popular')}</span>}
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{t(lang.name)}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-[#f7f4ef]/60">{t(lang.description)}</p>
              <Link href="#pricing" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#c19a68]">{t('View learning options')} <FaArrowRight className="text-[10px] transition group-hover:translate-x-1" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
