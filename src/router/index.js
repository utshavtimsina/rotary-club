import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
     path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/overview',
    component:()=> import ('../views/Overview.vue'),
  },
  {
    path:'/history',
    component:()=> import ('../views/History.vue'),
  },
  {
    path:'/OurFoundation',
    component:()=> import ('../views/rotary-foundation.vue'),
  }
  
]

const router = new VueRouter({
  routes
})

export default router
