<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import moment from 'moment-jalaali'
import { useUserSession } from '/@src/stores/userSession'
import { dashboard } from '/@src/services/modules/dashboard/dashboard.service'
import {
  AmmoniaChartOptions,
  ECChartOptions,
  NitrateChartOptions,
  NitriteChartOptions,
  OrpChartOptions,
  OxygenChartOptions,
  PHChartOptions,
  TemperatureChartOptions,
} from '/@src/models/chart.model'
import { SocketService } from '/@src/services/modules/socket/socket.service'
import { ref } from 'vue'

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
const { socket } = new SocketService()
const userSession = useUserSession()
const user = userSession.getUser()

let sensorData = ref<SensorData>()

const result = await dashboard(`/dashboard/${user._id}`)

sensorData = result.sensorData

function extractData(data: any) {
  const dates = data
    .slice(0, 5)
    .map((d: SensorData) => moment(d.createdAt).format('jYYYY-jMM-jDD hh:mm:ss'))
  const phData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.ph)
  const oxygenData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.oxygen)
  const orpData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.orp)
  const ecData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.ec)
  const ammoniaData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.ammonia)
  const nitriteData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.nitrite)
  const nitrateData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.nitrate)
  const temperatureData = sensorData
    .slice(data.length - 5, data.length + 1)
    .map((d: SensorData) => d.temperature)

  return {
    dates,
    phData,
    oxygenData,
    orpData,
    ecData,
    ammoniaData,
    nitriteData,
    nitrateData,
    temperatureData,
  }
}

socket.on('message', (data) => {
  sensorData.value = data
})

const {
  dates,
  phData,
  oxygenData,
  orpData,
  ecData,
  ammoniaData,
  nitriteData,
  nitrateData,
  temperatureData,
} = extractData(sensorData)

console.log('ppppppppp', sensorData)

const ph = new PHChartOptions(phData, dates)
const oxygen = new OxygenChartOptions(oxygenData, dates)
const orp = new OrpChartOptions(orpData, dates)
const ec = new ECChartOptions(ecData, dates)
const ammonia = new AmmoniaChartOptions(ammoniaData, dates)
const nitrite = new NitriteChartOptions(nitriteData, dates)
const nitrate = new NitrateChartOptions(nitrateData, dates)
const temperature = new TemperatureChartOptions(temperatureData, dates)
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
      <!--Line Stats Widget-->
      <div class="column is-6">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="ph.chart.height"
            :type="ph.chart.type"
            :series="ph.series"
            :options="ph"
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
            :height="oxygen.chart.height"
            :type="oxygen.chart.type"
            :series="oxygen.series"
            :options="oxygen"
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
            :height="orp.chart.height"
            :type="orp.chart.type"
            :series="orp.series"
            :options="orp"
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
            :height="ec.chart.height"
            :type="ec.chart.type"
            :series="ec.series"
            :options="ec"
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
            :height="ammonia.chart.height"
            :type="ammonia.chart.type"
            :series="ammonia.series"
            :options="ammonia"
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
            :height="nitrite.chart.height"
            :type="nitrite.chart.type"
            :series="nitrite.series"
            :options="nitrite"
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
            :height="nitrate.chart.height"
            :type="nitrate.chart.type"
            :series="nitrate.series"
            :options="nitrate"
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
            :height="temperature.chart.height"
            :type="temperature.chart.type"
            :series="temperature.series"
            :options="temperature"
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
