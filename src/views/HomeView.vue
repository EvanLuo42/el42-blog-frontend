<script setup lang="ts">
import HomeInfo from '@/components/HomeInfo.vue';
import PostEntry from '@/components/PostEntry.vue';

</script>

<template>
  <main class="main">
    <HomeInfo></HomeInfo>
    <PostEntry
      link="/posts/a"
      title="在 Hugo 中为 Typst 配置语法高亮（PaperMod 主题"
      description="如果你使用 Typst 的话，你肯定想在自己的 Blog 中对 Typst 代码进行高亮。但由于目前为止 Typst 还处于发展阶段，比较小众， highlight.js 并没有对 Typst 进行支持。但感谢社区的贡献，一款 highlight.js 的 Typst 支持库诞生了：来自于 typst.ts 项目的 highlighter。 本文主要针对于 Papermod 主题进行 highlighter 的配置。 首先我们需要进入到 Blog 目录下的 themes 目录，并找到 PaperMod 的位置。在此我用 %blog_dir%/themes/PaperMod 表示。可以发现其中的结构如下： . ├── LICENSE ├── README.md ├── assets ├── go.mod ├── i18n ├── images ├── layouts └── theme.toml 首先我们先要进入到 assets 目录更换 highlight.js 的版本，因为 highlighter 最低需要 11.9.0 的版本。我们前往官网下载最新版本，并将 highlight.min.js 丢入 ./assets/js 替换掉原本的（可以对原先的 highlight.js 进行备份操作）。 然后我们前往 ./layouts/partials/head.html 进行 HTML 头的修改以初始化 highlight...."
      date="December 4, 2023"
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

.page-header h1 {
    font-size: 40px;
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
