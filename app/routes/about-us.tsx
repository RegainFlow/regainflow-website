import type { MetaFunction, LinksFunction } from '@remix-run/node';

import aboutUsStyles from '~/components/about/about-custom.css?url';
import { teamMembers } from '~/components/about/teamData';
import ProfileDetailCard from '~/components/about/ProfileDetailCard';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: aboutUsStyles }
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Regain Flow - About Us ' },
    { name: 'description', content: 'Meet the operators behind Regain Flow.' }
  ];
};

export default function AboutUs() {
  return (
    <>
      <section className="overview">
        <div className="container-3">
          <h1 className="heading-2">
            Who We <span className="text-span-27">Are</span>
          </h1>
          <p className="overview-text">
            At Regain Flow, we're the bridge between cutting-edge AI/Automation
            research and real-world business impact. Over the last decade we've
            partnered with enterprise teams at IBM, Lockheed Martin, and Fortune
            500 firms to:
          </p>
          <ul className="overview-list">
            <li>
              <strong>Enterprise Search:</strong> Architected scalable RAG
              solutions on Elasticsearch and Milvus for rapid insights.
            </li>
            <li>
              <strong>Automation Audits:</strong> Identified & quantified
              high-ROI workflows across Finance, Healthcare, and Manufacturing.
            </li>
            <li>
              <strong>RPA & AI Integrations:</strong> Deployed end-to-end
              robotic process automations that cut processing time by 70%+.
            </li>
            <li>
              <strong>DevOps & Cloud:</strong> Built CI/CD pipelines,
              containerized deployments, and Kubernetes orchestration.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-us-preview">
        <div className="container-3">
          <h1 className="heading-2">
            Meet The <span className="text-span-27">Team</span>
          </h1>
        </div>

        {teamMembers.map((member, idx) => (
          <ProfileDetailCard key={idx} member={member} />
        ))}
      </section>
    </>
  );
}
