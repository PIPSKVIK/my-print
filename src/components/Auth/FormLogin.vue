<template>
  <div class="login container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="login-email">
        <BaseFormInput
          label="Ваш Email адресс"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="login-password">
        <BaseFormInput
          label="Ваш пароль"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="login-button">
        <BaseButton
          type="submit"
        >
          Вход
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import { BaseButton, BaseFormInput } from '../baseUi'

export default {
  name: 'FormLogin',
  components: {
    BaseFormInput,
    BaseButton
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('Email', this.email)
      console.log('Password', this.password)
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

</style>
