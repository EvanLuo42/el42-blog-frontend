<script setup lang="ts">
import { SocialPlatforms, homeInfo } from '@/config'
import MastodonIcon from '@/components/icons/MastodonIcon.vue'

function socialIcon(socialPlatform: SocialPlatforms) {
  switch (socialPlatform) {
    case SocialPlatforms.Mastodon:
      return MastodonIcon
  }
}
</script>

<template>
  <article class="first-entry home-info">
    <header class="entry-header">
      <h1>{{ homeInfo.name }}</h1>
    </header>
    <span v-html="homeInfo.content" class="entry-content"></span>
    <footer class="entry-footer">
      <div class="social-icons">
        <a 
          v-for="social in homeInfo.socials" 
          :key="social.platform"
          :href="social.url"
        >
          <component :is="socialIcon(social.platform)"></component>
        </a>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.first-entry {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 320px;
    margin: var(--gap) 0 calc(var(--gap) * 2) 0;
}

.first-entry .entry-header {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}

.first-entry .entry-header h1 {
    font-size: 34px;
    line-height: 1.3;
}

.first-entry .entry-footer {
    font-size: 14px;
}

.home-info .entry-content {
    -webkit-line-clamp: unset;
}

.entry-content {
    margin: 8px 0;
    color: var(--secondary);
    font-size: 16px;
    line-height: 1.6;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.social-icons a {
    display: inline-flex;
    padding: 10px;
}

.social-icons a svg {
    height: 26px;
    width: 26px;
}
</style>