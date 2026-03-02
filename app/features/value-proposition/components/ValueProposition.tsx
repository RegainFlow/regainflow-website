import { valuePropData } from "../data/valuePropData";
import {
  PiGlobeDuotone,
  PiRobotDuotone,
  PiArrowsClockwiseDuotone,
  PiCloudArrowUpDuotone,
  PiUsersFourDuotone,
  PiChartLineDuotone,
  PiCalendarCheckDuotone,
  PiTrophyDuotone,
} from "react-icons/pi";
import type { IconType } from "react-icons";
import { bookingUrl } from "~/config/site.config";

const iconMap: Record<string, IconType> = {
  Globe: PiGlobeDuotone,
  Robot: PiRobotDuotone,
  ArrowsClockwise: PiArrowsClockwiseDuotone,
  CloudArrowUp: PiCloudArrowUpDuotone,
  UsersFour: PiUsersFourDuotone,
  ChartLine: PiChartLineDuotone,
};

const cardIcons: IconType[] = [PiGlobeDuotone, PiRobotDuotone];

export default function ValueProposition() {
  return (
    <section id="value-prop" className="value-proposition-section">
      <div className="vp-container">
        <h2 className="section-title mb-md">
          <span className="text-highlight">Regain</span> Your{" "}
          <span className="text-highlight">Flow</span>
        </h2>

        {valuePropData.map((service, idx) => {
          const CardIcon = cardIcons[idx];
          return (
            <div className="vp-card" key={idx}>
              <div className="vp-content-wrapper">
                <div className="vp-text">
                  <h2 className="vp-title">
                    <span className="vp-title-row">
                      {CardIcon && (
                        <CardIcon color="#00d6cb" className="vp-title-icon" />
                      )}
                      {service.title}
                    </span>
                  </h2>
                  <p className="vp-subtitle">{service.subtitle}</p>
                  <ul className="vp-bullets">
                    {service.bullets.map((b, bidx) => {
                      const IconComponent = iconMap[b.icon];
                      return (
                        <li key={bidx} className="vp-bullet-item">
                          {IconComponent && (
                            <IconComponent
                              size={32}
                              className="vp-bullet-icon"
                            />
                          )}
                          <span>{b.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="vp-buttons">
                    <a
                      href={bookingUrl}
                      className="neon-button-glass"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PiCalendarCheckDuotone size={24} />
                      Book Your Free Assessment
                    </a>
                    <a
                      href="/client-results"
                      className="neon-button-glass neon-button-secondary"
                    >
                      <PiTrophyDuotone size={24} />
                      See Client Results
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
