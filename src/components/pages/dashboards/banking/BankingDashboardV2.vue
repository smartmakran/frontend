<script setup lang="ts">
import type { TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'
import { ref, onMounted } from 'vue'
import ApexChart from 'vue3-apexcharts'

import { expensesOptions } from '/@src/data/dashboards/banking-v2/expensesAreaChart'
import {
  valueSingle,
  optionsSingle,
} from '/@src/data/dashboards/banking-v2/dashboardData'

let slider: TinySliderInstance

const sliderElement = ref<HTMLElement>()
onMounted(() => {
  if (sliderElement.value) {
    slider = tns({
      container: sliderElement.value,
      controls: false,
      nav: true,
      mouseDrag: true,
      items: 1.9,
      center: false,
      loop: false,
      responsive: {
        320: {
          items: 1.7,
        },
        700: {
          items: 1.9,
        },
        900: {
          items: 1.9,
        },
      },
    })
  }
})

const goto = (index: number) => {
  if (slider) {
    slider.goTo(index)
  }
}
</script>

<template>
  <div class="banking-dashboard banking-dashboard-v2">
    <!--Panel-->
    <div class="dashboard-card is-card-panel">
      <div class="columns is-gapless">
        <div class="column is-8">
          <!--Box-->
          <div class="inner-box has-bounds">
            <div class="box-title">
              <h3>کارت‌های من</h3>
            </div>

            <div class="cards-wrapper">
              <div class="controls">
                <button class="button is-large">
                  <span class="icon is-medium">
                    <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                  </span>
                </button>
              </div>

              <!--Carousel-->
              <div class="cards-carousel">
                <div ref="sliderElement" class="cards-carousel-inner">
                  <!--Carousel Item-->
                  <div
                    dir="rtl"
                    class="cards-carousel-item"
                    tabindex="0"
                    @keydown.space.prevent="goto(0)"
                    @click="goto(0)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>۶,۳۴۱,۱۴۰ تومان</span>
                        <span>**** **** **** 4986</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div
                    dir="rtl"
                    class="cards-carousel-item"
                    tabindex="0"
                    @keydown.space.prevent="goto(1)"
                    @click="goto(1)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>۲,۲۱۱,۲۷۰ تومان</span>
                        <span>**** **** **** 3619</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div
                    dir="rtl"
                    class="cards-carousel-item"
                    tabindex="0"
                    @keydown.space.prevent="goto(2)"
                    @click="goto(2)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>۱,۲۲۸,۴۹۰ تومان</span>
                        <span>**** **** **** 5818</span>
                      </div>
                    </div>
                  </div>
                  <!--Carousel Item-->
                  <div
                    dir="rtl"
                    class="cards-carousel-item"
                    tabindex="0"
                    @keydown.space.prevent="goto(3)"
                    @click="goto(3)"
                  >
                    <div class="ccard">
                      <div class="shape"></div>
                      <div class="top">
                        <img
                          class="active"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                        <img
                          class="light-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-dark.svg"
                          alt=""
                        />
                        <img
                          class="dark-image inactive"
                          src="/images/icons/dashboards/banking/visa-text-white.svg"
                          alt=""
                        />
                      </div>
                      <div class="bottom">
                        <span>۳,۴۱۲,۱۶۰ تومان</span>
                        <span>**** **** **** 7652</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-4">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>موجودی</h3>
              <VField class="is-minimal-select">
                <VControl>
                  <Multiselect
                    v-model="valueSingle"
                    :options="optionsSingle"
                    placeholder="انتخاب یک گزینه"
                    :max-height="145"
                  />
                </VControl>
              </VField>
            </div>

            <!--Balance-->
            <div class="card-balance-wrap">
              <div class="card-balance">
                <span>۶,۳۰۰,۰۰۰ تومان</span>
                <span>**** **** **** 4986</span>
              </div>
              <div class="card-balance-stats">
                <div class="card-balance-stat">
                  <div class="stat-title">
                    <span>دریافت</span>
                  </div>
                  <div class="stat-block">
                    <div class="stat-icon is-up">
                      <i
                        aria-hidden="true"
                        class="iconify scaleX--1"
                        data-icon="feather:arrow-right"
                      ></i>
                    </div>
                    <div class="stat-text">
                      <span>+ ۲,۳۲۴ تومان</span>
                    </div>
                  </div>
                </div>
                <div class="card-balance-stat">
                  <div class="stat-title">
                    <span>برداشت</span>
                  </div>
                  <div class="stat-block">
                    <div class="stat-icon is-down">
                      <i
                        aria-hidden="true"
                        class="iconify scaleX--1"
                        data-icon="feather:arrow-right"
                      ></i>
                    </div>
                    <div class="stat-text">
                      <span>- ۵۱۸,۰۰۰ تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dashboard-card is-card-panel is-grey">
      <div class="columns is-gapless">
        <div class="column is-8">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>گزارش ماهانه</h3>
            </div>

            <div class="columns">
              <!--Monthly Summary-->
              <div class="column is-4">
                <div class="monthly-summary-wrap">
                  <div class="monthly-summary">
                    <div class="monthly-summary-item">
                      <span>واریز</span>
                      <span class="is-income">+۵,۰۰۰,۰۰۰ تومان</span>
                    </div>
                    <div class="monthly-summary-item">
                      <span>برداشت</span>
                      <span class="is-expense">-۲۰۰,۰۰۰ تومان</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--Chart-->
              <div class="column is-8">
                <div class="chart-wrapper">
                  <a class="action-link">همه بروزرسانی‌ها</a>
                  <ApexChart
                    id="timeline-chart"
                    dir="ltr"
                    :height="expensesOptions.chart.height"
                    :type="expensesOptions.chart.type"
                    :series="expensesOptions.series"
                    :options="expensesOptions"
                  >
                  </ApexChart>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <!--Box-->
          <div class="inner-box">
            <div class="box-title">
              <h3>تراکنش‌ها</h3>
              <a class="action-link">مشاهده‌ی همه</a>
            </div>
            <!--Transactions-->
            <div class="transactions">
              <!--Transaction-->
              <VBlock
                title="ارسال غذا"
                subtitle="۲۳ فروردین ۱۴۰۰ - ۸:۴۶ ب.ظ"
                center
                lighter
              >
                <template #icon>
                  <VIconBox color="green" rounded>
                    <i aria-hidden="true" class="lnil lnil-service"></i>
                  </VIconBox>
                </template>
                <template #action>
                  <span class="dark-inverted">- ۴۱,۰۰۰ تومان</span>
                </template>
              </VBlock>
              <!--Transaction-->
              <VBlock
                title="درآمد فروشگاه"
                subtitle="۱۸ فروردین ۱۴۰۰ - ۹:۱۱ صبح"
                center
                lighter
              >
                <template #icon>
                  <VIconBox color="orange" rounded>
                    <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
                  </VIconBox>
                </template>
                <template #action>
                  <span class="dark-inverted">+ ۲۶۳,۰۰۰ تومان</span>
                </template>
              </VBlock>
              <!--Transaction-->
              <VBlock
                title="سفارش آنلاین"
                subtitle="۱۶ فروردین ۱۴۰۰ - ۲:۱۳ ب.ظ"
                center
                lighter
              >
                <template #icon>
                  <VIconBox color="purple" rounded>
                    <i aria-hidden="true" class="lnil lnil-cart-alt"></i>
                  </VIconBox>
                </template>
                <template #action>
                  <span class="dark-inverted">- ۹۲,۰۰۰ تومان</span>
                </template>
              </VBlock>
            </div>
            <div class="button-wrap">
              <VButton color="primary" fullwidth elevated>جدید</VButton>
              <VButton fullwidth>تنظیمات</VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.banking-dashboard-v2 {
  .dashboard-card {
    @include vuero-s-card;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-card-panel {
      &.is-grey {
        background: var(--widget-grey);
        border: none;
      }

      .columns {
        .column {
          &:first-child {
            .inner-box {
              border-right: 1px solid var(--fade-grey-dark-3);
              [dir='rtl'] & {
                border-right: none;
                border-left: 1px solid var(--fade-grey-dark-3);
              }
            }
          }
        }
      }

      .inner-box {
        position: relative;
        margin: 20px;
        height: calc(100% - 40px);

        &.has-bounds {
          overflow: hidden;
        }

        .box-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;

          h3 {
            font-family: var(--font-alt);
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--dark-text);
          }

          .field {
            position: absolute;
            top: -7px;
            right: 0;
            [dir='rtl'] & {
              left: 0;
              right: unset;
            }
            z-index: 5;
            min-width: 135px;

            .multiselect {
              .multiselect-input {
                .multiselect-single-label {
                  color: var(--light-text);
                }
              }

              .multiselect-options {
                left: unset !important;
                [dir='rtl'] & {
                  right: unset !important;
                }
                min-width: 180px;
              }
            }
          }
        }

        .cards-wrapper {
          display: flex;

          .controls {
            margin-right: 1.5rem;
            [dir='rtl'] & {
              margin-left: 1.5rem;
              margin-right: unset;
            }

            .button {
              .icon {
                svg {
                  height: 20px;
                  width: 20px;
                }
              }
            }
          }

          .cards-carousel {
            max-width: 520px;

            .tns-nav {
              text-align: right;
              position: absolute;
              top: 0;
              right: 15px;
              [dir='rtl'] & {
                right: unset;
                left: 15px;
                text-align: left;
              }
              height: auto;
              max-height: 30px;
              width: auto;

              [aria-controls] {
                width: 9px;
                height: 9px;
                padding: 0;
                margin: 0 5px;
                border-radius: var(--radius-rounded);
                background: var(--medium-grey);
                border: 0;

                &.tns-nav-active {
                  background: var(--primary);
                }
              }
            }

            .cards-carousel-inner {
              margin-bottom: 0;

              .cards-carousel-item {
                padding: 0 1.25rem 0.75rem 0;
                [dir='rtl'] & {
                  //padding: 0 0 0.75rem 1.25rem;
                }
                user-select: none;

                &.tns-slide-active {
                  .ccard {
                    background-image: linear-gradient(
                      -225deg,
                      var(--primary-dark-8) 0%,
                      var(--primary-dark-2) 48%,
                      var(--primary-light-12) 100%
                    );
                    box-shadow: var(--primary-box-shadow);

                    .shape {
                      opacity: 0.15;
                    }

                    .top {
                      img {
                        &.active {
                          display: block;
                        }

                        &.inactive,
                        &.inactive.light-image {
                          display: none !important;
                        }
                      }
                    }

                    .bottom {
                      span {
                        color: var(--smoke-white);
                      }
                    }
                  }
                }

                .ccard {
                  position: relative;
                  display: flex;
                  flex-direction: column;
                  font-family: var(--font);
                  width: 240px;
                  height: 144px;
                  border-radius: 14px;
                  background: var(--fade-grey);
                  padding: 18px;
                  margin: 0 auto;
                  overflow: hidden;
                  transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                    height 0.3s, width 0.3s;

                  .shape {
                    position: absolute;
                    bottom: -10px;
                    right: -10px;
                    [dir='rtl'] & {
                      left: -10px;
                      right: unset;
                    }
                    height: 70px;
                    width: 70px;
                    background: var(--white);
                    border-radius: var(--radius-rounded);
                    opacity: 0;
                    transition: opacity 0.3s;
                  }

                  .top {
                    img {
                      display: block;
                      max-width: 35px;

                      &.active {
                        display: none;
                      }

                      &.inactive {
                        display: block;
                      }
                    }
                  }

                  .bottom {
                    margin-top: auto;

                    span {
                      display: block;
                      color: var(--dark-text);

                      &:first-child {
                        font-weight: 600;
                        font-size: 1.3rem;
                      }

                      &:nth-child(2) {
                        font-size: 0.9rem;
                        direction: ltr;
                        text-align: right;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        .card-balance-wrap {
          display: flex;
          flex-direction: column;
          height: calc(100% - 60px);

          .card-balance {
            span {
              display: block;
              color: var(--primary);

              &:first-child {
                font-weight: 700;
                font-size: 2.4rem;
              }

              &:nth-child(2) {
                font-size: 1rem;
                font-weight: 500;
              }
            }
          }

          .card-balance-stats {
            margin-top: auto;
            display: flex;

            .card-balance-stat {
              width: 50%;
              font-family: var(--font);

              .stat-title {
                color: var(--light-text);
                margin-bottom: 6px;
              }

              .stat-block {
                display: flex;
                align-items: center;

                .stat-icon {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 30px;
                  width: 30px;
                  border-radius: var(--radius-rounded);
                  background: var(--fade-grey-light-2);

                  &.is-up {
                    transform: rotate(-45deg);
                    [dir='rtl'] & {
                      transform: rotate(45deg);
                    }

                    svg {
                      color: var(--green);
                    }
                  }

                  &.is-down {
                    transform: rotate(45deg);
                    [dir='rtl'] & {
                      transform: rotate(-45deg);
                    }

                    svg {
                      color: var(--red);
                    }
                  }

                  svg {
                    height: 16px;
                    width: 16px;
                    stroke-width: 3px;
                  }
                }

                .stat-text {
                  margin-left: 12px;
                  [dir='rtl'] & {
                    margin-left: unset;
                    margin-right: 12px;
                  }
                  font-family: var(--font);
                  font-weight: 600;
                  font-size: 1.1rem;
                  color: var(--dark-text);
                }
              }
            }
          }
        }

        .monthly-summary-wrap {
          .monthly-summary {
            padding: 0 20px;
            border: 1px solid var(--fade-grey-dark-5);
            border-radius: var(--radius-large);

            .monthly-summary-item {
              padding: 20px 0;
              font-family: var(--font);

              &:first-child {
                border-bottom: 1px solid var(--fade-grey-dark-5);
              }

              span {
                display: block;

                &:first-child {
                  font-size: 0.85rem;
                  font-weight: 500;
                  color: var(--light-text);
                }

                &:nth-child(2) {
                  font-weight: 500;

                  &.is-income {
                    color: var(--green);
                  }

                  &.is-expense {
                    color: var(--red);
                  }
                }
              }
            }
          }
        }

        .chart-wrapper {
          position: relative;
          padding-right: 30px;
          [dir='rtl'] & {
            padding-right: unset;
            padding-left: 30px;
          }

          .action-link {
            position: absolute;
            top: -42px;
            right: 45px;
            [dir='rtl'] & {
              left: 45px;
              right: unset;
            }
          }
        }

        .transactions {
          padding: 10px 0;

          .media-flex-center {
            .flex-meta {
              span {
                &:nth-child(2) {
                  font-size: 0.85rem;
                }
              }
            }

            .flex-end {
              font-family: var(--font);
              font-size: 1rem;
              font-weight: 500;
              color: var(--dark-text);
            }
          }
        }

        .button-wrap {
          display: flex;
          justify-content: space-between;
          padding: 20px 0 0;

          .button {
            max-width: 49%;
          }
        }
      }
    }
  }
}

.is-dark {
  .banking-dashboard-v2 {
    .dashboard-card {
      @include vuero-card--dark;

      &.is-card-panel {
        background: var(--dark-sidebar-light-6);

        .inner-box {
          border-color: var(--dark-sidebar-light-12) !important;

          .box-title {
            h3 {
              color: var(--dark-dark-text);
            }
          }

          .cards-carousel {
            .tns-nav {
              [aria-controls] {
                background: var(--dark-sidebar-light-12);
              }
            }

            .cards-carousel-inner {
              .cards-carousel-item {
                &.tns-slide-active {
                  .ccard {
                    background-image: linear-gradient(
                      -225deg,
                      var(--primary-dark-8) 0%,
                      var(--primary-dark-2) 48%,
                      var(--primary-light-12) 100%
                    );
                    box-shadow: var(--primary-box-shadow);

                    .top {
                      .inactive.dark-image {
                        display: none !important;
                      }
                    }
                  }
                }

                .ccard {
                  background: var(--dark-sidebar-light-2);

                  .top {
                    .inactive.dark-image {
                      display: block !important;
                    }
                  }

                  .bottom {
                    span {
                      color: var(--dark-dark-text);
                    }
                  }
                }
              }
            }
          }

          .card-balance-wrap {
            .card-balance {
              span {
                color: var(--primary);
              }
              span:nth-child(2) {
                direction: ltr;
                text-align: right;
              }
            }

            .card-balance-stats {
              .card-balance-stat {
                .stat-block {
                  .stat-icon {
                    background: var(--dark-sidebar-light-2);
                  }

                  .stat-text {
                    color: var(--dark-dark-text);
                  }
                }
              }
            }
          }

          .monthly-summary-wrap {
            .monthly-summary {
              border-color: var(--dark-sidebar-light-12);
              background: var(--dark-sidebar-light-4);

              .monthly-summary-item {
                border-color: var(--dark-sidebar-light-12);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .banking-dashboard-v2 {
    .dashboard-card {
      &.is-card-panel {
        overflow: hidden;
        padding: 10px;

        .inner-box {
          border-right: none !important;
          [dir='rtl'] & {
            border-left: none !important;
          }

          .cards-wrapper {
            position: relative;
            margin-top: 30px;

            .controls {
              position: absolute;
              top: -68px;
              right: -8px;
              margin-right: 0;
              [dir='rtl'] & {
                left: -8px;
                right: unset;
                margin-right: unset;
                margin-left: 0;
              }
            }
          }

          .card-balance-wrap {
            .card-balance {
              margin-bottom: 30px;
            }
          }

          .monthly-summary-wrap {
            margin-bottom: 60px;
          }

          .chart-wrapper {
            padding-right: 0;
            [dir='rtl'] & {
              padding-right: unset;
              padding-left: 0;
            }

            .action-link {
              top: -45px;
              right: 0;
              [dir='rtl'] & {
                left: 0;
                right: unset;
              }
            }
          }
        }
      }
    }

    .cards-carousel {
      .tns-nav {
        display: none !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .banking-dashboard-v2 {
    .dashboard-card {
      &.is-card-panel {
        .inner-box {
          border-right: none !important;
          [dir='rtl'] & {
            border-left: none !important;
          }

          .card-balance-wrap {
            .card-balance {
              margin-bottom: 30px;
            }
          }

          .monthly-summary-wrap {
            margin-bottom: 60px;
          }

          .chart-wrapper {
            padding-right: 0;
            [dir='rtl'] & {
              padding-right: unset;
              padding-left: 0;
            }

            .action-link {
              top: -45px;
              right: 0;
              [dir='rtl'] & {
                left: 0;
                right: unset;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .banking-dashboard-v2 {
    .dashboard-card {
      &.is-card-panel {
        .inner-box {
          .cards-carousel {
            margin-left: 30px;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 30px;
            }
            max-width: 400px !important;

            .cards-carousel-inner {
              .cards-carousel-item {
                .ccard {
                  width: 180px !important;
                  height: 108px !important;
                }
              }
            }
          }

          .card-balance-wrap {
            .card-balance {
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
