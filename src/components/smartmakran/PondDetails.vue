<script setup lang="ts">
import { computed } from 'vue'
import { usePondStore } from '/@src/stores/pond'
import { IPond } from '/@src/interfaces/pond.interface'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// define props for using in the component
// Access params with `params.id`
const showLossesModal = ref(false)
const showFeedingCheckingModal = ref(false)
const showWaterQualityModal = ref(false)
const pondStore = usePondStore()
const currentPond = computed<IPond>(() => {
  return pondStore.currentPond || {}
})
let closeFeedingChecking = () => (showFeedingCheckingModal.value = false)
let closeLosses = () => (showLossesModal.value = false)
let closeWaterQualityModal = () => (showWaterQualityModal.value = false)
</script>

<template>
  <div class="page-content-inner">
    <FeedingChecking
      :show="showFeedingCheckingModal"
      :closeModal="closeFeedingChecking"
      :showPondField="true"
    />
    <Losses :show="showLossesModal" :closeModal="closeLosses" :showPondField="true" />
    <WaterQuality
      :show="showWaterQualityModal"
      :closeModal="closeWaterQualityModal"
      :showPondField="true"
    />
    <div class="nav-buttons-ponds">
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
    <!--List-->
    <div class="list-view list-view-v2">
      <!--Active Tab-->
      <div id="active-items-tab" class="tab-content is-active">
        <div class="list-view-inner">
          <Transition name="list-complete" tag="div">
            <div>
              <div class="attrs-pond-details">
                <div class="cardd">
                  <div class="cardd-icon">
                    <img src="/@src/assets/smartmakran/icons-box/ph.svg" alt="bio" />
                  </div>
                  <div class="cardd-content-attr">
                    <p>ph</p>
                    <h2>22</h2>
                  </div>
                </div>
                <div class="cardd">
                  <div class="cardd-icon">
                    <img src="/@src/assets/smartmakran/icons-box/bio.svg" alt="bio" />
                  </div>
                  <div class="cardd-content-attr">
                    <p>Bio Mass</p>
                    <h2>22</h2>
                  </div>
                </div>
                <div class="cardd">
                  <div class="cardd-icon">
                    <img src="/@src/assets/smartmakran/icons-box/size.svg" alt="bio" />
                  </div>
                  <div class="cardd-content-attr">
                    <p>Size AvG</p>
                    <h2>22</h2>
                  </div>
                </div>
                <div class="cardd">
                  <div class="cardd-icon">
                    <img src="/@src/assets/smartmakran/icons-box/temp.svg" alt="bio" />
                  </div>
                  <div class="cardd-content-attr">
                    <p>Temp</p>
                    <h2>22</h2>
                  </div>
                </div>
                <div class="cardd">
                  <div class="cardd-icon">
                    <img src="/@src/assets/smartmakran/icons-box/sal.svg" alt="bio" />
                  </div>
                  <div class="cardd-content-attr">
                    <p>Sal</p>
                    <h2>22</h2>
                  </div>
                </div>
                <div class="cardd">
                  <div class="cardd-icon">
                    <img src="/@src/assets/smartmakran/icons-box/do.svg" alt="bio" />
                  </div>
                  <div class="cardd-content-attr">
                    <p>Do</p>
                    <h2>22</h2>
                  </div>
                </div>
              </div>
              <!-- start code -->
              <div :key="currentPond.id" class="list-view-item">
                <!--  -->
                <!--  -->
                <div class="view-item-header">
                  <h3>{{ currentPond.name }}</h3>
                  <div class="view-item-header-button">
                    <RouterLink
                      :to="{
                        name: 'app-pond-id-manual-monitoring',
                      }"
                    >
                      <VButton color="primary" raised>ثبت اطلاعات اضافه</VButton>
                    </RouterLink>
                  </div>
                </div>
                <div class="view-item-attrs">
                  <ul class="view-item-attrs-main">
                    <li>عرض : 12</li>
                    <li>ارتفاع : 12</li>
                    <li>طول : 23</li>
                    <li>عمق : 34</li>
                  </ul>
                  <ul class="view-item-attrs-sprate">
                    <li>زمان اولین کاشت : 34</li>
                    <li>تعداد لاروها : 35</li>
                    <li>تراکم : 43</li>
                  </ul>
                </div>
                <div class="view-item-footer-button">
                  <RouterLink
                    :to="{
                      name: 'app-pond-id-manual-monitoring',
                    }"
                  >
                    <VButton color="primary" raised>ثبت اطلاعات اضافه</VButton>
                  </RouterLink>
                </div>
              </div>
              <!-- end code copy as notebook -->
            </div>
          </Transition>
        </div>

        <!-- <VFlexPagination
          v-if="currentPond > 5"
          :item-per-page="10"
          :total-items="873"
          :current-page="42"
          :max-links-displayed="7"
        /> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-content-inner {
  width: 100%;
}
.add-item-top-menu-pond {
  width: 100% !important;
}
.add-item-top-menu-pond_box {
  width: 100%;
  background: white;
  border-radius: 7px;
  box-shadow: 0 0 15px #00000010;
  padding: 15px 15px 5px 15px;
  margin-bottom: 10px;
}
.add-item-top-menu-pond_box-value {
  color: #45425b;
  font-size: 40px;
  font-weight: bold;
}
.view-item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 700;
    font-size: 18px;
  }
}
.add-item-top-menu-pond_box-icon {
  width: 40px;
  height: 40px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #41b98365;
  img {
    width: 18px;
  }
}
.view-item-header {
  border-bottom: 1px solid rgb(232, 232, 232);
  padding-bottom: 10px;
}
.add-item-top-menu-pond_box-title {
  font-size: 12px;
  font-weight: 500;
  margin-top: 5px;
}
.view-item-attrs {
  margin-top: 10px;
  li {
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 10px;
    margin-bottom: 5px;
    &::before {
      content: '';
      width: 5px;
      height: 5px;
      background: rgb(0, 196, 88);
      border-radius: 15px;
      position: absolute;
      right: 0;
    }
  }
}
@media screen and (min-width: 600px) {
  .add-item-top-menu-pond {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
    // grid-column: 49% 49%;
    // justify-content: space-between;
  }
  .attrs-pond-details {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
  }
}
@media screen and (min-width: 768px) {
  .view-item-attrs {
    display: grid;
    grid-template-columns: 40% 40%;
  }
}
.view-item-footer-button {
  display: none;
}
@media screen and (max-width: 768px) {
  .view-item-footer-button {
    display: block;
  }
}
@media screen and (min-width: 992px) {
  .attrs-pond-details {
    grid-template-columns: 32% 32% 32%;
  }
}
@media screen and (min-width: 1024px) {
  .add-item-top-menu-pond {
    display: grid;
    grid-template-columns: 32.5% 32.5% 32.5% !important;
    justify-content: space-between;
    // grid-column: 49% 49%;
    // justify-content: space-between;
  }
  .attrs-pond-details {
    grid-template-columns: 15% 15% 15% 15% 15% 15%;
  }
}
@media screen and (min-width: 768px) {
  .view-item-header {
    padding-bottom: 10px;
  }
}
@media screen and (max-width: 768px) {
  .view-item-header-button {
    display: none;
  }
}
</style>

