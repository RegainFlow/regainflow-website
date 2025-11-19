import type { LinksFunction, MetaFunction } from '@react-router/node';
import { RoiCalculator } from '~/features/roi-calculator';

import roiStyles from '~/features/roi-calculator/components/roi-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: roiStyles }
];

export const meta: MetaFunction = () => {
  const title = 'C2C Engineering ROI Calculator | Compare Costs & Save';
  const description =
    'Calculate your savings hiring senior C2C contract engineers vs full-time W2 employees. See 30-40% cost savings with our interactive ROI calculator.';
  const image = 'https://www.regainflow.com/images/og/og-roi.png';
  const url = 'https://www.regainflow.com/roi-calculator';

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
