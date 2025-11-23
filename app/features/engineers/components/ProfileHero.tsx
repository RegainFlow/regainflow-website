import type { TeamMember } from '../types/engineer.types';
import profileHeroStyles from './profile-hero.css?url';

export const links = () => [{ rel: 'stylesheet', href: profileHeroStyles }];

interface ProfileHeroProps {
  member: TeamMember;
}

export default function ProfileHero({ member }: ProfileHeroProps) {
  return (
    <section className="profile-hero-section glass-section">
      <div className="profile-hero-container">
        <div className="profile-hero-image-wrapper">
          <div className="profile-hero-image-container">
            <img
              src={member.profilePic}
              alt={member.name}
              className="profile-hero-image"
            />
          </div>
        </div>

        <div className="profile-hero-content">
          <div className="profile-hero-header">
            <h1 className="profile-hero-name">{member.name}</h1>
            <p className="profile-hero-role">{member.role}</p>
          </div>

          <p className="profile-hero-bio">{member.bio}</p>

          <div className="profile-hero-socials">
            {member.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-social-link"
              >
                <img src={social.icon} alt={`social-${idx}`} />
              </a>
            ))}
          </div>

          <div className="profile-hero-cta">
            <a
              href="https://cal.com/regainflow/30min"
              className="neon-button-glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Call with {member.name.split(' ')[0]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
