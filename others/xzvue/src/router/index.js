import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  { //这里是懒加载，暂时不要问，明天讲
    path: '/details/:lid',
    props:true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(
      /* webpackChunkName: "details" */ 
      '../views/Details.vue'
    )
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
