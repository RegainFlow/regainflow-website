import { Link } from 'react-router';
import { projectsItems } from '~/features/projects/data/projectsData';
import { PiArrowRightBold } from 'react-icons/pi';
import caseStudiesPreviewStyles from './case-studies-preview.css?url';

export const links = () => [
  { rel: 'stylesheet', href: caseStudiesPreviewStyles }
];

export default function CaseStudiesPreview() {
  const featuredTitles = [
    'Marketing Automation for Distribution Network',
    'AI-Powered Document Retrieval Platform',
    'MODA: E-Commerce Fashion Platform'
  ];
  const featuredCases = projectsItems.filter((caseStudy) =>
    featuredTitles.includes(caseStudy.title)
  );

  return (
    <section className="case-studies-preview-section glass-section">
      <div className="container">
        <h2 className="section-title">
          Recent <span className="text-highlight">Work</span>
        </h2>

        <p className="section-subtitle">
          Real outcomes from projects built to improve speed, clarity, and growth
        </p>

        <div className="case-studies-grid">
          {featuredCases.map((caseStudy, idx) => (
            <div key={idx} className="case-study-card glass-card">
              <div className="case-study-image-wrapper">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="case-study-image"
                />
              </div>

              <div className="case-study-content">
                <h3 className="case-study-title">{caseStudy.title}</h3>
                <p className="case-study-description">
                  {caseStudy.description}
                </p>

                <div className="case-study-tags">
                  {caseStudy.tags.slice(0, 2).map((tag, tagIdx) => (
                    <span key={tagIdx} className="case-study-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="case-study-metric">
                  <span className="case-study-metric-label">
                    Primary Impact:
                  </span>
                  <span className="case-study-metric-value">
                    {caseStudy.primaryMetric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <Link
            to="/client-results"
            className="btn btn-neon btn-secondary"
          >
            See Client Results
            <PiArrowRightBold size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
