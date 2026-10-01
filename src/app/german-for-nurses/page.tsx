import type { Metadata } from 'next';
import GermanForNursesView from '@/components/GermanForNursesView';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'German for Nurses: A1 to B2 | TELC Pflege Prep & Nursing Jobs in Germany',
  description:
    'Complete pathway from A1 German to TELC Deutsch B1-B2 Pflege & Goethe certification, clinical communication training, and direct hospital recruitment in Germany with 0 placement fees.',
  keywords: [
    'German for nurses',
    'TELC Deutsch B1 B2 Pflege',
    'TELC vs Goethe for nurses',
    'German A1 B2 for nurses',
    'Indian nurses Germany jobs',
    'nursing in Germany TELC exam',
    'German language course nurses India',
    'Anerkennung nursing Germany',
    'German B2 Pflege exam',
    'nurse recruitment Germany 0 fee',
    'telc Pflege healthcare German',
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
    title: 'German for Nurses: TELC Pflege Prep & Hospital Placement in Germany | Native Connects',
    description:
      'From A1 German to TELC Deutsch B1-B2 Pflege certification and direct hospital interviews in Germany. Complete train-certify-place pathway with zero placement fees for nurses.',
    ...(SITE_URL ? { url: `${SITE_URL}/german-for-nurses` } : {}),
  },
};

export default function GermanForNursesPage() {
  return <GermanForNursesView />;
}
