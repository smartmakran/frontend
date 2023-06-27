<script setup lang="ts">
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import moment from 'moment-jalaali'
import { usePondStore } from '/@src/stores/pond'
import { useNotyf } from '/@src/composable/useNotyf'
import { useWaterQualityStore } from '/@src/stores/waterQuality'
import { IWaterQuality } from '/@src/interfaces/waterQuality.interface'

const notyf = useNotyf()
const pondStore = usePondStore()
const waterQuality = useWaterQualityStore()
const schema = yup.object({
  ph: yup.number().required('وارد کردن pH الزامی است'),
  oxygen: yup.number().required('وارد کردن اکسیژن الزامی است'),
  orp: yup.number().required('وارد کردن orp الزامی است'),
  ec: yup.number().required('وارد کردن میزان شوری الزامی است'),
  ammonia: yup.number().required('وارد کردن آمونیاک الزامی است'),
  nitrite: yup.number().required('وارد کردن نیتریت الزامی است'),
  temperature: yup.number().required('وارد کردن دما الزامی است'),
  createdAt: yup.string().required('وارد کردن تاریخ الزامی است'),
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
    pond: pondStore.currentPond.id,
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
</script>

<template>
  <div class="column is-12">
    <form class="form-layout">
      <div class="form-outer">
        <div class="form-header">
          <div class="form-header-inner">
            <div class="left">
              <h3>اندازه گیری</h3>
            </div>
            <div class="right">
              <div class="buttons">
                <VButton color="primary" raised @click="waterQualityHandler">ثبت</VButton>
              </div>
            </div>
          </div>
        </div>
        <div class="form-body">
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-4">
                <Field v-slot="{ field, errorMessage }" name="ph">
                  <VField>
                    <label>pH</label>
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
              <div class="column is-4">
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
              <div class="column is-4">
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
            </div>
          </div>
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-4">
                <Field v-slot="{ field, errorMessage }" name="orp">
                  <VField>
                    <label>ORP</label>
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
              <div class="column is-4">
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
              <div class="column is-4">
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
            </div>
          </div>
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-6">
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
              <div class="column is-6">
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
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
