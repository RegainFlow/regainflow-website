import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { metrics } from '~/components/portfolio/portfolioData';
import portfolioStyles from '~/components/portfolio/portfolio.css?url';
import PortfolioCarousel from '~/components/portfolio/PortfolioCarousel';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: portfolioStyles }
];

export const meta: MetaFunction = () => [
  { title: 'Portfolio Regain Flow | Case Studies & Client Work' },
  {
    name: 'description',
    content:
      'Explore our portfolio of real-world automation wins. See how Regain Flow helped businesses save time, cut costs, and scale faster using AI-powered solutions.'
  }
];

export default function Portfolio() {
  return (
    <>
      {/* KEY METRICS SECTION */}
      <section className="portfolio-metrics">
        {metrics.map((m, i) => (
          <div className="portfolio-metric" key={i}>
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </section>

      {/* HERO SECTION */}
      <section className="portfolio-hero">
        <h1 className="portfolio-title">
          Our <span className="text-span-27">Portfolio</span>
        </h1>
        <p className="portfolio-subtitle">
          Explore real automation solutions and results we've delivered for
          clients.
        </p>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="portfolio-carousel-container">
        <PortfolioCarousel />
      </section>

      {/* CTA SECTION */}
      <section className="portfolio-cta">
        <p>Want results like these?</p>
        <a
          href="https://cal.com/regainflow/30min"
          className="portfolio-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Call
        </a>
      </section>
    </>
  );
}
