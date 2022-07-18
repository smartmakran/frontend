import { ref } from 'vue'

export const selectSlotValue = ['default']

export const selectSlotOptions = [
  {
    value: 'default',
    name: 'انتخاب حساب کاربری',
    icon: '/images/avatars/svg/vuero-1.svg',
  },
  {
    value: '4156 1000 56565 17',
    name: '4156 1000 56565 17',
    icon: '/images/icons/dashboards/banking/bank-1.svg',
  },
  {
    value: '2247 2427 89975 12',
    name: '2247 2427 89975 12',
    icon: '/images/icons/dashboards/banking/bank-2.svg',
  },
  {
    value: '2247 2427 89975 19',
    name: '2247 2427 89975 19',
    icon: '/images/icons/dashboards/banking/bank-3.svg',
  },
]

export const valueSingle = ref(0)

export const optionsSingle = ['۱۰ روز پیش', 'ماه پیش', '۳ ماه اخیر', '۶ ماه پیش']
