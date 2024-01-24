// router.js
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Feedback from '@/views/Feedback.vue';
import Qmcl from '@/views/app/qmcl/Qmcl.vue';
import Eula_qmcl from "@/views/app/qmcl/Eula.vue";
import Fanqie from "@/views/app/fanqie/Fanqie.vue";
import Eula_fanqie from "@/views/app/fanqie/Eula.vue";
import Passage from "@/views/Passage.vue";
import NotFound from "@/views/NotFound.vue";
import Tutorial from "@/views/app/fanqie/Tutorial.vue";

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: '飞屋FSK-首页',
            description: 'FlyStudioKey飞屋软件技术致力于提供优质的软件技术服务，番茄小说下载器是我们的主打产品。为用户提供番茄小说的下载服务。'
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '飞屋FSK-关于我们',
            description: '我们是飞屋软件技术，成立于2022年1月18日，我们的两位成员将为大家带来更多的优质软件内容。'
        }
    },
    {
        path: '/feedback',
        component: Feedback,
        meta: {
            title: '飞屋FSK-问题反馈',
            description: '您在使用番茄小说下载器和QMCL的途中遇到了问题？请访问我们的问题反馈页面，我们将尽快为您解决！'
        }
    },
    {
        path: '/app/qmcl',
        component: Qmcl,
        meta: {
            title: '飞屋FSK-QMCL启动器(Quickly Minecraft Launcher启动器)',
            description: 'QMCL是新一代的我的世界启动器，它能够帮助您快速启动我的世界游戏。'
        }
    },
    {
        path: '/app/qmcl/eula',
        component: Eula_qmcl,
        meta: {
            title: '飞屋FSK-QMCL启动器最终用户许可协议',
            description: '使用QMCL即代表同意最终用户许可协议。飞屋为您提供服务。'
        }
    },
    {
        path: '/app/fanqie',
        component: Fanqie,
        meta: {
            title: '飞屋FSK-番茄小说下载器',
            description: '番茄小说下载器是飞屋软件技术开发的一款软件，它能够帮助您下载番茄小说。为您提供番茄小说下载发服务。'
        }
    },
    {
        path: '/app/fanqie/tutorial',
        component: Tutorial,
        meta: {
            title: '飞屋FSK-番茄小说下载器使用教程',
            description: '如何使用番茄小说下载器？这里是番茄小说下载器的使用教程，帮助您快速上手番茄小说下载器，指导您如何使用该服务。'
        }
    },
    {
        path: '/app/fanqie/eula',
        component: Eula_fanqie,
        meta: {
            title: '飞屋FSK-番茄小说下载器最终用户许可协议',
            description: '使用番茄小说下载器即代表同意最终用户许可协议。飞屋为您提供服务。'
        }
    },
    {
        path: '/passage/:psg_src',
        component: Passage
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound,
        meta: {
            title: '飞屋FSK-404页面',
            description: '页面不存在，请检查网址是否正确。'
        }
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
        document.title = to.meta.title || 'Default Title';

        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', to.meta.description || 'Default Description');
        }
        next()
    }
})

export default router;
