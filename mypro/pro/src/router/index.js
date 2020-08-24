import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import List from '../views/List.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Carousel from '../components/Carousel.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/carousel',
    component: Carousel
  },
  {
    path: '/list',
    component: List
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
    path: '/detail/:lid',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
    props:true
  }
]

const router = new VueRouter({
  routes
})

export default router
