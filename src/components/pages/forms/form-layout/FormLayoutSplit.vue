<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const bankAccount = ref('')
const transferFees = ref('')

const { y } = useWindowScroll()

const isStuck = computed(() => {
  return y.value > 30
})
</script>

<template>
  <form class="form-layout is-split" @submit.prevent>
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>تقاضای وجه</h3>
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
              <VButton color="primary" raised> تقاضای وجه </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <div class="form-section">
          <div class="left">
            <h3 class="has-text-centered">انتخاب مقدار پول</h3>
            <div class="operator">
              <span>یا</span>
            </div>
            <VField>
              <VControl>
                <div class="radio-pills">
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="20" />
                    <div class="radio-pill-inner">
                      <span>100,000 تومان</span>
                    </div>
                  </div>
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="40" />
                    <div class="radio-pill-inner">
                      <span>200,000 تومان</span>
                    </div>
                  </div>
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="60" />
                    <div class="radio-pill-inner">
                      <span>500,000 تومان</span>
                    </div>
                  </div>
                  <div class="radio-pill">
                    <input type="radio" name="amount_selection" :value="100" />
                    <div class="radio-pill-inner">
                      <span>1,000,000 تومان</span>
                    </div>
                  </div>
                </div>
              </VControl>
            </VField>
          </div>
          <div class="right">
            <h3 class="has-text-centered">مقدار دلخواه</h3>
            <VField>
              <VControl icon="feather:dollar-sign">
                <input
                  class="input"
                  type="number"
                  min="0"
                  step="10"
                  placeholder="مقدار پول..."
                />
              </VControl>
            </VField>
          </div>
        </div>
        <div class="form-section is-grey">
          <div class="left">
            <h3>اطلاعات شخصی</h3>
            <VField>
              <VControl icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="اسم کوچک *"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
            <VField>
              <VControl icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="نام خانوادگی *"
                  autocomplete="family-name"
                />
              </VControl>
            </VField>
            <VField>
              <VControl icon="feather:mail">
                <input
                  type="email"
                  dir="ltr"
                  class="input"
                  placeholder="آدرس ایمیل *"
                  autocomplete="email"
                  inputmode="email"
                />
              </VControl>
            </VField>
            <VField>
              <VControl icon="feather:phone">
                <input
                  type="tel"
                  dir="ltr"
                  class="input"
                  placeholder="شماره تماس *"
                  autocomplete="tel"
                  inputmode="tel"
                />
              </VControl>
            </VField>
          </div>
          <div class="right">
            <h3>جزئیات پرداخت</h3>

            <VField>
              <VControl>
                <Multiselect
                  v-model="bankAccount"
                  placeholder="حساب بانکی"
                  :options="['4222', '1229']"
                />
              </VControl>
            </VField>

            <VField>
              <VControl>
                <Multiselect
                  v-model="transferFees"
                  placeholder="حساب بانکی"
                  :options="[
                    'حساب مستر کارت - $3.00 هزینه شارژ',
                    'حساب ویزا - $0.50 هزینه شارژ',
                  ]"
                />
              </VControl>
            </VField>

            <VField>
              <label>ارسال پیام زمان پرداخت شدن پول</label>
              <VControl>
                <label class="radio">
                  <input type="radio" name="notification_selection" checked />
                  <span></span>
                  بله
                </label>

                <label class="radio is-outlined is-primary">
                  <input type="radio" name="notification_selection" />
                  <span></span>
                  خیر
                </label>
              </VControl>
            </VField>
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

  &.is-split {
    max-width: 840px;

    .form-outer {
      .form-body {
        padding: 0;

        .form-section {
          display: flex;
          padding: 20px;

          &.is-grey {
            background: #fafafa;
          }

          .left,
          .right {
            padding: 20px 40px;
            width: 50%;

            h3 {
              font-family: var(--font-alt);
              font-weight: 600;
              font-size: 0.95rem;
              color: var(--dark-text);
              margin-bottom: 20px;
            }
          }

          .left {
            position: relative;
            border-right: 1px solid var(--fade-grey-dark-3);

            .operator {
              position: absolute;
              top: 17px;
              right: -10px;
              text-transform: uppercase;
              font-family: var(--font);
              font-weight: 500;
              color: var(--dark-text);
              background: var(--white);
              padding: 4px 0;
            }
          }

          .radio-pills {
            display: flex;
            justify-content: space-between;

            .radio-pill {
              position: relative;

              input {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                opacity: 0;
                cursor: pointer;

                &:checked {
                  + .radio-pill-inner {
                    background: var(--primary);
                    border-color: var(--primary);
                    box-shadow: var(--primary-box-shadow);
                    color: var(--white);
                  }
                }
              }

              .radio-pill-inner {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 40px;
                background: var(--white);
                border: 1px solid var(--fade-grey-dark-3);
                border-radius: 8px;
                font-family: var(--font);
                font-weight: 600;
                font-size: 0.9rem;
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .form-layout {
    &.is-split {
      .form-outer {
        .form-body {
          .form-section {
            &.is-grey {
              background: var(--dark-sidebar-light-4) !important;
            }

            h3 {
              color: var(--dark-dark-text);
            }

            .left {
              border-color: var(--dark-sidebar-light-12) !important;

              .operator {
                background: var(--dark-sidebar-light-6) !important;
                color: var(--dark-dark-text);
              }

              .radio-pills {
                .radio-pill {
                  input {
                    &:checked + .radio-pill-inner {
                      border-color: var(--primary);
                      background: var(--primary);
                      box-shadow: var(--primary-box-shadow);
                      color: var(--smoke-white);
                    }
                  }

                  .radio-pill-inner {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-12);
                    color: var(--dark-dark-text);
                  }
                }
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
    &.is-split {
      .form-outer {
        .form-body {
          .form-section {
            flex-direction: column;
            padding-right: 0;
            padding-left: 0;

            .left,
            .right {
              width: 100%;
              padding-right: 30px;
              padding-left: 30px;
            }

            .left {
              border-right: none;
              border-bottom: 1px solid var(--fade-grey-dark-3);
              padding-bottom: 40px;

              .operator {
                top: unset;
                bottom: -14px;
                left: 0;
                right: 0;
                margin: 0 auto;
                text-align: center;
                max-width: 60px;
              }
            }

            .right {
              padding-top: 30px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .form-layout {
    &.is-split {
      .form-outer {
        .form-body {
          .form-section {
            padding-right: 0;
            padding-left: 0;
          }
        }
      }
    }
  }
}
</style>
