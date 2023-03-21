const SITE_TITLE = 'KFC優惠券查詢 | 酷碰獅'
export default defineNuxtConfig({
  app: {
    rootId: 'app',
    head: {
      title: SITE_TITLE,
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Poppins&display=swap' },
      ]
    }
  },
  runtimeConfig: {
    apiBase: process.env.API_URL
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    viewer: false
  }
})
