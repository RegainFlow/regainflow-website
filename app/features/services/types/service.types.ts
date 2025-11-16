export type ServiceSlug = 'c2c-contracting';

export interface Card {
  icon: string;
  image?: string;
  text: string;
  description: string;
}

export interface ServiceInfo {
  title: string;
  subtitle: string;
  image: string;
  heroTagline?: string;
  ctaText?: string;
  ctaLink?: string;
  sectionOneTitle: string;
  sectionOneCards: Card[];
  sectionTwoTitle: string;
  sectionTwoCards: Card[];
  videoUrl?: string;
}
