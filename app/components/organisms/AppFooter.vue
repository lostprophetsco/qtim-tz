<template>
  <footer :class="['app-footer', `app-footer--${theme}`]">
    <div class="container app-footer__container">
      <div class="app-footer__content">
        <div class="app-footer__left">
          <p class="app-footer__question">Is there a project?</p>
          <h2 class="app-footer__title">Let's work together</h2>
        </div>

        <div class="app-footer__right">
          <div class="app-footer__contact-section">
            <div class="app-footer__contact-title">For all questions</div>
            <p>+7 (920) 278-00-68</p>
            <p>qtim@agency.com</p>
          </div>

          <div class="app-footer__contact-section">
            <div class="app-footer__contact-title">Office in Russia</div>
            <p>139 Ruben Station Lake</p>
            <p>Drew NM 52678</p>
            <AppButton size="small" class="app-footer__icon-placeholder">
              <img :src="locationPin" alt="Location" />
            </AppButton>
          </div>

          <div class="app-footer__contact-section">
            <div class="app-footer__contact-title">Office in Dubai</div>
            <p>139 Ruben Station Lake</p>
            <p>Drew NM 52678</p>
            <AppButton size="small" class="app-footer__icon-placeholder">
              <img :src="locationPin" alt="Location" />
            </AppButton>
          </div>
        </div>
      </div>

      <div class="app-footer__bottom">
        <div class="app-footer__social-links">
          <AppButton href="#">Facebook</AppButton>
          <AppButton href="#">Instagram</AppButton>
          <AppButton href="#">Telegram</AppButton>
        </div>

        <div class="app-footer__policy-links">
          <AppButton href="#">Behance</AppButton>
          <AppButton href="#">LinkedIn</AppButton>
          <AppButton href="#">Privacy Policy</AppButton>
        </div>
      </div>

      <AppButton href="#" class="app-footer__go-btn">Go</AppButton>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AppButton } from '~/components/atoms'
import locationPin from '~/assets/images/location-pin.svg'

type FooterTheme = 'primary' | 'secondary'

interface Props {
  theme?: FooterTheme
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'primary'
})
</script>
