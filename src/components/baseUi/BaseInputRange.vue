<template>
  <div>
    <input
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      type="range"
      :name="name"
      :id="name"
      :min="min"
      :max="max"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInputRange',
  props: {
    name: {
      type: String
    },
    min: {
      type: String,
      reqired: true
    },
    max: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
