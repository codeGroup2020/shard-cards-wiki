import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig().public

  const app = initializeApp({
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID,
    measurementId: config.FIREBASE_MEASUREMENT_ID
  })

  if (process.client && await isSupported()) {
    const analytics = getAnalytics(app)

    // Track page views
    useNuxtApp().hook('page:finish', () => {
      logEvent(analytics, 'page_view', {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: document.title
      })
    })
  }
})
