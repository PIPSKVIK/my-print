<template>
  <button
    class="btn"
    :class="[
      themes[theme],
      sizes[size]
    ]"
    :type="type"
    v-on="$listeners"
    :disabled="disabled"
  >
    <slot></slot>
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
    },
    disabled: {
      type: Boolean
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
        constructor: 'btn-link-constructor',
        standart: 'standart',
        secondary: 'btn-secondary'
      },
      sizes: {
        normail: '',
        large: 'btn-lg',
        small: 'btn-sm',
        standart: 'standart-size',
        block: 'btn-block'
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

  .standart {
    background: transparent;
    border: 1px solid #000000;
    border-radius: 5px;
      &:hover {
        color: #ffffff;
        background: #3f3e3e;
        border-color: #3f3e3e;
      }
  }

  .standart-size {
    width: 40px;
    height: 40px;
  }

</style>
