<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import type { WizardTeammate, WizardTeammateRole } from '/@src/models/wizard'
import { users } from '/@src/data/wizard'
import { useWizard } from '/@src/stores/wizard'

const search = ref('')
const isAddingMembers = ref(false)
const filteredUsers = ref<Omit<WizardTeammate, 'role'>[]>([])
const wizard = useWizard()

const addTeammate = (teammate: Omit<WizardTeammate, 'role'>) => {
  wizard.data.teammates.push({
    ...teammate,
    role: 'reader',
  })
  search.value = ''
}

const setTeammateRole = (
  teammate: Omit<WizardTeammate, 'role'>,
  role: WizardTeammateRole
) => {
  const index = wizard.data.teammates.findIndex((item) => {
    return item.name === teammate.name
  })

  if (index > -1) {
    wizard.data.teammates[index].role = role
  }
}

const removeTeammate = (teammate: Omit<WizardTeammate, 'role'>) => {
  const index = wizard.data.teammates.findIndex((item) => {
    return item.name === teammate.name
  })
  if (index > -1) {
    wizard.data.teammates.splice(index, 1)
  }
}

const getRoleLevel = (teammate: WizardTeammate) => {
  switch (teammate.role) {
    case 'collaborator':
      return 1
    case 'manager':
      return 2
    case 'owner':
      return 3
    case 'reader':
    default:
      return 0
  }
}

watchEffect(() => {
  if (!search.value) {
    filteredUsers.value = []
    return
  }

  filteredUsers.value = users
    .filter((item) => {
      return !wizard.data.teammates.find((_item) => {
        return item.name === _item.name
      })
    })
    .filter((item) => item.name.match(new RegExp(search.value, 'i')))
})
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">چه کسانی در این پروژه همکاری دارند؟</h2>
      <p>اعضای تیم خود را مشخص نمائید</p>
    </div>

    <!--List Empty Search Placeholder -->
    <div v-if="!isAddingMembers" class="page-placeholder is-people">
      <div class="placeholder-content">
        <img
          class="light-image is-rounded"
          src="/@src/assets/illustrations/wizard/team-placeholder.svg"
          alt=""
        />
        <img
          class="dark-image is-rounded"
          src="/@src/assets/illustrations/wizard/team-placeholder.svg"
          alt=""
        />
        <h3>دعوت اعضا</h3>
        <p class="is-larger">
          اعضای تیم خود را در صورتی که از قبل مشخص شده اند در این بخش انتخاب و معرفی
          نمائید. می‌توانید این کار را به آینده نیز موکول کنید.
        </p>
        <a
          class="action-link toggle-members-link"
          tabindex="0"
          @keydown.space.prevent="isAddingMembers = true"
          @click="isAddingMembers = true"
        >
          افزودن اعضا
        </a>
      </div>
    </div>

    <div v-if="isAddingMembers" class="project-team-wrapper">
      <div class="project-team-header">
        <VAvatar
          size="big"
          picture="/images/avatars/svg/vuero-1.svg"
          badge="/images/icons/flags/united-states-of-america.svg"
        />
        <h3 class="title is-4 is-narrow is-thin">جمال خاشقچی</h3>
        <p class="light-text">شما صاحب ایده و مالک پروژه هستید</p>

        <VField class="mt-4">
          <VControl icon="feather:search">
            <input v-model="search" class="input" placeholder="جستجوی اعضا..." />
          </VControl>
        </VField>
      </div>

      <div class="project-team-body">
        <div class="members-list">
          <template v-if="filteredUsers.length > 0">
            <TransitionGroup name="list" tag="div">
              <VBlock
                v-for="teammate in filteredUsers"
                :key="teammate.name"
                class="invited-member"
                title="دعوت"
                :subtitle="teammate.name"
              >
                <template #icon>
                  <VAvatar size="medium" :picture="teammate.picture" />
                </template>
                <template #action>
                  <div class="actions">
                    <VIconButton
                      icon="fas fa-plus"
                      class="cancel-button hint--top hint--bubble hint--primary"
                      :aria-label="`دعوت ${teammate.name}`"
                      circle
                      @click="addTeammate(teammate)"
                    />
                  </div>
                </template>
              </VBlock>
            </TransitionGroup>
          </template>
          <template v-if="wizard.data.teammates.length > 0">
            <TransitionGroup name="list-complete" tag="div">
              <VBlock
                v-for="teammate in wizard.data.teammates"
                :key="teammate.name"
                class="invited-member"
                title="دعوت شده"
                :subtitle="teammate.name"
              >
                <template #icon>
                  <VAvatar size="medium" :picture="teammate.picture" />
                </template>
                <template #action>
                  <div class="actions">
                    <div class="permissions">
                      <div class="permission-levels">
                        <div
                          class="permission-level hint--bubble hint--primary hint--top"
                          aria-label="Reader"
                          tabindex="0"
                          @keydown.space.prevent="setTeammateRole(teammate, 'reader')"
                          @click="setTeammateRole(teammate, 'reader')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[getRoleLevel(teammate) >= 0 && 'is-active']"
                          ></div>
                        </div>
                        <div
                          class="permission-level hint--bubble hint--primary hint--top"
                          aria-label="Collaborator"
                          tabindex="0"
                          @keydown.space.prevent="
                            setTeammateRole(teammate, 'collaborator')
                          "
                          @click="setTeammateRole(teammate, 'collaborator')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[getRoleLevel(teammate) >= 1 && 'is-active']"
                          ></div>
                        </div>
                        <div
                          class="permission-level hint--bubble hint--primary hint--top"
                          aria-label="Manager"
                          tabindex="0"
                          @keydown.space.prevent="setTeammateRole(teammate, 'manager')"
                          @click="setTeammateRole(teammate, 'manager')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[getRoleLevel(teammate) >= 2 && 'is-active']"
                          ></div>
                        </div>
                        <div
                          class="permission-level hint--bubble hint--primary hint--top"
                          aria-label="Owner"
                          tabindex="0"
                          @keydown.space.prevent="setTeammateRole(teammate, 'owner')"
                          @click="setTeammateRole(teammate, 'owner')"
                        >
                          <div
                            class="permission-level-inner"
                            :class="[getRoleLevel(teammate) >= 3 && 'is-active']"
                          ></div>
                        </div>
                        <progress
                          class="progress permissions-progress is-primary is-tiny"
                          :value="getRoleLevel(teammate)"
                          :max="3"
                        >
                          0%
                        </progress>
                      </div>
                    </div>
                    <VIconButton
                      icon="fas fa-times"
                      class="cancel-button hint--top hint--bubble hint--primary"
                      aria-label="لغو دعوت"
                      circle
                      @click="removeTeammate(teammate)"
                    />
                  </div>
                </template>
              </VBlock>
            </TransitionGroup>
          </template>
          <div v-else class="empty-wrap has-text-centered">
            <span>پروژه هنوز اعضایی ندارد</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
