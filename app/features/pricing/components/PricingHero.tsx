import type { PricingHero as PricingHeroType } from '../types/pricing.types';

interface PricingHeroProps {
  data: PricingHeroType;
}

export default function PricingHero({ data }: PricingHeroProps) {
  return (
    <section className="pricing-hero glass-section">
      <div className="container">
        <div className="pricing-hero__content">
          <h1 className="pricing-hero__title">{data.title}</h1>
          <p className="pricing-hero__subtitle">{data.subtitle}</p>
          <div className="pricing-hero__philosophy glass-card">
            <h3>Our Pricing Philosophy</h3>
            <p>{data.philosophy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
