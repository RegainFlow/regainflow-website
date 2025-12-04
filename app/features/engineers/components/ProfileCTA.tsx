import { PiCalendarCheckDuotone, PiUsersDuotone } from 'react-icons/pi';
import profileCtaStyles from './profile-cta.css?url';

export const links = () => [{ rel: 'stylesheet', href: profileCtaStyles }];

interface ProfileCTAProps {
  engineerName: string;
}

export default function ProfileCTA({ engineerName }: ProfileCTAProps) {
  const firstName = engineerName.split(' ')[0];

  return (
    <section className="profile-cta-section glass-section">
      <div className="profile-cta-container glass-card">
        <div className="profile-cta-content">
          <h2 className="profile-cta-title">
            Ready to Work with{' '}
            <span className="text-highlight">{firstName}</span>?
          </h2>

          <p className="profile-cta-description">
            Schedule a free consultation to discuss your project requirements
            and how {firstName} can help you ship faster.
          </p>

          <div className="profile-cta-buttons">
            <a
              href="https://cal.com/regainflow/cto-strategy"
              className="neon-button-glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiCalendarCheckDuotone size={24} />
              Schedule Consultation
            </a>

            <a
              href="/engineers"
              className="neon-button-glass neon-button-secondary"
            >
              <PiUsersDuotone size={24} />
              View Full Team
            </a>
          </div>

          <p className="profile-cta-note">
            <span className="text-free-highlight">Free consultation</span> ·{' '}
            <span className="text-free-highlight">No commitment</span> ·{' '}
            <span className="text-free-highlight">
              Flexible engagement terms
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
