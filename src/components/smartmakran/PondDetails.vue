<script setup lang="ts">
import { computed } from 'vue'
import { usePondStore } from '/@src/stores/pond'
import { IPond } from '/@src/interfaces/pond.interface'

const pondStore = usePondStore()

const currentPond = computed<IPond>(() => {
  return pondStore.currentPond || {}
})
</script>

<template>
  <div class="page-content-inner">
    <!--List-->
    <div class="list-view list-view-v2">
      <!--Active Tab-->
      <div id="active-items-tab" class="tab-content is-active">
        <div class="list-view-inner">
          <Transition name="list-complete" tag="div">
            <div :key="currentPond.id" class="list-view-item">
              <div class="list-view-item-inner">
                <div class="meta-left">
                  <h3>
                    <span>{{ currentPond.name }}</span>
                  </h3>
                  <!-- <p>
                    <i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i>
                    <span>{{ currentPond.dimensions }}</span>
                  </p> -->
                  <span>
                    <span
                      >عرض:
                      {{ currentPond.dimensions?.width }}
                      متر
                    </span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <span
                      >طول:
                      {{ currentPond.dimensions?.length }}
                      متر
                    </span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <span>
                      عمق:
                      {{ currentPond.dimensions?.depth }}
                      متر
                    </span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <span>
                      ارتفاع آب:
                      {{ currentPond.dimensions?.waterHeight }}
                      متر
                    </span>
                  </span>

                  <div class="icon-list">
                    <h4>
                      <span>
                        <span
                          >زمان اولین کشت:
                          <b>
                            {{ new Date(currentPond.startFarming).toLocaleString('fa') }}
                          </b>
                        </span>
                        <br />
                        <span>
                          تعداد لاورها: <b>{{ currentPond.larvaCount }}</b>
                        </span>
                        <br />
                        <span>
                          تراکم: <b>{{ currentPond.density }}</b>
                        </span>
                      </span>
                    </h4>
                  </div>
                </div>
                <div class="meta-right">
                  <div class="buttons">
                    <RouterLink
                      :to="{
                        name: 'app-pond-id-manual-monitoring',
                      }"
                    >
                      <VButton color="primary" raised>ثبت اطلاعات اضافه</VButton>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>

        <!-- <VFlexPagination
          v-if="currentPond > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/mixins';

.list-view-v2 {
  .list-view-item {
    @include vuero-s-card;

    margin-bottom: 16px;
    padding: 16px;

    &:hover,
    &:focus {
      box-shadow: var(--light-box-shadow);
    }

    .list-view-item-inner {
      display: flex;

      > img {
        display: block;
        min-height: 130px;
        max-height: 130px;
        min-width: 190px;
        max-width: 190px;
        object-fit: cover;
        border-radius: var(--radius);
      }

      .meta-left {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 16px;
        }

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1.1rem;
          line-height: 1.5;

          .rating {
            margin-left: 12px;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 12px;
            }

            i {
              position: relative;
              top: -2px;
              font-size: 12px;
              color: var(--fade-grey-dark-4);

              &.active {
                color: #ffc43b;
              }
            }
          }
        }

        p {
          font-size: 0.95rem;
          color: var(--light-text);

          svg {
            height: 12px;
            width: 12px;
          }
        }

        > span {
          display: flex;
          align-items: center;
          margin-top: 10px;
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--primary);

          .icon-separator {
            font-size: 5px;
            color: var(--light-text);
            padding: 0 10px;
          }
        }

        .icon-list {
          margin-top: auto;
          display: flex;

          > span {
            display: flex;
            align-items: center;
            margin-right: 15px;
            [dir='rtl'] & {
              margin-left: 15px;
              margin-right: unset;
            }

            span {
              font-size: 0.85rem;
              font-family: var(--font-alt);
              color: var(--dark-text);
            }

            i {
              font-size: 1.2rem;
              margin-right: 6px;
              [dir='rtl'] & {
                margin-left: 6px;
                margin-right: unset;
              }

              color: var(--light-text);
            }
          }
        }
      }

      .meta-right {
        margin-left: auto;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: auto;
        }

        display: flex;
        align-items: center;
        justify-content: flex-end;

        .buttons {
          margin-bottom: 0;
          margin-right: 10px;
          [dir='rtl'] & {
            margin-right: unset;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.is-dark {
  .list-view-v2 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;

            .rating {
              i:not(.active) {
                color: var(--dark-sidebar-dark-2);
              }
            }
          }

          > span {
            color: var(--primary);
          }

          .icon-list {
            > span {
              span {
                color: var(--dark-dark-text);
              }
            }
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:first-child {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .list-view-v2 {
    .list-view-item {
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        > img {
          width: 100%;
          max-width: 100%;
          min-height: 160px;
          max-height: 160px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-left: 0;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: 0;
          }

          > span {
            margin-bottom: 16px;
          }

          .icon-list {
            flex-wrap: wrap;

            > span {
              flex-direction: column;
              text-align: center;
              margin: 10px;
              width: calc(33.3% - 20px);
              [dir='rtl'] & {
                margin: 10px;
              }

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          [dir='rtl'] & {
            margin: 16px 0 0;
          }

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 85%;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .list-view-v2 {
    .list-view-inner {
      display: flex;
      flex-wrap: wrap;

      .list-view-item {
        padding: 20px;
        margin: 10px;
        width: calc(50% - 20px);

        .list-view-item-inner {
          flex-direction: column;
          height: 100%;
          min-height: 450px;

          > img {
            width: 100%;
            max-width: 100%;
            min-height: 160px;
            max-height: 160px;
            margin-bottom: 1rem;
          }

          .meta-left {
            margin-left: 0;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 0;
            }

            > span {
              margin-bottom: 16px;
            }

            .icon-list {
              flex-wrap: wrap;

              > span {
                flex-direction: column;
                text-align: center;
                margin: 10px;
                width: calc(33.3% - 20px);

                i {
                  margin: 0;
                }
              }
            }
          }

          .meta-right {
            margin: auto 0 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .buttons {
              margin: 16px 0 0;
              width: 100%;
              display: flex;
              justify-content: space-between;

              .button {
                width: 48%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
