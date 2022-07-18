<script setup lang="ts">
import type { WizardRelatedTo } from '/@src/models/wizard'
import { useWizard } from '/@src/stores/wizard'

const wizard = useWizard()

const validateStep = (relatedTo: WizardRelatedTo) => {
  wizard.data.relatedTo = relatedTo
  wizard.setStep(2)
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">انتخاب نوع پروژه</h2>
    </div>

    <div class="wizard-types">
      <div class="columns">
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-1.svg" alt="" />
            <h3 class="dark-inverted">طراح رابط کاربری</h3>
            <p>توضیحات مختصری در خصوص این شغل و حرفه.</p>
            <div class="button-wrap">
              <VButton
                color="primary"
                class="type-select-button"
                rounded
                elevated
                bold
                @click="validateStep('طراح رابط کاربری')"
              >
                ادامه
              </VButton>
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">یا بیشتر بدانید</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-2.svg" alt="" />
            <h3 class="dark-inverted">توسعه‌ی وب</h3>
            <p>توضیحات مختصری در خصوص این شغل و حرفه.</p>
            <div class="button-wrap">
              <VButton
                color="primary"
                class="type-select-button"
                rounded
                elevated
                bold
                @click="validateStep('توسعه‌ی وب')"
              >
                ادامه
              </VButton>
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">یا بیشتر بدانید</a>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="wizard-card">
            <img src="/@src/assets/illustrations/wizard/type-3.svg" alt="" />
            <h3 class="dark-inverted">مارکتینگ</h3>
            <p>توضیحات مختصری در خصوص این شغل و حرفه.</p>
            <div class="button-wrap">
              <VButton
                color="primary"
                class="type-select-button"
                rounded
                elevated
                bold
                @click="validateStep('مارکتینگ')"
              >
                ادامه
              </VButton>
            </div>
            <div class="learn-more-link">
              <a href="#" class="dark-inverted-hover">یا بیشتر بدانید</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
