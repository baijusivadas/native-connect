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
} from '@/constants/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Native Connects | Online Language Courses for Europe',
    template: '%s | Native Connects',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: SITE_KEYWORDS,
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
    title: 'Online Language Courses for Europe | Native Connects',
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    ...(SITE_URL ? { url: SITE_URL } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Language Courses for Europe | Native Connects',
    description: SITE_DESCRIPTION,
  },
  // Geo tags for local/regional SEO (Germany + Europe focus)
  other: {
    'geo.region': 'DE',
    'geo.placename': 'Germany',
    'ICBM': '51.1657,10.4515',
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
    <html lang="en">
      <head>
        {/* Geographic targeting meta tags */}
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />
        <meta name="ICBM" content="51.1657, 10.4515" />
        <meta name="DC.title" content="Native Connects" />
      </head>
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