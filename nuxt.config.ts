// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['MainLyout'].includes(tag),
    },
  },
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    // "@pinia-plugin-persistedstate/nuxt",
    // "@nuxtjs/tailwindcss",
    // "@nuxtjs/supabase",
  ],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
});
