'use client';

import Link from 'next/link';
import { FaArrowRight, FaComments, FaCheck } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="bg-[#f7f4ef] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-4xl bg-[#0b192c] p-7 text-[#f7f4ef] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t('Learning plans')}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t('Find the right learning plan for your goal.')}</h2>
            <p className="mt-5 text-sm leading-7 text-[#f7f4ef]/60">{t('Course scope depends on your level, target exam, class format and weekly availability. Tell us what you need and we will prepare a clear recommendation.')}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[1.75rem] border border-[#c19a68]/45 bg-[#c19a68]/10 p-7 sm:p-9">
              <FaComments className="text-2xl text-[#c19a68]" />
              <h3 className="mt-6 text-2xl font-semibold">{t('Book a free demo')}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#f7f4ef]/65">{t('Share your language, current level, target date and preferred class size. We will recommend a suitable learning format and next step.')}</p>
              <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#f7f4ef] px-5 py-3 text-sm font-bold text-[#0b192c] transition hover:bg-white">{t('Book a Free Demo')} <FaArrowRight className="text-[10px]" /></Link>
            </div>
            <div className="rounded-[1.75rem] border border-[#f7f4ef]/10 bg-[#f7f4ef]/5 p-7 sm:p-9">
              <h3 className="text-xl font-semibold">{t('Your quote includes')}</h3>
              <ul className="mt-6 space-y-4">{['Recommended starting level', 'Weekly schedule and class format', 'Exam or professional goal plan', 'Tutor and course matching'].map((item) => <li key={item} className="flex gap-3 text-sm text-[#f7f4ef]/75"><FaCheck className="mt-1 shrink-0 text-xs text-[#c19a68]" />{t(item)}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
