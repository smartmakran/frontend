<script setup lang="ts">
const emit = defineEmits(['rename', 'collapse'])
</script>

<template>
  <VDropdown icon="feather:more-vertical" right>
    <template #content>
      <a
        class="dropdown-item kanban-rename kill-drop"
        tabindex="0"
        @keydown.space.prevent="emit('rename')"
        @click="emit('rename')"
      >
        Rename
      </a>
      <a
        class="dropdown-item kanban-collapse kill-drop"
        tabindex="0"
        @keydown.space.prevent="emit('collapse')"
        @click="emit('collapse')"
      >
        Collapse
      </a>
      <hr class="dropdown-divider" />
      <div class="dropdown-item has-child">
        تنظیمات
        <i aria-hidden="true" class="iconify" data-icon="feather:chevron-right"></i>

        <div class="child-dropdown">
          <div class="inner">
            <ul>
              <li>
                <div class="column-setting">
                  <label class="form-switch">
                    <input type="checkbox" class="is-switch" />
                    <i aria-hidden="true"></i>
                  </label>
                  <div class="text">
                    <span>Lock</span>
                    <span>Locks the column</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="column-setting">
                  <label class="form-switch">
                    <input type="checkbox" class="is-switch" checked />
                    <i aria-hidden="true"></i>
                  </label>
                  <div class="text">
                    <span>اعلانات</span>
                    <span>Enables or disables notifications</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="column-setting">
                  <label class="form-switch">
                    <input type="checkbox" class="is-switch" />
                    <i aria-hidden="true"></i>
                  </label>
                  <div class="text">
                    <span>Sorting</span>
                    <span>Enables or disables sorting</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </VDropdown>
</template>
