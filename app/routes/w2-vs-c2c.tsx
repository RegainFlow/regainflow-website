import type { Route } from './+types/w2-vs-c2c';

import { RoiCalculator } from '~/features/roi-calculator';

import roiStyles from '~/features/roi-calculator/components/roi-custom.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: roiStyles }
];

export function meta({}: Route.MetaArgs) {
  const title = 'W2 vs C2C Calculator | Compare Costs & Save';
  const description =
    'Calculate your savings hiring senior C2C contract engineers vs full-time W2 employees. See 30-40% cost savings with our interactive W2 vs C2C calculator.';
  const image = 'https://www.regainflow.com/images/og/og-roi.png';
  const url = 'https://www.regainflow.com/w2-vs-c2c';

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
}
export default function RoiPage() {
  return (
    <>
      <RoiCalculator />
    </>
  );
}
