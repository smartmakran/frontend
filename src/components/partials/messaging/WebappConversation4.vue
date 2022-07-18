<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-4" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">آلیس</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/7.jpg"
          alt=""
          data-user-popover="0"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/7.jpg"
            alt=""
            data-user-popover="0"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 10:11 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            سلام اریک من چند صفحه دارم که به شما نشان می دهم.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/11.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400X300')"
            />
          </div>
          <div class="chat-msg-text">این یکی بسیار رنگی است ، من آن را دوست دارم.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/9.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400X300')"
            />
          </div>
          <div class="chat-msg-text">من منحنی های این یکی را دوست دارم.</div>
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
          <div class="chat-msg-date">ارسال شده در 10:44 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">به نظر خوب میاد.</div>
          <div class="chat-msg-text">می خواهید همگام سازی کنید؟</div>
        </div>
      </div>
    </div>
  </div>
</template>
