<template>
  <div class="ui-page">
    <h1>UI Components Page</h1>
    <div class="components-demo">
      <section class="demo-section">
        <h2>AppButton</h2>
        <div class="button-group">
          <h3>Themes</h3>
          <div class="button-row">
            <AppButton>Default (Dark)</AppButton>
            <AppButton theme="light">Light</AppButton>
          </div>

          <h3>Sizes</h3>
          <div class="button-row">
            <AppButton>Default Size</AppButton>
            <AppButton size="small">Small</AppButton>
          </div>

          <h3>Modifiers</h3>
          <div class="button-row">
            <AppButton :rounded="false">Not Rounded</AppButton>
            <AppButton rounded>Rounded</AppButton>
          </div>

          <h3>Links</h3>
          <div class="button-row">
            <AppButton to="/about">NuxtLink</AppButton>
            <AppButton href="https://example.com">External Link</AppButton>
          </div>

          <h3>Combinations</h3>
          <div class="button-row">
            <AppButton size="small" rounded>Small Rounded</AppButton>
            <AppButton theme="light" size="small">Light Small</AppButton>
            <AppButton :rounded="false">Not Rounded</AppButton>
            <AppButton theme="light" size="small">
              <img :src="langSwitcher" alt="Language switcher" />
              <span>EN</span>
            </AppButton>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h2>AppLogo</h2>
        <div class="button-group">
          <h3>Variants</h3>
          <div class="button-row">
            <AppLogo variant="default" />
            <AppLogo variant="article" />
          </div>

          <h3>With Link</h3>
          <div class="button-row">
            <AppLogo to="/" />
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h2>AppHeader</h2>
        <AppHeader />
      </section>

      <section class="demo-section">
        <h2>AppPagination</h2>
        <AppPagination
          :current-page="currentPage"
          :total-pages="totalPages"
          @prev="currentPage--"
          @next="currentPage++"
          @set-page="currentPage = $event"
        />
      </section>

      <section class="demo-section">
        <h2>AppNewsCard</h2>
        <div class="button-row">
          <AppNewsCard :post="samplePost" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppButton, AppLogo } from '~/components/atoms'
import { AppPagination, AppNewsCard } from '~/components/molecules'
import AppHeader from '~/components/organisms/AppHeader.vue'
import langSwitcher from '~/assets/images/lang-switcher.svg'

const currentPage = ref(1)
const totalPages = ref(10)

const samplePost = {
  id: '2',
  createdAt: '2021-04-23T07:13:49.861Z',
  title: 'Fantastic Concrete Mouse',
  preview: 'If we generate the application, we can get to the AGP capacitor through the optical GB sensor!',
  image: 'https://lorempixel.com/640/480/nature',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}
</script>

<style lang="scss">
.ui-page {
  .components-demo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .demo-section {
    h2 {
      margin-bottom: 1rem;
    }
  }

  .button-group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h3 {
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }

  .button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
}
</style>
