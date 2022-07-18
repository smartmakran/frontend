<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-11" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">لری پیج</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/13.jpg"
            alt=""
            data-user-popover="6"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 7:48 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">در اینجا تعدادی اسکرین شات وجود دارد.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/15.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/9.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/7.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">امیدوارم از آنها خوشتان بیاید.</div>
        </div>
      </div>
      <div class="chat-msg owner">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/images/avatars/svg/vuero-1.svg"
            alt=""
            data-user-popover="3"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 10:21 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">به نظر عالی هستن!</div>
          <div class="chat-msg-text">ممنون از اشتراک گذاری این مطلب!</div>
        </div>
      </div>
    </div>
  </div>
</template>
