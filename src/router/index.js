import {createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home/index.vue"
import Home_log from "../views/Home_log/index.vue"
import Main from "../views/Main/index.vue"
import Payment from "../views/Payment/index.vue"
import Detail from "../views/Detail/index.vue"
import Cart from "../views/Cart/index.vue"
import Login from "../views/Login/index.vue"
import Registration from "../views/Registration/index.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/home_log',
        name: 'Home_log',
        component: Home_log,
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