<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import { flexRadialChartCircleOptions } from '/@src/data/widgets/charts/flexRadialChartCircleChart'
import { flexRadialChartStripesOptions } from '/@src/data/widgets/charts/flexRadialChartStripesChart'
import {
  widgetRadialGroup1Options,
  widgetRadialGroup2Options,
  widgetRadialGroup3Options,
} from '/@src/data/widgets/charts/groupedCircleCharts'
import {
  widgetGaugeGroup1Options,
  widgetGaugeGroup2Options,
  widgetGaugeGroup3Options,
} from '/@src/data/widgets/charts/groupedRadialCharts'
import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/data/dashboards/ecommerce/sparksCharts'

import { onBeforeMount } from 'vue'
import moment from 'moment-jalaali'
import * as chartOptions from '/@src/data/dashboards/apex-demo/chartOptions'
import { useUserSession } from '/@src/stores/userSession'
import { dashboard } from '/@src/services/modules/dashboard/dashboard.service'

const userSession = useUserSession()
const user = userSession.getUser()

type SensorData = {
  ph: number
  oxygen: number
  orp: number
  ec: number
  ammonia: number
  nitrite: number
  nitrate: number
  temperature: number
  createdAt: Date
}

const { sensorData } = await dashboard(`/dashboard/${user._id}`)

const dates = sensorData
  .slice(0, 5)
  .map((d: SensorData) => moment(d.createdAt).format('jYYYY-jMM-jDD hh:mm:ss'))

const ph = sensorData.slice(0, 5).map((d: SensorData) => d.ph)
const oxygen = sensorData.slice(0, 5).map((d: SensorData) => d.oxygen)
const orp = sensorData.slice(0, 5).map((d: SensorData) => d.orp)
const ec = sensorData.slice(0, 5).map((d: SensorData) => d.ec)
const ammonia = sensorData.slice(0, 5).map((d: SensorData) => d.ammonia)
const nitrite = sensorData.slice(0, 5).map((d: SensorData) => d.nitrite)
const nitrate = sensorData.slice(0, 5).map((d: SensorData) => d.nitrate)
const temperature = sensorData.slice(0, 5).map((d: SensorData) => d.temperature)

chartOptions.ph.series = [{ name: 'ph', data: ph }]
chartOptions.oxygen.series = [{ name: 'oxygen', data: oxygen }]
chartOptions.orp.series = [{ name: 'orp', data: orp }]
chartOptions.ec.series = [{ name: 'ec', data: ec }]
chartOptions.ammonia.series = [{ name: 'ammonia', data: ammonia }]
chartOptions.nitrite.series = [{ name: 'nitrite', data: nitrite }]
chartOptions.nitrate.series = [{ name: 'nitrate', data: nitrate }]
chartOptions.temperature.series = [{ name: 'temperature', data: temperature }]

chartOptions.ph.labels = dates
chartOptions.oxygen.labels = dates
chartOptions.orp.labels = dates
chartOptions.ec.labels = dates
chartOptions.ammonia.labels = dates
chartOptions.nitrite.labels = dates
chartOptions.nitrate.labels = dates
chartOptions.temperature.labels = dates
</script>

