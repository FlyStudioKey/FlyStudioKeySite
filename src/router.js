// router.js
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Feedback from '@/views/Feedback.vue';
import Qmcl from '@/views/app/qmcl/Qmcl.vue';
import Eula from "@/views/app/qmcl/Eula.vue";
import Fanqie from "@/views/app/fanqie/Fanqie.vue";
import Eula_fanqie from "@/views/app/fanqie/Eula.vue";
import Passage from "@/views/Passage.vue";
import NotFound from "@/views/NotFound.vue";
import Tutorial from "@/views/app/fanqie/Tutorial.vue";

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
        path: '/app/qmcl/eula',
        component: Eula
    },
    {
        path: '/app/fanqie',
        component: Fanqie
    },
    {
        path: '/app/fanqie/tutorial',
        component: Tutorial
    },
    {
        path: '/app/fanqie/eula',
        component: Eula_fanqie
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
