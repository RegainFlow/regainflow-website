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
import { useScrollAnimation } from '~/hooks/useScrollAnimation';

const iconMap: Record<string, IconType> = {
  UserCheck: PiUserCheckDuotone,
  RocketLaunch: PiRocketLaunchDuotone,
  Stack: PiStackDuotone,
  FlowArrow: PiFlowArrowDuotone,
  ArrowsClockwise: PiArrowsClockwiseDuotone,
  CloudArrowUp: PiCloudArrowUpDuotone
};

export default function ValueProposition() {
  // Scroll animation hooks for each image
  const { ref: imageRef1, isVisible: imageVisible1 } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  const { ref: imageRef2, isVisible: imageVisible2 } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  const imageRefs = [imageRef1, imageRef2];
  const imageVisibilities = [imageVisible1, imageVisible2];
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
              className={`vp-content-wrapper ${service.imageFirst ? 'row-reverse' : ''
                }`}
            >
              <div
                ref={imageRefs[idx] as React.RefObject<HTMLDivElement>}
                className={`vp-image scroll-animate ${
                  service.imageFirst ? 'fade-from-right' : 'fade-from-left'
                } ${imageVisibilities[idx] ? 'visible' : ''}`}
              >
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
