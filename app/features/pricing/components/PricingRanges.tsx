import type { PricingRange } from '../types/pricing.types';
import { PiCheckCircleDuotone } from 'react-icons/pi';

interface PricingRangesProps {
  data: PricingRange[];
}

export default function PricingRanges({ data }: PricingRangesProps) {
  return (
    <section className="pricing-ranges">
      <div className="container">
        <div className="pricing-ranges__header">
          <h2 className="section-title">Service Pricing Ranges</h2>
          <p className="subheading">
            Transparent pricing for Fractional CTO, AI/Data engineering retainers, platform builds,
            and hourly consulting.
          </p>
        </div>

        <div className="pricing-ranges__grid">
          {data.map((range, index) => (
            <div key={index} className="glass-card pricing-range-card">
              <div className="pricing-range-card__icon">
                <range.icon size={48} />
              </div>
              <h3 className="pricing-range-card__name">{range.name}</h3>
              <p className="pricing-range-card__price">{range.priceRange}</p>
              <p className="pricing-range-card__description">{range.description}</p>

              <div className="pricing-range-card__includes">
                <h4>What's Included:</h4>
                <ul>
                  {range.includes.map((item, i) => (
                    <li key={i}>
                      <PiCheckCircleDuotone size={20} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-range-card__ideal">
                <p>
                  <strong>Ideal for:</strong> {range.ideal}
                </p>
              </div>

              {range.note && (
                <div className="pricing-range-card__note">
                  <p className="caption">{range.note}</p>
                </div>
              )}

              <a href={range.ctaHref} className="neon-button-glass">
                {range.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
