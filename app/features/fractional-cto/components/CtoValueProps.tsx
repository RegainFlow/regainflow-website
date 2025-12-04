import type { ValuePillar } from '../types/fractional-cto.types';

interface CtoValuePropsProps {
  data: ValuePillar[];
}

export default function CtoValueProps({ data }: CtoValuePropsProps) {
  return (
    <section className="cto-value-props">
      <div className="container">
        <div className="cto-value-props__header">
          <h2 className="section-title">4 Pillars of Fractional CTO Leadership</h2>
          <p className="subheading">
            Strategic technology guidance combined with hands-on engineering execution—not just
            advice.
          </p>
        </div>
        <div className="cto-value-props__grid">
          {data.map((pillar, index) => (
            <div key={index} className="glass-card cto-value-prop-card">
              <div className="cto-value-prop-card__icon">
                <pillar.icon size={48} />
              </div>
              <h3 className="cto-value-prop-card__title">{pillar.title}</h3>
              <p className="cto-value-prop-card__description">{pillar.description}</p>
              <ul className="cto-value-prop-card__details">
                {pillar.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
