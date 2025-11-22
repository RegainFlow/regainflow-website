import { Link } from 'react-router';
import type { TeamMember } from '../types/engineer.types';
import engineerCardStyles from './engineer-card.css?url';

export const links = () => [{ rel: 'stylesheet', href: engineerCardStyles }];

interface EngineerCardProps {
  member: TeamMember;
}

export default function EngineerCard({ member }: EngineerCardProps) {
  // Get profile URL slug (first name lowercase)
  const profileSlug = member.name.split(' ')[0].toLowerCase();

  // Get 2 key stats for quick view
  const keyStats = member.stats.slice(0, 2);

  return (
    <div className="engineer-card glass-card">
      <div className="engineer-card-header">
        <div className="engineer-card-image-wrapper">
          <img
            src={member.profilePic}
            alt={member.name}
            className="engineer-card-image"
          />
        </div>

        <div className="engineer-card-info">
          <h3 className="engineer-card-name">{member.name}</h3>
          <p className="engineer-card-role">{member.role}</p>
        </div>
      </div>

      <p className="engineer-card-bio">{member.bio}</p>

      {keyStats.length > 0 && (
        <div className="engineer-card-stats">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="engineer-stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="engineer-card-footer">
        <Link
          to={`/engineers/${profileSlug}`}
          className="neon-button-glass engineer-card-btn"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
