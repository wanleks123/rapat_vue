import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PrimeVue (TANPA THEME)
import PrimeVue from 'primevue/config'

// Tailwind
import './style.css'

const app = createApp(App)

app.use(router)

// ⬇️ PrimeVue TANPA theme (Tailwind only)
app.use(PrimeVue, {
  unstyled: true
})

app.mount('#app')
