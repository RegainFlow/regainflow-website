import type { PricingCta as PricingCtaType } from '../types/pricing.types';
import { PiCheckCircleDuotone } from 'react-icons/pi';

interface PricingCTAProps {
  data: PricingCtaType;
}

export default function PricingCTA({ data }: PricingCTAProps) {
  return (
    <section className="pricing-cta glass-section">
      <div className="container">
        <div className="glass-card pricing-cta__content">
          <h2 className="pricing-cta__title">{data.title}</h2>
          <p className="pricing-cta__description">{data.description}</p>

          <ul className="pricing-cta__benefits">
            {data.benefits.map((benefit, index) => (
              <li key={index}>
                <PiCheckCircleDuotone size={24} className="check-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="pricing-cta__buttons">
            <a href={data.primaryCta.href} className="neon-button-glass">
              {data.primaryCta.text}
            </a>
            <a href={data.secondaryCta.href} className="button-secondary">
              {data.secondaryCta.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
