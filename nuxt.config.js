// Load dotenv module so that .env environment variables are available within
// this file.
require('dotenv').config();

export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    titleTemplate: '%s | Pre-Vue',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {property: 'og:type', content: 'website'},
      {
        property: 'og:description',
        content: 'Pre-Vue is a simple example of a pre-rendered Vue website',
      },
      {
        property: 'og:image',
        content: 'https://pre-vue.web.app/images/logo.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico',
      },
    ],
  },
  buildModules: [
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
      },
    ],
  ],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  plugins: ['~/plugins/head'],
  sitemap: {
    hostname: 'https://pre-vue.web.app/',
    gzip: true,
    exclude: ['/404'],
  },
  robots: {
    sitemap: 'https://pre-vue.web.app/sitemap.xml',
  },
};
