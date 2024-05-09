export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/beercss@3.5.1/dist/cdn/beer.min.css",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Freeman&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
      script: [
        {
          type: "module",
          src: "https://cdn.jsdelivr.net/npm/beercss@3.5.1/dist/cdn/beer.min.js",
        },
      ],
    },
  },
  css: ["~/assets/css/additions.css", "~/assets/css/theme.css"],
  modules: ["@nuxtjs/supabase", "nuxt-highcharts"],

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      include: ["/logout"],
      exclude: [],
      cookieRedirect: false,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
});
