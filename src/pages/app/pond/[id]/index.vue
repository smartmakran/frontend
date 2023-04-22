<script setup lang="ts">
import { onMounted } from 'vue'
import { usePondStore } from '/@src/stores/pond'
// define props for using in the component
// Access params with `params.id`
const params = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const pondStore = usePondStore()

onMounted(async () => {
  await pondStore.getPond(params.id)
})
</script>

<template>
  <div class="tabs-wrapper is-slider is-squared is-inverted">
    <div class="page-content-inner">
      <PondDetails />
      <hr />
      <AutomaticMonitoring />
      <hr />
      <ManualMonitoring :id="params.id" />
    </div>
  </div>
</template>
