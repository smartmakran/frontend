<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { Field, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'

import { useDarkmode } from '/@src/stores/darkmode'
import { useNotyf } from '/@src/composable/useNotyf'
import { useUserStore } from '/@src/stores/user'
import { useApi } from '/@src/composable/useApi'
import axios from 'axios'

const isLoading = ref(false)
const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const api = useApi()
const redirect = route.query.redirect as string

const { t } = useI18n()

const schema = yup.object({
  phone: yup
    .string()
    .required(t('auth.errors.phone.required'))
    .matches(/^\+?[0-9]{10,15}$/, t('auth.errors.phone.invalid')),
  password: yup.string().required(t('auth.errors.password.required')),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const userStore = useUserStore()

const onLogin = handleSubmit(async (values) => {
  if (!isLoading.value) {
    isLoading.value = true

    try {
      await userStore.login({
        phone: values.phone || '',
        password: values.password || '',
      })

      if (redirect) {
        router.push(redirect)
      } else {
        router.push({
          name: 'app',
        })
      }

      notyf.dismissAll()
      notyf.success(`${t('auth.login.success')}, ${userStore.user!.fullName}`)
    } catch (error: any) {
      if (error.response?.status) {
        if (error.response.status !== 401) throw error
        notyf.error({
          message: error.response.data.message,
          duration: 3000,
        })
      }
    } finally {
      isLoading.value = false
    }
  }
})
useHead({
  title: `${t('app.title')} | ${t('auth.login.title')}`,
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-8 h-hidden-mobile h-hidden-tablet-p hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body">
          <div class="columns" style="margin: auto">
            <div class="column is-10 is-offset-1">
              <img
                class="light-image has-light-shadow has-light-border"
                src="/@src/assets/smartmakran/login.jpg"
                alt=""
              />
              <img
                class="dark-image has-light-shadow"
                src="/@src/assets/smartmakran/login.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="hero-footer">
          <p class="has-text-centered"></p>
        </div>
      </div>
    </div>

    <!-- Form section -->
    <div class="column is-4">
      <div class="hero is-fullheight is-white">
        <div class="hero-heading">
          <label
            class="dark-mode ml-auto"
            tabindex="0"
            @keydown.space.prevent="(e) => (e.target as HTMLLabelElement).click()"
          >
            <input
              type="checkbox"
              :checked="!darkmode.isDark"
              @change="darkmode.onChange"
            />
            <span></span>
          </label>
          <div class="auth-logo">
            <RouterLink :to="{ name: 'index' }">
              <AnimatedLogo width="36px" height="36px" />
            </RouterLink>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>{{ t('auth.login.title') }}</h2>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Login Form -->
                  <form @submit="onLogin">
                    <div id="login-form" class="login-form">
                      <!-- Phone -->
                      <Field v-slot="{ field, errorMessage }" name="phone">
                        <VField>
                          <VControl
                            icon="feather:phone"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input input-style"
                              type="text"
                              :placeholder="t('auth.placeholder.phone')"
                              autocomplete="phone"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <!-- Password -->
                      <Field v-slot="{ field, errorMessage }" name="password">
                        <VField>
                          <VControl
                            icon="feather:lock"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input input-style"
                              type="password"
                              :placeholder="t('auth.placeholder.password')"
                              autocomplete="new-password"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <!-- Submit -->
                      <VField>
                        <VControl class="login">
                          <VButton type="submit" color="primary" bold fullwidth raised>
                            {{ t('auth.login.submit') }}
                          </VButton>
                        </VControl>
                      </VField>
                    </div>
                  </form>
                  <RouterLink :to="{ name: 'auth-register' }">
                    {{ t('auth.register.link') }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.input-style {
  padding-right: 35px;
}
</style>
