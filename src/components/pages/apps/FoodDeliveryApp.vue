<script setup lang="ts">
import type { TinySliderInstance } from 'tiny-slider/src/tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'
import { ref, onMounted, onUnmounted } from 'vue'

import FoodWidget from '/@src/assets/illustrations/dashboards/food/widget.svg'

import * as foodDelivery from '/@src/data/dashboards/food-delivery'
import { followersStats } from '/@src/data/widgets/ui/followers'
import { iconList } from '/@src/data/widgets/ui/menuList'
import { onceImageErrored } from '/@src/utils/via-placeholder'

const activeSection = ref('cart')

let slider: TinySliderInstance
const sliderElement = ref<HTMLElement>()
const nextButtonElement = ref<HTMLElement>()
const prevButtonElement = ref<HTMLElement>()

const onIndexChanged = (info: any) => {
  // direct access to info object
  const indexPrev = info.indexCached
  const indexCurrent = info.index

  // update style based on index
  info.slideItems[indexPrev].classList.remove('active')
  info.slideItems[indexCurrent].classList.add('active')
}
onMounted(() => {
  if (sliderElement.value && nextButtonElement.value && prevButtonElement.value) {
    slider = tns({
      container: sliderElement.value,
      controls: true,
      nav: false,
      mouseDrag: true,
      nextButton: nextButtonElement.value,
      prevButton: prevButtonElement.value,
      fixedWidth: 98,
      swipeAngle: false,
      items: 1,
      center: false,
      loop: true,
    })

    slider.events.on('indexChanged', onIndexChanged)
  }
})

const goTo = (index: number) => {
  if (slider) {
    slider.goTo(index)
  }
}

onUnmounted(() => {
  if (slider) {
    slider.events.off('indexChanged', onIndexChanged)
    slider.destroy()
  }
})
</script>

