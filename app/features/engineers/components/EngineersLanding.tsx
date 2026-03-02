import ScrollAnimation from '~/components/layout/ScrollAnimation';
import { teamMembers } from '../data/teamData';
import { teamPageCopy } from '../data/teamPageCopy';
import EngineerCard from './EngineerCard';
import TeamCTA from './TeamCTA';

export default function EngineersLanding() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="engineers-hero-section glass-section">
        <div className="engineers-hero-container">
          <h1 className="section-title">
            Meet the Team Behind <span className="text-highlight">RegainFlow</span>
          </h1>
          <p className="section-subtitle">
            {teamPageCopy.landingSubtitle}
          </p>
        </div>
      </section>

      {/* Section 2: Engineers Grid */}
      <ScrollAnimation animation="slide-up">
        <section className="engineers-grid-section glass-section-sm">
          <div className="engineers-grid-container">
            {teamMembers.map((member, idx) => (
              <EngineerCard key={idx} member={member} />
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Section 3: Team CTA */}
      <ScrollAnimation animation="scale-up">
        <TeamCTA />
      </ScrollAnimation>
    </>
  );
}
