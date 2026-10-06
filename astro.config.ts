import { defineConfig, envField, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.mig.com",
  output: "static",                       
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  fonts: [{ provider: fontProviders.google(), name: "Inter", cssVariable: "--font-inter" }],
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      QUOTE_INBOX: envField.string({ context: "server", access: "public" }),
    },
  },
});