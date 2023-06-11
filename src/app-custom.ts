import { defineAsyncComponent } from 'vue'
import { SetupCalendar } from 'v-calendar'
import { plugin as VueTippy } from 'vue-tippy'

import { useNotyf } from './composable/useNotyf'

import type { VueroAppContext } from './app'
import { useUserStore } from './stores/user'

import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

// Lazy load aditional components
export async function registerGlobalComponents({ app }: VueroAppContext) {
  const background = (await import('./directives/background')).default
  const tooltip = (await import('./directives/tooltip')).default

  app.use(SetupCalendar, {})
  app.use(VueTippy, {
    component: 'Tippy',
    defaultProps: {
      theme: 'light',
    },
  })

  app.use(Vue3PersianDatetimePicker, {
    name: 'CustomDatePicker',
    props: {
      format: 'YYYY-MM-DD HH:mm',
      displayFormat: 'jYYYY-jMM-jDD HH:mm',
      editable: false,
      placeholder: 'یک تاریخ را انتخاب کنید',
      altFormat: 'YYYY-MM-DD hh:mm',
      color: '#41b983',
      autoSubmit: false,
    },
  })

  app.component(
    // eslint-disable-next-line vue/multi-word-component-names
    'Multiselect',
    defineAsyncComponent({
      loader: () => import('@vueform/multiselect').then((mod) => mod.default),
      delay: 0,
      suspensible: false,
    })
  )
  app.component(
    // eslint-disable-next-line vue/multi-word-component-names
    'Slider',
    defineAsyncComponent({
      loader: () => import('@vueform/slider').then((mod) => mod.default),
      delay: 0,
      suspensible: false,
    })
  )
  app.component(
    'VCalendar',
    defineAsyncComponent({
      loader: () => import('v-calendar').then((mod) => mod.Calendar),
      delay: 0,
      suspensible: false,
    })
  )
  app.component(
    'VDatePicker',
    defineAsyncComponent({
      loader: () => import('v-calendar').then((mod) => mod.DatePicker),
      delay: 0,
      suspensible: false,
    })
  )

  app.directive('background', background)
  app.directive('tooltip', tooltip)
}

/**
 * Here we are setting up two router navigation guards
 *
 * We can add meta to pages either by declaring them manualy in the
 * routes declaration (see /@src/router.ts)
 * or by adding a <route> tag into .vue files (see /@src/pages/sidebar/dashboards.ts)
 *
 * <route lang="yaml">
 * meta:
 *   requiresAuth: true
 * </route>
 *
 * <script setup lang="ts">
 *  // TS script
 * </script>
 *
 * <template>
 *  // HTML content
 * </template>
 */
export function registerRouterNavigationGuards({ router }: VueroAppContext) {
  router.beforeEach(async (to) => {
    const userStore = useUserStore()
    const notyf = useNotyf()

    if (to.meta.requiresAuth) {
      if (userStore.isLoggedIn) {
        const user = userStore.user
        // notyf.success(`خوش آمدید, ${user?.fullName}`)
      } else {
        notyf.error({
          message: 'لطفا ابتدا وارد سیستم شوید',
          duration: 5000,
        })

        return {
          // Will follow the redirection set in /@src/pages/auth/index.vue
          name: 'auth',
          // save the location we were at to come back later
          query: { redirect: to.fullPath },
        }
      }
    }
    if (to.path === '/auth/login' || to.path === '/auth/register') {
      if (userStore.isLoggedIn) {
        return {
          name: 'app',
        }
      }
    }
  })
}
