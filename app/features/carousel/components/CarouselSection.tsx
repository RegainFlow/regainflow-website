export default function CarouselSection() {
const logos = [
  //Programming Languages
  'typescript-icon.svg',
  'javascript.svg',
  'python.svg',
  'java.svg',
  'c_sharp.svg',
  // AI/ML Frameworks and Platforms
  'google-gemini.svg',
  'claude.svg',
  'openai.svg',
  'hugging-face-icon.svg',
  'langgraph.svg',
  'tensorflow.svg',
  'pytorch.svg',
  //Web Frameworks and Libraries
  'dotnet.svg',
  'react.svg',
  'vuejs.svg',
  'nextjs.svg',
  'angular-icon.svg',
  'spring_boot.svg',
  'streamlit.svg',
  'nodejs.svg',
  'fastapi.svg',
  //Databases and Data Management
  'postgres.svg',
  'redis.svg',
  'elasticsearch.svg',
  //Cloud Platforms
  'aws.svg',
  'azure.svg',
  'gcp.svg',
  //DevOps
  'docker.svg',
  'kubernetes.svg',
  'terraform.svg',
  'ansible.svg',
  'packer.svg',
  'openshift.svg',
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
