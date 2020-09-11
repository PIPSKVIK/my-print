<template>
  <div class="exit">
    <h2>Exit</h2>
    <BaseLoader
      theme="warning"
    />
  </div>
</template>

<script>
import BaseLoader from '@/components/loader/BaseLoader'

export default {
  name: 'Exit',
  components: {
    BaseLoader
  }
}
</script>

<style lang="scss" scoped>
  .exit {
    text-align: center;
    margin-top: 40px;
  }
</style>
