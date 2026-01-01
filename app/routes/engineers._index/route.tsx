import type { Route } from './+types/route';

import { EngineersLanding } from '~/features/engineers';

import engineersLandingModernStyles from '~/features/engineers/components/engineers-landing-modern.css?url';
import teamStatsStyles from '~/features/engineers/components/team-stats-bar.css?url';
import expertiseFilterStyles from '~/features/engineers/components/expertise-filter.css?url';
import engineerCardStyles from '~/features/engineers/components/engineer-card.css?url';
import teamCtaStyles from '~/features/engineers/components/team-cta.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: engineersLandingModernStyles },
  { rel: 'stylesheet', href: teamStatsStyles },
  { rel: 'stylesheet', href: expertiseFilterStyles },
  { rel: 'stylesheet', href: engineerCardStyles },
  { rel: 'stylesheet', href: teamCtaStyles }
];

export function meta({}: Route.MetaArgs) {
  const title = 'RegainFlow | Our Engineers';
  const description =
    'Meet our senior engineers available for C2C contracts. Production-proven expertise in AI/ML, data engineering, DevOps, and full-stack development.';
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
}

export default function EngineersRoute() {
  return <EngineersLanding />;
}
