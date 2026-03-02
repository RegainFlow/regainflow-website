import { PiCalendarCheckDuotone, PiFileTextDuotone } from 'react-icons/pi';
import teamCtaStyles from './team-cta.css?url';
import { bookingUrl } from '~/config/site.config';
import { teamPageCopy } from '../data/teamPageCopy';

export const links = () => [{ rel: 'stylesheet', href: teamCtaStyles }];

export default function TeamCTA() {
  return (
    <section className="team-cta-section glass-section">
      <div className="container">
        <div className="team-cta-card glass-card">
          <div className="team-cta-content">
            <h2 className="team-cta-title">
              Want a <span className="text-highlight">Team</span> That Can Turn
              Ideas Into Working Systems?
            </h2>

            <p className="team-cta-description">
              {teamPageCopy.teamCtaDescription}
            </p>

            <div className="team-cta-buttons">
              <a
                href={bookingUrl}
                className="btn btn-neon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiCalendarCheckDuotone size={24} />
                Book Your Free Assessment
              </a>

              <a
                href="/client-results"
                className="btn btn-neon btn-secondary"
              >
                <PiFileTextDuotone size={24} />
                See Client Results
              </a>
            </div>

            <p className="team-cta-note">Free assessment | No commitment | Clear next steps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
