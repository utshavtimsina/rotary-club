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
  },
  {
    path:'/our-cause/fighting-disease',
    component:()=> import ('../views/our-cause/Fighting-Disease'),
  },
  {
    path:'/our-cause/providing-clean-water',
    component:()=> import ('../views/our-cause/Providing-Clean-Water'),
  },
  {
    path:'/our-cause/supporting-education',
    component:()=> import ('../views/our-cause/Supporting-Education'),
  },
  {
    path:'/our-cause/saving-mothers-and-children',
    component:()=> import ('../views/our-cause/Saving-Mothers-And-Children'),
  },
  {
    path:'/our-cause/growing-local-economies',
    component:()=> import ('../views/our-cause/growing-local-economies'),
  },
  {
    path:'/our-cause/disaster-response',
    component:()=> import ('../views/our-cause/disaster-response'),
  },
  {
    path:'/our-programs',
    component:()=> import ('../views/our-programs/our-programs.vue'),
  },
  {
    path:'/our-programs/youth-programs',
    component:()=> import ('../views/our-programs/youth-programs.vue'),
  },
  {
    path:'/our-programs/rotary-youth-leadership-awards',
    component:()=> import ('../views/our-programs/rotary-youth-leadership-awards.vue'),
  },
  {
    path:'/our-programs/youth-exchanges',
    component:()=> import ('../views/our-programs/youth-exchanges.vue'),
  },
  {
    path:'/our-programs/peace-fellowships',
    component:()=> import ('../views/our-programs/peace-fellowships.vue'),
  },
  
  {
    path:'/our-programs/rotary-community-corps',
    component:()=> import ('../views/our-programs/rotary-community-corps.vue'),
  },
  {
    path:'/our-programs/grants',
    component:()=> import ('../views/our-programs/grants.vue'),

  },
  {
    path:'/our-programs/new-generations-service-exchange',
    component:()=> import ('../views/our-programs/new-generations-service-exchange.vue'),

  },
  {
    path:'/our-programs/scholarships',
    component:()=> import ('../views/our-programs/scholarships.vue'),

  },
  {
    path:'/our-programs/friendship-exchange',
    component:()=> import ('../views/our-programs/friendship-exchange.vue'),

  },
  {
    path:'/news-features',
    component:()=> import ('../views/news-features/news-features.vue'),

  },
  {
    path:'/news-features/press-center',
    component:()=> import ('../views/news-features/press-center.vue'),

  },
  {
    path:'/news-features/virtual-reality',
    component:()=> import ('../views/news-features/virtual-reality.vue'),

  },
  {
    path:'/news-features/social-media',
    component:()=> import ('../views/news-features/social-media.vue'),

  },
  {
    path:'/profile',
    component:()=> import ('../views/profile.vue'),

  },
  {
    path:'/login',
    component:()=> import ('@/views/member/login.vue'),

  },
  {
    path:'/user',
    component:()=> import ('@/views/member/user.vue'),

  },
  
  
  
]

const router = new VueRouter({
  routes
})

export default router
