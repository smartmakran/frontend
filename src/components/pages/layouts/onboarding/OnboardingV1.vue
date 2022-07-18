<template>
  <div class="onboarding-wrapper onboarding-v1">
    <div class="title-wrap">
      <p>اولین حضورتان را خیر مقدم میگوئیم</p>
      <h2 class="dark-inverted">
        به ویوئِرو خوش آمدید. در وهله اول به چه کاری می‌خواهید بپردازید؟
      </h2>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set2-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set2-1-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">مرور مطالب</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است.
            </p>
            <div class="button-wrap">
              <VButton color="primary" rounded elevated> مرور </VButton>
            </div>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set2-2.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set2-2-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">یک قرار ملاقات تنظیم کنید</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است.
            </p>
            <div class="button-wrap">
              <VButton color="primary" rounded elevated> برنامه‌ریزی </VButton>
            </div>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set2-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set2-3-dark.svg"
            alt=""
          />
          <div class="onboarding-content">
            <h3 class="dark-inverted">آرامش خودت را حفظ کن!</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است.
            </p>
            <div class="button-wrap">
              <VButton color="primary" rounded elevated> چرت بزن </VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.is-navbar {
  .onboarding-wrapper {
    margin-top: 40px;
  }
}

.onboarding-wrapper {
  .title-wrap {
    text-align: center;

    h2 {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 1.4rem;
      color: var(--dark-text);
    }

    p {
      text-transform: uppercase;
      font-family: var(--font);
      font-size: 0.85rem;
    }
  }

  &.onboarding-v1 {
    .onboarding-wrap {
      padding: 30px 0;

      .onboarding-wrap-inner {
        display: flex;
        max-width: 800px;
        margin: 0 auto;

        .onboarding-card {
          @include vuero-r-card;

          margin: 8px;
          width: calc(33.3% - 16px);
          text-align: center;
          padding: 0;
          overflow: hidden;

          > img {
            display: block;
            width: 100%;
            margin: 0 auto;
          }

          .onboarding-content {
            padding: 0 20px 30px;

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              color: var(--dark-text);
              margin-bottom: 12px;
            }

            p {
              font-family: var(--font);
              font-size: 0.95rem;
            }

            .button-wrap {
              text-align: center;
              padding: 20px 0 0;

              .button {
                min-width: 140px;
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .onboarding-wrapper {
    &.onboarding-v1 {
      .onboarding-wrap {
        .onboarding-wrap-inner {
          .onboarding-card {
            @include vuero-card--dark;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .onboarding-wrapper {
    .standard-onboarding {
      padding: 20px 0;
    }

    .title-wrap {
      h2 {
        max-width: 280px;
        margin: 0 auto;
      }
    }

    .onboarding-wrap {
      .onboarding-wrap-inner {
        flex-wrap: wrap;

        .onboarding-card {
          min-width: calc(100% - 16px) !important;
        }
      }
    }
  }
}
</style>
