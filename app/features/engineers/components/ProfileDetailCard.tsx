import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ModalTechStack from './ModalTechStack';
import { PiStackDuotone, PiUserCircleDuotone } from 'react-icons/pi';

import type { TeamMember } from '../types/engineer.types';

interface ProfileDetailCardProps {
  member: TeamMember;
}

export default function ProfileDetailCard({ member }: ProfileDetailCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const techStack = member.techStack ?? [];
  const topSkills = techStack.slice(0, 3);
  const remainingSkills = techStack.slice(3);

  const [animateBars, setAnimateBars] = useState(false);

  useEffect(() => {
    // Trigger after component mounts
    const timeout = setTimeout(() => setAnimateBars(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="profile-detail-card glass-card">
      <div className="profile-detail-left">
        <img src={member.profilePic} alt={member.name} />
        <div className="profile-role-block">
          <div className="profile-role-tag badge">{member.role}</div>
          <div className="profile-role-links">
            {member.socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-role-link"
              >
                <img src={social.icon} alt={`social-${i}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="profile-detail-right">
        <h2>{member.name}</h2>
        <p>{member.bio}</p>

        {/* Stats */}
        <div className="profile-stats">
          {member.stats.map((stat, i) => (
            <div className="profile-stat" key={i}>
              <p>{stat.value}</p>
              <h4>{stat.label}</h4>
            </div>
          ))}
        </div>

        {/* Skills (Top 3) */}
        <div className="profile-skills">
          {topSkills.map((tech, i) => (
            <div
              className="profile-skill"
              key={i}
              data-category={tech.category}
            >
              <label>{tech.name}</label>
              <div className="skill-bar">
                <div
                  className={`skill-bar-inner ${
                    animateBars ? 'animate-bar' : ''
                  }`}
                  style={
                    {
                      '--final-width': `${tech.level}%`
                    } as React.CSSProperties
                  }
                />
              </div>
              <span className="skill-percent">{tech.level}%</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {remainingSkills.length > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-neon"
              style={{ flex: '1' }}
            >
              <PiStackDuotone size={20} style={{ marginRight: '10px' }} />
              View Full Tech Stack
            </button>
          )}

          <Link
            to={`/engineers/${member.name.split(' ')[0].toLowerCase()}`}
            className="btn btn-neon"
            style={{ flex: '1' }}
          >
            <PiUserCircleDuotone size={20} style={{ marginRight: '10px' }} />
            View Full Profile
          </Link>
        </div>

        {remainingSkills.length > 0 && (
          <ModalTechStack
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            skills={techStack}
          />
        )}
      </div>
    </div>
  );
}
