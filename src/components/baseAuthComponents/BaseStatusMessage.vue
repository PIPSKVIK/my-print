<template>
  <div class="message">
    <p
      :class="[`message-${submitStatus}`]"
      v-if="submitStatus"
    >
      <slot :name="submitStatus"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseStatusMessage',
  props: {
    submitStatus: {
      type: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-status__message {
    font-size: 15px;
    line-height: 1;
  }

  .message-pending {
    color: #0000ff;
  }
  .message-error {
    color: #ff0000;
    text-transform: uppercase;
  }

  .message-ok {
    color: #008000;
  }
</style>
