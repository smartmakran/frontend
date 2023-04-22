<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'
import moment from 'moment-jalaali'
import { onMounted } from 'vue'
import { usePondStore } from '/@src/stores/pond'
import {
  ChangingWaterChartOption,
  FeedingChartOption,
  SamplingChartOption,
  TransparencyChartOption,
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
const feeding = ref(new FeedingChartOption([], '#000', []))
const changingWater = ref(new ChangingWaterChartOption([], '#000', []))
const transparency = ref(new TransparencyChartOption([], '#000', []))
onMounted(async () => {
  const result = await pondStore.manualMonitoring(params.id)

  // update sampling diagram
  sampling.value = new SamplingChartOption(
    result.sampling.map((s: any) => s.averageSize as number),
    '#000',
    result.sampling.map((s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss'))
  )

  // update feeding diagram
  feeding.value = new FeedingChartOption(
    result.feeding.map((s: any) => s.amount as number),
    '#000',
    result.feeding.map((s: any) => moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss'))
  )

  // update changing water diagram
  changingWater.value = new ChangingWaterChartOption(
    result.changingWater.map((s: any) => s.amount as number),
    '#000',
    result.changingWater.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )

  // update transparency diagram
  transparency.value = new TransparencyChartOption(
    result.transparency.map((s: any) => s.amount as number),
    '#000',
    result.transparency.map((s: any) =>
      moment(s.createdAt).format('jYYYY-jMM-jDD HH:mm:ss')
    )
  )
})

console.log(sampling)
</script>

<template>
  <div class="ecommerce-dashboard ecommerce-dashboard-v1">
    <!--Header-->
    <div class="dashboard-header">
      <div class="start">
        <h3 class="dark-inverted">پایش‌های دستی</h3>
        <p>اطلاعاتی که از کارشناس ثبت می‌کند.</p>
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
            :height="sampling.chart.height"
            :type="sampling.chart.type"
            :series="sampling.series"
            :options="sampling"
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
            :height="feeding.chart.height"
            :type="feeding.chart.type"
            :series="feeding.series"
            :options="feeding"
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
            :height="changingWater.chart.height"
            :type="changingWater.chart.type"
            :series="changingWater.series"
            :options="changingWater"
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
            :height="transparency.chart.height"
            :type="transparency.chart.type"
            :series="transparency.series"
            :options="transparency"
          >
          </ApexChart>
        </div>
      </div>
    </div>
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
