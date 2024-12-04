import {createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home/index.vue"
import Main from "../views/Main/index.vue"
import Payment from "../views/Payment/index.vue"
import Detail from "../views/Detail/index.vue"
import Cart from "../views/Cart/index.vue"
import Login from "../views/Login/index.vue"
const routes = [
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
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;