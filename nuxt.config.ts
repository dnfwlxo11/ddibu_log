// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  $development: {
    imports: {
      dirs: [
        "composables/**",
        "data/**",
        "assets/**"
      ]
    }
  },
  $production: {
    imports: {
      dirs: [
        "composables/**",
        "data/**",
        "assets/**"
      ]
    }
  },
  app: {
    buildAssetsDir: '/nuxt',
    head: {
      title: '띠부로그',
      htmlAttrs: {
        lang: 'ko',
        translate: 'no'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=contain' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'google', content: 'notranslate' },
        { name: 'theme-color', content: 'rgba(242, 241, 246, 1)', media: "(prefers-color-scheme: light)" },
        { name: 'theme-color', content: 'rgba(0, 0, 0, 1)', media: "(prefers-color-scheme: dart)" },
      ],
    }
  },
})
