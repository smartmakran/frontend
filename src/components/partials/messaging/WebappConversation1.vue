<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-1" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">بهنوش بختیارزاده</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/11.jpg"
          alt=""
          data-user-popover="13"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/11.jpg"
            alt=""
            data-user-popover="13"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 1:03 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">سلام جمال ، چه خبر؟</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/7.png"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">
            فکر می کنم وقت آن رسیده است که اسلایدهای مورد بحث خود را مرور کنیم.
          </div>
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
          <div class="chat-msg-date">ارسال شده در 1:22 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            بله ، می دانم ، خب من از این بابت کمی بدبخت هستم
            <span role="img" aria-label="Faces with Tears of Joy">😂</span>.
          </div>
          <div class="chat-msg-text">من تا ساعت 4 صبح روی آن کار می کردم.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/11.jpg"
            alt=""
            data-user-popover="13"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 1:22 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">اوه خدای من! اینقدر به خودت فشار نیار!</div>
          <div class="chat-msg-text">فردا باید کمی استراحت کنی</div>
          <div class="chat-msg-text">جلسه ما ساعت چند برنامه ریزی شده بود؟</div>
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
          <div class="chat-msg-date">ارسال شده در 1:23 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">3:15 ب.ظ اعتقاد دارم.</div>
          <div class="chat-msg-text">اجازه دهید برنامه را بررسی کنم</div>
        </div>
      </div>
    </div>
  </div>
</template>
