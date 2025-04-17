<script lang="ts" setup>
import type { ShardCardsCollectionItem } from '@nuxt/content';

defineProps<{
    card: ShardCardsCollectionItem
}>()
</script>
<template>
    <NuxtLink :to="card.path" class="w-[20rem] aspect-2/3 bg-slate-100 rounded-md overflow-hidden max-w-full">
        <img 
            :src="card.imagePath" 
            class="object-cover"
        />
    </NuxtLink>
</template>