<template>
  <div class="base-textarea">
    <textarea
      v-bind="$attrs"
      class="form-control"
      :name="name"
      :id="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :rows="rows"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'BaseTextarea',
  inheritAttrs: false,
  props: {
    name: {
      required: false,
      type: String
    },
    value: {
      required: false,
      type: String,
      default: null
    }
  },
  computed: {
    rows () {
      return Math.max(5, this.value.split('\n').length)
    }
  }
}
</script>

<style>

</style>
