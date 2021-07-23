export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Crewitts Creek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'og:site_name', content: 'Crewitts Creek Kitchen & Bar' },
      { name: 'og:url', content: 'http://www.crewittscreek.com' },
      { name: 'og:title', content: 'Crewitts Creek' },
      { name: 'og:image', content: '~/assets/imgs/ShortTransparent.png' },
      { name: 'description', content: 'Crewitts Creek Kitchen & Bar is an American restaurant located in Independence, Kentucky' },
      { name: 'og:street-address', content: '2037 Centennial Blvd' },
      { name: 'og:locality', content: 'Independence' },
      { name: 'og:region', content: 'KY' },
      { name: 'og:postal-code', content: '41051' },
      { name: 'og:country-name', content: 'USA' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      { rel: 'menu', href: 'http://www.crewittscreek.com/menu' },
      { rel: 'drinks', href: 'http://www.crewittscreek.com/drinks' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/9ebf1385dd.js', crossorigin: 'anonymous' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Add exception
    transpile: [
      "vee-validate/dist/rules"
    ],
  },

  server: {
    host: "0.0.0.0"
  }
}
