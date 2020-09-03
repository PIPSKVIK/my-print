import { email, required, minLength, sameAs } from 'vuelidate/lib/validators'

const EMAIL = {
  email: email,
  required: required
}

const PASSWORD = {
  required: required,
  minLength: minLength(6)
}

const CONFIRM_PASSWORD = {
  sameAs: sameAs('password')
}

export { EMAIL, PASSWORD, CONFIRM_PASSWORD }
