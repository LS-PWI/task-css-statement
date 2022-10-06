import { createRouter, createWebHistory } from 'vue-router'
import Basket from '../views/Basket.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'

const routes = [
    {
        path: '/',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/products',
        name: 'products',
        component: Products,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router