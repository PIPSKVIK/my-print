<template>
  <button
    class="btn"
    :class="[
      themes[theme],
      sizes[size]
    ]"
    :to="to"
    :type="type"
    v-on="$listeners"
  >
    <slot>Button</slot>
  </button>
</template>

<script>

export default {
  name: 'BaseButton',
  inheritAttrs: false,
  props: {
    type: {
      required: true,
      type: String,
      default: 'button'
    },
    theme: {
      required: false,
      type: String,
      default: 'primary'
    },
    size: {
      required: false,
      type: String,
      default: 'normal'
    },
    to: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      themes: {
        primary: 'btn-primary',
        danger: 'btn-danger',
        warning: 'btn-warning',
        info: 'btn-info',
        dark: 'btn-dark',
        success: 'btn-success'
      },
      sizes: {
        normail: '',
        large: 'btn-lg',
        small: 'btn-sm'
      }
    }
  }
}
</script>
