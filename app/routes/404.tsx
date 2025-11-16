import type { MetaFunction } from '@react-router/node';

export { default } from '~/components/layout/NotFound/NotFound';

export const meta: MetaFunction = () => [
  { title: 'Page Not Found | Regain Flow' },
  {
    name: 'description',
    content:
      'This page does not exist. Navigate back to Regain Flow to discover how we can automate your operations.'
  }
];
