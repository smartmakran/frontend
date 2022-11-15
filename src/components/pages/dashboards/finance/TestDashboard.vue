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
import { ref, onMounted, reactive } from 'vue'

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

const props = withDefaults(
  defineProps<{
    activeTab?: string
  }>(),
  {
    activeTab: 'daily',
  }
)
const { socket } = new SocketService()
const userSession = useUserSession()
const user = userSession.getUser()
const tab = ref(props.activeTab)

const { sensorData, optimalData, pools } = await dashboard(`/dashboard/${user._id}`)

function extractData(data: any, optimal: any) {
  if (data.length > 10) {
    data = data.slice(data.length - 5, data.length)
  }

  const dates = data.map((d: SensorData) =>
    moment(d.createdAt).format('jYYYY-jMM-jDD hh:mm:ss')
  )

  const phData = data.map((d: SensorData) => d.ph)
  const phUp = data.map(() => optimal[0].ph + 0.5)
  const phDown = data.map(() => optimal[0].ph - 0.5)

  const oxygenData = data.map((d: SensorData) => d.oxygen)
  const oxygenUp = data.map(() => (optimal[0].oxygen + 2).toFixed(2))
  const oxygenDown = data.map(() => (optimal[0].oxygen - 2).toFixed(2))

  const orpData = data.map((d: SensorData) => d.orp)
  const orpUp = data.map(() => optimal[0].orp + 20)
  const orpDown = data.map(() => optimal[0].orp - 20)

  const ecData = data.map((d: SensorData) => d.ec)
  const ecUp = data.map(() => optimal[0].ec + 4)
  const ecDown = data.map(() => optimal[0].ec - 4)

  const ammoniaData = data.map((d: SensorData) => d.ammonia)
  const ammoniaUp = data.map(() => (optimal[0].ammonia + 0.05).toFixed(2))
  const ammoniaDown = data.map(() => (optimal[0].ammonia - 0.05).toFixed(2))

  const nitriteData = data.map((d: SensorData) => d.nitrite)
  const nitriteUp = data.map(() => (optimal[0].nitrite + 0.1).toFixed(2))
  const nitriteDown = data.map(() => (optimal[0].nitrite - 0.1).toFixed(2))

  const nitrateData = data.map((d: SensorData) => d.nitrate)
  const nitrateUp = data.map(() => (optimal[0].nitrate + 0.1).toFixed(2))
  const nitrateDown = data.map(() => (optimal[0].nitrate - 0.1).toFixed(2))

  const temperatureData = data.map((d: SensorData) => d.temperature)
  const temperatureUp = data.map(() => optimal[0].temperature + 3)
  const temperatureDown = data.map(() => optimal[0].temperature - 3)

  return {
    dates,
    phData,
    phUp,
    phDown,
    oxygenData,
    oxygenUp,
    oxygenDown,
    orpData,
    orpUp,
    orpDown,
    ecData,
    ecUp,
    ecDown,
    ammoniaData,
    ammoniaUp,
    ammoniaDown,
    nitriteData,
    nitriteUp,
    nitriteDown,
    nitrateData,
    nitrateUp,
    nitrateDown,
    temperatureData,
    temperatureUp,
    temperatureDown,
  }
}

const {
  dates,
  phData,
  phUp,
  phDown,
  oxygenData,
  oxygenUp,
  oxygenDown,
  orpData,
  orpUp,
  orpDown,
  ecData,
  ecUp,
  ecDown,
  ammoniaData,
  ammoniaUp,
  ammoniaDown,
  nitriteData,
  nitriteUp,
  nitriteDown,
  nitrateData,
  nitrateUp,
  nitrateDown,
  temperatureData,
  temperatureUp,
  temperatureDown,
} = extractData(sensorData, optimalData)

const ph = reactive<any>({
  ...new PHChartOptions(phData, phUp, phDown, dates),
})
const oxygen = reactive<any>({
  ...new OxygenChartOptions(oxygenData, oxygenUp, oxygenDown, dates),
})
const orp = reactive<any>({ ...new OrpChartOptions(orpData, orpUp, orpDown, dates) })
const ec = reactive<any>({ ...new ECChartOptions(ecData, ecUp, ecDown, dates) })
const ammonia = reactive<any>({
  ...new AmmoniaChartOptions(ammoniaData, ammoniaUp, ammoniaDown, dates),
})
const nitrite = reactive<any>({
  ...new NitriteChartOptions(nitriteData, nitriteUp, nitriteDown, dates),
})
const nitrate = reactive<any>({
  ...new NitrateChartOptions(nitrateData, nitrateUp, nitrateDown, dates),
})
const temperature = reactive<any>({
  ...new TemperatureChartOptions(temperatureData, temperatureUp, temperatureDown, dates),
})

onMounted(async () => {
  socket.on('message', (data) => {
    const {
      dates,
      phData,
      phUp,
      phDown,
      oxygenData,
      oxygenUp,
      oxygenDown,
      orpData,
      orpUp,
      orpDown,
      ecData,
      ecUp,
      ecDown,
      ammoniaData,
      ammoniaUp,
      ammoniaDown,
      nitriteData,
      nitriteUp,
      nitriteDown,
      nitrateData,
      nitrateUp,
      nitrateDown,
      temperatureData,
      temperatureUp,
      temperatureDown,
    } = extractData(data, optimalData)

    console.log(dates)

    ph.labels = []
    ph.series[0].data = phData
    ph.series[1].data = phUp
    ph.series[2].data = phDown

    oxygen.series[0].data = oxygenData
    oxygen.series[1].data = oxygenUp
    oxygen.series[2].data = oxygenDown
    oxygen.labels = dates

    orp.series[0].data = orpData
    orp.series[1].data = orpUp
    orp.series[2].data = orpDown
    orp.labels = dates

    ec.series[0].data = ecData
    ec.series[1].data = ecUp
    ec.series[2].data = ecDown
    ec.labels = dates

    ammonia.series[0].data = ammoniaData
    ammonia.series[1].data = ammoniaUp
    ammonia.series[2].data = ammoniaDown
    ammonia.labels = dates

    nitrite.series[0].data = nitriteData
    nitrite.series[1].data = nitriteUp
    nitrite.series[2].data = nitriteDown
    nitrite.labels = dates

    nitrate.series[0].data = nitrateData
    nitrate.series[1].data = nitrateUp
    nitrate.series[2].data = nitrateDown
    nitrate.labels = dates

    temperature.series[0].data = temperatureData
    temperature.series[1].data = temperatureUp
    temperature.series[2].data = temperatureDown
    temperature.labels = dates

    console.log(ph, oxygen.labels)
  })
})
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
        <VButton :to="`/app/pool/${pools[0].pools._id}`" color="primary" elevated
          >مدیریت استخر</VButton
        >
      </div>
    </div>

    <!-- Filter -->
    <div class="tabs-wrapper is-triple-slider">
      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[tab === 'daily' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'daily'"
                @click="changeFilter('daily')"
                ><span>روزانه</span></a
              >
            </li>
            <li :class="[tab === 'weekly' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'weekly'"
                @click="changeFilter('weekly')"
                ><span>هفتگی</span></a
              >
            </li>
            <li :class="[tab === 'monthly' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="tab = 'monthly'"
                @click="changeFilter('monthly')"
                ><span>ماهانه</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Charts -->
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

  .tabs-wrapper {
    .tabs-inner {
      .tabs {
        margin: 20px auto;
        background: var(--white);
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
