 
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'netlify'
  },
  css: ['~/assets/css/globals.css'],
})
