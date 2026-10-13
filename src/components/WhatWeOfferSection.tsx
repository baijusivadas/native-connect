'use client';

import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { LEARNING_STEPS } from '@/constants/pageContent';

export default function WhatWeOfferSection() {
  const { t } = useLanguage();

  return (
    <section id="offer" className="scroll-mt-24 bg-[#f7f4ef] py-12 sm:py-16">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-[2.5rem] bg-[#0b192c] p-6 text-[#f7f4ef] shadow-2xl sm:p-8 lg:p-12">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">
                {t('How learning works')}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t('A clear path from first lesson to real progress.')}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#f7f4ef]/70 sm:text-sm">
                {t('Our courses are structured around what you do, practise and master next, not just a list of benefits.')}
              </p>
            </div>

          </div>

          {/* Steps Grid */}
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {LEARNING_STEPS.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c19a68]/50 hover:bg-white/10"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[.18em] text-[#c19a68]">
                      0{index + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c19a68]/10 text-[#c19a68] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="text-base" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                    {t(title)}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#f7f4ef]/65 sm:text-sm">
                    {t(description)}
                  </p>
                </div>

                {/* Connecting Arrow for Desktop view */}
                {index < LEARNING_STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 lg:flex h-6 w-6 items-center justify-center rounded-full bg-[#0b192c] border border-white/10 text-[#c19a68]">
                    <FaArrowRight className="text-[10px]" aria-hidden="true" />
                  </div>
                )}
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}