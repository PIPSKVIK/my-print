<template>
  <button
    class="btn"
    :class="[
      themes[theme],
      sizes[size]
    ]"
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
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
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
        success: 'btn-success',
        constructor: 'btn-link-constructor'
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

<style lang="scss" scoped>

  .btn-link-constructor {
    background: #32343b;
    padding: 15px 3px;
    color: #ffffff;
    width: 100%;
    outline: none;
  }

</style>
