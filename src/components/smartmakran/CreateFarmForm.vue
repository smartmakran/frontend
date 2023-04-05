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
  <div class="column is-12">
    <form class="form-layout" @submit.prevent>
      <div class="form-outer">
        <div class="form-header">
          <div class="form-header-inner">
            <div class="left">
              <h3>ثبت مزرعه جدید</h3>
            </div>
            <div class="right">
              <div class="buttons">
                <VButton color="primary" raised>ثبت</VButton>
              </div>
            </div>
          </div>
        </div>
        <div class="form-body">
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="fieldset-heading">
              <h4>اطلاعات کلی</h4>
              <p>این اطلاعات کلی مزرعه است</p>
            </div>

            <div class="columns is-multiline">
              <div class="column is-12">
                <VField>
                  <label>عنوان مزرعه</label>
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
            </div>
          </div>
          <!--Fieldset-->
          <div class="form-fieldset">
            <div class="fieldset-heading">
              <h4>اطلاعات تماس</h4>
              <p>شماره تلفن‌های خود را اینجا وارد کنید</p>
            </div>

            <div class="columns is-multiline">
              <div class="column is-12">
                <VField>
                  <label>شماره‌های تماس</label>
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
                <VField>
                  <label>کشور</label>
                  <VControl>
                    <Multiselect
                      v-model="productToDemo"
                      :options="['ویوئِرو استارتر', 'ویوئِرو پرو', 'ویوئِرو تجاری']"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-4">
                <VField>
                  <label>استان</label>
                  <VControl>
                    <Multiselect
                      v-model="productToDemo"
                      :options="['ویوئِرو استارتر', 'ویوئِرو پرو', 'ویوئِرو تجاری']"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-4">
                <VField>
                  <label>شهر</label>
                  <VControl>
                    <Multiselect
                      v-model="productToDemo"
                      :options="['ویوئِرو استارتر', 'ویوئِرو پرو', 'ویوئِرو تجاری']"
                    />
                  </VControl>
                </VField>
              </div>
              <div class="column is-12">
                <VField>
                  <label>آدرس</label>
                  <VControl>
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
                  <label>عرض جغرافیایی</label>
                  <VControl>
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
                  <label>طول جغرافیایی</label>
                  <VControl>
                    <input
                      type="text"
                      class="input"
                      placeholder=""
                      autocomplete="organization"
                    />
                  </VControl>
                </VField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
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