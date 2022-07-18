import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

export const customersOptions = {
  series: [
    {
      name: 'بازگشتی',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'تازه وارد',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: 'قطع همکاری شده',
      data: [78, 53, 36, 10, 14, 5, 2],
    },
  ],
  chart: {
    height: 295,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.info, themeColors.green],
  title: {
    text: 'مشتریان',
    align: 'right',
  },
  legend: {
    position: 'top',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [2, 2, 2],
    curve: 'smooth',
  },
  yaxis: {
    opposite: true,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2020-09-19T00:00:00.000Z',
      '2020-09-20T01:30:00.000Z',
      '2020-09-21T02:30:00.000Z',
      '2020-09-22T03:30:00.000Z',
      '2020-09-23T04:30:00.000Z',
      '2020-09-24T05:30:00.000Z',
      '2020-09-25T06:30:00.000Z',
    ],
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
}
