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
  series: ChartSeries[] = [{ name: 'ph', data: [] }]
  colors: string[] = [useThemeColors().green]
  title: ChartTitle = {
    text: 'pH',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 2,
    max: 8,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class OxygenChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'oxygen', data: [] }]
  colors: string[] = [useThemeColors().blue]
  title: ChartTitle = {
    text: 'Oxygen',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 5,
    max: 12,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class OrpChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'orp', data: [] }]
  colors: string[] = [useThemeColors().yellow]
  title: ChartTitle = {
    text: 'ORP',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 495,
    max: 510,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class ECChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'ec', data: [] }]
  colors: string[] = [useThemeColors().yellow]
  title: ChartTitle = {
    text: 'EC',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 39,
    max: 42,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class AmmoniaChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'ammonia', data: [] }]
  colors: string[] = [useThemeColors().blue]
  title: ChartTitle = {
    text: 'Ammonia',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 0.5,
    max: 0.7,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class NitriteChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'nitrite', data: [] }]
  colors: string[] = [useThemeColors().blue]
  title: ChartTitle = {
    text: 'Nitrite',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 48,
    max: 53,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class NitrateChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'nitrate', data: [] }]
  colors: string[] = [useThemeColors().green]
  title: ChartTitle = {
    text: 'Nitrite',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 38,
    max: 45,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}

export class TemperatureChartOptions extends ChartBaseOption {
  series: ChartSeries[] = [{ name: 'temperature', data: [] }]
  colors: string[] = [useThemeColors().danger]
  title: ChartTitle = {
    text: 'Temperature',
    align: 'left',
  }
  labels: string[]
  yaxis: ChartYaxis = {
    min: 22,
    max: 27,
  }

  constructor(data: number[], lables: string[]) {
    super()
    this.series[0].data = data
    this.labels = lables
  }
}
