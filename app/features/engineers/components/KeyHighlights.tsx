import { PiCheckCircleDuotone } from 'react-icons/pi';
import keyHighlightsStyles from './key-highlights.css?url';

export const links = () => [{ rel: 'stylesheet', href: keyHighlightsStyles }];

interface KeyHighlightsProps {
  highlights: string[];
}

export default function KeyHighlights({ highlights }: KeyHighlightsProps) {
  if (!highlights || highlights.length === 0) {
    return null;
  }

  return (
    <section className="key-highlights-section glass-section-sm">
      <div className="key-highlights-container">
        {highlights.map((highlight, idx) => (
          <div key={idx} className="highlight-item glass-card">
            <PiCheckCircleDuotone size={32} color="#00d6cb" className="highlight-icon" />
            <span className="highlight-text">{highlight}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
