<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import moment from 'moment-jalaali'
import { computed, onMounted, watch, watchEffect } from 'vue'
import { usePondStore } from '/@src/stores/pond'
import draggable from 'vuedraggable'
import { getPondDetails } from '../../services/modules/pond/pond.service'

import {
  ChangingWaterChartOption,
  FeedingChartOption,
  SamplingChartOption,
  TransparencyChartOption,
  LossessChartOption,
} from '/@src/models/manualMonitoring.model'
import { ref } from 'vue'
import { IPond } from '/@src/interfaces/pond.interface'
const params = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const pondStore = usePondStore()
const currentPond = ref()

watchEffect(async () => {
  currentPond.value = await getPondDetails(params.id)
})
onMounted(async () => {
  await pondStore.getPond(params.id)
})

const sampling = ref(new SamplingChartOption([], '#000', []))
const lossess = ref(new LossessChartOption([], '#000', []))
const feeding = ref(new FeedingChartOption([], '#000', []))
const changingWater = ref(new ChangingWaterChartOption([], '#000', []))
const transparency = ref(new TransparencyChartOption([], '#000', []))
const charts = ref()

const sortingSamplingData = ref([])
const sortingFeedingData = ref([])
const sortingChangingWaterData = ref([])
const sortingTransparencyData = ref([])
const sortingFatalityData = ref([])

watchEffect(() => {
  if (currentPond.value) {
    sortingSamplingData.value = currentPond.value.samplingData.sort(function (
      left,
      right
    ) {
      return moment.utc(left.createdAt).diff(moment.utc(right.createdAt))
    })

    sortingFeedingData.value = currentPond.value.fatalityData.sort(function (
      left,
      right
    ) {
      return moment.utc(left.createdAt).diff(moment.utc(right.createdAt))
    })

    sortingChangingWaterData.value = currentPond.value.changingWaterData
      ? currentPond.value.changingWaterData.sort(function (left, right) {
          return moment.utc(left.createdAt).diff(moment.utc(right.createdAt))
        })
      : []

    sortingTransparencyData.value = currentPond.value.transparencyData
      ? currentPond.value.transparencyData.sort(function (left, right) {
          return moment.utc(left.createdAt).diff(moment.utc(right.createdAt))
        })
      : []

    sortingFatalityData.value = currentPond.value.fatalityData
      ? currentPond.value.fatalityData.sort(function (left, right) {
          return moment.utc(left.createdAt).diff(moment.utc(right.createdAt))
        })
      : []

    console.log(sortingFatalityData.value)
  }
})

watchEffect(async () => {
  sampling.value = new SamplingChartOption(
    sortingSamplingData.value
      ? sortingSamplingData.value.map((s: any) => s.size as number)
      : [],
    '#000',
    sortingSamplingData.value
      ? sortingSamplingData.value.map(
          (s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
          // moment(moment.now()).diff(s.createdAt, 'days')
        )
      : []
  )
  // update feeding diagram
  feeding.value = new FeedingChartOption(
    sortingFeedingData.value
      ? sortingFeedingData.value.map((s: any) => s.amount as number)
      : [],
    '#000',
    sortingFeedingData.value
      ? sortingFeedingData.value.map(
          (s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
          // moment(moment.now()).diff(s.createdAt, 'days')
        )
      : []
  )

  // update changing water diagram
  changingWater.value = new ChangingWaterChartOption(
    sortingChangingWaterData.value
      ? sortingChangingWaterData.value.map((s: any) => s.amount as number)
      : [],
    '#000',
    sortingChangingWaterData.value
      ? sortingChangingWaterData.value.map(
          (s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
          // moment(moment.now()).diff(s.createdAt, 'days')
        )
      : []
  )

  // update transparency diagram
  transparency.value = new TransparencyChartOption(
    sortingTransparencyData.value.map((s: any) => s.amount as number),
    '#000',
    sortingTransparencyData.value.map(
      (s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
      // moment(moment.now()).diff(s.createdAt, 'days')
    )
  )

  lossess.value = new LossessChartOption(
    sortingFatalityData.value
      ? sortingFatalityData.value.map((s: any) => s.amount as number)
      : [],
    '#000',
    currentPond.value.fatalityData.map(
      (s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
      // moment(moment.now()).diff(s.createdAt, 'days')
    )
  )

  charts.value = [
    {
      height: sampling.value.chart.height,
      type: sampling.value.chart.type,
      series: sampling.value.series,
      options: sampling.value,
    },
    {
      height: feeding.value.chart.height,
      type: feeding.value.chart.type,
      series: feeding.value.series,
      options: feeding.value,
    },

    {
      height: changingWater.value.chart.height,
      type: changingWater.value.chart.type,
      series: changingWater.value.series,
      options: changingWater.value,
    },
    {
      height: transparency.value.chart.height,
      type: transparency.value.chart.type,
      series: transparency.value.series,
      options: transparency.value,
    },
    {
      height: lossess.value.chart.height,
      type: lossess.value.chart.type,
      series: lossess.value.series,
      options: lossess.value,
    },
  ]
})

const activateDraggable = ref(false)

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
