<script setup lang="ts">
import { datatableV4 } from '/@src/data/layouts/datatable-v4'
</script>

<template>
  <VSimpleDatatables>
    <thead>
      <tr>
        <th scope="col" data-sortable="false">
          <VControl>
            <label class="checkbox is-primary is-outlined is-circle">
              <input id="head-checkbox" type="checkbox" />
              <span></span>
            </label>
          </VControl>
        </th>
        <th scope="col" data-sortable="false">نوع</th>
        <th scope="col">نام</th>
        <th scope="col">سایز</th>
        <th scope="col">نسخه</th>
        <th scope="col">آخرین بروزرسانی</th>
        <th scope="col" data-sortable="false"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="datatableV4.length === 0">
        <td colspan="7">
          <!--Empty Placeholder-->
          <VPlaceholderSection
            title="داده‌ای برای نمایش وجود ندارد"
            subtitle="هم اکنون داده‌ای در این لیست برای نمایش وجود ندارد."
          >
            <template #image>
              <img
                class="light-image"
                src="/@src/assets/illustrations/placeholders/search-4.svg"
                alt=""
              />
              <img
                class="dark-image"
                src="/@src/assets/illustrations/placeholders/search-4-dark.svg"
                alt=""
              />
            </template>
          </VPlaceholderSection>
        </td>
      </tr>
    </tbody>
  </VSimpleDatatables>
</template>
