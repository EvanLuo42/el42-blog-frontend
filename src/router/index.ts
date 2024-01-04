import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArchivesView from '@/views/ArchivesView.vue'
import SearchView from '@/views/SearchView.vue'
import TagsView from '@/views/TagsView.vue'

export const routes = [
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    }
  ]
})

export default router
