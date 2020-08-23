<template>
  <div class="main-canvas">
    <div class="constructor-right__first-block">
      <MainTextDisplayArea />
      <BlockWithInformation />
    </div>
  </div>
</template>

<script>
import { MainTextDisplayArea, BlockWithInformation } from '@/components/layoutConstructorComponents'

export default {
  name: 'LayoutConstructorMainCanvas',
  components: {
    MainTextDisplayArea,
    BlockWithInformation
  }
}
</script>

<style lang="scss" scoped>
  .constructor-right__first-block {
    width: 100%;
  }
</style>
