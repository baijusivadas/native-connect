'use client';

import { FaClipboardCheck, FaChalkboardTeacher, FaComments, FaArrowRight, FaLevelUpAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  [FaClipboardCheck, 'Level assessment', 'Start with a short assessment so your course begins at the right A1-C1 level.'],
  [FaChalkboardTeacher, 'Live classes', 'Meet your tutor for structured lessons built around your work, study or relocation goal.'],
  [FaComments, 'Practice and feedback', 'Use new language in realistic situations, then get clear feedback you can act on.'],
  [FaLevelUpAlt, 'Advance with confidence', 'Review your progress, close the gaps and move to the next level when you are ready.'],
] as const;

export default function WhatWeOfferSection() {
  const { t } = useLanguage();
  return (
    <section id="offer" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-[#0b192c] p-5 text-[#f7f4ef] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t('How learning works')}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t('A clear path from first lesson to real progress.')}</h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/60">{t('Our courses are structured around what you do, practise and master next, not just a list of benefits.')}</p>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, description], index) => (
              <article key={title} className="relative rounded-2xl border border-[#f7f4ef]/10 bg-[#f7f4ef]/5 p-4 sm:p-5 transition hover:border-[#c19a68]/45 hover:bg-[#f7f4ef]/8">
                <span className="text-xs font-bold tracking-[.16em] text-[#c19a68]">0{index + 1}</span>
                <Icon className="text-lg sm:text-xl text-[#c19a68] mt-1" />
                <h3 className="mt-3 text-sm sm:text-base font-semibold">{t(title)}</h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#f7f4ef]/55">{t(description)}</p>
                {index < steps.length - 1 && <FaArrowRight className="absolute -right-2.5 top-1/2 hidden text-xs text-[#c19a68] lg:block" />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
