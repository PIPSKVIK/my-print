<template>
  <div class="link">
    <slot name="title"></slot>
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
    color: #ff6347;
  }

  .link {
    display: flex;
    font-size: 14px;
    line-height: 1;
  }
</style>
