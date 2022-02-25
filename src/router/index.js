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
    path:'/Accountuser',
    name:'Accountuser',
    component:()=> import('../views/Accountuser.vue')
  },
  {
    path:'/Kpiuser',
    name:'Kpiuser',
    component:()=> import('../views/Kpiuser.vue')
  },
  {
    path:'/Stopwork',
    name:'Stopwork',
    component:()=> import('../views/Stopwork.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
