<template>
  <div class="radio">
    <label>
      <input
        type="radio"
        :checked="modelValue === value"
        :value="value"
        @change="$emit('change', value)"
      >
      {{ label }}
    </label>
  </div>
</template>

<script>

export default {
  Name: 'BaseRadio',
  inheritAttrs: false,
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    value: {
      type: String
    },
    modelValue: {
      default: ''
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
