import { useState, useMemo } from 'react';
import { teamMembers } from '../data/teamData';
import TeamStatsBar from './TeamStatsBar';
import ExpertiseFilter from './ExpertiseFilter';
import EngineerCard from './EngineerCard';
import TeamCTA from './TeamCTA';

export default function EngineersLanding() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter engineers based on active filter
  const filteredEngineers = useMemo(() => {
    if (activeFilter === 'all') {
      return teamMembers;
    }
    return teamMembers.filter((engineer) =>
      engineer.primaryExpertise?.some((exp) =>
        exp.toLowerCase().replace('/', '-').includes(activeFilter)
      )
    );
  }, [activeFilter]);

  // Count engineers per filter
  const engineerCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: teamMembers.length
    };

    const filterIds = ['ai-ml', 'full-stack', 'devops', 'automation'];
    filterIds.forEach((filterId) => {
      counts[filterId] = teamMembers.filter((engineer) =>
        engineer.primaryExpertise?.some((exp) =>
          exp.toLowerCase().replace('/', '-').includes(filterId)
        )
      ).length;
    });

    return counts;
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className="engineers-hero-section glass-section">
        <div className="engineers-hero-container">
          <h1 className="section-title">
            Meet Your Senior Engineering <span className="text-highlight">Team</span>
          </h1>
          <p className="section-subtitle">
            Contract-ready senior engineers specializing in AI/ML, full-stack development, and automation.
            Available for C2C contracts or project-based consulting.
          </p>
        </div>
      </section>

      {/* Section 2: Team Stats */}
      <TeamStatsBar />

      {/* Section 3: Expertise Filter */}
      <ExpertiseFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        engineerCounts={engineerCounts}
      />

      {/* Section 4: Engineers Grid */}
      <section className="engineers-grid-section glass-section-sm">
        <div className="engineers-grid-container">
          {filteredEngineers.map((member, idx) => (
            <EngineerCard key={idx} member={member} />
          ))}
        </div>
      </section>

      {/* Section 5: Team CTA */}
      <TeamCTA />
    </>
  );
}
