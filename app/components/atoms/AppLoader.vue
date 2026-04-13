<template>
  <div class="app-loader">
    <div class="app-loader__spinner"></div>
    <p class="app-loader__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

withDefaults(defineProps<Props>(), {
  text: 'Loading...'
})
</script>
