<script setup lang="ts">
import { computed, ref } from 'vue'
import { popovers } from '/@src/data/users/userPopovers'

const data = ref([
  {
    name: 'Website Redesign',
    unit: 'hrs',
    quantity: 54,
    rate: 24,
  },
  {
    name: 'Logo Design',
    unit: 'hrs',
    quantity: 12,
    rate: 24,
  },
  {
    name: 'Custom Illustrations',
    unit: 'hrs',
    quantity: 7,
    rate: 32,
  },
])

const vatRate = 0.1
const totalData = computed(() => {
  const subtotal = data.value.reduce((acc, item) => {
    return acc + item.quantity * item.rate
  }, 0)
  const vatValue = subtotal * vatRate
  const total = subtotal + vatValue

  return [
    {
      label: 'Subtotal',
      value: subtotal,
    },
    {
      label: 'Taxes',
      value: vatValue,
    },
    {
      label: 'Total',
      value: total,
    },
  ]
})

const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const columns = {
  name: {
    label: 'Description',
    grow: true,
    inverted: true,
  },
  unit: {
    label: 'Unit',
    align: 'end',
  },
  quantity: 'Quantity',
  rate: {
    label: 'Rate',
    inverted: true,
    format: (value: any) => usdFormatter.format(value),
  },
  subtotal: {
    label: 'Subtotal',
    inverted: true,
    format: (value: any, row: any) => usdFormatter.format(row.quantity * row.rate),
  },
} as const

const totalColumns = {
  label: {
    label: '',
    grow: 'xl',
    align: 'end',
  },
  value: {
    label: '',
    bold: true,
    format: (value: any) => usdFormatter.format(value),
  },
} as const
</script>

<template>
  <div class="invoice-wrapper">
    <div class="invoice-header">
      <div class="left">
        <h3>فاکتور کد FC-456-14</h3>
      </div>
      <div class="right">
        <div class="controls">
          <a class="action">
            <i aria-hidden="true" class="iconify" data-icon="feather:printer"></i>
          </a>
          <a class="action">
            <i aria-hidden="true" class="iconify" data-icon="feather:download-cloud"></i>
          </a>
          <a class="action">
            <i aria-hidden="true" class="iconify" data-icon="feather:mail"></i>
          </a>
          <a class="action">
            <i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="invoice-body">
      <div class="invoice-card">
        <div class="invoice-section is-flex is-bordered">
          <Tippy class="has-help-cursor" interactive placement="bottom-start">
            <VAvatar size="large" picture="/demo/avatars/13.jpg" />
            <template #content>
              <UserPopoverContent :user="popovers.user13" />
            </template>
          </Tippy>

          <div class="meta">
            <h3>تارا خاشقچی</h3>
            <span>tarasvenson@vuero.ir</span>
            <span>001-546-5491</span>
          </div>
          <div class="end">
            <h3>فاکتور کد FC-456-14</h3>
            <span>تاریخ ارائه: 27 آبان 1400</span>
            <span>مهلت پرداخت: 27 آذر 1400</span>
          </div>
        </div>

        <div class="invoice-section is-flex is-bordered">
          <VAvatar
            size="large"
            class="is-customer"
            picture="/demo/photos/brands/airbnb.svg"
          />

          <div class="meta">
            <h3>ایر بی ان بی</h3>
            <span>خیابان برایان, سان فرانسیسکو,</span>
            <span>آمریکا</span>
          </div>
          <div class="end is-left">
            <h3>توضیحات</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است.
            </p>
          </div>
        </div>
        <div class="invoice-section">
          <VFlexTable :data="data" :columns="columns" rounded reactive>
            <template #body-cell="{ column, row }">
              <template v-if="column.key === 'quantity'">
                <VControl>
                  <VField>
                    <input
                      v-model="row[column.key]"
                      class="input"
                      type="number"
                      min="0"
                    />
                  </VField>
                </VControl>
              </template>
            </template>
          </VFlexTable>

          <VFlexTable subtable :data="totalData" :columns="totalColumns">
            <template #body-cell="{ column, value, row }">
              <template v-if="column.key === 'label'">
                <span class="table-label">{{ value }}</span>
              </template>
              <template v-else-if="column.key === 'value' && row.label === 'Total'">
                <span class="table-total is-bigger">{{ value }}</span>
              </template>
              <template v-else>
                <span class="table-value">{{ value }}</span>
              </template>
            </template>
          </VFlexTable>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../scss/abstracts/mixins';

