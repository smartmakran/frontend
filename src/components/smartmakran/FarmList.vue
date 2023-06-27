<script setup lang="ts">
import { computed } from 'vue'
// import { files } from '/@src/data/dashboards/course'
import { useFarmStore } from '/@src/stores/farm'
import { onMounted } from 'vue'
import { IFarm } from '/@src/interfaces/farm.interface'

const farmStore = useFarmStore()

onMounted(async () => {
  await farmStore.getFarmsList()
})

let filteredFarms = computed<IFarm[]>(() => {
  return farmStore.list
})
</script>

<template>
  <!--Grid item-->
  <div class="column is-6">
    <div class="dashboard-title">
      <div class="left">
        <h2 class="dark-inverted">مزرعه‌ها</h2>
        <p class="h-hidden-mobile">جزئیاتی از مزرعه‌های شما</p>
      </div>
      <div class="right">
        <div class="field">
          <div class="control has-icon">
            <input
              type="text"
              class="input is-rounded"
              placeholder="جستجوی مزرعه‌ها..."
            />
            <div class="form-icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--List-->
    <div class="list-view list-view-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        :class="[filteredFarms.length !== 0 && 'is-hidden']"
        title="ما هیچ نتیجه مطابقی پیدا نکردیم."
        subtitle="خیلی بد. به نظر می رسد هیچ نتیجه مطابقی برای عبارات جستجویی که وارد کرده اید پیدا نکردیم. لطفاً عبارتها یا معیارهای جستجوی مختلف را امتحان کنید."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div id="active-items-tab" class="tab-content is-active">
        <div class="list-view-inner">
          <TransitionGroup name="list-complete" tag="div">
            <!--Farm List-->
            <div v-for="farm in filteredFarms" :key="farm.id" class="list-view-item">
              <div class="list-view-item-inner">
                <VIconBox color="primary">
                  <i aria-hidden="true" class="lnil lnil-home"></i>
                </VIconBox>
                <div class="meta-left">
                  <h3>
                    {{ farm.name }}
                  </h3>
                  <span>
                    <i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i>
                    <span>مکان: {{ farm.address?.city }}</span>
                    <i aria-hidden="true" class="fas fa-circle icon-separator"></i>
                    <i aria-hidden="true" class="iconify" data-icon="feather:clock"></i>
                    <span
                      >تاریخ ثبت:
                      {{ new Date(farm.createdAt).toLocaleDateString('fa') }}</span
                    >
                  </span>
                </div>
                <div class="meta-right">
                  <div class="buttons">
                    <RouterLink :to="{ name: 'app-farm-id', params: { id: farm.id } }">
                      <VButton color="primary" outlined raised> جزئیات </VButton>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <VFlexPagination
          v-if="filteredFarms.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/mixins';

.list-view-v3 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: center;

      > img {
        width: 100%;
        max-width: 60px;
        min-width: 60px;
        max-height: 60px;
        min-height: 60px;
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey);
      }

      .meta-left {
        margin-left: 16px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 16px;
        }

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1;
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            position: relative;
            top: 1px;
            height: 12px;
            width: 12px;
          }

          .icon-separator {
            position: relative;
            top: -3px;
            font-size: 5px;
            color: var(--light-text);
            padding: 0 8px;
          }

          .iconify {
            margin-right: 0.25rem;
            [dir='rtl'] & {
              margin-right: unset;
              margin-left: 0.25rem;
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
  .list-view-v3 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        > img {
          border-color: var(--dark-sidebar-light-12);
        }

        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:nth-child(2) {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                &:hover,
                &:focus {
                  border-color: var(--primary);
                  color: var(--primary);
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
  .list-view-v3 {
    .list-view-item {
      position: relative;
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        > img {
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-left: 0;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: 0;
          }

          h3 {
            text-align: center;
            margin-bottom: 6px;
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
          margin: 16px 0 0;
          width: 100%;

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 100%;
              margin: 10px 0;

              &:first-child {
                width: 100%;
                max-width: 240px;
                margin: 10px auto;
              }

              &:nth-child(2) {
                position: absolute;
                top: 10px;
                right: 10px;
                max-width: 35px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
