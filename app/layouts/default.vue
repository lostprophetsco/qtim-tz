<script setup lang="ts">
import AppHeader from '~/components/organisms/AppHeader.vue'
import AppFooter from '~/components/organisms/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main class="container">
    <slot />
  </main>

  <AppFooter />
</template>

<style lang="scss">
@use '@/assets/scss/index.scss';
</style>
