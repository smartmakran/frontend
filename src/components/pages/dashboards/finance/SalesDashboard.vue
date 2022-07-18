<script setup lang="ts">
import { onMounted } from 'vue'
import ApexChart from 'vue3-apexcharts'

import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/data/widgets/charts/salesSparksChart'
import { revenueOptions } from '/@src/data/widgets/charts/revenueAreaChart'
import { salesRevenuesRadialOptions } from '/@src/data/dashboards/sales/salesRevenueRadialChart'
import {
  radialGroup1Options,
  radialGroup2Options,
  radialGroup3Options,
} from '/@src/data/dashboards/sales/salesRadialGroupChart'
import {
  barData,
  barData2,
  salesBarOptions,
} from '/@src/data/dashboards/sales/salesBarChart'
import {
  personalScoreGaugeOptions,
  onPersonalScoreGaugeReady,
} from '/@src/data/widgets/charts/personalScoreGauge'

onMounted(() => {
  setTimeout(() => {
    salesBarOptions.series = [
      {
        name: 'سفارشات',
        data: barData,
      },
    ]
  }, 1000)

  setTimeout(() => {
    salesBarOptions.series = [
      ...salesBarOptions.series,
      {
        name: 'ممنوع شده',
        data: barData2,
      },
    ]
  }, 2500)
})
</script>

