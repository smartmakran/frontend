<script setup lang="ts">
import { ref } from 'vue'
import { VAvatarColor } from '/@src/components/base/avatar/VAvatar.vue'

const projects: {
  initials: string
  color: VAvatarColor
  name: string
  subtitle: string
}[] = [
  {
    initials: 'D',
    color: 'warning',
    name: 'پروژه‌ی اپلیکیشن ارسال مرسوله',
    subtitle: 'Food For Good',
  },
  {
    initials: 'H',
    color: 'h-green',
    name: 'داشبرد سلامت و فیتنس',
    subtitle: "Fit'n'Dance",
  },
  {
    initials: 'LT',
    color: 'info',
    name: 'داشبرد آموزشی و یادگیری',
    subtitle: "Fit'n'Dance",
  },
  {
    initials: 'B',
    color: 'h-purple',
    name: 'داشبورد سرمایه‌گذاری و مالی',
    subtitle: 'VNeo Bank',
  },
]
const selectedProject = ref(projects[1])
</script>

<template>
  <VDropdown class="project-dropdown" spaced>
    <template #button="{ toggle }">
      <VAvatar
        size="small"
        :color="selectedProject.color"
        :initials="selectedProject.initials"
        tabindex="0"
        @keydown.space.prevent="toggle"
        @click="toggle"
      />
    </template>

    <template #content="{ close }">
      <a
        v-for="project in projects"
        :key="project.initials"
        class="dropdown-item dropdown-block"
        :class="[project.initials === selectedProject.initials && 'is-active']"
        tabindex="0"
        @keydown.space.prevent="
          () => {
            selectedProject = project
            close()
          }
        "
        @click="
          () => {
            selectedProject = project
            close()
          }
        "
      >
        <VAvatar size="small" :color="project.color" :initials="project.initials" />

        <div class="meta">
          <span class="dark-inverted">{{ project.name }}</span>
          <span>{{ project.subtitle }}</span>
        </div>
      </a>
    </template>
  </VDropdown>
</template>
