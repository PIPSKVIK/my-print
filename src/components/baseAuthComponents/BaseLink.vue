<template>
  <div class="link">
    <router-link :to="to" class="link-item">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .link-item {
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1;
    color: #ff6347;
  }
</style>
