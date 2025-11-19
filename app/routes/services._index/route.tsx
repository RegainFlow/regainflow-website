import type { LinksFunction, MetaFunction } from '@react-router/node';
import { ServicesOverview } from '~/features/services';
import { links as servicesHeroLinks } from '~/features/services/components/overview/ServicesHero';
import { links as capabilitiesGridLinks } from '~/features/services/components/overview/CapabilitiesGrid';
import { links as processStepsLinks } from '~/features/services/components/overview/ProcessSteps';
import { links as serviceMetricsLinks } from '~/features/services/components/overview/ServiceMetrics';
import { links as caseStudiesPreviewLinks } from '~/features/services/components/overview/CaseStudiesPreview';
import { links as servicesCtaLinks } from '~/features/services/components/overview/ServicesCTA';

export const links: LinksFunction = () => [
  ...servicesHeroLinks(),
  ...capabilitiesGridLinks(),
  ...serviceMetricsLinks(),
  ...processStepsLinks(),
  ...caseStudiesPreviewLinks(),
  ...servicesCtaLinks()
];

export const meta: MetaFunction = () => {
  const title = 'Enterprise Engineering & AI Solutions | RegainFlow';
  const description =
    'Production-grade AI automation, RAG search systems, data validation, system integration, full-stack engineering, and DevOps solutions. We deliver engineering that scales.';
  const image = 'https://www.regainflow.com/images/og/og-services.png';
  const url = 'https://www.regainflow.com/services';

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

export default function ServicesOverviewRoute() {
  return <ServicesOverview />;
}
