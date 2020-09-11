<template>
  <div class="message">
    <p
      :class="[`message-${submitStatus}`]"
      v-if="submitStatus"
    >
      <slot :name="submitStatus"></slot>
      <slot name="pending">
        <BaseLoader v-if="isLoading"/>
      </slot>
    </p>
  </div>
</template>

<script>
import BaseLoader from '../../components/loader/BaseLoader'

export default {
  name: 'BaseStatusMessage',
  components: {
    BaseLoader
  },
  props: {
    submitStatus: {
      type: null
    },
    isLoading: {
      type: Boolean
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
