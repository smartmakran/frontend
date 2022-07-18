import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

const randomizeArray = function (arg: number[]) {
  const array = arg.slice()
  let currentIndex = array.length,
    temporaryValue,
    randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const sparklineData = [
  472, 454, 547, 385, 562, 247, 652, 318, 379, 391, 622, 515, 355, 415, 358, 271, 932,
  534, 615, 278, 546, 435, 192, 465,
]

export const spark1 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.primary],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'مجموع فروش',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: 'مجموع فروش',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '۹,۳۷۴',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

export const spark2 = {
  chart: {
    id: 'sparkline2',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.info],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'مجموع سود',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: 'مجموع سود',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '۲۴ میلیون تومان',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

export const spark3 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.accent],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'مجموع سفارشات',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
  title: {
    text: 'مجموع سفارشات',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '۴۳۶۱ سفارش',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}

export const spark4 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    type: 'area',
    height: 130,
    sparkline: {
      enabled: true,
    },
  },
  colors: [themeColors.purple],
  stroke: {
    width: [2],
    curve: 'straight',
  },
  fill: {
    opacity: 1,
  },
  series: [
    {
      name: 'سود تلفیقی',
      data: randomizeArray(sparklineData),
    },
  ],
  labels: [...Array(24).keys()].map((n) => `2020-10-0${n + 1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0,
    labels: {
      minWidth: 100,
    },
  },
  title: {
    text: 'سود تلفیقی',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title',
      color: themeColors.lightText,
    },
  },
  subtitle: {
    text: '۱۶ میلیون تومان',
    align: 'right',
    offsetX: 0,
    style: {
      fontSize: '24px',
      fontWeight: '600',
      cssClass: 'apexcharts-yaxis-title',
    },
  },
}
