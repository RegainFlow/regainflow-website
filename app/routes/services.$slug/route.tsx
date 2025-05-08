import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import ServicePage from '~/components/services/ServicePage';

import {
  servicesData,
  type ServiceSlug
} from '~/components/services/servicesData';

import serviceStyles from '~/components/services/services-custom.css?url';
import featureCardStyles from '~/components/services/feature-card.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: serviceStyles },
  { rel: 'stylesheet', href: featureCardStyles }
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Regain Flow - Services' },
    { name: 'description', content: 'Explore our services at Regain Flow' }
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
