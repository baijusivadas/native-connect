'use client';

import { useState } from 'react';
import {
  FaStar,
  FaCheckCircle,
  FaQuoteLeft,
  FaUserGraduate,
} from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { STUDENT_REVIEWS } from '@/constants/reviews';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'nursing' | 'career'>('all');

  const filteredReviews = STUDENT_REVIEWS.filter((review) => {
    if (activeFilter === 'nursing') return review.program.includes('Nurses') || review.badge.includes('Nurse');
    if (activeFilter === 'career') return !review.program.includes('Nurses');
    return true;
  });

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#f7f4ef] py-10 sm:py-14">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#9b1c31]/10 px-3 py-1 text-xs font-bold text-[#9b1c31]">
            <FaUserGraduate className="text-[10px]" />
            <span>{t('Real student stories')}</span>
          </div>
          <h2 className="section-title mt-2 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
            {t('What Our Students Say')}
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#0b192c]/65">
            {t(
              'Hear from nursing candidates, professionals and learners who built fluency, cleared official exams, and began their careers in Germany.',
            )}
          </p>

          {/* Filter Pills */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
            {[
              { id: 'all', label: t('All Stories') },
              { id: 'nursing', label: t('German for Nurses') },
              { id: 'career', label: t('Goethe & Career') },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as 'all' | 'nursing' | 'career')}
                className={`rounded-full px-3 py-1 text-xs font-bold transition cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0b192c] text-white shadow-sm'
                    : 'bg-white border border-[#0b192c]/10 text-[#0b192c]/70 hover:border-[#c19a68]/60 hover:text-[#0b192c]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-[#0b192c]/10 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c19a68]/60 hover:shadow-lg hover:shadow-[#0b192c]/5"
            >
              <div>
                {/* Header: Stars & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-[#c19a68]">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                  <span className="rounded-full bg-[#9b1c31]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#9b1c31]">
                    {review.badge}
                  </span>
                </div>

                {/* Score / Outcome tag */}
                <div className="mt-2.5">
                  <span className="inline-block rounded-md bg-[#f7f4ef] px-2 py-0.5 text-[11px] font-semibold text-[#0b192c]/75 border border-[#0b192c]/5">
                    {review.scoreOrOutcome}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mt-2.5">
                  <FaQuoteLeft className="text-xs text-[#c19a68]/30 mb-1" />
                  <p className="text-xs sm:text-sm leading-relaxed text-[#0b192c]/80 font-normal">
                    “{review.quote}”
                  </p>
                </div>
              </div>

              {/* Student Footer */}
              <div className="mt-4 flex items-center gap-3 border-t border-[#0b192c]/8 pt-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0b192c] text-xs font-bold text-[#c19a68] shadow-sm">
                  {review.avatarText}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <p className="truncate text-xs font-bold text-[#0b192c]">{review.name}</p>
                    <FaCheckCircle className="text-[10px] text-[#c19a68] shrink-0" title={t('Verified Graduate')} />
                  </div>
                  <p className="truncate text-[11px] text-[#0b192c]/60">
                    {review.role} · <span className="text-[#0b192c]/75">{review.location}</span>
                  </p>
                  <p className="truncate text-[10px] font-semibold text-[#c19a68] mt-0.5">
                    {review.program}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Footnote */}
        <p className="mt-6 text-center text-xs text-[#0b192c]/50">
          <FaCheckCircle className="inline mr-1 text-[#c19a68]" />
          {t('100% verified feedback from learners who prepared with Native Connects.')}
        </p>
      </div>
    </section>
  );
}
