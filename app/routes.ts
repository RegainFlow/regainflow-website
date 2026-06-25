import { type RouteConfig, index, route } from "@react-router/dev/routes";

// ──────────────────────────────────────────────────────────────────────────
// MAINTENANCE LOCKDOWN
// The site is temporarily under construction. Only the maintenance page is
// registered, so every URL renders "We'll be right back" and no real page
// (/engineers, /services, /client-results, etc.) is reachable.
//
// TO RESTORE THE FULL SITE:
//   1. Replace the array below with the original flat file-based routing
//      (the route files in app/routes/ are untouched):
//        import { type RouteConfig } from "@react-router/dev/routes";
//        import { flatRoutes } from "@react-router/fs-routes";
//        export default flatRoutes() satisfies RouteConfig;
//   2. Remove the maintenance "exclude" block from tsconfig.json.
//   3. Restore <Navbar/> and <Footer/> in app/root.tsx.
// ──────────────────────────────────────────────────────────────────────────

export default [
  index("features/maintenance/route.tsx"),
  route("*", "features/maintenance/route.tsx", { id: "maintenance-splat" }),
] satisfies RouteConfig;
