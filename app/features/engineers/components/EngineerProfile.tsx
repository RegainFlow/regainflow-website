import { Link } from 'react-router';
import type { TeamMember } from '../types/engineer.types';

interface EngineerProfileProps {
  engineer: TeamMember;
}

export default function EngineerProfile({ engineer }: EngineerProfileProps) {
  // Group tech stack by category
  const techByCategory = engineer.techStack.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof engineer.techStack>);

  return (
    <div className="engineer-profile-container">
      {/* Hero Section */}
      <div className="engineer-profile-hero">
        <div className="engineer-profile-sidebar">
          <img
            src={engineer.profilePic}
            alt={engineer.name}
            className="engineer-profile-pic"
          />

          <div className="engineer-availability-badge">
            <h4>✓ Available for C2C</h4>
            <p>
              Long-term contracts
              <br />
              Project consulting
            </p>
          </div>

          <div className="engineer-social-links">
            {engineer.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="engineer-social-link"
              >
                <img src={social.icon} alt="social" />
              </a>
            ))}
          </div>
        </div>

        <div className="engineer-profile-main">
          <div className="engineer-profile-header">
            <h1>{engineer.name}</h1>
            <p className="engineer-profile-role">{engineer.role}</p>
          </div>

          <p className="engineer-profile-bio">{engineer.bio}</p>

          <div className="engineer-stats-grid">
            {engineer.stats.map((stat, idx) => (
              <div key={idx} className="engineer-stat-card">
                <div className="engineer-stat-value">{stat.value}</div>
                <div className="engineer-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="engineer-section">
        <h2 className="engineer-section-title">
          Technical <span className="text-highlight">Expertise</span>
        </h2>
        <div className="engineer-tech-grid">
          {Object.entries(techByCategory).map(([category, skills]) => (
            <div
              key={category}
              className="engineer-tech-category"
              data-category={category}
            >
              <h4>{category}</h4>
              {skills.map((skill, idx) => (
                <div key={idx} className="engineer-tech-skill">
                  <div className="engineer-tech-skill-header">
                    <span className="engineer-tech-skill-name">
                      {skill.name}
                    </span>
                    <span className="engineer-tech-skill-level">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="engineer-skill-bar">
                    <div
                      className="engineer-skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="engineer-cta-section">
        <h3>Interested in working together?</h3>
        <p>
          I'm available for C2C contracts (6-12+ months) or project-based
          consulting.
          <br />
          Let's discuss how I can contribute to your team or project.
        </p>
        <div className="engineer-cta-buttons">
          <a
            href="https://cal.com/regainflow/30min"
            className="button-primary-2 animated-button btn-neon w-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="btn-content">Schedule Call</div>
          </a>
          <a
            href={engineer.socials.find((s) => s.href.includes('notion'))?.href}
            className="button-primary-2 animated-button btn-neon w-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="btn-content">View Full Resume</div>
          </a>
          <Link
            to="/engineers"
            className="button-primary-2 animated-button btn-neon w-button"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="btn-content">Back to Engineers</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
