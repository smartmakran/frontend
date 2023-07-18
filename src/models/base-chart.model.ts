import { useThemeColors } from '../composable/useThemeColors'

export type ChartSeries = {
  data: number[]
}
export type ChartXaxis = {
  type: string
  labels: any
  tooltip: any
  title: any
  tickAmount: number
}
export type ChartTitle = {
  text: string
  align: string
}

export type ChartYaxis = {
  min: number
  max: number
}
export type ChartAnnotations = {
  yaxis: any
}

export abstract class ChartBaseOption {
  abstract series: ChartSeries[]
  abstract colors: string[]
  abstract title: ChartTitle
  abstract labels: string[]
  abstract yaxis: ChartYaxis
  abstract xaxis: ChartXaxis
  abstract annotations: ChartAnnotations
  chart = {
    type: 'line',
    height: 400,
  }
  dataLabels = {
    enabled: false,
  }

  markers = {
    size: [2, 4],
    colors: [useThemeColors().danger, useThemeColors().warning],
    strokeWidth: 0,
    strokeOpacity: 0.9,
  }
  stroke = {
    width: [2],
    curve: 'straight',
  }

  // xaxis = {
  //   type: 'date',
  //   labels: {
  //     datetimeUTC: false,
  //   },
  //   tooltip: {
  //     enabled: false,
  //   },
  // }

  legend = {
    horizontalAlign: 'left',
  }
  tooltip = {
    x: {
      show: false,
    },
  }
}
