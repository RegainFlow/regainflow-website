import type { MetaFunction, LinksFunction } from '@react-router/node';
import { EngineersLanding } from '~/features/engineers';

import engineersLandingStyles from '~/features/engineers/components/engineers-landing.css?url';
import modalTechstackStyles from '~/features/engineers/components/modal-techstack.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: engineersLandingStyles },
  { rel: 'stylesheet', href: modalTechstackStyles }
];

export const meta: MetaFunction = () => {
  const title = 'Our Engineers | RegainFlow C2C Contractors';
  const description =
    'Meet our senior AI/ML engineers available for C2C contracts. Production-proven expertise in RAG, automation, DevOps, and full-stack development.';
  const image = 'https://www.regainflow.com/images/og/og-about.png';
  const url = 'https://www.regainflow.com/engineers';

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },

    // OG
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ];
};

export default function EngineersRoute() {
  return <EngineersLanding />;
}
