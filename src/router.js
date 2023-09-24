// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Feedback from './views/Feedback.vue';
import Qmcl from './views/app/Qmcl.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/feedback',
        component: Feedback
    },
    {
        path: '/app/qmcl',
        component: Qmcl
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
