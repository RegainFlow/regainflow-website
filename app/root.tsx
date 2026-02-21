import type { Route } from './+types/root';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse
} from 'react-router';
import Navbar from '~/components/layout/Navbar/Navbar';
import Footer from '~/components/layout/Footer/Footer';
import NotFound from '~/components/layout/NotFound/NotFound';
import { ScrollToTop } from '~/hooks/ScrollToTop';

// Modern consolidated CSS architecture
import baseStyles from '~/styles/base.css?url';
import tailwindStyles from '~/styles/tailwind.css?url';
import variablesStyles from '~/styles/variables.css?url';
import utilitiesStyles from '~/styles/utilities.css?url';
import componentsStyles from '~/styles/components.css?url';
import animationsStyles from '~/styles/animations.css?url';

// Component-specific styles
import navBarStyles from '~/components/layout/Navbar/navbar.css?url';
import footerStyles from '~/components/layout/Footer/footer.css?url';
import notFoundStyles from '~/components/layout/NotFound/not-found.css?url';

export const links: Route.LinksFunction = () => [
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

  // CSS Load Order: Base → Framework → Design System → Components
  { rel: 'stylesheet', href: baseStyles },
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: variablesStyles },
  { rel: 'stylesheet', href: utilitiesStyles },
  { rel: 'stylesheet', href: componentsStyles },
  { rel: 'stylesheet', href: animationsStyles },
  { rel: 'stylesheet', href: navBarStyles },
  { rel: 'stylesheet', href: footerStyles },
  { rel: 'stylesheet', href: notFoundStyles }
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'RegainFlow | Digital & AI Transformation for Growing Businesses' },
    {
      name: 'description',
      content:
        'RegainFlow is your digital and AI transformation partner. We learn your business, find the pain points, and build solutions that help you operate smarter and earn more.'
    },
    { property: 'og:site_name', content: 'RegainFlow' },
    { property: 'og:type', content: 'website' }
  ];
}

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
        <ScrollToTop />
        <div className="background-wrapper">
          <Navbar />
          {children}
          <Footer />
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

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
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
