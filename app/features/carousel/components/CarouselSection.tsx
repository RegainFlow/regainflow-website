export default function CarouselSection() {
  const logos = [
    'typescript-icon.svg',
    'python.svg',
    'dotnet.svg',
    'redis.svg',
    'elasticsearch.svg',
    'angular-icon.svg',
    'javascript.svg',
    'google-gemini.svg',
    'anthropic-icon.svg',
    'hugging-face-icon.svg'
  ];

  // Triple the logos for a smoother infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="section-tech-stack">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {allLogos.map((logo, idx) => (
            <div key={idx} className="carousel-slide">
              <img
                src={`/images/home/carousel/${logo}`}
                alt={logo.replace('.svg', '')}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
