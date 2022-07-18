<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const emit = defineEmits<{
  (e: 'update:conversationId', value: number): void
  (e: 'update:selectedConversationList', value: number[]): void
}>()
const props = withDefaults(
  defineProps<{
    conversationId?: number
    selectedConversationList?: number[]
  }>(),
  {
    conversationId: 0,
    selectedConversationList: () => [],
  }
)

const unread = ref(true)
const internalSelection = ref(props.selectedConversationList)

watchEffect(() => {
  emit('update:selectedConversationList', internalSelection.value)
})
</script>

<template>
  <div
    class="inbox-message"
    :class="[conversationId === 2 && 'is-selected', unread && 'is-unread']"
    @keydown.space.prevent="
      () => {
        unread = false
        emit('update:conversationId', 2)
      }
    "
    @click="
      () => {
        unread = false
        emit('update:conversationId', 2)
      }
    "
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="2" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">جاناتان کارگر</span>
      <span class="email">&lt;jonathan@vuero.ir&gt;</span>
      <span class="subject">
        <strong>نتوانستم شام دفعه قبل را جبران کنم</strong>
      </span>
    </div>
    <div class="pushed">22 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 1 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 1)"
    @click="() => emit('update:conversationId', 1)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="1" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">ملانی ولی زاده</span>
      <span class="email">&lt;melany@vuero.ir&gt;</span>
      <span class="subject">بررسی مهم پروژه پنجشنبه آینده</span>
    </div>
    <div class="pushed">21 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 3 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 3)"
    @click="() => emit('update:conversationId', 3)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="3" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">کبری کبیرزاده</span>
      <span class="email">&lt;greta@vuero.ir&gt;</span>
      <span class="subject"
        >فراموش نکنید که آن یادداشت های بودجه را برای من ارسال کنید</span
      >
    </div>
    <div class="pushed">20 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 4 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 4)"
    @click="() => emit('update:conversationId', 4)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="4" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">الیزابت ماهی فروش</span>
      <span class="email">&lt;elizabeth@vuero.ir&gt;</span>
      <span class="subject">ملاقات با مشتری جدید در روز دوشنبه</span>
    </div>
    <div class="pushed">19 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 5 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 5)"
    @click="() => emit('update:conversationId', 5)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="5" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">علی گودرزی</span>
      <span class="email">&lt;carmen@vuero.ir&gt;</span>
      <span class="subject">
        من چیزهای جالب و جدیدی دریافت کردم که حتماً باید ببینید
      </span>
    </div>
    <div class="pushed">19 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 6 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 6)"
    @click="() => emit('update:conversationId', 6)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="6" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">ایران وطنخواه</span>
      <span class="email">&lt;irina@vuero.ir&gt;</span>
      <span class="subject">گزارش تولید سرب در این ماه</span>
    </div>
    <div class="pushed">18 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 7 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 7)"
    @click="() => emit('update:conversationId', 7)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="7" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">علی ژاندارم</span>
      <span class="email">&lt;alejandro@vuero.ir&gt;</span>
      <span class="subject"> ایده های جدید طراحی از تیم تجربه کاربر </span>
    </div>
    <div class="pushed">18 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 8 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 8)"
    @click="() => emit('update:conversationId', 8)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="8" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">ادوارد فالان</span>
      <span class="email">&lt;edouard@vuero.ir&gt;</span>
      <span class="subject">داشبورد مشتری گزارش اشکال فوریه</span>
    </div>
    <div class="pushed">17 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 9 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 9)"
    @click="() => emit('update:conversationId', 9)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="9" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">سارینا کولبر</span>
      <span class="email">&lt;sandrine@vuero.ir&gt;</span>
      <span class="subject">به آخرین ایمیل من جواب ندادی!</span>
    </div>
    <div class="pushed">17 آبان</div>
  </div>
  <!--Message-->
  <div
    class="inbox-message"
    :class="[conversationId === 10 && 'is-selected']"
    tabindex="0"
    @keydown.space.prevent="() => emit('update:conversationId', 10)"
    @click="() => emit('update:conversationId', 10)"
  >
    <div class="message-checkbox">
      <label class="checkbox is-outlined is-primary">
        <input v-model="internalSelection" type="checkbox" :value="10" />
        <span></span>
      </label>
    </div>
    <div class="message-meta">
      <span class="name">بهنوش بختیارزاده</span>
      <span class="email">&lt;kelly@vuero.ir&gt;</span>
      <span class="subject">منتظر بررسی پروژه بعدی باشید</span>
    </div>
    <div class="pushed">16 آبان</div>
  </div>
</template>
