export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'], // ✅ Add Tailwind module
  css: ['~/assets/css/globals.css'], // optional if you have custom styles
  nitro: {
    preset: 'netlify', // ✅ Enable Netlify SSR
  },
})
function defineNuxtConfig(arg0: {
  modules: string[]; // ✅ Add Tailwind module
  css: string[]; // optional if you have custom styles
  nitro: { preset: string; };
}) {
  throw new Error("Function not implemented.");
}

