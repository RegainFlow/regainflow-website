import { PiCalendarCheckDuotone, PiFileTextDuotone } from 'react-icons/pi';
import teamCtaStyles from './team-cta.css?url';
import { bookingUrl } from '~/config/site.config';

export const links = () => [{ rel: 'stylesheet', href: teamCtaStyles }];

export default function TeamCTA() {
  return (
    <section className="team-cta-section glass-section">
      <div className="container">
        <div className="team-cta-card glass-card">
          <div className="team-cta-content">
            <h2 className="team-cta-title">
              Ready to <span className="text-highlight">Transform</span> Your Business?
            </h2>

            <p className="team-cta-description">
              Schedule a free business assessment and let our team show you how
              digital and AI transformation can save you time and drive growth.
            </p>

            <div className="team-cta-buttons">
              <a
                href={bookingUrl}
                className="btn btn-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiCalendarCheckDuotone size={24} />
                Schedule Free Consultation
              </a>

              <a
                href="/client-results"
                className="btn btn-neon btn-secondary"
              >
                <PiFileTextDuotone size={24} />
                View Case Studies
              </a>
            </div>

            <p className="team-cta-note">
              <span className="text-free-highlight">Free assessment</span> ·{' '}
              <span className="text-free-highlight">No commitment</span> ·{' '}
              <span className="text-free-highlight">
                Results you can measure
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
