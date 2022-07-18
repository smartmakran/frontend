<script setup lang="ts">
import { onMounted } from 'vue'
import ApexChart from 'vue3-apexcharts'

import { sharingOptions } from '/@src/data/dashboards/company/sharingChart'
import { usersOptions } from '/@src/data/dashboards/company/usersChart'
import {
  barData,
  barData2,
  usersBarOptions,
} from '/@src/data/dashboards/company/usersBarChart'
import {
  personalScoreGaugeOptions,
  onPersonalScoreGaugeReady,
} from '/@src/data/widgets/charts/personalScoreGauge'
import { optionsCompany } from '/@src/data/dashboards/company/datatable'
import { popovers } from '/@src/data/users/userPopovers'

onMounted(async () => {
  setTimeout(() => {
    usersBarOptions.series = [
      {
        name: 'سفارشات',
        data: barData,
      },
    ]
  }, 1000)

  setTimeout(() => {
    usersBarOptions.series = [
      ...usersBarOptions.series,
      {
        name: 'ابطال شده',
        data: barData2,
      },
    ]
  }, 2500)
})
</script>

<template>
  <div class="business-dashboard company-dashboard">
    <div class="company-header is-dark-card-bordered is-dark-bg-6">
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-users-alt is-dark-primary"></i>
          <span class="dark-inverted">162</span>
          <p>کاربر جدید</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-diamond-alt is-dark-primary"></i>
          <span class="dark-inverted">1,835,410 تومان</span>
          <p>عایدی روزانه</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-briefcase-alt is-dark-primary"></i>
          <span class="dark-inverted">378</span>
          <p>پروژه‌های پایان یافته</p>
        </div>
      </div>
      <div class="header-item is-dark-bordered-12">
        <div class="item-inner">
          <i aria-hidden="true" class="lnil lnil-ticket is-dark-primary"></i>
          <span class="dark-inverted">192</span>
          <p>تیکت‌های فعال</p>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-4">
        <div class="dashboard-card is-company">
          <VAvatar
            size="big"
            picture="/demo/photos/brands/udemy.svg"
            picture-dark="/demo/photos/brands/udemy-dark.svg"
          >
            <template #badge>
              <button class="button icon-button is-circle is-dark-outlined">
                <span class="icon is-small">
                  <i aria-hidden="true" class="iconify" data-icon="feather:plus"></i>
                </span>
              </button>
            </template>
          </VAvatar>

          <h3 class="dark-inverted">یودمی</h3>
          <p>دوره‌های آنلاین</p>
          <div class="description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است.
            </p>
          </div>
          <div class="company-stats is-dark-bordered-12">
            <div class="company-stat">
              <div>
                <span>ارسال</span>
                <span class="dark-inverted">864</span>
              </div>
            </div>
            <div class="company-stat">
              <div>
                <span>پروژه‌ها</span>
                <span class="dark-inverted">261</span>
              </div>
            </div>
            <div class="company-stat">
              <div>
                <span>دنبال کننده‌گان</span>
                <span class="dark-inverted">32K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="dashboard-card is-base-chart">
          <div class="content-box">
            <div class="revenue-stats is-dark-bordered-12">
              <div class="revenue-stat">
                <span>جدید</span>
                <span class="current">153</span>
              </div>
              <div class="revenue-stat">
                <span>بازگشتی</span>
                <span class="dark-inverted">641</span>
              </div>
              <div class="revenue-stat">
                <span>تجدید شده</span>
                <span class="dark-inverted">64</span>
              </div>
            </div>
          </div>
          <div class="chart-container">
            <ApexChart
              id="users-chart"
              dir="ltr"
              :height="usersOptions.chart.height"
              :type="usersOptions.chart.type"
              :series="usersOptions.series"
              :options="usersOptions"
            >
            </ApexChart>
          </div>
        </div>
      </div>
      <div class="column is-4">
        <div class="dashboard-card is-base-chart">
          <div class="content-box">
            <div class="revenue-stats is-dark-bordered-12">
              <div class="revenue-stat">
                <span>فیسبوک</span>
                <span class="current">64K</span>
              </div>
              <div class="revenue-stat">
                <span>اینستاگرام</span>
                <span class="dark-inverted">78K</span>
              </div>
              <div class="revenue-stat">
                <span>توئیتر</span>
                <span class="dark-inverted">25K</span>
              </div>
            </div>
          </div>
          <div class="chart-container">
            <ApexChart
              id="shares-chart"
              dir="ltr"
              :height="sharingOptions.chart.height"
              :type="sharingOptions.chart.type"
              :series="sharingOptions.series"
              :options="sharingOptions"
            >
            </ApexChart>
          </div>
        </div>
      </div>

      <div class="column is-12">
        <!-- Datatable -->
        <VSimpleDatatables :options="optionsCompany" />
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget class="gauge-widget" straight>
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
      </div>
      <div class="column is-6">
        <div class="dashboard-card">
          <div class="card-head">
            <h3 class="dark-inverted">مشترکین</h3>
          </div>
          <ApexChart
            id="bar-chart"
            dir="ltr"
            :height="usersBarOptions.chart.height"
            :type="usersBarOptions.chart.type"
            :series="usersBarOptions.series"
            :options="usersBarOptions"
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
      </div>

      <div class="column is-12">
        <div class="dashboard-card is-tickets">
          <div class="card-head">
            <h3 class="dark-inverted">تیکت‌های در انتظار تأیید</h3>
            <a class="action-link">مشاهده‌ی همه</a>
          </div>

          <div class="ticket-list">
            <!--Ticket-->
            <VBlock
              title="[#45651] تغییرات در نمایه کاربر ذخیره نمی شود"
              subtitle="من نمی توانم تغییراتی را که در نمایه کاربری خود ایجاد می کنم ذخیره کنم. وقتی روی دکمه ذخیره کلیک می کنم ، به سادگی می گوید شکست خورده."
              infratitle="بروزرسانی در 5 ساعت پیش"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="medium" picture="/demo/avatars/31.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user31" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton color="primary" raised>مدیریت</VButton>
              </template>
            </VBlock>

            <!--Ticket-->
            <VBlock
              title="[#45783] نمی توان فرصت جدیدی ایجاد کرد"
              subtitle="وقتی سعی می کنم فرصتی جدید ایجاد کنم ، پس از کلیک روی دکمه اقدام ، به صفحه 404 هدایت می شوم."
              infratitle="بروزرسانی در 2 ساعت پیش"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="medium" picture="/demo/avatars/23.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user23" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton color="primary" raised>مدیریت</VButton>
              </template>
            </VBlock>

            <!--Ticket-->
            <VBlock
              title="[#45723] هنگام استفاده از PayPal ، پرداخت با شکست مواجه می شود"
              subtitle="وقتی سعی می کنم از PayPal به عنوان روش پرداخت استفاده کنم ، برای همیشه می چرخد و بعد از آن پیغام خطا دریافت می کنم."
              infratitle="بروزرسانی در 30 دقیقه‌ی پیش"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="medium" picture="/demo/avatars/32.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user32" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton color="primary" raised>مدیریت</VButton>
              </template>
            </VBlock>

            <!--Ticket-->
            <VBlock
              title="[#45862] دارایی های موجود در پوشه تم را نمی توان پیدا کرد"
              subtitle="من اسناد را دنبال کردم اما نمی توانم دارایی ها را در پوشه اصلی پیدا کنم. آیا می توانم کمی کمک بگیرم؟"
              infratitle="بروزرسانی در 6 ساعت پیش"
              m-responsive
              class="is-dark-bordered-12"
            >
              <template #icon>
                <Tippy
                  class="has-help-cursor"
                  interactive
                  :offset="[0, 10]"
                  placement="top-start"
                >
                  <VAvatar size="medium" picture="/demo/avatars/13.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user13" />
                  </template>
                </Tippy>
              </template>
              <template #action>
                <VButton color="primary" raised>مدیریت</VButton>
              </template>
            </VBlock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.company-dashboard {
  .company-header {
    display: flex;
    padding: 20px;
    background: var(--white);
    border: 1px solid var(--fade-grey-dark-3);
    border-radius: var(--radius-large);
    margin-bottom: 1.5rem;

    .header-item {
      width: 25%;
      border-right: 1px solid var(--fade-grey-dark-3);
      [dir='rtl'] & {
        border-right: none;
        border-left: 1px solid var(--fade-grey-dark-3);
      }

      &:last-child {
        border-right: none;
        [dir='rtl'] & {
          border-left: none;
        }
      }

      .item-inner {
        text-align: center;

        .lnil,
        .lnir {
          font-size: 1.8rem;
          margin-bottom: 6px;
          color: var(--primary);
        }

        span {
          display: block;
          font-family: var(--font);
          font-weight: 600;
          font-size: 1.6rem;
          color: var(--dark-text);
        }

        p {
          font-family: var(--font-alt);
          font-size: 0.95rem;
        }
      }
    }
  }

  .widget {
    height: 100%;
  }

  .dashboard-card {
    @include vuero-s-card;

    height: 100%;

    &.is-company {
      text-align: center;
      padding: 30px;

      .v-avatar {
        display: block;
        margin: 0 auto 10px;

        .button {
          position: absolute;
          bottom: 0;
          right: 0;
          [dir='rtl'] & {
            left: 0;
            right: unset;
          }
          max-width: 35px;
        }
      }

      > h3 {
        color: var(--dark-text);
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;
      }

      > p {
        font-size: 0.9rem;
      }

      .description {
        padding: 10px 0 0;
      }

      .company-stats {
        display: flex;
        padding-top: 20px;
        margin-top: 20px;
        border-top: 1px solid var(--fade-grey-dark-3);

        .company-stat {
          width: 33.3%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          span {
            display: block;
            font-family: var(--font);

            &:first-child {
              text-transform: uppercase;
              font-family: var(--font-alt);
              font-size: 0.75rem;
              color: var(--light-text);
            }

            &:nth-child(2) {
              color: var(--dark-text);
              font-size: 1.4rem;
              font-weight: 600;
            }
          }
        }
      }
    }

    &.is-base-chart {
      padding: 0;
      display: flex;
      flex-direction: column;

      .content-box {
        padding: 30px;

        .revenue-stats {
          display: flex;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--fade-grey-dark-3);

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
                text-transform: uppercase;
                font-family: var(--font-alt);
                font-size: 0.75rem;
                color: var(--light-text);
              }

              &:nth-child(2) {
                color: var(--dark-text);
                font-size: 1.6rem;
                font-weight: 600;
              }

              &.current {
                color: var(--primary);
              }
            }
          }
        }
      }

      .chart-container {
        margin-top: auto;
      }
    }

    &.is-tickets {
      padding: 30px;

      .ticket-list {
        padding: 10px 0;

        .media-flex {
          + .media-flex {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid var(--fade-grey-dark-3);
          }

          .flex-meta {
            span {
              &:nth-child(2) {
                font-size: 1rem;
                margin: 4px 0;
                color: var(--light-text-dark-20);
                max-width: 430px;
              }

              &:nth-child(3) {
                font-size: 0.9rem;
                color: var(--light-text);
              }
            }
          }
        }
      }
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
  }

  .table-wrapper {
    min-height: 0;
  }

  .dataTable-wrapper {
    .dataTable-top {
      padding: 0 !important;
      margin: 0 !important;
    }
  }
}

.is-dark {
  .company-dashboard {
    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .company-dashboard {
    .company-header {
      flex-wrap: wrap;

      .header-item {
        width: 50%;
        border: none;
        padding: 16px 0;

        [dir='rtl'] & {
          border: none;
        }
      }
    }

    .dashboard-card {
      &.is-tickets {
        padding: 30px;

        .ticket-list {
          .media-flex {
            .flex-meta {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
