<script setup lang="ts">
import { onMounted } from 'vue'
import { useFarmStore } from '/@src/stores/farm'
import { ref } from 'vue'

// define props for using in the component
// Access params with `params.id`
const showLossesModal = ref(false)
const showFeedingCheckingModal = ref(false)
const showWaterQualityModal = ref(false)
const showWaterDataModal = ref(false)
const showFeedingDataModal = ref(false)
const showSamplingDataModal = ref(false)
const showTransparencyDataModal = ref(false)

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
onMounted(() => {
  localStorage.setItem('page-name', `مزرعه ${farmStore.currentFarm.name}`)
})

let closeFeedingChecking = () => (showFeedingCheckingModal.value = false)
let closeLosses = () => (showLossesModal.value = false)
let closeWaterQualityModal = () => (showWaterQualityModal.value = false)
let closeWaterDataModa = () => (showWaterDataModal.value = false)
let closeFeedingDataModal = () => (showFeedingDataModal.value = false)
let closeSamplingDataModal = () => (showSamplingDataModal.value = false)
let closeTransparencyDataModal = () => (showTransparencyDataModal.value = false)
</script>

<template>
  <div class="page-content-inner">
    <FeedingChecking
      :show="showFeedingCheckingModal"
      :closeModal="closeFeedingChecking"
      :showPondField="false"
    />
    <Losses :show="showLossesModal" :closeModal="closeLosses" :showPondField="false" />
    <WaterQuality
      :show="showWaterQualityModal"
      :closeModal="closeWaterQualityModal"
      :showPondField="false"
    />
    <CreateChangingWaterDataModal
      :show="showWaterDataModal"
      :close-modal="closeWaterDataModa"
      :show-pond-field="false"
    />
    <CreateFeedingDataModal
      :show="showFeedingDataModal"
      :close-modal="closeFeedingDataModal"
      :show-pond-field="false"
    />
    <CreateSamplingDataModal
      :show="showSamplingDataModal"
      :close-modal="closeSamplingDataModal"
      :show-pond-field="false"
    />
    <CreateTransparencyDataModal
      :show="showTransparencyDataModal"
      :close-modal="closeTransparencyDataModal"
      :show-pond-field="false"
    />
    <div class="nav-buttons-ponds">
      <div class="row-top">
        <VButton color="success" outlined @click="showLossesModal = true" raised
          >تلفات</VButton
        >
        <VButton color="success" outlined @click="showFeedingCheckingModal = true" raised
          >ثبت اطلاعات غذادهی</VButton
        >
        <VButton color="success" outlined @click="showWaterQualityModal = true" raised
          >اندازه گیری</VButton
        >
      </div>

      <div class="row-bottom">
        <VButton color="success" outlined @click="showSamplingDataModal = true" raised
          >اطلاعات نمونه برداری</VButton
        >
        <VButton color="success" outlined @click="showFeedingDataModal = true" raised
          >چک غذادهی</VButton
        >
        <VButton color="success" outlined @click="showWaterDataModal = true" raised
          >تعویض آب</VButton
        >
        <VButton color="success" outlined @click="showTransparencyDataModal = true" raised
          >شفافیت</VButton
        >
      </div>
    </div>
    <!-- <TestDashboard /> -->
    <div class="business-dashboard course-dashboard">
      <!--Tile Grid v1-->
      <div class="columns is-multiline tile-grid tile-grid-v2">
        <PondList />
        <!-- <CreatePondForm /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.nav-buttons-ponds {
  width: 100%;
  // height: 50px;
  background: white;
  // border: 1px solid rgb(228, 228, 228);
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px;
  .button {
    width: 100% !important;
  }
  .button:not(:last-child) {
    margin-bottom: 10px;
  }
}
@media screen and (min-width: 600px) {
  .nav-buttons-ponds {
    display: block !important;
    .button {
      margin-bottom: 0 !important;
    }
    .row-top {
      display: grid;
      grid-template-columns: 32.5% 32.5% 32.5%;
      justify-content: space-between;
    }
    .row-bottom {
      display: grid;
      grid-template-columns: 24% 24% 24% 24%;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
}
</style>
