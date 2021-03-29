import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'  

const app_masterclass = createApp(App)
app_masterclass.use(router)
app_masterclass.mount('#app')
