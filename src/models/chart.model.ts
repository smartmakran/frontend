import { useThemeColors } from '../composable/useThemeColors'

type ChartSeries = {
  name: string
  data: number[]
}

type ChartTitle = {
  text: string
  align: string
}

type ChartYaxis = {
  min: number
  max: number
}

export abstract class ChartBaseOption {
  abstract series: ChartSeries[]
  abstract colors: string[]
  abstract title: ChartTitle
  abstract labels: string[]
  abstract yaxis: ChartYaxis

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

  xaxis = {
    type: 'date',
    labels: {
      datetimeUTC: false,
    },
    tooltip: {
      enabled: false,
    },
  }

  legend = {
    horizontalAlign: 'left',
  }

  tooltip = {
    x: {
      show: false,
    },
  }
}

export class PHChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [
    { name: 'ph', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'pH',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 2,
    max: 8,
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
    { name: 'oxygen', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'Oxygen',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 12,
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
    { name: 'orp', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'ORP',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 250,
    max: 450,
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
    { name: 'ec', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'EC',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 10,
    max: 35,
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
    { name: 'ammonia', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'Ammonia',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 0.7,
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
    { name: 'nitrite', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'Nitrite',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
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
    { name: 'nitrate', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'Nitrate',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0,
    max: 2,
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
    { name: 'temperature', data: [] },
    { name: 'بهینه بالا', data: [] },
    { name: 'بهینه پایین', data: [] },
  ]
  colors: string[] = [
    useThemeColors().primary,
    useThemeColors().lightText,
    useThemeColors().lightText,
  ]
  title: ChartTitle = {
    text: 'Temperature',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 20,
    max: 40,
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
