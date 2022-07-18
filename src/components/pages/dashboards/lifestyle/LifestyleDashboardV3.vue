<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { energyChartOptions } from '/@src/data/dashboards/lifestyle-v3/energyChart'
import { overallChartOptions } from '/@src/data/dashboards/lifestyle-v3/overallChart'
import { oxygenChartOptions } from '/@src/data/dashboards/lifestyle-v3/oxygenChart'
import { progressChartOptions } from '/@src/data/dashboards/lifestyle-v3/progressChart'
import {
  personalScoreGaugeOptions,
  onPersonalScoreGaugeReady,
} from '/@src/data/widgets/charts/personalScoreGauge'
import { followersList } from '/@src/data/widgets/ui/followers'
</script>

<template>
  <div class="lifestyle-dashboard lifestyle-dashboard-v3">
    <div class="illustration-header">
      <div class="header-image">
        <img src="/@src/assets/illustrations/dashboards/lifestyle/doctor.svg" alt="" />
      </div>
      <div class="header-meta">
        <h3>خلاصه فعالیت‌های امروز</h3>
        <p>فعالیت خود را زیر نظر داشته باشید و نقاط ضعف خود را بهبود بخشید.</p>
        <div class="summary-stats">
          <div class="summary-stat">
            <span>900 کیلوکالری</span>
            <span>امروز سوزانده شد</span>
          </div>
          <div class="summary-stat">
            <span>2300 کیلوکالری</span>
            <span>امروز مصرف شد</span>
          </div>
          <div class="summary-stat">
            <span>10,864</span>
            <span>قدم</span>
          </div>
          <div class="summary-stat">
            <span>2% چربی</span>
            <span>امروز سوزانده شد</span>
          </div>
          <div class="summary-stat h-hidden-tablet-p">
            <span>8.4 کیلومتر</span>
            <span>پیمایش امروز</span>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline is-flex-tablet-p">
      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-tint"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">114/90</span>
              <span>پایین/بالا</span>
            </h4>
          </div>
          <h3 class="dark-inverted">خون</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.
          </p>
        </div>
      </div>

      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-heart"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">112</span>
              <span>ضربان در دقیقه</span>
            </h4>
          </div>
          <h3 class="dark-inverted">نبض قلب</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.
          </p>
        </div>
      </div>

      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-pump-medical"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">12/14</span>
              <span>واحد</span>
            </h4>
          </div>
          <h3 class="dark-inverted">فشار خون</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.
          </p>
        </div>
      </div>

      <!--Tile-->
      <div class="column is-3">
        <div class="health-tile">
          <div class="tile-head">
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-weight"></i>
            </VIconBox>
            <h4>
              <span class="dark-inverted">60.4</span>
              <span>کیلوگرم</span>
            </h4>
          </div>
          <h3 class="dark-inverted">وزن</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است.
          </p>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-9">
        <div class="columns is-multiline">
          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">اوضاع کلی</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  وضعیت کلی شما بسیار خوب است. آن را حتی بهتر کنید.
                  <a class="is-dark-primary">بخوایند چگونه</a>
                </p>
              </div>
              <ApexChart
                id="overall-chart"
                dir="ltr"
                :height="overallChartOptions.chart.height"
                :type="overallChartOptions.chart.type"
                :series="overallChartOptions.series"
                :options="overallChartOptions"
              >
              </ApexChart>
            </div>
          </div>

          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">گزارش انرژی</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  انرژی شما کمی ناپایدار به نظر می رسد. می توانید آن را بهبود بخشید.
                  <a class="is-dark-primary">بخوانید چگونه</a>
                </p>
              </div>
              <ApexChart
                id="energy-chart"
                dir="ltr"
                :height="energyChartOptions.chart.height"
                :type="energyChartOptions.chart.type"
                :series="energyChartOptions.series"
                :options="energyChartOptions"
              >
              </ApexChart>
            </div>
          </div>

          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">اکسیژن رسانی</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  اکسیژن شما کمی ناپایدار به نظر می رسد. می توانید آن را بهبود بخشید.
                  <a class="is-dark-primary">بخوانید چگونه</a>
                </p>
              </div>
              <ApexChart
                id="overall-chart"
                dir="ltr"
                :height="oxygenChartOptions.chart.height"
                :type="oxygenChartOptions.chart.type"
                :series="oxygenChartOptions.series"
                :options="oxygenChartOptions"
              >
              </ApexChart>
            </div>
          </div>

          <!--Dashboard Card-->
          <div class="column is-6">
            <div class="dashboard-card">
              <div class="card-head">
                <h3 class="dark-inverted">روند کلی</h3>
                <WidgetDropdown />
              </div>
              <div class="chart-meta">
                <p>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:help-circle"
                  ></i>
                  وضعیت کلی شما بسیار خوب است. آن را حتی بهتر کنید.
                  <a class="is-dark-primary">بخوانید چگونه</a>
                </p>
              </div>
              <ApexChart
                id="progress-chart"
                dir="ltr"
                :height="progressChartOptions.chart.height"
                :type="progressChartOptions.chart.type"
                :series="progressChartOptions.series"
                :options="progressChartOptions"
              >
              </ApexChart>
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
                <a>#سلامت</a>
                <a>#تمرینات_هوازی</a>
                <a>#تغذیه</a>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
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

        <!--Widget-->
        <UIWidget class="gauge-widget">
          <template #header>
            <UIWidgetToolbarDropdown title="ابزارک نمودار دایره‌ای" />
          </template>
          <template #body>
            <div class="gauge-wrap">
              <VBillboardJS
                dir="ltr"
                class="gauge-holder"
                :options="personalScoreGaugeOptions"
                @ready="onPersonalScoreGaugeReady"
              />
            </div>
            <div class="widget-content">
              <p>امتیاز شما براساس فعالیت‌های شما محاسبه می‌گردد</p>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="text-widget">
          <template #header>
            <UIWidgetToolbarFollowers title="دوستان جدید" :avatars="followersList" />
          </template>
          <template #body>
            <div class="widget-content">
              <p>
                خبر عالی، <span>{{ followersList[0].name }}</span
                >, <span>{{ followersList[1].name }}</span> و
                <span>{{ followersList[2].name }}</span> اکنون با شما دوست هستند. در زمان
                مناسب حتما از پروفایل آنها بازدید کنید.
              </p>
            </div>
          </template>
        </UIWidget>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.lifestyle-dashboard-v3 {
  .illustration-header {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 16px;
    background: var(--primary-dark-24);
    font-family: var(--font);
    margin-bottom: 30px;

    .header-image {
      position: relative;
      height: 168px;
      width: 280px;

      img {
        position: absolute;
        top: -76px;
        left: -30px;
        [dir='rtl'] & {
          left: unset;
          right: -30px;
        }
        display: block;
        pointer-events: none;
      }
    }

    .header-meta {
      margin-left: 0;
      [dir='rtl'] & {
        margin-left: unset;
        margin-right: 0;
      }

      h3 {
        color: var(--smoke-white);
        font-family: var(--font-alt);
        font-weight: 700;
        font-size: 1.3rem;
      }

      p {
        font-weight: 400;
        color: var(--smoke-white-dark-16);
        margin-bottom: 16px;
      }

      .summary-stats {
        display: flex;

        .summary-stat {
          margin-right: 30px;
          [dir='rtl'] & {
            margin-left: 30px;
            margin-right: unset;
          }

          span {
            font-family: var(--font);
            display: block;

            &:first-child {
              font-size: 1.1rem;
              font-family: var(--font-alt);
              color: var(--smoke-white);
            }

            &:nth-child(2) {
              color: var(--primary-light-18);
              font-size: 0.85rem;
            }
          }
        }
      }

      .action-link {
        span {
          font-size: 0.8rem;
          text-transform: uppercase;
          margin-right: 6px;
          [dir='rtl'] & {
            margin-left: 6px;
            margin-right: unset;
          }
        }

        i {
          font-size: 12px;
        }
      }
    }
  }

  .health-tile {
    font-family: var(--font);

    .tile-head {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .v-icon {
        margin-right: 10px;
        [dir='rtl'] & {
          margin-left: 10px;
          margin-right: unset;
        }
      }

      h4 {
        span {
          &:first-child {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--dark-text);
            margin-right: 0.25rem;
            [dir='rtl'] & {
              margin-right: unset;
              margin-left: 0.25rem;
            }
          }

          &:nth-child(2) {
            font-size: 0.95rem;
            color: var(--light-text);
          }
        }
      }
    }

    h3 {
      font-family: var(--font-alt);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--dark-text);
    }

    p {
      font-size: 0.95rem;
    }
  }

  .dashboard-card {
    @include vuero-l-card;

    .card-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;

      h3 {
        color: var(--dark-text);
        font-size: 1.2rem;
        font-weight: 500;
      }
    }

    .chart-meta {
      p {
        font-size: 0.95rem;
        max-width: 80%;

        svg {
          position: relative;
          top: 2px;
          height: 16px;
          width: 16px;
          color: var(--light-text);
        }

        a {
          color: var(--primary);
          font-weight: 500;
        }
      }
    }
  }
}

.is-dark {
  .lifestyle-dashboard-v3 {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .lifestyle-dashboard-v3 {
    .illustration-header {
      flex-direction: column;
      text-align: center;

      .header-image {
        height: auto;
        width: 100%;

        img {
          position: relative;
          width: 100%;
          max-width: 260px;
          margin: 0 auto;
          top: 0;
          margin-top: -75px;
        }
      }

      .header-meta {
        padding: 20px;

        > p {
          max-width: 280px;
          margin-left: auto;
          margin-right: auto;
        }

        .summary-stats {
          flex-wrap: wrap;

          .summary-stat {
            margin: 10px;
            min-width: calc(33.3% - 20px);

            [dir='rtl'] & {
              margin: 10px;
            }
          }
        }
      }
    }

    .health-tile {
      padding: 20px;
      background: var(--white);
      border: 1px solid var(--fade-grey-dark-3);
      border-radius: 10px;
    }
  }

  .is-dark {
    .lifestyle-dashboard-v3 {
      .health-tile {
        background: var(--dark-sidebar-light-6);
        border-color: var(--dark-sidebar-light-12);
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .lifestyle-dashboard-v3 {
    .illustration-header {
      .header-image {
        width: 250px;
      }
    }
  }
}
</style>
