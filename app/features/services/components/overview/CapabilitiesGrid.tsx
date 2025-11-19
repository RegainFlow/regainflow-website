import { Link } from 'react-router';
import * as PiIcons from 'react-icons/pi';
import type { CapabilityCard } from '../../types/service.types';
import capabilitiesGridStyles from './capabilities-grid.css?url';

export const links = () => [{ rel: 'stylesheet', href: capabilitiesGridStyles }];

interface CapabilitiesGridProps {
  capabilities: CapabilityCard[];
}

export default function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  return (
    <section className="capabilities-grid-section glass-section">
      <div className="capabilities-grid-container">
        <h2 className="section-title">
          Our <span className="text-highlight">Capabilities</span>
        </h2>

        <p className="section-subtitle">
          Production-grade engineering services delivering measurable ROI
        </p>

        <div className="capabilities-grid">
          {capabilities.map((capability) => {
            const IconComponent = (PiIcons as any)[capability.icon];

            return (
              <Link
                key={capability.slug}
                to={`/services/${capability.slug}`}
                className="capability-card glass-card"
              >
                <div className="capability-card-icon">
                  {IconComponent && <IconComponent size={48} />}
                </div>
                <h3 className="capability-card-title">{capability.title}</h3>
                <p className="capability-card-description">{capability.description}</p>
                <span className="capability-card-link">
                  Learn More →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
