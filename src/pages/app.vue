<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUserSession } from '/@src/stores/userSession'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useViewWrapper } from '../stores/viewWrapper'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد اصلی')
useHead({
  title: `${t('app.title')} | ${t('dashboard.title')}`,
})

const router = useRouter()
const route = useRoute()

function exit() {
  useUserSession().logoutUser()
  router.push({ name: 'auth' })
}
</script>

<template>
  <AppLayout @exit="exit()">
    <!-- Content Wrapper -->
    <RouterView v-slot="{ Component }">
      <Transition name="fade-fast" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>
