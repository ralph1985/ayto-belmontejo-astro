import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

import decapCmsOauth from "astro-decap-cms-oauth";

export default defineConfig({
  site: "https://www.yourwebsite.com", // update me!
  integrations: [icon(), sitemap({
    filter: (page) => !page.includes("/admin"),
    changefreq: "weekly",
    priority: 0.7,
  }), decapCmsOauth()],
});