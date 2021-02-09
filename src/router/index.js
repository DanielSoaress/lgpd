import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store/store.js'
import Home from '../views/Home.vue'
import Requirement from '../views/Requirement.vue'
import Admin from '../views/Admin.vue'
import LoginAdmin from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/requirement',
    name: 'Requirement',
    component: Requirement
  },
  {
    path: '/paneladm',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/adm',
    name: 'Login',
    component: LoginAdmin
  },
  { 
    path: '*',
    name: '404',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name == 'Admin' && Store.getters.getAuthenticated == false) {
    next({ name: 'Login' })
  } else {
    next()
  }
  if (to.name == '404') {
    next({ name: 'Home' })
  }
});


export default router
