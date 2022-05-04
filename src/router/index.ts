import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView
    },
    {
        path: "/tutorials",
        alias: "/tutorials",
        name: "tutorials",
        component: () => import('../components/TutorialList.vue'),
      },
];

const router =  createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;