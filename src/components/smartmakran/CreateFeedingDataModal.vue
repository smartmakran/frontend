<script setup lang="ts">
import { defineProps } from 'vue'
import { computed } from 'vue'
import { IPond } from '/@src/interfaces/pond.interface'
import { usePondStore } from '/@src/stores/pond'
import { useFarmStore } from '/@src/stores/farm'
import { useNotyf } from '/@src/composable/useNotyf'
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import { useFeedingCheckingDataStore } from '/@src/stores/feedingCheckingData'
import { IFeedingCheckingData } from '/@src/interfaces/feeding_checking_data.interface'
import moment from 'moment-jalaali'
import { useRoute } from 'vue-router'
const route = useRoute()
const notyf = useNotyf()
const pondStore = usePondStore()
const farmStore = useFarmStore()

let filteredPonds = computed<IPond[]>(() => {
  return farmStore.currentFarm.ponds || []
})
const feedingCheckingDataStore = useFeedingCheckingDataStore()

const props = defineProps<{
  show: boolean
  closeModal: any
  showPondField: boolean
}>()

const schema = yup.object({
  pond: yup.string(),
  status: yup.string(),
  createdAt: yup.string().required('وارد کردن تاریخ الزامی است'),
})
const { handleSubmit: handleSubmit } = useForm({
  validationSchema: schema,
})

const feedingChecking = handleSubmit(async (values) => {
  const { status, pond, createdAt } = values
  console.log(values)
  const time = moment.utc(createdAt).format('YYYY-MM-DD HH:mm:ss')
  const feedingBody: IFeedingCheckingData = {
    pond: !props.showPondField ? pond : route.params.id,
    status: status,
    createdAt: time,
  }
  const result = await feedingCheckingDataStore.feedingCheckingDataHandler(feedingBody)
  console.log(result)
  if (result !== 400 || result !== 404 || result !== 500) {
    console.log(result)
    console.log('Farm created successfully')
    // notyf.green('تلفات با موفقیت ثبت شد')
    notyf.success({
      message: 'تلفات با موفقیت ثبت شد',
    })
    // farmStore.getFarmsList()
  } else {
    console.log(result)
    console.log('Farm creation failed')
    notyf.error({
      message: 'مزرعه ایجاد نشد، دوباره سعی کنید.',
      duration: 2000,
    })
  }
})
</script>

<template>
  <VModal title="چک غذادهی" :open="show" @close="closeModal">
    <template #content>
      <form class="form-body form-body-responsive">
        <!--Fieldset-->

        <div class="form-fieldset">
          <div class="columns is-multiline">
            <div class="column is-12">
              <Field v-slot="{ field, errorMessage }" name="pond">
                <VField>
                  <label>استخر</label>
                  <VControl :has-error="Boolean(errorMessage)">
                    <select v-bind="field">
                      <option
                        v-for="pond in filteredPonds"
                        :key="pond.id"
                        :value="pond.id"
                      >
                        {{ pond.name }}
                      </option>
                    </select>
                    <p v-if="errorMessage" class="help is-danger">
                      {{ errorMessage }}
                    </p>
                  </VControl>
                </VField>
              </Field>
            </div>
          </div>
        </div>
        <div class="form-fieldset">
          <div class="columns is-multiline">
            <div class="column is-12">
              <Field v-slot="{ field, errorMessage }" name="status">
                <VField>
                  <label>وضعیت</label>
                  <VControl :has-error="Boolean(errorMessage)">
                    <select v-bind="field">
                      <option value="خورده">خورده</option>
                      <option value="نخورده">نخورده</option>
                    </select>
                    <p v-if="errorMessage" class="help is-danger">
                      {{ errorMessage }}
                    </p>
                  </VControl>
                </VField>
              </Field>
            </div>
          </div>
        </div>
        <div class="mb-20px mb-0">
          <Field v-slot="{ field, errorMessage }" name="createdAt">
            <VField>
              <label>تاریخ</label>
              <VControl :has-error="Boolean(errorMessage)">
                <custom-date-picker
                  v-bind="field"
                  type="datetime"
                  compact-time
                ></custom-date-picker>
              </VControl>
              <p v-if="errorMessage" class="help is-danger">
                {{ errorMessage }}
              </p>
            </VField>
          </Field>
        </div>
        <!--Fieldset-->
      </form>
    </template>
    <template #action
      ><VButton color="primary" @click="feedingChecking" raised>ثبت</VButton></template
    >
  </VModal>
</template>
