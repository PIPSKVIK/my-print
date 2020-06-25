<template>
  <div class="form-registation container col-xl-6 shadow">
    <form @submit.prevent="onRegistration">
      <div class="form-registration__email">
        <BaceFormInput
          label="Ваш Email адресс"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="form-registration__password">
        <BaceFormInput
          label="Ваш пароль"
          type="password"
          name="password"
          id="email"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-registration__confirm-password">
        <BaceFormInput
          label="Подтвердите пароль"
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm password"
          v-model="confirmPassword"
        />
      </div>
      <div class="form-registration__button">
        <BaceButton
          type="submit"
          theme="success"
        >
          Зарегистрироваться
        </BaceButton>
      </div>
    </form>
  </div>
</template>

<script>
import { BaceButton, BaceFormInput } from '../baceUi'

export default {
  name: 'FormRegistratin',
  components: {
    BaceFormInput,
    BaceButton
  },
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onRegistration () {
      console.log('Email:', this.email)
      console.log('Password:', this.password)
      console.log('Confirm Password:', this.confirmPassword)
    }
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

</style>
