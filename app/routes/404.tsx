import type { Route } from './+types/404';

export { default } from '~/components/layout/NotFound/NotFound';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Page Not Found | Regain Flow' },
    {
      name: 'description',
      content:
        'This page does not exist. Navigate back to Regain Flow to discover how we can automate your operations.'
    }
  ];
}
