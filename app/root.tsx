import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';

import normalizeStyles from '~/styles/normalize.css?url';
import webflowStyles from '~/styles/webflow.css?url';
import regainflowStyles from '~/styles/regainflow.webflow.css?url';
import tailwindStyles from '~/styles/tailwind.css?url';
import navBarStyles from '~/components/layout/navbar-custom.css?url';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
  },
  { rel: 'stylesheet', href: normalizeStyles },
  { rel: 'stylesheet', href: webflowStyles },
  { rel: 'stylesheet', href: regainflowStyles },
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: navBarStyles }
];

export const meta: MetaFunction = () => {
  return [{ title: 'Regain Flow' }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="background-theme">
          <div className="background-wrapper">
            <div className="content-wrapper">
              <div className="noise-overlay"></div>
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
