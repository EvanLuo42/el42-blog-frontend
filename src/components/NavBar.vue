<script setup lang="ts">
import { routes } from '@/router/index'
import { useRoute } from 'vue-router';
import MoonIcon from '@/components/icons/MoonIcon.vue'
import SunIcon from '@/components/icons/SunIcon.vue'
import { globalVars } from '@/main'

function toggleDarkMode() {
  if (globalVars.dark) globalVars.dark = false
  else globalVars.dark = true

  if (document.body.classList.contains('dark')) document.body.classList.remove('dark')
  else document.body.classList.add('dark')
}
</script>

<template>
  <nav class="nav">
    <div class="title">
      <RouterLink to="/" title="EvanLuo42 写字的地方">EvanLuo42 写字的地方</RouterLink>
      <div class="logo-switches">
        <button id="theme-toggle" @click="toggleDarkMode">
          <SunIcon v-if="globalVars.dark"></SunIcon>
          <MoonIcon v-else></MoonIcon>
        </button>
      </div>
    </div>
    <ul id="menu">
      <li v-for="route in routes" :key="route.name">
        <RouterLink 
          v-if="useRoute().path == route.path"  
          :to="route.path"
        >
          <span class="active">{{ route.name }}</span>
        </RouterLink>

        <RouterLink v-else :to="route.path">
          <span>{{ route.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: calc(var(--nav-width) + var(--gap) * 2);
    margin-inline-start: auto;
    margin-inline-end: auto;
    line-height: var(--header-height);
}

.nav a {
  display: block;
}

.nav a:visited {
  text-decoration: underline;
}

.title, #menu {
  display: flex;
  margin: auto var(--gap);
}

.title {
  flex-wrap: inherit;
}

.title a {
  font-size: 24px;
  font-weight: 700;
}

.title a img, .title a svg {
    display: inline;
    vertical-align: middle;
    pointer-events: none;
    transform: translate(0, -10%);
    border-radius: 6px;
    margin-inline-end: 8px;
}

button#theme-toggle {
    font-size: 26px;
    margin: auto 4px;
}

body.dark {
  vertical-align: middle;
  display: none;
}

body:not(.dark) {
  display: none;
}

#menu {
  list-style: none;
  word-break: keep-all;
  overflow-x: auto;
  white-space: nowrap;
}

#menu li + li {
  margin-inline-start: var(--gap);
}

#menu a {
  font-size: 16px;
}

#menu .active {
  font-weight: 500;
  border-bottom: 2px solid currentColor;
}
</style>