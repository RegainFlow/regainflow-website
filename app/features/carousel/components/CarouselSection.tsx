export default function CarouselSection() {
  const logos = [
    'typescript-icon.svg',
    'javascript.svg',
    'python.svg',
    'java.svg',
    'c_sharp.svg',
    'google-gemini.svg',
    'claude.svg',
    'openai.svg',
    'hugging-face-icon.svg',
    'langgraph.svg',
    'tensorflow.svg',
    'pytorch.svg',
    'dotnet.svg',
    'react.svg',
    'vuejs.svg',
    'nextjs.svg',
    'angular-icon.svg',
    'spring_boot.svg',
    'streamlit.svg',
    'nodejs.svg',
    'fastapi.svg',
    'postgres.svg',
    'redis.svg',
    'elasticsearch.svg',
    'aws.svg',
    'azure.svg',
    'gcp.svg',
    'docker.svg',
    'kubernetes.svg',
    'terraform.svg',
    'ansible.svg',
    'packer.svg',
    'openshift.svg'
  ];

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
