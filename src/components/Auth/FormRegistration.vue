<template>
  <div class="form-registation container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="registration-email">
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
      <div class="form-registration__password">
        <BaseInput
          label="Ваш пароль"
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
      <div class="form-registration__confirm-password">
        <BaseInput
          label="Подтвердите пароль"
          type="password"
          name="confirm-password"
          placeholder="Подтвердите пароль"
          v-model.trim="$v.confirmPassword.$model"
          :class="{'is-invalid': $v.confirmPassword.$error}"
        />
        <small class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Ваш пароль не совпадает
        </small>
      </div>
      <div class="form-registration__button">
        <BaseButton
          type="submit"
          size="block"
          theme="success"
          :disabled="submitStatus === 'PENDING'"
        >
          Зарегистрироваться
        </BaseButton>
      </div>
      <div class="registration-status">
        <BaseStatusMessage :submitStatus="submitStatus">
          <template v-slot:ok>Добро пожаловать<span> {{ email }} </span></template>
          <template v-slot:error>Пожалуйста, заполните форму правильно.</template>
          <template v-slot:pending>Отправка...</template>
        </BaseStatusMessage>
        <BaseLink
          class="registration-link"
          to="/enter">
          <template v-slot:title>
            <p class="registration-link__notification">Есть аккаунт?</p>
          </template>
          Войти
        </BaseLink>
      </div>
    </form>
  </div>
</template>

<script>
import { BaseLink, BaseStatusMessage } from '@/components/baseAuthComponents'
import { BaseButton, BaseInput } from '@/components/baseUi'
import { email, required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'FormRegistratin',
  components: {
    BaseInput,
    BaseButton,
    BaseLink,
    BaseStatusMessage
  },
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
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
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          const userData = {
            email: this.email,
            password: this.password
          }
          console.log(userData)
        }, 3000)
        this.email = ''
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

  .registration-link__notification {
    margin: 0 10px 0 0;
  }

  .registration-status {
    margin-top: 10px;
    text-align: center;
  }
</style>
