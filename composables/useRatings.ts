// ~/composables/useRatings.ts
import { ref, onUnmounted, computed } from 'vue'
import {
  doc,
  query,
  where,
  collection,
  onSnapshot,
  setDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'

export function useRatings(
  db: Firestore,
  authUid: string,
  pageId: string
) {
  const totals = ref({ attack: 0, defense: 0 })
  const counts = ref({ attack: 0, defense: 0 })

  function listenType(type: 'attack' | 'defense') {
    const q = query(
      collection(db, 'votes'),
      where('pageId', '==', pageId),
      where('type',   '==', type)
    )
    const unsub = onSnapshot(q, (snap) => {
      let sum = 0
      snap.forEach((d) => (sum += d.data().rating))
      totals.value[type] = sum
      counts.value[type] = snap.size
    })
    return unsub
  }

  // start listeners
  const offA = listenType('attack')
  const offD = listenType('defense')
  onUnmounted(() => { offA(); offD() })

  // write or update
  async function submit(type: 'attack' | 'defense', rating: number) {
    const voteId = `${pageId}_${type}_${authUid}`
    const voteRef = doc(db, 'votes', voteId)
    await setDoc(voteRef, {
      pageId,
      type,
      rating,
      userId: authUid,
      createdAt: serverTimestamp()
    }, { merge: true })
  }

  // remove a single vote
  async function remove(type: 'attack' | 'defense') {
    const voteId = `${pageId}_${type}_${authUid}`
    const voteRef = doc(db, 'votes', voteId)
    try {
      await deleteDoc(voteRef)
    } catch (e) {
      console.error('Failed to remove vote', type, e)
      throw e
    }
  }

  // remove both
  async function removeAll() {
    await Promise.all([
      remove('attack'),
      remove('defense')
    ])
  }

  // reactive count = max of the two
  const count = computed(() =>
    Math.max(counts.value.attack, counts.value.defense)
  )

  return {
    count,
    submit,
    remove,
    removeAll,
    average: {
      get attack() {
        return counts.value.attack
          ? totals.value.attack / counts.value.attack
          : 0
      },
      get defense() {
        return counts.value.defense
          ? totals.value.defense / counts.value.defense
          : 0
      }
    }
  }
}
