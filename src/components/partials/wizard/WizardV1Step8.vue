<script setup lang="ts">
import { useRouter } from 'vue-router'

import { useWizard } from '/@src/stores/wizard'

const router = useRouter()
const wizard = useWizard()

const validateStep = async () => {
  router.push({
    name: 'navbar-layouts-projects-details',
  })
  wizard.reset()
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">تبریک می گویم! همه چیز آماده است.</h2>
      <p>عالی ، شما به تازگی ایجاد این پروژه را به پایان رسانده اید.</p>
    </div>

    <div class="page-placeholder end-placeholder">
      <div class="placeholder-content">
        <img
          class="light-image"
          src="/@src/assets/illustrations/wizard/finish.svg"
          alt=""
        />
        <img
          class="dark-image"
          src="/@src/assets/illustrations/wizard/finish-dark.svg"
          alt=""
        />
        <h3>برای مراحل بعدی آماده شوید.</h3>
        <p>
          شما و اعضای تیمی که اضافه کرده اید می توانید از قبل کار و ایجاد وظایف را شروع
          کنید.
        </p>
        <div class="button-wrap">
          <VButton color="primary" rounded bold elevated @click="validateStep">
            مشاهده پروژه
          </VButton>
        </div>
      </div>
    </div>
  </div>
</template>
