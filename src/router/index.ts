import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArchivesView from '@/views/ArchivesView.vue'
import SearchView from '@/views/SearchView.vue'
import TagsView from '@/views/TagsView.vue'
import PostView from '@/views/PostSingleView.vue'
import type { Component } from 'vue'

type Route = {
  path: string,
  name: string,
  component: Component
}

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/archives',
    name: 'Archives',
    component: ArchivesView
  },
  {
    path: '/tags',
    name: 'Tags',
    component: TagsView
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
