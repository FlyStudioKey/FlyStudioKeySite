// router.js
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Feedback from '@/views/Feedback.vue';
import Qmcl from '@/views/app/Qmcl.vue';
import Eula from "@/views/app/Eula.vue";
import Passage from "@/views/Passage.vue";
import NotFound from "@/views/NotFound.vue";

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
    {
        path: '/passage/:psg_src',
        component: Passage
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // 检查要导航到的路由是否存在
    if (to.matched.length === 0) {
        // 如果路由不存在，重定向到 404 路由
        next({ name: 'NotFound' })
    } else {
        // 如果路由存在，继续导航
        next()
    }
})

export default router;
