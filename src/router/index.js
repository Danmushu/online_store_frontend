import {createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home/index.vue"
import Main from "../views/Main/index.vue"
import Payment from "../views/Payment/index.vue"
import Detail from "../views/Detail/index.vue"
import Cart from "../views/Cart/index.vue"
import Login from "../views/Login/index.vue"
import Registration from "../views/Registration/index.vue"
import OrderInfo from "@/views/OrderInfo/index.vue"
import History from "../views/History/index.vue"
import Dialogs from "../views/Dialogs/index.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/payment',
        name: 'payment',
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
        path: '/cart.js',
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
    },
    {
        path: '/orders',
        name: 'Orders',
        component: OrderInfo,
    },
    {
        path: '/history',
        name: 'History',
        component: History,
    },
    {
        path: '/dialogs',
        name: 'Dialogs',
        component: Dialogs,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;