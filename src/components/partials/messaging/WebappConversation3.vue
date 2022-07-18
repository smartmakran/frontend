<script setup lang="ts">
import { onceImageErrored } from '/@src/utils/via-placeholder'

const emit = defineEmits(['toggleMobileConversation'])
</script>

<template>
  <div id="navbar-conversation-3" class="chat-area-content">
    <div class="chat-area-header">
      <button
        class="trigger conversations-mobile-trigger h-only-mobile h-only-tablet-p h-only-tablet-l"
        @click="emit('toggleMobileConversation')"
      >
        <i aria-hidden="true" class="iconify" data-icon="feather:menu"></i>
      </button>
      <div class="chat-area-title">گروه کاری</div>
      <div class="chat-area-group">
        <img
          class="chat-area-profile"
          src="/images/avatars/svg/vuero-1.svg"
          alt=""
          data-user-popover="3"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
        <img
          class="chat-area-profile"
          src="/demo/avatars/13.jpg"
          alt=""
          data-user-popover="6"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
        <img
          class="chat-area-profile"
          src="/demo/avatars/19.jpg"
          alt=""
          data-user-popover="17"
          @error.once="(event) => onceImageErrored(event, '150x150')"
        />
        <span>
          <span>4</span>
        </span>
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
          <div class="chat-msg-date">ارسال شده در 4:15 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">این ابزار بازاریابی را تازه پیدا کردم.</div>
          <div class="chat-msg-text">
            <img
              src="/demo/photos/demo-apps/1.jpg"
              alt=""
              @error.once="(event) => onceImageErrored(event, '400x300')"
            />
          </div>
          <div class="chat-msg-text">
            ویژگی ها زیبا به نظر می رسند. آیا می توانیم آن را امتحان کنیم؟ کسی می خواهد
            بررسی کند؟
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
          <div class="chat-msg-date">ارسال شده در 4:15 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">مطمئناً ، سریع نگاه واقعی می کنم.</div>
          <div class="chat-msg-text">همچنین قصد دارم برنامه های موجود را بررسی کنم.</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/19.jpg"
            alt=""
            data-user-popover="17"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 4:27 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            آره باهاش آشنام. تو شرکت قبلی استفاده میکردیم. سریع و قابل اطمینانه
            <span role="img" aria-label="Smiling Face with Smiling Eyes">😊</span>.
          </div>
          <div class="chat-msg-text">
            منظورم این است که ارزش امتحان کردن را دارد و ما در حال حاضر به آن نیاز داریم.
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
          <div class="chat-msg-date">ارسال شده در 4:31 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">بله ، اما باید موارد استفاده را آزمایش کنم.</div>
          <div class="chat-msg-text">قبل از اطمینان نمی توانید ثبت نام کنید</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/12.jpg"
            alt=""
            data-user-popover="2"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 4:32 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">خخخ نترس اریک</div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/7.jpg"
            alt=""
            data-user-popover="0"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 4:32 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            خوب ، اریک دوباره به حالت مرغ می رود
            <span role="img" aria-label="Faces with Tears of Joy">😂😂😂</span>
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
          <div class="chat-msg-date">ارسال شده در 4:33 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            خدای من من نمیتونم کمکی کنم
            <span role="img" aria-label="Face with Tears of Joy">😂</span>
          </div>
        </div>
      </div>
      <div class="chat-msg">
        <div class="chat-msg-profile">
          <img
            class="chat-msg-img"
            src="/demo/avatars/32.jpg"
            alt=""
            data-user-popover="28"
            @error.once="(event) => onceImageErrored(event, '150x150')"
          />
          <div class="chat-msg-date">ارسال شده در 4:39 ب.ظ</div>
        </div>
        <div class="chat-msg-content">
          <div class="chat-msg-text">
            این مسخره تر و خنده دار تر می شود. شما باید عاشق تیم باشید
            <span role="img" aria-label="Smiling Face with Hearts">🥰</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
