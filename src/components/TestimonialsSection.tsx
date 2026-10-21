'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  FaStar,
  FaCheckCircle,
  FaQuoteLeft,
  FaUserGraduate,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
} from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { STUDENT_REVIEWS } from '@/constants/reviews';

type FilterType = 'all' | 'recent' | 'nursing' | 'career';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredReviews = STUDENT_REVIEWS.filter((review) => {
    if (activeFilter === 'recent') return Boolean(review.isRecent);
    if (activeFilter === 'nursing')
      return review.program.includes('Nurses') || review.badge.includes('Nurse');
    if (activeFilter === 'career')
      return !review.program.includes('Nurses');
    return true;
  });

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll, filteredReviews]);

  // Reset scroll to start when filter changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeFilter]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const containerWidth = scrollRef.current.clientWidth;
    const scrollAmount = containerWidth > 640 ? 380 : 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

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
              { id: 'recent', label: t('Recent'), isRecentTab: true },
              { id: 'nursing', label: t('German for Nurses') },
              { id: 'career', label: t('Goethe & Career') },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as FilterType)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold transition cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0b192c] text-white shadow-sm'
                    : 'bg-white border border-[#0b192c]/10 text-[#0b192c]/70 hover:border-[#c19a68]/60 hover:text-[#0b192c]'
                }`}
              >
                {tab.isRecentTab && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9b1c31] animate-pulse" />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Controls & Counter */}
        <div className="mt-6 flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0b192c]/60">
            <span className="inline-block h-2 w-2 rounded-full bg-[#c19a68]" />
            <span>
              {activeFilter === 'recent'
                ? t('Showing latest reviews')
                : `${filteredReviews.length} ${t('Verified Student Stories')}`}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label={t('Previous reviews')}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition cursor-pointer ${
                canScrollLeft
                  ? 'border-[#0b192c]/20 bg-white text-[#0b192c] shadow-sm hover:bg-[#0b192c] hover:text-white'
                  : 'border-[#0b192c]/10 bg-white/50 text-[#0b192c]/25 cursor-not-allowed'
              }`}
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label={t('Next reviews')}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition cursor-pointer ${
                canScrollRight
                  ? 'border-[#0b192c]/20 bg-white text-[#0b192c] shadow-sm hover:bg-[#0b192c] hover:text-white'
                  : 'border-[#0b192c]/10 bg-white/50 text-[#0b192c]/25 cursor-not-allowed'
              }`}
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* Reviews Horizontal Scroll Track */}
        <div
          ref={scrollRef}
          className="mt-3 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 pb-5 scrollbar-hide"
        >
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="flex w-[310px] sm:w-[360px] lg:w-[390px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-[#0b192c]/10 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c19a68]/60 hover:shadow-lg hover:shadow-[#0b192c]/5"
            >
              <div>
                {/* Header: Stars & Badges */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex text-[#c19a68]">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-xs" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {review.isRecent && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#c19a68]/15 px-2 py-0.5 text-[10px] font-bold text-[#c19a68]">
                        <FaClock className="text-[8px]" />
                        {t('Recent')}
                      </span>
                    )}
                    <span className="rounded-full bg-[#9b1c31]/10 px-2.5 py-0.5 text-[10px] font-bold text-[#9b1c31]">
                      {review.badge}
                    </span>
                  </div>
                </div>

                {/* Score / Outcome tag & Date */}
                <div className="mt-2.5 flex items-center justify-between gap-2">
                  <span className="inline-block rounded-md bg-[#f7f4ef] px-2 py-0.5 text-[11px] font-semibold text-[#0b192c]/75 border border-[#0b192c]/5 truncate">
                    {review.scoreOrOutcome}
                  </span>
                  <span className="text-[10px] font-medium text-[#0b192c]/45 shrink-0">
                    {review.date}
                  </span>
                </div>

                {/* Quote */}
                <div className="relative mt-2.5">
                  <FaQuoteLeft className="text-xs text-[#c19a68]/30 mb-1" />
                  <p className="text-xs sm:text-sm leading-relaxed text-[#0b192c]/80 font-normal line-clamp-6">
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
        <p className="mt-4 text-center text-xs text-[#0b192c]/50">
          <FaCheckCircle className="inline mr-1 text-[#c19a68]" />
          {t('100% verified feedback from learners who prepared with Native Connects.')}
        </p>
      </div>
    </section>
  );
}
