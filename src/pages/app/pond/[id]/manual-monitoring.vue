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
  <div class="page-content-inner">
    <!-- <TestDashboard /> -->
    <div class="business-dashboard course-dashboard">
      <!--Tile Grid v1-->
      <div class="columns is-multiline tile-grid tile-grid-v2">
        <CreateSamplingData />
        <CreateFeedingData />
        <CreateChangingWaterData />
        <CreateTransparencyData />
      </div>
    </div>
  </div>
</template>
