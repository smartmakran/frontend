<script setup lang="ts">
import { ref } from 'vue'
import { jobs } from '/@src/data/dashboards/jobs'

export type Job = 'web-developer' | 'uiux-designer' | 'backend-developer'

const tagsValue: Job[] = []
const tagsOptions = [
  { value: 'web-developer', label: 'رابط کاربری' },
  { value: 'uiux-designer', label: 'رابط کاربری و تجربه کاربری' },
  { value: 'backend-developer', label: 'بک اند' },
]

const jobType = ref(['job-type-2'])
const jobSeniority = ref(['job-seniority-3', 'job-seniority-4'])
const jobSalary = ref(['job-salary-5', 'job-salary-6'])
</script>

<template>
  <div class="jobs-dashboard">
    <div class="jobs-dashboard-wrapper">
      <!--Search toolbar -->
      <div class="search-menu">
        <div class="search-bar">
          <VField class="is-autocomplete-select is-curved-select">
            <VControl icon="feather:search">
              <Multiselect
                v-model="tagsValue"
                mode="tags"
                :searchable="true"
                :create-tag="true"
                :options="tagsOptions"
                placeholder=""
              />
            </VControl>
          </VField>
        </div>
        <div class="search-location">
          <i class="iconify" data-icon="feather:map-pin"></i>
          لس آنجلس
        </div>
        <div class="search-job">
          <i class="iconify" data-icon="feather:briefcase"></i>
          <input type="text" placeholder="نوع شغل" />
        </div>
        <div class="search-salary">
          <i class="iconify" data-icon="feather:dollar-sign"></i>
          <input type="text" placeholder="بازه حقوق" />
        </div>
        <button class="search-button">جستجو</button>
      </div>

      <!--Dashboard content -->
      <div class="main-container">
        <!--Left Alert -->
        <div class="search-type">
          <div class="alert">
            <div class="alert-title">Create Job Alert</div>
            <div class="alert-subtitle">Create a job alert now and never miss a job</div>
            <VField>
              <VControl icon="feather:briefcase">
                <input type="text" class="input" placeholder="Keywords" />
              </VControl>
            </VField>
            <VButton color="primary" fullwidth>Create Job Alert</VButton>
          </div>

          <!--Left filters block -->
          <div class="job-time">
            <div class="job-time-title">نوع استخدامی</div>
            <div class="job-wrapper">
              <div class="type-container">
                <VCheckbox
                  v-model="jobType"
                  value="job-type-1"
                  label="شغل‌های تمام وقت"
                  color="primary"
                  paddingless
                />
                <span class="job-number">56</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobType"
                  value="job-type-2"
                  label="شغل‌های پاره وقت"
                  color="primary"
                  paddingless
                />
                <span class="job-number">43</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobType"
                  value="job-type-3"
                  label="موقعیت‌های دورکاری"
                  color="primary"
                  paddingless
                />
                <span class="job-number">24</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobType"
                  value="job-type-4"
                  label="موقعیت‌های کارورزی"
                  color="primary"
                  paddingless
                />
                <span class="job-number">27</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobType"
                  value="job-type-5"
                  label="پیمانکاری"
                  color="primary"
                  paddingless
                />
                <span class="job-number">76</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobType"
                  value="job-type-6"
                  label="مهارت آموزی"
                  color="primary"
                  paddingless
                />
                <span class="job-number">28</span>
              </div>
            </div>
          </div>

          <!--Left filters block -->
          <div class="job-time">
            <div class="job-time-title">سطح شغلی</div>
            <div class="job-wrapper">
              <div class="type-container">
                <VCheckbox
                  v-model="jobSeniority"
                  value="job-seniority-1"
                  label="سطح دانشجویی"
                  color="primary"
                  paddingless
                />
                <span class="job-number">98</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSeniority"
                  value="job-seniority-2"
                  label="سطح تازه وارد"
                  color="primary"
                  paddingless
                />
                <span class="job-number">44</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSeniority"
                  value="job-seniority-3"
                  label="سطح متوسط"
                  color="primary"
                  paddingless
                />
                <span class="job-number">35</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSeniority"
                  value="job-seniority-4"
                  label="سطح ارشد"
                  color="primary"
                  paddingless
                />
                <span class="job-number">29</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSeniority"
                  value="job-seniority-5"
                  label="مدیران"
                  color="primary"
                  paddingless
                />
                <span class="job-number">26</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSeniority"
                  value="job-seniority-6"
                  label="سطح دانشجویی"
                  color="primary"
                  paddingless
                />
                <span class="job-number">56</span>
              </div>
            </div>
          </div>

          <!--Left filters block -->
          <div class="job-time">
            <div class="job-time-title">بازه حقوق</div>
            <div class="job-wrapper">
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-1"
                  label="3 میلیون - 5 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">49</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-2"
                  label="5 میلیون - 7 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">67</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-3"
                  label="7 میلیون - 10 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">24</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-4"
                  label="10 میلیون - 15 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">27</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-5"
                  label="15 میلیون - 20 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">76</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-6"
                  label="20 میلیون - 25 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">22</span>
              </div>
              <div class="type-container">
                <VCheckbox
                  v-model="jobSalary"
                  value="job-salary-7"
                  label="25 میلیون - 30 میلیون"
                  color="primary"
                  paddingless
                />
                <span class="job-number">18</span>
              </div>
            </div>
          </div>
        </div>

        <!--Results-->
        <div class="searched-jobs">
          <!--Results toolbar-->
          <div class="searched-bar">
            <div class="searched-count">نمایش ۴۶ موقعیت شغلی</div>
            <div class="searched-link">
              <a class="action-link" tabindex="0">View All</a>
            </div>
          </div>

          <!--Results content-->
          <div class="job-cards">
            <!--Card-->
            <div v-for="(job, index) in jobs" :key="index" class="job-card">
              <div class="job-card-header">
                <img class="job-card-logo" :src="job.logo" alt="" />
              </div>
              <div class="job-card-title">{{ job.title }}</div>
              <div class="job-card-subtitle">
                {{ job.description }}
              </div>
              <div class="job-detail-buttons">
                <VTags>
                  <VTag
                    v-for="(category, catIndex) in job.categories"
                    :key="catIndex"
                    color="solid"
                    :label="category.name"
                    curved
                  />
                </VTags>
              </div>
              <div class="job-card-buttons">
                <VButtons>
                  <VButton color="primary" raised>Apply Now</VButton>
                  <VButton dark-outlined>Messages</VButton>
                </VButtons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';

