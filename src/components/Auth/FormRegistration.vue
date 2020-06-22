<template>
  <div class="form-registation container col-xl-6 shadow">
    <form @submit.prevent="onRegistration">
      <div class="form-registration__email">
        <label for="email">Email address</label>
        <BaceFormInput
          type="email"
          id="email"
          placeholder="Email"
          v-model="email"
          class="form-control"
          @input="$v.email.$touch()"
          :class="{ 'is-invalid': $v.email.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">Обязательно для заполнения!</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Не верный формат email адреса</div>
      </div>
      <div class="form-registration__password">
        <label for="password">Password</label>
        <BaceFormInput
          type="password"
          id="password"
          placeholder="Password"
          class="form-control"
          v-model="password"
          @input="$v.password.$touch()"
          :class="{ 'is-invalid': $v.password.$error }"
        />
        <div class="invalid-feedback" v-if="!$v.password.minLength">Минимальное колличество символов {{ 6 }}. Сейчас {{ password.length }} </div>
        <div class="invalid-feedback" v-if="!$v.password.maxLength">Максимальное колличество символов {{ 15 }}. Сейчас {{ password.length }} </div>
        <div class="invalid-feedback" v-if="!$v.password.required">Обязательно для заполнения!</div>
      </div>
      <div class="form-registration__confirm-password">
        <label for="confirm-password">Confirm password</label>
        <BaceFormInput
          type="password"
          id="confirm-password"
          placeholder="Confirm password"
          class="form-control"
          v-model="confirmPassword"
          :class=" { 'is-invalid': $v.confirmPassword.$error } "
          @input="$v.confirmPassword.$touch()"
        />
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">Ваш пароль не совпадает</div>
      </div>
      <div class="form-registration__button">
        <BaceButton
          type="submit"
          class="btn btn-success login-button"
          :disabled="$v.$invalid"
        >
          Зарегистрироваться
        </BaceButton>
      </div>
    </form>
  </div>
</template>

<script>
import { BaceButton, BaceFormInput } from '../baceUi'
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
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
  validations: {
    email: {
      required,
      email
    },
    password: {
      minLength: minLength(6),
      required,
      maxLength: maxLength(15)
    },
    confirmPassword: {
      sameAs: sameAs((vue) => {
        return vue.password
      })
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
