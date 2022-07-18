<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { usePanels } from '/@src/stores/panels'

const darkmode = useDarkmode()
const { locale } = useI18n()
const panels = usePanels()

const localFlagSrc = computed(() => {
  switch (locale.value) {
    case 'fr':
      return '/images/icons/flags/france.svg'
    case 'es':
      return '/images/icons/flags/spain.svg'
    case 'es-MX':
      return '/images/icons/flags/mexico.svg'
    case 'de':
      return '/images/icons/flags/germany.svg'
    case 'zh-CN':
      return '/images/icons/flags/china.svg'
    case 'en':
      return '/images/icons/flags/united-states-of-america.svg'
    case 'fa':
    default:
      return '/images/icons/flags/iran.svg'
  }
})
</script>

<template>
  <div class="toolbar mr-auto">
    <div class="toolbar-link">
      <label
        tabindex="0"
        class="dark-mode ml-auto"
        @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
      >
        <input type="checkbox" :checked="!darkmode.isDark" @change="darkmode.onChange" />
        <span></span>
      </label>
    </div>

    <a
      tabindex="0"
      class="toolbar-link right-panel-trigger"
      @keydown.space.prevent="panels.setActive('languages')"
      @click="panels.setActive('languages')"
    >
      <img :src="localFlagSrc" alt="" />
    </a>

    <slot></slot>
  </div>
</template>
