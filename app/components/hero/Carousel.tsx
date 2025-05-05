export default function Carousel() {
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

  const allLogos = [...logos, ...logos, ...logos]; // Tripled for loop

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {allLogos.map((logo, idx) => (
          <img
            key={idx}
            src={`/images/${logo}`}
            alt={logo.replace('.svg', '')}
            className="carousel-slide"
          />
        ))}
      </div>
    </div>
  );
}
