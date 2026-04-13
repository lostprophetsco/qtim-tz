<template>
  <NuxtLink v-if="to" :to="to" class="app-button" :class="buttonClasses">
    <slot />
  </NuxtLink>

  <a v-else-if="href" :href="href" class="app-button" :class="buttonClasses">
    <slot />
  </a>

  <button v-else class="app-button" :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonTheme = 'light' | 'dark'
type ButtonSize = 'default' | 'small'

interface Props {
  theme?: ButtonTheme
  size?: ButtonSize
  rounded?: boolean
  to?: string | null
  href?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'dark',
  size: 'default',
  rounded: true,
  to: null,
  href: null
})

const buttonClasses = computed(() => [
  `app-button--${props.theme}`,
  `app-button--${props.size}`,
  {
    'app-button--rounded': props.rounded
  },
  { 'app-button--link': props.to || props.href }
])
</script>
