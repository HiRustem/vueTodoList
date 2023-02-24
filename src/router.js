import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Todos from '@/views/Todos.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/todos',
            component: Todos,
        },
    ],
})