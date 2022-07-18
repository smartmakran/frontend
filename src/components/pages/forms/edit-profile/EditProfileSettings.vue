<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const twoFactor = ref(true)
const notifications = ref(false)
const notificationsLow = ref(false)
const marketing = ref(false)
const partners = ref(false)

const isScrolling = computed(() => {
  return y.value > 30
})
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('Your changes have been successfully saved!')
  isLoading.value = false
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>تنظیمات</h3>
          <p>پیش تنظیمات و تنظیمات حساب خود را ویرایش کنید</p>
        </div>
        <div class="right">
          <div class="buttons">
            <VButton
              :to="{ name: 'sidebar-layouts-profile-view' }"
              icon="lnir lnir-arrow-right rem-100"
              light
              dark-outlined
            >
              برگشت
            </VButton>
            <VButton
              color="primary"
              raised
              :loading="isLoading"
              tabindex="0"
              @keydown.space.prevent="onSave"
              @click="onSave"
            >
              ذخیره تغییرات
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <form class="form-body" @submit.prevent="onSave">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>تغییر گذرواژه</h4>
          <p>برای افزایش امنیت حساب</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:unlock">
                <input
                  type="password"
                  class="input"
                  placeholder="گذرواژه قبلی"
                  autocomplete="current-password"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:lock">
                <input
                  type="password"
                  class="input"
                  placeholder="گذرواژه جدید"
                  autocomplete="new-password"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:lock">
                <input
                  type="password"
                  class="input"
                  placeholder="تکرار گذرواژه جدید"
                  autocomplete="new-password"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>ورود ۲ مرحله‌ای</h4>
          <p>فعال یا غیرفعال کردن ورود ۲ مرحله‌ای</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="twoFactor"
                  label="فعال یا غیر فعال کردن ۲ مرحله‌ای"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div v-if="twoFactor" class="column is-12">
            <VField>
              <VControl icon="feather:smartphone">
                <input
                  type="text"
                  class="input"
                  placeholder="شماره تماس"
                  autocomplete="tel"
                  inputmode="tel"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>اعلانات</h4>
          <p>نحوه دریافت اعلان ها را پیکربندی کنید</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="notifications"
                  label="همه اعلان ها را غیرفعال کنید"
                  color="primary"
                />
              </VControl>
            </VField>

            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="notificationsLow"
                  label="اعلان های دارای اولویت پایین را غیرفعال کنید"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>مارکتینگ</h4>
          <p>نحوه دریافت تبلیغات را پیکربندی کنید</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="marketing"
                  label="ایمیل های بازاریابی را فعال کنید"
                  color="primary"
                />
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VSwitchBlock
                  v-model="partners"
                  label="فعال کردن ایمیل های شرکا"
                  color="primary"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
