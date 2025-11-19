/* ==========================================================================
   Capability Slugs & Types
   ========================================================================== */

export type CapabilitySlug =
  | 'ai-automation'
  | 'rag-search'
  | 'data-validation'
  | 'system-integration'
  | 'full-stack-engineering'
  | 'devops';

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

export interface Capability {
  slug: CapabilitySlug;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string; // Rich text description
  problems: Problem[]; // Problems this capability solves
  approach: ApproachStep[]; // How we approach this service
  techStack: TechItem[]; // Technologies used
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
  value: string; // e.g., "15+"
  label: string; // e.g., "Years Combined Experience"
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

