import { PiArrowRightBold } from 'react-icons/pi';
import servicesHeroStyles from './services-hero.css?url';

export const links = () => [{ rel: 'stylesheet', href: servicesHeroStyles }];

interface ServicesHeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function ServicesHero({
  title,
  subtitle,
  ctaText,
  ctaLink
}: ServicesHeroProps) {
  return (
    <section className="services-hero-section glass-section">
      <div className="services-hero-container">
        <h1 className="services-hero-title">
          {title.split(' ').map((word, i) => {
            // Highlight specific keywords
            const highlights = ['AI', 'Engineering', 'Solutions'];
            if (highlights.includes(word)) {
              return (
                <span key={i} className="text-highlight">
                  {word}{' '}
                </span>
              );
            }
            return word + ' ';
          })}
        </h1>

        <p className="services-hero-subtitle">{subtitle}</p>

        <div className="services-hero-cta">
          <a href={ctaLink} className="neon-button-glass" target="_blank" rel="noopener noreferrer">
            {ctaText}
            <PiArrowRightBold size={20} />
          </a>
        </div>

        <p className="services-hero-note">
          Free consultation · No commitment · Flexible engagement terms
        </p>
      </div>
    </section>
  );
}
