<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import MiniSearch from 'minisearch'
import { useAsyncData } from '#app'
import { definePageMeta } from '#imports'

definePageMeta({ layout: 'main' })

const { data: cards } = await useAsyncData('shardCards', () =>
  queryCollection('shardCards').all()
)



const searchTerm = ref('')

const miniSearch = new MiniSearch({
  idField: 'path',
  fields: ['title', 'description'],
  storeFields: ['title','description','path','body'],
  searchOptions: {
    prefix: true,
    fuzzy:  0.2
  }
})

watch(
  cards,
  (newCards) => {
    if (newCards) miniSearch.addAll(newCards)
  },
  { immediate: true }
)

const results = computed(() => {
  const all = cards.value || []
  if (!searchTerm.value) return all

  const hits = miniSearch.search(searchTerm.value)

  return hits
    .map(hit => all.find(card => card.path === hit.id))
    .filter((c): c is NonNullable<typeof c> => !!c)
})

// only cards not marked removed
const activeCards = computed(() =>
  (results.value || []).filter(card => !card.removed)
)

// only cards marked removed
const removedCards = computed(() =>
  (results.value || []).filter(card => card.removed)
)

</script>

<template>
  <MainPageHero />
  <div class="flex flex-col">
    <div class="flex p-5 w-full justify-center">
      <UInput
        v-model="searchTerm"
        name="search"
        placeholder="Filter cards by title or description…"
        class="grow max-w-[24rem]"
      />
    </div>
    <p class="italic text-center text-xl font-bold">Click/tap on a card to see more details</p>
    <div class="flex flex-wrap p-5 gap-5 justify-center">
      <CardGalleryItem
        v-for="card in activeCards"
        :key="card.path"
        :card="card"
      />
    </div>
    <div class="">
      <div class="mt-12 mx-8 border-white border-b-2 flex justify-center">
        <p class="font-semibold text-3xl mb-1">Removed Cards</p>
      </div>
    </div>
    <div class="flex flex-wrap p-5 gap-5 justify-center">
      <CardGalleryItem
        v-for="card in removedCards"
        :key="card.path"
        :card="card"
      />
    </div>
  </div>
</template>
