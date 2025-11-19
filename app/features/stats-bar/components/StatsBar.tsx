import { statsData } from '../data/statsData';
import statsStyles from './stats.css?url';

export const links = () => [{ rel: 'stylesheet', href: statsStyles }];

export default function StatsBar() {
  return (
    <section className="stats-section glass-section-sm">
      <div className="stats-container">
        {statsData.map((stat, idx) => (
          <div key={idx} className="glass-card-stat">
            <div className="glass-card-stat-value">{stat.value}</div>
            <div className="glass-card-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
