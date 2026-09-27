import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return SITE_URL
    ? [
        {
          url: SITE_URL,
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 1.0,
        },
        {
          url: `${SITE_URL}/german-for-nurses`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: 0.8,
        },
      ]
    : [];
}
