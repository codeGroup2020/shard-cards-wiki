<script setup lang="ts">
defineProps<{
  selectedRating: number
  hoveredRating: number
}>()

const emit = defineEmits([
  'update:selectedRating',
  'update:hoveredRating'
])
</script>
<template>
  <div class="flex gap-2">
    <p class="italic text-sm my-auto">Very Bad</p>
    <UIcon
        name="material-symbols:thumb-down-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-red-500': selectedRating <= -5, 'text-red-200': !selectedRating && hoveredRating <= -5 }"
        @mouseover="emit('update:hoveredRating', -5)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', -5)"
    />
    <UIcon
        name="material-symbols:thumb-down-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-red-500': selectedRating <= -4, 'text-red-200': !selectedRating && hoveredRating <= -4 }"
        @mouseover="emit('update:hoveredRating', -4)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', -4)"
    />
    <UIcon
        name="material-symbols:thumb-down-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-red-500': selectedRating <= -3, 'text-red-200': !selectedRating && hoveredRating <= -3 }"
        @mouseover="emit('update:hoveredRating', -3)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', -3)"
    />
    <UIcon
        name="material-symbols:thumb-down-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-red-500': selectedRating <= -2, 'text-red-200': !selectedRating && hoveredRating <= -2 }"
        @mouseover="emit('update:hoveredRating', -2)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', -2)"
    />
    <UIcon
        name="material-symbols:thumb-down-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-red-500': selectedRating <= -1, 'text-red-200': !selectedRating && hoveredRating <= -1 }"
        @mouseover="emit('update:hoveredRating', -1)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', -1)"
    />
    <p class="italic text-sm my-auto">Neutral</p>
    <UIcon
        name="material-symbols:thumb-up-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-green-500': selectedRating >= 1, 'text-green-200': !selectedRating && hoveredRating >= 1 }"
        @mouseover="emit('update:hoveredRating', 1)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', 1)"
    />
    <UIcon
        name="material-symbols:thumb-up-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-green-500': selectedRating >= 2, 'text-green-200': !selectedRating && hoveredRating >= 2 }"
        @mouseover="emit('update:hoveredRating', 2)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', 2)"
    />
    <UIcon
        name="material-symbols:thumb-up-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-green-500': selectedRating >= 3, 'text-green-200': !selectedRating && hoveredRating >= 3 }"
        @mouseover="emit('update:hoveredRating', 3)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', 3)"
    />
    <UIcon
        name="material-symbols:thumb-up-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-green-500': selectedRating >= 4, 'text-green-200': !selectedRating && hoveredRating >= 4 }"
        @mouseover="emit('update:hoveredRating', 4)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', 4)"
    />
    <UIcon
        name="material-symbols:thumb-up-rounded"
        class="text-gray-500 my-auto"
        :class="{ 'text-green-500': selectedRating >= 5, 'text-green-200': !selectedRating && hoveredRating >= 5 }"
        @mouseover="emit('update:hoveredRating', 5)"
        @mouseleave="emit('update:hoveredRating', 0)"
        @click="emit('update:selectedRating', 5)"
    />
    <p class="italic text-sm my-auto">Very Good</p>
  </div>
</template>