:root {
  --header-bg-color: #fff;
  --search-border-color: #efefef;
  --subtitle-color: #83838e;
  --button-color: var(--white);
  --input-color: var(--subtitle-color);
}

.is-dark {
  --header-bg-color: var(--dark-sidebar-light-2);
  --search-border-color: var(--dark-sidebar-light-8);
  --input-color: var(--white);
}

.jobs-dashboard {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;

  .jobs-dashboard-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    scroll-behavior: smooth;
    overflow: auto;
  }

  .search-menu {
    height: 56px;
    white-space: nowrap;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    background-color: var(--header-bg-color);
    border-radius: 8px;
    width: 100%;
    padding-left: 0.75rem;
    [dir='rtl'] & {
      padding-left: unset;
      padding-right: 0.75rem;
    }

    > div:not(:last-of-type) {
      border-right: 1px solid var(--search-border-color);
      [dir='rtl'] & {
        border-right: unset;
        border-left: 1px solid var(--search-border-color);
      }
    }

    .search-bar {
      height: 55px;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      padding-right: 1.5rem;
      [dir='rtl'] & {
        padding-left: 1.5rem;
        padding-right: unset;
      }

      .field {
        width: 100%;
      }

      .multiselect-tags {
        padding-left: 2.5rem;
        [dir='rtl'] & {
          padding-left: unset;
          padding-right: 2.5rem;
        }
      }
    }

    .search-location,
    .search-job,
    .search-salary {
      display: flex;
      align-items: center;
      width: 50%;
      font-size: 14px;
      font-weight: 500;
      padding: 0 25px;
      height: 100%;
      font-family: var(--font);

      input {
        width: 100%;
        height: 100%;
        display: block;
        font-family: var(--font);
        color: var(--input-color);
        background-color: transparent;
        border: none;
      }

      svg {
        margin-right: 0.5rem;
        [dir='rtl'] & {
          margin-left: 0.5rem;
          margin-right: unset;
        }

        width: 18px;
        color: var(--primary);
        flex-shrink: 0;
      }
    }

    .search-button {
      background-color: var(--primary);
      min-width: 120px;
      height: 55px;
      border: none;
      font-weight: 500;
      font-family: var(--font);
      padding: 0 1rem;
      border-radius: 0 0.75rem 0.75rem 0;
      color: var(--button-color);
      cursor: pointer;
      margin-left: auto;
      [dir='rtl'] & {
        margin-left: unset;
        margin-right: auto;
        border-radius: 0.75rem 0 0 0.75rem;
      }
    }
  }

  .main-container {
    display: flex;
    flex-grow: 1;
    padding-top: 2rem;

    .search-type {
      width: 270px;
      display: flex;
      flex-direction: column;
      height: 100%;
      flex-shrink: 0;
    }

    .alert {
      background-color: var(--widget-grey);
      padding: 1.75rem;
      border-radius: 8px;

      .alert-title {
        font-size: 1rem;
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 0.75rem;
      }

      .alert-subtitle {
        font-size: 13px;
        font-family: var(--font);
        color: var(--subtitle-color);
        margin-bottom: 1.5rem;
      }

      input {
        border-radius: 6px;
      }
    }

    .job-time {
      padding-top: 1.75rem;

      .job-wrapper {
        padding-top: 1.75rem;
      }

      .job-time-title {
        font-size: 0.95rem;
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
      }

      .type-container {
        display: flex;
        align-items: center;
        color: var(--subtitle-color);
        font-size: 13px;

        label {
          margin-left: 2px;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: 2px;
          }

          display: flex;
          align-items: center;
          cursor: pointer;
        }

        + .type-container {
          margin-top: 10px;
        }

        .job-number {
          margin-left: auto;
          [dir='rtl'] & {
            margin-left: unset;
            margin-right: auto;
          }

          display: flex;
          justify-content: center;
          align-items: center;
          height: 25px;
          min-width: 25px;
          background-color: var(--white);
          color: var(--subtitle-color);
          font-size: 0.8rem;
          font-family: var(--font);
          font-weight: 500;
          padding: 0 0.25rem;
          border-radius: 50rem;
        }
      }
    }

    .searched-jobs {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding-left: 2.5rem;
      [dir='rtl'] & {
        padding-left: unset;
        padding-right: 2.5rem;
      }
    }

    .searched-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .searched-count {
        font-family: var(--font-alt);
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .job-cards {
      padding-top: 20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1.5rem;
      grid-row-gap: 1.5rem;

      @media screen and (max-width: 1212px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (max-width: 930px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    .job-card {
      @include vuero-l-card;

      cursor: pointer;
      transition: 0.2s;

      &:hover,
      &:focus {
        transform: translateY(-5px);
      }

      .job-card-header {
        display: flex;
        align-items: flex-start;
      }

      .job-card-logo {
        width: 80px;
        height: 80px;
      }

      .job-card-title {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--dark-text);
        margin-bottom: 0.75rem;
      }

      .job-card-subtitle {
        color: var(--subtitle-color);
        font-family: var(--font);
        font-size: 0.95rem;
        line-height: 1.6em;
        margin-bottom: 1rem;
      }

      .job-card-buttons {
        margin-top: 1rem;

        .buttons {
          justify-content: space-between;

          .v-button {
            width: 48%;
          }
        }
      }
    }
  }
}

.is-dark {
  .jobs-dashboard {
    .job-card {
      @include vuero-card--dark;
    }

    .main-container {
      .alert {
        @include vuero-card--dark;
      }

      .job-time {
        .job-number {
          background: var(--dark-sidebar-light-2);
        }
      }
    }
  }
}

@media screen and (max-width: 620px) {
  .job-cards {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (max-width: 730px) {
  .job-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 767px) {
  .jobs-dashboard {
    .search-menu {
      flex-direction: column;
      height: auto;
      padding: 1rem;
      [dir='rtl'] & {
        padding: 1rem;
      }

      > div:not(:last-of-type) {
        border-right: none;
        [dir='rtl'] & {
          border-left: none;
        }
      }

      .search-bar {
        padding: 0;
        [dir='rtl'] & {
          padding: 0;
        }
      }

      .search-location,
      .search-job,
      .search-salary {
        width: 100%;
        height: 44px;
        padding: 0;
      }

      .search-button {
        width: 100%;
        border-radius: 0.75rem;
        [dir='rtl'] & {
          border-radius: 0.75rem;
        }
      }
    }

    .main-container {
      .search-type {
        display: none;
      }

      .searched-jobs {
        padding-left: 0;
        [dir='rtl'] & {
          padding-right: 0;
        }
      }
    }
  }
}
</style>
