<script setup lang="ts">
import { ref } from 'vue'
import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const dropdownElement = ref<HTMLElement>()
const dropdown = useDropdown(dropdownElement)
</script>

<template>
  <div
    ref="dropdownElement"
    class="navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"
  >
    <a
      class="navbar-link is-arrowless"
      tabindex="0"
      @keydown.space.prevent="dropdown.toggle"
      @click="dropdown.toggle"
    >
      <i aria-hidden="true" class="iconify" data-icon="feather:bell"></i>
      <span class="new-indicator pulsate"></span>
    </a>
    <div class="navbar-dropdown is-boxed is-right">
      <div class="heading">
        <div class="heading-left">
          <h6 class="heading-title">اعلانات</h6>
        </div>
        <div class="heading-right">
          <a class="notification-link" href="#">مشاهده‌ی همه</a>
        </div>
      </div>
      <div class="inner has-slimscroll">
        <ul class="notification-list">
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-4.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info"><span class="name">آلیس</span> یک کامنت گذاشت.</p>
                <p class="time">1 ساعت پیش</p>
              </div>
            </a>
          </li>
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-2.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info">
                  <span class="name">آرنولد اینشتین</span> فایلی را آپلود کرد.
                </p>
                <p class="time">2 ساعت پیش</p>
              </div>
            </a>
          </li>
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-5.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info">
                  <span class="name">الیزابت چرچیل</span> پیغامی را برای شما ارسال کرد.
                </p>
                <p class="time">2 ساعت پیش</p>
              </div>
            </a>
          </li>
          <li>
            <a class="notification-item">
              <div class="img-left">
                <img
                  class="user-photo"
                  alt=""
                  src="/images/avatars/svg/vuero-9.svg"
                  @error.once="(event) => onceImageErrored(event, '150x150')"
                />
              </div>
              <div class="user-content">
                <p class="user-info"><span class="name">ملانی</span> یک کامنت گذاشت.</p>
                <p class="time">3 ساعت پیش</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
