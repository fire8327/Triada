// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      secretKey: process.env.SECRET_KEY, // Передаём ключ на клиент
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@formkit/nuxt',
    'nuxt-swiper',
    '@pinia/nuxt',
    '@nuxtjs/supabase'
  ],

  googleFonts: {
    families: {
      'Open Sans': true,
      'Cormorant': true
    }
  },

  postcss: {
    plugins: {
      cssnano: false 
    }
  },

  supabase: {
    redirect: false
  },

  compatibilityDate: '2024-12-18'
})