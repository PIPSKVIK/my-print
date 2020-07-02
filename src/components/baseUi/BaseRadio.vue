<template>
  <div class="radio">
    <label>
      <input
        type="radio"
        :checked="shouldBeChecked"
        :value="value"
        @change="updateInput"
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
  },
  computed: {
    shouldBeChecked () {
      return this.modelValue === this.value
    }
  },
  methods: {
    updateInput () {
      this.$emit('change', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
