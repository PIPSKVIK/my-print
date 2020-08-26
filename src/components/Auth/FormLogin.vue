<template>
  <div class="login container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="login-email">
        <BaseInput
          label="email"
          type="email"
          name="email"
          placeholder="Email"
          v-model.trim="email"
          :class="{'is-invalid': $v.email.$error}"
          @input="$v.email.$touch()"
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
          v-model.trim="password"
          @input="$v.password.$touch()"
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
          :disabled="$v.$invalid"
        >
          Вход
        </BaseButton>
      </div>
      <BaseLink
        class="login-link"
        to="/registration"
      >
        <template v-slot:title>
          <p class="login-link__notification">Еще нет аккаунта?</p>
        </template>
        Зарегистрироваться
      </BaseLink>
    </form>
  </div>
</template>

<script>
import { BaseLink } from '@/components/baseAuthComponents'
import { BaseButton, BaseInput } from '@/components/baseUi'
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',
  components: {
    BaseButton,
    BaseLink,
    BaseInput
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(12)
    }
  },
  methods: {
    onSubmit () {
      if (!this.$v.$invalid) {
        console.log(this.email + '|' + this.password)
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
