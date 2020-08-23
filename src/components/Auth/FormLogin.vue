<template>
  <div class="login container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <!-- логин Email -->
      <ValidationInputEmailComponents
        label="email"
        name="email"
        placeholder="Email"
        :value.sync="email">
        <template v-slot:email>
          <div class="invalid-feedback" v-if="!$v.email.email">Введите корректный Email</div>
        </template>
        <template v-slot:required>
          <div class="invalid-feedback" v-if="!$v.email.required">Обязательно для заполнения</div>
        </template>
      </ValidationInputEmailComponents>
      <div class="login-password">
        <BaseInput
          label="password"
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
import ValidationInputEmailComponents from '@/components/validationComponents/ValidationInputEmailComponents'
import { BaseButton, BaseInput } from '@/components/baseUi'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'FormLogin',
  components: {
    BaseInput,
    BaseButton,
    ValidationInputEmailComponents
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit () {
      console.log('Email: ' + this.email + ' > ' + 'Password: ' + this.password)
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
