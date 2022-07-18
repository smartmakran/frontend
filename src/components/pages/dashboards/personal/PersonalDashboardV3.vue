<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import type { VAvatarProps } from '/@src/components/base/avatar/VAvatar.vue'
import { interviewsOptions } from '/@src/data/dashboards/personal-v3/interviewsChart'
import {
  progressGaugeOptions,
  onprogressGaugeReady,
} from '/@src/data/dashboards/personal-v3/progressChart'
import * as userData from '/@src/data/dashboards/personal-v3/users'

const userStack = userData.userStack as VAvatarProps[]
</script>

<template>
  <div class="personal-dashboard personal-dashboard-v3">
    <div class="columns">
      <div class="column is-8">
        <div class="columns is-multiline is-flex-tablet-p">
          <div class="column is-6">
            <div class="dashboard-card is-welcome">
              <div class="welcome-title">
                <h3 class="dark-inverted">سلام کاربر عزیز</h3>
                <p>
                  شما ۶ قرار مصاحبه دیگر برای این هفته دارید. روند کاری شما بی‌نظیره،
                  همینطور ادامه بده.
                </p>
              </div>
              <div class="welcome-progress">
                <VBillboardJS
                  dir="ltr"
                  :options="progressGaugeOptions"
                  @ready="onprogressGaugeReady"
                />
                <div class="meta">
                  <span>روند کاری شما</span>
                  <span class="dark-inverted"
                    >فوق‌العاده است
                    <span role="img" aria-label="Party Popper">🎉</span>
                  </span>
                </div>
              </div>
              <div class="button-wrap">
                <VButton color="primary" size="big" fullwidth raised>
                  مشاهده‌ی برنامه
                </VButton>
              </div>
            </div>
          </div>

          <div class="column is-6">
            <div class="stats-wrapper">
              <div class="columns is-multiline is-flex-tablet-p">
                <div class="column is-6">
                  <div class="dashboard-card">
                    <VBlock title="۶۲ هزار" subtitle="دقیقه" center>
                      <template #icon>
                        <VIconBox color="info" rounded>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:clock"
                          ></i>
                        </VIconBox>
                      </template>
                    </VBlock>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <VBlock title="۲۶۳" subtitle="مصاحبه" center>
                      <template #icon>
                        <VIconBox color="purple" rounded>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:radio"
                          ></i>
                        </VIconBox>
                      </template>
                    </VBlock>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <VBlock title="۴۹" subtitle="تأیید شده" center>
                      <template #icon>
                        <VIconBox color="green" rounded>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:user-check"
                          ></i>
                        </VIconBox>
                      </template>
                    </VBlock>
                  </div>
                </div>
                <div class="column is-6">
                  <div class="dashboard-card">
                    <VBlock title="۲۱۴" subtitle="رد شده" center>
                      <template #icon>
                        <VIconBox color="orange" rounded>
                          <i
                            aria-hidden="true"
                            class="iconify"
                            data-icon="feather:frown"
                          ></i>
                        </VIconBox>
                      </template>
                    </VBlock>
                  </div>
                </div>
              </div>

              <div class="people">
                <div class="left">
                  <span class="dark-inverted">کل مصاحبه‌ها</span>
                  <span> <a class="is-dark-primary">۲۳ مصاحبه</a> در این ماه</span>
                </div>
                <div class="right">
                  <VAvatarStack :avatars="userStack" :limit="3" />
                </div>
              </div>
            </div>
          </div>

          <div class="column is-6 h-hidden-mobile h-hidden-tablet-p">
            <img
              src="/@src/assets/illustrations/dashboards/personal/interviews.svg"
              alt=""
            />
          </div>

          <div class="column is-6">
            <div class="dashboard-card">
              <ApexChart
                id="interviews-chart"
                dir="ltr"
                :height="interviewsOptions.chart.height"
                :type="interviewsOptions.chart.type"
                :series="interviewsOptions.series"
                :options="interviewsOptions"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <UIWidget class="picker-widget">
          <template #header>
            <div class="widget-toolbar">
              <div class="left">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chevron-right"
                  ></i>
                </a>
              </div>
              <div class="center">
                <h3>فروردین ۱۴۰۰</h3>
              </div>
              <div class="right">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chevron-left"
                  ></i>
                </a>
              </div>
            </div>
          </template>
          <template #body>
            <table class="calendar">
              <thead>
                <tr>
                  <th scope="col">شنبه</th>
                  <th scope="col">ی</th>
                  <th scope="col">د</th>
                  <th scope="col">س</th>
                  <th scope="col">چ</th>
                  <th scope="col">پ</th>
                  <th scope="col">جمعه</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="prev-month">29</td>
                  <td class="prev-month">30</td>
                  <td class="prev-month">31</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td class="current-day">18</td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td class="next-month">1</td>
                </tr>
              </tbody>
            </table>
          </template>
        </UIWidget>

        <a href="#" class="dashboard-card is-interview">
          <VBlock title="جاناتان جابز" subtitle="۰۸:۰۰ - ۰۹:۰۰" center>
            <template #icon>
              <VAvatar picture="/demo/avatars/32.jpg" />
            </template>
            <template #action>
              <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
            </template>
          </VBlock>
        </a>
        <a href="#" class="dashboard-card is-interview">
          <VBlock title="لری پیج" subtitle="۱۰:۳۰ - ۱۱:۰۰" center>
            <template #icon>
              <VAvatar picture="/demo/avatars/19.jpg" />
            </template>
            <template #action>
              <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
            </template>
          </VBlock>
        </a>
        <a href="#" class="dashboard-card is-interview">
          <VBlock title="آرنولد اینشتین" subtitle="۰۲:۳۰ - ۰۳:۰۰" center>
            <template #icon>
              <VAvatar picture="/demo/avatars/12.jpg" />
            </template>
            <template #action>
              <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>
            </template>
          </VBlock>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.is-navbar {
  .personal-dashboard {
    margin-top: 30px;
  }
}

