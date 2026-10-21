'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { ABOUT_CORE_VALUES } from '@/constants/pageContent';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-8">

          {/* Left Column: Heading, Copy, Core Values (5 Cols) */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-xs font-bold uppercase tracking-[.2em] text-[#9b1c31]">
              {t('About Us')}
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0b192c] sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              {t('A language platform built around people, not just lessons.')}
            </h2>

            <p className="mt-4 text-xs leading-relaxed text-[#0b192c]/70 sm:text-sm">
              {t(
                'Native Connect was founded on a simple belief: learning a language should help you step into your new life with confidence and clarity.'
              )}
            </p>

            {/* Core Values Badges */}
            <div className="mt-6 grid gap-2.5 sm:grid-cols-3">
              {ABOUT_CORE_VALUES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 rounded-2xl border border-[#0b192c]/10 bg-white/70 p-3 shadow-sm transition-all duration-200 hover:border-[#c19a68]/50 hover:bg-white"
                >
                  <Icon className="text-[#9b1c31] shrink-0" aria-hidden="true" />
                  <p className="text-xs font-semibold text-[#0b192c]">
                    {t(label)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Column: Interactive Graphic & Photo (3 Cols) */}
          <div className="relative flex items-center justify-center py-4 lg:col-span-3">
            {/* Main Rounded Image Frame */}
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105">
              <Image
                src="/img/Students_practicing.avif"
                alt="Students practicing language online with native tutor"
                width={320}
                height={380}
                className="h-[280px] w-[240px] object-cover sm:h-[320px] sm:w-[260px]"
              />
            </div>

            {/* Floating Badges Around Image */}
          </div>

          {/* Right Column: High Contrast Highlight Block (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-[1.75rem] bg-[#0b192c] p-6 text-[#f7f4ef] shadow-2xl sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c19a68]">
                {t('Our Approach')}
              </p>

              <blockquote className="mt-4 text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl">
                “{t('We are not here to just teach you words. We are here to help you feel completely at home in another language.')}”
              </blockquote>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/10 p-3.5 backdrop-blur-sm">
                <p className="text-xs leading-relaxed text-slate-200">
                  {t(
                    'Native Connect combines native-speaker guidance, real-world conversation practice, flexible online learning, and cultural immersion.'
                  )}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}