import { teamMembers } from '../data/teamData';
import ProfileDetailCard from './ProfileDetailCard';

export default function EngineersLanding() {
  return (
    <>
      <section className="overview">
        <div className="container-3">
          <h1 className="heading-2">
            Contract-Ready <span className="text-accent">Engineers</span>
          </h1>
          <p className="overview-text">
            Senior engineers available for C2C contracts and project-based
            consulting. Our team brings production-grade expertise in AI/ML,
            automation, and full-stack development from defense, enterprise, and
            high-growth environments:
          </p>
          <ul className="overview-list">
            <li>
              <strong>AI/ML Engineering:</strong> Built production RAG systems,
              LangChain/LangGraph pipelines, and intelligent agents using modern
              LLM frameworks and vector databases.
            </li>
            <li>
              <strong>Full-Stack Development:</strong> Delivered scalable web
              applications with React/Remix, Node.js, Python backends, and
              TypeScript — from API design to production deployment.
            </li>
            <li>
              <strong>RPA & Automation:</strong> Deployed UiPath, Blue Prism,
              and custom Python automations that streamlined business operations
              and eliminated manual workflows.
            </li>
            <li>
              <strong>DevOps & Cloud:</strong> Architected CI/CD pipelines,
              containerized microservices with Docker/Kubernetes, and deployed
              on AWS, Azure, and OpenShift.
            </li>
            <li>
              <strong>Security & Compliance:</strong> Implemented DoD-grade
              hardening, penetration testing, and STIG compliance for sensitive
              enterprise systems.
            </li>
          </ul>
          <p
            className="overview-text"
            style={{ marginTop: '1.5rem', fontStyle: 'italic' }}
          >
            <strong>Available for:</strong> Long-term C2C contracts (6-12+
            months) or project-based engagements. Remote-ready. US-based.
            Autonomous execution.
          </p>
        </div>
      </section>

      <section className="about-us-preview">
        <div className="container-3">
          <h1 className="heading-2">
            Meet Our <span className="text-accent">Engineers</span>
          </h1>
        </div>

        {teamMembers.map((member, idx) => (
          <ProfileDetailCard key={idx} member={member} />
        ))}
      </section>
    </>
  );
}
