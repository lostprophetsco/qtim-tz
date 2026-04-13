<template>
  <header class="app-header">
    <div class="container app-header__container">
      <div class="app-header__logo">
        <AppLogo :variant="logoVariant" to="/" />
      </div>
      <nav class="app-header__nav">
        <AppButton href="#works">Works</AppButton>
        <AppButton to="#about">About</AppButton>
      </nav>
      <div class="app-header__actions">
        <AppButton theme="light" size="small">
          <img :src="langSwitcher" alt="Language switcher" />
        </AppButton>
        <AppButton rounded>Let's work</AppButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { LogoVariant } from '~/components/atoms/AppLogo.vue'
import { AppButton, AppLogo } from '~/components/atoms'
import langSwitcher from '~/assets/images/lang-switcher.svg'

interface Props {
  logoVariant?: LogoVariant
}

const props = withDefaults(defineProps<Props>(), {
  logoVariant: 'default'
})
</script>
