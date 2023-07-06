export default {
  head: {
    title: 'shairz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/tailwind.css' },
    ],
  },

  css: [
    '~/assets/css/tailwind.css',
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxt/content',
  ],

  content: {},

  build: {},
};