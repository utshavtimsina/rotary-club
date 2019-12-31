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
    component:()=> import ('../views/about-rotary/Overview.vue'),
  },
  {
    path:'/history',
    component:()=> import ('../views/about-rotary/History.vue'),
  },
  {
    path:'/rotary-foundation',
    component:()=> import ('../views/about-rotary/rotary-foundation.vue'),
  },
  {
    path:'/our-structure',
    component:()=> import ('../views/about-rotary/Our-Structure.vue'),
  },
  {
    path:'/our-leaders',
    component:()=> import ('../views/about-rotary/Our-Leaders.vue'),
  },
  {
    path:'/diversity-equity-and-inclusion',
    component:()=> import ('../views/about-rotary/Diversity-Equity-And-Inclusion.vue'),
  },
  {
    path:'/financials',
    component:()=> import ('../views/about-rotary/Financials.vue'),
  },
  {
    path:'/partnerships',
    component:()=> import ('../views/about-rotary/Partnerships.vue'),
  },
  {
    path:'/membership',
    component:()=> import ('../views/about-rotary/Membership.vue'),
  },
  {
    path:'/careers',
    component:()=> import ('../views/about-rotary/careers.vue'),
  },
  {
    path:'/join',
    component:()=> import ('../views/join.vue'),
  },
  {
    path:'/projects',
    component:()=> import ('../views/projects.vue'),
  },
  {
    path:'/get-involved/overview',
    component:()=> import ('../views/get-involved/Overview'),
  },
  {
    path:'/get-involved/rotary-clubs',
    component:()=> import ('../views/get-involved/Rotary-Clubs'),
  },
  {
    path:'/get-involved/interact-clubs',
    component:()=> import ('../views/get-involved/Interact-Clubs'),
  },
  {
    
    path:'/get-involved/rotaract-clubs',
    component:()=> import ('../views/get-involved/rotaract-clubs.vue'),
   
  },
  {
    path:'/our-cause/overview',
    component:()=> import ('../views/our-cause/Overview'),
  },
  {
    path:'/our-cause/ending-polio',
    component:()=> import ('../views/our-cause/Ending-Polio'),
  },
  {
    path:'/our-cause/promoting-peace',
    component:()=> import ('../views/our-cause/Promoting-Peace'),
  }
  
  
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
