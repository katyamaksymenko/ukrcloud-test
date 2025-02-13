import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import SignUp from "@/pages/SignUp.vue";
import HomePage from "@/pages/HomePage.vue";

import './assets/main.css';

const routes = [
    {
        path: "/",
        name: "signup",
        component: SignUp
    },
    {
        path: "/home",
        name: "homepage",
        component: HomePage,
    },
    {
        path: "/movie/:id",
        name: "details",
        component: () => import('@/components/MovieDetails.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');
