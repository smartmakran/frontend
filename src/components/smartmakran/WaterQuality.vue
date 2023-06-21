<script setup lang="ts">
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import moment from 'moment-jalaali'
import { defineProps } from 'vue'
import { useNotyf } from '/@src/composable/useNotyf'
import { useWaterQualityStore } from '/@src/stores/waterQuality'
import { IWaterQuality } from '/@src/interfaces/waterQuality.interface'
import { IPond } from '/@src/interfaces/pond.interface'
import { useFarmStore } from '/@src/stores/farm'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const notyf = useNotyf()
const farmStore = useFarmStore()
const waterQuality = useWaterQualityStore()
const route = useRoute()
const props = defineProps<{
  show: boolean
  closeModal: any
  showPondField: boolean
}>()

const schema = yup.object({
  ph: yup.number(),
  oxygen: yup.number(),
  orp: yup.number(),
  ec: yup.number(),
  ammonia: yup.number(),
  nitrite: yup.number(),
  temperature: yup.number(),
  createdAt: yup.string(),
  pond: yup.string(),
})
const { handleSubmit } = useForm({
  validationSchema: schema,
})

const waterQualityHandler = handleSubmit(async (values) => {
  const { createdAt } = values
  const time = moment.utc(createdAt).format('YYYY-MM-DD HH:mm:ss')
  const waterQualityBody: IWaterQuality = {
    ph: Math.floor(values.ph),
    oxygen: Math.floor(values.oxygen),
    orp: Math.floor(values.orp),
    ec: Math.floor(values.ec),
    ammonia: Math.floor(values.ammonia),
    nitrite: Math.floor(values.nitrite),
    temperature: Math.floor(values.temperature),
    createdAt: time,
    pond: !props.showPondField ? values.pond : route.params.id,
    sensorsKey: localStorage.getItem('sensorKey'),
  }

  const result = await waterQuality.waterQualityHandler(waterQualityBody)
  console.log(result)
  if (result !== 400 || result !== 404 || result !== 500) {
    console.log(result)
    console.log('Farm created successfully')
    notyf.success({
      message: 'میزان کیفیت آب باموفقیت ثبت شد',
    })
    props.closeModal()
    // farmStore.getFarmsList()
  } else {
    console.log(result)
    console.log('Farm creation failed')
    notyf.error({
      message: 'کیفیت آب ثبت نشد دوباره سعی کنید',
      duration: 2000,
    })
  }
})
let filteredPonds = computed<IPond[]>(() => {
  return farmStore.currentFarm.ponds || []
})
</script>

<template>
  <VModal :open="show" @close="closeModal" title="کیفیت آب">
    <template #content>
      <form class="form-fields">
        <div v-if="!showPondField" class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="pond">
            <VField>
              <label>استخر</label>
              <VControl :has-error="Boolean(errorMessage)">
                <select v-bind="field">
                  <option v-for="pond in filteredPonds" :key="pond.id" :value="pond.id">
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
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="ph">
            <VField>
              <label>میزان اسیدیته</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="ec">
            <VField>
              <label>شوری آب</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="oxygen">
            <VField>
              <label>اکسیژن</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="orp">
            <VField>
              <label>orp</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="ammonia">
            <VField>
              <label>آمونیاک</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="nitrite">
            <VField>
              <label>نیتریت</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <div class="form-fields-field mb-20px">
          <Field v-slot="{ field, errorMessage }" name="temperature">
            <VField>
              <label>دما</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div>
        <!-- <div class="form-fields-field mb-20px mb-0">
          <Field v-slot="{ field, errorMessage }" name="pond">
            <VField>
              <label>pond</label>
              <VControl :has-error="Boolean(errorMessage)">
                <input
                  v-bind="field"
                  type="text"
                  class="input"
                  placeholder=""
                  autocomplete="given-name"
                />
                <p v-if="errorMessage" class="help is-danger">
                  {{ errorMessage }}
                </p>
              </VControl>
            </VField>
          </Field>
        </div> -->
        <div class="form-fields-field mb-20px mb-0">
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
      </form>
    </template>
    <template #action>
      <VButton color="primary" @click="waterQualityHandler" raised>ثبت</VButton>
    </template>
  </VModal>
</template>
<style lang="scss">
select {
  height: 40px;
  border: 1px solid rgb(222, 222, 222);
  border-radius: 4px;
  padding: 0 10px;
  position: relative;
  color: rgb(60, 60, 60);
}

.mb-20px {
  margin-bottom: 20px;
}
@media screen and (min-width: 700px) {
  .form-fields {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .form-fields-field {
    width: 49%;
  }
  .mb-0 {
    margin-bottom: 0;
  }
}
</style>
