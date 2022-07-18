<script setup lang="ts">
import { ref } from 'vue'

const people = [
  {
    name: 'آلیس گیتس',
    role: 'مهندس نرم‌افزار',
    avatar: '/demo/avatars/5.jpg',
  },
  {
    name: 'مریم جلالی',
    role: 'مدیر پروژه',
    avatar: '/demo/avatars/5.jpg',
  },
  {
    name: 'رایان بهرام',
    role: 'توسعه دهنده‌ی وب',
    avatar: '/demo/avatars/14.jpg',
  },
  {
    name: 'ایران وطنخواه',
    role: 'مدیر پروژه',
    avatar: '/demo/avatars/23.jpg',
  },
  {
    name: 'جاناتان کارگر',
    role: 'مدیر محصول',
    avatar: '/demo/avatars/32.jpg',
  },
  {
    name: 'علی ژاندارم',
    role: 'تحلیلگر بازار',
    avatar: '/demo/avatars/39.jpg',
  },
  {
    name: 'ارسطو زاهد',
    role: 'مدیر فروش',
    avatar: '/demo/avatars/19.jpg',
  },
]

const records = [
  {
    name: 'پروژه‌ی اپلیکیشن ارسال مرسوله',
    date: 'آبان 1400',
    preview: '/demo/photos/apps/1.jpg',
  },
  {
    name: 'داشبرد سلامت و فیتنس',
    date: 'فروردین ۱۴۰۰',
    preview: '/demo/photos/apps/2.png',
  },
  {
    name: 'هزینه های اجلاس فناوری',
    date: 'فایل اکسل',
    preview: '/images/icons/files/sheet.svg',
    squared: true,
  },
  {
    name: 'داشبرد آموزشی و یادگیری',
    date: 'دی 1399',
    preview: '/demo/photos/apps/3.png',
  },
  {
    name: 'داشبرد آموزشی و یادگیری',
    date: 'دی 1399',
    preview: '/demo/photos/apps/4.png',
  },
  {
    name: 'طرح کلی پروژه',
    date: 'فایل وورد',
    preview: '/images/icons/files/doc-2.svg',
    squared: true,
  },
  {
    name: 'خلاصه پروژه های 2020',
    date: 'فایل پی‌دی‌اف',
    preview: '/images/icons/files/pdf.svg',
    squared: true,
  },
  {
    name: 'اپلیکیشن مدیریت رزومه',
    date: 'فروردین ۱۴۰۰',
    preview: '/demo/photos/apps/5.png',
  },
  {
    name: 'بازطراحی صفحه اول وب‌سایت',
    date: 'فایل ایلاستریتور',
    preview: '/images/icons/files/ai.svg',
    squared: true,
  },
]

type TabId = 'all' | 'people' | 'records'
const activeTab = ref<TabId>('all')
const options = ref(['Newest'])
</script>

