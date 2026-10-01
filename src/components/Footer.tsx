'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLanguage, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_DETAILS, LEGAL_ENTITY_NAME } from '@/constants/site';

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (href: string) => (pathname === '/' ? href : `/${href}`);

  return (
    <footer className="border-t border-[#f7f4ef]/10 bg-[#0b192c] py-14 text-[#f7f4ef]">
      <div className="w-full px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Registered Entity */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9b1c31] text-[#c19a68]">
                <FaLanguage />
              </span>
              Native <span className="text-[#c19a68]">Connects</span>
            </Link>
            <p className="max-w-sm text-xs leading-6 text-[#f7f4ef]/60">
              {t(
                'Personalized language learning with native speakers. Clinical German training, TELC/Goethe exam prep, and direct nursing recruitment in Germany.',
              )}
            </p>
            <div className="pt-2 text-[11px] text-[#f7f4ef]/45 space-y-1">
              <p className="font-semibold text-[#c19a68]">{LEGAL_ENTITY_NAME}</p>
              <p className="flex items-start gap-1.5">
                <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#c19a68]" />
                <span>{CONTACT_DETAILS.registeredOffice.city}, {CONTACT_DETAILS.registeredOffice.state}, India</span>
              </p>
            </div>
          </div>

          {/* Programs & Career Pathways */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Programs & Pathways')}
            </p>
            <div className="mt-5 space-y-2.5 text-sm text-[#f7f4ef]/70">
              <Link className="block hover:text-[#c19a68] transition" href="/german-for-nurses">
                {t('German for Nurses (A1–B2)')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href="/german-for-nurses#telc-goethe">
                {t('TELC Pflege vs Goethe Prep')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href={sectionHref('#languages')}>
                {t('Language Courses')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href={sectionHref('#offer')}>
                {t('What We Offer')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href={sectionHref('#pricing')}>
                {t('Course Pricing')}
              </Link>
            </div>
          </div>

          {/* Direct Support & Admissions */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Support & Contact')}
            </p>
            <div className="mt-5 space-y-3 text-xs sm:text-sm text-[#f7f4ef]/70">
              <a
                href={`mailto:${CONTACT_DETAILS.supportEmail}`}
                className="flex items-center gap-2 hover:text-[#c19a68] transition"
              >
                <FaEnvelope className="shrink-0 text-[#c19a68]" />
                <span>{CONTACT_DETAILS.supportEmail}</span>
              </a>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="shrink-0 text-[#c19a68]" />
                <span>{CONTACT_DETAILS.phone}</span>
              </div>
              <Link className="block hover:text-[#c19a68] transition pt-1" href={sectionHref('#faq')}>
                {t('Frequently Asked Questions')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href={sectionHref('#contact')}>
                {t('Book a Free Demo Session')}
              </Link>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c19a68]">
              {t('Legal & Policies')}
            </p>
            <div className="mt-5 space-y-2.5 text-sm text-[#f7f4ef]/70">
              <Link className="block hover:text-[#c19a68] transition" href="/privacy-policy">
                {t('Privacy Policy')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href="/terms">
                {t('Terms of Service')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href="/terms#refund-policy">
                {t('Refund & Cancellation Policy')}
              </Link>
              <Link className="block hover:text-[#c19a68] transition" href="/terms#grievance">
                {t('Grievance & Complaint Route')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#f7f4ef]/10 pt-6 pb-4 sm:pb-0 text-xs text-[#f7f4ef]/40 sm:flex-row sm:items-center sm:justify-between sm:pr-20">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} {LEGAL_ENTITY_NAME}. {t('All rights reserved.')}</span>
            <Link href="/privacy-policy" className="hover:text-white transition underline">
              {t('Privacy')}
            </Link>
            <Link href="/terms" className="hover:text-white transition underline">
              {t('Terms & Refunds')}
            </Link>
            <Link href="/terms#grievance" className="hover:text-white transition underline">
              {t('Complaints')}
            </Link>
          </div>
          <span className="font-medium text-[#f7f4ef]/60">{t('Train. Certify. Work in Germany.')}</span>
        </div>
      </div>
    </footer>
  );
}

