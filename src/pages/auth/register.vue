<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { Field, useForm } from 'vee-validate'
import * as yup from 'yup'

import { useDarkmode } from '/@src/stores/darkmode'
import { useNotyf } from '/@src/composable/useNotyf'
import { register } from '/@src/services/modules/auth/accounts'

const darkmode = useDarkmode()
const router = useRouter()
const route = useRoute()
const notyf = useNotyf()
const redirect = route.query.redirect as string

const isLoading = ref(false)
const { t } = useI18n()

// Define a validation schema
const schema = yup.object({
  promotional: yup.mixed(),
  name: yup.string().required(t('auth.errors.name.required')),
  phone: yup
    .string()
    .required(t('auth.errors.phone.required'))
    .matches(/^\+?[0-9]{10,15}$/, t('auth.errors.phone.invalid')),
  password: yup
    .string()
    .required(t('auth.errors.password.required'))
    .min(8, t('auth.errors.password.length'))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      t('auth.errors.password.invalid')
    ),
  passwordCheck: yup
    .string()
    .required(t('auth.errors.passwordCheck.required'))
    .oneOf([yup.ref('password')], t('auth.errors.passwordCheck.match')),
})

const { handleSubmit } = useForm({
  validationSchema: schema,
})

const onRegister = handleSubmit(async (values) => {
  if (!isLoading.value) {
    isLoading.value = true

    try {
      await register('auth/register', {
        fullName: values.name || '',
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
      notyf.success(t('auth.notifications.register.success'))
    } catch (error: any) {
      if (error.response?.status !== undefined) {
        if (error.response.status !== 422) throw error
        notyf.error({
          message: Object.values<string>(error.response.data.errors).join(', '),
          duration: 5000,
        })
      }
    } finally {
      isLoading.value = false
    }
  }
})

useHead({
  title: ` ${t('app.title')} | ${t('auth.register.title')}`,
})
</script>

<template>
  <div class="auth-wrapper-inner columns is-gapless">
    <!-- Form section -->
    <div class="column is-5">
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
              <AnimatedLogo class="top-logo" width="36px" height="36px" />
            </RouterLink>
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <h2>{{ t('auth.register.title') }}</h2>
                </div>
                <div class="auth-form-wrapper">
                  <!-- Register Form -->
                  <form @submit="onRegister">
                    <div id="register-form" class="login-form">
                      <!-- Input -->
                      <Field v-slot="{ field, errorMessage }" name="name">
                        <VField>
                          <VControl
                            icon="feather:user"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input input-style"
                              type="text"
                              :placeholder="t('auth.placeholder.fullname')"
                              autocomplete="name"
                            />
                            <p v-if="errorMessage" class="help is-danger">
                              {{ errorMessage }}
                            </p>
                          </VControl>
                        </VField>
                      </Field>

                      <!-- Input -->
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

                      <!-- Input -->
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

                      <!-- Input -->
                      <Field v-slot="{ field, errorMessage }" name="passwordCheck">
                        <VField>
                          <VControl
                            icon="feather:lock"
                            :has-error="Boolean(errorMessage)"
                          >
                            <input
                              v-bind="field"
                              class="input input-style"
                              type="password"
                              :placeholder="t('auth.placeholder.passwordCheck')"
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
                            {{ t('auth.register.submit') }}
                          </VButton>
                        </VControl>
                      </VField>
                    </div>
                  </form>
                  <RouterLink :to="{ name: 'auth-login' }">
                    {{ t('auth.login.link') }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image section (hidden on mobile) -->
    <div class="column login-column is-7 is-hidden-mobile hero-banner">
      <div class="hero login-hero is-fullheight is-app-grey">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <img
                class="light-image has-light-shadow has-light-border"
                src="/@src/assets/illustrations/apps/vuero-banking-light.png?format=webp"
                alt=""
              />
              <img
                class="dark-image has-light-shadow"
                src="/@src/assets/illustrations/apps/vuero-banking-dark.png?format=webp"
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
  </div>
</template>
<style lang="scss" scoped>
.input-style {
  padding-right: 35px;
}
</style>
