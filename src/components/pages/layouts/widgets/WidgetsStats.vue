<script setup lang="ts">
import ApexChart from 'vue3-apexcharts'

import {
  spark1,
  spark2,
  spark3,
  spark4,
} from '/@src/data/widgets/charts/salesSparksChart'
import { revenueOptions } from '/@src/data/widgets/charts/revenueAreaChart'
import { lineStatsChartOptions } from '/@src/data/widgets/charts/lineStatsWidgetChart'
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
import { memberList } from '/@src/data/widgets/table/memberList'
</script>

<template>
  <div class="columns is-multiline">
    <!--Spark Tile Widgets-->
    <div class="column is-3">
      <SparkStatWidget straight>
        <ApexChart
          id="widget-spark1"
          dir="ltr"
          :height="spark1.chart.height"
          :type="spark1.chart.type"
          :series="spark1.series"
          :options="spark1"
        >
        </ApexChart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <ApexChart
          id="widget-spark2"
          dir="ltr"
          :height="spark2.chart.height"
          :type="spark2.chart.type"
          :series="spark2.series"
          :options="spark2"
        >
        </ApexChart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <ApexChart
          id="widget-spark3"
          dir="ltr"
          :height="spark3.chart.height"
          :type="spark3.chart.type"
          :series="spark3.series"
          :options="spark3"
        >
        </ApexChart>
      </SparkStatWidget>
    </div>

    <div class="column is-3">
      <SparkStatWidget straight>
        <ApexChart
          id="widget-spark4"
          dir="ltr"
          :height="spark4.chart.height"
          :type="spark4.chart.type"
          :series="spark4.series"
          :options="spark4"
        >
        </ApexChart>
      </SparkStatWidget>
    </div>

    <!--Line Stats Widget-->
    <div class="column is-6">
      <LineStatWidget
        title="عایدی"
        current-label="این ماه"
        current-value="75,648,430 میلیون"
        previous-label="ماه گذشته"
        previous-value="91,512,180 میلیون"
        straight
      >
        <ApexChart
          id="line-stats-widget-chart"
          dir="ltr"
          :height="lineStatsChartOptions.chart.height"
          :type="lineStatsChartOptions.chart.type"
          :series="lineStatsChartOptions.series"
          :options="lineStatsChartOptions"
        >
        </ApexChart>
      </LineStatWidget>
    </div>

    <!--Line Stats Widget-->
    <div class="column is-6">
      <LineStatWidget
        title="عایدی"
        current-label="این ماه"
        current-value="75,648,430 میلیون"
        previous-label="ماه گذشته"
        previous-value="91,512,180 میلیون"
        straight
      >
        <ApexChart
          id="line-stats-area-chart"
          dir="ltr"
          :height="revenueOptions.chart.height"
          :type="revenueOptions.chart.type"
          :series="revenueOptions.series"
          :options="revenueOptions"
        >
        </ApexChart>
      </LineStatWidget>
    </div>

    <!--Flex Stat Widget-->
    <div class="column is-6">
      <FlexStatWidget title="درآمد حاصل از فروش مستقیم" straight>
        <ApexChart
          id="flex-stat-circle"
          dir="ltr"
          :height="flexRadialChartCircleOptions.chart.height"
          :type="flexRadialChartCircleOptions.chart.type"
          :series="flexRadialChartCircleOptions.series"
          :options="flexRadialChartCircleOptions"
        >
        </ApexChart>
      </FlexStatWidget>
    </div>

    <!--Flex Stat Widget-->
    <div class="column is-6">
      <FlexStatWidget title="درآمد حاصل از فروش مستقیم" straight>
        <ApexChart
          id="flex-stat-radial"
          dir="ltr"
          :height="flexRadialChartStripesOptions.chart.height"
          :type="flexRadialChartStripesOptions.chart.type"
          :series="flexRadialChartStripesOptions.series"
          :options="flexRadialChartStripesOptions"
        >
        </ApexChart>
      </FlexStatWidget>
    </div>

    <!--Grouped Stat Widget-->
    <div class="column is-6">
      <GroupedStatWidget
        title="آمار بیشتر"
        :values="['264', '1,203', '3,078']"
        :labels="['تخفیف‌های جدید', 'پیشنهاد', 'تخفیف‌های پایان یافته']"
      >
        <template #chart1>
          <ApexChart
            id="group-radial-1"
            dir="ltr"
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
            dir="ltr"
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
            dir="ltr"
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
        title="آمار بیشتر"
        :values="['264', '1,203', '3,078']"
        :labels="['تخفیف‌های جدید', 'پیشنهاد', 'تخفیف‌های پایان یافته']"
        gauge
      >
        <template #chart1>
          <ApexChart
            id="group-gauge-1"
            dir="ltr"
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
            dir="ltr"
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
            dir="ltr"
            :height="widgetGaugeGroup3Options.chart.height"
            :type="widgetGaugeGroup3Options.chart.type"
            :series="widgetGaugeGroup3Options.series"
            :options="widgetGaugeGroup3Options"
          >
          </ApexChart>
        </template>
      </GroupedStatWidget>
    </div>

    <!--Followers Stat Widget-->
    <div class="column is-4">
      <SocialStatWidget icon="fab fa-twitter" value="138K" straight />
    </div>

    <!--Followers Stat Widget-->
    <div class="column is-4">
      <SocialStatWidget icon="fab fa-twitter" value="138K" straight squared />
    </div>

    <!--Followers Stat Widget-->
    <div class="column is-4">
      <SocialStatWidget icon="fab fa-twitter" value="138K" straight colored />
    </div>

    <!--Table Widget-->
    <div class="column is-12">
      <TableWidget
        title="اعضا"
        action-label="افزودن عضو"
        :data="memberList"
        straight
        squared
      />
    </div>

    <!--Table Widget-->
    <div class="column is-12">
      <TableWidget
        title="اعضا"
        action-label="افزودن عضو"
        :data="memberList"
        straight
        circled
      />
    </div>
  </div>
</template>
