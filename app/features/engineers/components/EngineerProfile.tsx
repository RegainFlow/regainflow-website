import type { TeamMember } from '../types/engineer.types';
import ProfileHero from './ProfileHero';
import KeyHighlights from './KeyHighlights';
import TopSkillsShowcase from './TopSkillsShowcase';
import ProfileCTA from './ProfileCTA';

interface EngineerProfileProps {
  engineer: TeamMember;
}

export default function EngineerProfile({ engineer }: EngineerProfileProps) {
  // Use provided highlights or fallback to stats-based highlights
  const highlights = engineer.highlights || [];

  // Use provided top skills or empty array
  const topSkills = engineer.topSkills || [];

  return (
    <div className="engineer-profile-wrapper">
      {/* 1. Profile Hero */}
      <ProfileHero member={engineer} />

      {/* 2. Key Highlights Bar */}
      <KeyHighlights highlights={highlights} />

      {/* 3. Top Skills Showcase */}
      <TopSkillsShowcase topSkills={topSkills} />

      {/* 4. Profile CTA */}
      <ProfileCTA engineerName={engineer.name} />
    </div>
  );
}