<template>
  <div class="ecommerce-dashboard ecommerce-dashboard-v1">
    <!--Header-->
    <div class="dashboard-header">
      <VAvatar picture="/images/avatars/svg/vuero-1.svg" size="large" />
      <div class="start">
        <h3 class="dark-inverted">{{ user?.fullName }}</h3>
        <p>پنل مدیریت استخرها</p>
      </div>
      <div class="end">
        <VButton dark="3">مشاهده گزارشات</VButton>
        <VButton color="primary" elevated>مدیریت مزرعه</VButton>
      </div>
    </div>

    <div class="columns is-multiline">
      <!--Grouped Stat Widget-->
      <div class="column is-6">
        <GroupedStatWidget
          title="مشخصات استخر"
          :values="['264', '1,203', '3,078']"
          :labels="['pH', 'Oxygen', 'Nitrite']"
        >
          <template #chart1>
            <ApexChart
              id="group-radial-1"
              :height="widgetRadialGroup1Options.chart.height"
              :type="widgetRadialGroup1Options.chart.type"
              :series="widgetRadialGroup1Options.series"
              :options="widgetRadialGroup1Options"
            >
            </ApexChart>
          </template>
          <template #chart2>
            <ApexChart
              id="group-radial-2"
              :height="widgetRadialGroup2Options.chart.height"
              :type="widgetRadialGroup2Options.chart.type"
              :series="widgetRadialGroup2Options.series"
              :options="widgetRadialGroup2Options"
            >
            </ApexChart>
          </template>
          <template #chart3>
            <ApexChart
              id="group-radial-3"
              :height="widgetRadialGroup3Options.chart.height"
              :type="widgetRadialGroup3Options.chart.type"
              :series="widgetRadialGroup3Options.series"
              :options="widgetRadialGroup3Options"
            >
            </ApexChart>
          </template>
        </GroupedStatWidget>
      </div>

      <!--Grouped Stat Widget-->
      <div class="column is-6">
        <GroupedStatWidget
          title="مشخصات استخر"
          :values="['264', '1,203', '3,078']"
          :labels="['pH', 'Oxygen', 'Nitrite']"
          gauge
        >
          <template #chart1>
            <ApexChart
              id="group-gauge-1"
              :height="widgetGaugeGroup1Options.chart.height"
              :type="widgetGaugeGroup1Options.chart.type"
              :series="widgetGaugeGroup1Options.series"
              :options="widgetGaugeGroup1Options"
            >
            </ApexChart>
          </template>
          <template #chart2>
            <ApexChart
              id="group-gauge-2"
              :height="widgetGaugeGroup2Options.chart.height"
              :type="widgetGaugeGroup2Options.chart.type"
              :series="widgetGaugeGroup2Options.series"
              :options="widgetGaugeGroup2Options"
            >
            </ApexChart>
          </template>
          <template #chart3>
            <ApexChart
              id="group-gauge-3"
              :height="widgetGaugeGroup3Options.chart.height"
              :type="widgetGaugeGroup3Options.chart.type"
              :series="widgetGaugeGroup3Options.series"
              :options="widgetGaugeGroup3Options"
            >
            </ApexChart>
          </template>
        </GroupedStatWidget>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.ph.chart.height"
            :type="chartOptions.ph.chart.type"
            :series="chartOptions.ph.series"
            :options="chartOptions.ph"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.oxygen.chart.height"
            :type="chartOptions.oxygen.chart.type"
            :series="chartOptions.oxygen.series"
            :options="chartOptions.oxygen"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.orp.chart.height"
            :type="chartOptions.orp.chart.type"
            :series="chartOptions.orp.series"
            :options="chartOptions.orp"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.ec.chart.height"
            :type="chartOptions.ec.chart.type"
            :series="chartOptions.ec.series"
            :options="chartOptions.ec"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.ammonia.chart.height"
            :type="chartOptions.ammonia.chart.type"
            :series="chartOptions.ammonia.series"
            :options="chartOptions.ammonia"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.nitrite.chart.height"
            :type="chartOptions.nitrite.chart.type"
            :series="chartOptions.nitrite.series"
            :options="chartOptions.nitrite"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.nitrate.chart.height"
            :type="chartOptions.nitrate.chart.type"
            :series="chartOptions.nitrate.series"
            :options="chartOptions.nitrate"
          >
          </ApexChart>
        </div>
      </div>

      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="chartOptions.temperature.chart.height"
            :type="chartOptions.temperature.chart.type"
            :series="chartOptions.temperature.series"
            :options="chartOptions.temperature"
          >
          </ApexChart>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.ecommerce-dashboard-v1 {
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

  .dashboard-tile {
    @include vuero-s-card;

    font-family: var(--font);

    .tile-head {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        font-family: var(--font-alt);
        color: var(--light-text);
        font-size: 1rem;
        font-weight: 500;
      }
    }

    .dashboard-tile-inner {
      display: flex;
      align-items: center;

      .left {
        margin-right: 20px;
        [dir='rtl'] & {
          margin-left: 20px;
          margin-right: unset;
        }

        span {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark-text);
        }
      }

      .right {
        flex-grow: 2;
      }
    }
  }

  .table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font);
    margin: 20px 0;

    h3 {
      font-family: var(--font-alt);
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--dark-text);
    }

    .field {
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
}

.is-dark {
  .ecommerce-dashboard-v1 {
    .dashboard-tile {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .ecommerce-dashboard-v1 {
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
