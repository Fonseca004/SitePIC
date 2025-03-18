import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: "https://smartrack.netlify.app/",
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: netlify(),
  image: {
    // Add image configuration if needed
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
  },
});