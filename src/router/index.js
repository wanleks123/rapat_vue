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
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const submitPin = async () => {
  if (!pin.value) return

  loading.value = true
  try {
    // simulasi loading (boleh dihapus nanti)
    await new Promise(r => setTimeout(r, 800))

    // ⬇️ pindah ke halaman konfirmasi
    router.push('/konfirmasi')
  } finally {
    loading.value = false
  }
}

export default router
