<script setup lang="ts">
interface Tag {
  title: string
  description: string
  color: string
}

const props = defineProps<{
  tags: Tag[]
}>()
</script>

<template>
<div class="flex flex-col gap-2">
    <p class="text-center font-bold underline">Tags</p>
      <div class="flex flex-wrap gap-2">
        <UTooltip
            v-for="tag in props.tags ?? []"
            :key="tag.title" 
            :text="tag.description"
        >
            <div
    
              class="p-2 bg-white rounded-lg border-4"
              :style="{ borderColor: tag.color }"
            >
              <p class="font-semibold" :style="{ color: tag.color }">
                {{ tag.title }}
              </p>
            </div>
        </UTooltip>
      </div>
</div>
</template>
