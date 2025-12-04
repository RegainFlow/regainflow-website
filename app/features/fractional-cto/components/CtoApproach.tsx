import type { EngagementPhase, BenefitsSection } from '../types/fractional-cto.types';

interface CtoApproachProps {
  data: EngagementPhase[];
  benefits: BenefitsSection;
}

export default function CtoApproach({ data, benefits }: CtoApproachProps) {
  return (
    <>
      {/* Part 1: Engagement Phases */}
      <section className="cto-approach-section glass-section">
        <div className="cto-approach-container">
          <h2 className="section-title">
            How Fractional CTO <span className="text-highlight">Engagements Work</span>
          </h2>
          <p className="section-subtitle">
            From discovery to ongoing strategic partnership—here's our proven process
          </p>

          <div className="cto-approach-steps">
            {data.map((phase) => (
              <div key={phase.phase} className="glass-card-step">
                <div className="glass-card-step-number">{phase.phase}</div>
                <div className="cto-approach-step-header">
                  <h3 className="glass-card-step-title">{phase.title}</h3>
                  <span className="cto-approach-step-duration">{phase.duration}</span>
                </div>
                <p className="glass-card-step-description">{phase.description}</p>

                <div className="cto-approach-step-deliverables">
                  <h4>Deliverables:</h4>
                  <ul>
                    {phase.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Why Choose RegainFlow - Benefits */}
      <section className="cto-benefits-section glass-section">
        <div className="cto-benefits-container">
          <h2 className="section-title">
            Why Choose <span className="text-highlight">RegainFlow</span> for Fractional CTO Services
          </h2>
          <p className="section-subtitle">{benefits.subtitle}</p>

          <div className="cto-benefits-grid">
            {benefits.items.map((benefit, idx) => (
              <div key={idx} className="cto-benefit-item glass-card">
                <benefit.icon size={32} className="cto-benefit-icon" />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
