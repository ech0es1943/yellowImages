export default {
  ssr: false,

  head: {
    title: 'Yellow Images',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://cdn.yellowimages.com/images/icons/favicons/apple-touch-icon-180x180.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic,cyrillic-ext,latin-ext' }
    ]
  },

  css: [
    '~/assets/css/main.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    'nuxt-buefy',
  ],

  build: {
  }
}
