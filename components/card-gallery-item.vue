<script lang="ts" setup>
import type { ShardCardsCollectionItem } from '@nuxt/content';

defineProps<{
    card: ShardCardsCollectionItem
}>()
</script>
<template>
    <NuxtLink :to="card.path" class="w-[288px] aspect-288/447 bg-transparent max-w-full hover:scale-101 relative">
        <div
            v-if="card.underConstruction"
            class="absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden"
        >
            <div class="-rotate-45 p-2 bg-yellow-500 opacity-80 px-[50rem] flex justify-center">
                <p class="shrink-0 text-2xl font-bold text-black opacity-100">Under Construction</p>
            </div>
        </div>
        <img 
            :src="card.imagePath" 
            class="object-cover"
        />
    </NuxtLink>
</template>