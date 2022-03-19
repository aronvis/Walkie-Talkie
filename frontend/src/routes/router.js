import { createRouter, createWebHistory } from "vue-router"
import SignIn from '../pages/SignIn'

// Router Setup
const routes = [
    { 
        path: '/', 
        name: 'SignIn',
        component: SignIn 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export {
    router,
}