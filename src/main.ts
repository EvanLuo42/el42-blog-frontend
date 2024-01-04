import '@/assets/resets.css'
import '@/assets/vars.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

export const globalVars = reactive({
  dark: false
})

app.use(router)

app.mount('#app')
