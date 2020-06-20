<template>
  <div class="login container col-xl-5 shadow-sm">
    <form>
      <label for="email">Email address</label>
      <FormInput
        type="email"
        id="email"
        placeholder="Email"
        class="form-control"
      ></FormInput>
      <label for="password">Password</label>
      <FormInput
        type="password"
        id="password"
        placeholder="Password"
        class="form-control login-password"
      ></FormInput>
      <Button
      type="button"
        class="btn btn-success login-button"
      ></Button>
    </form>
  </div>
</template>

<script>
import FormInput from '../UI/FormInput'
import Button from '../UI/Botton'
export default {
  name: 'Login',
  components: {
    FormInput,
    Button
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
