<script setup lang="ts">
defineProps<{
  title: string
  videoPath: string
}>()
</script>

<template>
  <div class="w-[50rem] max-w-full mt-4 flex flex-col border-3 bg-slate-800 border-white rounded-lg overflow-hidden">
    <div class="px-4 py-2">
      <p class="text-white font-semibold text-lg">{{ title }}</p>
    </div>
    <video
      class="w-full p-2"
      controls
      :src="videoPath"
    />
  </div>
</template>
