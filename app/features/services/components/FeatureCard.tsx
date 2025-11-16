import * as PiIcons from 'react-icons/pi';
import { PiLockSimpleOpenDuotone } from 'react-icons/pi';

export interface FeatureCardProps {
  /** The small icon that sits in the colored circle */
  icon: string;
  image?: string;
  title: string;
  description: string;
  ctaText: string;
  isAudit: boolean;
  isC2C?: boolean;
  onCtaClick: () => void;
}

export default function FeatureCard({
  icon,
  image,
  title,
  ctaText,
  description,
  isAudit,
  isC2C,
  onCtaClick
}: FeatureCardProps) {
  const IconComponent = PiIcons[icon as keyof typeof PiIcons];

  return (
    <article className="feature-card">
      <div className="feature-content">
        <div className="feature-icon-wrapper">
          <IconComponent className="feature-icon" />
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
        <button type="button" className="feature-cta" onClick={onCtaClick}>
          {isAudit ? <PiLockSimpleOpenDuotone size={20} /> : ''}
          <span dangerouslySetInnerHTML={{ __html: ctaText }}></span>
        </button>
      </div>

      {image && (
        <div className="feature-image-content">
          <img src={image} alt={title} className="feature-image" />
        </div>
      )}
    </article>
  );
}
