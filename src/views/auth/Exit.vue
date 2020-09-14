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
        :passwordData="password"
      >
      </BaseInput>
      <BaseInput
        type="text"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from '@/components/baseUi/BaseInput'

export default {
  name: 'Exit',
  components: {
    BaseInput
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
</style>
