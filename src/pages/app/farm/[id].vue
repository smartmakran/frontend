<script setup lang="ts">
import { onMounted } from 'vue'
import { useFarmStore } from '/@src/stores/farm'

// define props for using in the component
// Access params with `params.id`
const params = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const farmStore = useFarmStore()

onMounted(async () => {
  await farmStore.getFarm(params.id)
})
</script>

<template>
  <div class="page-content-inner">
    <!-- <TestDashboard /> -->
    <div class="business-dashboard course-dashboard">
      <!--Tile Grid v1-->
      <div class="columns is-multiline tile-grid tile-grid-v2">
        <PondList />
        <CreatePondForm />
      </div>
    </div>
  </div>
</template>
