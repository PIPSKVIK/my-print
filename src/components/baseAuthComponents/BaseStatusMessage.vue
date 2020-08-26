<template>
  <div class="message">
    <p class="login-status__message message-ok" v-if="submitStatus === 'OK'">
      <slot name="ok"></slot>
    </p>
    <p class="login-status__message message-error" v-if="submitStatus === 'ERROR'">
      <slot name="error"></slot>
    </p>
    <p class="login-status__message message-pending" v-if="submitStatus === 'PENDING'">
      <slot name="pending"></slot>
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
