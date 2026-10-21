'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLanguage, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_DETAILS, LEGAL_ENTITY_NAME, PARENT_ORGANIZATION } from '@/constants/site';

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === '/' ? href : `/${href}`);

  return (
    <footer className="border-t border-[#f7f4ef]/10 bg-[#0b192c] py-10 sm:py-12 text-[#f7f4ef]">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-7 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Registered Entity */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#9b1c31] text-[#c19a68]">
                <FaLanguage aria-hidden="true" />
              </span>
              <span>
                Native <span className="text-[#c19a68]">Connects</span>
              </span>
            </Link>
            <p className="max-w-sm text-xs leading-relaxed text-[#f7f4ef]/60">
              {t(
                'Personalized language learning with native speakers. Clinical German training, TELC/Goethe exam prep, and direct nursing recruitment in Germany.',
              )}
            </p>
            <div className="pt-1.5 text-[11px] text-[#f7f4ef]/45 space-y-1">
              <p className="font-semibold text-[#c19a68]">
                {t('Native Connects promoted by')}{' '}
                <a
                  href={PARENT_ORGANIZATION.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${PARENT_ORGANIZATION.name} (opens in a new tab)`}
                  className="underline hover:opacity-80 transition-opacity"
                >
                  {PARENT_ORGANIZATION.name}
                </a>
              </p>
              <p className="flex items-start gap-1.5">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#c19a68]" aria-hidden="true" />
                <span>
                  {CONTACT_DETAILS.registeredOffice.city}, {CONTACT_DETAILS.registeredOffice.state}, India
                </span>
              </p>
            </div>
          </div>

          {/* Programs & Career Pathways */}
          <nav aria-label={t('Programs & Pathways')}>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Programs & Pathways')}
            </p>
            <div className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#f7f4ef]/70">
              <Link className="block hover:text-[#c19a68] transition-colors" href="/german-for-nurses">
                {t('German for Nurses (A1–B2)')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href="/german-for-nurses#telc-goethe">
                {t('TELC Pflege vs Goethe Prep')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href={sectionHref('#languages')}>
                {t('Language Courses')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href={sectionHref('#offer')}>
                {t('What We Offer')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href={sectionHref('#pricing')}>
                {t('Course Pricing')}
              </Link>
            </div>
          </nav>

          {/* Direct Support & Admissions */}
          <nav aria-label={t('Support & Contact')}>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Support & Contact')}
            </p>
            <div className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#f7f4ef]/70">
              <a
                href={`mailto:${CONTACT_DETAILS.supportEmail}`}
                className="flex items-center gap-2 hover:text-[#c19a68] transition-colors"
              >
                <FaEnvelope className="shrink-0 text-[#c19a68]" aria-hidden="true" />
                <span>{CONTACT_DETAILS.supportEmail}</span>
              </a>
              <a
                href={`tel:${CONTACT_DETAILS.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-2 hover:text-[#c19a68] transition-colors"
              >
                <FaPhoneAlt className="shrink-0 text-[#c19a68]" aria-hidden="true" />
                <span>{CONTACT_DETAILS.phone}</span>
              </a>
              <Link className="block hover:text-[#c19a68] transition-colors pt-0.5" href={sectionHref('#faq')}>
                {t('Frequently Asked Questions')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href={sectionHref('#contact')}>
                {t('Book a Free Demo Session')}
              </Link>
            </div>
          </nav>

          {/* Legal & Compliance */}
          <nav aria-label={t('Legal & Policies')}>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Legal & Policies')}
            </p>
            <div className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#f7f4ef]/70">
              <Link className="block hover:text-[#c19a68] transition-colors" href="/privacy-policy">
                {t('Privacy Policy')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href="/terms">
                {t('Terms of Service')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href="/terms#refund-policy">
                {t('Refund & Cancellation Policy')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition-colors" href="/terms#grievance">
                {t('Grievance & Complaint Route')}
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#f7f4ef]/10 pt-4 pb-2 sm:pb-0 text-xs text-[#f7f4ef]/40 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <span>
              © {new Date().getFullYear()} {LEGAL_ENTITY_NAME}. {t('All rights reserved.')}
            </span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline">
              {t('Privacy')}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors underline">
              {t('Terms & Refunds')}
            </Link>
            <Link href="/terms#grievance" className="hover:text-white transition-colors underline">
              {t('Complaints')}
            </Link>
          </div>
          <span className="font-medium text-[#f7f4ef]/60">{t('Train. Certify. Work in Germany.')}</span>
        </div>
      </div>
    </footer>
  );
}