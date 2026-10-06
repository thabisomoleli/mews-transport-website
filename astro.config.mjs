// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.mig.com",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});