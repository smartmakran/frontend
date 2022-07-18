<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import moment from 'moment-jalaali'

const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const jdate = moment().format('jYYYY-jMM-jDD')

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
</script>

<template>
  <form class="form-layout" @submit.prevent>
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>درخواست دمو</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-right rem-100"
                :to="{ name: 'sidebar-layouts-profile-view' }"
                light
                dark-outlined
              >
                کنسل
              </VButton>
              <VButton color="primary" raised> برنامه‌ریزی </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>اطلاعات شخصی</h4>
            <p>این اطلاعات به شناخت بیشتر شما کمک می‌کنند</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <label>اسم کوچک</label>
                <VControl icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="given-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>نام خانوادگی</label>
                <VControl icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <label>آدرس ایمیل</label>
                <VControl icon="feather:mail">
                  <input
                    type="email"
                    dir="ltr"
                    class="input"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>اطلاعات شرکت</h4>
            <p>در مورد شرکت خودتان بیشتر بگویید</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <label>نام شرکت</label>
                <VControl icon="feather:briefcase">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="organization"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>شماره تماس شرکت</label>
                <VControl icon="feather:phone">
                  <input
                    type="tel"
                    dir="ltr"
                    class="input"
                    placeholder=""
                    autocomplete="tel"
                    inputmode="tel"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>پرسنل شرکت</label>
                <VControl>
                  <Multiselect
                    v-model="companySize"
                    placeholder="یک مورد برگزینید"
                    :options="[
                      '1-5 کارمند',
                      '5-25 کارمند',
                      '25-50 کارمند',
                      '50-100 کارمند',
                      'بیش از 100 کارمند',
                    ]"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>نوع تجاری</label>
                <VControl>
                  <Multiselect
                    v-model="businessType"
                    placeholder="انتخاب یک مورد"
                    :options="['دولتی', 'پزشکی', 'مالی', 'خدماتی', 'تکنولوژی']"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-12">
              <VField>
                <label>ایمیل شرکت</label>
                <VControl icon="feather:mail">
                  <input
                    type="email"
                    dir="ltr"
                    class="input"
                    placeholder=""
                    autocomplete="email"
                    inputmode="email"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </div>
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>دموسازی</h4>
            <p>نحوه آماده‌سازی دموی خود را مشخص سازید</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <label>محصول مورد نظر</label>
                <VControl>
                  <Multiselect
                    v-model="productToDemo"
                    placeholder="انتخاب یک محصول"
                    :options="['ویوئِرو استارتر', 'ویوئِرو پرو', 'ویوئِرو تجاری']"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>تاریخ مورد انتظار</label>
                <VControl>
                  <date-picker
                    v-model="jdate"
                    class="control"
                    auto-submit
                    format="jYYYY/jMM/jDD"
                  ></date-picker>
                </VControl>
              </VField>
              <!--VDatePicker v-model="date" color="green" trim-weeks>
                <template #default="{ inputValue, inputEvents }">
                  <VField>
                    <label>تاریخ مورد انتظار</label>
                    <VControl icon="feather:calendar">
                      <input
                        class="input"
                        type="text"
                        placeholder="انتخاب تاریخ"
                        :value="inputValue"
                        v-on="inputEvents"
                      />
                    </VControl>
                  </VField>
                </template>
              </VDatePicker-->
            </div>
            <div class="column is-12">
              <VField>
                <label>توضیحات لازم</label>
                <VControl>
                  <textarea
                    class="textarea"
                    rows="4"
                    placeholder="در مورد هر گونه جزئیات که می خواهید ما بدانیم به ما بگویید..."
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="true"
                  ></textarea>
                </VControl>
              </VField>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

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
