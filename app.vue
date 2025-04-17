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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&display=swap');

body {
  background: oklch(27.9% 0.041 260.031);
  color: white;
  font-family: 'Orbitron', sans-serif;
}
</style>
