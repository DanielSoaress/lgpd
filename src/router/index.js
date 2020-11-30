import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Singin from '../views/Singin.vue'
import Search from '../views/Search.vue'
import Requirement from '../views/Requirement.vue'
import Student from '../views/Student.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/singin',
    name: 'Singin',
    component: Singin
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/requirement',
    name: 'Requirement',
    component: Requirement
  },
  {
    path: '/student',
    name: 'Student',
    component: Student
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
