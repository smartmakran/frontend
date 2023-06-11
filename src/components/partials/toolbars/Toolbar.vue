<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import { useDarkmode } from '/@src/stores/darkmode'
import { usePanels } from '/@src/stores/panels'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
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
    <div class="toolbar-notifications is-hidden-mobile">
      <div
        ref="dropdownElement"
        class="dropdown is-spaced is-dots is-left dropdown-trigger"
      >
        <div
          tabindex="0"
          class="is-trigger"
          aria-haspopup="true"
          @click="dropdown.toggle"
          @keydown.space.prevent="dropdown.toggle"
        >
          <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
          <span class="new-indicator pulsate"></span>
        </div>
        <div class="dropdown-menu is-right" role="menu" style="left: 0; right: unset">
          <div class="dropdown-content">
            <div class="heading">
              <div class="heading-left">
                <h6 class="heading-title">اعلانات</h6>
              </div>
            </div>
            <ul class="notification-list">
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/images/avatars/svg/vuero-1.svg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info"><span class="name">علی: </span> در حال انجام</p>
                    <p class="time">یک ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/12.jpg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">کارشناس:</span> چک دستگاه هواساز استخر
                    </p>
                    <p class="time">دو ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/images/avatars/svg/vuero-1.svg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info"><span class="name">علی: </span> انجام شد.</p>
                    <p class="time">دو ساعت پیش</p>
                  </div>
                </a>
              </li>
              <li>
                <a class="notification-item">
                  <div class="img-left">
                    <img
                      class="user-photo"
                      alt=""
                      src="/demo/avatars/12.jpg"
                      @error.once="(event) => onceImageErrored(event, '150x150')"
                    />
                  </div>
                  <div class="user-content">
                    <p class="user-info">
                      <span class="name">کارشناس:</span>افزودن آب شیرین به دلیل شوری بیش
                      از اندازه استخر
                    </p>
                    <p class="time">سه ساعت پیش</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

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

    <!-- <a
      tabindex="0"
      class="toolbar-link right-panel-trigger"
      @keydown.space.prevent="panels.setActive('languages')"
      @click="panels.setActive('languages')"
    >
      <img :src="localFlagSrc" alt="" />
    </a> -->

    <slot></slot>
  </div>
</template>
