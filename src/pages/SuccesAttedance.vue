<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200
           flex flex-col items-center justify-center font-inter"
  >
    <!-- Logo -->
    <div class="mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.59 185.62" class="w-20 h-auto">
        <!-- SVG tetap sama -->
      </svg>
    </div>

    <!-- Card Glass -->
    <div
      class="w-full max-w-sm rounded-xl bg-white/70 backdrop-blur-xl
             shadow-2xl border border-white/50
             py-6 px-5"
    >
      <div class="flex flex-col items-center text-center space-y-4">

        <!-- Icon -->
        <div
          class="flex h-16 w-16 items-center justify-center
                 rounded-full bg-green-100"
        >
          <i class="pi pi-check text-3xl text-green-600"></i>
        </div>

        <!-- Divider -->
        <div class="h-1 w-16 rounded-full bg-slate-200"></div>

        <!-- Title -->
        <h2 class="text-lg font-semibold text-slate-800 leading-snug">
          Terimakasih Telah Mengikuti Rapat
        </h2>

        <!-- Subtitle -->
        <p class="text-sm text-slate-500">
          {{ namaKegiatan }}
        </p>

        <!-- Divider -->
        <div class="h-1 w-16 rounded-full bg-slate-200"></div>

        <!-- Button -->
        <Button
          label="Lihat Daftar Kehadiran"
          class="w-full rounded-md
                 bg-primary-500 text-white font-semibold
                 hover:bg-primary-600 transition"
          @click="goDaftarHadir"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Button from 'primevue/button'

const router = useRouter()
const namaKegiatan = 'Nama Kegiatan'

const goDaftarHadir = () => {
  router.push('/daftar-hadir')
}
</script>
