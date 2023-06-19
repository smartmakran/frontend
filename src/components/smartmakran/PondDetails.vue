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
const showWaterDataModal = ref(false)
const showFeedingDataModal = ref(false)
const showSamplingDataModal = ref(false)
const showTransparencyDataModal = ref(false)

const pondStore = usePondStore()
const currentPond = computed<IPond>(() => {
  return pondStore.currentPond || {}
})
console.log(currentPond)
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
      :showPondField="true"
    />
    <Losses :show="showLossesModal" :closeModal="closeLosses" :showPondField="true" />
    <WaterQuality
      :show="showWaterQualityModal"
      :closeModal="closeWaterQualityModal"
      :showPondField="true"
    />
    <CreateChangingWaterDataModal
      :show="showWaterDataModal"
      :close-modal="closeWaterDataModa"
      :showPondField="true"
    />
    <CreateFeedingDataModal
      :show="showFeedingDataModal"
      :close-modal="closeFeedingDataModal"
      :showPondField="true"
    />
    <CreateSamplingDataModal
      :show="showSamplingDataModal"
      :close-modal="closeSamplingDataModal"
      :showPondField="true"
    />
    <CreateTransparencyDataModal
      :show="showTransparencyDataModal"
      :close-modal="closeTransparencyDataModal"
      :showPondField="true"
    />
    <div class="nav-buttons-ponds-ponds">
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
    <!--List-->
    <div class="list-view list-view-v2">
      <!--Active Tab-->
      <!-- start code -->
      <div class="card-pond">
        <div class="card-pond-header">
          <div>
            <VIconBox color="primary">
              <i aria-hidden="true" class="fas fa-home"></i>
            </VIconBox>
            <div>
              <h3>{{ currentPond.name }}</h3>
            </div>
          </div>
          <div class="card-pond-header-detail">
            <RouterLink
              :to="{
                name: 'app-pond-id-manual-monitoring',
              }"
            >
              <VButton color="primary" outlined raised>ثبت اطلاعات اضافه</VButton>
            </RouterLink>
          </div>
        </div>

        <div class="card-pond-header-attrs card-pond-header-attrs-border">
          <span class="card-pond-header-attrs-dimensions"
            >عرض : {{ currentPond?.dimensions?.width }}</span
          >
          <span class="card-pond-header-attrs-dimensions">
            طول : {{ currentPond?.dimensions?.length }}</span
          >
          <span class="card-pond-header-attrs-dimensions"
            >ارتفاع : {{ currentPond?.dimensions?.waterHeight }}</span
          >
          <span class="card-pond-header-attrs-dimensions"
            >عمق : {{ currentPond?.dimensions?.depth }}</span
          >
          <span class="card-pond-header-attrs-dimensions"
            >زمان اولین کاشت :
            <!-- {{ currentPond?.startFarming }} -->
            {{ new Date(currentPond?.startFarming).toLocaleDateString('fa') }}
          </span>
          <span class="card-pond-header-attrs-dimensions"
            >تعداد لاروها : {{ currentPond?.larvaCount }}</span
          >
          <span class="card-pond-header-attrs-dimensions"
            >تراکم : {{ currentPond?.density }}</span
          >
        </div>

        <div class="card-pond-attrs">
          <div class="card-pond-body">
            <div class="card-pond-attr">
              <div class="card-pond-attr-icon">
                <img src="/@src/assets/smartmakran/icons-box/bio.svg" alt="" />
              </div>
              <h4>حجم توده زنده</h4>
              <p>12</p>
            </div>
          </div>
          <div class="card-pond-body">
            <div class="card-pond-attr">
              <div class="card-pond-attr-icon">
                <img src="/@src/assets/smartmakran/icons-box/sal1.svg" alt="" />
              </div>
              <h4>میزان شوری</h4>
              <p>32</p>
            </div>
          </div>
          <div class="card-pond-body">
            <div class="card-pond-attr">
              <div class="card-pond-attr-icon">
                <img src="/@src/assets/smartmakran/icons-box/do1.svg" alt="" />
              </div>
              <h4>اکسیژن</h4>
              <p>12</p>
            </div>
          </div>
          <div class="card-pond-body">
            <div class="card-pond-attr">
              <div class="card-pond-attr-icon">
                <img src="/@src/assets/smartmakran/icons-box/size.svg" alt="" />
              </div>
              <h4>میانگین سایز</h4>
              <p>12</p>
            </div>
          </div>

          <div class="card-pond-body">
            <div class="card-pond-attr">
              <div class="card-pond-attr-icon">
                <img src="/@src/assets/smartmakran/icons-box/ph.svg" alt="" />
              </div>
              <h4>میزان اسیدیته</h4>
              <p>12</p>
            </div>
          </div>
          <div class="card-pond-body">
            <div class="card-pond-attr">
              <div class="card-pond-attr-icon">
                <img src="/@src/assets/smartmakran/icons-box/temp.svg" alt="" />
              </div>
              <h4>دما</h4>
              <p>12</p>
            </div>
          </div>
        </div>
        <div class="card-pond-footer">
          <RouterLink
            :to="{
              name: 'app-pond-id-manual-monitoring',
            }"
          >
            <VButton color="primary" outlined raised> ثبت اطلاعات اضافه </VButton>
          </RouterLink>
        </div>
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
.nav-buttons-ponds,
.nav-buttons-ponds-ponds {
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
.card-pond-header-attrs-border {
  border: 1px solid rgb(197, 197, 197);
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  display: grid;
  grid-template-columns: 48% 48%;
  justify-content: space-between;
}
.card-pond-footer {
  display: none;
}
@media screen and (min-width: 768px) {
  .nav-buttons-ponds,
  .nav-buttons-ponds-ponds {
    // display: grid !important;
    // grid-template-columns: 32.5% 32.5% 32.5% !important;
    // justify-content: space-between !important;
    .row-top {
      display: grid !important;
      grid-template-columns: 32.5% 32.5% 32.5% !important;
      justify-content: space-between !important;
    }
    .row-bottom {
      display: grid !important;
      grid-template-columns: 24% 24% 24% 24% !important;
      justify-content: space-between !important;
      margin-top: 10px;
    }
    .button {
      margin-bottom: 0 !important;
    }
  }
}
@media screen and (min-width: 768px) {
  .card-pond-header-attrs-border {
    grid-template-columns: 32.5% 32.5% 32.5%;
  }
}
@media screen and (min-width: 992px) {
  .card-pond-header-attrs-border {
    grid-template-columns: 24% 24% 24% 24%;
  }
}
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
