import ServicesHero from './overview/ServicesHero';
import CapabilitiesGrid from './overview/CapabilitiesGrid';
import ProcessSteps from './overview/ProcessSteps';
import ServiceMetrics from './overview/ServiceMetrics';
import CaseStudiesPreview from './overview/CaseStudiesPreview';
import ServicesCTA from './overview/ServicesCTA';
import { servicesOverviewData } from '../data/servicesOverviewData';

import ScrollAnimation from '~/components/layout/ScrollAnimation';

export default function ServicesOverview() {
  return (
    <div className="services-overview-wrapper">
      {/* 1. Hero Section */}
      <ServicesHero
        title={servicesOverviewData.heroTitle}
        subtitle={servicesOverviewData.heroSubtitle}
        ctaText={servicesOverviewData.heroCtaText}
        ctaLink={servicesOverviewData.heroCtaLink}
      />

      {/* 2. Capabilities Grid */}
      <ScrollAnimation animation="slide-up">
        <CapabilitiesGrid capabilities={servicesOverviewData.capabilityCards} />
      </ScrollAnimation>

      {/* 3. Service Metrics - Key Stats */}
      <ScrollAnimation animation="slide-up">
        <ServiceMetrics metrics={servicesOverviewData.metrics} />
      </ScrollAnimation>

      {/* 4. Process Steps - How It Works */}
      <ScrollAnimation animation="slide-up">
        <ProcessSteps steps={servicesOverviewData.processSteps} />
      </ScrollAnimation>

      {/* 5. Case Studies Preview */}
      <ScrollAnimation animation="slide-up">
        <CaseStudiesPreview />
      </ScrollAnimation>

      {/* 6. Final CTA */}
      <ScrollAnimation animation="scale-up">
        <ServicesCTA />
      </ScrollAnimation>
    </div>
  );
}
