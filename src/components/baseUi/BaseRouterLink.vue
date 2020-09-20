<template>
  <router-link
    class="btn base-link"
    :to="to"
    :class="[
    themes[theme],
    sizes[size]
    ]"
    v-on="$listeners"
    exact
  >
    <slot>Link</slot>
  </router-link>
</template>

<script>
export default {
  name: 'BaseRouterLink',
  props: {
    to: {
      type: Object,
      required: false,
      default () {
        return {
          name: 'Home'
        }
      }
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

<style lang="scss" scoped>

  .router-link-active {
    background: #062486;
    color: #ffffff;
  }

</style>
