<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment-jalaali'

const date = ref({
  start: moment().format('jYYYY-jMM-jDD'),
  end: moment().format('jYYYY-jMM-jDD'),
})

const options = ref(['All Flights'])
</script>

<template>
  <div class="business-dashboard flights-dashboard">
    <div class="columns">
      <div class="column is-9">
        <!--Booking bar-->
        <div class="booking-bar-wrapper">
          <img
            class="travel-illustration light-image"
            src="/@src/assets/illustrations/dashboards/flights/travel.svg"
            alt=""
          />
          <img
            class="travel-illustration dark-image"
            src="/@src/assets/illustrations/dashboards/flights/travel-dark.svg"
            alt=""
          />
          <div class="booking-bar-info">
            <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
            <div class="inner">
              <h2 class="booking-bar-heading">
                پاریس <small>[PAR]</small> - نیویورک
                <small>[NY]</small>
              </h2>
              <p class="booking-bar-sub-heading">یک بزرگسال - تجاری</p>
            </div>
          </div>
          <div class="booking-bar">
            <div class="booking-bar-inputs">
              <date-picker
                v-model="date.start"
                class="control"
                auto-submit
                format="jYYYY/jMM/jDD"
              ></date-picker>
              <date-picker
                v-model="date.end"
                class="control"
                auto-submit
                format="jYYYY/jMM/jDD"
              ></date-picker>
            </div>
            <!--VDatePicker v-model="date" is-range color="green" trim-weeks>
              <template #default="{ inputValue, inputEvents }">
                <div class="booking-bar-inputs">
                  <VControl icon="feather:calendar">
                    <input
                      type="text"
                      class="input flight-datepicker"
                      placeholder="Departure"
                      :value="inputValue.start"
                      v-on="inputEvents.start"
                    />
                  </VControl>
                  <VControl icon="feather:calendar">
                    <input
                      type="text"
                      class="input flight-datepicker"
                      placeholder="Return"
                      :value="inputValue.end"
                      v-on="inputEvents.end"
                    />
                  </VControl>
                </div>
              </template>
            </VDatePicker-->
          </div>
        </div>

        <div class="flights-toolbar">
          <h3 class="dark-inverted">۷۴ نتیجه</h3>
          <!--Dropdown-->
          <FlightResultsDropdown />
        </div>

        <div class="flights-summary-wrapper">
          <div class="columns is-flex-tablet-p">
            <div class="column is-4">
              <a class="flight-summary">
                <div class="flight-price">۳۱۲,۰۰۰</div>
                <div class="meta">
                  <span>ارزانترین</span>
                  <span>۷ ساعت و ۳۲ دقیقه</span>
                </div>
              </a>
            </div>
            <div class="column is-4">
              <a class="flight-summary is-featured">
                <div class="flight-price">۴۲۸,۰۰۰</div>
                <div class="meta">
                  <span>بهترین</span>
                  <span>۷ ساعت و ۱۶ دقیقه</span>
                </div>
              </a>
            </div>
            <div class="column is-4">
              <a class="flight-summary">
                <div class="flight-price">۵۴۹,۰۰۰</div>
                <div class="meta">
                  <span>سریعترین</span>
                  <span>۵ ساعت و ۳۶ دقیقه</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="flights">
          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company1.svg"
              alt=""
            />
            <div class="start">
              <span>۱۱:۳۰ صبح</span>
              <span>پاریس ORLY</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="۱ توقف"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>۰۶:۵۹ ب.ظ</span>
              <span>نیویورک JFK</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="flight-price">۳۷۴,۰۰۰</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company2.svg"
              alt=""
            />
            <div class="start">
              <span>۰۹:۳۰ صبح</span>
              <span>پاریس ORLY</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="۱ توقف"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>۰۴:۱۸ ب.ظ</span>
              <span>نیویورک JFK</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="flight-price">۳۹۲,۰۰۰</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company1.svg"
              alt=""
            />
            <div class="start">
              <span>۰۶:۴۲ صبح</span>
              <span>پاریس ORLY</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="بدون توقف"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>۰۲:۱۱ ب.ظ</span>
              <span>نیویورک JFK</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="flight-price">۳۹۸,۰۰۰</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company3.svg"
              alt=""
            />
            <div class="start">
              <span>۰۷:۲۳ صبح</span>
              <span>پاریس ORLY</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="بدون توقف"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>۰۱:۴۶ ب.ظ</span>
              <span>نیویورک JFK</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="flight-price">۴۰۷,۰۰۰</div>
          </a>

          <!--Flight-->
          <a class="flight-card">
            <img
              src="/@src/assets/illustrations/dashboards/flights/company1.svg"
              alt=""
            />
            <div class="start">
              <span>۱۰:۱۲ صبح</span>
              <span>پاریس ORLY</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="route">
              <div class="departure"></div>
              <div class="line" data-content="۱ توقف"></div>
              <div class="arrival">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
              </div>
            </div>
            <div class="end">
              <span>۰۳:۳۹ ب.ظ</span>
              <span>نیویورک JFK</span>
              <span>دوشنبه ۷ مهر</span>
            </div>
            <div class="flight-price">۴۳۱,۰۰۰</div>
          </a>
        </div>
      </div>

      <div class="column is-3">
        <!--Widget-->
        <UIWidget class="search-widget" straight>
          <template #body>
            <div class="field">
              <div class="control">
                <input type="text" class="input" placeholder="جستجو..." />
                <button class="search-button">
                  <i aria-hidden="true" class="iconify" data-icon="feather:search"></i>
                </button>
              </div>

              <div class="topics">
                <a>#پاریس</a>
                <a>#برلین</a>
                <a>#شیکاگو</a>
              </div>
            </div>
          </template>
        </UIWidget>

        <!--Widget-->
        <UIWidget class="picker-widget">
          <template #header>
            <div class="widget-toolbar">
              <div class="left">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chevron-right"
                  ></i>
                </a>
              </div>
              <div class="center">
                <h3>فروردین ۱۴۰۰</h3>
              </div>
              <div class="right">
                <a class="action-icon">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:chevron-left"
                  ></i>
                </a>
              </div>
            </div>
          </template>
          <template #body>
            <table class="calendar">
              <thead>
                <tr>
                  <th scope="col">شنبه</th>
                  <th scope="col">ی</th>
                  <th scope="col">د</th>
                  <th scope="col">س</th>
                  <th scope="col">چ</th>
                  <th scope="col">پ</th>
                  <th scope="col">جمعه</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td class="prev-month">29</td>
                  <td class="prev-month">30</td>
                  <td class="prev-month">31</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>

                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>

                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td class="current-day">18</td>
                </tr>

                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>

                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td class="next-month">1</td>
                </tr>
              </tbody>
            </table>
          </template>
        </UIWidget>

        <div class="filters-card">
          <a class="button v-button is-primary is-fullwidth is-bold is-raised">
            افزودن به علاقه‌مندی‌ها
          </a>

          <div class="checkboxes-list">
            <div class="field">
              <h5 class="dark-inverted">توقف‌ها</h5>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="All Flights"
                  label="All Flights"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="No Stops"
                  label="No Stops"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="1 Stop"
                  label="1 Stop"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="2 Stops"
                  label="2 Stops"
                  color="primary"
                  circle
                />
              </div>
            </div>
          </div>

          <div class="checkboxes-list">
            <div class="field">
              <h5 class="dark-inverted">چمدان و بار</h5>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="All Options"
                  label="All Options"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="1 Cabine Luggage"
                  label="1 Cabine Luggage"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="2 Cabin Luggage"
                  label="2 Cabin Luggage"
                  color="primary"
                  circle
                />
              </div>
              <div class="control">
                <VCheckbox
                  v-model="options"
                  value="None"
                  label="None"
                  color="primary"
                  circle
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.flights-dashboard {
  .booking-bar-wrapper {
    @include vuero-s-card;

    position: relative;
    background: var(--primary);
    border-color: var(--primary);
    padding: 30px;
    color: var(--white);
    font-family: var(--font);
    box-shadow: var(--primary-box-shadow);

    .travel-illustration {
      position: absolute;
      bottom: 30px;
      right: 30px;
      [dir='rtl'] & {
        left: 30px;
        right: unset;
      }

      max-width: 260px;
    }

    .booking-bar-info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;

      .lnil {
        font-size: 2.2rem;
        color: var(--white);
      }

      .inner {
        margin-left: 16px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 16px;
        }

        .booking-bar-heading {
          font-family: var(--font-alt);
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.2;
          color: var(--white);
        }

        .booking-bar-sub-heading {
          font-family: var(--font);
          font-weight: 500;
          font-size: 1.1rem;
          color: var(--white);
        }
      }
    }

    .booking-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .booking-bar-inputs {
        display: flex;
        align-items: center;

        .control:not(:last-of-type) {
          margin-right: 2rem;
          [dir='rtl'] & {
            margin-left: 2rem;
            margin-right: unset;
          }
        }

        .input {
          font-family: var(--font);
          color: var(--light-text);
        }
      }
    }
  }

  .flights-toolbar {
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-family: var(--font);
      font-weight: 600;
      color: var(--dark-text);
    }
  }

  .flights-summary-wrapper {
    .flight-summary {
      @include vuero-s-card;

      display: flex;
      align-items: center;
      border: 1px solid var(--fade-grey);
      transition: all 0.3s; // transition-all test

      &:hover {
        border-color: var(--primary);
      }

      &.is-featured {
        background: var(--primary);
        border-color: var(--primary);
        box-shadow: var(--primary-box-shadow);

        .flight-price {
          color: var(--white);
        }

        .meta {
          span {
            color: var(--white) !important;
          }
        }
      }

      .flight-price {
        font-family: var(--font);
        font-size: 2rem;
        font-weight: 700;
        color: var(--primary);
        [dir='rtl'] & {
          line-height: 0.75rem;
        }

        &::after,
        &::before {
          content: '$';
          position: relative;
          right: 0;
          [dir='rtl'] & {
            content: none;
          }

          font-size: 1.2rem;
          font-weight: 700;
        }

        &::after {
          content: none;
          [dir='rtl'] & {
            left: 0;
            right: unset;
            content: ' تومان';
          }
        }
      }

      .meta {
        margin-left: 16px;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 16px;
        }

        line-height: 1.3;

        span {
          display: block;

          &:first-child {
            font-family: var(--font-alt);
            color: var(--dark-text);
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
          }

          &:nth-child(2) {
            font-family: var(--font);
            color: var(--light-text);
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .flights {
    padding: 1.5rem 0;

    .flight-card {
      @include vuero-s-card;

      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      box-shadow: none;

      &:hover,
      &:focus {
        box-shadow: var(--light-box-shadow);

        .route {
          .line {
            &::before,
            &::after {
              opacity: 1;
            }
          }
        }
      }

      > img {
        display: block;
        border-radius: var(--radius-rounded);
        max-width: 32px;
      }

      .start,
      .end {
        span {
          display: block;
          color: var(--dark-text);
          font-family: var(--font);

          &:first-child {
            font-family: var(--font-alt);
            font-weight: 600;
            color: var(--dark-text);
          }

          &:nth-child(2),
          &:nth-child(3) {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }
      }

      .start {
        margin-left: 1rem;
        [dir='rtl'] & {
          margin-left: unset;
          margin-right: 1rem;
        }
      }

      .end {
        margin-left: auto;
        margin-right: 1.5rem;
        [dir='rtl'] & {
          margin-left: 1.5rem;
          margin-right: auto;
        }
      }

      .route {
        flex-grow: 2;
        display: flex;
        align-items: center;
        max-width: 320px;
        margin: 0 auto;
        padding: 0 1rem;

        .departure {
          height: 16px;
          width: 16px;
          border-radius: var(--radius-rounded);
          border: 1px solid var(--light-text);
        }

        .line {
          position: relative;
          flex-grow: 2;
          height: 1px;
          border-bottom: 1.6px dashed var(--light-text);

          &::before,
          &::after {
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s; // transition-all test
          }

          &::before {
            content: '';
            position: absolute;
            top: -14px;
            left: 50%;
            right: 50%;
            height: 10px;
            width: 1px;
            border-right: 1px solid var(--light-text);
            [dir='rtl'] & {
              border-right: none;
              border-left: 1px solid var(--light-text);
            }
          }

          &::after {
            content: attr(data-content);
            position: absolute;
            top: -32px;
            left: 23%;
            [dir='rtl'] & {
              left: unset;
              right: 23%;
            }

            width: 130px;
            font-size: 0.8rem;
            text-align: center;
            color: var(--light-text);
          }
        }

        .arrival {
          font-size: 1.8rem;
          transform: rotate(90deg);
          [dir='rtl'] & {
            transform: rotate(-90deg);
          }

          height: 26px;
          width: 26px;
          display: flex;
          justify-content: center;
          align-items: center;

          .lnil {
            position: relative;
            top: -4px;
            right: 5px;
            color: var(--light-text);
            margin-left: 0.75rem;
            [dir='rtl'] & {
              left: 5px;
              right: unset;
              margin-left: unset;
              margin-right: 0.75rem;
            }
          }
        }
      }

      .flight-price {
        font-family: var(--font);
        font-size: 1.8rem;
        font-weight: 600;
        color: var(--light-text);

        &::after,
        &::before {
          content: '$';
          position: relative;
          top: -8px;
          right: 0;
          [dir='rtl'] & {
            content: none;
          }

          font-size: 1.1rem;
          font-weight: 700;
        }

        &::after {
          [dir='rtl'] & {
            left: 0;
            right: unset;
            content: ' تومان';
          }
        }
      }
    }
  }

  .company-card {
    @include vuero-s-card;

    padding: 30px;
    margin-bottom: 1.5rem;

    .v-avatar {
      display: block;
      margin: 0 auto;
    }
  }

  .filters-card {
    @include vuero-s-card;

    padding: 30px;
    margin-bottom: 1.5rem;

    .checkboxes-list {
      margin: 0;
      padding: 20px 0 0;

      .field {
        > h5 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--dark-text);
          padding-bottom: 6px;
        }
      }

      .checkbox {
        padding: 8px 0;
      }
    }
  }
}

.is-dark {
  .flights-dashboard {
    .booking-bar-wrapper {
      @include vuero-card--dark;

      background: var(--dark-sidebar-light-4);
      border-color: var(--dark-sidebar-light-12);
      box-shadow: var(--light-box-shadow);
    }

    .flights-summary-wrapper {
      .flight-summary {
        @include vuero-card--dark;

        &:hover,
        &:focus {
          border-color: var(--primary) !important;
        }

        &.is-featured {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          box-shadow: var(--primary-box-shadow) !important;

          .flight-price {
            color: var(--white);
          }
        }

        .flight-price {
          color: var(--primary);
        }

        .meta {
          span {
            &:first-child {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }

    .flights {
      .flight-card {
        @include vuero-card--dark;

        .start,
        .end {
          span {
            &:first-child {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }

    .company-card,
    .filters-card {
      @include vuero-card--dark;
    }
  }
}

@media only screen and (max-width: 767px) {
  .flights-dashboard {
    .booking-bar-wrapper {
      .travel-illustration {
        position: static;
        margin-bottom: 20px;
      }

      .booking-bar {
        > div {
          width: 100%;
        }

        .booking-bar-inputs {
          flex-direction: column;
          width: 100%;

          .control {
            margin: 0 !important;
            width: 100% !important;

            &:first-child {
              margin-bottom: 1rem !important;
            }
          }
        }
      }
    }

    .flights {
      padding-bottom: 0;

      .flight-card {
        flex-direction: column;

        &:last-child {
          margin-bottom: 0;
        }

        > img {
          max-width: 48px;
          margin-bottom: 12px;
        }

        .start,
        .end {
          text-align: center;
          margin: 10px auto;

          [dir='rtl'] & {
            margin: 10px auto;
          }

          span {
            font-size: 1rem !important;
          }
        }

        .route {
          width: 100%;
          max-width: 100%;

          .line {
            &::before,
            &::after {
              display: none !important;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .flights-dashboard {
    .booking-bar-wrapper {
      .travel-illustration {
        bottom: 30px;
        right: -25px;
        [dir='rtl'] & {
          left: -25px;
          right: unset;
        }

        max-width: 215px;
      }
    }

    .flights {
      padding-bottom: 0;

      .flight-card {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .flights-dashboard {
    .booking-bar-wrapper {
      .travel-illustration {
        bottom: 30px;
        right: -12px;
        [dir='rtl'] & {
          left: -12px;
          right: unset;
        }

        max-width: 200px;
      }
    }

    .flights-summary-wrapper {
      .flight-summary {
        .flight-price {
          font-size: 2.2rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1300px) and (orientation: landscape) {
  .flights-dashboard {
    .flights-summary-wrapper {
      .flight-summary {
        .flight-price {
          font-size: 2.2rem;
        }
      }
    }
  }
}
</style>
