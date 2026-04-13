<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="app-button"
    :class="buttonClasses"
  >
    <span v-if="$slots.icon" class="app-button__icon">
      <slot name="icon" />
    </span>
    <span class="app-button__content">
      <slot />
    </span>
  </component>
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

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
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
