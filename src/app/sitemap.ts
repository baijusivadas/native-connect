import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_URL ? [{ url: SITE_URL }] : [];
}