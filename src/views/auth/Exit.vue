<template>
  <div class="exit">
    <h2>Exit</h2>
    <div>
      <BaseInput
        type="password"
        name="Password"
        placeholder="Password"
        class="exit-password"
        v-model="password"
      >
        <ComplexityPassword
          class="exit_complexity-password"
          :password="password"
        />
      </BaseInput>
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/baseUi/BaseInput'
import ComplexityPassword from '../../components/loader/ComplexityPassword'

export default {
  name: 'Exit',
  components: {
    BaseInput,
    ComplexityPassword
  },
  data () {
    return {
      password: ''
    }
  }
}
</script>

<style lang="scss">
  .exit {
    text-align: center;
    margin-top: 40px;
  }

  .exit-password {
    position: relative;
    z-index: 10;
  }
</style>
