import type { TechSkill } from '../types/engineer.types';
import topSkillsShowcaseStyles from './top-skills-showcase.css?url';

export const links = () => [{ rel: 'stylesheet', href: topSkillsShowcaseStyles }];

interface TopSkillsShowcaseProps {
  topSkills: TechSkill[];
}

export default function TopSkillsShowcase({ topSkills }: TopSkillsShowcaseProps) {
  if (!topSkills || topSkills.length === 0) {
    return null;
  }

  return (
    <section className="top-skills-section glass-section">
      <div className="top-skills-container">
        <h2 className="section-title">
          Technical <span className="text-highlight">Strength</span>
        </h2>

        <div className="top-skills-grid">
          {topSkills.map((skill, idx) => (
            <div
              key={idx}
              className="top-skill-card glass-card"
              data-category={skill.category}
            >
              <div className="top-skill-header">
                <h3 className="top-skill-name">{skill.name}</h3>
                <span className="top-skill-level">{skill.level}%</span>
              </div>
              <div className="top-skill-category">{skill.category}</div>
              <div className="top-skill-bar">
                <div
                  className="top-skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
