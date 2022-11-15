<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed } from 'vue'

defineProps({
  id: String,
})

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
            <h3>تغییر مشخصات استخر</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-right rem-100"
                :to="{ name: 'app' }"
                light
                dark-outlined
              >
                کنسل
              </VButton>
              <VButton color="primary" raised> ذخیره </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>اطلاعات استخر</h4>
            <p>این اطلاعات به شناخت بیشتر شما کمک می‌کنند</p>
          </div>

          <div class="columns is-multiline">
            <div class="column is-6">
              <VField>
                <label>عنوان استخر</label>
                <VControl icon="feather:user">
                  <input
                    type="text"
                    class="input"
                    :value="id"
                    placeholder=""
                    autocomplete="pool-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-6">
              <VField>
                <label>شناسه مزرعه</label>
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
          </div>
        </div>

        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>ابعاد استخر</h4>
          </div>

          <div class="columns is-multiline">
            <div class="column is-4">
              <VField>
                <label>عرض استخر</label>
                <VControl icon="feather:check">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="given-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-4">
              <VField>
                <label>طول استخر</label>
                <VControl icon="feather:check">
                  <input
                    type="text"
                    class="input"
                    placeholder=""
                    autocomplete="family-name"
                  />
                </VControl>
              </VField>
            </div>
            <div class="column is-4">
              <VField>
                <label>ارتفاع استخر</label>
                <VControl icon="feather:check">
                  <input type="text" class="input" />
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
        padding-left: 80px;
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
