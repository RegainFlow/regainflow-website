import type { Route } from './+types/fractional-cto';
import { FractionalCtoPage } from '~/features/fractional-cto';
import styles from '~/features/fractional-cto/components/fractional-cto.css?url';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        'RegainFlow | Fractional CTO Services'
    },
    {
      name: 'description',
      content:
        'Get CTO-level technology leadership without the full-time cost. Strategic roadmaps, team mentorship, architecture decisions, PLUS hands-on senior engineering execution. $8k-$14k/month retainers for startups and growth companies.'
    },
    {
      property: 'og:title',
      content: 'RegainFlow | Fractional CTO Services'
    },
    {
      property: 'og:description',
      content:
        'Strategic technology leadership combined with hands-on engineering execution. Technology roadmaps, architecture decisions, team leadership - PLUS production code delivery.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://www.regainflow.com/fractional-cto'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Fractional CTO Services | Strategic Technology Leadership'
    },
    {
      name: 'twitter:description',
      content:
        'Get CTO-level guidance without the $300k+ executive cost. Strategic roadmaps + hands-on engineering execution. $8k-$14k/month retainers.'
    },
    {
      name: 'keywords',
      content:
        'fractional cto, part-time cto, cto services, technology leadership, startup cto, cto advisor, technical leadership, engineering leadership, cto consultant, ai strategy, technology roadmap'
    }
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: styles }
];

export default function FractionalCto() {
  return <FractionalCtoPage />;
}
