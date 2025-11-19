import { valuePropData } from '../data/valuePropData';
import {
  PiMagnifyingGlassDuotone,
  PiLightningDuotone,
  PiUserCheckDuotone,
  PiRocketLaunchDuotone,
  PiStackDuotone,
  PiFlowArrowDuotone,
  PiArrowsClockwiseDuotone,
  PiCloudArrowUpDuotone
} from 'react-icons/pi';
import type { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  UserCheck: PiUserCheckDuotone,
  RocketLaunch: PiRocketLaunchDuotone,
  Stack: PiStackDuotone,
  FlowArrow: PiFlowArrowDuotone,
  ArrowsClockwise: PiArrowsClockwiseDuotone,
  CloudArrowUp: PiCloudArrowUpDuotone
};

export default function ValueProposition() {
  return (
    <section id="value-prop" className="value-proposition-section">
      <div className="vp-container">
        <h2 className="section-title mb-md">
          <span className="text-highlight">Regain</span> Your{' '}
          <span className="text-highlight">Flow</span>
        </h2>

        {valuePropData.map((service, idx) => (
          <div className="vp-card" key={idx}>
            <div
              className={`vp-content-wrapper ${
                service.imageFirst ? 'row-reverse' : ''
              }`}
            >
              <div className="vp-image">
                <img src={service.image} alt="value-prop" loading="lazy" />
              </div>
              <div className="vp-text">
                <h2 className="vp-title">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {idx === 0 ? (
                      <PiMagnifyingGlassDuotone
                        color="#00d6cb"
                        style={{ marginRight: '10px' }}
                      />
                    ) : (
                      <PiLightningDuotone
                        color="#00d6cb"
                        style={{ marginRight: '10px' }}
                      />
                    )}
                    {service.title}
                  </div>
                </h2>
                <p className="vp-subtitle">{service.subtitle}</p>
                <ul className="vp-bullets">
                  {service.bullets.map((b, bidx) => {
                    const IconComponent = iconMap[b.icon];
                    return (
                      <li key={bidx} className="vp-bullet-item">
                        {IconComponent && (
                          <IconComponent size={32} className="vp-bullet-icon" />
                        )}
                        <span>{b.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <a href={service.ctaLink} className="vp-button">
                  View <span className="text-free-highlight">Engineers</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
