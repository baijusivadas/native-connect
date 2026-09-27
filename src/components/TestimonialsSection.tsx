'use client';

import { FaComments, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TestimonialsSection() {
  const { t } = useLanguage();
  return (
    <section id="testimonials" className="bg-[#f7f4ef] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#0b192c]/10 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#9b1c31]/10 text-[#9b1c31]">
            <FaComments />
          </div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-[#9b1c31]">{t('Real student stories')}</p>
          <h2 className="section-title">{t('What Our Students Say')}</h2>
          <div className="mx-auto mt-7 max-w-2xl rounded-2xl bg-[#f7f4ef] p-6 text-left">
            <FaQuoteLeft className="text-2xl text-[#c19a68]" />
            <p className="mt-4 text-base leading-7 text-[#0b192c]/65">
              {t('We will publish verified student experiences here as learners give permission to share their stories.')}
            </p>
          </div>
          <p className="mt-5 text-xs text-[#0b192c]/45">{t('Only genuine, permissioned testimonials and independent review links will be published.')}</p>
        </div>
      </div>
    </section>
  );
}
