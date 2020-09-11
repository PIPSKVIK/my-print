<template>
  <div
    class="spinner-border text-secondary"
    role="status"
    :class="[
      themes[theme],
      sizes[size]
    ]"
  >
    <span
      class="sr-only"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseLoader',
  props: {
    theme: {
      type: String,
      default: 'text-primary'
    },
    size: {
      type: String
    }
  },
  data () {
    return {
      themes: {
        primary: 'text-primary',
        danger: 'text-danger',
        warning: 'text-warning'
      },
      sizes: {
        small: 'spinner-border-sm'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