/* ==========================================================================
4. Invoice
========================================================================== */
.invoice-wrapper {
  max-width: 740px;
  margin: 0 auto;

  &.is-navbar {
    margin-top: 30px;
  }

  .invoice-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--fade-grey-dark-4);

    .left {
      h3 {
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .right {
      .controls {
        display: flex;

        .action {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 32px;
          width: 32px;
          min-width: 32px;
          border-radius: var(--radius-rounded);
          color: var(--light-text);
          margin: 0 4px;
          transition: all 0.3s; // transition-all test

          &:hover {
            color: var(--dark-text);
            background: var(--fade-grey-dark-4);
          }

          svg {
            height: 16px;
            width: 16px;
            stroke-width: 1.6px;
          }
        }
      }
    }
  }

  .invoice-body {
    .invoice-card {
      @include vuero-s-card;

      padding: 0;

      .invoice-section {
        padding: 40px;

        &.is-flex {
          display: flex;
          align-items: center;

          .meta {
            margin-left: 16px;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: 16px;
            }
            font-family: var(--font);

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              line-height: 1;
            }

            span {
              display: block;
              color: var(--light-text);
              font-weight: 400;
              font-size: 0.9rem;
            }
          }

          .end {
            margin-left: auto;
            text-align: right;
            [dir='rtl'] & {
              margin-left: unset;
              margin-right: auto;
              text-align: left;
            }

            &.is-left {
              text-align: left;
              [dir='rtl'] & {
                text-align: right;
              }
              max-width: 300px;

              p {
                padding-top: 4px;
                font-size: 0.95rem;
                line-height: 1.2;
              }
            }

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              line-height: 1;
            }

            span {
              display: block;
              color: var(--light-text);
              font-weight: 400;
              font-size: 0.9rem;
            }
          }
        }

        &.is-bordered {
          border-bottom: 1px solid var(--fade-grey-dark-3);
        }

        .v-avatar {
          &.is-customer {
            border: 1.6px solid var(--fade-grey-dark-3);
            border-radius: var(--radius-rounded);
            box-shadow: var(--light-box-shadow);
          }
        }

        .flex-table {
          .flex-table-header {
            span {
              &:not(:first-child) {
                justify-content: flex-end;
              }
            }
          }

          .flex-table-item {
            .flex-table-cell {
              &:not(:first-child) {
                justify-content: flex-end;
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
5. Invoice Dark mode
========================================================================== */

.is-dark {
  .invoice-wrapper {
    .invoice-header {
      border-color: var(--dark-sidebar-light-20);

      .left {
        h3 {
          color: var(--dark-dark-text);
        }
      }

      .right {
        .controls {
          .action {
            border: 1px solid transparent;

            &:hover,
            &:focus {
              background: var(--dark-sidebar-light-2);
              border-color: var(--primary);
              color: var(--primary);
            }
          }
        }
      }
    }

    .invoice-body {
      .invoice-card {
        @include vuero-card--dark;
      }
    }

    .invoice-section {
      border-color: var(--dark-sidebar-light-12) !important;

      &.is-flex {
        .v-avatar {
          border-color: var(--dark-sidebar-light-12) !important;
        }

        .meta,
        .end {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .invoice-wrapper {
    .invoice-section {
      &.is-flex {
        flex-direction: column;
        text-align: center;

        .v-avatar {
          margin-bottom: 16px;
        }

        .meta {
          margin-left: 0 !important;
          [dir='rtl'] & {
            margin-left: unset !important;
            margin-right: 0 !important;
          }
        }

        .end {
          margin: 16px auto 0;
          text-align: center !important;
          [dir='rtl'] & {
            margin: 16px auto 0 auto !important;
          }
        }
      }

      .flex-table {
        .flex-table-item {
          .flex-table-cell {
            &.is-grow {
              > span {
                margin-left: 0;
                [dir='rtl'] & {
                  margin-left: unset;
                  margin-right: 0;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
