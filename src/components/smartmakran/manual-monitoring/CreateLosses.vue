<script setup lang="ts">
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import moment from 'moment-jalaali'
import { usePondStore } from '/@src/stores/pond'
import { useNotyf } from '/@src/composable/useNotyf'
import { ILosses } from '/@src/interfaces/losses.interface'
import { useLossesStore } from '/@src/stores/losses'
import { ref } from 'vue'

const notyf = useNotyf()
const pondStore = usePondStore()
const lossesStore = useLossesStore()
const checked = ref(false)
const schema = yup.object({
  amountLosses:
    checked.value === false && yup.number().required('تعداد تلفات الزامی است'),
  weightLosses: checked.value === true && yup.number().required('وزن تلفات الزامی است'),
  createdAt: yup.string().required('وارد کردن تاریخ الزامی است'),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})
const createLossess = handleSubmit(async (values, action) => {
  const { amount, createdAt } = values
  const time = moment.utc(createdAt).format('YYYY-MM-DD HH:mm:ss')
  const lossesBody: ILosses = {
    pond: pondStore.currentPond.id,
    amount: Math.floor(checked.value === false ? amountLosses : weightLosses),
    type: checked.value === false ? 'amount' : 'weight',
    createdAt: time,
  }
  const result = await lossesStore.lossesHandler(lossesBody)

  if (result !== 400 || result !== 404 || result !== 500) {
    console.log(result)
    console.log('Farm created successfully')
    // notyf.green('تلفات با موفقیت ثبت شد')
    notyf.success({
      message: 'تلفات با موفقیت ثبت شد',
    })
    // farmStore.getFarmsList()
    action.resetForm()
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
  <div class="column is-6">
    <form class="form-layout">
      <div class="form-outer">
        <div class="form-header">
          <div class="form-header-inner">
            <div class="left">
              <h3>ثبت تلفات</h3>
            </div>
            <div class="right">
              <div class="buttons">
                <VButton color="primary" @click="createLossess" raised>ثبت</VButton>
              </div>
            </div>
          </div>
        </div>
        <div class="form-body">
          <label class="checked-draggable-container" for="checked">
            <span>وزن یا تعداد تلفات</span>
            <div class="checked-draggable">
              <input v-model="checked" type="checkbox" name="" id="" />
              <div class="checked-draggable-btn"></div>
            </div>
          </label>
          <div class="form-fieldset">
            <div v-if="checked" class="form-fields-field mb-20px">
              <Field v-slot="{ field, errorMessage }" name="weightLosses">
                <VField>
                  <label>وزن تلفات</label>
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

            <div v-if="!checked" class="form-fields-field mb-20px">
              <Field v-slot="{ field, errorMessage }" name="amountLosses">
                <VField>
                  <label>تعداد تلفات</label>
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
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-12">
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
