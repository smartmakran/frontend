<script setup lang="ts">
import { ref } from 'vue'

import { useDropdown } from '/@src/composable/useDropdown'
import { onceImageErrored } from '/@src/utils/via-placeholder'
import { isMediumScreen } from '/@src/utils/responsive'

const emit = defineEmits<{
  (e: 'update:mobileMessageOpen', value: boolean): void
}>()
const props = defineProps<{
  selected?: boolean
  mobileMessageOpen?: boolean
}>()

const dropdownElement1 = ref<HTMLElement>()
const dropdown1 = useDropdown(dropdownElement1)

const dropdownElement2 = ref<HTMLElement>()
const dropdown2 = useDropdown(dropdownElement2)
</script>

<template>
  <div
    :class="[
      props.mobileMessageOpen && props.selected && 'mobile-active tablet-active',
      isMediumScreen && !props.selected && 'is-hidden',
    ]"
    class="inbox-message-details"
  >
    <div class="header-area">
      <img
        class="sender-pic"
        src="/demo/avatars/32.jpg"
        alt=""
        @error.once="(event) => onceImageErrored(event, '150x150')"
      />
      <div class="message-meta">
        <span class="message-title"> نتوانستم شام دفعه قبل را جبران کنم</span>
        <span class="sender-email">&lt;jonathan@vuero.ir&gt;</span>
      </div>
      <div class="attachments inbox-hidden-mobile">
        <i aria-hidden="true" class="iconify" data-icon="feather:paperclip"></i>
        <span>4</span>
      </div>
      <div
        ref="dropdownElement1"
        class="dropdown inbox-dropdown dropdown-trigger is-left"
      >
        <div>
          <button
            class="button"
            tabindex="0"
            @keydown.space.prevent="dropdown1.toggle"
            @click="dropdown1.toggle"
          >
            <span class="icon is-small">
              <i aria-hidden="true" class="iconify" data-icon="feather:more-vertical"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu">
          <div class="dropdown-content">
            <a class="dropdown-item">
              <i aria-hidden="true" class="iconify" data-icon="feather:bookmark"></i>
              <span>Bookmark</span>
            </a>
            <a class="dropdown-item">
              <i aria-hidden="true" class="iconify" data-icon="feather:share-2"></i>
              <span>Share message</span>
            </a>
            <hr class="dropdown-divider" />
            <a class="dropdown-item">
              <i aria-hidden="true" class="iconify" data-icon="feather:thumbs-down"></i>
              <span>Mark as spam</span>
            </a>
          </div>
        </div>
      </div>
      <a
        class="inbox-action inbox-close-details-mobile"
        tabindex="0"
        @keydown.space.prevent="emit('update:mobileMessageOpen', false)"
        @click="emit('update:mobileMessageOpen', false)"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
      </a>
    </div>
    <!--Message-->
    <div class="message-wrapper has-slimscroll">
      <div class="message-inner">
        <div class="message-head">
          <div class="info">
            <span>ارسال شده در</span>
            <span>22 آبان 1400, در 09:17 صبح</span>
          </div>
          <div class="message-actions">
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:corner-up-left"
              ></i>
            </a>
            <a class="inbox-action">
              <i aria-hidden="true" class="iconify" data-icon="feather:file-text"></i>
            </a>
            <a class="inbox-action">
              <i aria-hidden="true" class="iconify" data-icon="feather:tag"></i>
            </a>
            <a class="inbox-action">
              <i
                aria-hidden="true"
                class="iconify"
                data-icon="feather:message-circle"
              ></i>
            </a>
            <a class="inbox-action">
              <i aria-hidden="true" class="iconify" data-icon="feather:lock"></i>
            </a>
          </div>
        </div>
        <!--Mail Content-->
        <div class="mail-content content">
          <p>سلام عزیز،</p>
          <p>
            و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            با هدف بهبود
            <em>چاپگرها و متون بلکه روزنامه و مجله در ستون</em> حال و آینده شناخت فراوان
            جامعه و متخصصان را می طلبد
          </p>
          <p>
            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
            خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            <em>ابزارهای کاربردی می باشد</em>
          </p>
          <p>
            <strong> حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد</strong>
            چاپگرها و متون بلکه روزنامه و مجله در ستون
          </p>
          <p>
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان
            امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
            رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی
          </p>

          <p>الی خوش مرام</p>
        </div>

        <!-- Attachments -->
        <div class="attachments-list">
          <div class="attachment">
            <span>presentation.ppt</span>
            <div class="download-icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-1.jpg</span>
            <div class="download-icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-2.jpg</span>
            <div class="download-icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i>
            </div>
          </div>
          <div class="attachment">
            <span>venue-3.jpg</span>
            <div class="download-icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:arrow-down"></i>
            </div>
          </div>
        </div>
      </div>

      <!--Reply-->
      <div class="reply-box-wrap">
        <div class="reply-bubble">
          <div class="reply-as">
            <img
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="(event) => onceImageErrored(event, '150x150')"
            />
            <div class="reply-details">
              <span>پاسخ‌دهی به عنوان</span>
              <span>erik@vuero.ir</span>
            </div>
            <div
              ref="dropdownElement2"
              class="dropdown inbox-dropdown dropdown-trigger is-left"
            >
              <div>
                <button
                  class="button"
                  tabindex="0"
                  @keydown.space.prevent="dropdown2.toggle"
                  @click="dropdown2.toggle"
                >
                  <span class="icon is-small">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:more-vertical"
                    ></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu">
                <div class="dropdown-content">
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:refresh-cw"
                    ></i>
                    <span>از نو سازی</span>
                  </a>
                  <a class="dropdown-item">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:align-left"
                    ></i>
                    <span>غلط‌گیری</span>
                  </a>
                  <a class="dropdown-item">
                    <i aria-hidden="true" class="iconify" data-icon="feather:at-sign"></i>
                    <span>Mention</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!--textarea-->
          <div class="control">
            <textarea
              class="textarea"
              rows="6"
              placeholder="پاسخ خود را بنویسید..."
            ></textarea>
            <button type="button" class="button">ارسال پاسخ</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
