'use client';

import { FaUsers, FaHeart, FaGlobeEurope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-10">
          <div>
            <p className="eyebrow">{t('About Us')}</p>
            <h2 className="section-title">{t('A language platform built around people, not just lessons.')}</h2>
            <p className="section-copy">{t('Native Connects was created around a simple belief: learning a language should help you participate more confidently in the life you are moving toward.')}</p>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {[[FaUsers, 'Human-first'], [FaHeart, 'Purpose-led'], [FaGlobeEurope, 'Europe-focused']].map(([Icon, label]) => <div key={label as string} className="rounded-2xl border border-[#0b192c]/10 bg-white/60 p-3.5"><Icon className="text-[#9b1c31]" /><p className="mt-2 text-xs sm:text-sm font-semibold">{t(label as string)}</p></div>)}
            </div>
          </div>
          <div className="relative rounded-[1.75rem] bg-[#0b192c] p-5 sm:p-7 lg:p-8 text-[#f7f4ef] shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">{t('Our approach')}</p>
            <blockquote className="mt-4 text-xl sm:text-2xl font-medium leading-relaxed tracking-tight">{t('We are not here to teach you words. We are here to help you feel at home in another language.')}</blockquote>
            <p className="mt-4 rounded-xl bg-[#f7f4ef]/5 p-3.5 text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/65">{t('Native Connects combines native-speaker guidance, practical conversation, flexible online learning and cultural context.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
