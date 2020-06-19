<template>
  <button
    type="button"
    v-bind="$attrs"
    :value="value"
    v-on="inputListeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonLink',
  props: ['label', 'value'],
  computed: {
    inputListeners () {
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            this.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>
