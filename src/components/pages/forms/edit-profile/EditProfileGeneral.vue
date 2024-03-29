<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const isUploading = ref(false)
const isLoading = ref(false)
const experience = ref('')
const firstJob = ref('')
const flexibility = ref('')
const remote = ref('')
const skills = ref(['software', 'saas', 'engineering'])
const skillsOptions = [
  { value: 'software', label: 'نرم‌افزار' },
  { value: 'saas', label: 'SaaS' },
  { value: 'engineering', label: 'مهندسی' },
]

const notyf = useNotyf()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

const onAddFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file added', file)
}
const onRemoveFile = (error: any, file: any) => {
  if (error) {
    console.error(error)
    return
  }

  console.log('file removed', file)
}
const onSave = async () => {
  isLoading.value = true
  await sleep()
  notyf.success('تغییرات شما با موفقیت ذخیره شد!')
  isLoading.value = false
}
</script>

<template>
  <div class="account-box is-form is-footerless">
    <div class="form-head stuck-header" :class="[isScrolling && 'is-stuck']">
      <div class="form-head-inner">
        <div class="left">
          <h3>اطلاعات عمومی</h3>
          <p>ویرایش اطلاعات عمومی حساب کاربری شما</p>
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
    <div class="form-body">
      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>تصویر پروفایل</h4>
          <p>دیگران شما را با تصویر پروفایل شناسایی می‌کنند</p>
        </div>

        <VAvatar size="xl" class="profile-v-avatar">
          <template #avatar>
            <img
              v-if="!isUploading"
              class="avatar"
              src="/images/avatars/svg/vuero-1.svg"
              alt=""
              @error.once="(event) => onceImageErrored(event, '150x150')"
            />
            <VFilePond
              v-else
              class="profile-filepond"
              name="profile_filepond"
              :chunk-retry-delays="[500, 1000, 3000]"
              label-idle="<i class='lnil lnil-cloud-upload'></i>"
              :accepted-file-types="['image/png', 'image/jpeg', 'image/gif']"
              :image-preview-height="140"
              :image-resize-target-width="140"
              :image-resize-target-height="140"
              image-crop-aspect-ratio="1:1"
              style-panel-layout="compact circle"
              style-load-indicator-position="center bottom"
              style-progress-indicator-position="right bottom"
              style-button-remove-item-position="left bottom"
              style-button-process-item-position="right bottom"
              @addfile="onAddFile"
              @removefile="onRemoveFile"
            />
            <VIconButton
              v-if="!isUploading"
              icon="feather:edit-2"
              class="edit-button is-edit"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = true"
              @click="isUploading = true"
            />
            <VIconButton
              v-else
              icon="feather:arrow-left"
              class="edit-button is-back"
              circle
              tabindex="0"
              @keydown.space.prevent="isUploading = false"
              @click="isUploading = false"
            />
          </template>
        </VAvatar>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>اطلاعات شخصی</h4>
          <p>دیگران سزاوار هستند که شما را بیشتر بشناسند</p>
        </div>

        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="اسم کوچک"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="نام خانوادگی"
                  autocomplete="family-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:briefcase">
                <input
                  type="text"
                  class="input"
                  placeholder="عنوان شغل"
                  autocomplete="organization-title"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl icon="feather:map-pin">
                <input
                  type="text"
                  class="input"
                  placeholder="موقعیت"
                  autocomplete="country-name"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <textarea
                  class="textarea"
                  rows="4"
                  placeholder="بایوگرافی"
                  autocomplete="off"
                  autocapitalize="off"
                  spellcheck="true"
                ></textarea>
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>اطلاعات تخصصی</h4>
          <p>این می تواند به شما در کسب برخی فرصت ها کمک کند</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl>
                <Multiselect
                  v-model="experience"
                  placeholder="تجربیات"
                  :options="['0-2 سال', '2-5 سال', '5-10 سال', '10+ سال']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl>
                <Multiselect
                  v-model="firstJob"
                  placeholder="آیا این اولین کار شماست؟"
                  :options="['بلی', 'نخیر']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl>
                <Multiselect
                  v-model="flexibility"
                  placeholder="آیا منعطف عمل می‌کنید؟"
                  :options="['بلی', 'نخیر']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl>
                <Multiselect
                  v-model="remote"
                  placeholder="آیا از راه دور کار می کنید؟"
                  :options="['بلی', 'نخیر']"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-12">
            <VField>
              <VControl>
                <Multiselect
                  v-model="skills"
                  mode="tags"
                  :searchable="true"
                  :create-tag="true"
                  :options="skillsOptions"
                  placeholder="افزودن برچسب"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div class="fieldset-heading">
          <h4>مشخصات اجتماعی</h4>
          <p>این می تواند به دیگران در یافتن شما در رسانه های اجتماعی کمک کند</p>
        </div>
        <div class="columns is-multiline">
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-facebook-f">
                <input
                  type="text"
                  class="input"
                  placeholder="آدرس فیسبوک"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-twitter">
                <input
                  type="text"
                  class="input"
                  placeholder="آدرس توئیتر"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-dribbble">
                <input
                  type="text"
                  class="input"
                  placeholder="آدرس دریبل"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-instagram">
                <input
                  type="text"
                  class="input"
                  placeholder="آدرس اینستاگرام"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-github">
                <input
                  type="text"
                  class="input"
                  placeholder="آدرس گیتهاب"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
          <!--Field-->
          <div class="column is-6">
            <VField>
              <VControl icon="fab fa-gitlab">
                <input
                  type="text"
                  class="input"
                  placeholder="آدرس گیت‌لب"
                  inputmode="url"
                />
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
