import type { Metadata } from 'next';
import GermanForNursesView from '@/components/GermanForNursesView';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'German for Nurses: A1 to B2 Pathway & 2026 Germany Guide | Native Connects',
  description:
    'Complete 2026 guide and A1-B2 German course roadmap for Indian nurses (GNM/B.Sc) moving to Germany via Chancenkarte or Recognition Partnership.',
  keywords: [
    'German for nurses',
    'German A1 B2 for nurses',
    'Indian nurses Germany 2026',
    'nursing in Germany salary',
    'Chancenkarte nurses Germany',
    'Anerkennungspartnerschaft nursing',
    'Anerkennung nursing Germany',
    'German B2 for nurses',
  ],
  ...(SITE_URL
    ? {
        metadataBase: new URL(SITE_URL),
        alternates: {
          canonical: `${SITE_URL}/german-for-nurses`,
        },
      }
    : {}),
  openGraph: {
    type: 'article',
    title: 'German for Nurses: A1 to B2 Pathway & 2026 Germany Guide',
    description:
      'Master German A1-B2, understand recognition options (Anpassungslehrgang vs Kenntnisprüfung), visa options, and salary expectations for nurses.',
    ...(SITE_URL
      ? {
          url: `${SITE_URL}/german-for-nurses`,
        }
      : {}),
  },
};

export default function GermanForNursesPage() {
  return <GermanForNursesView />;
}