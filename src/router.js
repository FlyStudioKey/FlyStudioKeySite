// router.js
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Feedback from './views/Feedback.vue';
import Qmcl from './views/app/Qmcl.vue';
import Eula from "./views/app/Eula.vue";

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
    },
    {
        path: '/app/eula',
        component: Eula
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
