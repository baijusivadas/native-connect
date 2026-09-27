'use client';

import { FaUsers, FaHeart, FaGlobeEurope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-[#f7f4ef] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">{t('About Us')}</p>
            <h2 className="section-title">{t('A language platform built around people, not just lessons.')}</h2>
            <p className="section-copy">{t('Native Connects was created around a simple belief: learning a language should help you participate more confidently in the life you are moving toward.')}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[[FaUsers, 'Human-first'], [FaHeart, 'Purpose-led'], [FaGlobeEurope, 'Europe-focused']].map(([Icon, label]) => <div key={label as string} className="rounded-2xl border border-[#0b192c]/10 bg-white/60 p-4"><Icon className="text-[#9b1c31]" /><p className="mt-3 text-sm font-semibold">{t(label as string)}</p></div>)}
            </div>
          </div>
          <div className="relative rounded-[2rem] bg-[#0b192c] p-8 text-[#f7f4ef] shadow-2xl sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">{t('Our approach')}</p>
            <blockquote className="mt-8 text-2xl font-medium leading-10 tracking-tight">{t('We are not here to teach you words. We are here to help you feel at home in another language.')}</blockquote>
            <p className="mt-7 rounded-xl bg-[#f7f4ef]/5 p-4 text-sm leading-6 text-[#f7f4ef]/65">{t('Native Connects combines native-speaker guidance, practical conversation, flexible online learning and cultural context.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
