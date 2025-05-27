// app/routes/sitemap.xml.tsx
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const baseUrl = 'https://www.regainflow.com';

  // Build your URL list dynamically if you like
  const pages = [
    { path: '/', changefreq: 'daily', priority: 1.0 },
    {
      path: '/services/automation-audit',
      changefreq: 'monthly',
      priority: 0.8
    },
    { path: '/services/rapid-solutions', changefreq: 'monthly', priority: 0.8 },
    { path: '/about-us', changefreq: 'monthly', priority: 0.8 },
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
