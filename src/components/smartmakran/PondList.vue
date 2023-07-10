<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { IPond } from '/@src/interfaces/pond.interface'
import { useFarmStore } from '/@src/stores/farm'
import { usePondStore } from '/@src/stores/pond'
import { ref } from 'vue'

const farmStore = useFarmStore()
const showCreatePond = ref(false)
const pondStore = usePondStore()

let filteredPonds = computed<IPond[]>(() => {
  return farmStore.currentFarm.ponds || []
})

let sensorData = JSON.parse(localStorage.getItem('sensorData'))
sensorData.sort((a, b) => a.createdAt - b.createdAt)
let closing = () => (showCreatePond.value = false)

const getBiomass = (size, larv) => {
  // console.log(array)
  if (size && larv) {
    let sum = size.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    let length = size.length
    let avarage = sum / length
    let getKiloGram = avarage / 1000
    return getKiloGram * larv
  } else {
    return 0
  }
}
const getAverageSize = (size) => {
  if (size) {
    let sum = size.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    let length = size.length
    let avarage = sum / length
    let getKiloGram = avarage / 1000
    return getKiloGram
  } else {
    return 0
  }
}
const getFCR = (pond) => {
  if (pond.samplingData.length) {
    let res = pond.feedingData.map((obj) => obj.amount)
    let sum = res.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    let biomass = getBiomass(pond.samplingData[0].size, pond.larvaCount)
    return sum / biomass
  }
}
const getDencity = (pond) => {
  let area = pond.dimensions.width * pond.dimensions.length
  let dencity = pond.larvaCount / area
  return dencity
}
</script>

