import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'
import Register from '@/pages/Register/Register'
import Desail from '@/pages/Desail/Desail'
import Category from '@/pages/Category/Category'
import My from '@/pages/Home/My'
import Cart from '@/pages/Home/Cart'
import Index from '@/pages/Home/Index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home" 
    },
    {
      path: '/home/:uname',  //:uname是一个占位
      component: Home,
      children:[
        
    {
      path:'cart',
        component: Cart
    },
    {
          path:'my',
          component:My
    },
    {
          path:'index',
          component:Index
    }
      ]
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/dwsail',
      component: Desail
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    
  ]
})
