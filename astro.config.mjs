import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import decapCmsOauth from "astro-decap-cms-oauth";

// Check if admin should be enabled based on environment variable
const adminEnabled = process.env.PUBLIC_SHOW_ADMIN_MENU === "true";

// TODO: meter "site" en una variable de entorno o un fichero de configuración para ponerlo sólo 1 vez
export default defineConfig({
  site: "https://ayto-belmontejo-astro.vercel.app/",
  output: "server",
  adapter: vercel(),
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
    decapCmsOauth({
      adminDisabled: !adminEnabled,
    }),
  ],
});
