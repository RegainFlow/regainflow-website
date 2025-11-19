// app/routes/robots.txt.tsx
import type { Route } from './+types/robots[.]txt';

export function loader({}: Route.LoaderArgs) {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Sitemap: https://www.regainflow.com/sitemap.xml'
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
