import { createRouter, createWebHistory } from 'vue-router'

import LoginIntern from '../pages/LoginIntern.vue'
import LoginEksternal from '../pages/Eksternal.vue'

const routes = [
  {
    path: '/',
    name: 'LoginIntern',
    component: LoginIntern
  },
  {
    path: '/eksternal',
    name: 'LoginEksternal',
    component: LoginEksternal
  },
  {
    path: '/konfirmasi',
    name: 'Konfirmasi',
    component: () => import('../pages/Konfirmasi.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import('../pages/SuccesAttedance.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
