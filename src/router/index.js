import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@components/HelloWorld.vue'
import AboutUs from '@components/AboutUs.vue'
import Login from '@pages/login'
import AdminLayout from '@layouts/AdminLayout.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld,
        meta: {
            layout: AdminLayout
        }
    },
    {
        path: '/about',
        name: 'About',
        component: AboutUs,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router