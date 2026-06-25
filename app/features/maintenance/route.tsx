import type { Route } from './+types/route';

import MaintenancePage from './components/MaintenancePage';
import maintenanceStyles from './components/maintenance.css?url';

export const links: Route.LinksFunction = () => [
  { rel: 'stylesheet', href: maintenanceStyles }
];

export function meta() {
  return [
    { title: "RegainFlow — We'll be right back" },
    {
      name: 'description',
      content:
        "RegainFlow's website is currently undergoing maintenance. We'll be back online shortly."
    },
    { name: 'robots', content: 'noindex' }
  ];
}

export default function MaintenanceRoute() {
  return <MaintenancePage />;
}
