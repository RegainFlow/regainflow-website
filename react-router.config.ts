import type { Config } from "@react-router/dev/config";

export default {
  // App directory
  appDirectory: "app",

  // Build output directory
  buildDirectory: "build",

  // Enable SSR
  ssr: true,

  // Optional: Pre-render specific routes for faster initial loads
  // Uncomment and customize as needed:
  // prerender: ["/", "/portfolio", "/privacy", "/terms"],

} satisfies Config;
