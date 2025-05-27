import type { MetaFunction, LinksFunction } from '@remix-run/node';

import { teamMembers } from '~/components/about/teamData';
import ProfileDetailCard from '~/components/about/ProfileDetailCard';

import aboutUsStyles from '~/components/about/about-custom.css?url';
import modalTechstackStyles from '~/components/about/modal-techstack.css?url';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: aboutUsStyles },
  { rel: 'stylesheet', href: modalTechstackStyles }
];

export const meta: MetaFunction = () => {
  const title = 'About Regain Flow | Meet the Operators';
  const description =
    'Discover the mission and the minds behind Regain Flow — a tactical automation firm turning AI into measurable ROI.';
  const image = 'https://www.regainflow.com/images/og/og-about.png'; // make this
  const url = 'https://www.regainflow.com/';

  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },

    // OG
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image }
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
            Regain Flow bridges the gap between emerging AI automation tools and
            practical business execution. Our team brings hands-on engineering
            and operational insight from defense, enterprise, and startup
            environments to:
          </p>
          <ul className="overview-list">
            <li>
              <strong>RAG & AI Workflows:</strong> Built secure, scalable LLM
              pipelines using Elasticsearch, LangGraph, and cloud-native
              infrastructure.
            </li>
            <li>
              <strong>Automation & Audit Strategy:</strong> Helped organizations
              surface repetitive tasks, define automation-ready flows, and
              estimate ROI using internal data.
            </li>
            <li>
              <strong>RPA Deployments:</strong> Delivered Blue Prism and
              Python-based automations that accelerated business ops and
              improved data handling accuracy.
            </li>
            <li>
              <strong>Cloud & DevOps:</strong> Containerized and deployed
              microservices with GitLab CI/CD, OpenShift, and Kubernetes for
              internal engineering and AI agents.
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