<template>
  <!--Grid item-->
  <CreatePondForm :show-field-farm="false" :show="showCreatePond" :closeForm="closing" />
  <div class="column">
    <div class="dashboard-title">
      <div class="left">
        <h2 class="dark-inverted">حوضچه‌ها</h2>
        <p class="h-hidden-mobile">جزئیاتی از حوضچه‌ها شما</p>
      </div>
      <div class="right">
        <div class="field items-center">
          <div class="control has-icon mb-15px">
            <input
              type="text"
              class="input is-rounded search-input"
              placeholder="جستجوی حوضچه‌ها..."
            />
            <div class="form-icon">
              <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
            </div>
          </div>
          <VButton raised color="primary" @click="showCreatePond = true">
            ثبت حوضچه جدید
          </VButton>
        </div>
      </div>
    </div>

    <!--List-->
    <div class="list-view list-view-v3">
      <!--List Empty Search Placeholder -->
      <VPlaceholderPage
        :class="[filteredPonds.length !== 0 && 'is-hidden']"
        title="ما هیچ نتیجه مطابقی پیدا نکردیم."
        subtitle="خیلی بد. به نظر می رسد هیچ نتیجه مطابقی برای عبارات جستجویی که وارد کرده اید پیدا نکردیم. لطفاً عبارتها یا معیارهای جستجوی مختلف را امتحان کنید."
        larger
      >
        <template #image>
          <img
            class="light-image"
            src="/@src/assets/illustrations/placeholders/search-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/placeholders/search-3-dark.svg"
            alt=""
          />
        </template>
      </VPlaceholderPage>

      <!--Active Tab-->
      <div id="active-items-tab" class="tab-content is-active">
        <div class="list-view-inner">
          <TransitionGroup name="list-complete" tag="div">
            <!--Farm List-->

            <!-- remove card start -->
            <!-- remove card end -->
            <div v-for="pond in filteredPonds" :key="pond.id" class="card-pond">
              <!-- {{ getFCR(pond) }} -->
              <!-- {{ getDencity(pond) }} -->
              <!-- {{ sum(pond.feedingData) }} -->
              <!-- {{
                getBiomass(
                  pond?.samplingData.length && pond?.samplingData[0].size,
                  pond.larvaCount
                )
              }} -->
              <div class="card-pond-header card-pond-list">
                <div>
                  <VIconBox color="primary">
                    <i aria-hidden="true" class="fas fa-home"></i>
                  </VIconBox>
                  <div>
                    <h3>{{ pond.name }}</h3>
                    <div class="card-pond-header-attrs">
                      <span class="card-pond-header-attrs-dimensions"
                        >ابعاد : {{ pond.dimensions?.width }}x{{
                          pond.dimensions?.length
                        }}x{{ pond.dimensions.depth }}</span
                      >
                      <span class="card-pond-header-attrs-date">
                        تاریخ ثبت :
                        {{ new Date(pond.createdAt).toLocaleDateString('fa') }}
                      </span>
                    </div>
                  </div>
                </div>
                <RouterLink :to="{ name: 'app-pond-id', params: { id: pond.id } }">
                  <VButton color="primary" outlined raised> جزئیات </VButton>
                </RouterLink>
              </div>
              <div class="card-pond-attrs">
                <div class="card-pond-body">
                  <div class="card-pond-attr">
                    <div class="card-pond-attr-icon">
                      <img src="/@src/assets/smartmakran/icons-box/bio.svg" alt="" />
                    </div>
                    <h4>حجم توده زنده</h4>
                    <p>
                      {{
                        getBiomass(
                          pond?.samplingData.length && pond?.samplingData[0].size,
                          pond.larvaCount
                        )
                      }}
                    </p>
                  </div>
                </div>
                <div class="card-pond-body">
                  <div class="card-pond-attr">
                    <div class="card-pond-attr-icon">
                      <img src="/@src/assets/smartmakran/icons-box/sal1.svg" alt="" />
                    </div>
                    <h4>میزان شوری</h4>
                    <p>
                      {{ pond?.sensorData[0]?.ec ? pond?.sensorData[0].ec : 0 }}
                    </p>
                    <!-- <p v-for="pondDetail in sensorData" :key="pondDetail._id">
                      <span v-if="pond.id !== pondDetail.pond">-</span>
                      <span v-if="pond.id === pondDetail.pond">{{ pondDetail.ec }}</span>
                    </p> -->
                  </div>
                </div>
                <div class="card-pond-body">
                  <div class="card-pond-attr">
                    <div class="card-pond-attr-icon">
                      <img src="/@src/assets/smartmakran/icons-box/do1.svg" alt="" />
                    </div>
                    <h4>اکسیژن</h4>
                    <p>
                      {{ pond?.sensorData[0]?.oxygen ? pond?.sensorData[0]?.oxygen : 0 }}
                    </p>
                  </div>
                </div>
                <div class="card-pond-body">
                  <div class="card-pond-attr">
                    <div class="card-pond-attr-icon">
                      <img src="/@src/assets/smartmakran/icons-box/size.svg" alt="" />
                    </div>
                    <h4>میانگین سایز</h4>
                    <p>
                      {{
                        getAverageSize(
                          pond?.samplingData.length && pond?.samplingData[0].size
                        )
                      }}
                    </p>
                  </div>
                </div>

                <div class="card-pond-body">
                  <div class="card-pond-attr">
                    <div class="card-pond-attr-icon">
                      <img src="/@src/assets/smartmakran/icons-box/ph.svg" alt="" />
                    </div>
                    <h4>pH</h4>
                    <p>
                      {{ pond?.sensorData[0]?.ph ? pond?.sensorData[0]?.ph : 0 }}
                    </p>
                  </div>
                </div>
                <div class="card-pond-body">
                  <div class="card-pond-attr">
                    <div class="card-pond-attr-icon">
                      <img src="/@src/assets/smartmakran/icons-box/temp.svg" alt="" />
                    </div>
                    <h4>دما</h4>
                    <p>
                      {{
                        pond?.sensorData[0]?.temperature
                          ? pond?.sensorData[0]?.temperature
                          : 0
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- <VFlexPagination
          v-if="filteredPonds.length > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/mixins';
.search-input {
  padding-right: 30px !important;
}
.mb-5px {
  margin-bottom: 5px;
}

.text-gray-200 {
  color: rgb(114, 114, 143) !important;
  display: flex;
  align-items: center;
  margin-bottom: 5px !important;
}
.text-gray-300 {
  color: rgb(94, 94, 129) !important;
  font-weight: 600;
}
.icon-list-item {
  width: 12px;
  margin-left: 5px;
}
.list-view-v3 {
  .list-view-item {
    @include vuero-r-card;

    margin-bottom: 16px;
    padding: 16px;

    .list-view-item-inner {
      display: flex;
      align-items: start;
      // align-items: center;

      > img {
        width: 100%;
        max-width: 60px;
        min-width: 60px;
        max-height: 60px;
        min-height: 60px;
        border-radius: var(--radius-rounded);
        border: 1px solid var(--fade-grey);
      }

      .meta-left {
        // margin-left: 16px;
        margin-top: 10px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 5px;
        }

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1;
        }

        > span:not(.tag) {
          font-size: 0.9rem;
          color: var(--light-text);

          svg {
            position: relative;
            top: 1px;
            height: 12px;
            width: 12px;
          }

          .icon-separator {
            position: relative;
            top: -3px;
            font-size: 5px;
            color: var(--light-text);
            padding: 0 8px;
          }

          .iconify {
            margin-right: 0.25rem;
            [dir='rtl'] & {
              margin-right: unset;
              margin-left: 0.25rem;
            }
          }
        }
      }

      .meta-right {
        margin-left: auto;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: auto;
        }

        display: flex;
        align-items: center;
        justify-content: flex-end;

        .buttons {
          margin-bottom: 0;
          margin-right: 10px;
          [dir='rtl'] & {
            margin-right: unset;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.is-dark {
  .list-view-v3 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        > img {
          border-color: var(--dark-sidebar-light-12);
        }

        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:nth-child(2) {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
                transition: color 0.3s, background-color 0.3s, border-color 0.3s,
                  height 0.3s, width 0.3s;

                &:hover,
                &:focus {
                  border-color: var(--primary);
                  color: var(--primary);
                }
              }
            }
          }
        }
      }
    }
  }
}
.items-center {
  display: flex;
  align-items: start;
  flex-direction: column;
  margin: 10px 0;
}
.mb-15px {
  margin-bottom: 15px;
}
@media only screen and (min-width: 600px) {
  .list-view-item-inner {
    flex-wrap: wrap;
  }
  .list-view-item-inner-name-icon {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .mb-5px {
    margin-right: 10px;
  }
}
.card-pond-footer {
  display: none;
}
@media only screen and (max-width: 767px) {
  .card-pond-header-detail {
    display: none;
  }
  .card-pond-footer {
    display: block;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  .list-view-v3 {
    .list-view-item {
      position: relative;
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        > img {
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-left: 0;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: 0;
          }

          h3 {
            text-align: center;
            margin-bottom: 6px;
          }

          > span {
            margin-bottom: 16px;
          }

          .icon-list {
            flex-wrap: wrap;

            > span {
              flex-direction: column;
              text-align: center;
              margin: 10px;
              width: calc(33.3% - 20px);

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          width: 100%;

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 100%;
              margin: 10px 0;

              &:first-child {
                width: 100%;
                max-width: 240px;
                margin: 10px auto;
              }

              &:nth-child(2) {
                position: absolute;
                top: 10px;
                right: 10px;
                max-width: 35px;
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 767px) {
  .items-center {
    flex-direction: row;
  }
  .mb-15px {
    margin-bottom: 0;
    margin-left: 15px;
  }
}
// new style
.new-style-list-view-item-header {
  display: flex;
  flex-direction: column;
}
.dashboard-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.meta-right {
  align-self: flex-end;
}

// new style
.card-pond-header-attrs-date {
  padding-right: 15px;
  border-right: 1px solid rgba(128, 128, 128, 0.374);
}
.card-pond-header-attrs-dimensions {
  padding-left: 15px;
}
.card-pond {
  width: 100%;
  background: white;
  border-radius: 5px;
  border: 1px solid rgb(226, 226, 226);
  padding: 20px;
  margin-bottom: 15px;
}
.card-pond-header h3 {
  margin-top: 10px;
  font-weight: 400;
}
.card-pond-body {
  margin-top: 10px;
  h4 {
    margin-top: 5px;
    font-weight: 500;
  }
  p {
    color: rgb(94, 94, 94);
    margin-top: -3px;
  }
}
.card-pond-attr {
  width: 100%;
  padding: 15px 10px;
  background: rgb(250, 250, 250);
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.card-pond-attr-icon {
  width: 45px;
  height: 45px;
  background: rgba(221, 219, 243, 0.377);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(221, 219, 243);
  img {
    height: 27px;
  }
}
.card-pond-header-attrs {
  color: gray;
}
@media only screen and (min-width: 600px) {
  .card-pond-header {
    justify-content: space-between;
  }
  .card-pond-header,
  .card-pond-header > div {
    display: flex;
    align-items: center;
    h3 {
      margin-top: 0;
      margin-right: 10px;
    }
  }
  .card-pond-header-attrs {
    margin-right: 10px;
    font-size: 12px;
  }
  .card-pond-attrs {
    grid-template-columns: 32% 32% 32%;
  }
}
@media only screen and (min-width: 300px) {
  .card-pond-attrs {
    display: grid;
    grid-template-columns: 48% 48%;
    justify-content: space-between;
  }
}
@media only screen and (min-width: 992px) {
  .card-pond-attrs {
    grid-template-columns: 15% 15% 15% 15% 15% 15%;
  }
}
</style>
