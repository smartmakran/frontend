<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { useViewWrapper } from '../stores/viewWrapper'
import { useUserStore } from '../stores/user'
import { useTaskStore } from '../stores/task'
import { onMounted, watch, ref, watchEffect } from 'vue'

const { t } = useI18n()
const viewWrapper = useViewWrapper()
viewWrapper.setPageTitle('داشبورد اصلی')
useHead({
  title: `${t('app.title')} | ${t('dashboard.title')}`,
})

const title = ref('')
const router = useRouter()
const route = useRoute()

const userStore = useUserStore()
// const taskStore = useTaskStore()

// onMounted(() => {
//   taskStore.getTasksList(userStore.user.id)
// })
function exit() {
  userStore.logout()
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
