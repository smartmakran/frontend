<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '/@src/stores/user'

const emit = defineEmits(['close'])
const router = useRouter()
const userStore = useUserStore()

function exit() {
  userStore.logout()
  router.push({ name: 'auth' })
}
</script>

<template>
  <div class="sidebar-panel is-generic">
    <div class="subpanel-header">
      <h3 class="no-mb">داشبورد</h3>
      <div
        class="panel-close"
        tabindex="0"
        @keydown.space.prevent="emit('close')"
        @click="emit('close')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </div>
    </div>
    <div class="inner" data-simplebar>
      <ul>
        <li>
          <RouterLink :to="{ name: 'app-farm' }"> لیست مزارع </RouterLink>
        </li>

        <li>
          <RouterLink :to="{ name: 'app-pond' }"> لیست حوضچه‌ها </RouterLink>
        </li>
        <li>
          <a @click="exit()"> خروج </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/layout/sidebar-panel';
</style>
