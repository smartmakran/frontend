<script setup lang="ts">
import { ref } from 'vue'
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import moment from 'moment-jalaali'
import { ILosses } from '/@src/interfaces/losses.interface'

import { defineProps } from 'vue'
import { computed } from 'vue'
import { IPond } from '/@src/interfaces/pond.interface'
import { useFarmStore } from '/@src/stores/farm'
import { useLossesStore } from '/@src/stores/losses'
import { useNotyf } from '/@src/composable/useNotyf'
import { useRoute } from 'vue-router'

const route = useRoute()
const notyf = useNotyf()
const farmStore = useFarmStore()
const lossesStore = useLossesStore()
const props = defineProps<{
  show: boolean
  closeModal: any
  showPondField: boolean
}>()
let filteredPonds = computed<IPond[]>(() => {
  return farmStore.currentFarm.ponds || []
})

const schema = yup.object({
  amountLosses: yup.number().required('تعداد تلفات الزامی است'),
  createdAt: yup.string().required('وارد کردن تاریخ الزامی است'),
  pondLosses: yup.string(),
})
const { handleSubmit } = useForm({
  validationSchema: schema,
})

const feedingCheckingForm = handleSubmit(async (values) => {
  const { amountLosses, createdAt, pondLosses } = values
  const time = moment.utc(createdAt).format('YYYY-MM-DD HH:mm:ss')
  const lossesBody: ILosses = {
    amount: Math.floor(amountLosses),
    pond: props.showPondField === false ? pondLosses : route.params.id,
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
  <VModal :open="show" @close="closeModal" title="ثبت تلفات">
    <template #content>
      <form>
        <div class="form-fields">
          <div v-if="!showPondField" class="form-fields-field mb-20px">
            <Field v-slot="{ field, errorMessage }" name="pondLosses">
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
      </form>
    </template>
    <template #action>
      <VButton color="primary" @click="feedingCheckingForm" raised>ثبت</VButton>
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
