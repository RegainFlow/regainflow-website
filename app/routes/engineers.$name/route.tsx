import type { Route } from './+types/route';

import { teamMembers, EngineerProfile } from '~/features/engineers';

import profileHeroStyles from '~/features/engineers/components/profile-hero.css?url';
import keyHighlightsStyles from '~/features/engineers/components/key-highlights.css?url';
import topSkillsShowcaseStyles from '~/features/engineers/components/top-skills-showcase.css?url';
import techStackAccordionStyles from '~/features/engineers/components/tech-stack-accordion.css?url';
import profileCtaStyles from '~/features/engineers/components/profile-cta.css?url';
import engineerStatsGridStyles from '~/features/engineers/components/engineer-stats-grid.css?url';
import modalTechstackStyles from '~/features/engineers/components/modal-techstack.css?url';

import type { TeamMember } from '../../features/engineers/types/engineer.types';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: profileHeroStyles },
  { rel: 'stylesheet', href: keyHighlightsStyles },
  { rel: 'stylesheet', href: topSkillsShowcaseStyles },
  { rel: 'stylesheet', href: engineerStatsGridStyles },
  { rel: 'stylesheet', href: techStackAccordionStyles },
  { rel: 'stylesheet', href: profileCtaStyles },
  { rel: 'stylesheet', href: modalTechstackStyles }
];

export function loader({ params }: Route.LoaderArgs) {
  const name = params.name?.toLowerCase();

  // Map URL name to full engineer name
  const engineerMap: Record<string, string> = {
    leonardo: 'Leonardo J. Ramirez',
    william: 'William J. Baltus'
  };

  const fullName = engineerMap[name || ''];
  const engineer = teamMembers.find((m) => m.name === fullName);

  if (!engineer) {
    throw new Response('Engineer Not Found', { status: 404 });
  }

  return Response.json(engineer);
}

export function meta({ data, params }: Route.MetaArgs) {
  if (!data) {
    return [
      { title: 'RegainFlow | Engineer Not Found' },
      {
        name: 'description',
        content: 'This engineer profile is not currently available.'
      }
    ];
  }

  const engineer = data as TeamMember;
  const title = `RegainFlow | ${engineer.name}`;
  const description = engineer.bio;
  const url = `https://www.regainflow.com/engineers/${params.name}`;
  const image = 'https://www.regainflow.com/images/og/og-about.png';

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },

    // OG
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'profile' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
  ];
}

export default function EngineerProfileRoute({
  loaderData
}: Route.ComponentProps) {
  const engineer: TeamMember = loaderData;

  return <EngineerProfile engineer={engineer} />;
}
