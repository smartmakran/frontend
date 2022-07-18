import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, ref, computed } from 'vue'

/**
 * Using typescript types allow better developer experience
 * with autocompletion and compiler error prechecking
 */
import type { WizardData } from '/@src/models/wizard'
import sleep from '/@src/utils/sleep'
import moment from 'moment-jalaali'

export const useWizard = defineStore('wizard', () => {
  const step = ref(1)
  const loading = ref(false)
  const data = reactive<WizardData>({
    name: '',
    description: '',
    relatedTo: 'طراح رابط کاریری و تجربه کاربری',
    logo: null,
    timeFrame: ref({
      start: new Date(),
      end: new Date(),
      range: moment().format('jYYYY-jMM-jDD'),
    }),
    budget: '-۵ میلیون',
    attachments: [],
    teammates: [],
    tools: [],
    customer: null,
  })

  const stepTitle = computed(() => {
    switch (step.value) {
      case 2:
        return 'اطلاعات پروژه'
      case 3:
        return 'جزئیات پروژه'
      case 4:
        return 'فایل‌های پروژه'
      case 5:
        return 'اعضای تیم'
      case 6:
        return 'ابزار پروژه'
      case 7:
        return 'پیش نمایش'
      case 8:
        return 'اتمام'
      case 1:
      default:
        return 'نوع پروژه'
    }
  })

  function setLoading(value: boolean) {
    loading.value = value
  }
  function setStep(value: number) {
    step.value = value
  }

  async function save() {
    loading.value = true

    // simulate saving data
    await sleep(2000)

    loading.value = false
  }

  function reset() {
    data.name = ''
    data.description = ''
    data.relatedTo = 'طراح رابط کاریری و تجربه کاربری'
    data.logo = null
    data.timeFrame = {
      start: new Date(),
      end: new Date(),
      range: moment().format('jYYYY-jMM-jDD'),
    }
    data.budget = '-۵ میلیون'
    data.attachments = []
    data.teammates = []
    data.tools = []
    data.customer = null
  }

  return {
    step,
    loading,
    stepTitle,
    data,
    setLoading,
    setStep,
    save,
    reset,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useWizard, import.meta.hot))
}
