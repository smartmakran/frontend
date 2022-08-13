<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

import { useViewWrapper } from '/@src/stores/viewWrapper'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد اصلی')
useHead({
  title: `${t('app.title')} | ${t('dashboard.title')}`,
})
</script>

<template>
  <div class="page-content-inner">
    <TestDashboard />
  </div>
</template>
