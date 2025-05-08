// app/components/services/FeatureCard.tsx

export interface FeatureCardProps {
  /** The small icon that sits in the colored circle */
  icon: string;
  /** The large “illustration” or screenshot to the right */
  image?: string;
  title: string;
  description: string;
  onCtaClick: () => void;
}

export default function FeatureCard({
  icon,
  image,
  title,
  description,
  onCtaClick
}: FeatureCardProps) {
  return (
    <article className="feature-card">
      <div className="feature-content">
        <div className="feature-icon">
          <img
            src={icon}
            alt={`${title} icon`}
            className="feature-icon-image"
          />
        </div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
        <button type="button" className="feature-cta" onClick={onCtaClick}>
          Book Now
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
