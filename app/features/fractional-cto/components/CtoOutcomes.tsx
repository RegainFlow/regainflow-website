import type { Outcome, TargetCustomer } from '../types/fractional-cto.types';

interface CtoOutcomesProps {
  data: Outcome[];
  targetCustomers: TargetCustomer[];
}

export default function CtoOutcomes({ data, targetCustomers }: CtoOutcomesProps) {
  return (
    <>
      {/* Part 1: Business Outcomes */}
      <section className="cto-outcomes glass-section">
        <div className="cto-outcomes__container">
          <h2 className="section-title">
            Business Outcomes, Not Just <span className="text-highlight">Technical Deliverables</span>
          </h2>
          <p className="section-subtitle">
            We measure success by business impact—faster time-to-market, reduced costs, and
            technical decisions that accelerate growth
          </p>

          <div className="cto-outcomes__grid">
            {data.map((outcome, index) => (
              <div key={index} className="glass-card cto-outcome-card">
                <div className="cto-outcome-card__icon">
                  <outcome.icon size={40} />
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Who Benefits - Timeline/Journey Layout */}
      <section className="cto-customers-section glass-section">
        <div className="cto-customers-container">
          <h2 className="section-title">
            Who Benefits from <span className="text-highlight">Fractional CTO</span> Services
          </h2>
          <p className="section-subtitle">
            Whether you're scaling fast or building from scratch, we meet you where you are
          </p>

          <div className="cto-customers-journey">
            {targetCustomers.map((customer, idx) => (
              <div key={idx} className="cto-customer-stage">
                <div className="cto-customer-stage__number">{idx + 1}</div>
                <div className="cto-customer-stage__card glass-card">
                  <div className="cto-customer-stage__header">
                    <customer.icon size={48} className="cto-customer-stage__icon" />
                    <h3 className="cto-customer-stage__type">{customer.type}</h3>
                  </div>
                  <p className="cto-customer-stage__description">{customer.description}</p>

                  <div className="cto-customer-stage__challenges">
                    <h4>Common Challenges:</h4>
                    <ul>
                      {customer.painPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cto-customer-stage__outcomes">
                    <h4>Outcomes You'll Achieve:</h4>
                    <ul>
                      {customer.outcomes.map((outcome, i) => (
                        <li key={i}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
