'use client';

import Link from 'next/link';
import { FaLanguage } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#0b192c] py-12 text-[#f7f4ef]">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 text-xl font-bold"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b1c31] text-[#c19a68]"><FaLanguage /></span>Native <span className="text-[#c19a68]">Connects</span></Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#f7f4ef]/45">{t('Personalized language learning with native speakers for real goals and real life.')}</p>
          </div>
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">{t('Explore')}</p><div className="mt-5 space-y-3 text-sm text-[#f7f4ef]/60"><Link className="block hover:text-white" href="#languages">{t('Languages')}</Link><Link className="block hover:text-white" href="#offer">{t('What We Offer')}</Link><Link className="block hover:text-white" href="#pricing">{t('Pricing')}</Link><Link className="block hover:text-white" href="#about">{t('About')}</Link></div></div>
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">{t('Trust')}</p><div className="mt-5 space-y-3 text-sm text-[#f7f4ef]/60"><Link className="block hover:text-white" href="#testimonials">{t('Student Stories')}</Link><span className="block">{t('Google Reviews — add link')}</span><span className="block">{t('Trustpilot — add link')}</span></div></div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[#f7f4ef]/10 pt-6 text-xs text-[#f7f4ef]/35 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Native Connects. {t('All rights reserved.')}</span><span>{t('Built for learning. Designed for life.')}</span></div>
      </div>
    </footer>
  );
}
