<script setup lang="ts">
import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import * as dashboardData from '/@src/data/dashboards/lifestyle-v2/dashboardData'

const avatarStack1 = dashboardData.avatarStack1 as VAvatarProps[]
const avatarStack2 = dashboardData.avatarStack1 as VAvatarProps[]
const avatarStack3 = dashboardData.avatarStack1 as VAvatarProps[]
const avatarStack4 = dashboardData.avatarStack1 as VAvatarProps[]
const topicList = dashboardData.topicList as any[]
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v2">
    <div class="dashboard-title is-main">
      <div class="left">
        <h2 class="dark-inverted">مرور سرگرمی‌ها</h2>
        <p class="h-hidden-mobile">
          برخی از بهترین فعالیتهای نزدیک منطقه خود را کاوش کنید
        </p>
      </div>
      <div class="right">
        <a class="action-link">مشاهده‌ی همه</a>
      </div>
    </div>

    <div class="columns">
      <div class="column is-9">
        <div class="columns is-multiline is-flex-tablet-p">
          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/1.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay"></div>
              <a href="#" class="long-card-text-overlay">
                <div class="top">
                  <span>پیاده روی</span>
                  <i aria-hidden="true" class="fas fa-running"></i>
                </div>
                <div class="bottom">
                  <span>28.3K</span>
                  <VAvatarStack size="small" :avatars="avatarStack1" />
                </div>
              </a>
            </div>
          </div>

          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/2.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay"></div>
              <a href="#" class="long-card-text-overlay">
                <div class="top">
                  <span>سفرهای قایق سواری</span>
                  <i aria-hidden="true" class="fas fa-ship"></i>
                </div>
                <div class="bottom">
                  <span>8.1K</span>
                  <VAvatarStack size="small" :avatars="avatarStack2" />
                </div>
              </a>
            </div>
          </div>

          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/3.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay"></div>
              <a href="#" class="long-card-text-overlay">
                <div class="top">
                  <span>سنگ نوردی</span>
                  <i aria-hidden="true" class="fas fa-running"></i>
                </div>
                <div class="bottom">
                  <span>19.7K</span>
                  <VAvatarStack size="small" :avatars="avatarStack3" />
                </div>
              </a>
            </div>
          </div>

          <!--Card-->
          <div class="column is-3">
            <div
              v-background="{
                src: '/demo/photos/dashboards/lifestyle/4.jpg',
                placeholder: 'https://via.placeholder.com/800x600',
              }"
              class="long-card has-background-image"
            >
              <div class="long-card-overlay"></div>
              <a href="#" class="long-card-text-overlay">
                <div class="top">
                  <span>دوچرخه سواری</span>
                  <i aria-hidden="true" class="fas fa-biking"></i>
                </div>
                <div class="bottom">
                  <span>48.4K</span>
                  <VAvatarStack size="small" :avatars="avatarStack4" />
                </div>
              </a>
            </div>
          </div>

          <!--List-->
          <div class="column is-6">
            <div class="dashboard-list">
              <div class="dashboard-title">
                <div class="left">
                  <h2 class="dark-inverted">هم اکنون در جریان است</h2>
                  <p class="h-hidden-mobile">آخرین فعالیت ها را بررسی کنید</p>
                </div>
              </div>

              <div class="inner-list">
                <VBlock title="پیاده روی تند" subtitle="31 فروردین 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/1.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>

                <VBlock title="قایق سواری" subtitle="30 مهر 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/2.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>

                <VBlock title="صخره‌نوردی گروهی [حرفه‌ای]" subtitle="31 تیر 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/3.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>

                <VBlock title="دوچرخه سواری جنون" subtitle="31 شهریور 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/4.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>
              </div>
            </div>
          </div>

          <!--List-->
          <div class="column is-6">
            <div class="dashboard-list">
              <div class="dashboard-title">
                <div class="left">
                  <h2 class="dark-inverted">اکنون محبوب</h2>
                  <p class="h-hidden-mobile">بهترین فروش‌های ما</p>
                </div>
                <div class="right">
                  <a class="action-link">مشاهده‌ی همه</a>
                </div>
              </div>
              <div class="inner-list">
                <VBlock title="سه گانه اکسترم" subtitle="2 مهر 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/5.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>

                <VBlock title="دوی گروهی" subtitle="29 مهر 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/6.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>

                <VBlock title="لباس قواصی" subtitle="28 مهر 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/7.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>

                <VBlock title="پیاده‌روی صحرا" subtitle="27 مهر 1400" center>
                  <template #icon>
                    <VAvatar picture="/demo/photos/dashboards/lifestyle/7.jpg" squared />
                  </template>
                  <template #action>
                    <div class="rating">
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                      <i aria-hidden="true" class="fas fa-star selected"></i>
                    </div>
                    <VIconButton icon="feather:arrow-left" circle dark-outlined />
                  </template>
                </VBlock>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget class="search-widget">
          <template #body>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="جستجو..." />
                <button class="search-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </button>
              </div>

              <div class="topics">
                <a>#پیاده‌روی</a>
                <a>#صخره‌نوردی</a>
                <a>#دوچرخه‌سواری</a>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="text-widget">
          <template #header>
            <UIWidgetToolbarIcon title="پیام‌ها" icon="feather:message-square" />
          </template>
          <template #body>
            <div class="widget-content">
              <p>
                در حال حاضر شما
                <span>10 پیغام خوانده نشده</span> در اینباکس خود دارید. می‌تواند زمان خوبی
                برای بررسی آنها باشد.
              </p>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <ListWidgetSingle
          title="تاپیک‌های هات"
          class="list-widget-v1 p-t-20 p-l-20 p-r-20 p-b-20"
        >
          <listWidgetTopicList :topics="topicList" />
        </ListWidgetSingle>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.lifestyle-dashboard-v2 {
  .dashboard-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: var(--font);

    &.is-main {
      margin-bottom: 30px;

      h2 {
        font-size: 1.8rem;
      }
    }

    h2 {
      font-family: var(--font-alt);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .long-card {
    @include vuero-l-card;

    position: relative;
    min-height: 300px;

    &:hover,
    &:focus {
      .long-card-overlay {
        opacity: 0.5;
        pointer-events: all;
      }

      .long-card-text-overlay {
        opacity: 1;
        pointer-events: all;

        .top,
        .bottom {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }

    .long-card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: var(--dark-sidebar);
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      cursor: pointer;
      border-radius: 16px;
      transition: all 0.3s; // transition-all test
    }

    .long-card-text-overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      font-family: var(--font);
      opacity: 0;
      pointer-events: none;
      z-index: 2;
      overflow: hidden;
      cursor: pointer;

      .top,
      .bottom {
        transition: all 0.2s;
        opacity: 0;
        transition-delay: 0.15s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--smoke-white);
      }

      .top {
        transform: translateY(-30px);
        font-weight: 500;
        font-size: 0.75rem;
        letter-spacing: 2px;
        [dir='rtl'] & {
          letter-spacing: 0;
        }

        text-transform: uppercase;
      }

      .bottom {
        font-size: 0.9rem;
        transform: translateY(30px);
      }
    }
  }

  .dashboard-list {
    .inner-list {
      .media-flex-center {
        @include vuero-l-card;

        display: flex;
        padding: 12px;
        max-height: 66px;

        &:hover,
        &:focus {
          .flex-end {
            .rating {
              opacity: 1;
            }
          }
        }

        .flex-meta {
          max-width: 160px;
          width: 100%;
        }

        .flex-end {
          .rating {
            padding: 0 20px;
            opacity: 0;
            transition: all 0.3s; // transition-all test

            i {
              font-size: 12px;
              color: var(--widget-grey-dark-12);

              &.selected {
                color: var(--yellow);
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v2 {
    .long-card {
      @include vuero-card--dark;
    }

    .dashboard-list {
      .inner-list {
        .media-flex-center {
          @include vuero-card--dark;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .lifestyle-dashboard-v2 {
    .long-card {
      .long-card-overlay {
        opacity: 0.5 !important;
        pointer-events: all !important;
      }

      .long-card-text-overlay {
        opacity: 1 !important;
        pointer-events: all !important;
        padding: 30px;

        .top,
        .bottom {
          font-size: 1rem;
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v2 {
    .is-flex-tablet-p {
      .column {
        &.is-3 {
          min-width: 25% !important;
          width: 25% !important;

          .long-card {
            .long-card-overlay {
              opacity: 0.5 !important;
              pointer-events: all !important;
            }

            .long-card-text-overlay {
              opacity: 1 !important;
              pointer-events: all !important;

              .top,
              .bottom {
                opacity: 1 !important;
                transform: translateY(0) !important;
              }

              .top {
                i {
                  display: none !important;
                }
              }

              .bottom {
                .avatar-stack {
                  display: none !important;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .lifestyle-dashboard-v2 {
    .long-card {
      .long-card-overlay {
        opacity: 0.5 !important;
        pointer-events: all !important;
      }

      .long-card-text-overlay {
        opacity: 1 !important;
        pointer-events: all !important;

        .top,
        .bottom {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .top {
          i {
            display: none !important;
          }
        }

        .bottom {
          .avatar-stack {
            display: none !important;
          }
        }
      }
    }
  }
}
</style>
