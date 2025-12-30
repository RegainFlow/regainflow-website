/**
 * Type definitions for Value Proposition feature
 * Service value cards with icon bullets
 */

export interface ValuePropBullet {
  icon: string;
  text: string;
}

export interface ValueProp {
  title: string;
  subtitle: string;
  bullets: ValuePropBullet[];
  ctaLink: string;
}