.personal-dashboard-v3 {
  .columns {
    &.is-flex-tablet-p {
      .column {
        &.is-6 {
          min-width: 50%;
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-l-card;

    font-family: var(--font);

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-welcome {
      background: var(--widget-grey);
      border: none;
      padding: 40px;

      .welcome-title {
        h3 {
          font-family: var(--font-alt);
          font-weight: 700;
          font-size: 2rem;
          color: var(--dark-text);
        }
      }

      .welcome-progress {
        display: flex;
        align-items: center;
        padding: 10px 0;

        .meta {
          margin-left: 16px;
          [dir='rtl'] & {
            margin-left: 0;
            margin-right: 16px;
          }

          span {
            display: block;

            &:first-child {
              color: var(--light-text);
              font-size: 0.95rem;
            }

            &:nth-child(2) {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              color: var(--dark-text);
            }
          }
        }
      }

      .button-wrap {
        .v-button {
          height: 44px;
          border-radius: 10px;
        }
      }
    }

    &.is-interview {
      &:not(:last-child) {
        margin-bottom: 0.75rem;
      }

      .flex-end {
        svg {
          height: 18px;
          width: 18px;
          color: var(--light-text);
        }
      }
    }
  }

  .picker-widget {
    padding: 40px;
    height: 317px;
  }

  .stats-wrapper {
    display: flex;
    flex-direction: column;
    height: 280px;

    .people {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 6px;

      .left {
        span {
          display: block;
          font-family: var(--font);

          &:first-child {
            font-family: var(--font-alt);
            font-weight: 600;
            color: var(--dark-text);
          }

          &:nth-child(2) {
            font-size: 0.9rem;
            color: var(--light-text);

            a {
              font-weight: 500;
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .personal-dashboard-v3 {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

.picker-widget {
  @include vuero-l-card;

  &.is-straight {
    @include vuero-s-card;
  }

  .calendar {
    color: var(--dark-text);
    font-size: 12px;
    font-family: var(--font);
    width: 100%;
    margin-bottom: 5px;

    thead,
    tbody {
      width: 100%;
    }
  }

  .calendar thead,
  .calendar th {
    color: var(--primary);
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    text-align: center;
  }

  .calendar td {
    padding: 0.5em 0;
    text-align: center;
    cursor: pointer;
    border-radius: 8px;
  }

  .calendar tbody td:hover {
    background: var(--fade-grey-light-3);
    color: var(--primary);
  }

  .current-day {
    color: var(--primary);
    font-weight: 600;
  }

  .prev-month,
  .next-month {
    color: #cacaca;
  }
}

.is-dark {
  .picker-widget {
    @include vuero-card--dark;

    .calendar {
      color: var(--dark-dark-text);

      thead,
      th {
        color: var(--primary);
      }

      td:hover {
        background: var(--dark-sidebar-light-3);
        color: var(--primary);
      }
    }

    .current-day {
      color: var(--primary);
    }
  }
}

@media only screen and (max-width: 767px) {
  .personal-dashboard-v3 {
    .stats-wrapper {
      height: auto;
    }
  }
}
</style>
