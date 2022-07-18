<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import { bitcoinChartOptions } from '/@src/data/dashboards/banking-v3/bitcoinPriceChart'
import { evolutionRadialOptions } from '/@src/data/dashboards/banking-v3/evolutionRadialChart'
import { popularityGaugeOptions } from '/@src/data/dashboards/banking-v3/popularityGaugeChart'
import { popovers } from '/@src/data/users/userPopovers'
</script>

<template>
  <div class="banking-dashboard banking-dashboard-v3">
    <!--Header-->
    <div class="dashboard-header">
      <div class="left">
        <span>نمودار قیمت لحظه‌ای بیت کوین</span>
        <div class="currency">
          <span class="amount is-positive dark-inverted">۵۰۵۸۴ دلار</span>
        </div>
      </div>
      <div class="right">
        <div class="buttons">
          <VAction dark="3">ساعت</VAction>
          <VAction dark="3">روز</VAction>
          <VAction dark="3" active>هفته</VAction>
          <VAction dark="3">ماه</VAction>
          <VAction dark="3">سال</VAction>
        </div>
      </div>
    </div>

    <!--Body-->
    <div class="columns">
      <div class="column is-8">
        <!--Tiles-->
        <div class="dashboard-tiles">
          <!--Tile-->
          <div class="dashboard-tile">
            <span>حجم بازار</span>
            <span class="dark-inverted">۱۲۹,۹۹۲,۲۶۸,۰۹۰ دلار</span>
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>حجم معاملات ۲۴ ساعت گذشته</span>
            <span class="dark-inverted">۴۵۳,۱۷۸,۰۰۰ دلار</span>
          </div>
          <!--Tile-->
          <div class="dashboard-tile">
            <span>نوسانات ۲۴ ساعته گذشته</span>
            <span class="dark-inverted">۵۰,۲۱۲ دلار - ۵۰,۵۸۴ دلار</span>
          </div>
        </div>

        <!--Chart-->
        <div class="dashboard-card">
          <ApexChart
            id="currency-chart"
            dir="ltr"
            :height="bitcoinChartOptions.chart.height"
            :type="bitcoinChartOptions.chart.type"
            :series="bitcoinChartOptions.series"
            :options="bitcoinChartOptions"
          >
          </ApexChart>
        </div>

        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="dashboard-card">
              <ApexChart
                id="radial-chart"
                dir="ltr"
                :height="evolutionRadialOptions.chart.height"
                :type="evolutionRadialOptions.chart.type"
                :series="evolutionRadialOptions.series"
                :options="evolutionRadialOptions"
              >
              </ApexChart>
            </div>
          </div>
          <div class="column is-6">
            <div class="dashboard-card">
              <ApexChart
                id="radial-gauge"
                dir="ltr"
                :height="popularityGaugeOptions.chart.height"
                :type="popularityGaugeOptions.chart.type"
                :series="popularityGaugeOptions.series"
                :options="popularityGaugeOptions"
              >
              </ApexChart>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <!--Info-->
        <div class="dashboard-card is-side">
          <VBlock title="بیت کوین" subtitle="BTC" center m-responsive>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/btc.svg" />
            </template>
            <template #action>
              <GraphDropdown />
            </template>
          </VBlock>
          <div class="currency-description">
            <p>
              بیت‌کوین یک رمزارز و یک نظام پرداخت جهانی با کارکردهای مشابه پول بدون
              پشتوانه است. از نظر فنی بیت‌کوین نخستین پول دیجیتال نامتمرکز است، چرا که
              بدون بانک مرکزی یا مسئول مرکزی کار می‌کند. این شبکه همتابه‌همتا است و
              تراکنش‌ها را مستقیماً و بدون واسطه میان کاربران انجام می‌دهد. به دلیل
              محبوبیت بالای بیت کوین برخی به آن لقب پادشاه رمزارزها را داده‌اند. اکنون
              السالوادور نخستین و تنها کشوری است که بیت کوین را به عنوان پول رسمی
              پذیرفته‌است.
            </p>
          </div>
          <div class="button-wrap">
            <VButton color="primary" elevated>خرید بیت کوین</VButton>
            <VButton dark-outlined>مقایسه</VButton>
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">دنبال کنندگان</h4>
            <a href="#" class="action-link">مشاهده‌ی همه</a>
          </div>

          <div class="people">
            <Tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <VAvatar picture="/demo/avatars/21.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user21" />
              </template>
            </Tippy>
            <Tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <VAvatar initials="SC" color="h-purple" />
              <template #content>
                <UserPopoverContent :user="popovers.user120" />
              </template>
            </Tippy>
            <Tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <VAvatar picture="/demo/avatars/7.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user7" />
              </template>
            </Tippy>
            <Tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <VAvatar initials="AT" color="success" />
              <template #content>
                <UserPopoverContent :user="popovers.user124" />
              </template>
            </Tippy>
            <Tippy
              class="has-help-cursor"
              interactive
              :offset="[0, 40]"
              placement="top-end"
            >
              <VAvatar picture="/demo/avatars/31.jpg" />
              <template #content>
                <UserPopoverContent :user="popovers.user31" />
              </template>
            </Tippy>
            <VAvatar initials="50K" color="h-yellow" />
          </div>
        </div>

        <div class="dashboard-card is-side">
          <div class="subheading-wrap">
            <h4 class="subheading dark-inverted">ارزهای محبوب</h4>
            <a href="#" class="action-link">مشاهده‌ی همه</a>
          </div>

          <VBlock title="مونرو" subtitle="XMR" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/xmr.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>

          <VBlock title="لایت کوین" subtitle="LTC" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/ltc.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>

          <VBlock title="چین لینک" subtitle="LINK" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/link.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>

          <VBlock title="بایننس" subtitle="BNB" center>
            <template #icon>
              <VAvatar picture="/images/icons/cryptocurrencies/bnb.svg" size="small" />
            </template>
            <template #action>
              <VIconButton icon="feather:plus" circle dark-outlined />
            </template>
          </VBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.banking-dashboard-v3 {
  .dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font);
    margin-bottom: 20px;

    .left {
      > span {
        color: var(--light-text);
      }

      .currency {
        .amount {
          position: relative;
          font-size: 2rem;
          font-weight: 600;
          color: var(--dark-text);

          &.is-positive {
            &::after {
              color: var(--green);
            }
          }

          &.is-negative {
            &::after {
              color: var(--red);
            }
          }

          &::after {
            content: '+۳/۴درصد';
            position: relative;
            top: -8px;
            right: -8px;
            font-size: 1.1rem;
            [dir='rtl'] & {
              right: unset;
              left: -8px;
            }
          }
        }
      }
    }
  }

  .dashboard-tiles {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -8px;
    margin-bottom: 1rem;

    .dashboard-tile {
      @include vuero-s-card;

      width: calc(33.3% - 16px);
      margin: 8px;

      span {
        display: block;
        font-family: var(--font);

        &:first-child {
          font-size: 0.9rem;
          color: var(--light-text);
          margin-bottom: 4px;
        }

        &:nth-child(2) {
          font-weight: 500;
          font-size: 1.2rem;
          color: var(--dark-text);
        }
      }
    }
  }

  .dashboard-card {
    @include vuero-s-card;

    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }

    &.is-side {
      padding: 30px;

      .people {
        .v-avatar {
          margin-right: 0.5rem;
          [dir='rtl'] & {
            margin-left: 0.5rem;
            margin-right: unset;
          }

          margin-bottom: 0.5rem;
        }
      }
    }

    &.is-wallet {
      img {
        display: block;
        max-width: 200px;
        margin: 0 auto;
      }
    }

    .subheading-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .subheading {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--dark-text);
      }

      .action-link {
        font-size: 0.9rem;
      }
    }

    .currency-description {
      padding: 10px 0 20px;
    }

    .button-wrap {
      display: flex;
      justify-content: space-between;

      .button {
        width: 49%;
      }
    }
  }
}

.is-dark {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        @include vuero-card--dark;
      }
    }

    .dashboard-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .banking-dashboard-v3 {
    .dashboard-header {
      flex-direction: column;

      .left {
        margin-bottom: 1.5rem;
      }
    }

    .dashboard-tiles {
      flex-wrap: wrap;

      .dashboard-tile {
        width: calc(100% - 16px) !important;
        min-width: calc(100% - 16px) !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        span {
          &:nth-child(2) {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .banking-dashboard-v3 {
    .dashboard-tiles {
      .dashboard-tile {
        span {
          &:nth-child(2) {
            font-size: 1rem;
          }
        }
      }
    }
  }
}
</style>
