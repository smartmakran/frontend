export type ChartSeries = {
  name: string
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

export abstract class ChartBaseOption {
  abstract series: ChartSeries[]
  abstract colors: string[]
  abstract title: ChartTitle
  abstract labels: string[]
  abstract yaxis: ChartYaxis
  abstract xaxis: ChartXaxis

  chart = {
    type: 'area',
    height: 400,
  }

  dataLabels = {
    enabled: false,
  }

  stroke = {
    width: [2, 2, 2],
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
