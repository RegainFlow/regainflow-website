import type { CtaSection } from '../types/fractional-cto.types';
import { PiCheckCircleDuotone } from 'react-icons/pi';

interface CtoCTAProps {
  data: CtaSection;
}

export default function CtoCTA({ data }: CtoCTAProps) {
  return (
    <section className="cto-cta glass-section">
      <div className="container">
        <div className="glass-card cto-cta__content">
          <h2 className="cto-cta__title">{data.title}</h2>
          <p className="cto-cta__description">{data.description}</p>

          <ul className="cto-cta__benefits">
            {data.benefits.map((benefit, index) => (
              <li key={index}>
                <PiCheckCircleDuotone size={24} className="check-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="cto-cta__buttons">
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
