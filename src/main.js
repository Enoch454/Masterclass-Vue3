import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes, // short for `routes: routes`
    })
  

const app_masterclass = createApp(App)
app_masterclass.use(router)
app_masterclass.mount('#app')
