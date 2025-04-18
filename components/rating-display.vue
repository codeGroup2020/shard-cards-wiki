<script setup lang="ts">
defineProps<{
    offenseRating: number
    defenseRating: number
}>()
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-center">
            <p class="text-center font-bold underline">Rating</p>
            <UIcon name="material-symbols:help-rounded" class="cursor-pointer" @click="navigateTo('/ratings-explanation')" />
        </div>
        <div class="flex gap-3">
            <p>Offense:</p>
            <UIcon 
                v-if="offenseRating > 0" 
                v-for="i in offenseRating"
                :key="`thumbs-up-{{i}}`"
                name="material-symbols:thumb-up-rounded" 
                class="text-green-500 my-auto" 
            />
            <UIcon 
                v-else-if="offenseRating < 0" 
                v-for="i in Math.abs(defenseRating)"
                :key="`thumbs-down-{{i}}`"
                name="material-symbols:thumb-down-rounded" 
                class="text-red-500 my-auto" 
            />
            <p v-else class="text-yellow-500">Unrated</p>
        </div>
        <div class="flex gap-3">
            <p>Defense:</p>
            <UIcon 
                v-if="defenseRating > 0" 
                v-for="i in defenseRating"
                :key="`thumbs-up-{{i}}`"
                name="material-symbols:thumb-up-rounded" 
                class="text-green-500 my-auto" 
            />
            <UIcon 
                v-else-if="defenseRating < 0" 
                v-for="i in Math.abs(defenseRating)"
                :key="`thumbs-down-{{i}}`"
                name="material-symbols:thumb-down-rounded" 
                class="text-red-500 my-auto" 
            />
            <p v-else class="text-yellow-500">Unrated</p>
        </div>
    </div>
</template>