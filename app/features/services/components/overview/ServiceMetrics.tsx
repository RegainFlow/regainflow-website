import type { ServiceMetric } from '../../types/service.types';
import serviceMetricsStyles from './service-metrics.css?url';

export const links = () => [{ rel: 'stylesheet', href: serviceMetricsStyles }];

interface ServiceMetricsProps {
  metrics: ServiceMetric[];
}

export default function ServiceMetrics({ metrics }: ServiceMetricsProps) {
  return (
    <section className="service-metrics-section glass-section-sm">
      <div className="container">
        <div className="service-metrics-container">
          {metrics.map((metric, idx) => {
            return (
              <div key={idx} className="glass-card-stat">
                <div className="glass-card-stat-category">
                  <span className="glass-card-stat-step">0{idx + 1}</span>
                  <span>{metric.category}</span>
                </div>
                <div className="glass-card-stat-value">{metric.value}</div>
                <div className="glass-card-stat-label">{metric.label}</div>
                {metric.detail ? (
                  <div className="glass-card-stat-detail">{metric.detail}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
