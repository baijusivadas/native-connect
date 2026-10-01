'use client';

import { useEffect, useRef, useState } from 'react';
import { PARTNERS } from '@/constants/partners';
import { useLanguage } from '@/contexts/LanguageContext';

const carouselPartners = [...PARTNERS, ...PARTNERS];

export default function PartnersSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const partnerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Auto advance ticker (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSelected((current) => (current + 1) % carouselPartners.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Scroll active partner into view smoothly
  useEffect(() => {
    const partner = partnerRefs.current[selected];
    if (!partner || !carouselRef.current) return;

    const container = carouselRef.current;
    const scrollLeft =
      partner.offsetLeft - container.offsetWidth / 2 + partner.offsetWidth / 2;

    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior: 'smooth',
    });
  }, [selected]);

  return (
    <section
      className="relative overflow-hidden bg-[#f7f4ef] py-16 sm:py-24"
      aria-labelledby="partners-heading"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#8c1626] via-[#6e101d] to-[#3a080f] p-8 text-[#f7f4ef] shadow-[0_25px_60px_-15px_rgba(140,22,38,0.45)] border border-white/15 sm:p-12 lg:p-16">
          {/* Ambient decorative light orbs */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#c19a68]/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-black/40 blur-[90px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-[#9b1c31]/30 blur-[80px]" />

          <div className="relative z-10 space-y-10">
            {/* Header: Title, Description & Focus Sectors */}
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end border-b border-white/10 pb-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#c19a68]/40 bg-[#c19a68]/15 px-3.5 py-1 text-xs font-bold uppercase tracking-[.18em] text-[#c19a68] backdrop-blur-md shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#c19a68] animate-pulse" />
                  {t('Career Pathways')}
                </div>

                <h2
                  id="partners-heading"
                  className="mt-3.5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15]"
                >
                  {t('Learn for the world you want to join.')}
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {t(
                    'Language coaching built around international study, work, and relocation goals.',
                  )}
                </p>
              </div>

              {/* Focus Sector Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                {['Nursing', 'Doctors', 'Engineering', 'Study'].map((sector) => (
                  <span
                    key={sector}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md transition hover:border-[#c19a68]/60 hover:bg-white/15"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c19a68]" />
                    {t(sector)}
                  </span>
                ))}
              </div>
            </div>

            {/* Carousel Row */}
            <div className="relative">
              <div
                className="partner-marquee-window relative overflow-hidden py-2"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div
                  ref={carouselRef}
                  className="flex items-center gap-4 overflow-x-auto py-4 scrollbar-hide sm:gap-5"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {carouselPartners.map((partner, index) => {
                    const isSelected = selected === index;
                    return (
                      <button
                        key={`${partner.name}-${index}`}
                        type="button"
                        ref={(element) => {
                          partnerRefs.current[index] = element;
                        }}
                        onClick={() => {
                          setSelected(index);
                        }}
                        aria-label={`Select ${partner.name}`}
                        aria-pressed={isSelected}
                        className={`group relative flex h-36 w-60 shrink-0 flex-col items-start justify-between rounded-2xl p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? 'z-10 scale-105 border-2 border-[#c19a68] bg-white text-[#0b192c] shadow-[0_20px_45px_rgba(0,0,0,0.4)] ring-4 ring-[#c19a68]/30 opacity-100'
                            : 'border border-white/30 bg-white/90 text-[#0b192c] shadow-lg opacity-85 backdrop-blur hover:scale-102 hover:border-[#c19a68] hover:bg-white hover:opacity-100 hover:shadow-xl'
                        }`}
                      >
                        <div className="flex w-full items-center justify-between">
                          <span
                            className={`text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-300 ${
                              isSelected
                                ? partner.tone
                                : 'text-[#0b192c] group-hover:opacity-100'
                            }`}
                          >
                            {partner.mark}
                          </span>
                          {isSelected && (
                            <span className="flex h-2 w-2 rounded-full bg-[#c19a68] ring-4 ring-[#c19a68]/20 animate-pulse" />
                          )}
                        </div>

                        <div className="w-full border-t border-[#0b192c]/10 pt-2.5">
                          <span
                            className={`block text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
                              isSelected
                                ? 'text-[#0b192c]/80'
                                : 'text-[#0b192c]/55 group-hover:text-[#0b192c]/75'
                            }`}
                          >
                            {partner.category}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Subtle visual position indicator */}
              <div className="mt-3 flex items-center justify-center gap-1.5">
                {PARTNERS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      selected % PARTNERS.length === i
                        ? 'w-6 bg-[#c19a68]'
                        : 'w-1.5 bg-white/25'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
