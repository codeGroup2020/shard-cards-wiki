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
    <h1>{{ card.title }}</h1>
    <p>{{ card.description }}</p>
    <ContentRenderer :value="card" class="text-center" />
  </div>
</template>
