import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import Loco from '../Pages/Loco.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/loco',
        name: 'Loco',
        component: Loco,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router