<style lang="scss">
@import '../../scss/abstracts/mixins';

.list-view-v2 {
  .list-view-item {
    @include vuero-s-card;

    margin-bottom: 16px;
    padding: 16px;

    &:hover,
    &:focus {
      box-shadow: var(--light-box-shadow);
    }

    .list-view-item-inner {
      display: flex;

      > img {
        display: block;
        min-height: 130px;
        max-height: 130px;
        min-width: 190px;
        max-width: 190px;
        object-fit: cover;
        border-radius: var(--radius);
      }

      .meta-left {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 16px;
        }

        h3 {
          font-family: var(--font-alt);
          color: var(--dark-text);
          font-weight: 600;
          font-size: 1.1rem;
          line-height: 1.5;

          .rating {
            margin-left: 12px;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 12px;
            }

            i {
              position: relative;
              top: -2px;
              font-size: 12px;
              color: var(--fade-grey-dark-4);

              &.active {
                color: #ffc43b;
              }
            }
          }
        }

        p {
          font-size: 0.95rem;
          color: var(--light-text);

          svg {
            height: 12px;
            width: 12px;
          }
        }

        > span {
          display: flex;
          align-items: center;
          margin-top: 10px;
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--primary);

          .icon-separator {
            font-size: 5px;
            color: var(--light-text);
            padding: 0 10px;
          }
        }

        .icon-list {
          margin-top: auto;
          display: flex;

          > span {
            display: flex;
            align-items: center;
            margin-right: 15px;
            [dir='rtl'] & {
              margin-left: 15px;
              margin-right: unset;
            }

            span {
              font-size: 0.85rem;
              font-family: var(--font-alt);
              color: var(--dark-text);
            }

            i {
              font-size: 1.2rem;
              margin-right: 6px;
              [dir='rtl'] & {
                margin-left: 6px;
                margin-right: unset;
              }

              color: var(--light-text);
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
  .list-view-v2 {
    .list-view-item {
      @include vuero-card--dark;

      .list-view-item-inner {
        .meta-left {
          h3 {
            color: var(--dark-dark-text) !important;

            .rating {
              i:not(.active) {
                color: var(--dark-sidebar-dark-2);
              }
            }
          }

          > span {
            color: var(--primary);
          }

          .icon-list {
            > span {
              span {
                color: var(--dark-dark-text);
              }
            }
          }
        }

        .meta-right {
          .buttons {
            .button {
              &:first-child {
                background: var(--dark-sidebar-light-2);
                border-color: var(--dark-sidebar-light-8);
                color: var(--dark-dark-text);
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .list-view-v2 {
    .list-view-item {
      padding: 20px;

      .list-view-item-inner {
        flex-direction: column;

        > img {
          width: 100%;
          max-width: 100%;
          min-height: 160px;
          max-height: 160px;
          margin-bottom: 1rem;
        }

        .meta-left {
          margin-left: 0;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: 0;
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
              [dir='rtl'] & {
                margin: 10px;
              }

              i {
                margin: 0;
              }
            }
          }
        }

        .meta-right {
          margin: 16px 0 0;
          [dir='rtl'] & {
            margin: 16px 0 0;
          }

          .buttons {
            margin: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;

            .button {
              width: 85%;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .list-view-v2 {
    .list-view-inner {
      display: flex;
      flex-wrap: wrap;

      .list-view-item {
        // padding: 20px;
        margin: 10px;
        width: calc(50% - 20px);

        .list-view-item-inner {
          flex-direction: column;
          height: 100%;
          min-height: 450px;

          > img {
            width: 100%;
            max-width: 100%;
            min-height: 160px;
            max-height: 160px;
            margin-bottom: 1rem;
          }

          .meta-left {
            margin-left: 0;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 0;
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
            margin: auto 0 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .buttons {
              margin: 16px 0 0;
              width: 100%;
              display: flex;
              justify-content: space-between;

              .button {
                width: 48%;
              }
            }
          }
        }
      }
    }
  }
}

.cardd {
  width: 100%;
  padding: 15px;
  background: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.cardd-icon {
  width: 45px;
  height: 45px;
  background: rgba(221, 219, 243, 0.377);
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(221, 219, 243);
  margin-left: 10px;
  img {
    height: 27px;
  }
}
.cardd-content-attr {
  p {
    color: rgb(162, 162, 162);
    font-size: 12px;
  }
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin-top: -5px;
  }
}
@media screen and (min-width: 600px) {
  .cardd {
    flex-direction: column;
  }
  .cardd-content-attr {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;
    align-items: center;
    h2 {
      margin-top: -3px;
    }
  }
  .cardd-icon {
    margin-left: 0;
  }
}
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
    display: grid;
    grid-template-columns: 32.5% 32.5% 32.5%;
    justify-content: space-between;
    .button {
      margin-bottom: 0 !important;
    }
  }
}
</style>
