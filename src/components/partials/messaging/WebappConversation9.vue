<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-9" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">جیمی</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/22.jpg"
          alt=""
          data-user-popover="5"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/22.jpg"
            alt=""
            data-user-popover="5"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 9:12 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">امروز باید زمانی پیوند دهیم</div>
          <div class="chat-msg-text">شما چه وقت در دسترس هستید؟</div>
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
          <div class="chat-msg-date">ارسال شده در 9:13 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">احتمالاً بعد از ظهر.</div>
          <div class="chat-msg-text">بهت میگم.</div>
        </div>
      </div>
    </div>
  </div>
</template>
