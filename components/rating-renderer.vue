<script setup lang="ts">
defineProps<{
  rating: number
}>()
</script>
<template>
  <div class="flex gap-2">
    <UIcon
      v-if="rating > 0"
      v-for="i in Math.abs(rating)"
      :key="`thumbs-up-i`"
      class="text-green-500"
      name="material-symbols:thumb-up-rounded"
    />
    <UIcon
      v-else-if="rating < 0"
      v-for="i in Math.abs(rating)"
      :key="`thumbs-down-i`"
      class="text-red-500"
      name="material-symbols:thumb-down-rounded"
    />
    <div v-else class="flex gap-2">
      <UIcon
        class="text-yellow-500"
        name="material-symbols:thumbs-up-down-rounded"
      />
      <p class="text-yellow-500 text-sm">Mixed</p>
    </div>
  </div>
</template>