import type { Metadata } from 'next';
import GermanForNursesView from '@/components/GermanForNursesView';
import { SITE_URL } from '@/constants/site';

export const metadata: Metadata = {
  title: 'German for Nurses: A1 to B2 Learning Guide',
  description:
    'Build practical German from A1 to B2 and prepare for communication in everyday and healthcare settings while understanding the nursing recognition pathway in Germany.',
  keywords: [
    'German for nurses',
    'German A1 B2 for nurses',
    'Indian nurses Germany',
    'nursing in Germany',
    'German language course for nurses',
    'Anerkennung nursing Germany',
    'German B2 for nurses',
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
    title: 'German for Nurses: A1 to B2 Pathway',
    description:
      'A practical Native Connects roadmap for nurses preparing their German language skills and learning about the professional recognition pathway in Germany.',
    ...(SITE_URL ? { url: `${SITE_URL}/german-for-nurses` } : {}),
  },
};

export default function GermanForNursesPage() {
  return <GermanForNursesView />;
}
