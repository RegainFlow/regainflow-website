// app/components/ServicePage.tsx
import type { ServiceInfo } from '~/components/services/servicesData';
import FeatureCard from '~/components/services/FeatureCard';
import { Link } from '@remix-run/react';

export default function ServicePage({
  title,
  subtitle,
  image,
  sectionOneTitle,
  sectionOneCards,
  sectionTwoTitle,
  sectionTwoCards,
  videoUrl
}: ServiceInfo) {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="service-hero-extended">
          <div className="service-hero-text">
            <h1
              className="hero-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="hero-subtitle">{subtitle}</p>
            <a href="/free-trial" className="hero-cta">
              Book A Free Audit
            </a>
            <div className="hero-tagline">
              30 min free call · Calculate ROI · Regain Value
            </div>
          </div>

          <div className="service-hero-image-wrapper">
            <img
              src={image}
              alt={title}
              className="hero-main-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="cards-section container-12">
        <h2
          className="section-heading"
          dangerouslySetInnerHTML={{ __html: sectionTwoTitle }}
        ></h2>
        <div className="get-grid">
          {sectionTwoCards.map((card, i) => (
            <div className="get-card" key={i}>
              <div className="get-icon-wrapper">
                <img src={card.icon} alt={card.text} />
              </div>
              <div className="get-text">
                <strong>{card.text}</strong>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className="cards-section stack-cards container-12">
        <h2
          className="section-heading"
          dangerouslySetInnerHTML={{ __html: sectionOneTitle }}
        ></h2>
        <div className="feature-section">
          <div className="feature-section">
            {sectionOneCards.map((card, i) => (
              <FeatureCard
                key={i}
                icon={card.icon}
                title={card.text}
                image={image}
                description={card.description}
                onCtaClick={() => console.log('clicked', card.text)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* USE CASE VIDEO */}
      {/* {videoUrl && (
        <section className="video-section container-12">
          <h2 className="section-heading">Use Case Video</h2>
          <div className="video-wrapper">
            <iframe
              src={videoUrl}
              title="Use Case Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )} */}

      {/* FINAL CALL‑TO‑ACTION */}
      <section className="trial-section">
        <div className="trial-wrapper container-12">
          <div className="trial-text">
            <h2 className="trial-title">
              Ready to consult with <span className="logo">Regain Flow</span>?
            </h2>
            <p className="trial-subtitle">
              No pushy sales. Just insight, action, and results.
            </p>
            <Link to="#" className="trial-button">
              Book Now For Free
            </Link>
          </div>
          <div className="trial-logo">
            <div className="trial-logo-inner">
              <img src="/images/regain_flow_logo.png" alt="Regain Flow logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
