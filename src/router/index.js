import { createWebHistory, createRouter } from 'vue-router'
import Contact from '../views/Contact'
// TODO: Create and import components

const routes = [
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router