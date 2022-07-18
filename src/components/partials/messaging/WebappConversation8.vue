<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-8" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">ملانی</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/25.jpg"
          alt=""
          data-user-popover="4"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/25.jpg"
            alt=""
            data-user-popover="7"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 9:43 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">به تازگی اجرای این یکی را به پایان رسانده اید.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/13.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">من با سرفصل ها مشکلاتی دارم.</div>
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
          <div class="chat-msg-date">ارسال شده در 9:43 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">به موقع ، ممنون</div>
          <div class="chat-msg-text">آیا برای آن روابط عمومی باز دارید؟</div>
        </div>
      </div>
    </div>
  </div>
</template>
