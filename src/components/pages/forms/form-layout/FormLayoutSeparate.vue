<script setup lang="ts">
import { ref } from 'vue'

const country = ref('')
const options = ref(['Option 2'])
</script>

<template>
  <form class="form-layout is-separate" @submit.prevent>
    <div class="form-outer">
      <div class="form-body">
        <div class="form-section">
          <div class="form-section-inner has-padding-bottom">
            <h3 class="has-text-centered">اطلاعات شخصی</h3>
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
              <div class="column is-12">
                <VField>
                  <label>آدرس</label>
                  <VControl icon="feather:map-pin">
                    <input
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="street-address"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField>
                  <label>شهر</label>
                  <VControl icon="feather:map-pin">
                    <input
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="address-level2"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-6">
                <VField class="is-image-select">
                  <label>کشور</label>
                  <VControl>
                    <Multiselect
                      v-model="country"
                      placeholder="کشوری را انتخاب کنید"
                      autocomplete="country"
                      label="name"
                      :options="[
                        {
                          value: 'iran',
                          name: 'ایران',
                          icon: '/images/icons/flags/iran.svg',
                        },
                        {
                          value: 'english',
                          name: 'انگلیسی',
                          icon: '/images/icons/flags/united-states-of-america.svg',
                        },
                        {
                          value: 'french',
                          name: 'فرانسوی',
                          icon: '/images/icons/flags/france.svg',
                        },
                        {
                          value: 'german',
                          name: 'آلمانی',
                          icon: '/images/icons/flags/germany.svg',
                        },
                        {
                          value: 'spanish',
                          name: 'اسپانیایی',
                          icon: '/images/icons/flags/spain.svg',
                        },
                      ]"
                    >
                      <template #singlelabel="{ value }">
                        <div class="multiselect-single-label">
                          <img class="select-label-icon" :src="value.icon" alt="" />
                          <span class="select-label-text">
                            {{ value.name }}
                          </span>
                        </div>
                      </template>
                      <template #option="{ option }">
                        <img class="select-option-icon" :src="option.icon" alt="" />
                        <span class="select-label-text">
                          {{ option.name }}
                        </span>
                      </template>
                    </Multiselect>
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <label>تلفن</label>
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
            </div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-inner">
            <h3 class="has-text-centered">ارسال</h3>
            <div class="columns is-multiline">
              <div class="column is-12">
                <VField>
                  <label>هزینه ارسال</label>
                  <VControl>
                    <div class="radio-boxes">
                      <div class="radio-box">
                        <input type="radio" name="delivery_type" />
                        <div class="radio-box-inner">
                          <div class="fee">
                            <span>0</span>
                          </div>
                          <p>۳-۴ هفته</p>
                        </div>
                      </div>
                      <div class="radio-box">
                        <input type="radio" name="delivery_type" checked />
                        <div class="radio-box-inner">
                          <div class="fee">
                            <span>5000</span>
                          </div>
                          <p>۲-۵ روز</p>
                        </div>
                      </div>
                    </div>

                    <p>
                      <span>تاریخ تقریبی رسیدن بسته: <span>23 آبان</span></span>
                      <span>هر بسته کد رهگیری جداگانه دارد</span>
                    </p>
                  </VControl>
                </VField>
              </div>
            </div>
          </div>

          <div class="form-section-outer">
            <div class="checkboxes">
              <VField>
                <VControl>
                  <VCheckbox
                    v-model="options"
                    value="Option 2"
                    label="Create an account"
                    color="primary"
                    circle
                  />
                  <span class="px-2"></span>
                  <VCheckbox
                    v-model="options"
                    value="Option 1"
                    label="Subscribe to our Newsletter"
                    color="primary"
                    circle
                  />
                </VControl>
              </VField>
            </div>
            <div class="button-wrap">
              <VButton color="primary" bold raised fullwidth>
                سفارش را تائید می‌کنم
              </VButton>
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

  &.is-separate {
    max-width: 1040px;

    .form-outer {
      background: none;
      border: none;

      .form-body {
        display: flex;

        .form-section {
          flex-grow: 2;
          padding: 10px;
          width: 50%;

          .form-section-inner {
            @include vuero-s-card;

            padding: 40px;

            &.has-padding-bottom {
              padding-bottom: 60px;
              height: 100%;
            }

            > h3 {
              font-family: var(--font-alt);
              font-size: 1.2rem;
              font-weight: 600;
              color: var(--dark-text);
              margin-bottom: 30px;
            }

            .columns {
              .column {
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
              }
            }

            .radio-boxes {
              display: flex;
              justify-content: space-between;
              margin-left: -8px;
              margin-right: -8px;

              .radio-box {
                position: relative;
                width: calc(50% - 16px);
                margin: 8px;

                &:focus-within {
                  border-radius: 3px;
                  outline-offset: var(--accessibility-focus-outline-offset);
                  outline-width: var(--accessibility-focus-outline-width);
                  outline-style: var(--accessibility-focus-outline-style);
                  outline-color: var(--primary);
                }

                input {
                  position: absolute;
                  top: 0;
                  left: 0;
                  height: 100%;
                  width: 100%;
                  opacity: 0;
                  cursor: pointer;

                  &:checked {
                    + .radio-box-inner {
                      background: var(--primary);
                      border-color: var(--primary);
                      box-shadow: var(--primary-box-shadow);

                      .fee,
                      p {
                        color: var(--smoke-white);
                      }
                    }
                  }
                }

                .radio-box-inner {
                  background: var(--white);
                  border: 1px solid var(--fade-grey-dark-3);
                  text-align: center;
                  border-radius: var(--radius);
                  font-family: var(--font);
                  font-weight: 600;
                  font-size: 0.9rem;
                  transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                    height 0.3s, width 0.3s;
                  padding: 30px 20px;

                  .fee {
                    font-family: var(--font);
                    font-weight: 700;
                    color: var(--dark-text);
                    font-size: 2.4rem;
                    line-height: 1;

                    span {
                      &::after {
                        content: '$';
                        position: relative;
                        top: -10px;
                        font-size: 1.5rem;
                      }
                    }
                  }

                  p {
                    font-family: var(--font-alt);
                  }
                }
              }
            }

            .control {
              > p {
                padding-top: 12px;

                > span {
                  display: block;
                  font-size: 0.9rem;

                  span {
                    font-weight: 500;
                    color: var(--dark-text);
                  }
                }
              }
            }
          }

          .form-section-outer {
            .checkboxes {
              padding: 16px 0;

              .checkbox {
                padding: 0;
                font-size: 0.9rem;
              }
            }

            .button-wrap {
              .button {
                min-height: 60px;
                font-size: 1.05rem;
                font-weight: 600;
                font-family: var(--font-alt);
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
    &.is-separate {
      .form-outer {
        background: none !important;

        .form-body {
          .form-section {
            .form-section-inner {
              @include vuero-card--dark;

              > h3 {
                color: var(--dark-dark-text);
              }

              .radio-boxes {
                .radio-box {
                  input:checked + .radio-box-inner {
                    background: var(--primary);
                    border-color: var(--primary);
                    box-shadow: var(--primary-box-shadow);

                    .fee,
                    p {
                      color: var(--smoke-white);
                    }
                  }

                  .radio-box-inner {
                    background: var(--dark-sidebar-light-2);
                    border-color: var(--dark-sidebar-light-12);

                    .fee {
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
}

@media only screen and (max-width: 767px) {
  .form-layout {
    &.is-separate {
      .form-outer {
        .form-body {
          padding-left: 0;
          padding-right: 0;
          flex-direction: column;

          .form-section {
            width: 100%;

            .form-section-inner {
              padding: 30px;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .form-layout {
    &.is-separate {
      .form-outer {
        .form-body {
          padding-left: 0;
          padding-right: 0;

          // flex-direction: column;

          .form-section {
            // width: 100%;

            .form-section-inner {
              padding: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
