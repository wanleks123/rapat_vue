import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/LoginIntern.vue'

const routes = [
  {
    path: '/',
    name: 'LoginIntern',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
