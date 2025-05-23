import fs from 'node:fs'
import path from 'node:path'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    }
  },

  watch: ['~/content/**/*.md'],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-easy-lightbox',
  ],

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [],
  },

  plugins: [
    '~/plugins/firebase.client.ts',
    '~/plugins/analytics-tracker.client.ts'
  ],

  site: {
    url: 'https://shardcards.com',
    name: 'Shard Cards Wiki',
  }
})