<template>
  <div class="finance-dashboard sales-dashboard">
    <!--Header-->
    <div class="dashboard-header">
      <VAvatar size="large" picture="/images/avatars/svg/vuero-1.svg" />

      <div class="start">
        <h3 class="dark-inverted">خوش آمدید، کاربر عزیز</h3>
        <p>از دیدار مجدد شما در این پنل خوش وقت هستیم.</p>
      </div>
      <div class="end">
        <VButton dark="3">مشاهده گزارشات</VButton>
        <VButton color="primary" elevated>تراکنش‌ها</VButton>
      </div>
    </div>

    <div class="spark-tiles">
      <div class="columns is-multiline">
        <div class="column is-3">
          <div class="spark-tile">
            <ApexChart
              id="spark1"
              dir="ltr"
              :height="spark1.chart.height"
              :type="spark1.chart.type"
              :series="spark1.series"
              :options="spark1"
            >
            </ApexChart>
          </div>
        </div>
        <div class="column is-3">
          <div class="spark-tile">
            <ApexChart
              id="spark2"
              dir="ltr"
              :height="spark2.chart.height"
              :type="spark2.chart.type"
              :series="spark2.series"
              :options="spark2"
            >
            </ApexChart>
          </div>
        </div>
        <div class="column is-3">
          <div class="spark-tile">
            <ApexChart
              id="spark3"
              dir="ltr"
              :height="spark3.chart.height"
              :type="spark3.chart.type"
              :series="spark3.series"
              :options="spark3"
            >
            </ApexChart>
          </div>
        </div>
        <div class="column is-3">
          <div class="spark-tile">
            <ApexChart
              id="spark4"
              dir="ltr"
              :height="spark4.chart.height"
              :type="spark4.chart.type"
              :series="spark4.series"
              :options="spark4"
            >
            </ApexChart>
          </div>
        </div>
        <div class="column is-7">
          <div class="dashboard-card">
            <div class="card-head">
              <h3 class="dark-inverted">دید کلی بر درآمد</h3>
            </div>
            <div class="revenue-stats">
              <div class="revenue-stat">
                <span>این ماه</span>
                <span class="current">۷۵ میلیون تومان</span>
              </div>
              <div class="revenue-stat">
                <span>ماه گذشته</span>
                <span class="dark-inverted">۹۱ میلیون تومان</span>
              </div>
              <div class="revenue-stat">
                <span>ماه گذشته</span>
                <span class="dark-inverted">۹۱ میلیون تومان</span>
              </div>
            </div>
            <ApexChart
              id="revenue-chart"
              dir="ltr"
              :height="revenueOptions.chart.height"
              :type="revenueOptions.chart.type"
              :series="revenueOptions.series"
              :options="revenueOptions"
            >
            </ApexChart>
          </div>
        </div>
        <div class="column is-5">
          <div class="dashboard-card flex-chart">
            <div class="chart-media">
              <div class="meta">
                <h4 class="dark-inverted">درآمد حاصل از فروش مستقیم</h4>
                <span class="is-dark-primary">۸ میلیون و ۵۰۰ هزار تومان</span>
                <p>
                  براساس گزارشات درآمد حاصل از فروش مستقیم ما ۶۵ درصد کل فروش ما را شامل
                  می‌شود و نسبت به ماه قبل رشد ۲۰ درصدی نشان می‌دهد.
                </p>
              </div>
              <div class="chart-container">
                <ApexChart
                  id="radial-circle"
                  dir="ltr"
                  :height="salesRevenuesRadialOptions.chart.height"
                  :type="salesRevenuesRadialOptions.chart.type"
                  :series="salesRevenuesRadialOptions.series"
                  :options="salesRevenuesRadialOptions"
                >
                </ApexChart>
              </div>
            </div>
          </div>
          <div class="dashboard-card flex-chart">
            <div class="card-head">
              <h3 class="dark-inverted">آمار بیشتر</h3>
            </div>
            <div class="chart-group">
              <div class="group">
                <div class="group-content">
                  <div class="chart-container">
                    <ApexChart
                      id="group-radial-1"
                      dir="ltr"
                      :height="radialGroup1Options.chart.height"
                      :type="radialGroup1Options.chart.type"
                      :series="radialGroup1Options.series"
                      :options="radialGroup1Options"
                    >
                    </ApexChart>
                  </div>
                  <span class="dark-inverted">264</span>
                  <p>تخفیف‌های جدید</p>
                </div>
              </div>
              <div class="group">
                <div class="group-content">
                  <div class="chart-container">
                    <ApexChart
                      id="group-radial-2"
                      dir="ltr"
                      :height="radialGroup2Options.chart.height"
                      :type="radialGroup2Options.chart.type"
                      :series="radialGroup2Options.series"
                      :options="radialGroup2Options"
                    >
                    </ApexChart>
                  </div>
                  <span class="dark-inverted">1,203</span>
                  <p>پیشنهاد</p>
                </div>
              </div>
              <div class="group">
                <div class="group-content">
                  <div class="chart-container">
                    <ApexChart
                      id="group-radial-3"
                      dir="ltr"
                      :height="radialGroup3Options.chart.height"
                      :type="radialGroup3Options.chart.type"
                      :series="radialGroup3Options.series"
                      :options="radialGroup3Options"
                    >
                    </ApexChart>
                  </div>
                  <span class="dark-inverted">3,078</span>
                  <p>تخفیف‌های پایان یافته</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-3">
          <!--Widget-->
          <div class="widget gauge-widget is-straight">
            <div class="widget-toolbar">
              <div class="left">
                <h3 class="is-bigger">امتیاز شخصی شما</h3>
              </div>
              <div class="right">
                <WidgetDropdown />
              </div>
            </div>
            <div class="gauge-wrap">
              <div id="gauge-holder" class="gauge-holder"></div>
              <VBillboardJS
                dir="ltr"
                :options="personalScoreGaugeOptions"
                @ready="onPersonalScoreGaugeReady"
              />
            </div>
            <div class="widget-content">
              <p>امتیاز شما براساس فعالیت‌های شما محاسبه می‌گردد</p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="dashboard-card">
            <div class="card-head">
              <h3 class="dark-inverted">گزارش خلاصه از سفارش‌ها</h3>
            </div>
            <ApexChart
              id="bar-chart"
              dir="ltr"
              :height="salesBarOptions.chart.height"
              :type="salesBarOptions.chart.type"
              :series="salesBarOptions.series"
              :options="salesBarOptions"
            >
            </ApexChart>
          </div>
        </div>
        <div class="column is-3">
          <!--Widget-->
          <UIWidget class="picker-widget" straight>
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
                    <th scope="col">شنیه</th>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.sales-dashboard {
  .dashboard-header {
    display: flex;
    align-items: center;
    font-family: var(--font);
    margin-bottom: 30px;

    .start {
      margin-left: 12px;
      [dir='rtl'] & {
        margin-left: unset;
        margin-right: 12px;
      }

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 1.3rem;
        color: var(--dark-text);
      }
    }

    .end {
      margin-left: auto;
      [dir='rtl'] & {
        margin-left: unset;
        margin-right: auto;
      }
      display: flex;
      justify-content: flex-end;

      .button {
        margin-left: 10px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 10px;
        }
      }
    }
  }

  .spark-tiles {
    .spark-tile {
      @include vuero-s-card;

      padding: 0;
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.flex-chart {
      height: calc(50% - 0.75rem);
    }

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .revenue-stats {
      display: flex;
      margin-bottom: 10px;

      .revenue-stat {
        margin-right: 30px;
        [dir='rtl'] & {
          margin-left: 30px;
          margin-right: unset;
        }
        font-family: var(--font);

        span {
          display: block;

          &:first-child {
            color: var(--light-text);
            font-size: 0.9rem;
          }

          &:nth-child(2) {
            color: var(--dark-text);
            font-size: 1.2rem;
            font-weight: 600;
          }

          &.current {
            color: var(--primary);
          }
        }
      }
    }

    .chart-media {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .meta {
        margin-right: 30px;
        [dir='rtl'] & {
          margin-left: 30px;
          margin-right: unset;
        }
        align-items: center;
        font-family: var(--font);

        h4 {
          font-family: var(--font-alt);
          font-size: 1rem;
          font-weight: 600;
          color: var(--dark-text);
        }

        span {
          display: block;
          color: var(--dark-text);
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 8px;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .chart-container {
        min-width: 110px;
      }
    }

    .chart-group {
      display: flex;

      .group {
        text-align: center;
        width: 33.3%;

        .chart-container {
          margin-top: -5px;
        }

        span {
          display: block;
          margin-top: -25px;
          font-family: var(--font);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1.2rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  .widget {
    min-height: 305px;
  }
}

.is-dark {
  .sales-dashboard {
    .spark-tile,
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .sales-dashboard {
    .dashboard-header {
      text-align: center;
      flex-direction: column;

      .start {
        margin: 10px auto;
      }

      .end {
        margin: 0;
        justify-content: space-between;

        [dir='rtl'] & {
          margin: 0;
        }
      }
    }
  }
}
</style>
