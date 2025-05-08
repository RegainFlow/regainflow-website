// app/components/ProfileDetailCard.tsx
import type { TeamMember } from '~/components/about/teamData';

interface ProfileDetailCardProps {
  member: TeamMember;
}

export default function ProfileDetailCard({ member }: ProfileDetailCardProps) {
  return (
    <div className="profile-detail-card">
      <div className="profile-detail-left">
        <img src={member.profilePic} alt={member.name} />
      </div>
      <div className="profile-detail-right">
        <h2>{member.name}</h2>
        <p>{member.bio}</p>
        <div className="profile-stats">
          {member.stats.map((stat, i) => (
            <div className="profile-stat" key={i}>
              <p>{stat.value}</p>
              <h4>{stat.label}</h4>
            </div>
          ))}
        </div>
        <div className="profile-skills">
          {member.techStack.map((tech, i) => (
            <div className="profile-skill" key={i}>
              <label>{tech.name}</label>
              <div className="skill-bar">
                <div
                  className="skill-bar-inner"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
              <span className="skill-percent">{tech.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
