<template>
  <div class="login container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="login-email">
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
      <div class="login-password">
        <BaseInput
          label="password"
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
      <div class="login-button">
        <BaseButton
          type="submit"
          size="block"
          theme="success"
          :disabled="submitStatus === 'pending'"
        >
          Вход
        </BaseButton>
      </div>
      <div class="login-status">
        <BaseStatusMessage :submitStatus="submitStatus" :isLoading="isLoading">
          <template v-slot:ok>Добро пожаловать<span> {{ email }} </span></template>
          <template v-slot:error>&#9940; Пожалуйста, заполните форму правильно.</template>
          <template v-slot:error-login>&#9660; Данный пользователь не ЗАРЕГИСТРИРОВАН!</template>
          <template v-slot:pending />
        </BaseStatusMessage>
        <BaseLink
          class="login-link"
          to="/registration">
          <template v-slot:title>
            <p class="login-link__notification">Еще нет аккаунта?</p>
          </template>
          Зарегистрироваться
        </BaseLink>
      </div>
    </form>
  </div>
</template>

<script>
import { BaseLink, BaseStatusMessage } from '@/components/baseAuthComponents'
import { BaseButton, BaseInput, BaseInputError, BaseInputPassword } from '@/components/baseUi'
import { email, required, minLength } from 'vuelidate/lib/validators'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'FormLogin',
  components: {
    BaseButton,
    BaseLink,
    BaseInput,
    BaseStatusMessage,
    BaseInputError,
    BaseInputPassword

  },
  data () {
    return {
      email: '',
      password: '',
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
          await this.$store.dispatch('login', userData)
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
      'login'
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
  .message-email {
    color: #202027;
    font-style: italic;
    border-bottom: 1px solid #000000;
  }

  .login-status {
    margin-top: 10px;
    text-align: center;
  }

  .login {
    padding: 40px;
  }

  .login-button {
    margin-top: 10px;
  }

  .login-link {
    margin-top: 10px;
  }

  .login-link__notification {
    margin: 0 10px 0 0;
  }
</style>
