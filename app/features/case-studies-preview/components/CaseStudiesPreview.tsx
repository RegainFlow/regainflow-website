import { useState } from "react";
import { Link } from "react-router";
import { featuredCaseStudies } from "../data/featuredCaseStudies";
import caseStudiesPreviewStyles from "./case-studies-preview.css?url";

export const links = () => [
  { rel: "stylesheet", href: caseStudiesPreviewStyles },
];

export default function CaseStudiesPreview() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="case-studies-preview-section glass-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-highlight">Case Studies</span>
        </h2>
        <p className="section-subtitle">
          Enterprise expertise, applied to your business. See what we&apos;ve
          built for companies like yours.
        </p>

        <div className="case-studies-grid">
          {featuredCaseStudies.map((study, idx) => (
            <div key={idx} className="case-study-preview-card glass-card">
              <div className="case-study-image-wrapper">
                <img
                  src={study.image}
                  alt={study.title}
                  className="case-study-image"
                  loading="lazy"
                />
                <div className="case-study-badge">{study.primaryMetric}</div>
              </div>

              <div className="case-study-content">
                <div className="case-study-industry">{study.industry}</div>
                <h3 className="case-study-title">{study.title}</h3>

                <div
                  className={`case-study-expandable ${expandedIdx === idx ? "expanded" : ""}`}
                >
                  <p className="case-study-description">{study.description}</p>
                  <div className="case-study-tags">
                    {study.tags.map((tag, tidx) => (
                      <span key={tidx} className="case-study-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="case-study-toggle"
                  onClick={() => toggleExpand(idx)}
                  aria-expanded={expandedIdx === idx}
                >
                  {expandedIdx === idx ? "Show less" : "Read more"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <Link to="/client-results" className="btn btn-neon">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
