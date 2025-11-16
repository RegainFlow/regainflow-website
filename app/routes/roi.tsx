import type { LinksFunction, MetaFunction } from '@react-router/node';
import { RoiCalculator } from '~/features/roi-calculator';

import roiStyles from '~/features/roi-calculator/components/roi-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: roiStyles }
];

export const meta: MetaFunction = () => {
  const title = 'ROI Calculator | Estimate Your Automation Savings';
  const description =
    'Use our interactive calculator to see how much time and money you can save with automation.';
  const image = 'https://www.regainflow.com/images/og/og-roi.png'; // make this
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
export default function RoiPage() {
  return (
    <>
      <RoiCalculator />
    </>
  );
}
