<script setup lang="ts">
import { useHead, useRoute, navigateTo } from '#imports'

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const { data: card } = await useAsyncData(route.path, () => {
  return queryCollection('shardCards').path(route.path).first()
})

useHead({
  title: card.value ? `${card.value.title} - FragPunk Shard Card Details` : 'FragPunk Shard Cards Wiki',
  meta: [
    {
      name: 'description',
      content: card.value
        ? `${card.value.title} - Learn everything about this FragPunk Shard Card: stats, ratings, strategies, and more!`
        : 'Explore every Shard Card in FragPunk at SHARDCARDS.GG — the definitive wiki and guide.',
    },
  ],
  script: [
    {
      src: 'https://cdn.commento.io/js/commento.js',
      defer: true,
    },
  ],
})

if (!card.value) {
  navigateTo('/404')
}
</script>

<template>
  <div v-if="card">
    <div 
      v-if="card.underConstruction"
      class="w-full bg-red-500 h-16 flex flex-col justify-center relative"
    >
        <p class="text-center text-xl">This page is still under construction and may be missing content!</p>
    </div>
    <div class="flex m-4">
      <UButton
        icon="material-symbols:arrow-back-rounded"
        label="Back to Card List"
        color="neutral"
        class="cursor-pointer"
        @click="navigateTo('/')"
      />
    </div>
    <div class="flex sm:h-72 flex-col sm:flex-row m-5 gap-5 justify-between">
          <div class="w-full md:w-1/3 flex flex-col gap-5 justify-center items-center">
            <h1 class="text-5xl font-bold text-center">{{ card.title }}</h1>
            <p class="text-lg text-center">{{ card.description }}</p>
            <ShardPointCostDisplay :cost="card.cost" />
          </div>
          <div class="w-full md:w-1/3 flex flex-col gap-5 justify-center items-center">
            <RatingDisplay />
          </div>
        <div class="w-[288px] aspect-288/447 max-w-full max-h-full flex justify-center mx-auto">
            <img
                :src="card.imagePath"
                class="image-contain"
            />
        </div>
    </div>
    <ContentRenderer :value="card" class="m-5" />
    <div class="pb-2 flex justify-center border-b-1 mt-12 mb-4 border-white m-5">
        <p class="text-xl font-bold">Change History</p>
    </div>
    <ul class="list-disc mx-5">
      <li
        v-for="(item, index) in card.changeHistory"
        :key="index"
        class="ml-5"
      >
      <template v-for="(text, when) in item" :key="when">
        <span class="font-bold mr-4">{{ when }}:</span> {{ text }}
      </template>
      </li>
    </ul>
    <div class="pb-2 flex justify-center border-b-1 mt-12 mb-4 border-white m-5">
        <p class="text-xl font-bold">Comments</p>
    </div>
    <!-- Commento thread for this page -->
    <div class="px-20 py-5"><div id="commento" class=""></div></div>
  </div>
</template>
