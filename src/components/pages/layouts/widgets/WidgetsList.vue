<script setup lang="ts">
import {
  todoList1,
  todoList2,
  todoList3,
  todoList4,
} from '/@src/data/widgets/list/todoList'
import { fileList1, fileList2 } from '/@src/data/widgets/list/fileList'
import { userList } from '/@src/data/widgets/list/userList'
import { topicList } from '/@src/data/widgets/list/topicList'
import { timeline } from '/@src/data/widgets/list/timeline'
</script>

<template>
  <div class="columns is-multiline widget-demo-columns half-columns">
    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="پیشرفت کاربر" straight class="list-widget-v1">
        <listWidgetUserList :users="userList" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1b-->
    <div class="column is-4">
      <ListWidgetSingle title="پیشرفت کاربر" straight class="list-widget-v1">
        <listWidgetUserList :users="userList" squared />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed title="فایل‌ها" straight class="list-widget-v2">
        <template #tab1>
          <listWidgetFileList :files="fileList1" />
        </template>
        <template #tab2>
          <listWidgetFileList :files="fileList2" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="تسک‌ها" straight class="list-widget-v1">
        <ListWidgetTodoList :todos="todoList1" color="warning" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="تسک‌ها" straight class="list-widget-v1">
        <ListWidgetTodoList :todos="todoList2" color="info" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed
        title="تسک‌ها"
        straight
        :labels="['همه', 'مال من']"
        class="list-widget-v2"
      >
        <template #tab1>
          <ListWidgetTodoList :todos="todoList3" />
        </template>
        <template #tab2>
          <ListWidgetTodoList :todos="todoList4" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="موضوعات" straight class="list-widget-v1">
        <listWidgetTopicList :topics="topicList" rounded />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="موضوعات" straight class="list-widget-v1">
        <listWidgetTopicList :topics="topicList" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V2-->
    <div class="column is-4">
      <ListWidgetTabbed title="موضوعات" straight class="list-widget-v2">
        <template #tab1>
          <listWidgetTopicList :topics="topicList" />
        </template>
        <template #tab2>
          <listWidgetTopicList :topics="topicList" />
        </template>
      </ListWidgetTabbed>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="تایم لاین" straight class="list-widget-v3">
        <ListWidgetIconTimeline :items="timeline" />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="تایم لاین" straight class="list-widget-v3">
        <ListWidgetIconTimeline :items="timeline" squared />
      </ListWidgetSingle>
    </div>

    <!--List Widget V1a-->
    <div class="column is-4">
      <ListWidgetSingle title="تایم لاین" straight class="list-widget-v3">
        <ListWidgetIconTimeline :items="timeline" squared colored />
      </ListWidgetSingle>
    </div>
  </div>
</template>
