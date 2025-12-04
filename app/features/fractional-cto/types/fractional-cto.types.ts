import type { IconType } from 'react-icons';

export interface FractionalCtoHero {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface ValuePillar {
  icon: IconType;
  title: string;
  description: string;
  details: string[];
}

export interface EngagementPhase {
  phase: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface TargetCustomer {
  icon: IconType;
  type: string;
  description: string;
  painPoints: string[];
  outcomes: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Outcome {
  icon: IconType;
  title: string;
  description: string;
}

export interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

export interface CtaSection {
  title: string;
  description: string;
  benefits: string[];
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface BenefitsSection {
  title: string;
  subtitle: string;
  items: Benefit[];
}
