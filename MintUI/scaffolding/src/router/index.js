import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Me from '../views/Me.vue'
import Profile from '../views/Profile.vue'
import Home01 from '../views/Home01.vue'
import Article from '../views/Article.vue'

import Header from '../components/MintUI/header.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Form from '../components/MintUI/form.vue'
import Css from '../components/MintUI/css.vue'
import Bar from '../components/MintUI/Bar.vue'
import Js from '../components/MintUI/Js.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/article/:id',
    component: Article
  },
  {
    path: '/home01',
    component: Home01
  },
  {
    path: '/js',
    component: Js
  },
  {
    path: '/bar',
    component: Bar
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/css',
    component: Css
  },
  {
    path: '/form',
    component: Form
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/hellorworld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
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
