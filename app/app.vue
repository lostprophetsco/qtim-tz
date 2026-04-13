<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { createPinia } from 'pinia'

const pinia = createPinia()
const nuxtApp = useNuxtApp()
nuxtApp.vueApp.use(pinia)

nuxtApp.hook('app:error', error => {
  console.error('Application error:', error)
})
</script>

<style lang="scss">
@use '@/assets/scss/index.scss';
</style>
