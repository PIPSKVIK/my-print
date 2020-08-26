<template>
  <div class="form-registation container col-xl-6 shadow">
    <form @submit.prevent="onSubmit">
      <div class="form-registration__email">
        <BaseInput
          label="Ваш Email"
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
      <div class="form-registration__password">
        <BaseInput
          label="Ваш пароль"
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
      <div class="form-registration__confirm-password">
        <BaseInput
          label="Подтвердите пароль"
          type="password"
          name="confirm-password"
          placeholder="Подтвердите пароль"
          v-model.trim="confirmPassword"
          :class="{'is-invalid': $v.confirmPassword.$error}"
          @input="$v.confirmPassword.$touch()"
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
          :disabled="$v.$invalid"
        >
          Зарегистрироваться
        </BaseButton>
      </div>
      <BaseLink
        class="registration-link"
        to="/enter">
        <template v-slot:title>
          <p class="registration-link__notification">Есть аккаунт?</p>
        </template>
        Войти
      </BaseLink>
    </form>
  </div>
</template>

<script>
import { BaseLink } from '@/components/baseAuthComponents'
import { BaseButton, BaseInput } from '@/components/baseUi'
import { email, required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'FormRegistratin',
  components: {
    BaseInput,
    BaseButton,
    BaseLink
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
      if (!this.$v.$invalid) {
        const formDataRegistration = {
          emai: this.email,
          password: this.password
        }

        console.log(formDataRegistration)
      }
      this.$router.push('/enter')
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

  .registration-link {
    margin-top: 10px;
  }

  .registration-link__notification {
    margin: 0 10px 0 0;
  }
</style>
