import { SITE_URL } from '@/lib/constants';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/*',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}