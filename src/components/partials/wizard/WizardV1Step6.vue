<script setup lang="ts">
import { tools } from '/@src/data/wizard'
import { useWizard } from '/@src/stores/wizard'
const wizard = useWizard()
</script>

<template>
  <div class="step-content">
    <div class="step-title">
      <h2 class="dark-inverted">ابزار لازم برای کار با پروژه</h2>
      <p>مجموعه‌ای از ابزار لازم برای کار با پروژه‌ی خود را مشخص کنید.</p>
    </div>

    <div class="tools-wrapper">
      <div class="columns is-multiline">
        <!--Tool-->
        <div v-for="tool in tools" :key="tool.name" class="column is-4">
          <div class="tool-card">
            <input v-model="wizard.data.tools" type="checkbox" :value="tool" />

            <div class="tool-card-inner">
              <VBlock :title="tool.name" :subtitle="tool.description" center>
                <template #icon>
                  <VAvatar :picture="tool.logo" />
                </template>
                <template #action>
                  <div class="checkmark">
                    <i aria-hidden="true" class="iconify" data-icon="feather:check"></i>
                  </div>
                </template>
              </VBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
