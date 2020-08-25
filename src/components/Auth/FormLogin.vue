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
          :class="{'is-invalid': ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        />
        <small
          class="invalid-feedback"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          Заполните поле Email
        </small>
        <small
          class="invalid-feedback"
          v-else-if="$v.email.$dirty && !$v.email.email"
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
          :class="{'is-invalid': ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        />
        <small
          class="invalid-feedback"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Введите пароль
        </small>
        <small
          class="invalid-feedback"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Пароль должен быть {{ $v.password.$params.minLength.min }} символов. Сейчас он {{ password.length }}
        </small>
      </div>
      <div class="login-button">
        <BaseButton
          type="submit"
        >
          Вход
        </BaseButton>
      </div>
      <BaseLink class="login-link" to="/registration">Зарегистрироваться</BaseLink>
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
      minLength: minLength(6)
    }
  },
  methods: {
    onSubmit () {
      if (this.$v.$invalid) {
        this.$v.$touch()
      }
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
</style>
