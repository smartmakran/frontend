<route lang="yaml">
meta:
  requiresAuth: true
</route>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useUserSession } from '/@src/stores/userSession'

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
