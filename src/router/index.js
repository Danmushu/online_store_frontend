import {createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home/index.vue"
import Main from "../views/Main/index.vue"
import Payment from "../views/Payment/index.vue"
import Detail from "../views/Detail/index.vue"
import Cart from "../views/Cart/index.vue"
import Login from "../views/Login/index.vue"
import Registration from "../views/Registration/index.vue"
import Header_log from '@/components/layout/Header_log.vue'
import Header from '@/components/layout/Header.vue';
const routes = [
    { 
        path: '/Header_log',
        name:'Header_log' ,
        component: Header_log 
    },
    { 
        path: '/Header',
        name:'Header' ,
        component: Header 
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment,
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
    },
    {
        path: '/main',
        name: 'Main',
        component: Main,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;