// @ts-check
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import { SiteUrl } from "./src/theme.config";

// https://astro.build/config
export default defineConfig({
  site: SiteUrl,
  base: "/Astro-Portfolio-Website/",
  output: "static",
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: [],
  },
  integrations: [markdoc(), sitemap(), icon(), mdx()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});
