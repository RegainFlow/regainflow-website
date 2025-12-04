import type { Route } from './+types/pricing';
import { PricingPage } from '~/features/pricing';
import styles from '~/features/pricing/components/pricing.css?url';

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        'Pricing | Fractional CTO, AI Engineering & Senior Development Services | RegainFlow',
    },
    {
      name: 'description',
      content:
        'Transparent pricing for Fractional CTO services ($8k-$14k/mo), AI engineering retainers ($6k-$18k/mo), platform builds ($45k-$180k), and hourly consulting ($115-$155/hr). Custom quotes within 24 hours. No hidden fees, no sales games.',
    },
    {
      property: 'og:title',
      content: 'Pricing | Fractional CTO & Senior Engineering Services',
    },
    {
      property: 'og:description',
      content:
        'Transparent pricing for strategic technology leadership and senior engineering execution. Fractional CTO, AI/Data retainers, platform builds, and hourly consulting.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://www.regainflow.com/pricing',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Pricing | Fractional CTO & Senior Engineering',
    },
    {
      name: 'twitter:description',
      content:
        'Transparent pricing: Fractional CTO ($8k-$14k/mo), AI retainers ($6k-$18k/mo), platform builds ($45k-$180k), hourly consulting ($115-$155/hr).',
    },
    {
      name: 'keywords',
      content:
        'fractional cto pricing, cto services cost, ai engineering pricing, data engineering rates, software development pricing, senior engineer rates, technical consulting pricing',
    },
  ];
}

export const links: Route.LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function Pricing() {
  return <PricingPage />;
}
