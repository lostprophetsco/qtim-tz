<script setup lang="ts">
import AppHeader from '~/components/organisms/AppHeader.vue'
import AppFooter from '~/components/organisms/AppFooter.vue'
</script>

<template>
  <AppHeader logoVariant="article" />

  <main class="container">
    <slot />
  </main>

  <AppFooter theme="secondary" />
</template>
