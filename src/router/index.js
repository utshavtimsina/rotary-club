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
    path:'/rotary-foundation',
    component:()=> import ('../views/rotary-foundation.vue'),
  },
  {
    path:'/our-structure',
    component:()=> import ('../views/Our-Structure.vue'),
  },
  {
    path:'/our-leaders',
    component:()=> import ('../views/Our-Leaders.vue'),
  },
  {
    path:'/diversity-equity-and-inclusion',
    component:()=> import ('../views/Diversity-Equity-And-Inclusion.vue'),
  },
  {
    path:'/financials',
    component:()=> import ('../views/Financials.vue'),
  },
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