<template>
  <div class="search-results-wrapper">
    <div class="search-results-header">
      <VControl icon="feather:search">
        <input class="input" placeholder="جستجوی مجدد..." />
      </VControl>

      <div class="search-info">
        <span>54 نتیجه پیدا شد</span>
      </div>

      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[activeTab === 'all' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'all'"
                @click="activeTab = 'all'"
                ><span>All</span></a
              >
            </li>
            <li :class="[activeTab === 'people' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'people'"
                @click="activeTab = 'people'"
                ><span>People</span></a
              >
            </li>
            <li :class="[activeTab === 'records' && 'is-active']">
              <a
                tabindex="0"
                @keydown.space.prevent="activeTab = 'records'"
                @click="activeTab = 'records'"
                ><span>Records</span></a
              >
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="search-results-body">
      <div class="columns">
        <!--Filters-->
        <div class="column is-4">
          <div class="filter-box">
            <h4 class="dark-inverted">براساس انتشار</h4>

            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Newest"
                  label="Newest"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="23" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Recently updated"
                  label="Recently updated"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="31" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Upvoted"
                  label="Upvoted"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="12" rounded />
                </div>
              </VControl>
            </VField>
          </div>

          <div class="filter-box">
            <h4 class="dark-inverted">نوع</h4>

            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="User profile"
                  label="User profile"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="19" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Project"
                  label="Project"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="174" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Blog Post"
                  label="Blog Post"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="71" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Wireframes"
                  label="Wireframes"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="54" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Files"
                  label="Files"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="8" rounded />
                </div>
              </VControl>
            </VField>
          </div>

          <div class="filter-box">
            <h4 class="dark-inverted">موضوعات</h4>

            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Engineering"
                  label="Engineering"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="45" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Management"
                  label="Management"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="12" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Software"
                  label="Software"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="36" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Human Resources"
                  label="Human Resources"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="3" rounded />
                </div>
              </VControl>
            </VField>
            <VField>
              <VControl>
                <VCheckbox
                  v-model="options"
                  value="Finance"
                  label="Finance"
                  color="primary"
                  circle
                />

                <div class="control-end">
                  <VTag label="7" rounded />
                </div>
              </VControl>
            </VField>
          </div>
        </div>

        <!--Results-->
        <div class="column is-8">
          <div class="tab-content" :class="[activeTab === 'all' && 'is-active']">
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="group-header">
                <VIconWrap icon="feather:user" />
                <h4>افراد</h4>
              </div>

              <div class="search-results-list">
                <!--Item-->
                <div
                  v-for="(person, index) in people"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="person.name" :subtitle="person.role" center>
                    <template #icon>
                      <VAvatar size="medium" :picture="person.avatar" />
                    </template>
                    <template #action>
                      <VButton dark-outlined> پروفایل </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>

            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="group-header">
                <VIconWrap icon="feather:file-text" />

                <h4>رکوردها</h4>
              </div>

              <div class="search-results-list">
                <!--Item-->
                <div
                  v-for="(record, index) in records"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="record.name" :subtitle="record.date" center>
                    <template #icon>
                      <VAvatar
                        size="medium"
                        :picture="record.preview"
                        :squared="record.squared"
                      />
                    </template>
                    <template #action>
                      <VButton dark-outlined> جزئیات </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="[activeTab === 'people' && 'is-active']">
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="search-results-list">
                <div
                  v-for="(person, index) in people"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="person.name" :subtitle="person.role" center>
                    <template #icon>
                      <VAvatar size="medium" :picture="person.avatar" />
                    </template>
                    <template #action>
                      <VButton dark-outlined> پروفایل </VButton>
                    </template>
                  </VBlock>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-content" :class="[activeTab === 'records' && 'is-active']">
            <!--Search Results Group-->
            <div class="search-results-group">
              <div class="search-results-list">
                <!--Item-->
                <div
                  v-for="(record, index) in records"
                  :key="index"
                  class="search-results-item"
                >
                  <VBlock :title="record.name" :subtitle="record.date" center>
                    <template #icon>
                      <VAvatar
                        size="medium"
                        :picture="record.preview"
                        :squared="record.squared"
                      />
                    </template>
                    <template #action>
                      <VButton dark-outlined> جزئیات </VButton>
                    </template>
                  </VBlock>
                </div>
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

.is-navbar {
  .search-results-wrapper {
    padding-top: 30px;
  }
}

.search-results-wrapper {
  .search-results-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .control {
      margin-right: 10px;
    }

    .search-info {
      span {
        font-family: var(--font);
        color: var(--light-text);
      }
    }

    .tabs-inner {
      margin-left: auto;

      .tabs {
        margin-bottom: 0;
        min-width: 280px;
      }
    }
  }

  .search-results-body {
    .filter-box {
      @include vuero-s-card;

      margin-bottom: 16px;

      h4 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 10px;
      }

      .field {
        margin-bottom: 0;

        .control {
          display: flex;
          align-items: center;

          .checkbox {
            padding: 0.75em 0;
          }

          .control-end {
            margin-left: auto;
          }
        }
      }
    }

    .search-results-group {
      padding-left: 30px;
      margin-bottom: 20px;

      .group-header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--fade-grey-dark-6);
        padding: 0 0 12px;
        margin-bottom: 12px;

        .icon-wrap {
          height: 32px;
          width: 32px;
          min-width: 32px;
          border-radius: var(--radius-rounded);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 6px;
          background: var(--white);
          border: 1px solid var(--primary);
          color: var(--primary);

          svg {
            height: 14px;
            width: 14px;
          }
        }

        h4 {
          font-family: var(--font-alt);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: var(--light-text);
        }
      }

      .search-results-list {
        padding: 10px 0;

        .search-results-item {
          @include vuero-s-card;

          margin-bottom: 16px;

          > img {
            display: block;
            height: 50px;
            width: 50px;
            min-width: 50px;
          }
        }
      }
    }
  }
}

/* ==========================================================================
2. Search Results Page Dark mode
========================================================================== */

.is-dark {
  .search-results-wrapper {
    .search-results-body {
      .filter-box {
        @include vuero-card--dark;
      }

      .search-results-group {
        .search-results-list {
          .search-results-item {
            @include vuero-card--dark;
          }
        }

        .group-header {
          border-color: var(--dark-sidebar-light-20);

          .icon-wrap {
            background: var(--dark-sidebar-light-2);
            border-color: var(--primary);
            color: var(--primary);
          }
        }
      }
    }
  }
}

/* ==========================================================================
3. Media Queries
========================================================================== */

@media only screen and (max-width: 767px) {
  .search-results-wrapper {
    .search-results-header {
      flex-direction: column;

      .control,
      .tabs-inner {
        margin: 0;
      }

      .control {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
      }

      .search-info {
        padding: 10px 0;
      }
    }

    .search-results-body {
      .search-results-group {
        padding-left: 0;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .search-results-wrapper {
    .search-results-body {
      .search-results-group {
        padding-left: 0;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .search-results-wrapper {
    .search-results-body {
      .search-results-group {
        padding-left: 10px;
      }
    }
  }
}
</style>
