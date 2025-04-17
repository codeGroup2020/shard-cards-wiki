<script setup lang="ts">
const bannerOpen = ref<boolean>(true)
</script>
<template>
    <div 
        v-if="bannerOpen"
        class="w-full bg-red-500 h-12 flex flex-col justify-center relative"
    >
        <p class="text-center font-bold">This site is still under construction and may be missing content!</p>
        <div 
            class="absolute right-0 h-full flex flex-col justify-center cursor-pointer"
            @click="bannerOpen = false"
        >
            <UIcon 
                name="material-symbols:close-rounded" 
                class="m-3" 
            />
        </div>
    </div>
    <div class="min-h-[calc(100vh-10rem)]">
        <slot />
    </div>
    <Footer />
</template>