/* ==========================================================================
   Capability Slugs & Types
   ========================================================================== */

export type CapabilitySlug = "digital-transformation" | "ai-transformation";

/* ==========================================================================
   Capability Page Types
   ========================================================================== */

export interface Problem {
  icon: string; // PiIcon name
  problem: string;
  solution: string;
}

export interface ApproachStep {
  step: number;
  title: string;
  description: string;
}

export interface TechItem {
  name: string;
  category?: string; // For colored badges
}

export interface UseCaseItem {
  title: string;
  description: string;
}

export interface Capability {
  slug: CapabilitySlug;
  title: string;
  subtitle: string;
  heroImage: string;
  problems: Problem[]; // Problems this capability solves
  approach: ApproachStep[]; // How we approach this service
  techStack?: TechItem[]; // Technologies used
  useCases: UseCaseItem[];
  ctaTitle: string; // CTA section title
  ctaDescription: string; // CTA description targeting hiring managers
  ctaButtonText: string;
  ctaButtonLink: string;
}

/* ==========================================================================
   Overview Page Types
   ========================================================================== */

export interface ProcessStep {
  step: number;
  icon: string; // PiIcon name
  title: string;
  description: string;
}

export interface ServiceMetric {
  category: string;
  value: string; // e.g., "15+"
  label: string; // e.g., "Combined experience"
  detail?: string;
}

export interface CapabilityCard {
  slug: CapabilitySlug;
  icon: string; // PiIcon name
  title: string;
  description: string; // Short teaser
}

export interface ServicesOverview {
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaLink: string;
  processSteps: ProcessStep[];
  metrics: ServiceMetric[];
  capabilityCards: CapabilityCard[];
}
