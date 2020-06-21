<template>
  <button
    v-bind="$attrs"
    :value="value"
    v-on="buttonListeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['value'],
  computed: {
    buttonListeners () {
      return Object.assign({},
        this.$listeners,
        {
          button (event) {
            this.$emit('button', event.target.value, event.target.type)
          }
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
