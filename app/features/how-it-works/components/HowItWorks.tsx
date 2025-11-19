import { howItWorksData } from '../data/howItWorksData';
import howItWorksStyles from './how-it-works.css?url';

export const links = () => [{ rel: 'stylesheet', href: howItWorksStyles }];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section glass-section">
      <div className="how-it-works-container">
        <h2 className="section-title">
          How It <span className="text-highlight">Works</span>
        </h2>
        <p className="section-subtitle">
          Four simple steps to get senior engineering talent on your team
        </p>

        <div className="steps-grid">
          {howItWorksData.map((step, idx) => (
            <div key={idx} className="glass-card-step">
              <div className="glass-card-step-number">{step.number}</div>
              <h3 className="glass-card-step-title">{step.title}</h3>
              <p className="glass-card-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
