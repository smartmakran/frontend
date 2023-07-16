<script setup lang="ts">
import { Field, useForm } from 'vee-validate'
import * as yup from 'yup'
import { ICreateFarm } from '/@src/interfaces/farm.interface'
import { useUserStore } from '/@src/stores/user'
import { useFarmStore } from '/@src/stores/farm'
import { useNotyf } from '/@src/composable/useNotyf'
import { defineProps } from 'vue'
const notyf = useNotyf()

const userStore = useUserStore()
const farmStore = useFarmStore()
const props = defineProps<{
  show: boolean
  closeForm: any
}>()
const schema = yup.object({
  name: yup.string().required('عنوان مزرعه الزامی است'),
  phone: yup.string().required('شماره تماس الزامی است'),
  country: yup.string().required('کشور الزامی است'),
  province: yup.string().required('استان الزامی است'),
  city: yup.string().required('شهر الزامی است'),
  address: yup.string().required('آدرس الزامی است'),
  lat: yup.string().required('مختصات الزامی است'),
  lng: yup.string().required('مختصات الزامی است'),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const createFarmForm = handleSubmit(async (values, action) => {
  const { name, phone, country, province, city, address, lat, lng } = values
  const createFarmBody: ICreateFarm = {
    owner: userStore.user.id,
    name: String(name),
    phones: [String(phone)],
    address: {
      country: String(country),
      province: String(province),
      city: String(city),
      address: String(address),
      coordinates: [Number(lat), Number(lng)],
    },
  }

  const result = await farmStore.createFarm(createFarmBody)
  if (result === 201) {
    console.log('Farm created successfully')
    farmStore.getFarmsList()
    notyf.success({
      message: 'مزرعه با موفقیت ایجاد شد',
      duration: 2000,
    })
    props.closeForm()
    action.resetForm()
  } else {
    console.log('Farm creation failed')
    notyf.error({
      message: 'مزرعه ایجاد نشد، دوباره سعی کنید.',
      duration: 2000,
    })
  }
})
</script>

<template>
  <VModal :open="show" @close="closeForm" title="ثبت مزرعه جدید">
    <template #content>
      <div class="">
        <form>
          <div>
            <div class="columns is-multiline">
              <div class="column is-6">
                <Field v-slot="{ field, errorMessage }" name="name">
                  <VField>
                    <label>عنوان مزرعه</label>
                    <VControl icon="feather:user" :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input input-icon"
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
                <Field v-slot="{ field, errorMessage }" name="phone">
                  <VField :has-error="Boolean(errorMessage)">
                    <label>شماره تماس</label>
                    <VControl
                      icon="feather:briefcase"
                      :has-error="Boolean(errorMessage)"
                      class="is-right"
                    >
                      <input
                        v-bind="field"
                        type="text"
                        class="input input-icon"
                        placeholder=""
                        autocomplete="organization"
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
            <div class="fieldset-heading">
              <h4>آدرس</h4>
              <p>نشانی کامل مزرعه را اینجا وارد کنید</p>
            </div>

            <div class="columns is-multiline">
              <div class="column is-4">
                <Field v-slot="{ field, errorMessage }" name="country">
                  <VField>
                    <label>کشور</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="organization"
                      />
                      <p v-if="errorMessage" class="help is-danger">
                        {{ errorMessage }}
                      </p>
                    </VControl>
                  </VField>
                </Field>
              </div>
              <div class="column is-4">
                <Field v-slot="{ field, errorMessage }" name="province">
                  <VField>
                    <label>استان</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="organization"
                      />
                      <p v-if="errorMessage" class="help is-danger">
                        {{ errorMessage }}
                      </p>
                    </VControl>
                  </VField>
                </Field>
              </div>
              <div class="column is-4">
                <Field v-slot="{ field, errorMessage }" name="city">
                  <VField>
                    <label>شهر</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="organization"
                      />
                      <p v-if="errorMessage" class="help is-danger">
                        {{ errorMessage }}
                      </p>
                    </VControl>
                  </VField>
                </Field>
              </div>
              <div class="column is-12">
                <Field v-slot="{ field, errorMessage }" name="address">
                  <VField>
                    <label>آدرس</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="organization"
                      />
                      <p v-if="errorMessage" class="help is-danger">
                        {{ errorMessage }}
                      </p>
                    </VControl>
                  </VField>
                </Field>
              </div>
              <div class="column is-6">
                <Field v-slot="{ field, errorMessage }" name="lat">
                  <VField>
                    <label>عرض جغرافیایی</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="organization"
                      />
                      <p v-if="errorMessage" class="help is-danger">
                        {{ errorMessage }}
                      </p>
                    </VControl>
                  </VField>
                </Field>
              </div>
              <div class="column is-6">
                <Field v-slot="{ field, errorMessage }" name="lng">
                  <VField>
                    <label>طول جغرافیایی</label>
                    <VControl :has-error="Boolean(errorMessage)">
                      <input
                        v-bind="field"
                        type="text"
                        class="input"
                        placeholder=""
                        autocomplete="organization"
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
        </form>
      </div>
    </template>
    <template #action>
      <VButton color="primary" @click="createFarmForm" raised>ثبت</VButton>
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
.input-icon {
  padding-right: 30px !important;
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
</style>
