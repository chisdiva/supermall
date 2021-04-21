import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Detail = () => import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        meta: {
            x: 0,
            y: 0
        },
    },
    {
        path: '/category',
        component: Category,
        meta: {
            x: 0,
            y: 0
        },
    },
    {
        path: '/profile',
        component:Profile,
        meta: {
            x: 0,
            y: 0
        },
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {
            x: 0,
            y: 0
        },
    },
    {
        path: '/detail/:iid',
        component: Detail,
    }
]
const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return to.meta
    },
    mode: 'history',
})

export default router