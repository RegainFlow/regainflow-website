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
  return [
    { title: 'Regain Flow - Home' },
    { name: 'description', content: 'Homepage' }
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
