<template>
  <div class="enter">
    <h2 class="enter-title">Enter</h2>
    <FormLogin class="enter-login"></FormLogin>
  </div>
</template>

<script>
import FormLogin from '../components/Auth/FormLogin'
export default {
  name: 'Enter',
  components: {
    FormLogin
  }
}
</script>

<style lang="scss" scoped>
.enter {
  margin-top: 40px;
}

.enter-title {
  text-align: center;
}

.enter-login {
  margin-top: 40px;
}
</style>
