'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLanguage } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (href: string) => pathname === '/' ? href : `/${href}`;

  return (
    <footer className="bg-[#0b192c] py-12 text-[#f7f4ef]">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b1c31] text-[#c19a68]">
                <FaLanguage />
              </span>
              Native <span className="text-[#c19a68]">Connects</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#f7f4ef]/45">
              {t('Personalized language learning with native speakers for real goals and real life.')}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Explore')}
            </p>
            <div className="mt-5 space-y-3 text-sm text-[#f7f4ef]/60">
              <Link className="block hover:text-white" href={sectionHref('#languages')}>
                {t('Languages')}
              </Link>
              <Link className="block hover:text-white" href={sectionHref('#offer')}>
                {t('What We Offer')}
              </Link>
              <Link className="block hover:text-white" href={sectionHref('#pricing')}>
                {t('Pricing')}
              </Link>
              <Link className="block hover:text-white" href={sectionHref('#about')}>
                {t('About')}
              </Link>
              <Link className="block hover:text-white" href="/german-for-nurses">
                {t('German for nurses')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Contact')}
            </p>
            <div className="mt-5 space-y-3 text-sm text-[#f7f4ef]/60">
              <Link className="block hover:text-white" href={sectionHref('#faq')}>
                {t('Questions, answered')}
              </Link>
              <Link className="block hover:text-white" href={sectionHref('#contact')}>
                {t('Book a Demo')}
              </Link>
              <Link className="block hover:text-white" href="/german-for-nurses">
                {t('German for nurses')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#f7f4ef]/10 pt-6 text-xs text-[#f7f4ef]/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Native Connects. {t('All rights reserved.')}</span>
          <span>{t('Built for learning. Designed for life.')}</span>
        </div>
      </div>
    </footer>
  );
}
