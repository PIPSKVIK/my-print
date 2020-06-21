<template>
  <div class="registration">
    <h2 class="registration-title">Регистрация</h2>
    <FormRegistration
      class="registration-form"
    />
  </div>
</template>

<script>
import FormRegistration from '../components/Auth/FormRegistration'
export default {
  name: 'Registration',
  components: {
    FormRegistration
  }
}
</script>

<style lang="scss" scoped>
.registration-title {
  text-align: center;
}

.registration {
  margin-top: 40px;
}

.registration-form {
  margin-top: 40px;
}
</style>
