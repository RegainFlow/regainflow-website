import * as PiIcons from 'react-icons/pi';
import { Link } from 'react-router';
import type { Capability } from '../types/service.types';
import { projectsItems } from '~/features/projects/data/projectsData';
import capabilityPageStyles from './capability-page.css?url';

export const links = () => [{ rel: 'stylesheet', href: capabilityPageStyles }];

interface CapabilityPageProps {
  capability: Capability;
}

export default function CapabilityPage({ capability }: CapabilityPageProps) {
  // Filter case studies by this capability's slug
  const relevantCaseStudies = projectsItems
    .filter((caseStudy) =>
      (caseStudy as any).capabilities?.includes(capability.slug)
    )
    .slice(0, 3);

  return (
    <div className="capability-page-wrapper">
      {/* 1. Capability Hero */}
      <section className="capability-hero-section glass-section">
        <div className="capability-hero-container">
          <h1 className="capability-hero-title">{capability.title}</h1>
          <p className="capability-hero-subtitle">{capability.subtitle}</p>
        </div>
      </section>

      {/* 2. Description */}
      <section className="capability-description-section glass-section-sm">
        <div className="capability-description-container glass-card">
          <p className="capability-description-text">
            {capability.description}
          </p>
        </div>
      </section>

      {/* 3. Problems Solved */}
      <section className="problems-solved-section glass-section">
        <div className="problems-solved-container">
          <h2 className="section-title">
            Problems <span className="text-highlight">We Solve</span>
          </h2>

          <div className="problems-grid">
            {capability.problems.map((problem, idx) => {
              const IconComponent = (PiIcons as any)[problem.icon];

              return (
                <div key={idx} className="problem-card glass-card">
                  <div className="problem-icon">
                    {IconComponent && <IconComponent size={40} />}
                  </div>
                  <h3 className="problem-title">Challenge</h3>
                  <p className="problem-text">{problem.problem}</p>
                  <h4 className="solution-title">Our Solution</h4>
                  <p className="solution-text">{problem.solution}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="our-approach-section glass-section">
        <div className="our-approach-container">
          <h2 className="section-title">
            Our <span className="text-highlight">Approach</span>
          </h2>

          <div className="approach-steps">
            {capability.approach.map((step) => (
              <div key={step.step} className="approach-step glass-card">
                <div className="approach-step-number">{step.step}</div>
                <div className="approach-step-content">
                  <h3 className="approach-step-title">{step.title}</h3>
                  <p className="approach-step-description">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Stack */}
      <section className="tech-stack-section glass-section">
        <div className="tech-stack-container">
          <h2 className="section-title">
            Technology <span className="text-highlight">Stack</span>
          </h2>

          <div className="tech-stack-grid">
            {capability.techStack.map((tech, idx) => (
              <div key={idx} className="tech-badge glass-card">
                <span className="tech-badge-name">{tech.name}</span>
                {tech.category && (
                  <span className="tech-badge-category">{tech.category}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Relevant Case Studies */}
      {relevantCaseStudies.length > 0 && (
        <section className="relevant-cases-section glass-section">
          <div className="relevant-cases-container">
            <h2 className="section-title">
              Proven <span className="text-highlight">Results</span>
            </h2>

            <div className="relevant-cases-grid">
              {relevantCaseStudies.map((caseStudy, idx) => (
                <div key={idx} className="relevant-case-card glass-card">
                  <div className="relevant-case-image-wrapper">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="relevant-case-image"
                    />
                  </div>
                  <div className="relevant-case-content">
                    <h3 className="relevant-case-title">{caseStudy.title}</h3>
                    <p className="relevant-case-description">
                      {caseStudy.description}
                    </p>
                    <div className="relevant-case-metric">
                      <span className="relevant-case-metric-value">
                        {caseStudy.primaryMetric}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relevant-cases-link">
              <Link
                to="/projects"
                className="neon-button-glass neon-button-secondary"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. Capability CTA */}
      <section className="capability-cta-section glass-section">
        <div className="capability-cta-container glass-card">
          <div className="capability-cta-content">
            <h2 className="capability-cta-title">{capability.ctaTitle}</h2>
            <p className="capability-cta-description">
              {capability.ctaDescription}
            </p>
            <div className="capability-cta-buttons">
              <a
                href={capability.ctaButtonLink}
                className="neon-button-glass"
                target="_blank"
                rel="noopener noreferrer"
              >
                {capability.ctaButtonText}
              </a>
              <Link
                to="/services"
                className="neon-button-glass neon-button-secondary"
              >
                View All Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
