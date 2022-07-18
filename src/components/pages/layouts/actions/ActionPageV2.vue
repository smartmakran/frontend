<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import sleep from '/@src/utils/sleep'
import { useNotyf } from '/@src/composable/useNotyf'
import { popovers } from '/@src/data/users/userPopovers'

const notyf = useNotyf()
const router = useRouter()

const isLoading = ref(false)

const accept = async () => {
  isLoading.value = true
  notyf.success('Invitation for وب‌سایت راهکارهای بانکداری accepted')

  await sleep()
  router.push({
    name: 'sidebar-dashboards-banking-1',
  })

  isLoading.value = false
}
</script>

<template>
  <div class="action-page-wrapper action-page-v2">
    <div class="wrapper-outer">
      <div class="wrapper-inner">
        <div class="action-box">
          <div class="box-content">
            <VAvatar
              size="big"
              picture="/demo/avatars/16.jpg"
              badge="/demo/photos/apps/9.png"
            />

            <h3 class="dark-inverted">
              جیسون شما را دعوت کرد به پروژه‌ی
              <span class="is-dark-primary">وب‌سایت راهکارهای بانکداری</span>
              .
            </h3>
            <div class="sender-message is-dark-card-bordered is-dark-bg-4">
              <h4 class="dark-inverted">پیغام از طرف جیسون</h4>
              <p>
                سلام اریک ، واقعاً عالی خواهد بود اگر می توانید در این پروژه به ما کمک
                کنید. وظایف زیادی روزانه ظاهر می شود و احساس می کنم تیم کمی تحت فشار قرار
                گرفته است. خوشحال می شویم شما را سوار هواپیما کنیم.
              </p>
            </div>

            <div class="people-wrap">
              <div class="people">
                <Tippy class="has-help-cursor" interactive placement="bottom">
                  <VAvatar size="small" picture="/demo/avatars/21.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user21" />
                  </template>
                </Tippy>

                <Tippy class="has-help-cursor" interactive placement="bottom">
                  <VAvatar size="small" color="h-purple" initials="SC" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user120" />
                  </template>
                </Tippy>

                <Tippy class="has-help-cursor" interactive placement="bottom">
                  <VAvatar size="small" picture="/demo/avatars/39.jpg" />
                  <template #content>
                    <UserPopoverContent :user="popovers.user39" />
                  </template>
                </Tippy>
              </div>
              <div class="people-text">
                <p>و ۵ نفر دیگر عضو این پروژه هستند</p>
              </div>
            </div>
            <div class="buttons">
              <VButton dark-outlined>عدم پذیرش</VButton>
              <VButton
                color="primary"
                :loading="isLoading"
                raised
                tabindex="0"
                @keydown.space.prevent="accept"
                @click="accept"
              >
                پذیرش
              </VButton>
            </div>
          </div>
        </div>
      </div>

      <div class="side-wrapper">
        <div class="side-inner">
          <div class="side-title">
            <h3 class="dark-inverted">دیگر دستورالعمل‌ها</h3>
            <p>جیسون دستورالعمل های بیشتری ارسال کرده است</p>
          </div>

          <div class="action-list">
            <VBlock title="خلاصه پروژه">
              <p>
                لطفا خلاصه پروژه را مطالعه فرمایید. خلاصه پروژه را در اینباکس خود پیدا
                خواهید کرد
              </p>

              <template #icon>
                <VIconWrap
                  icon="feather:check"
                  dark="3"
                  dark-primary
                  dark-card-bordered
                />
              </template>
            </VBlock>

            <VBlock title="مرور رابط کاربری">
              <p>لطفاً آخرین وایرفریم‌هایی را که تیم ارائه کرده است مرور کنید</p>

              <template #icon>
                <VIconWrap
                  icon="feather:check"
                  dark="3"
                  dark-primary
                  dark-card-bordered
                />
              </template>
            </VBlock>

            <VBlock title="برنامه‌ریزی">
              <p>لطفاً جلسه ای با تیم ترتیب دهید تا آنها بتوانند شما را تقویت کنند.</p>

              <template #icon>
                <VIconWrap
                  icon="feather:check"
                  dark="3"
                  dark-primary
                  dark-card-bordered
                />
              </template>
            </VBlock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/mixins';

