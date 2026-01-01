import type { Route } from './+types/projects';
import { metrics } from '~/features/projects';
import CaseStudiesGrid from '~/features/projects/components/CaseStudiesGrid';
import projectsStyles from '~/features/projects/components/projects.css?url';
import { bookingUrl } from '~/config/site.config';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: projectsStyles }
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'RegainFlow | Client Results' },
    {
      name: 'description',
      content:
        'Enterprise automation and data infrastructure delivered by senior engineers. Real projects, measured impact, production-scale outcomes.'
    }
  ];
}

import ScrollAnimation from '~/components/layout/ScrollAnimation';

export default function projects() {
  return (
    <>
      {/* INTEGRATED HERO WITH METRICS */}
      <section className="projects-hero-integrated">
        <div className="hero-content">
          <h1 className="projects-title">
            Client <span className="text-highlight">Results</span>
          </h1>
          <p className="projects-subtitle">
            Real projects, measured impact, production-scale outcomes delivered
            by senior engineers.
          </p>
        </div>

        {/* INLINE METRICS */}
        <div className="projects-metrics-inline">
          {metrics.map((m, i) => (
            <div className="projects-metric-inline" key={i}>
              <div className="metric-value">{m.value}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES GRID WITH TABS */}
      <ScrollAnimation animation="slide-up">
        <CaseStudiesGrid />
      </ScrollAnimation>

      {/* CTA SECTION */}
      <ScrollAnimation animation="scale-up">
        <section className="projects-cta">
          <p>Want results like these?</p>
          <a
            href={bookingUrl}
            className="projects-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </section>
      </ScrollAnimation>
    </>
  );
}