<template>
  <div class="food-delivery-dashboard">
    <!--Left-->
    <div class="left">
      <div class="left-header">
        <div class="header-image">
          <img src="/@src/assets/illustrations/dashboards/food/header.svg" alt="" />
        </div>
        <div class="header-meta">
          <h3>
            ارسال رایگان سفارشات برای ۳۰ روز
            <span role="img" aria-label="Party Popper">🎉</span>
          </h3>
          <p>بمدت ۳۰ روز سفارشات بالای ۱۰۰ هزار تومان بصورت رایگان ارسال خواهند شد</p>
          <a class="action-link">
            <span>بیشتر بدانید</span>
            <i aria-hidden="true" class="fas fa-arrow-left"></i>
          </a>
        </div>
      </div>

      <div class="left-body">
        <div class="restaurants">
          <div class="restaurants-toolbar">
            <div class="left">
              <h3>رستوران‌ها</h3>
            </div>

            <div class="right"></div>
          </div>

          <div class="food-pills">
            <div ref="prevButtonElement" class="slick-custom is-prev slick-arrow">
              <i aria-hidden="true" class="fas fa-angle-left"></i>
            </div>
            <div ref="nextButtonElement" class="slick-custom is-next slick-arrow">
              <i aria-hidden="true" class="fas fa-angle-right"></i>
            </div>
            <div ref="sliderElement" class="food-pills-inner pill-carousel">
              <!--Pills Loop-->
              <div
                v-for="(item, index) in foodDelivery.foodPills"
                :key="item.id"
                class="food-pill"
                tabindex="0"
                @keydown.space.prevent="goTo(index)"
                @click="goTo(index)"
              >
                <div class="food-pill-icon">
                  <img :src="item.icon" alt="" />
                </div>
                <span>{{ item.label }}</span>
              </div>
            </div>
          </div>

          <div class="restaurants-list">
            <div class="columns is-multiline">
              <!--Restaurants Loop-->
              <div
                v-for="restaurant in foodDelivery.restaurants"
                :key="restaurant.id"
                class="column is-4"
              >
                <div class="restaurants-list-item">
                  <div class="image-container">
                    <img
                      :src="restaurant.picture"
                      alt=""
                      @error.once="(event) => onceImageErrored(event, '800x450')"
                    />
                    <div class="timer">
                      <div>
                        <span>{{ restaurant.deliveryTime }}</span>
                        <span>دقیقه</span>
                      </div>
                    </div>
                  </div>
                  <div class="meta-container">
                    <div class="meta-icon">
                      <img
                        :src="restaurant.icon"
                        alt=""
                        @error.once="
                          (event) =>
                            onceImageErrored(event, '                            ')
                        "
                      />
                    </div>
                    <div class="meta-content">
                      <h4>{{ restaurant.name }}</h4>
                      <p>
                        <span>{{ restaurant.category }}</span>
                        <i aria-hidden="true" class="fas fa-circle"></i>
                        <span class="rating">
                          <i aria-hidden="true" class="fas fa-star"></i>
                          <span class="ml-1">{{ restaurant.rating }}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="right fixed-parent">
      <div class="sticky-panel fixed-child">
        <div class="widget icon-toolbar-widget">
          <div class="icon-toolbar">
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'cart' && 'is-active']"
                tabindex="0"
                @keydown.space.prevent="activeSection = 'cart'"
                @click="activeSection = 'cart'"
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:shopping-cart"
                ></i>
              </a>
            </div>
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'activity' && 'is-active']"
                tabindex="0"
                @keydown.space.prevent="activeSection = 'activity'"
                @click="activeSection = 'activity'"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:activity"></i>
              </a>
            </div>
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'address' && 'is-active']"
                tabindex="0"
                @keydown.space.prevent="activeSection = 'address'"
                @click="activeSection = 'address'"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:map-pin"></i>
              </a>
            </div>
            <div class="toolbar-icon">
              <a
                class="inner-icon"
                :class="[activeSection === 'settings' && 'is-active']"
                tabindex="0"
                @keydown.space.prevent="activeSection = 'settings'"
                @click="activeSection = 'settings'"
              >
                <i aria-hidden="true" class="iconify" data-icon="feather:settings"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="widget cart-widget side-section"
          :class="[activeSection === 'cart' && 'is-active']"
        >
          <div class="widget-toolbar">
            <div class="left">
              <h3 class="is-bigger">سفارشات من</h3>
            </div>
            <div class="right">
              <span class="tag is-curved">0 آیتم</span>
            </div>
          </div>
          <VPlaceholderSection
            title="بدون سفارش"
            subtitle="سبد سفارشات شما خالی است. به محض افزودن سفارشی اینجا نمایش خواهد یافت."
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/dashboards/food/cart-placeholder.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/dashboards/food/cart-placeholder.svg"
                alt=""
              />
            </template>
          </VPlaceholderSection>
          <div class="cart-items has-slimscroll is-hidden">
            <div class="cart-item">
              <VAvatar picture="/demo/photos/food/1.jpg" size="medium" squared />
              <div class="meta">
                <span class="text"> دوبل ایکس لارج برگر </span>
                <span class="price">15 هزار تومان * 1</span>
              </div>
            </div>
            <div class="cart-item">
              <VAvatar picture="/demo/photos/food/2.jpg" size="medium" squared />
              <div class="meta">
                <span class="text"> چری کیک </span>
                <span class="price">8 هزار تومان * 3</span>
              </div>
            </div>
            <div class="cart-item">
              <VAvatar picture="/demo/photos/food/3.jpg" size="medium" squared />
              <div class="meta">
                <span class="text"> فرای چیک </span>
                <span class="price">79 هزار تومان * 2</span>
              </div>
            </div>
          </div>
          <div class="cart-button">
            <div class="total">
              <span class="label">مجموع</span>
              <span>0 تومان</span>
            </div>
            <VButton color="primary" raised bold fullwidth> ادامه سفارش </VButton>
          </div>
        </div>

        <div class="side-section" :class="[activeSection === 'activity' && 'is-active']">
          <UIWidget class="followers-widget">
            <template #header>
              <UIWidgetToolbarDropdown title="دنبال کنندگان" />
            </template>
            <template #body>
              <UIWidgetFollowerStats :channels="followersStats" />
            </template>
          </UIWidget>

          <IllustrationWidget
            class="illustration-widget-v2"
            title="شما 2 جایزه‌ی جدید گرفته‌اید"
            text="تبریک می گویم ، زحمات شما به ثمر رسیده است. همینطور ادامه بده!"
            :picture="FoodWidget"
          />
        </div>

        <div class="side-section" :class="[activeSection === 'address' && 'is-active']">
          <UIWidget class="text-widget">
            <template #header>
              <UIWidgetToolbarIcon title="ارسال به" icon="feather:map-pin" />
            </template>
            <template #body>
              <div class="widget-content">
                <p>جمال خاشقچی</p>
                <p>خیابان اول، کوچه دوم، پلاک 3</p>
                <p>لس آنجلس</p>
              </div>
            </template>
          </UIWidget>

          <ContactWidget
            picture="/images/avatars/svg/vuero-1.svg"
            username="جمال خاشقچی"
            email="jamal@email.io"
            company="شرکت تعاونی برادران خاشقچی"
            position="مدیر محصول"
            location="لس آنجلس"
            phone="۰۰۱-۴۴۴-۵۱۵۶"
            squared
            reversed
          />
        </div>

        <div class="side-section" :class="[activeSection === 'settings' && 'is-active']">
          <UIWidget class="icon-list-widget">
            <template #body>
              <UIWidgetIconList :list="iconList" />
            </template>
          </UIWidget>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';

