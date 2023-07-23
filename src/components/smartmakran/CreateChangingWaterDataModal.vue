<script setup lang="ts">
import * as yup from 'yup'
import { Field, useForm } from 'vee-validate'
import moment from 'moment-jalaali'
import { usePondStore } from '/@src/stores/pond'
import { useNotyf } from '/@src/composable/useNotyf'
import { defineProps } from 'vue'
import { useFarmStore } from '/@src/stores/farm'
import { IPond } from '/@src/interfaces/pond.interface'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const notyf = useNotyf()
const pondStore = usePondStore()
const farmStore = useFarmStore()
const props = defineProps<{
  show: boolean
  closeModal: any
  showPondField: boolean
}>()

// changingWater data
const changingWaterSchema = yup.object({
  changingWaterAmount: yup.number().required('مقدار تعویض آب الزامی است'),
  changingWaterDate: yup.date().required('تاریخ تعویض آب الزامی است'),
  pond: !props.showPondField && yup.string().required('فیلد استخر الزامی است'),
})
let filteredPonds = computed<IPond[]>(() => {
  return farmStore.currentFarm.ponds || []
})
const { handleSubmit: handleSubmit } = useForm({
  validationSchema: changingWaterSchema,
})

const createChangingWaterDataHandler = handleSubmit(async (values, action) => {
  console.log(values)
  console.log('object')
  const { changingWaterAmount: amount, changingWaterDate: createdAt, pond } = values
  const pondId = props.showPondField ? route.params.id : pond
  const result = await pondStore.createChangingWaterData({
    amount: Number(amount),
    createdAt: moment(createdAt).utc(),
    pond: pondId,
  })
  console.log(Number(amount))
  if (result === 201) {
    notyf.success({
      message: 'اطلاعات ثبت شد.',
      duration: 2000,
    })
    props.closeModal()
    action.resetForm()
  } else {
    notyf.error({
      message: 'اطلاعات ثبت نشده‌اند، دوباره سعی کنید.',
      duration: 2000,
    })
  }
})
</script>

<template>
  <VModal title="تعویض آب" :open="show" @close="closeModal">
    <template #content>
      <form class="form-body form-body-responsive">
        <!--Fieldset-->
        <div class="form-fieldset" v-if="!showPondField">
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
              <Field v-slot="{ field, errorMessage }" name="changingWaterAmount">
                <VField>
                  <label>میزان تعویض آب</label>
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
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="columns is-multiline">
            <div class="column is-12">
              <Field v-slot="{ field, errorMessage }" name="changingWaterDate">
                <VField>
                  <label>تاریخ تعویض آب</label>
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
      </form>
    </template>
    <template #action>
      <VButton color="primary" @click="createChangingWaterDataHandler" raised
        >ثبت</VButton
      >
    </template>
  </VModal>
</template>

<style lang="scss">
@import '../../scss/abstracts/mixins';

.is-navbar {
  .form-layout {
    margin-top: 30px;
  }
}

.form-layout {
  max-width: 740px;
  margin: 0 auto;

  .form-outer {
    @include vuero-s-card;

    padding: 0;

    .form-header {
      padding: 12px 20px;
      border-bottom: 1px solid var(--fade-grey-dark-3);
      transition: all 0.3s; // transition-all test

      &.is-stuck {
        background: var(--white);
        padding-right: 80px;
        border-left: 1px solid var(--fade-grey-dark-3);
      }

      .form-header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .left {
        h3 {
          font-family: var(--font-alt);
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1.3;
        }

        p {
          font-size: 0.95rem;
        }
      }
    }

    .form-body {
      padding: 20px 40px 40px;
    }
  }
}

.is-dark {
  .form-layout {
    .form-outer {
      @include vuero-card--dark;

      .form-header {
        border-color: var(--dark-sidebar-light-12);

        &.is-stuck {
          background: var(--dark-sidebar);
          border-color: var(--dark-sidebar-light-6);
        }

        .left {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }

      .form-body {
        .field {
          .control {
            .input,
            .textarea {
              &:focus {
                border-color: var(--primary);
              }
            }
          }
        }
      }
    }
  }
}

.vpd-input-group {
  input {
    height: 38px;
    padding: calc(0.375em - 1px) calc(0.625em - 1px);
    border-radius: var(--radius) !important;
    direction: 'ltr';
  }
  label {
    border-radius: var(--radius) !important;
  }
}

@media only screen and (max-width: 767px) {
  .form-layout {
    .form-outer {
      .form-header {
        .form-header-inner {
          flex-direction: column;

          .left {
            text-align: center;
            margin-bottom: 12px;
          }

          .right {
            width: 100%;

            .buttons {
              display: flex;
              justify-content: space-between;
              margin: 0;

              .button {
                margin: 0;
                width: 49%;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 767px) {
  .form-body-responsive {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
    .form-fieldset {
      width: 100% !important;
    }
  }
}
</style>
