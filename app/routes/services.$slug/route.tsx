import type { LoaderFunctionArgs } from '@react-router/node';
import { useLoaderData } from 'react-router';
import type { LinksFunction, MetaFunction } from '@react-router/node';
import {
  CapabilityPage,
  getCapabilityBySlug,
  type Capability
} from '~/features/services';

import { links as capabilityPageLinks } from '~/features/services/components/CapabilityPage';

export const links: LinksFunction = () => [
  ...capabilityPageLinks()
];

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data) {
    return [
      { title: 'Service Not Found | RegainFlow' },
      {
        name: 'description',
        content: 'This service is not currently available.'
      }
    ];
  }

  const slug = params.slug;
  const capability = data as Capability;
  const title = `${capability.title} | RegainFlow`;
  const description = capability.subtitle;
  const canonicalUrl = `https://www.regainflow.com/services/${slug}`;

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: canonicalUrl },

    // OG
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://www.regainflow.com/images/og/og-services.png' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://www.regainflow.com/images/og/og-services.png' }
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug as string;

  const capability = getCapabilityBySlug(slug);
  if (capability) {
    return Response.json(capability);
  }

  throw new Response('Not Found', { status: 404 });
}

export default function ServiceRoute() {
  const data = useLoaderData<typeof loader>();
  return <CapabilityPage capability={data as Capability} />;
}
