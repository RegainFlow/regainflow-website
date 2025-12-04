import type { IconType } from 'react-icons';

export interface PricingHero {
  title: string;
  subtitle: string;
  philosophy: string;
}

export interface PricingRange {
  icon: IconType;
  name: string;
  priceRange: string;
  description: string;
  includes: string[];
  ideal: string;
  note?: string;
  ctaText: string;
  ctaHref: string;
}

export interface ProductizedPackage {
  icon: IconType;
  name: string;
  price: string;
  duration: string;
  description: string;
  deliverables: string[];
  ideal: string;
  ctaText: string;
  ctaHref: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export interface PricingCta {
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
