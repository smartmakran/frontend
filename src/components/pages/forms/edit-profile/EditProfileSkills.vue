<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useNotyf } from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'

const notyf = useNotyf()
const { y } = useWindowScroll()

const isLoading = ref(false)
const isEditingLanguages = ref(false)
const isEditingSkills = ref(false)
const isEditingTools = ref(false)

const selectedLanguage = ref('')
const selectedLanguageLevel = ref('')

const selectedSkill = ref('')
const selectedSkillLevel = ref('')

const selectedTool = ref('')
const selectedToolLevel = ref('')

const isScrolling = computed(() => {
  return y.value > 30
})
const addLanguage = async () => {
  isEditingLanguages.value = false
  await onSave()
  selectedLanguage.value = ''
  selectedLanguageLevel.value = ''
}
const addSkill = async () => {
  isEditingSkills.value = false
  await onSave()
  selectedSkill.value = ''
  selectedSkillLevel.value = ''
}
const addTool = async () => {
  isEditingTools.value = false
  await onSave()
  selectedTool.value = ''
  selectedToolLevel.value = ''
}
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
          <h3>مهارتها و ابزارها</h3>
          <p>مهارت ها و ابزارهای خود را ویرایش کنید</p>
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
        <div v-if="!isEditingLanguages" class="fieldset-heading">
          <h4>زبان‌ها</h4>
          <p>شما به چند زبان صحبت می کنید؟</p>
        </div>
        <div v-else class="fieldset-heading">
          <a
            class="action-link"
            tabindex="0"
            @keydown.space.prevent="isEditingLanguages = false"
            @click="isEditingLanguages = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form
            v-if="isEditingLanguages"
            class="setting-form"
            @submit.prevent="addLanguage"
          >
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField class="is-image-select">
                    <VControl>
                      <Multiselect
                        v-model="selectedLanguage"
                        placeholder="انتخاب زبان"
                        label="name"
                        :options="[
                          {
                            value: 'persian',
                            name: 'فارسی',
                            icon: '/images/icons/flags/iran.svg',
                          },
                          {
                            value: 'english',
                            name: 'انگلیسی',
                            icon: '/images/icons/flags/united-states-of-america.svg',
                          },
                          {
                            value: 'french',
                            name: 'فرانسوی',
                            icon: '/images/icons/flags/france.svg',
                          },
                          {
                            value: 'german',
                            name: 'آلمانی',
                            icon: '/images/icons/flags/germany.svg',
                          },
                          {
                            value: 'spanish',
                            name: 'اسپانیایی',
                            icon: '/images/icons/flags/spain.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img class="select-label-icon" :src="value.icon" alt="" />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img class="select-option-icon" :src="option.icon" alt="" />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl>
                      <Multiselect
                        v-model="selectedLanguageLevel"
                        placeholder="انتخاب سطح خود"
                        :options="[
                          {
                            value: '1',
                            label: 'سطح 1',
                          },
                          {
                            value: '2',
                            label: 'سطح 2',
                          },
                          {
                            value: '3',
                            label: 'سطح 3',
                          },
                          {
                            value: '4',
                            label: 'سطح 4',
                          },
                        ]"
                      >
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl icon="feather:message-circle">
                      <input
                        type="text"
                        class="input"
                        placeholder="یک نظر سریع بنویسید..."
                        autocomplete="off"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl>
                      <VButton color="primary" icon="fas fa-plus" raised fullwidth>
                        Add Language
                      </VButton>
                    </VControl>
                  </VField>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/united-states-of-america.svg" />

              <div class="meta">
                <span class="dark-inverted">انگلیسی</span>
                <span>گوینده بومی ، روان</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/france.svg" />

              <div class="meta">
                <span class="dark-inverted">فرانسوی</span>
                <span>روان ، مکتوب و گفتاری</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/germany.svg" />

              <div class="meta">
                <span class="dark-inverted">آلمانی</span>
                <span>سطح مبتدی</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Experience Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/flags/spain.svg" />

              <div class="meta">
                <span class="dark-inverted">اسپانیایی</span>
                <span>سطح مبتدی</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">آیتم جدید</span>
                <span>یک مورد زبان جدید اضافه کنید</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingLanguages = true"
                  @click="isEditingLanguages = true"
                >
                  افزودن
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div v-if="!isEditingSkills" class="fieldset-heading">
          <h4>مهارت‌ها</h4>
          <p>بهترین مهارت های خود را اضافه کنید</p>
        </div>
        <div v-else class="fieldset-heading">
          <a
            class="action-link"
            tabindex="0"
            @keydown.space.prevent="isEditingSkills = false"
            @click="isEditingSkills = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form v-if="isEditingSkills" class="setting-form" @submit.prevent="addSkill">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField class="is-image-select">
                    <VControl>
                      <Multiselect
                        v-model="selectedSkill"
                        placeholder="یک مهارت را انتخاب کنید"
                        label="name"
                        :options="[
                          {
                            value: 'html',
                            name: 'Html5',
                            icon: '/images/icons/stacks/html5.svg',
                          },
                          {
                            value: 'css',
                            name: 'CSS3',
                            icon: '/images/icons/stacks/css3.svg',
                          },
                          {
                            value: 'javascript',
                            name: 'جاوا اسکریپت',
                            icon: '/images/icons/stacks/js.svg',
                          },
                          {
                            value: 'react',
                            name: 'React',
                            icon: '/images/icons/stacks/reactjs.svg',
                          },
                          {
                            value: 'angular',
                            name: 'آنگولار',
                            icon: '/images/icons/stacks/angular.svg',
                          },
                          {
                            value: 'vueJs',
                            name: 'VueJs',
                            icon: '/images/icons/stacks/vuejs.svg',
                          },
                          {
                            value: 'nodejs',
                            name: 'NodeJS',
                            icon: '/images/icons/stacks/nodejs.svg',
                          },
                          {
                            value: 'csharp',
                            name: 'سی شارپ',
                            icon: '/images/icons/stacks/csharp.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img class="select-label-icon" :src="value.icon" alt="" />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img class="select-option-icon" :src="option.icon" alt="" />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl>
                      <Multiselect
                        v-model="selectedSkillLevel"
                        placeholder="سال‌های تجربه"
                        :options="[
                          {
                            value: '1',
                            label: '1 سال تجربه',
                          },
                          {
                            value: '2',
                            label: '2 سال تجربه',
                          },
                          {
                            value: '3',
                            label: '3 سال تجربه',
                          },
                          {
                            value: '4',
                            label: '4 سال تجربه',
                          },
                          {
                            value: '5',
                            label: '5 سال تجربه',
                          },
                          {
                            value: '6',
                            label: '6 سال تجربه',
                          },
                          {
                            value: '7',
                            label: '7 سال تجربه',
                          },
                          {
                            value: '8',
                            label: '8 سال تجربه',
                          },
                          {
                            value: '9',
                            label: '9 سال تجربه',
                          },
                          {
                            value: '+10',
                            label: '+10 سال تجربه',
                          },
                        ]"
                      >
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl>
                      <VButton color="primary" icon="fas fa-plus" raised fullwidth>
                        افزودن مهارت
                      </VButton>
                    </VControl>
                  </VField>
                </div>
              </div>
            </div>
          </form>
          <template v-else>
            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/js.svg" />

              <div class="meta">
                <span class="dark-inverted">جاوا اسکریپت</span>
                <span>7 سال تجربه</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/html5.svg" />

              <div class="meta">
                <span class="dark-inverted">Html5</span>
                <span>10+ سال تجربه</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/css3.svg" />

              <div class="meta">
                <span class="dark-inverted">CSS3</span>
                <span>10+ سال تجربه</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">آیتم جدید</span>
                <span>افزودن مورد مهارت جدید</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingSkills = true"
                  @click="isEditingSkills = true"
                >
                  افزودن
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--Fieldset-->
      <div class="fieldset">
        <div v-if="!isEditingTools" class="fieldset-heading">
          <h4>ابزار</h4>
          <p>ابزارهایی را که با آنها کار می کنید اضافه کنید</p>
        </div>
        <div v-else class="fieldset-heading">
          <a
            class="action-link"
            tabindex="0"
            @keydown.space.prevent="isEditingTools = false"
            @click="isEditingTools = false"
          >
            Cancel
          </a>
        </div>

        <div class="setting-list">
          <!--Inner Form-->
          <form v-if="isEditingTools" class="setting-form" @submit.prevent="addTool">
            <div class="field-wrap">
              <div class="columns is-multiline">
                <div class="column is-6">
                  <VField class="is-image-select">
                    <VControl>
                      <Multiselect
                        v-model="selectedTool"
                        placeholder="ابزار انتخاب کنید"
                        label="name"
                        :options="[
                          {
                            value: 'illustrator',
                            name: 'ایلاستریتور',
                            icon: '/images/icons/stacks/illustrator.svg',
                          },
                          {
                            value: 'photoshop',
                            name: 'فتوشاپ',
                            icon: '/images/icons/stacks/photoshop.svg',
                          },
                          {
                            value: 'jira',
                            name: 'نرم‌افزار جیرا',
                            icon: '/demo/photos/tools/jira.svg',
                          },
                          {
                            value: 'office',
                            name: 'مایکروسافت آفیس',
                            icon: '/demo/photos/tools/office.svg',
                          },
                        ]"
                      >
                        <template #singlelabel="{ value }">
                          <div class="multiselect-single-label">
                            <img class="select-label-icon" :src="value.icon" alt="" />
                            <span class="select-label-text">
                              {{ value.name }}
                            </span>
                          </div>
                        </template>
                        <template #option="{ option }">
                          <img class="select-option-icon" :src="option.icon" alt="" />
                          <span class="select-label-text">
                            {{ option.name }}
                          </span>
                        </template>
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <VControl>
                      <Multiselect
                        v-model="selectedToolLevel"
                        placeholder="انتخاب سطح خود"
                        :options="[
                          {
                            value: '1',
                            label: 'سطح 1',
                          },
                          {
                            value: '2',
                            label: 'سطح 2',
                          },
                          {
                            value: '3',
                            label: 'سطح 3',
                          },
                          {
                            value: '4',
                            label: 'سطح 4',
                          },
                          {
                            value: '5',
                            label: 'سطح 5',
                          },
                        ]"
                      >
                      </Multiselect>
                    </VControl>
                  </VField>
                </div>
                <div class="column is-12">
                  <VField>
                    <VControl>
                      <VButton color="primary" icon="fas fa-plus" raised fullwidth>
                        افزودن ابزار
                      </VButton>
                    </VControl>
                  </VField>
                </div>
              </div>
            </div>
          </form>

          <template v-else>
            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/images/icons/stacks/illustrator.svg" />

              <div class="meta">
                <span class="dark-inverted">ایلاستریتور</span>
                <span>سطح پیشرفته</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/demo/photos/tools/jira.svg" />

              <div class="meta">
                <span class="dark-inverted">نرم‌افزار جیرا</span>
                <span>سطح متوسط</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Skill Item-->
            <div class="setting-item">
              <VIconWrap picture="/demo/photos/tools/office.svg" />

              <div class="meta">
                <span class="dark-inverted">مایکروسافت آفیس</span>
                <span>سطح تخصصی</span>
              </div>
              <div class="end">
                <EditSettingItemDropdown />
              </div>
            </div>

            <!--Create Item-->
            <div class="setting-item is-create">
              <VIconWrap icon="lnil lnil-circle-plus" />

              <div class="meta">
                <span class="dark-inverted">آیتم جدید</span>
                <span>مورد ابزار جدید اضافه کنید</span>
              </div>
              <div class="end">
                <VButton
                  raised
                  dark-outlined
                  icon="fas fa-plus"
                  class="add-setting-item"
                  tabindex="0"
                  @keydown.space.prevent="isEditingTools = true"
                  @click="isEditingTools = true"
                >
                  افزودن
                </VButton>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
