interface Card {
  icon: string;
  text: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  image: string;
  sectionOneTitle: string;
  sectionOneCards: Card[];
  sectionTwoTitle: string;
  sectionTwoCards: Card[];
}

export default function ServicePage({
  title,
  subtitle,
  image,
  sectionOneTitle,
  sectionOneCards,
  sectionTwoTitle,
  sectionTwoCards
}: ServicePageProps) {
  return (
    <section className="service-page">
      <div className="w-layout-blockcontainer container-9 w-container">
        <div className="service-hero">
          <div className="service-text-block">
            <h1
              className="heading-7"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="paragraph-3">{subtitle}</p>
          </div>
          <div className="service-image-block">
            <img src={image} alt={title} className="image-9" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="w-layout-blockcontainer container-12 w-container">
        <h2
          className="heading-11"
          dangerouslySetInnerHTML={{ __html: sectionOneTitle }}
        />
        <div className="service-card-grid">
          {sectionOneCards.map((card, idx) => (
            <div className="service-card" key={idx}>
              <img
                className="service-image"
                src={card.icon}
                alt=""
                width={50}
                height={50}
              />
              <h4 className="heading-12">{card.text}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="w-layout-blockcontainer container-12 w-container">
        <h2
          className="heading-11"
          dangerouslySetInnerHTML={{ __html: sectionTwoTitle }}
        />
        <div className="service-card-grid">
          {sectionTwoCards.map((card, idx) => (
            <div className="service-card" key={idx}>
              <img
                className="service-image"
                src={card.icon}
                alt=""
                width={50}
                height={50}
              />
              <h4 className="heading-12">{card.text}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
