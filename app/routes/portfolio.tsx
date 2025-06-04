import portfolioStyles from '~/components/portfolio/portfolio.css?url';
import { Link } from '@remix-run/react';
import { useState } from 'react';
import { portfolioItems, metrics } from '~/components/portfolio/portfolioData';

export const links = () => [{ rel: 'stylesheet', href: portfolioStyles }];

export default function Portfolio() {
  const [pdfModal, setPdfModal] = useState<{ open: boolean; pdfUrl: string | null }>({ open: false, pdfUrl: null });

  const openPdfModal = (pdfUrl: string) => setPdfModal({ open: true, pdfUrl });
  const closePdfModal = () => setPdfModal({ open: false, pdfUrl: null });

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <h1 className="portfolio-title">Our Portfolio</h1>
        <p className="portfolio-subtitle">Explore real automation solutions and results we've delivered for clients.</p>
      </section>

      {/* Metrics Section */}
      <section className="portfolio-metrics">
        {metrics.map((m, i) => (
          <div className="portfolio-metric" key={i}>
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </section>

      {/* Gallery Section */}
      <section className="portfolio-gallery">
        {portfolioItems.map((item, i) => (
          <div className="portfolio-card" key={i}>
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="portfolio-card-content">
              <h2 className="portfolio-card-title">{item.title}</h2>
              <p className="portfolio-card-desc">{item.description}</p>
              <div className="portfolio-card-metrics">
                {item.metrics.map((metric, j) => (
                  <span className="portfolio-card-metric" key={j}>{metric}</span>
                ))}
              </div>
              <div style={{ flex: 1 }}></div>
              {item.actionType === 'pdf' && item.pdf && (
                <div className="portfolio-card-btn-row">
                  <button className="portfolio-card-btn" onClick={() => openPdfModal(item.pdf!)} type="button">View PDF</button>
                  <a href={item.pdf} className="portfolio-card-btn" download target="_blank" rel="noopener">Download PDF</a>
                </div>
              )}
              {item.actionType === 'link' && item.link && (
                <a href={item.link} className="portfolio-card-btn" target="_blank" rel="noopener" style={{ marginTop: '0.75rem' }}>View Project</a>
              )}
              {item.actionType === 'nda' && (
                <span className="portfolio-card-btn" style={{ background: '#444', color: '#bbb', cursor: 'not-allowed', opacity: 0.7, marginTop: '0.75rem' }}>NDA Protected</span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* PDF Modal */}
      {pdfModal.open && pdfModal.pdfUrl && (
        <div className="portfolio-pdf-modal" onClick={closePdfModal}>
          <div className="portfolio-pdf-modal-content" onClick={e => e.stopPropagation()}>
            <button className="portfolio-pdf-modal-close" onClick={closePdfModal}>&times;</button>
            <iframe src={pdfModal.pdfUrl} title="PDF Preview" className="portfolio-pdf-iframe" />
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="portfolio-cta">
        <h2>Want results like these?</h2>
        <a href="https://calendly.com/regainflow/30min'" className="portfolio-cta-btn" target="_blank" rel="noopener">Book a Call</a>
      </section>
    </div>
  );
} 