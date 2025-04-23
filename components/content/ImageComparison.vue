<script setup lang="ts">
const props = defineProps<{
  title: string
  imageOneLabel: string
  imageTwoLabel: string
  imageOnePath: string
  imageTwoPath: string
}>()

const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = computed(() => {
  return [
    { src: props.imageOnePath, title: `${props.title} ${props.imageOneLabel}` },
    { src: props.imageTwoPath, title: `${props.title} ${props.imageTwoLabel}` },
  ]
});

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);
</script>

<template>
  <div class="max-w-full mt-4 flex flex-col border-3 bg-slate-800 border-white rounded-lg overflow-hidden">
    <div class="px-4 py-2">
      <p class="text-white font-semibold text-lg">{{ title }}</p>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="p-2 w-full md:w-1/2 relative">
        <div class="absolute top-2 left-2 bg-slate-800">
          <p class="text-sm px-2 py-1">{{ imageOneLabel }}</p>
        </div>
        <img
          class="w-full"
          :src="imageOnePath"
          :alt="`${title} ${imageOneLabel}`"
          @click="showImg(0)"
        />
      </div>
      <div class="p-2 w-full md:w-1/2 relative">
        <div class="absolute top-2 left-2 bg-slate-800">
          <p class="text-sm px-2 py-1">{{ imageTwoLabel }}</p>
        </div>
        <img
          class="w-full"
          :src="imageTwoPath"
          :alt="`${title} ${imageTwoLabel}`"
          @click="showImg(1)"
        />
      </div>
      <VueEasyLightbox
        :visible="visibleRef"
        :imgs="imgs"
        :index="indexRef"
        @hide="onHide"
      />
    </div>
  </div>
</template>
