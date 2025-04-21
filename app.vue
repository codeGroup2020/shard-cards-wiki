<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  script: [
    {
      // Buy Me a Coffee widget
      src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
      'data-name': 'BMC-Widget',
      'data-cfasync': 'false',
      'data-id': 'natty_the_1st',
      'data-description': 'Support me on Buy me a coffee!',
      'data-message': 'Thank you for using this wiki! Any support to help keep the wiki maintained and up to date is greatly appreciated!',
      'data-color': '#5F7FFF',
      'data-position': 'Right',
      'data-x_margin': '18',
      'data-y_margin': '18',
      async: true
    }
  ]
})
</script>

<template>
  
  <div>
    <NuxtRouteAnnouncer />
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap');

body {
  background: oklch(27.9% 0.041 260.031);
  color: white;
  font-family: 'Exo 2', sans-serif;
}
</style>

