<template>
  <NuxtLink v-if="to" :to="to" class="app-logo">
    <slot>
      <img
        v-if="typeof logoSrc === 'string'"
        :src="logoSrc"
        alt="Logo"
        class="app-logo__image"
      />
      <component v-else-if="logoSrc" :is="logoSrc" class="app-logo__svg" />
    </slot>
  </NuxtLink>

  <a v-else-if="href" :href="href" class="app-logo">
    <slot>
      <img
        v-if="typeof logoSrc === 'string'"
        :src="logoSrc"
        alt="Logo"
        class="app-logo__image"
      />
      <component v-else-if="logoSrc" :is="logoSrc" class="app-logo__svg" />
    </slot>
  </a>

  <div v-else class="app-logo">
    <slot>
      <img
        v-if="typeof logoSrc === 'string'"
        :src="logoSrc"
        alt="Logo"
        class="app-logo__image"
      />
      <component v-else-if="logoSrc" :is="logoSrc" class="app-logo__svg" />
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'
import Logo from '~/assets/images/logo.svg'
import LogoArticle from '~/assets/images/logo-article.svg'

export type LogoVariant = 'default' | 'article'

interface Props {
  src?: Component | string
  variant?: LogoVariant
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  variant: 'default',
  to: undefined,
  href: undefined
})

const logoSrc = computed(() => {
  if (props.src) return props.src
  return props.variant === 'article' ? LogoArticle : Logo
})
</script>
