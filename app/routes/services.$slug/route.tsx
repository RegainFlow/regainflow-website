import type { LoaderFunctionArgs } from '@react-router/node';
import { useLoaderData } from 'react-router';
import type { LinksFunction, MetaFunction } from '@react-router/node';
import {
  ServicePage,
  servicesData,
  type ServiceSlug
} from '~/features/services';

import serviceStyles from '~/features/services/components/services.css?url';
import featureCardStyles from '~/features/services/components/feature-card.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: serviceStyles },
  { rel: 'stylesheet', href: featureCardStyles }
];

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data) {
    return [
      { title: 'Regain Flow - Service Not Found' },
      {
        name: 'description',
        content: 'This automation service is not currently available.'
      }
    ];
  }

  const slug = params.slug;
  const cleanTitle = data.title.replace(/<[^>]*>/g, '').trim();
  const cleanSubtitle = data.subtitle.replace(/<[^>]*>/g, '').trim();

  const canonicalUrl = `https://www.regainflow.com/services/${slug}`;

  return [
    { title: `Regain Flow - ${cleanTitle}` },
    { name: 'description', content: cleanSubtitle },
    { tagName: 'link', rel: 'canonical', href: canonicalUrl },

    // OG
    { property: 'og:title', content: `Regain Flow - ${cleanTitle}` },
    { property: 'og:description', content: cleanSubtitle },
    { property: 'og:url', content: canonicalUrl },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:image',
      content: `https://www.regainflow.com${data.image}`
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Regain Flow - ${cleanTitle}` },
    { name: 'twitter:description', content: cleanSubtitle },
    {
      name: 'twitter:image',
      content: `https://www.regainflow.com${data.image}`
    }
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug as ServiceSlug;

  const data = servicesData[slug];

  if (!data) {
    throw new Response('Not Found', { status: 404 });
  }

  return Response.json(data);
}

export default function ServiceRoute() {
  const data = useLoaderData<typeof loader>();
  return <ServicePage {...data} />;
}
