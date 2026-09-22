'use client';

import { FaQuoteLeft, FaUsers, FaHeart, FaGlobeEurope } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
          <div>
            <p className="eyebrow">{t('About Us')}</p>
            <h2 className="section-title">{t('A language platform built around people, not just lessons.')}</h2>
            <p className="section-copy">{t('Native Connects was created around a simple belief: learning a language should help you participate more confidently in the life you are moving toward.')}</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#0b192c]/60">{t('Tell the founder story here — who started Native Connects, what problem they saw, and why this platform exists. This personal context is one of the strongest trust-building opportunities on the page.')}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[[FaUsers, 'Human-first'], [FaHeart, 'Purpose-led'], [FaGlobeEurope, 'Europe-focused']].map(([Icon, label]) => <div key={label as string} className="rounded-2xl border border-[#0b192c]/10 bg-white/60 p-4"><Icon className="text-[#9b1c31]" /><p className="mt-3 text-sm font-semibold">{t(label as string)}</p></div>)}
            </div>
          </div>
          <div className="relative rounded-[2rem] bg-[#0b192c] p-8 text-[#f7f4ef] shadow-2xl sm:p-10">
            <FaQuoteLeft className="text-3xl text-[#c19a68]" />
            <blockquote className="mt-8 text-2xl font-medium leading-10 tracking-tight">{t('We are not here to teach you words. We are here to help you feel at home in another language.')}</blockquote>
            <div className="mt-10 flex items-center gap-4 border-t border-[#f7f4ef]/10 pt-6">
              <div className="h-12 w-12 rounded-full bg-[#c19a68]/20" />
              <div><p className="font-semibold">{t('Founder story')}</p><p className="text-xs text-[#f7f4ef]/45">{t('Add founder name & role')}</p></div>
            </div>
            <p className="mt-7 rounded-xl bg-[#f7f4ef]/5 p-4 text-xs leading-6 text-[#f7f4ef]/45">{t('Launch note: replace this placeholder with the real founder introduction, photo and reason Native Connects was created.')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
