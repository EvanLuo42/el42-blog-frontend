<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import BottomFooter from './components/BottomFooter.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView />

  <BottomFooter></BottomFooter>
</template>

<style scoped>
header {
  display: block;
}
</style>
