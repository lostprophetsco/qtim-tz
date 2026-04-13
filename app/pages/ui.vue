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
            <AppButton :rounded="false">Default</AppButton>
            <AppButton rounded>Rounded</AppButton>
          </div>

          <h3>Links</h3>
          <div class="button-row">
            <AppButton to="/about">NuxtLink</AppButton>
            <AppButton href="https://example.com">External Link</AppButton>
          </div>

          <h3>With Icon</h3>
          <div class="button-row">
            <AppButton>
              <template #icon>
                <span>→</span>
              </template>
              With Icon
            </AppButton>
            <AppButton theme="light" rounded>
              <template #icon>
                <span>★</span>
              </template>
              Star Button
            </AppButton>
          </div>

          <h3>Combinations</h3>
          <div class="button-row">
            <AppButton size="small" rounded>Small Rounded</AppButton>
            <AppButton theme="light" size="small">Light Small</AppButton>
            <AppButton rounded>
              <template #icon>
                <span>🔗</span>
              </template>
              Rounded with Icon
            </AppButton>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h2>Other Components</h2>
        <AppPagination />
        <AppNewsCard />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppButton } from '~/components/atoms'
import { AppPagination, AppNewsCard } from '~/components/molecules'
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
      font-size: 1.4rem;
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
