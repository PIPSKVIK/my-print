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
          :class="{'is-invalid': $v.email.$error}"
        />
        <small
          class="invalid-feedback"
          v-if="!$v.email.required"
        >
          Заполните поле Email
        </small>
        <small
          class="invalid-feedback"
          v-else-if="!$v.email.email"
        >
          Введите корректный Email
        </small>
      </div>
      <div class="login-password">
        <BaseInput
          label="password"
          type="password"
          name="password"
          placeholder="Password"
          v-model.trim="$v.password.$model"
          :class="{'is-invalid': $v.password.$error}"
        />
        <small
          class="invalid-feedback"
          v-if="!$v.password.required"
        >
          Введите пароль
        </small>
        <small
          class="invalid-feedback"
          v-else-if="!$v.password.minLength"
        >
          Пароль должен быть {{ passwordMinLength }} символов. Сейчас он {{ password.length }}
        </small>
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
        <BaseStatusMessage :submitStatus="submitStatus">
          <template v-slot:ok>Добро пожаловать<span> {{ email }} </span></template>
          <template v-slot:error>Пожалуйста, заполните форму правильно.</template>
          <template v-slot:pending>Отправка...</template>
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
import { BaseButton, BaseInput } from '@/components/baseUi'
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',
  components: {
    BaseButton,
    BaseLink,
    BaseInput,
    BaseStatusMessage

  },
  data () {
    return {
      email: '',
      password: '',
      submitStatus: null
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
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'error'
      } else {
        this.submitStatus = 'pending'
        setTimeout(() => {
          this.submitStatus = 'ok'
          const userData = {
            email: this.email,
            password: this.password
          }
          console.log(userData)
        }, 3000)
      }
    }
  },
  computed: {
    passwordMinLength () {
      return this.$v.password.$params.minLength.min
    }
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
