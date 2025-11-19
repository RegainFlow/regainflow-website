import { teamStatsData } from '../data/teamStatsData';
import teamStatsStyles from './team-stats-bar.css?url';

export const links = () => [{ rel: 'stylesheet', href: teamStatsStyles }];

export default function TeamStatsBar() {
  return (
    <section className="team-stats-section glass-section-sm">
      <div className="team-stats-container">
        {teamStatsData.map((stat, idx) => (
          <div key={idx} className="glass-card-stat">
            <div className="glass-card-stat-value">{stat.value}</div>
            <div className="glass-card-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
