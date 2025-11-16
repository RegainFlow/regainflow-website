import type { LinksFunction, MetaFunction } from '@react-router/node';

import { HeroSection } from '~/features/hero';
import { ValueProposition } from '~/features/value-proposition';
import { RoiCalculator } from '~/features/roi-calculator';

import valuePropStyles from '~/features/value-proposition/components/value-custom.css?url';
import roiStyles from '~/features/roi-calculator/components/roi-custom.css?url';
import heroStyles from '~/features/hero/components/hero-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: valuePropStyles },
  { rel: 'stylesheet', href: roiStyles },
  { rel: 'stylesheet', href: heroStyles }
];

export const meta: MetaFunction = () => {
  const title = 'RegainFlow | Senior AI/ML Engineers for C2C Contracts';
  const description =
    'Contract-ready senior engineers specializing in AI/ML, RAG, and intelligent automation. Full-stack capabilities across backend, frontend, DevOps, and solution architecture. Available for long-term C2C contracts or project consulting.';
  const image = 'https://www.regainflow.com/images/og/og-home.png'; // make this
  const url = 'https://www.regainflow.com/';

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

export default function Index() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <RoiCalculator />
    </>
  );
}
