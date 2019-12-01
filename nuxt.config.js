export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s | Hello World Vue Static',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://hello-world-vue-static.web.app/',
    gzip: true,
    exclude: ['/404'],
  },
};
