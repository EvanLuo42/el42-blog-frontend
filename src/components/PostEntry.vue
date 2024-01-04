<script setup lang="ts">
type PostEntry = {
  link: string
  title: string,
  description: string,
  date: string,
  author: string
}

defineProps<PostEntry>()
</script>

<template>
  <article class="post-entry">
    <header class="entry-header">
      <h2>{{ title }}</h2>
    </header>
    <div class="entry-content">
      {{ description }}
    </div>
    <footer class="entry-footer">
      <span>{{ date }}</span> " · " {{ author }}
    </footer>
    <RouterLink class="entry-link" :to="link"></RouterLink>
  </article>
</template>

<style scoped>
.post-entry {
    position: relative;
    margin-bottom: var(--gap);
    padding: var(--gap);
    background: var(--entry);
    border-radius: var(--radius);
    transition: transform 0.1s;
    border: 1px solid var(--border);
}

.post-entry:active {
    transform: scale(0.96);
}

.tag-entry .entry-cover {
    display: none;
}

.entry-header h2 {
    font-size: 24px;
    line-height: 1.3;
}

.entry-content {
    margin: 8px 0;
    color: var(--secondary);
    font-size: 14px;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.entry-footer {
    color: var(--secondary);
    font-size: 13px;
}

.entry-link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>