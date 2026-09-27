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

  // Auto advance timer (pauses when user hovers over carousel)
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

  const handlePrev = () => {
    setSelected((current) =>
      current === 0 ? carouselPartners.length - 1 : current - 1,
    );
  };

  const handleNext = () => {
    setSelected((current) => (current + 1) % carouselPartners.length);
  };

  return (
    <section
      className="overflow-hidden bg-[#f7f4ef] py-16 sm:py-20"
      aria-labelledby="partners-heading"
    >
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="rounded-4xl bg-[#9b1c31] p-7 text-[#f7f4ef] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <p className="eyebrow text-[#c19a68]">{t('Career Pathways')}</p>
              <h2
                id="partners-heading"
                className="mt-3 text-3xl font-semibold tracking-tight text-[#f7f4ef] sm:text-4xl lg:text-5xl"
              >
                {t('Learn for the world you want to join.')}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#f7f4ef]/80 sm:text-base">
                {t(
                  'Language coaching built around international study, work, and relocation goals.',
                )}
              </p>
            </div>

            <div
              className="partner-marquee-window relative overflow-hidden"
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
                      className={`group flex h-36 w-52 shrink-0 flex-col items-start justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                        isSelected
                          ? 'z-10 scale-105 border-2 border-[#c19a68] bg-white text-[#0b192c] shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-4 ring-[#c19a68]/30 opacity-100'
                          : 'border-white/40 bg-[#f7f4ef] text-[#0b192c] shadow-md opacity-85 hover:scale-105 hover:border-[#c19a68] hover:bg-white hover:opacity-100 hover:shadow-xl'
                      }`}
                    >
                      <span
                        className={`text-2xl font-bold tracking-tight sm:text-3xl transition-colors duration-300 ${
                          isSelected
                            ? partner.tone
                            : 'text-[#0b192c] group-hover:opacity-100'
                        }`}
                      >
                        {partner.mark}
                      </span>
                      <span
                        className={`text-[0.65rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                          isSelected
                            ? 'text-[#0b192c]/60 font-semibold'
                            : 'text-[#0b192c]/55 group-hover:text-[#0b192c]/75'
                        }`}
                      >
                        {partner.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
