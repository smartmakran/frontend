<script setup lang="ts">
import { useNotyf } from '/@src/composable/useNotyf'
import { useWizard } from '/@src/stores/wizard'

const notyf = useNotyf()
const wizard = useWizard()

const onAddFile = (error: any, fileInfo: any) => {
  if (error) {
    notyf.error(`${error.main}: ${error.sub}`)
    console.error(error)
    return
  }

  const _file = fileInfo.file as File
  if (_file) {
    wizard.data.logo = _file
  }
}

const onRemoveFile = (error: any, fileInfo: any) => {
  if (error) {
    notyf.error(error)
    console.error(error)
    return
  }

  console.log(fileInfo)

  wizard.data.logo = null
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">جزئیات پروژه</h2>
      <p>توضیحات و عنوان پروژه را درج بفرمائید</p>
    </div>

    <div class="project-info">
      <div class="project-info-head">
        <div class="project-avatar-upload">
          <VFilePond
            size="small"
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
            style-progress-indicator-position="left bottom"
            style-button-remove-item-position="right bottom"
            style-button-process-item-position="left bottom"
            @addfile="onAddFile"
            @removefile="onRemoveFile"
          />
          <p>
            <span>لوگویی برای پروژه انتخاب کنید</span>
            <span>حجم فایل انتخابی بیشتر از ۲ مگابایت نباشد</span>
          </p>
        </div>
        <div class="project-info">
          <div class="project-name">
            <VField>
              <VControl>
                <input
                  v-model="wizard.data.name"
                  class="input"
                  placeholder="عنوان پروژه"
                />
              </VControl>
            </VField>
          </div>
          <div class="project-description p-t-10">
            <VField>
              <VControl>
                <textarea
                  v-model="wizard.data.description"
                  class="textarea"
                  rows="4"
                  placeholder="توضیحات پروژه را وارد کنید..."
                ></textarea>
                <p v-if="wizard.data.description.length === 0" class="help">
                  حداقل ۵۰ حرف وارد کنید
                </p>
                <p v-else-if="wizard.data.description.length === 49" class="help">
                  {{ 50 - wizard.data.description.length }} حرف دیگر مجاز است
                </p>
                <p v-else-if="wizard.data.description.length < 50" class="help">
                  {{ 50 - wizard.data.description.length }} حرف دیگر مجاز است
                </p>
              </VControl>
            </VField>
            <VField>
              <label>دسته‌بندی پروژه</label>
              <VControl>
                <Multiselect
                  v-model="wizard.data.relatedTo"
                  label="value"
                  placeholder="لطفا انتخاب کنید"
                  :options="[
                    {
                      value: 'طراح رابط کاربری',
                    },
                    {
                      value: 'توسعه‌ی وب',
                    },
                    {
                      value: 'مارکتینگ',
                    },
                  ]"
                >
                </Multiselect>
              </VControl>
            </VField>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
