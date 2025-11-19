import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
import type { TechSkill } from '../types/engineer.types';
import techStackAccordionStyles from './tech-stack-accordion.css?url';

export const links = () => [{ rel: 'stylesheet', href: techStackAccordionStyles }];

interface TechStackAccordionProps {
  techStack: TechSkill[];
}

export default function TechStackAccordion({ techStack }: TechStackAccordionProps) {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  // Group skills by category
  const groupedSkills = techStack.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, TechSkill[]>
  );

  // Sort skills within each category by level (highest first)
  Object.keys(groupedSkills).forEach((category) => {
    groupedSkills[category].sort((a, b) => b.level - a.level);
  });

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <section className="tech-stack-accordion-section glass-section">
      <div className="tech-stack-accordion-container">
        <h2 className="section-title">
          Complete <span className="text-highlight">Tech Stack</span>
        </h2>

        <p className="section-subtitle">
          Expand categories to view all skills and proficiency levels
        </p>

        <div className="tech-stack-accordion">
          {Object.entries(groupedSkills).map(([category, skills]) => {
            const isOpen = openCategories.has(category);
            return (
              <div
                key={category}
                className={`accordion-category ${isOpen ? 'active' : ''}`}
                data-category={category}
              >
                <button
                  className="accordion-category-header"
                  onClick={() => toggleCategory(category)}
                  aria-expanded={isOpen}
                >
                  <h3 className="accordion-category-title">{category}</h3>
                  <div className="accordion-category-meta">
                    <span className="accordion-skill-count">
                      {skills.length} skill{skills.length !== 1 ? 's' : ''}
                    </span>
                    <PiCaretDownBold className="accordion-category-icon" />
                  </div>
                </button>

                <div className="accordion-category-content">
                  <div className="accordion-skills-grid">
                    {skills.map((skill, idx) => (
                      <div key={idx} className="accordion-skill-item">
                        <div className="accordion-skill-header">
                          <span className="accordion-skill-name">{skill.name}</span>
                          <span className="accordion-skill-level">{skill.level}%</span>
                        </div>
                        <div className="accordion-skill-bar">
                          <div
                            className="accordion-skill-bar-fill"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
