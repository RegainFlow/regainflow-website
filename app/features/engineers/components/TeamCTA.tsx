import { PiCalendarCheckDuotone, PiFileTextDuotone } from 'react-icons/pi';
import teamCtaStyles from './team-cta.css?url';
import { bookingUrl } from '~/config/site.config';

export const links = () => [{ rel: 'stylesheet', href: teamCtaStyles }];

export default function TeamCTA() {
  return (
    <section className="team-cta-section glass-section">
      <div className="team-cta-container glass-card">
        <div className="team-cta-content">
          <h2 className="team-cta-title">
            Ready to Work with Our <span className="text-highlight">Team</span>?
          </h2>

          <p className="team-cta-description">
            Get senior engineering talent on your project in days, not months.
            Schedule a free consultation to discuss your requirements.
          </p>

          <div className="team-cta-buttons">
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
              <PiFileTextDuotone size={24} />
              View Case Studies
            </a>
          </div>

          <p className="team-cta-note">
            <span className="text-free-highlight">Free consultation</span> ·{' '}
            <span className="text-free-highlight">No commitment</span> ·{' '}
            <span className="text-free-highlight">
              Flexible C2C or project terms
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
