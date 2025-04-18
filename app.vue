<script setup lang="ts">

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
