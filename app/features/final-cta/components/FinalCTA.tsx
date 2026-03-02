import { PiTrophyDuotone, PiCalendarCheckDuotone } from "react-icons/pi";
import finalCtaStyles from "./final-cta.css?url";
import { bookingUrl } from "~/config/site.config";
import { finalCtaData } from "../data/finalCtaData";

export const links = () => [{ rel: "stylesheet", href: finalCtaStyles }];

export default function FinalCTA() {
  return (
    <section className="final-cta-section glass-section">
      <div className="container">
        <div className="final-cta-container glass-card">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Ready to <span className="text-highlight">Transform</span> your
              Business?
            </h2>

            <p className="final-cta-description">{finalCtaData.description}</p>

            <div className="final-cta-buttons">
              <a
                href={bookingUrl}
                className="neon-button-glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiCalendarCheckDuotone size={24} />
                {finalCtaData.primaryCtaText}
              </a>

              <a
                href="/client-results"
                className="neon-button-glass neon-button-secondary"
              >
                <PiTrophyDuotone size={24} />
                {finalCtaData.secondaryCtaText}
              </a>
            </div>

            <p className="final-cta-note">{finalCtaData.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
