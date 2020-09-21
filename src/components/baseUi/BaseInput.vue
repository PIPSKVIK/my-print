<template>
  <div>
    <label :for="name">
      {{ label }}
    </label>
    <div class="wrapper">
      <input
        class="form-control base-inut"
        :class="{'is-invalid': invalid}"
        :type="show ? 'text' : inputType"
        v-bind="$attrs"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseInput',
  components: {},
  inheritAttrs: false,
  props: {
    name: {
      required: false,
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      required: false,
      type: String,
      default: ''
    },
    type: {
      required: true,
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String
    },
    invalid: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean
    }
  },
  data () {
    return {
      inputType: this.type
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    position: relative;
  }

  .base-inut {
    padding-right: 15%;
  }
</style>
