<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-2" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">علی</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/demo/avatars/39.jpg"
          alt=""
          data-user-popover="33"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
      </div>
    </div>
    <div class="chat-area-main">
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/39.jpg"
            alt=""
            data-user-popover="33"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 9:34 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            سلام جمال ، من بازخوردی دارم که با شما به اشتراک بگذارم.
          </div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/apps/12.jpg"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">
            اگرچه من متخصص نیستم ، آنها را مرور کردم و ظاهر آنها عالی است.
          </div>
          <div class="chat-msg-text">هر چند ما باید چند تغییر ایجاد کنیم.</div>
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
          <div class="chat-msg-date">ارسال شده در 9:42 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            خوب به نظر می رسد. آیا می خواهید در اینجا ملاقات کنید یا فقط آن را بگذرانید؟
          </div>
          <div class="chat-msg-text">منظور من این است که من در حال حاضر آزاد هستم.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/39.jpg"
            alt=""
            data-user-popover="33"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 9:43 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">نه ، من جلسه ای دارم که ساعت 5 شروع می شود.</div>
          <div class="chat-msg-text">بیایید برای بعدازظهر چیزی برنامه ریزی کنیم.</div>
          <div class="chat-msg-text">و برای من دعوتنامه تقویم ارسال کنید.</div>
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
          <div class="chat-msg-date">ارسال شده در 9:43 صبح</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">خوب به نظر می رسد. انجام خواهد داد.</div>
          <div class="chat-msg-text">انجام شده.</div>
        </div>
      </div>
    </div>
  </div>
</template>
