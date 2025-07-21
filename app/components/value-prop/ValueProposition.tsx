import { valuePropData } from './valuePropData';
import { PiMagnifyingGlassDuotone, PiLightningDuotone } from 'react-icons/pi';

export default function ValueProposition() {
  return (
    <section id="value-prop" className="value-proposition-section">
      <div className="vp-container">
        <h1 className="heading-2 center">
          <span className="text-span-15">REGAIN</span> YOUR{' '}
          <span className="text-span-16">FLOW</span>
        </h1>

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
                      <>
                        <PiMagnifyingGlassDuotone
                          color="#00d6cb"
                          style={{
                            marginRight: '10px'
                          }}
                        />
                      </>
                    ) : (
                      <>
                        <PiLightningDuotone
                          color="#00d6cb"
                          style={{
                            marginRight: '10px'
                          }}
                        />
                      </>
                    )}
                    {service.title}
                  </div>
                </h2>
                <p className="vp-subtitle">{service.subtitle}</p>
                <ul className="vp-bullets">
                  {service.bullets.map((b, bidx) => (
                    <li key={bidx} className="vp-bullet-item">
                      <img src={b.img} alt="" width={70} height={70} />
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.ctaLink}
                  className="vp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BOOK A <span style={{ color: '#00ff08' }}>FREE</span>{' '}
                  {idx === 0 ? 'AUDIT' : 'CALL'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
