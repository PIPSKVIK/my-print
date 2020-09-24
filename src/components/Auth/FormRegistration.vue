<template>
  <div class="form-registation container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="registration-email">
        <BaseInput
          label="Ваш Email"
          type="email"
          name="email"
          placeholder="Введите Email"
          v-model.trim="$v.email.$model"
          :invalid="$v.email.$error"
        >
          <BaseInputError v-if="!$v.email.required">Заполните поле Email</BaseInputError>
          <BaseInputError v-else-if="!$v.email.email">Введите корректный Email</BaseInputError>
        </BaseInput>
      </div>
      <div class="form-registration__password">
        <BaseInput
          label="Ваш пароль"
          type="password"
          name="password"
          placeholder="Password"
          v-model.trim="$v.password.$model"
          :invalid="$v.password.$error"
          :passwordData="password"
          :show="getShow"
        >
          <BaseInputPassword
            :passwordData="password"
            :show="getShow"
            :changeShow="changeShow"
          />
          <BaseInputError v-if="!$v.password.required">Введите пароль</BaseInputError>
          <BaseInputError v-else-if="!$v.password.minLength">Пароль должен быть {{ passwordMinLength }} символов. Сейчас он {{ password.length }}</BaseInputError>
        </BaseInput>
      </div>
      <div class="form-registration__confirm-password">
        <BaseInput
          label="Подтвердите пароль"
          type="password"
          name="confirm-password"
          placeholder="Подтвердите пароль"
          v-model.trim="$v.confirmPassword.$model"
          :invalid="$v.confirmPassword.$error"
          :passwordData="password"
          :show="getShow"
        >
          <BaseInputError v-if="!$v.confirmPassword.sameAs">Ваш пароль не совпадает</BaseInputError>
        </BaseInput>
      </div>
      <div class="form-registration__button">
        <BaseButton
          type="submit"
          size="block"
          theme="success"
          :disabled="submitStatus === 'pending'"
        >
          Зарегистрироваться
        </BaseButton>
      </div>
      <div class="registration-status">
        <BaseStatusMessage :submitStatus="submitStatus" :isLoading="isLoading">
          <template v-slot:ok>Добро пожаловать<span> {{ email }} </span></template>
          <template v-slot:error>&#9940; Пожалуйста, заполните форму правильно.</template>
          <template v-slot:error-login>&#9940; Такой пользователь уже СУЩЕСТВУЕТ!</template>
          <template v-slot:pending />
        </BaseStatusMessage>
        <BaseLink
          class="registration-link"
          to="/enter">
          <template v-slot:title>
            <p class="registration-link__notification">Есть аккаунт?</p>
          </template>
          Войти
        </BaseLink>
      </div>
    </form>
  </div>
</template>

<script>
import { BaseLink, BaseStatusMessage } from '@/components/baseAuthComponents'
import { BaseButton, BaseInput, BaseInputError, BaseInputPassword } from '@/components/baseUi'
import { email, required, minLength, sameAs } from 'vuelidate/lib/validators'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'FormRegistratin',
  components: {
    BaseInput,
    BaseButton,
    BaseLink,
    BaseStatusMessage,
    BaseInputError,
    BaseInputPassword
  },
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      submitStatus: null,
      isLoading: false
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  },
  methods: {
    async onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'error'
      } else {
        const userData = {
          email: this.email,
          password: this.password
        }
        try {
          await this.$store.dispatch('register', userData)
          this.$router.push('/')
          this.submitStatus = 'pending'
        } catch (e) {
          this.submitStatus = 'error-login'
        }
      }
    },
    ...mapMutations([
      'changeShow'
    ]),
    ...mapActions([
      'registerUser'
    ])
  },
  computed: {
    passwordMinLength () {
      return this.$v.password.$params.minLength.min
    },
    ...mapGetters([
      'getShow'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .form-registation {
    padding: 30px;
  }

  .form-registration__password {
    margin-top: 20px;
  }

  .form-registration__confirm-password {
    margin-top: 20px;
  }

  .form-registration__button {
    margin-top: 20px;
  }

  .registration-link__notification {
    margin: 0 10px 0 0;
  }

  .registration-status {
    margin-top: 10px;
    text-align: center;
  }
</style>
