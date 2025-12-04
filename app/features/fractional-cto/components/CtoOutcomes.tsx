import type { Outcome, TargetCustomer } from '../types/fractional-cto.types';

interface CtoOutcomesProps {
  data: Outcome[];
  targetCustomers: TargetCustomer[];
}

export default function CtoOutcomes({ data, targetCustomers }: CtoOutcomesProps) {
  return (
    <section className="cto-outcomes">
      <div className="container">
        <div className="cto-outcomes__header">
          <h2 className="section-title">Business Outcomes, Not Just Technical Deliverables</h2>
          <p className="subheading">
            We measure success by business impact—faster time-to-market, reduced costs, and
            technical decisions that accelerate growth.
          </p>
        </div>

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

        <div className="cto-outcomes__customers">
          <h2 className="section-title">Who Benefits from Fractional CTO Services</h2>
          <p className="subheading">
            Strategic technology leadership for startups and growth companies that need CTO-level
            expertise without the full-time executive cost.
          </p>
          <div className="cto-customers__grid">
            {targetCustomers.map((customer, index) => (
              <div key={index} className="glass-card cto-customer-card">
                <div className="cto-customer-card__icon">
                  <customer.icon size={48} />
                </div>
                <h3>{customer.type}</h3>
                <p className="cto-customer-card__description">{customer.description}</p>

                <div className="cto-customer-card__section">
                  <h4>Common Challenges:</h4>
                  <ul className="cto-customer-card__pain-points">
                    {customer.painPoints.map((pain, i) => (
                      <li key={i}>{pain}</li>
                    ))}
                  </ul>
                </div>

                <div className="cto-customer-card__section">
                  <h4>Outcomes You'll Achieve:</h4>
                  <ul className="cto-customer-card__outcomes">
                    {customer.outcomes.map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
