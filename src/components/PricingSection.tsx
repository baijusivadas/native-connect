'use client';

import Link from 'next/link';
import { FaArrowRight, FaComments, FaCheck } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-[#0b192c] p-5 text-[#f7f4ef] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t('Learning plans')}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t('Find the right learning plan for your goal.')}</h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/60">{t('Course scope depends on your level, target exam, class format and weekly availability. Tell us what you need and we will prepare a clear recommendation.')}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-[1.5rem] border border-[#c19a68]/45 bg-[#c19a68]/10 p-5 sm:p-7">
              <FaComments className="text-xl sm:text-2xl text-[#c19a68]" />
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold">{t('Request a course quote')}</h3>
              <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/65">{t('Share your language, current level, target date and preferred class size. We will respond with a tailored course recommendation.')}</p>
              <Link
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#f7f4ef] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0b192c] transition hover:bg-white cursor-pointer"
              >
                {t('Request your quote')} <FaArrowRight className="text-[10px]" />
              </Link>
            </div>
            <div className="rounded-[1.5rem] border border-[#f7f4ef]/10 bg-[#f7f4ef]/5 p-5 sm:p-7">
              <h3 className="text-lg sm:text-xl font-semibold">{t('Your quote includes')}</h3>
              <ul className="mt-4 space-y-3">{['Recommended starting level', 'Weekly schedule and class format', 'Exam or professional goal plan', 'Tutor and course matching'].map((item) => <li key={item} className="flex gap-2.5 text-xs sm:text-sm text-[#f7f4ef]/75"><FaCheck className="mt-0.5 shrink-0 text-xs text-[#c19a68]" />{t(item)}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