.food-delivery-dashboard {
  display: flex;

  &.is-navbar {
    margin-top: 30px;

    > .right {
      .sticky-panel {
        height: calc(100% - 120px) !important;

        &.is-stretched {
          height: calc(100% - 120px);
          top: 100px;
        }
      }
    }
  }

  .left {
    width: 70%;

    .left-header {
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 16px;
      background: var(--primary-light-32);
      font-family: var(--font);

      .header-image {
        position: relative;
        height: 150px;
        width: 280px;

        img {
          position: absolute;
          top: -40px;
          left: -30px;
          [dir='rtl'] & {
            left: unset;
            right: -30px;
          }
          display: block;
        }
      }

      .header-meta {
        margin-left: 0;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 0;
        }
        margin-bottom: 20px;

        h3 {
          font-family: var(--font-alt);
          font-weight: 700;
          font-size: 1.6rem;
        }

        p {
          font-weight: 400;
          color: var(--primary-dark-14);
          margin-bottom: 8px;
        }

        .action-link {
          span {
            font-size: 0.8rem;
            text-transform: uppercase;
            margin-right: 6px;
            [dir='rtl'] & {
              margin-left: 6px;
              margin-right: unset;
            }
          }

          i {
            font-size: 12px;
          }
        }
      }
    }

    .left-body {
      .restaurants {
        .restaurants-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
          font-family: var(--font);

          .left {
            h3 {
              font-family: var(--font-alt);
              color: var(--dark-text);
              font-size: 1.3rem;
              font-weight: 600;
            }
          }

          .right {
            display: flex;
            justify-content: flex-end;
          }
        }
      }

      .food-pills {
        position: relative;

        .food-pills-inner {
          .food-pill {
            text-align: center;
            width: 80px;
            max-width: 80px;
            height: 170px;
            background: var(--white);
            border: 1px solid var(--fade-grey-dark-3);
            border-radius: 500px;
            padding: 10px;
            margin: 0 10px;
            cursor: pointer;
            transition: all 0.3s; // transition-all test

            &.is-active {
              background: var(--primary);
              border-color: var(--primary);

              .food-pill-icon {
                border-color: var(--primary);
              }

              > span {
                color: var(--smoke-white);
              }
            }

            .food-pill-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 60px;
              height: 80px;
              background: var(--white);
              border: 1px solid var(--fade-grey-dark-3);
              border-radius: 500px;

              img {
                display: flex;
                height: 26px;
                width: 26px;
              }
            }

            span {
              font-family: var(--font);
              font-weight: 500;
              padding-top: 12px;
              display: block;
              transition: color 0.3s;
            }
          }
        }

        .tns-slider {
          .active {
            background: var(--primary);
            border-color: var(--primary);

            .food-pill-icon {
              border-color: var(--primary);
            }

            > span {
              color: var(--smoke-white);
            }
          }
        }

        .slick-prev::before,
        .slick-next::before {
          color: var(--muted-grey);
        }

        .slick-custom {
          position: absolute;
          top: -50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid transparent;
          width: 30px;
          height: 30px;
          background: transparent;
          border-radius: 100px;
          cursor: pointer;
          color: var(--light-text);
          transition: all 0.3s; // transition-all test
          z-index: 25;

          &.is-prev {
            right: 30px;
            [dir='rtl'] & {
              left: 30px;
              right: unset;
            }

            i {
              position: relative;
              left: -1px;
              [dir='rtl'] & {
                left: unset;
                right: -1px;
              }
            }
          }

          &.is-next {
            right: 0;
            [dir='rtl'] & {
              left: 0;
              right: unset;
            }

            i {
              position: relative;
              right: -1px;
              [dir='rtl'] & {
                left: -1px;
                right: unset;
              }
            }
          }

          &:hover {
            border-color: var(--fade-grey-dark-4);
            background: var(--white);
            box-shadow: var(--light-box-shadow);
          }

          svg {
            height: 16px;
            width: 16px;
            color: var(--primary);
            transition: all 0.3s; // transition-all test
          }
        }
      }

      .restaurants-list {
        padding: 30px 0;

        .restaurants-list-item {
          @include vuero-l-card;

          position: relative;
          padding: 0;
          border: none;
          background: none;

          .image-container {
            position: relative;

            > img {
              display: block;
              object-fit: cover;
              border-radius: 24px;
              min-height: 180px;
              max-height: 180px;
              width: 100%;
            }

            .timer {
              position: absolute;
              bottom: 10px;
              left: 10px;
              [dir='rtl'] & {
                left: 10px;
                right: unset;
              }
              display: flex;
              justify-content: center;
              align-items: center;
              height: 50px;
              width: 50px;
              border-radius: 12px;
              background: var(--primary);
              border: 1px solid var(--primary);
              font-family: var(--font);
              text-align: center;

              span {
                display: block;

                &:first-child {
                  font-size: 1.3rem;
                  color: var(--smoke-white);
                  font-weight: 600;
                  line-height: 1;
                }

                &:nth-child(2) {
                  font-size: 0.7rem;
                  text-transform: uppercase;
                  color: var(--primary-light-40);
                }
              }
            }
          }

          .meta-container {
            display: flex;
            align-items: center;
            padding: 5px;

            .meta-icon {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 46px;
              min-width: 46px;
              height: 46px;
              max-height: 46px;
              background: var(--white);
              border: 1px solid var(--fade-grey-dark-3);
              border-radius: 500px;

              img {
                display: flex;
                height: 22px;
                width: 22px;
              }
            }

            .meta-content {
              margin-left: 8px;
              [dir='rtl'] & {
                margin-left: unset;
                margin-right: 8px;
              }
              font-family: var(--font);
              line-height: 1.3;

              h4 {
                font-family: var(--font-alt);
                font-weight: 600;
                font-size: 1rem;
                color: var(--dark-text);
              }

              p {
                display: flex;
                align-items: center;

                .fa-circle {
                  font-size: 5px;
                  margin: 0 10px;
                }

                .fa-star {
                  position: relative;
                  top: -1px;
                  font-size: 12px;
                  color: #fab82a;

                  + span {
                    color: var(--dark-text);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  > .right {
    width: 30%;
    padding: 0 0 0 20px;
    [dir='rtl'] & {
      padding: 0 20px 0 0;
    }

    .sticky-panel {
      position: fixed;
      height: calc(100% - 100px);
      transition: all 0.3s; // transition-all test
      width: 336px;

      &.is-stretched {
        height: calc(100% - 30px);
        top: 10px;
      }

      .icon-toolbar-widget {
        width: 100%;
      }

      .side-section {
        display: none;
        animation: fadeInLeft 0.5s;
        [dir='rtl'] & {
          animation: fadeInRight 0.5s;
        }

        &.is-active {
          display: block;
        }
      }

      .cart-widget {
        height: calc(100% - 90px);

        .section-placeholder {
          height: calc(100% - 160px);

          img {
            max-width: 90px;
            margin: 0 auto 10px;
          }
        }

        .cart-items {
          height: calc(100% - 160px);
          border-bottom: 1px solid var(--fade-grey-dark-3);
          padding-bottom: 40px;
          overflow-y: auto;

          .cart-item {
            align-items: center;

            .price {
              margin: 0;
              font-size: 0.9rem;
              font-weight: 500;
            }
          }
        }

        .cart-button {
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 5px;

            span {
              font-family: var(--font);
              margin: 0;

              &:first-child {
                font-size: 1rem;
                font-weight: 500;
                color: var(--light-text);
                text-transform: uppercase;
              }

              &:nth-child(2) {
                color: var(--dark-text);
                font-weight: 600;
                font-size: 1.4rem;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .food-delivery-dashboard {
    .left {
      .left-header {
        background: var(--dark-sidebar-light-2) !important;

        .header-meta {
          h3 {
            color: var(--dark-dark-text);
          }

          p {
            color: var(--primary);
          }
        }
      }

      .left-body {
        .restaurants {
          .restaurants-toolbar {
            .left {
              h3 {
                color: var(--dark-dark-text);
              }
            }
          }

          .food-pills {
            .food-pills-inner {
              .food-pill {
                background: var(--dark-sidebar-light-2) !important;
                border-color: var(--dark-sidebar-light-12) !important;

                span {
                  color: var(--dark-dark-text);
                }

                &.active {
                  background: var(--primary) !important;
                  border-color: var(--primary) !important;

                  span {
                    color: var(--white);
                  }
                }

                .food-pill-icon {
                  background: var(--fade-grey-light-3);
                  border-color: var(--fade-grey-light-3);
                }
              }

              .slick-slide {
                &.slick-current {
                  background: var(--primary) !important;
                  border-color: var(--primary) !important;

                  .food-pill-icon {
                    border-color: var(--primary) !important;
                  }

                  span {
                    color: var(--smoke-white);
                  }
                }
              }

              .slick-custom {
                &:hover {
                  border-color: var(--dark-sidebar-light-2);
                  background: var(--dark-sidebar-light-2);
                  box-shadow: var(--light-box-shadow);
                }
              }
            }
          }

          .restaurants-list {
            .restaurants-list-item {
              @include vuero-card--dark;

              background: none;
              border: none;

              .image-container {
                .timer {
                  background: var(--primary);
                  border-color: var(--primary);

                  span {
                    &:nth-child(2) {
                      color: var(--primary-light-18);
                    }
                  }
                }
              }

              .meta-container {
                .meta-icon {
                  background: var(--fade-grey-light-3);
                  border-color: var(--fade-grey-light-3);
                }

                .meta-content {
                  h4 {
                    color: var(--dark-dark-text);
                  }

                  p {
                    .fa-star {
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

    .right {
      .cart-widget {
        .cart-items {
          border-color: var(--dark-sidebar-light-12) !important;
        }

        .cart-button {
          .total {
            span {
              &:first-child {
                color: var(--light-text);
              }

              &:nth-child(2) {
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
  .food-delivery-dashboard {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding: 0;
    }

    .left {
      .left-header {
        flex-direction: column;
        text-align: center;

        .header-image {
          img {
            left: 0;
            [dir='rtl'] & {
              left: unset;
              right: 0;
            }
          }
        }
      }

      .restaurants-list {
        .restaurants-list-item {
          .image-container {
            img {
              min-height: 220px !important;
              max-height: 220px !important;
            }
          }
        }
      }
    }

    .right {
      .sticky-panel {
        position: static;
        width: 100% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .food-delivery-dashboard {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      padding: 0;
    }

    .left {
      .restaurants-list {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }

        .restaurants-list-item {
          .image-container {
            img {
              min-height: 220px !important;
              max-height: 220px !important;
            }
          }
        }
      }
    }

    .right {
      .sticky-panel {
        position: static;
        width: 100% !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .food-delivery-dashboard {
    .left {
      .left-body {
        .restaurants-list {
          .restaurants-list-item {
            .image-container {
              > img {
                min-height: 140px !important;
                max-height: 140px !important;
              }
            }
          }
        }
      }
    }

    .right {
      .sticky-panel {
        max-width: 255px;
      }
    }
  }
}
</style>
