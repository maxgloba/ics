export default {
  ssr: false,

  head: {
    title: 'ics',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: "https://fonts.googleapis.com",
        rel: "preconnect"
      },
      {
        href: "https://fonts.gstatic.com",
        rel: "preconnect",
        crossorigin: true
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap",
        rel: "stylesheet"
      }
    ]
  },

  css: [
    '@/assets/scss/style.scss',
  ],

  plugins: [
    {
      src: '~/plugins/vue-tiny-slider.js',
      mode: 'client'
    }
  ],

  components: true,

  router: {
    base: './',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  generate: {
    dir: './docs'
  },

  build: {
    target: 'static'
  }
}
