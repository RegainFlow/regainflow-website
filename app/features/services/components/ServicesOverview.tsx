import ServicesHero from './overview/ServicesHero';
import CapabilitiesGrid from './overview/CapabilitiesGrid';
import ProcessSteps from './overview/ProcessSteps';
import ServiceMetrics from './overview/ServiceMetrics';
import CaseStudiesPreview from './overview/CaseStudiesPreview';
import ServicesCTA from './overview/ServicesCTA';
import { servicesOverviewData } from '../data/servicesOverviewData';

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
      <CapabilitiesGrid capabilities={servicesOverviewData.capabilityCards} />

      {/* 4. Process Steps - How It Works */}
      <ProcessSteps steps={servicesOverviewData.processSteps} />

      {/* 5. Case Studies Preview */}
      <CaseStudiesPreview />

      {/* 6. Final CTA */}
      <ServicesCTA />
    </div>
  );
}
