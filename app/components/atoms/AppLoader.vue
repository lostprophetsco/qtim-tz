<template>
  <div class="app-loader" role="status" aria-live="polite" aria-label="Loading">
    <div class="app-loader__spinner" aria-hidden="true"></div>
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
