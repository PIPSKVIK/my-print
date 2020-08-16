<template>
  <div class="constructor-item">
    <BaseCollapseButton :dataTarget="dataTarget">
    {{ buttonCollapseName }}
    </BaseCollapseButton>
    <div class="collapse" :id="dataTarget">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { BaseCollapseButton } from '@/components/baseBootstrapComponents'

export default {
  name: 'ConstructorItem',
  components: {
    BaseCollapseButton
  },
  props: {
    buttonCollapseName: {
      type: String,
      required: true
    },
    dataTarget: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
