import type { TeamMember } from '../types/engineer.types';
import ProfileHero from './ProfileHero';
import KeyHighlights from './KeyHighlights';
import TopSkillsShowcase from './TopSkillsShowcase';
import TechStackAccordion from './TechStackAccordion';
import ProfileCTA from './ProfileCTA';

interface EngineerProfileProps {
  engineer: TeamMember;
}

export default function EngineerProfile({ engineer }: EngineerProfileProps) {
  // Default highlights if not provided
  const highlights = engineer.highlights || [
    `${engineer.stats[0]?.value} ${engineer.stats[0]?.label}`,
    `${engineer.stats[1]?.value} ${engineer.stats[1]?.label}`,
    `Expert in ${engineer.techStack[0]?.name}`
  ];

  // Default top skills if not provided (top 10 by level)
  const topSkills = engineer.topSkills ||
    [...engineer.techStack]
      .sort((a, b) => b.level - a.level)
      .slice(0, 10);

  return (
    <div className="engineer-profile-wrapper">
      {/* 1. Profile Hero */}
      <ProfileHero member={engineer} />

      {/* 2. Key Highlights Bar */}
      <KeyHighlights highlights={highlights} />

      {/* 3. Top Skills Showcase */}
      <TopSkillsShowcase topSkills={topSkills} />

      {/* 4. Stats Grid */}
      <section className="engineer-stats-section glass-section-sm">
        <div className="engineer-stats-container">
          <h2 className="section-title">
            Key <span className="text-highlight">Metrics</span>
          </h2>
          <div className="engineer-stats-grid-modern">
            {engineer.stats.map((stat, idx) => (
              <div key={idx} className="glass-card-stat">
                <div className="glass-card-stat-value">{stat.value}</div>
                <div className="glass-card-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack Accordion */}
      <TechStackAccordion techStack={engineer.techStack} />

      {/* 6. Profile CTA */}
      <ProfileCTA engineerName={engineer.name} />
    </div>
  );
}
