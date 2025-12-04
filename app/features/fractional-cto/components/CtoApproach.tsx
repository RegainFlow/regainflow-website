import type { EngagementPhase, BenefitsSection } from '../types/fractional-cto.types';

interface CtoApproachProps {
  data: EngagementPhase[];
  benefits: BenefitsSection;
}

export default function CtoApproach({ data, benefits }: CtoApproachProps) {
  return (
    <section className="cto-approach glass-section">
      <div className="container">
        <div className="cto-approach__header">
          <h2 className="section-title">How Fractional CTO Engagements Work</h2>
          <p className="subheading">
            From discovery to ongoing execution—a clear, proven engagement model that delivers
            results.
          </p>
        </div>

        <div className="cto-approach__phases">
          {data.map((phase) => (
            <div key={phase.phase} className="glass-card cto-phase-card">
              <div className="cto-phase-card__header">
                <span className="cto-phase-card__number">Phase {phase.phase}</span>
                <span className="cto-phase-card__duration">{phase.duration}</span>
              </div>
              <h3 className="cto-phase-card__title">{phase.title}</h3>
              <p className="cto-phase-card__description">{phase.description}</p>
              <div className="cto-phase-card__deliverables">
                <h4>Deliverables:</h4>
                <ul>
                  {phase.deliverables.map((deliverable, i) => (
                    <li key={i}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="cto-approach__benefits">
          <h3 className="text-highlight">{benefits.title}</h3>
          <p className="subheading">{benefits.subtitle}</p>
          <div className="cto-benefits__grid">
            {benefits.items.map((benefit, index) => (
              <div key={index} className="cto-benefit-item">
                <div className="cto-benefit-item__icon">
                  <benefit.icon size={32} />
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
