import * as PiIcons from "react-icons/pi";
import { Link } from "react-router";
import type { Capability } from "../types/service.types";
import capabilityPageStyles from "./capability-page.css?url";

export const links = () => [{ rel: "stylesheet", href: capabilityPageStyles }];

interface CapabilityPageProps {
  capability: Capability;
}

export default function CapabilityPage({ capability }: CapabilityPageProps) {
  return (
    <div className="capability-page-wrapper">
      {/* 1. Capability Hero */}
      <section className="capability-hero-section glass-section">
        <div className="container">
          <h1 className="capability-hero-title">{capability.title}</h1>
          <p className="capability-hero-subtitle">{capability.subtitle}</p>
        </div>
      </section>

      {/* 2. Preview Hero - Large Image Showcase */}
      <section className="capability-preview-section glass-section-sm">
        <div className="container">
          <div className="capability-preview-image-wrapper glass-card">
            <img
              src={capability.heroImage}
              alt={`${capability.title} preview`}
              className="capability-preview-image"
            />
          </div>
        </div>
      </section>

      {/* 4. Problems Solved */}
      <section className="problems-solved-section glass-section">
        <div className="container">
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

      {/* 5. Our Approach */}
      <section className="our-approach-section glass-section">
        <div className="container">
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

      {/* 6. Tech Stack */}
      <section className="tech-stack-section glass-section">
        <div className="container">
          <h2 className="section-title">
            Technology <span className="text-highlight">Stack</span>
          </h2>

          <div className="tech-stack-grid">
            {capability.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="tech-badge glass-card"
                data-category={tech.category || ""}
              >
                <span className="tech-badge-name">{tech.name}</span>
                {tech.category && (
                  <span className="tech-badge-category">{tech.category}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Capability CTA */}
      <section className="capability-cta-section glass-section">
        <div className="container">
          <div className="capability-cta-card glass-card">
            <div className="capability-cta-content">
              <h2 className="capability-cta-title">{capability.ctaTitle}</h2>
              <p className="capability-cta-description">
                {capability.ctaDescription}
              </p>
              <div className="capability-cta-buttons">
                <a
                  href={capability.ctaButtonLink}
                  className="btn btn-neon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {capability.ctaButtonText}
                </a>
                <Link to="/services" className="btn btn-neon btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
