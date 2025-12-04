import type { ProductizedPackage } from '../types/pricing.types';
import { PiCheckCircleDuotone } from 'react-icons/pi';

interface ProductizedServicesProps {
  data: ProductizedPackage[];
}

export default function ProductizedServices({ data }: ProductizedServicesProps) {
  return (
    <section className="productized-services glass-section">
      <div className="container">
        <div className="productized-services__header">
          <h2 className="section-title">Productized Service Packages</h2>
          <p className="subheading">
            Fixed-scope, fixed-price packages for common engagements. Clear deliverables, clear
            timelines, clear pricing.
          </p>
        </div>

        <div className="productized-services__grid">
          {data.map((pkg, index) => (
            <div key={index} className="glass-card productized-package-card">
              <div className="productized-package-card__icon">
                <pkg.icon size={48} />
              </div>
              <h3 className="productized-package-card__name">{pkg.name}</h3>
              <div className="productized-package-card__pricing">
                <p className="productized-package-card__price">{pkg.price}</p>
                <p className="productized-package-card__duration">{pkg.duration}</p>
              </div>
              <p className="productized-package-card__description">{pkg.description}</p>

              <div className="productized-package-card__deliverables">
                <h4>Deliverables:</h4>
                <ul>
                  {pkg.deliverables.map((deliverable, i) => (
                    <li key={i}>
                      <PiCheckCircleDuotone size={20} className="check-icon" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="productized-package-card__ideal">
                <p>
                  <strong>Ideal for:</strong> {pkg.ideal}
                </p>
              </div>

              <a href={pkg.ctaHref} className="neon-button-glass">
                {pkg.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
