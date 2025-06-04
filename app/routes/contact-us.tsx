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

      {/* ✅ Hidden static HTML form to help Netlify detect it */}
      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        hidden
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="role" />
        <textarea name="message" />
      </form>

      <div className="form-block w-form">
        <fetcher.Form
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="form form-card"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name" className="formfield">
            Name
          </label>
          <input
            className="formfield-label w-input"
            id="name"
            name="name"
            type="text"
            required
          />

          <label htmlFor="email" className="formfield">
            Email Address
          </label>
          <input
            className="formfield-label w-input"
            id="email"
            name="email"
            type="email"
            required
          />

          <label htmlFor="role" className="formfield">
            Role
          </label>
          <input
            className="formfield-label w-input"
            id="role"
            name="role"
            type="text"
            required
          />

          <label htmlFor="message" className="formfield">
            Description
          </label>
          <textarea
            className="formfield-label w-input"
            id="message"
            name="message"
            required
          />

          <button
            type="submit"
            className="submit-button w-button"
            disabled={fetcher.state === 'submitting'}
          >
            {fetcher.state === 'submitting' ? (
              <div className="submit-loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </fetcher.Form>

        {fetcher.data === 'success' && (
          <div className="text-block-12">
            ✅ Thank you! Your submission has been received.
          </div>
        )}

        {fetcher.data === 'error' && (
          <div className="error-message">
            ❌ Something went wrong. Please try again.
          </div>
        )}
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
