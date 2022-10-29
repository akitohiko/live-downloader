const pkg = require("./package");

module.exports = {
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: "Ableton Live安装包下载工具",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  router: {
    // base: '/ableton-live-downloader/'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/ga.js", ssr: false }],

  /*
   ** Nuxt.js modules
   */
  buildModules: ["@nuxtjs/tailwindcss"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
