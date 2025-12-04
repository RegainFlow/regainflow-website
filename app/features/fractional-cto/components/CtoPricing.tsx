import type { PricingTier } from '../types/fractional-cto.types';
import { PiCheckCircleDuotone } from 'react-icons/pi';

interface CtoPricingProps {
  data: PricingTier[];
}

export default function CtoPricing({ data }: CtoPricingProps) {
  return (
    <section className="cto-pricing glass-section">
      <div className="container">
        <div className="cto-pricing__header">
          <h2 className="section-title">Fractional CTO Retainer Pricing</h2>
          <p className="subheading">
            Transparent, value-aligned pricing. Get strategic CTO leadership without the $300k+
            full-time executive cost.
          </p>
        </div>

        <div className="cto-pricing__grid">
          {data.map((tier, index) => (
            <div key={index} className="glass-card cto-pricing-card">
              <div className="cto-pricing-card__header">
                <h3 className="cto-pricing-card__name">{tier.name}</h3>
                <p className="cto-pricing-card__price">{tier.priceRange}</p>
                <p className="cto-pricing-card__description">{tier.description}</p>
              </div>

              <div className="cto-pricing-card__includes">
                <h4>What's Included:</h4>
                <ul>
                  {tier.includes.map((item, i) => (
                    <li key={i}>
                      <PiCheckCircleDuotone size={20} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cto-pricing-card__ideal">
                <p>
                  <strong>Ideal for:</strong> {tier.ideal}
                </p>
              </div>

              {tier.note && (
                <div className="cto-pricing-card__note">
                  <p className="caption">{tier.note}</p>
                </div>
              )}

              <a href="https://cal.com/regainflow/cto-strategy" className="neon-button-glass">
                Book Strategy Session
              </a>
            </div>
          ))}
        </div>

        <div className="cto-pricing__footer">
          <p className="subheading">
            Hands-on engineering work billed separately: hourly ($115-$155/hr) or fixed-price
            projects ($25k-$180k).
          </p>
          <a href="/pricing" className="neon-button-glass">
            View All Pricing & Packages →
          </a>
        </div>
      </div>
    </section>
  );
}
