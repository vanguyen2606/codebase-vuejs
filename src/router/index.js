import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@components/HelloWorld.vue'
import AboutUs from '@components/AboutUs.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutUs,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router