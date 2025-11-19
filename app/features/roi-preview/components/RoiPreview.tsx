import { Link } from 'react-router';
import { PiCalculatorDuotone, PiTrendUpDuotone } from 'react-icons/pi';
import roiPreviewStyles from './roi-preview.css?url';

export const links = () => [{ rel: 'stylesheet', href: roiPreviewStyles }];

export default function RoiPreview() {
  return (
    <section className="roi-preview-section glass-section">
      <div className="roi-preview-container glass-card">
        <div className="roi-preview-content">
          <div className="roi-preview-icon">
            <PiCalculatorDuotone size={64} color="#00d6cb" />
          </div>

          <h2 className="roi-preview-title">
            Calculate Your <span className="text-highlight">ROI</span>
          </h2>

          <p className="roi-preview-description">
            Discover how much you could save by hiring senior C2C contractors
            instead of traditional full-time employees. Factor in salary,
            benefits, overhead, and more to see your true cost savings.
          </p>

          <div className="roi-preview-highlights">
            <div className="roi-highlight-item">
              <PiTrendUpDuotone size={24} color="#00d6cb" />
              <span>Save 30-40% on engineering costs</span>
            </div>
            <div className="roi-highlight-item">
              <PiTrendUpDuotone size={24} color="#00d6cb" />
              <span>No benefits or overhead expenses</span>
            </div>
            <div className="roi-highlight-item">
              <PiTrendUpDuotone size={24} color="#00d6cb" />
              <span>Flexible scaling up or down</span>
            </div>
          </div>

          <Link to="/roi-calculator" className="neon-button-glass">
            Calculate Your <span className="text-free-highlight">Savings</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
