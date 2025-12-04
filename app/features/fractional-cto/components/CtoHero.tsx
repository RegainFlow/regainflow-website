import type { FractionalCtoHero } from '../types/fractional-cto.types';

interface CtoHeroProps {
  data: FractionalCtoHero;
}

export default function CtoHero({ data }: CtoHeroProps) {
  return (
    <section className="cto-hero glass-section">
      <div className="container">
        <div className="cto-hero__content">
          <h1 className="cto-hero__title">
            {data.title}
            <span className="cto-hero__subtitle-inline">{data.subtitle}</span>
          </h1>
          <p className="cto-hero__description">{data.description}</p>
          <div className="cto-hero__ctas">
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
