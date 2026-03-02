import { Link } from "react-router";
import * as PiIcons from "react-icons/pi";
import type { CapabilityCard } from "../../types/service.types";
import capabilitiesGridStyles from "./capabilities-grid.css?url";

export const links = () => [
  { rel: "stylesheet", href: capabilitiesGridStyles },
];

interface CapabilitiesGridProps {
  capabilities: CapabilityCard[];
}

export default function CapabilitiesGrid({
  capabilities,
}: CapabilitiesGridProps) {
  return (
    <section className="capabilities-grid-section glass-section">
      <div className="container">
        <h2 className="section-title">
          How We <span className="text-highlight">Help</span>
        </h2>
        <p className="section-subtitle">
          Two focused service lines designed to create clearer growth and less
          operational drag
        </p>

        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => {
            const IconComponent = (PiIcons as any)[cap.icon];
            return (
              <Link
                key={idx}
                to={`/services/${cap.slug}`}
                className="capability-card glass-card"
              >
                <div className="capability-card-icon">
                  {IconComponent && <IconComponent size={40} />}
                </div>
                <h3 className="capability-card-title">{cap.title}</h3>
                <p className="capability-card-description">{cap.description}</p>
                <div className="capability-card-link">
                  Explore {cap.title} →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
