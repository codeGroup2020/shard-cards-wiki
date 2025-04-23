<script setup lang="ts">
const props = defineProps<{
  title: string
  imagePath: string
}>()

const visibleRef = ref(false);
const indexRef = ref(0);

const imgs = computed(() => {
  return [
    { src: props.imagePath, title: props.title },
  ]
});

const showImg = (index: number) => {
  indexRef.value = index;
  visibleRef.value = true;
};

const onHide = () => (visibleRef.value = false);

</script>

<template>
  <div class="w-[50rem] max-w-full mt-4 flex flex-col border-3 bg-slate-800 border-white rounded-lg overflow-hidden">
    <div class="px-4 py-2">
      <p class="text-white font-semibold text-lg">{{ title }}</p>
    </div>
    <img
      class="w-full p-2 cursor-pointer"
      :src="imagePath"
      :alt="title"
      @click="showImg(0)"
    />
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgs"
      :index="indexRef"
      @hide="onHide"
    />
  </div>
</template>
