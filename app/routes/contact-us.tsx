import type { MetaFunction, LinksFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';

import styles from '~/components/contact/contact-custom.css?url';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => [
  { title: 'Regain Flow - Contact Us' },
  {
    name: 'description',
    content:
      'Send a message to inquire more or directly book a 30-minute free initial consultation!'
  }
];

export default function ContactUs() {
  return (
    <section className="contract-us-section">
      <h1 className="heading-9">
        Get In <span className="text-span-9">Touch</span>
      </h1>
      <div className="form-block w-form">
        <Form method="post" className="form form-card">
          <label htmlFor="name" className="formfield">
            Name
          </label>
          <input
            className="formfield-label w-input"
            id="name"
            name="name"
            placeholder="Name"
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
            placeholder="Email"
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
            placeholder="Role"
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
            placeholder="Tell us a quick summary of your automation needs"
            required
          />

          <button type="submit" className="submit-button w-button">
            Submit
          </button>
        </Form>

        {/* Optional success / error states (static for now) */}
        <div className="w-form-done">
          <div className="text-block-12">
            Thank you! Your submission has been received!
          </div>
        </div>
        <div className="error-message w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </section>
  );
}
