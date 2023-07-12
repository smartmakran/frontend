<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import moment from 'moment-jalaali'
import { onMounted, watchEffect } from 'vue'
import { usePondStore } from '/@src/stores/pond'
import draggable from 'vuedraggable'
import {
  ChangingWaterChartOption,
  FeedingChartOption,
  SamplingChartOption,
  TransparencyChartOption,
  LossessChartOption,
} from '/@src/models/manualMonitoring.model'
import { ref } from 'vue'

const params = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const pondStore = usePondStore()

const sampling = ref(new SamplingChartOption([], '#000', []))
const lossess = ref(new LossessChartOption([], '#000', []))
const feeding = ref(new FeedingChartOption([], '#000', []))
const changingWater = ref(new ChangingWaterChartOption([], '#000', []))
const transparency = ref(new TransparencyChartOption([], '#000', []))

onMounted(async () => {
  // const result = await pondStore.manualMonitoring(params.id)
  const result = JSON.parse(localStorage.getItem('pond'))
  console.log(result)
  const samplingAmount = result.samplingData.map((s) => s.amount)
  const feedingAmount = result.feedingData.map((s) => s.amount)
  const changingWaterAmount = result.changingWaterData.map((s) => s.amount)
  const transparencyAmount = result.transparencyData.map((s) => s.amount)
  const lossesAmount = result.fatalityData.map((s) => s.amount)

  const samplingCreatedAt = result.samplingData.map((s) => s.createdAt)
  const feedingCreatedAt = result.feedingData.map((s) => s.createdAt)
  const changingWaterCreatedAt = result.changingWaterData.map((s) => s.createdAt)
  const transparencyCreatedAt = result.transparencyData.map((s) => s.createdAt)
  const lossesCreatedAt = result.fatalityData.map((s) => s.createdAt)

  // update sampling diagram
  sampling.value = new SamplingChartOption(
    result.samplingData.map((s: any) => s.averageSize as number),
    '#000',
    result.samplingData.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )

  // update feeding diagram
  feeding.value = new FeedingChartOption(
    result.feedingData.map((s: any) => s.amount as number),
    '#000',
    result.feedingData.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )

  // update changing water diagram
  changingWater.value = new ChangingWaterChartOption(
    result.changingWaterData.map((s: any) => s.amount as number),
    '#000',
    result.changingWaterData.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )

  // update transparency diagram
  transparency.value = new TransparencyChartOption(
    result.transparencyData.map((s: any) => s.amount as number),
    '#000',
    result.transparencyData.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )

  lossess.value = new LossessChartOption(
    result.fatalityData.map((s: any) => s.amount as number),
    '#000',
    result.fatalityData.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )
})

const activateDraggable = ref(false)
console.log('object')
console.log(sampling)
console.log(sampling.value)
const charts = ref([
  {
    height: sampling.value.chart.height,
    type: sampling.value.chart.type,
    series: sampling.value.series,
    options: sampling.value,
  },
  {
    height: feeding._rawValue.chart.height,
    type: feeding._rawValue.chart.type,
    series: feeding._rawValue.series,
    options: feeding._rawValue,
  },
  {
    height: changingWater._rawValue.chart.height,
    type: changingWater._rawValue.chart.type,
    series: changingWater._rawValue.series,
    options: changingWater._rawValue,
  },
  {
    height: transparency._rawValue.chart.height,
    type: transparency._rawValue.chart.type,
    series: transparency._rawValue.series,
    options: transparency._rawValue,
  },
  {
    height: lossess._rawValue.chart.height,
    type: lossess._rawValue.chart.type,
    series: lossess._rawValue.series,
    options: lossess._rawValue,
  },
])
watchEffect(() => {
  if (localStorage.getItem('chart_manual') !== null) {
    charts.value = JSON.parse(localStorage.getItem('chart_manual'))
  }
})

const dragChartHandle = () => {
  localStorage.setItem('chart_manual', JSON.stringify(charts._rawValue))
}
</script>

<template>
  <div class="ecommerce-dashboard ecommerce-dashboard-v1">
    <!--Header-->
    <div class="dashboard-header">
      <div class="start">
        <div class="dashboard-header-chart">
          <h3 class="dark-inverted">پایش‌های دستی</h3>
          <label class="checked-draggable-container" for="activateDraggable">
            <span>تغیر ترتیب نمودار ها</span>
            <div class="checked-draggable">
              <input v-model="activateDraggable" type="checkbox" name="" id="" />
              <div class="checked-draggable-btn"></div>
            </div>
          </label>
        </div>

        <p>اطلاعاتی که از کارشناس ثبت می‌کند.</p>
      </div>
    </div>

    <div class="columns is-multiline" v-if="activateDraggable === false">
      <div class="column is-6" v-for="(item, key) in charts" :key="key">
        <div class="s-card">
          <ApexChart
            id="apex-chart-5"
            dir="ltr"
            :height="item.height"
            :type="item.type"
            :series="item.series"
            :options="item.options"
          >
          </ApexChart>
        </div>
      </div>
    </div>
    <!-- Charts -->

    <draggable
      @change="dragChartHandle"
      class="columns is-multiline"
      v-if="activateDraggable === true"
      v-model="charts"
      group="charts"
    >
      <template #item="{ element: chart }">
        <div class="column is-6">
          <div class="s-card chart-box">
            <ApexChart
              id="apex-chart-5"
              dir="ltr"
              :height="chart.height"
              :type="chart.type"
              :series="chart.series"
              :options="chart.options"
              labels="[1,23,4]"
            >
            </ApexChart>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/mixins';

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
.chart-box:hover {
  background: rgb(247, 247, 247);
  cursor: all-scroll;
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
.checked-draggable-container {
  display: flex;
}
.checked-draggable {
  width: 40px;
  height: 25px;
  border-radius: 50px;
  background: #283252;
  position: relative;
  cursor: pointer;
  margin-right: 8px;
  .checked-draggable-btn {
    width: 21px;
    height: 21px;
    background: #d5d8e4;
    border-radius: 30px;
    position: absolute;
    top: 2px;
    right: 2px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    opacity: 0;
    cursor: pointer;
    &:checked {
      & + .checked-draggable-btn {
        right: 17px;
      }
    }
  }
}
</style>
