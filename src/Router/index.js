import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../Pages/Home.vue'
// import About from '../Pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../Pages/Home.vue')
    },

    {
        path: '/about',
        name: 'About',
        component: () => import('../Pages/About.vue')
    },

    {
        path: '/contacts',
        name: 'Contact',
        component: () => import('../Pages/Contact.vue')
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router