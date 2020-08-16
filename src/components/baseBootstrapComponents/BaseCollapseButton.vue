<template>
  <button
    class="btn btn-info btn-sm btn-block"
    type="button"
    data-toggle="collapse"
    aria-expanded="true"
    aria-controls="collapseExample"
    :data-target="dataTargetId"
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
  },
  computed: {
    dataTargetId () {
      return '#' + this.dataTarget
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
