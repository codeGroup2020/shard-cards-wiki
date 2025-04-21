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
  <div class="flex m-4">
    <UButton
      icon="material-symbols:arrow-back-rounded"
      label="Back to Card List"
      color="neutral"
      class="cursor-pointer"
      @click="navigateTo('/')"
    />
  </div>
  <div v-if="card">
    <div class="flex sm:h-72 flex-col sm:flex-row m-5 gap-5 justify-between">
          <div class="w-full md:w-1/3 flex flex-col gap-5 justify-center items-center">
            <h1 class="text-5xl font-bold text-center">{{ card.title }}</h1>
            <p class="text-lg text-center">{{ card.description }}</p>
            <ShardPointCostDisplay :cost="card.cost" />
          </div>
          <div class="w-full md:w-1/3 flex flex-col gap-5 justify-center items-center">
            <TagDisplay :tags="card.tags" />
            <RatingDisplay
              :offenseRating="card.offenseRating"
              :defenseRating="card.defenseRating"
            />
          </div>
        <div class="w-full md:w-1/5 max-h-full flex justify-center">
            <img
                :src="card.imagePath"
                class="image-contain"
            />
        </div>
    </div>
    <ContentRenderer :value="card" class="m-5" />
  </div>
</template>
