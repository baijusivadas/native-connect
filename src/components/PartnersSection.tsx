'use client';

import { useEffect, useRef, useState } from 'react';
import { PARTNERS } from '@/constants/partners';
import { useLanguage } from '@/contexts/LanguageContext';

const carouselPartners = [...PARTNERS, ...PARTNERS];

export default function PartnersSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const partnerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const previousSelected = useRef(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSelected((current) => (current + 1) % carouselPartners.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    const partner = partnerRefs.current[selected];
    if (!carousel || !partner) return;

    const partnerOffset =
      partner.getBoundingClientRect().left -
      carousel.getBoundingClientRect().left +
      carousel.scrollLeft;
    const targetScrollLeft = partnerOffset - 16;
    const isAutoplayWrap = previousSelected.current === carouselPartners.length - 1 && selected === 0;
    carousel.scrollTo({ left: targetScrollLeft, behavior: isAutoplayWrap ? 'auto' : 'smooth' });
    previousSelected.current = selected;
  }, [selected]);

  return (
    <section className="overflow-hidden bg-[#f7f4ef] py-24" aria-labelledby="partners-heading">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-6">
          <div>
            <p className="eyebrow">{t('Career pathways')}</p>
            <h2 id="partners-heading" className="section-title">{t('Learn for the world you want to join.')}</h2>
            <p className="section-copy">{t('Language coaching built around international study, work and relocation goals.')}</p>
          </div>

          <div className="partner-marquee-window relative overflow-hidden">
            <div ref={carouselRef} className="flex snap-x snap-mandatory items-center gap-4 overflow-x-auto px-4 py-8 scrollbar-hide sm:gap-5">
          {carouselPartners.map((partner, index) => {
            const isSelected = selected === index;
            return (
              <button
                key={`${partner.name}-${index}`}
                type="button"
                ref={(element) => {
                  partnerRefs.current[index] = element;
                }}
                onClick={() => setSelected(index)}
                aria-label={`Select ${partner.name}`}
                aria-pressed={isSelected}
                className={`flex h-36 w-52 snap-center shrink-0 flex-col items-start justify-between rounded-2xl border p-5 text-left transition-all duration-500 ${isSelected ? 'z-10 scale-105 border-[#c19a68]/70 bg-white shadow-[0_18px_40px_rgba(11,25,44,.12)]' : 'border-[#0b192c]/10 bg-white/55 opacity-65 hover:scale-105 hover:border-[#c19a68]/60 hover:bg-white hover:opacity-100'}`}
              >
                <span className={`text-2xl font-bold tracking-tight sm:text-3xl ${isSelected ? partner.tone : 'text-[#0b192c]/65'}`}>{partner.mark}</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#0b192c]/45">{partner.name}</span>
              </button>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
