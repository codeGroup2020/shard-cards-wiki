<script setup lang="ts">
</script>
<template>
    <div class="pb-2 flex justify-center border-b-1 mt-12 mb-4 border-white">
        <p class="text-xl font-bold">Strategies</p>
        <UTooltip text="Suggested strategies to get the most value from the card and to counter the card." class="invisible sm:visible" >
          <UIcon name="material-symbols:help-rounded" />
        </UTooltip>
    </div>
    <slot />
</template>