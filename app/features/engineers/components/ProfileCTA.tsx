import { PiCalendarCheckDuotone, PiUsersDuotone } from 'react-icons/pi';
import profileCtaStyles from './profile-cta.css?url';
import { bookingUrl } from '~/config/site.config';
import { teamPageCopy } from '../data/teamPageCopy';

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
            {teamPageCopy.profileCtaTitlePrefix}{' '}
            <span className="text-highlight">{firstName}</span>?
          </h2>

          <p className="profile-cta-description">
            {teamPageCopy.profileCtaDescription}
          </p>

          <div className="profile-cta-buttons">
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
              href="/engineers"
              className="neon-button-glass neon-button-secondary"
            >
              <PiUsersDuotone size={24} />
              View Full Team
            </a>
          </div>

          <p className="profile-cta-note">
            <span className="text-free-highlight">Free assessment</span> |{' '}
            <span className="text-free-highlight">No commitment</span> |{' '}
            <span className="text-free-highlight">Clear next steps</span>
          </p>
        </div>
      </div>
    </section>
  );
}
