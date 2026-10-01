import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import {
  ORGANIZATION_SCHEMA,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  LEGAL_ENTITY_NAME,
} from '@/constants/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Native Connects | German Courses, TELC Prep & Nursing Placement in Germany',
    template: '%s | Native Connects',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
  authors: [{ name: LEGAL_ENTITY_NAME }],
  creator: LEGAL_ENTITY_NAME,
  publisher: LEGAL_ENTITY_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: 'German Courses, TELC Pflege & Goethe Prep | Nurse Placement Germany | Native Connects',
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    ...(SITE_URL ? { url: SITE_URL } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'German Courses, TELC Pflege & Nursing Jobs in Germany | Native Connects',
    description: SITE_DESCRIPTION,
  },
  // Geo tags — dual targeting: Germany (primary market) + India (primary source country)
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Germany',
    'ICBM': '51.1657,10.4515',
    'geo.country': 'DE,IN',
    // Schema.org hints
    'og:locale:alternate': 'de_DE',
  },
  ...(SITE_URL
    ? { metadataBase: new URL(SITE_URL), alternates: { canonical: '/' } }
    : {}),
};

const organizationJsonLd = JSON.stringify(ORGANIZATION_SCHEMA).replace(
  /</g,
  '\\u003c',
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}