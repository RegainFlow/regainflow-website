import type { ValuePillar } from '../types/fractional-cto.types';

interface CtoValuePropsProps {
  data: ValuePillar[];
}

export default function CtoValueProps({ data }: CtoValuePropsProps) {
  return (
    <section className="cto-value-props glass-section">
      <div className="cto-value-props__container">
        <h2 className="section-title">
          4 Pillars of <span className="text-highlight">Fractional CTO</span> Leadership
        </h2>
        <p className="section-subtitle">
          Strategic technology guidance combined with hands-on engineering execution—not just advice
        </p>

        <div className="cto-pillars-grid">
          {data.map((pillar, idx) => (
            <div key={idx} className="cto-pillar-card glass-card">
              <div className="cto-pillar-card__accent" />
              <div className="cto-pillar-card__icon-wrapper">
                <pillar.icon size={48} className="cto-pillar-card__icon" />
              </div>
              <h3 className="cto-pillar-card__title">{pillar.title}</h3>
              <p className="cto-pillar-card__description">{pillar.description}</p>

              <div className="cto-pillar-card__details">
                <h4>What You Get:</h4>
                <ul>
                  {pillar.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
