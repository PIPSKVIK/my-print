<template>
  <div class="enter">
    <h2 class="enter-title">Enter</h2>
    <Login></Login>
  </div>
</template>

<script>
import Login from '../components/Auth/Login'
export default {
  name: 'Enter',
  components: {
    Login
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
</style>
