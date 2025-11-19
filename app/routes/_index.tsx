import type { LinksFunction, MetaFunction } from '@react-router/node';

import { HeroSection } from '~/features/hero';
import { StatsBar } from '~/features/stats-bar';
import { ValueProposition } from '~/features/value-proposition';
import { HowItWorks } from '~/features/how-it-works';
import { RoiPreview } from '~/features/roi-preview';
import { CaseStudiesPreview } from '~/features/case-studies-preview';
import { FAQ } from '~/features/faq';
import { FinalCTA } from '~/features/final-cta';

import heroStyles from '~/features/hero/components/hero-custom.css?url';
import statsStyles from '~/features/stats-bar/components/stats.css?url';
import valuePropStyles from '~/features/value-proposition/components/value-custom.css?url';
import howItWorksStyles from '~/features/how-it-works/components/how-it-works.css?url';
import roiPreviewStyles from '~/features/roi-preview/components/roi-preview.css?url';
import caseStudiesPreviewStyles from '~/features/case-studies-preview/components/case-studies-preview.css?url';
import faqStyles from '~/features/faq/components/faq.css?url';
import finalCtaStyles from '~/features/final-cta/components/final-cta.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: heroStyles },
  { rel: 'stylesheet', href: statsStyles },
  { rel: 'stylesheet', href: valuePropStyles },
  { rel: 'stylesheet', href: howItWorksStyles },
  { rel: 'stylesheet', href: roiPreviewStyles },
  { rel: 'stylesheet', href: caseStudiesPreviewStyles },
  { rel: 'stylesheet', href: faqStyles },
  { rel: 'stylesheet', href: finalCtaStyles }
];

export const meta: MetaFunction = () => {
  const title = 'RegainFlow | Senior AI/ML Engineers for C2C Contracts';
  const description =
    'Contract-ready senior engineers specializing in AI/ML, RAG, and intelligent automation. Full-stack capabilities across backend, frontend, DevOps, and solution architecture. Available for long-term C2C contracts or project consulting.';
  const image = 'https://www.regainflow.com/images/og/og-home.png'; // make this
  const url = 'https://www.regainflow.com/';

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

export default function Index() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ValueProposition />
      <HowItWorks />
      <RoiPreview />
      <CaseStudiesPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
