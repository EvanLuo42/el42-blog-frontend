<script setup lang="ts">
import HomeInfo from '@/components/HomeInfo.vue';
import PostEntry from '@/components/PostEntry.vue';
import { posts } from '@/main'
</script>

<template>
  <main class="main">
    <HomeInfo></HomeInfo>
    <PostEntry
      v-for="post in posts"
      :key="post.title"
      :link="post.link"
      :title="post.title"
      :description="post.description"
      :date="post.date"
      author="EvanLuo42"
    ></PostEntry>
  </main>
</template>

<style scoped>
.main {
    position: relative;
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    max-width: calc(var(--main-width) + var(--gap) * 2);
    margin: auto;
    padding: var(--gap);
}

.pagination {
    display: flex;
}

.pagination a {
    color: var(--theme);
    font-size: 13px;
    line-height: 36px;
    background: var(--primary);
    border-radius: calc(36px / 2);
    padding: 0 16px;
}

.pagination .next {
    margin-inline-start: auto;
}

code {
    direction: ltr;
}

div.highlight,
pre {
    position: relative;
}

.copy-code {
    display: none;
    position: absolute;
    top: 4px;
    right: 4px;
    color: rgba(255, 255, 255, 0.8);
    background: rgba(78, 78, 78, 0.8);
    border-radius: var(--radius);
    padding: 0 5px;
    font-size: 14px;
    user-select: none;
}

div.highlight:hover .copy-code,
pre:hover .copy-code {
    display: block;
}
</style>
