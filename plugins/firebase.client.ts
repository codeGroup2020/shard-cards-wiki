// ~/plugins/firebase.client.ts
import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  enableIndexedDbPersistence
} from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

export default defineNuxtPlugin(() => {
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

  const db = getFirestore(app)
  enableIndexedDbPersistence(db).catch(() => {})

  const auth = getAuth(app)
  signInAnonymously(auth).catch(console.warn)

  return {
    provide: {
      firebaseDb: db,
      firebaseAuth: auth
    }
  }
})
