import { useFetcher } from '@remix-run/react';
import type { MetaFunction, LinksFunction } from '@remix-run/node';

import styles from '~/components/contact/contact-custom.css?url';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => {
  const title = 'Contact Regain Flow | Book a Free Consultation';
  const description =
    'Reach out to discuss your automation goals. No hard sell — just insights and action.';
  const image = 'https://www.regainflow.com/images/og/og-contact.png'; // make this
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

export default function ContactUs() {
  const fetcher = useFetcher();

  return (
    <section className="contract-us-section">
      <h1 className="heading-9">
        Get In <span className="text-span-9">Touch</span>
      </h1>
      <div style={{background:'#222',padding:20,borderRadius:8,margin:'2rem auto',maxWidth:400}}>
        <h2 style={{color:'#00d6cb'}}>Please use our main contact form <a href="/contact-us.html" style={{color:'#00d6cb',textDecoration:'underline'}}>here</a>.</h2>
        <p style={{color:'#aaa',fontSize:'1rem'}}>This page is for testing/debugging only.</p>
      </div>
      {/* Netlify Test Form */}
      <form name="netlify-test" method="POST" data-netlify="true" style={{ marginTop: 40, background: '#222', padding: 20, borderRadius: 8 }}>
        <input type="hidden" name="form-name" value="netlify-test" />
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send Test</button>
        </p>
      </form>
    </section>
  );
}
