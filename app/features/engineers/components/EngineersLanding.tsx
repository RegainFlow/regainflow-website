import ScrollAnimation from '~/components/layout/ScrollAnimation';
import { teamMembers } from '../data/teamData';
import EngineerCard from './EngineerCard';
import TeamCTA from './TeamCTA';

export default function EngineersLanding() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="engineers-hero-section glass-section">
        <div className="engineers-hero-container">
          <h1 className="section-title">
            Meet Our <span className="text-highlight">Team</span>
          </h1>
          <p className="section-subtitle">
            Enterprise-grade engineering expertise, applied to your business.
            Our team brings 15+ years of combined experience building AI systems, digital platforms, and automation solutions.
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
