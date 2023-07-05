import { useThemeColors } from '../composable/useThemeColors'
import {
  ChartBaseOption,
  ChartSeries,
  ChartTitle,
  ChartXaxis,
  ChartYaxis,
} from './base-chart.model'

export class PHChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'pH', data: [] },
    { name: 'بهینه بالا', data: [1, 2, 4, 5] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().primary,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'pH',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 2,
    max: 8,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class OxygenChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'اکسیژن', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().primary,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'اکسیژن (mg/L)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 5,
    max: 10,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class OrpChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'ORP', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'ORP(mV)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 300,
    max: 400,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class ECChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'میزان شوری', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'میزان شوری (ppt)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 17,
    max: 27,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class AmmoniaChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'آمونیاک', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'آمونیاک (ppm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0.3,
    max: 0.6,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class NitriteChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'نیتریت', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'نیتریت (ppm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class NitrateChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'نیترات', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'نیترات (ppm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}

export class TemperatureChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'دما', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().warning,
  ]
  title: ChartTitle = {
    text: 'دما (C)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 15,
    max: 40,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: 'روز گذشته از زمان کشت',
    },
  }
  constructor(
    data: number[],
    optimizeUp: number[],
    optimizeDown: number[],
    color: string,
    labels: string[]
  ) {
    super()
    this.series[0].data = data
    this.series[1].data = optimizeUp
    this.series[2].data = optimizeDown
    this.colors[0] = color
    this.labels = labels
  }
}
