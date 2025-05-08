import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react';

import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import NotFound from '~/components/layout/NotFound';

import normalizeStyles from '~/styles/normalize.css?url';
import webflowStyles from '~/styles/webflow.css?url';
import regainflowStyles from '~/styles/regainflow.webflow.css?url';
import tailwindStyles from '~/styles/tailwind.css?url';
import navBarStyles from '~/components/layout/navbar-custom.css?url';
import footerStyles from '~/components/layout/footer-custom.css?url';
import notFoundStyles from '~/components/layout/404.css?url';

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
  { rel: 'icon', href: '/favicon.ico' },
  {
    rel: 'icon',
    href: '/favicon-16x16.png',
    sizes: '16x16',
    type: 'image/png'
  },
  {
    rel: 'icon',
    href: '/favicon-32x32.png',
    sizes: '32x32',
    type: 'image/png'
  },
  { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  { rel: 'manifest', href: '/site.webmanifest' },
  { rel: 'stylesheet', href: normalizeStyles },
  { rel: 'stylesheet', href: webflowStyles },
  { rel: 'stylesheet', href: regainflowStyles },
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: navBarStyles },
  { rel: 'stylesheet', href: footerStyles },
  { rel: 'stylesheet', href: notFoundStyles }
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

export function ErrorBoundary() {
  const error = useRouteError();

  // if someone did: throw new Response("Not Found", { status: 404 })
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  // any other thrown Response (400/401/500) or JS error
  let message: string;
  if (isRouteErrorResponse(error)) {
    message = `Status ${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = 'Unknown error';
  }

  return (
    <Layout>
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p>{message}</p>
        {/* you can add a “Back to home” link here */}
      </div>
    </Layout>
  );
}

export default function App() {
  return <Outlet />;
}
