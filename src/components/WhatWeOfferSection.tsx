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
    <section id="offer" className="bg-[#f7f4ef] py-24">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-4xl bg-[#0b192c] p-7 text-[#f7f4ef] sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#c19a68]">{t('How learning works')}</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{t('A clear path from first lesson to real progress.')}</h2>
            <p className="mt-5 text-sm leading-7 text-[#f7f4ef]/60">{t('Our courses are structured around what you do, practise and master next, not just a list of benefits.')}</p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, description], index) => (
              <article key={title} className="relative rounded-2xl border border-[#f7f4ef]/10 bg-[#f7f4ef]/5 p-6 transition hover:border-[#c19a68]/45 hover:bg-[#f7f4ef]/8">
                <span className="text-xs font-bold tracking-[.16em] text-[#c19a68]">0{index + 1}</span>
                <Icon className="text-xl text-[#c19a68]" />
                <h3 className="mt-5 font-semibold">{t(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-[#f7f4ef]/55">{t(description)}</p>
                {index < steps.length - 1 && <FaArrowRight className="absolute -right-2.5 top-1/2 hidden text-xs text-[#c19a68] lg:block" />}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
