import type { Route } from "./+types/_index";

import { HeroSection } from "~/features/hero";
import { CarouselSection } from "~/features/carousel";
import { ValueProposition } from "~/features/value-proposition";
import { HowItWorks } from "~/features/how-it-works";
import { CaseStudiesPreview } from "~/features/case-studies-preview";
import { FAQ } from "~/features/faq";
import { FinalCTA } from "~/features/final-cta";
import { SectionTracker } from "~/components/layout/SectionTracker";

import carouselStyles from "~/features/carousel/components/carousel-custom.css?url";
import heroStyles from "~/features/hero/components/hero-custom.css?url";
import valuePropStyles from "~/features/value-proposition/components/value-custom.css?url";
import howItWorksStyles from "~/features/how-it-works/components/how-it-works.css?url";
import caseStudiesPreviewStyles from "~/features/case-studies-preview/components/case-studies-preview.css?url";
import faqStyles from "~/features/faq/components/faq.css?url";
import finalCtaStyles from "~/features/final-cta/components/final-cta.css?url";
import sectionTrackerStyles from "~/components/layout/SectionTracker/section-tracker.css?url";
import scrollAnimationsStyles from "~/styles/scroll-animations.css?url";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: heroStyles },
  { rel: "stylesheet", href: carouselStyles },
  { rel: "stylesheet", href: valuePropStyles },
  { rel: "stylesheet", href: howItWorksStyles },
  { rel: "stylesheet", href: caseStudiesPreviewStyles },
  { rel: "stylesheet", href: faqStyles },
  { rel: "stylesheet", href: finalCtaStyles },
  { rel: "stylesheet", href: sectionTrackerStyles },
  { rel: "stylesheet", href: scrollAnimationsStyles },
];

export function meta({}: Route.MetaArgs) {
  const title =
    "RegainFlow | Digital + AI Tranformation for Growing Businesses";
  const description =
    "RegainFlow helps growing businesses win more leads, respond faster, and cut manual work with better websites, automation, and practical AI.";
  const image = "https://www.regainflow.com/images/og/og-home.png"; // make this
  const url = "https://www.regainflow.com/";

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },

    // OG
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: "website" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}

const sections = [
  { id: "hero", label: "Home" },
  { id: "value", label: "Value" },
  { id: "case-studies", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Contact" },
];

import ScrollAnimation from "~/components/layout/ScrollAnimation";

export default function Index() {
  return (
    <>
      <SectionTracker sections={sections} />

      <section id="hero">
        <HeroSection />
      </section>

      <ScrollAnimation animation="slide-up">
        <section id="carousel">
          <CarouselSection />
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <section id="value">
          <ValueProposition />
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <section id="case-studies">
          <CaseStudiesPreview />
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <section id="process">
          <HowItWorks />
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="slide-up">
        <section id="faq">
          <FAQ />
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="scale-up">
        <section id="cta">
          <FinalCTA />
        </section>
      </ScrollAnimation>
    </>
  );
}
