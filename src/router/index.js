import { createWebHistory, createRouter } from 'vue-router'
import Contact from '../views/Contact'
import ChartQuery from '../components/ChartQuery'
// TODO: Create and import components

const routes = [
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/ChartQuery",
        name: "ChartQuery",
        component: ChartQuery
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router