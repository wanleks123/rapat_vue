<template>
  <div class="flex items-center gap-2">
    <i
      :class="isDark ? 'pi pi-moon' : 'pi pi-sun'"
      class="text-lg transition-colors"
    />

    <InputSwitch v-model="isDark" @change="toggleTheme" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import InputSwitch from 'primevue/inputswitch'

const isDark = ref(false)

const LIGHT_THEME = 'lara-light-blue'
const DARK_THEME = 'lara-dark-blue'

function applyTheme(theme) {
  const link = document.getElementById('theme-link')
  if (link) {
    link.href = `/themes/${theme}/theme.css`
  }
}

function toggleTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    applyTheme(DARK_THEME)
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    applyTheme(LIGHT_THEME)
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  toggleTheme()
})
</script>
