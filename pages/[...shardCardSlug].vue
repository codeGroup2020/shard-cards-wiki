<script setup lang="ts">

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const { data: card } = await useAsyncData(route.path, () => {
  return queryCollection('shardCards').path(route.path).first()
})

if (!card.value) {
  navigateTo('/404')
}
</script>

<template>
  <div v-if="card">
    <div class="w-full flex sm:h-72 flex-col sm:flex-row my-5 gap-5">
        <div class="w-full sm:w-1/2 flex flex-col gap-5 justify-center items-center">
          <h1 class="text-5xl font-bold text-center">{{ card.title }}</h1>
          <p class="text-lg text-center">{{ card.description }}</p>
        </div>
        <div class="w-full sm:w-1/2 max-h-full flex justify-center">
            <img
                :src="card.imagePath"
                class="image-contain"
            />
        </div>
    </div>
    <ContentRenderer :value="card" class="m-5" />
  </div>
</template>
