// app/routes/sitemap.xml.tsx
import type { LoaderFunction } from '@react-router/node';

export const loader: LoaderFunction = () => {
  const baseUrl = 'https://www.regainflow.com';

  // URL list for sitemap
  const pages = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    { path: '/services', changefreq: 'monthly', priority: 0.9 },
    { path: '/services/ai-automation', changefreq: 'monthly', priority: 0.8 },
    { path: '/services/rag-search', changefreq: 'monthly', priority: 0.8 },
    { path: '/services/data-validation', changefreq: 'monthly', priority: 0.8 },
    { path: '/services/system-integration', changefreq: 'monthly', priority: 0.8 },
    { path: '/services/full-stack-engineering', changefreq: 'monthly', priority: 0.8 },
    { path: '/services/devops', changefreq: 'monthly', priority: 0.8 },
    { path: '/engineers', changefreq: 'weekly', priority: 0.9 },
    { path: '/projects', changefreq: 'monthly', priority: 0.7 },
    { path: '/roi-calculator', changefreq: 'monthly', priority: 0.7 },
    { path: '/contact-us', changefreq: 'monthly', priority: 0.8 }
  ];

  const urlEntries = pages
    .map(
      ({ path, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      // cache for an hour at the CDN
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
};
