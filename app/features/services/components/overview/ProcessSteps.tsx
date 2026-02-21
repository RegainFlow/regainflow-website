import * as PiIcons from 'react-icons/pi';
import type { ProcessStep } from '../../types/service.types';
import processStepsStyles from './process-steps.css?url';

export const links = () => [{ rel: 'stylesheet', href: processStepsStyles }];

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="process-steps-section glass-section">
      <div className="container">
        <div className="process-steps-container">
          <h2 className="section-title">
            How <span className="text-highlight">It Works</span>
          </h2>

          <p className="section-subtitle">
            Our proven engagement process from discovery to delivery
          </p>

          <div className="process-steps-grid">
            {steps.map((step) => {
              const IconComponent = (PiIcons as any)[step.icon];

              return (
                <div key={step.step} className="process-step-card glass-card-step">
                  <div className="process-step-number">{step.step}</div>

                  <div className="process-step-icon">
                    {IconComponent && <IconComponent size={28} />}
                  </div>

                  <div className="process-step-body">
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-description">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
