<template>
  <div class="login container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="login-email">
        <BaseInput
          label="Ваш email"
          type="email"
          name="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="login-password">
        <BaseInput
          label="Ваш пароль"
          type="password"
          name="password"
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
import { BaseButton, BaseInput } from '../baseUi'

export default {
  name: 'FormLogin',
  components: {
    BaseInput,
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
