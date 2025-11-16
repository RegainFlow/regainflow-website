import type { ServiceInfo } from '../types/service.types';
import FeatureCard from './FeatureCard';
import { Link, useLocation } from 'react-router';
import { PiLockSimpleOpenDuotone } from 'react-icons/pi';

export default function ServicePage({
  title,
  subtitle,
  image,
  heroTagline,
  ctaText,
  ctaLink,
  sectionOneTitle,
  sectionOneCards,
  sectionTwoTitle,
  sectionTwoCards,
  videoUrl
}: ServiceInfo) {
  const location = useLocation();
  const pathname = location.pathname;

  const isAudit = pathname.includes('automation-audit');
  const isC2C = pathname.includes('c2c-contracting');

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
            <a
              href={ctaLink}
              target={ctaLink?.startsWith('http') ? '_blank' : undefined}
              className="hero-cta"
            >
              <PiLockSimpleOpenDuotone size={20} />
              {isAudit ? (
                <>
                  Unlock Your <span className="text-accent">Free</span> Audit
                </>
              ) : (
                <>
                  Book Your <span className="text-accent">Free</span>
                  Call
                </>
              )}
            </a>
            <div className="hero-tagline">
              {heroTagline && <div className="hero-tagline">{heroTagline}</div>}
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
                <strong
                  dangerouslySetInnerHTML={{ __html: card.text }}
                ></strong>
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
          {sectionOneCards.map((card, i) => (
            <FeatureCard
              key={i}
              icon={card.icon}
              title={card.text}
              image={card.image}
              ctaText={
                isC2C ? 'Request a Contractor' : (ctaText ?? 'Learn More')
              }
              description={card.description}
              isAudit={isAudit}
              isC2C={isC2C}
              onCtaClick={() => {
                if (ctaLink) window.open(ctaLink, '_blank');
              }}
            />
          ))}
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
              {isC2C ? (
                <>
                  Ready to Bring in Senior{' '}
                  <span className="logo">Engineering Talent</span>?
                </>
              ) : (
                <>
                  Ready to consult with{' '}
                  <span className="logo">Regain Flow</span>?
                </>
              )}
            </h2>
            <p className="trial-subtitle">
              {isC2C
                ? 'Fast onboarding. No fluff. Just execution and results.'
                : 'No pushy sales. Just insight, action, and results.'}
            </p>
            <Link
              to="https://cal.com/regainflow/30min"
              className="trial-button"
            >
              {isC2C ? (
                <>
                  Book a <span style={{ color: '#00ff08' }}>Free</span> Intro
                  Call
                </>
              ) : (
                <>
                  Book Now For <span style={{ color: '#00ff08' }}>Free</span>
                </>
              )}
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
