// app/routes/robots.txt.tsx
import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = () => {
  const lines = [
    'User-agent: *',
    'Allow: /',
    `Sitemap: https://www.regainflow.com/sitemap.xml`
  ].join('\n');

  return new Response(lines, {
    headers: { 'Content-Type': 'text/plain' }
  });
};