.action-page-wrapper {
  &.action-page-v2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 840px;
    min-height: 560px;
    margin: 0 auto;

    .wrapper-outer {
      @include vuero-s-card;

      display: flex;
      padding: 0;

      .wrapper-inner {
        .action-box {
          border: none;
          background: none;
          border-radius: 0;
          border-right: 1px solid var(--fade-grey-dark-3);
        }
      }

      .side-wrapper {
        flex-grow: 2;
        padding: 40px;

        .side-inner {
          .side-title {
            font-family: var(--font);
            margin-bottom: 16px;

            h3 {
              font-family: var(--font-alt);
              font-weight: 600;
              color: var(--dark-text);
            }

            p {
              font-size: 0.9rem;
            }
          }

          .action-list {
            .media-flex {
              .icon-wrap {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 32px;
                width: 32px;
                min-width: 32px;
                border-radius: var(--radius-rounded);
                background: var(--white);
                border: 1px solid var(--fade-grey-dark-3);
                box-shadow: var(--light-box-shadow);
                color: var(--primary);

                svg {
                  width: 16px;
                  height: 16px;
                  stroke-width: 3px;
                }
              }

              .flex-meta {
                span {
                  font-weight: 400;
                  font-size: 0.9rem;
                }

                p {
                  font-size: 0.9rem;
                  max-width: 240px;
                }
              }
            }
          }
        }
      }
    }

    .wrapper-inner {
      .action-box {
        @include vuero-s-card;

        padding: 40px;

        .box-content {
          text-align: center;
          font-family: var(--font);

          .v-avatar {
            display: block;
            margin: 0 auto 8px;
          }

          h3 {
            font-family: var(--font-alt);
            font-weight: 600;
            max-width: 320px;
            margin: 0 auto 16px;

            span {
              color: var(--primary);
            }
          }

          .sender-message {
            text-align: left;
            padding: 20px;
            border: 1px solid var(--fade-grey-dark-3);
            max-width: 360px;
            margin: 0 auto;
            border-radius: var(--radius-large);
            box-shadow: var(--light-box-shadow);

            h4 {
              font-family: var(--font-alt);
              font-size: 0.7rem;
              font-weight: 500;
              color: var(--dark-text);
              text-transform: uppercase;
              margin-bottom: 6px;
            }

            p {
              font-size: 0.9rem;
            }
          }

          .people-wrap {
            .people {
              display: flex;
              justify-content: center;
              padding: 16px 0 8px;

              .v-avatar {
                margin: 0 4px;
              }
            }

            .people-text {
              p {
                font-size: 0.9rem;
              }
            }
          }

          .buttons {
            margin: 0 auto;
            display: flex;
            justify-content: center;
            padding-top: 30px;

            .button {
              margin: 0 4px;
              min-width: 150px;
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .action-page-wrapper {
    &.action-page-v2 {
      .wrapper-inner {
        .action-box {
          @include vuero-card--dark;
        }
      }

      .wrapper-outer {
        @include vuero-card--dark;
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media only screen and (max-width: 767px) {
  .action-page-wrapper {
    &.action-page-v2 {
      .wrapper-outer {
        flex-direction: column;

        .wrapper-inner {
          .action-box {
            padding: 20px 20px 40px;
            border-right: none;
            border-bottom: 1px solid var(--fade-grey-dark-3);

            .box-content {
              .buttons {
                .button {
                  min-width: 130px;
                }
              }
            }
          }
        }

        .side-wrapper {
          padding: 40px 20px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .action-page-wrapper {
    &.action-page-v2 {
      .wrapper-outer {
        .wrapper-inner {
          .action-box {
            padding: 30px;

            .box-content {
              .buttons {
                .button {
                  min-width: 130px;
                }
              }
            }
          }
        }

        .side-wrapper {
          padding: 30px;
        }
      }
    }
  }
}
</style>
