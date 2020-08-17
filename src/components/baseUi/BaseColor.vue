<template>
  <div class="input-color">
    <label :for="name">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      type="color"
      :name="name"
      :id="name"
      class="form-control"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseColor',
  inheritAttrs: false,
  props: {
    name: {
      required: false,
      type: String
    },
    label: {
      type: String,
      default: 'label'
    },
    value: {
      required: false,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
