<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useNuxtApp } from '#app'
import { useRoute } from '#imports'
import { useRatings } from '~/composables/useRatings'
import { doc, getDoc, deleteDoc } from 'firebase/firestore'

const isOpen = ref(false)
const route = useRoute()
const pageId = route.path.split('/').filter(Boolean).pop()!

const { $firebaseDb: firebaseDb, $firebaseAuth: firebaseAuth } = useNuxtApp()

const hoveredAttackRating   = ref(0)
const hoveredDefenseRating  = ref(0)
const selectedAttackRating  = ref(0)
const selectedDefenseRating = ref(0)

const uid    = ref<string|null>(null)
const ready  = ref(false)
let ratings: ReturnType<typeof useRatings>

onMounted(() => {
  const unsub = firebaseAuth.onAuthStateChanged(async (user) => {
    if (user?.uid) {
      uid.value = user.uid
      ratings = useRatings(firebaseDb, uid.value, pageId)

      // pre‑fill prior ratings
      const load = async (type: 'attack'|'defense') => {
        const snap = await getDoc(
          doc(firebaseDb, 'votes', `${pageId}_${type}_${uid.value}`)
        )
        if (snap.exists()) {
          const { rating } = snap.data() as { rating: number }
          if (type === 'attack') {
            selectedAttackRating.value = rating
            hoveredAttackRating.value  = rating
          } else {
            selectedDefenseRating.value = rating
            hoveredDefenseRating.value  = rating
          }
        }
      }
      await Promise.all([ load('attack'), load('defense') ])

      ready.value = true
      unsub()
    }
  })
})

function onRate(type: 'attack' | 'defense', value: number) {
  if (!ready.value) return
  ratings.submit(type, value)
  if (type === 'attack') {
    selectedAttackRating.value = value
    hoveredAttackRating.value  = value
  } else {
    selectedDefenseRating.value = value
    hoveredDefenseRating.value  = value
  }
}

const submitRating = async () => {
  if (!ready.value) return
  if (selectedAttackRating.value === 0 && selectedDefenseRating.value === 0) {
    isOpen.value = false
    return
  }

  await ratings.submit('attack', selectedAttackRating.value)
  await ratings.submit('defense', selectedDefenseRating.value)

  isOpen.value = false
}

async function removeRating() {
  ratings.removeAll()
  isOpen.value = false
}

const hasRated = computed(() =>
  selectedAttackRating.value > 0 || selectedDefenseRating.value > 0
)
const buttonText       = computed(() => hasRated.value ? 'Edit your rating'    : 'Rate this Card')
const submitButtonText = computed(() => hasRated.value ? 'Submit Updated Rating' : 'Submit Rating')
</script>

<template>
  <ClientOnly>
    <div v-if="ready" class="flex flex-col gap-2">
      <p class="underline">Community Rating</p>
      <div class="flex justify-center">
        <h3>Attack:</h3>
        <RatingRenderer v-if="ratings.count.value !== 0" :rating="ratings.average.attack" class="ml-2 my-auto" />
        <p v-else class="ml-2 font-bold italic">Unrated</p>
      </div>
      <div class="flex justify-center">
        <h3>Defense:</h3>
        <RatingRenderer v-if="ratings.count.value !== 0" :rating="ratings.average.defense" class="ml-2 my-auto" />
        <p v-else class="ml-2 font-bold italic">Unrated</p>
      </div>
      <p class="italic text-center text-xs">
        {{ ratings.count }} Rating(s) Submitted
      </p>

      <UModal v-model:open="isOpen">
        <!-- trigger button -->
        <div class="flex justify-center">
          <UButton
            size="sm"
            :label="buttonText"
            color="neutral"
            variant="subtle"
            class="text-center"
          />
        </div>

        <!-- modal content -->
        <template #content>
          <div class="flex flex-col gap-8 p-8 ">
            <p class="text-xl">
              Please select a rating for attack and defense...
            </p>
            <div class="flex flex-col gap-2 justify-center">
              <p class="underline text-center text-lg">Attack</p>
              <RatingSelect
                v-model:hovered-rating="hoveredAttackRating"
                v-model:selected-rating="selectedAttackRating"
              />
            </div>
            <div class="flex flex-col gap-2 justify-center">
              <p class="underline text-center text-lg">Defense</p>
              <RatingSelect
                v-model:hovered-rating="hoveredDefenseRating"
                v-model:selected-rating="selectedDefenseRating"
              />
            </div>
            <div class="flex flex-col justify-center">
                <div class="flex justify-center">
                  <UButton
                    :label="submitButtonText"
                    color="neutral"
                    size="lg"
                    variant="subtle"
                    class="text-center"
                    @click="submitRating"
                  />
                </div>
                <div class="flex justify-center">
                  <UButton
                    v-if="hasRated"
                    label="Remove Rating"
                    color="error"
                    size="lg"
                    variant="subtle"
                    class="text-center mt-2"
                    @click="removeRating"
                  />
                </div>
            </div>
          </div>
        </template>
      </UModal>
    </div>
    <div v-else class="flex flex-col gap-4">
      <p class="underline">Community Rating</p>
      <div class="mx-auto inline-block animate-spin h-4 w-4 rounded-full border-2 border-current border-t-transparent"></div>
    </div>
  </ClientOnly>
</template>
