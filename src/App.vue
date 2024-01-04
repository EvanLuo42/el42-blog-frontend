<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>
  
  <RouterView />
</template>

<style scoped>
header {
  display: block;
}
</style>
