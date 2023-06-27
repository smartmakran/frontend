<script setup lang="ts">
import { ref, watchPostEffect, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '/@src/stores/user'
import { useRouter } from 'vue-router'

import { usePondStore } from '../stores/pond'
import { useFarmStore } from '../stores/farm'

import type { SidebarTheme } from '/@src/components/navigation/desktop/Sidebar.vue'
import { useViewWrapper } from '/@src/stores/viewWrapper'
const userStore = useUserStore()

const pondStore = usePondStore()
const farmStore = useFarmStore()

const router = useRouter()
const props = withDefaults(
  defineProps<{
    theme?: SidebarTheme
    defaultSidebar?: string
    closeOnChange?: boolean
    openOnMounted?: boolean
    nowrap?: boolean
  }>(),
  {
    defaultSidebar: 'dashboard',
    theme: 'default',
  }
)

const emit = defineEmits(['exit'])

const viewWrapper = useViewWrapper()
const route = useRoute()
const isMobileSidebarOpen = ref(false)
const isDesktopSidebarOpen = ref(props.openOnMounted)
const activeMobileSubsidebar = ref(props.defaultSidebar)
const pageTitle = ref('  ')

function switchSidebar(id: string) {
  if (id === activeMobileSubsidebar.value) {
    isDesktopSidebarOpen.value = !isDesktopSidebarOpen.value
  } else {
    isDesktopSidebarOpen.value = true
    activeMobileSubsidebar.value = id
  }
}
function exit() {
  userStore.logout()
  router.push({ name: 'auth' })
}
/**
 * watchPostEffect callback will be executed each time dependent reactive values has changed
 */
watchPostEffect(() => {
  viewWrapper.setPushed(isDesktopSidebarOpen.value ?? false)

  console.log(pondStore.currentPond.name)
  console.log(farmStore.currentFarm.name)

  if (location.pathname === '/app/farm') {
    pageTitle.value = 'لیست مزارع'
  }
  if (location.pathname === '/app/pond') {
    pageTitle.value = 'لیست حوضچه ها'
  }
  if (location.pathname !== '/app/farm' && location.pathname !== '/app/pond') {
    if (location.pathname.includes('/app/farm')) {
      pageTitle.value = `مزرعه ${
        farmStore.currentFarm.name ? farmStore.currentFarm.name : 'نا مشخص'
      }`
    }
    if (location.pathname.includes('pond')) {
      pageTitle.value = `حوضچه ${
        pondStore.currentPond.name ? pondStore.currentPond.name : 'نا مشخص'
      }`
    }
  }
})
watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false
    if (location.pathname === '/app/farm') {
      pageTitle.value = 'لیست مزارع'
    }
    if (location.pathname === '/app/pond') {
      pageTitle.value = 'لیست حوضچه ها'
    }
    if (location.pathname !== '/app/farm' && location.pathname !== '/app/pond') {
      if (location.pathname.includes('/app/farm')) {
        pageTitle.value = `مزرعه ${
          farmStore.currentFarm.name ? farmStore.currentFarm.name : 'نا مشخص'
        }`
      }
      if (location.pathname.includes('pond')) {
        pageTitle.value = `حوضچه ${
          pondStore.currentPond.name ? pondStore.currentPond.name : 'نا مشخص'
        }`
      }
    }

    if (props.closeOnChange && isDesktopSidebarOpen.value) {
      isDesktopSidebarOpen.value = false
    }
  }
)
</script>

<template>
  <div class="sidebar-layout">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <AnimatedLogo width="38px" height="38px" />
        </RouterLink>

        <div class="brand-end">
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <RouterLink :to="{ name: 'app-farm' }"> لیست مزارع </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'app-pond' }"> لیست حوضچه‌ها </RouterLink>
        </li>
        <li>
          <a @click="exit()"> خروج </a>
        </li>
      </template>

      <template #bottom-links> </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <!-- <Transition name="slide-x">
      <DashboardsMobileSubsidebar
        v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'"
      />
    </Transition> -->

    <!--
    <Sidebar :theme="props.theme" :is-open="isDesktopSidebarOpen">
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            data-content="Dashboards"
            tabindex="0"
            @keydown.space.prevent="switchSidebar('dashboard')"
            @click="switchSidebar('dashboard')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:home"
            ></i>
          </a>
        </li>
      </template>
      <template #bottom-links>
        <li>
          <a
            data-content="Dashboards"
            tabindex="0"
            @keydown.space.prevent="switchSidebar('dashboard')"
            @click="emit('exit')"
          >
            <i
              aria-hidden="true"
              class="iconify sidebar-svg"
              data-icon="feather:arrow-right-circle"
            ></i>
          </a>
        </li>
      </template>
    </Sidebar>
    -->

    <DashboardsSidebar
      v-if="activeMobileSubsidebar === 'dashboard'"
      @close="isDesktopSidebarOpen = false"
    />

    <Transition name="slide-x"> </Transition>

    <!-- <LanguagesPanel /> -->

    <VViewWrapper>
      <VPageContentWrapper>
        <template v-if="props.nowrap">
          <slot></slot>
        </template>
        <VPageContent v-else class="is-relative">
          <div class="page-title has-text-centered">
            <div class="title-wrap">
              <!-- <h1 class="title is-4">{{ viewWrapper.pageTitle }}</h1> -->
              <h1 class="title is-4">{{ pageTitle }}</h1>
            </div>

            <Toolbar class="desktop-toolbar" />
          </div>

          <slot></slot>
        </VPageContent>
      </VPageContentWrapper>
    </VViewWrapper>
    <ToDoSidebar></ToDoSidebar>
  </div>
</template>
