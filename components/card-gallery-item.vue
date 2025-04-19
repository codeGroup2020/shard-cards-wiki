<script lang="ts" setup>
import type { ShardCardsCollectionItem } from '@nuxt/content';

defineProps<{
    card: ShardCardsCollectionItem
}>()
</script>
<template>
    <NuxtLink :to="card.path" class="w-[288px] aspect-288/447 bg-transparent max-w-full hover:scale-101">
        <img 
            :src="card.imagePath" 
            class="object-cover"
            lazy
        />
    </NuxtLink>
</template>