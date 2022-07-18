<script setup lang="ts">
import { ref } from 'vue'

import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
</script>

<template>
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
      <div class="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <div class="heading">
            <div class="heading-left">
              <h6 class="heading-title">اعلانات</h6>
            </div>
            <div class="heading-right">
              <RouterLink
                class="notification-link"
                :to="{ name: 'sidebar-layouts-profile-notifications' }"
              >
                مشاهده‌ی همه
              </RouterLink>
            </div>
          </div>
          <ul class="notification-list">
            <li>
              <a class="notification-item">
                <div class="img-left">
                  <img
                    class="user-photo"
                    alt=""
                    src="/demo/avatars/7.jpg"
                    @error.once="(event) => onceImageErrored(event, '150x150')"
                  />
                </div>
                <div class="user-content">
                  <p class="user-info"><span class="name">آلیس</span> کامنت گذاشت.</p>
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
                    <span class="name">آرنولد اینشتین</span> فایلی را آپلود کرد.
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
                    src="/demo/avatars/13.jpg"
                    @error.once="(event) => onceImageErrored(event, '150x150')"
                  />
                </div>
                <div class="user-content">
                  <p class="user-info">
                    <span class="name">الیزابت چرچیل</span> پیغام فقرستاده است.
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
                    src="/demo/avatars/25.jpg"
                    @error.once="(event) => onceImageErrored(event, '150x150')"
                  />
                </div>
                <div class="user-content">
                  <p class="user-info"><span class="name">ملانی</span> کامنت گذاشت.</p>
                  <p class="time">سه ساعت پیش</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
