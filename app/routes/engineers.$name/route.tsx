import type { LoaderFunctionArgs, MetaFunction, LinksFunction } from '@react-router/node';
import { useLoaderData } from 'react-router';
import { teamMembers, EngineerProfile } from '~/features/engineers';

import engineerProfileStyles from '~/features/engineers/components/engineer-profile-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: engineerProfileStyles }
];

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: 'Engineer Not Found | RegainFlow' },
      { name: 'description', content: 'This engineer profile could not be found.' }
    ];
  }

  const title = `${data.name} | Senior AI/ML Engineer | C2C Available`;
  const description = data.bio;
  const image = 'https://www.regainflow.com/images/og/og-about.png';
  const url = `https://www.regainflow.com/engineers/${data.name.split(' ')[0].toLowerCase()}`;

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
};

export async function loader({ params }: LoaderFunctionArgs) {
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

export default function EngineerProfileRoute() {
  const engineer = useLoaderData<typeof loader>();
  return <EngineerProfile engineer={engineer} />;
}
