<script setup lang="ts">
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import moment from 'moment-jalaali'
import { usePondStore } from '/@src/stores/pond'
import { useNotyf } from '/@src/composable/useNotyf'
import { useFeedingCheckingStore } from '/@src/stores/feedingChecking'
import { useFarmStore } from '/@src/stores/farm'
import { IFeedingChecking } from '/@src/interfaces/feedingChecking.interface'

const notyf = useNotyf()
const pondStore = usePondStore()
const feedingStore = useFeedingCheckingStore()
const farmStore = useFarmStore()

const schema = yup.object({
  amount: yup.number().required('میزان غذادهی الزامی است'),
  type: yup.string().required('نوع غذا الزامی است'),
  createdAt: yup.string().required('وارد کردن تاریخ الزامی است'),
})
const { handleSubmit } = useForm({
  validationSchema: schema,
})
const feedingCheckingForm = handleSubmit(async (values) => {
  const { amount, type, createdAt } = values
  const time = moment.utc(createdAt).format('YYYY-MM-DD HH:mm:ss')
  const feedingBody: IFeedingChecking = {
    amount: Math.floor(amount),
    pond: pondStore.currentPond.id,
    createdAt: time,
    type: type,
  }
  const result = await feedingStore.feedingCheckingHandler(feedingBody)
  if (result !== 400 || result !== 404 || result !== 500) {
    console.log('Farm created successfully')
    // farmStore.getFarmsList()
    notyf.success({
      message: 'فرم غذادهی با موفیقیت ثبت شد',
    })
  } else {
    console.log('Farm creation failed')
    notyf.error({
      message: 'غذا دهی ثبت نشد',
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
              <h3>ثبت چک غذادهی</h3>
            </div>
            <div class="right">
              <div class="buttons">
                <VButton @click="feedingCheckingForm" color="primary" raised>ثبت</VButton>
              </div>
            </div>
          </div>
        </div>
        <div class="form-body">
          <div class="form-fieldset">
            <div class="columns is-multiline">
              <div class="column is-6">
                <Field v-slot="{ field, errorMessage }" name="amount">
                  <VField>
                    <label>میزان غذادهی</label>
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
                <Field v-slot="{ field, errorMessage }" name="type">
                  <VField>
                    <label>نوع غذا</label>
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
