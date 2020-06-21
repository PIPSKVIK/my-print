<template>
  <div class="login container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="login-email">
        <label for="email">Email address</label>
        <FormInput
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
          class="form-control"
          @input="$v.email.$touch()"
          :class="{ 'is-invalid': $v.email.$error }"
        />
        <div
          class="invalid-feedback"
          v-if="!$v.email.required"
        >
          Обязательно для заполнения!
        </div>
        <div
          class="invalid-feedback"
          v-if="!$v.email.email"
        >
          Не верный формат email адреса
        </div>
      </div>
      <div class="login-password">
        <label for="password">Password</label>
        <FormInput
          type="password"
          id="password"
          placeholder="Password"
          class="form-control login-password"
          v-model="password"
          @input="$v.password.$touch()"
          :class="{ 'is-invalid': $v.password.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Минимальное колличество символов {{ 6 }}. Сейчас {{ password.length }}
        </div>
        <div class="invalid-feedback" v-if="!$v.password.maxLength">
          Максимальное колличество символов {{ 15 }}. Сейчас {{ password.length }}
        </div>
        <div class="invalid-feedback" v-if="!$v.password.required">
          Обязательно для заполнения!
        </div>
      </div>
      <div class="login-button">
        <Button
          type="submit"
          class="btn btn-success login-button"
          :disabled="$v.$invalid"
        >
          Вход
        </Button>
      </div>
    </form>
  </div>
</template>

<script>
import FormInput from '../UI/FormInput'
import Button from '../UI/Button'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  name: 'Login',
  components: {
    FormInput,
    Button
  },
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6),
      required,
      maxLength: maxLength(15)
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
