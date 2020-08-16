<template>
  <button
    class="btn btn-info btn-sm btn-block"
    type="button"
    data-toggle="collapse"
    aria-expanded="true"
    aria-controls="collapseExample"
    :data-target="dataTarget"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseCollapseButton',
  inheritAttrs: false,
  props: {
    dataTarget: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
