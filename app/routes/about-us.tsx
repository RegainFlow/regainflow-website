import type { MetaFunction, LinksFunction } from '@remix-run/node';

import aboutUsStyles from '~/components/about/about-custom.css?url';
import { teamMembers } from '~/components/about/teamData';

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
    <section className="about-us-preview">
      <div className="container-3">
        <h1 className="heading-2">
          Meet The <span className="text-span-27">Team</span>
        </h1>
      </div>
      <div className="team-stack">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="w-layout-cell cell-8">
            <div className="w-layout-blockcontainer container-6 team-card-background w-container">
              <div className="container8 team-card-profile-pic">
                <img
                  src={member.profilePic}
                  alt={member.name}
                  className="profile-pic"
                  width={200}
                />
                <h5 className="team-card-tiitle">{member.name}</h5>
              </div>
              <div className="w-layout-blockcontainer container-7 w-container">
                <div className="container8 team-card-description">
                  <h5 className="heading-5 position-description">
                    {member.role}
                  </h5>
                  <p className="paragraph-2">{member.bio}</p>
                </div>
                <div className="w-layout-blockcontainer container8 team-card-cert w-container">
                  <div className="w-layout-blockcontainer div-block-20 w-container">
                    <h5 className="heading-6">Certifications</h5>
                    <div className="div-block-21">
                      {member.certifications.map((cert, i) => (
                        <img
                          key={i}
                          src={cert}
                          alt="certification"
                          width={50}
                          height={50}
                          className="image-4"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-layout-blockcontainer div-block-20 w-container">
                    <h5 className="heading-6">Socials</h5>
                    <div className="div-block-21 social-media-button">
                      {member.socials.map((social, sIdx) => (
                        <a
                          key={sIdx}
                          href={social.href}
                          className="link-block-2 w-inline-block"
                        >
                          {/* Optional icon if you want */}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
