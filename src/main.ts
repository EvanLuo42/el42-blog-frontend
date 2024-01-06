import '@/assets/resets.css'
import '@/assets/vars.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import { getRawPosts, handleRawPosts } from './markdown/markdown'

const app = createApp(App)

export const globalVars = reactive({
  dark: false
})

const rawPosts = await getRawPosts()
export const posts = handleRawPosts(rawPosts)

app.use(router)

app.mount('#app')
