import type { LinksFunction, MetaFunction } from '@remix-run/node';
import RoiCalculator from '~/components/roi/RoiCalculator';

import roiStyles from '~/components/roi/roi-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: roiStyles }
];

export const meta: MetaFunction = () => {
  return [
    { title: 'RegainFlow - ROI Calculator' },
    {
      name: 'description',
      content:
        "Estimate your ROI with RegainFlow's automation savings calculator."
    }
  ];
};

export default function RoiPage() {
  return (
    <>
      <RoiCalculator />
    </>
  );
}
