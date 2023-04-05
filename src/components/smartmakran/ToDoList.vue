<script setup lang="ts">
import { tasks } from '/@src/data/smartmakran/todolist'
</script>
<template>
  <!--Grid item-->
  <div class="column is-4">
    <div class="dashboard-title">
      <div class="left">
        <h2 class="dark-inverted">لیست وظیفه‌ها</h2>
        <p class="h-hidden-mobile">وظیفه‌هایی که باید انجام دهید</p>
      </div>
    </div>

    <VFlexTable
      rounded
      :data="tasks"
      :columns="{
        picture: {
          label: 'Picture',
          media: true,
          grow: true,
        },
        title: 'Title',
        priority: 'priority',
        link: 'link',
      }"
    >
      <template #header><div></div></template>

      <template #body-cell="{ row, column, value }">
        <template v-if="column.key === 'picture'">
          <VIconBox color="primary">
            <i class="fas fa-tasks" aria-hidden="true"></i>
          </VIconBox>
        </template>
        <template v-else-if="column.key === 'title'">
          <div>
            <span class="item-name dark-inverted">{{ row.title }}</span>
            <div class="meta-right light-text">{{ row.location }}</div>
          </div>
        </template>
        <template v-else-if="column.key === 'priority'">
          <VTag
            class="tag is-rounded"
            :color="
              row.priority === 'high'
                ? 'danger'
                : row.priority === 'medium'
                ? 'warning'
                : undefined
            "
          >
            {{
              row.priority === 'high'
                ? 'بالا'
                : row.priority === 'medium'
                ? 'متوسط'
                : 'پایین'
            }}
          </VTag>
        </template>
        <template v-else-if="column.key === 'link'">
          <RouterLink :to="{ name: 'index' }">
            <VAction class="action-button is-dark-outlined is-pushed-mobile"
              >جزئیات</VAction
            >
          </RouterLink>
        </template>

        <span v-else class="light-text">{{ value }}</span>
      </template>
    </VFlexTable>
  </div>
</template>
