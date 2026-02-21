import { PiTrophyDuotone, PiCalendarCheckDuotone } from 'react-icons/pi';
import finalCtaStyles from './final-cta.css?url';
import { bookingUrl } from '~/config/site.config';

export const links = () => [{ rel: 'stylesheet', href: finalCtaStyles }];

export default function FinalCTA() {
  return (
    <section className="final-cta-section glass-section">
      <div className="container">
        <div className="final-cta-container glass-card">
          <div className="final-cta-content">
            <h2 className="final-cta-title">
              Ready to <span className="text-highlight">Transform</span> Your
              Business?
            </h2>

            <p className="final-cta-description">
              Stop losing revenue to outdated processes and manual workflows.
              Let us show you how digital and AI transformation can save you
              time and help you grow.
            </p>

            <div className="final-cta-buttons">
              <a
                href={bookingUrl}
                className="neon-button-glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiCalendarCheckDuotone size={24} />
                Schedule Free Consultation
              </a>

              <a
                href="/client-results"
                className="neon-button-glass neon-button-secondary"
              >
                <PiTrophyDuotone size={24} />
                See Our Results
              </a>
            </div>

            <p className="final-cta-note">
              Free business assessment · No commitment · Results you can measure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
