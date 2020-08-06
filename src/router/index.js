import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 测试案例开始
// 导入组件文件
import Header from '../components/demo/Header'
import Navbar from '../components/demo/Navbar'
import Tabcontainer from '../components/demo/Tabcontainer'
import List from '../components/demo/List'
import tabbar from '../components/demo/tabbar'
import tabbar2 from '../components/demo/tabbar2'
import Infinite from '../components/demo/Infinite'
import indicator from '../components/demo/indicator'

import Reg from '../views/Reg'
import Login from '../views/Login'
import Article from '../views/Article'

// 测试案例结束
Vue.use(VueRouter)

const routes = [
  {
    path:'/article/:id',
    component:  Article
  },
  {
    path:'/indicator',
    component:indicator
  },
  {
    path:'/infinite',
    component:Infinite
  },
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/reg',
    component:Reg
  },
  {
    path:'/tabbar2',
    component:tabbar2
  },
  {
    path:'/tabbar',
    component:tabbar
  },
  {
    path:'/list',
    component:List
  },
  {
    path:'/Tabcontainer',
    component:Tabcontainer
  },
  {
    path:'/Navbar',
    component:Navbar
  },
  {
    path:'/header',
    component:Header
  },
  {
    path: '/',

    component: Home
  },
  {
    path: '/about',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
