import type { Metadata } from 'next';
import GermanForNursesView from '@/components/GermanForNursesView';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'German for Nurses: A1 to B2 | TELC Pflege Prep & Healthcare Communication',
  description:
    'Complete language pathway from A1 German to TELC Deutsch B1-B2 Pflege & Goethe certification, clinical communication training, and live tutor practice.',
  keywords: [
    'German for nurses',
    'TELC Deutsch B1 B2 Pflege',
    'TELC vs Goethe for nurses',
    'German A1 B2 for nurses',
    'clinical German communication',
    'nursing in Germany TELC exam',
    'German language course nurses India',
    'healthcare German training',
    'German B2 Pflege exam',
    'telc Pflege healthcare German',
    'ward roleplays German',
  ],
  ...(SITE_URL
    ? {
        alternates: {
          canonical: `${SITE_URL}/german-for-nurses`,
        },
      }
    : {}),
  openGraph: {
    type: 'article',
    title: 'German for Nurses: TELC Pflege Prep & Healthcare Communication | Native Connects',
    description:
      'From A1 German to TELC Deutsch B1-B2 Pflege certification with live online classes, healthcare vocabulary, and regular speaking practice.',
    ...(SITE_URL ? { url: `${SITE_URL}/german-for-nurses` } : {}),
  },
};

export default function GermanForNursesPage() {
  return <GermanForNursesView />;
}
