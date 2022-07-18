<script setup lang="ts">
import { computed, ref } from 'vue'

import type { WizardCustomer } from '/@src/models/wizard'
import { customers } from '/@src/data/wizard'
import { useWizard } from '/@src/stores/wizard'

const search = ref('')
const wizard = useWizard()

const filteredCustomers = computed<WizardCustomer[]>(() => {
  if (!search.value) {
    return []
  }

  return customers
    .filter((item) => {
      return (
        item.name.match(new RegExp(search.value, 'i')) ||
        item.location.match(new RegExp(search.value, 'i'))
      )
    })
    .splice(0, 4)
})

const selectCustomer = (customer: WizardCustomer | null) => {
  wizard.data.customer = customer
}
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">اطلاعات بیشتری از پروژه‌ی خود ارائه دهید</h2>
      <p>
        دیگر اطلاعات مفید درخصوص پروژه خود وارد بفرمائید. این اطلاعات هر زمان قابل ویرایش
        می‌باشد.
      </p>
    </div>

    <div class="project-customer">
      <h4>مشتری</h4>

      <VField v-if="!wizard.data.customer">
        <VControl icon="feather:search">
          <input v-model="search" class="input" placeholder="جستجو..." />
        </VControl>
      </VField>

      <VBlock
        v-if="wizard.data.customer"
        :title="wizard.data.customer.name"
        :subtitle="wizard.data.customer.location"
        center
      >
        <template #icon>
          <VAvatar size="medium" :picture="wizard.data.customer.logo" />
        </template>

        <template #action>
          <VIconButton
            size="small"
            icon="feather:x"
            circle
            @click="selectCustomer(null)"
          />
        </template>
      </VBlock>

      <template v-else-if="filteredCustomers.length > 0">
        <TransitionGroup name="list" tag="div">
          <VBlock
            v-for="customer in filteredCustomers"
            :key="customer.name"
            :title="customer.name"
            :subtitle="customer.location"
            center
          >
            <template #icon>
              <VAvatar size="medium" :picture="customer.logo" />
            </template>

            <template #action>
              <VIconButton
                size="small"
                icon="feather:plus"
                circle
                @click="selectCustomer(customer)"
              />
            </template>
          </VBlock>
        </TransitionGroup>
      </template>
    </div>

    <div class="project-dates">
      <h4>بازه زمانی برای اجرای پروژه</h4>
      <div class="project-dates-inner">
        <div class="project-date">
          <date-picker
            v-model="wizard.data.timeFrame.range"
            class="control"
            range
            clearable
            auto-submit
            format="jYYYY/jMM/jDD"
          ></date-picker>
        </div>
      </div>
      <!--VDatePicker v-model="wizard.data.timeFrame" is-range color="green" trim-weeks>
        <template #default="{ inputValue, inputEvents }">
          <div class="project-dates-inner">
            <div class="project-date">
              <div class="date-icon">
                <i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i>
              </div>
              <VControl>
                <input
                  :value="inputValue.start"
                  class="input form-datepicker"
                  placeholder="روز شروع"
                  v-on="inputEvents.start"
                />
              </VControl>
            </div>
            <div class="separator"></div>
            <div class="project-date">
              <div class="date-icon">
                <i aria-hidden="true" class="iconify" data-icon="feather:flag"></i>
              </div>
              <VControl>
                <input
                  :value="inputValue.end"
                  class="input form-datepicker"
                  placeholder="روز پایان"
                  v-on="inputEvents.end"
                />
              </VControl>
            </div>
          </div>
        </template>
      </VDatePicker-->
    </div>

    <div class="project-budget">
      <h4>بودجه پروژه</h4>
      <div class="project-budget-inner">
        <div class="budget-item">
          <a
            class="budget-item-inner"
            :class="[wizard.data.budget === '< 5K' && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="wizard.data.budget = '< 5K'"
            @click="wizard.data.budget = '< 5K'"
          >
            <span>- 5 میلیون</span>
          </a>
          <a
            class="budget-item-inner"
            :class="[wizard.data.budget === '< 30K' && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="wizard.data.budget = '< 30K'"
            @click="wizard.data.budget = '< 30K'"
          >
            <span>- 15 میلیون</span>
          </a>
          <a
            class="budget-item-inner"
            :class="[wizard.data.budget === '< 100K' && 'is-active']"
            tabindex="0"
            @keydown.space.prevent="wizard.data.budget = '< 100K'"
            @click="wizard.data.budget = '< 100K'"
          >
            <span>- 25 میلیون</span>
          </a>
          <a
            class="budget-item-inner"
            :class="[wizard.data.budget === '100K+' && 'is-active']"
            tabindex="0"
            @click="wizard.data.budget = '100K+'"
            @keydown.space.prevent="wizard.data.budget = '100K+'"
          >
            <span>+ 25 میلیون</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
