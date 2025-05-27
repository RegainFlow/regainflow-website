import type { LinksFunction, MetaFunction } from '@remix-run/node';

import HeroSection from '~/components/hero/HeroSection';
import ValueProposition from '~/components/value-prop/ValueProposition';
import RoiCalculator from '~/components/roi/RoiCalculator';

import valuePropStyles from '~/components/value-prop/value-custom.css?url';
import roiStyles from '~/components/roi/roi-custom.css?url';
import heroStyles from '~/components/hero/hero-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: valuePropStyles },
  { rel: 'stylesheet', href: roiStyles },
  { rel: 'stylesheet', href: heroStyles }
];

export const meta: MetaFunction = () => {
  const title = 'Regain Flow | AI Automation for Real ROI';
  const description =
    'Turn manual workflows into scalable automation. Regain Flow helps teams cut costs and increase speed with AI-driven RPA solutions.';
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
