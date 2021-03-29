import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome'
import PageThreadShow from '@/components/PageThreadShow'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome
    },
    {
        path: '/thread/:id',
        name: 'ThreadShow',
        component: PageThreadShow,
        props: true,
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
