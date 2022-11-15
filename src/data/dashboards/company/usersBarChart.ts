import { reactive } from 'vue'
import { useThemeColors } from '/@src/composable/useThemeColors'
const themeColors = useThemeColors()

//Bar Chart
export const barData = [
  {
    x: 'اسفند',
    y: 322,
  },
  {
    x: 'بهمن',
    y: 459,
  },
  {
    x: 'دی',
    y: 212,
  },
  {
    x: 'آذر',
    y: 345,
  },
  {
    x: 'آبان',
    y: 111,
  },
  {
    x: 'مهر',
    y: 189,
  },
  {
    x: 'شهریور',
    y: 498,
  },
  {
    x: 'مرداد',
    y: 612,
  },
  {
    x: 'تیر',
    y: 451,
  },
  {
    x: 'خرداد',
    y: 248,
  },
  {
    x: 'اردیبهشت',
    y: 306,
  },
  {
    x: 'فروردین',
    y: 366,
  },
]

export const barData2 = [
  {
    x: 'اسفند',
    y: 25,
  },
  {
    x: 'بهمن',
    y: 49,
  },
  {
    x: 'دی',
    y: 36,
  },
  {
    x: 'آذر',
    y: 84,
  },
  {
    x: 'آبان',
    y: 64,
  },
  {
    x: 'مهر',
    y: 131,
  },
  {
    x: 'شهریور',
    y: 48,
  },
  {
    x: 'مرداد',
    y: 144,
  },
  {
    x: 'تیر',
    y: 96,
  },
  {
    x: 'خرداد',
    y: 11,
  },
  {
    x: 'اردیبهشت',
    y: 31,
  },
  {
    x: 'فروردین',
    y: 8,
  },
]

export const usersBarOptions = reactive<any>({
  series: [
    {
      name: 'ph',
      data: [10, 12, 12, 5, 12],
    },
    {
      name: 'بهینه بالا',
      data: [10.5, 12.5, 12.5, 5.5, 12.5],
    },
    {
      name: 'بهینه پایین',
      data: [9.5, 11.5, 11.5, 4.5, 11.5],
    },
  ],
  chart: {
    height: 235,
    type: 'bar',
    toolbar: {
      show: false,
    },
  },
  colors: [themeColors.accent, themeColors.primary],
  dataLabels: {
    enabled: false,
  },
  noData: {
    text: 'درحال بارگذاری ...',
  },
  xaxis: {
    type: 'category',
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      rotateAlways: true,
    },
  },
})
