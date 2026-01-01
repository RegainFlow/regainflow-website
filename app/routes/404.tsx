import type { Route } from './+types/404';

export { default } from '~/components/layout/NotFound/NotFound';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'RegainFlow | Page Not Found' },
    {
      name: 'description',
      content:
        'This page does not exist. Navigate back to RegainFlow to discover our software engineering services.'
    }
  ];
}
