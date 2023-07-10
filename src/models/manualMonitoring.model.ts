import { useThemeColors } from '../composable/useThemeColors'
import {
  ChartBaseOption,
  ChartSeries,
  ChartTitle,
  ChartYaxis,
  ChartXaxis,
} from './base-chart.model'

export class SamplingChartOption extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'نمونه‌برداری', data: [] }]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'نمونه برداری (g)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 100,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    tickAmount: 10,
  }
  constructor(data: number[], color: string, labels: string[]) {
    super()
    this.series[0].data = data
    this.colors[0] = color
    this.labels = labels
  }
}

export class FeedingChartOption extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'غذادهی', data: [] }]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'غذادهی (kg)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 100,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    tickAmount: 10,
  }
  constructor(data: number[], color: string, labels: string[]) {
    super()
    this.series[0].data = data
    this.colors[0] = color
    this.labels = labels
  }
}

export class ChangingWaterChartOption extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'تعویض آب', data: [] }]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'تعویض آب (درصد)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 100,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    tickAmount: 10,
  }
  constructor(data: number[], color: string, labels: string[]) {
    super()
    this.series[0].data = data
    this.colors[0] = color
    this.labels = labels
  }
}

export class TransparencyChartOption extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'شفافیت', data: [] }]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().lightText,
  ]

  title: ChartTitle = {
    text: 'شفافیت (cm)',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 100,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    tickAmount: 10,
  }
  constructor(data: number[], color: string, labels: string[]) {
    super()
    this.series[0].data = data
    this.colors[0] = color
    this.labels = labels
  }
}

export class LossessChartOption extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'تلفات', data: [] }]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().danger,
    useThemeColors().lightText,
  ]

  title: ChartTitle = {
    text: 'تلفات',
    align: 'right',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 100,
  }
  xaxis: ChartXaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
    tickAmount: 10,
  }
  constructor(data: number[], color: string, labels: string[]) {
    super()
    this.series[0].data = data
    this.colors[0] = color
    this.labels = labels
  }
}
