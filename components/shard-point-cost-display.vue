<script setup lang="ts">
defineProps<{
  cost: 'n' | '1' | '2' | '3' | '4' | '5'
}>()
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex justify-center">
            <p v-if="cost === 'n'" class="text-green-500">[N Points]</p>
            <p v-else="cost === 'n'" class="text-[#fbbf24]">{{ cost }} Point{{ cost !== '1' ? 's' : '' }}</p>

        </div>
        <div class="flex gap-3 justify-center">
            <div v-if="cost === '1' || cost === '2' || cost === '3' || cost === '4' || cost === '5'" class="shard-point-wrapper" ><div class="shard-point-marker" /></div>
            <div v-if="cost === '2' || cost === '3' || cost === '4' || cost === '5'"  class="shard-point-wrapper" ><div class="shard-point-marker" /></div>
            <div v-if="cost === '3' || cost === '4' || cost === '5'"  class="shard-point-wrapper" ><div class="shard-point-marker" /></div>
            <div v-if="cost === '4' || cost === '5'"  class="shard-point-wrapper" ><div class="shard-point-marker" /></div>
            <div v-if="cost === '5'"  class="shard-point-wrapper" ><div class="shard-point-marker" /></div>
        </div>
    </div>
</template>
<style scoped>
.shard-point-wrapper {
    border: #fbbf24 1px solid;
    padding: 2px;
    transform: rotate(45deg);
}
.shard-point-marker {
    border: #fbbf24 1px solid;
    padding: 2px;
    width: 1rem;
    height: 1rem;
    background-color: #fbbf24; /* bg-yellow-400 */
    box-shadow:
    /* highlight */
    inset 4px 4px 6px rgba(255,255,255, .8),
    /* shadow */
    inset -4px -4px 6px rgba(0,0,0, .2),
    /* outer drop shadow for some depth */
    2px 2px 4px rgba(0,0,0, .15);
}
</style>