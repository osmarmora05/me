// @ts-check

import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://osmarmora05.github.io",
  base: "/me",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "onest",
      cssVariable: "--font-onest",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Onest-VariableFont_wght.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "monokai",
      },
    },
  },

  integrations: [mdx()],
});
