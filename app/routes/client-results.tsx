import type { Route } from './+types/client-results';
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
        'See what we\'ve built. Digital and AI transformation projects delivering real business impact — from workflow automation to AI-powered platforms.'
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
            We bring the same engineering rigor from Fortune 500 projects to
            growing businesses. Here&apos;s what that looks like in practice.
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
            className="neon-button-glass projects-cta-btn"
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
