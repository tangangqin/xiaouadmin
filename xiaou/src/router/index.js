import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Category from '@/pages/Category/Category'
import Detail from '@/pages/Detail/Detail'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import Index from '@/pages/Home/Index'
import Cart from '@/pages/Home/Cart'
import My from '@/pages/Home/My'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: "/home",
                    redirect: "/home/index"
                },
                {
                    path: "index",
                    component: Index
                },
                {
                    path: "cart",
                    component: Cart
                },
                {
                    path: "my",
                    component: My
                }
            ]
        },
        {
            path: "/category",
            component: Category
        },
        {
            path: "/detail",
            component: Detail
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        }
    ]
})
