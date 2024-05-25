// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/main.css'],
  vite: {
    plugins: [eslintPlugin()],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
})
