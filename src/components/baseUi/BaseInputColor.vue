<template>
  <div class="input-color">
    <label :for="name">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :type="type"
      :name="name"
      :id="name"
      class="form-control"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInputColor',
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
    },
    type: {
      required: true,
      type: String,
      default: 'color'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
