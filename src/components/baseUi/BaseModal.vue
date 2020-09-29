<template>
  <div
    class="modal-mask"
    v-if="modalShow"
  >
    <div class="modal-container">
      <span class="exit" @click="$emit('modal-close')">&#10060;</span>
      <div class="header">
        <slot name="header" />
      </div>
      <div class="body">
        <slot name="body" />
      </div>
      <div class="footer">
        <slot name="footer" />
        <BaseButton
          size="big"
          theme="success"
          @click="$emit('logout')"
        >
          {{buttonName}}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/baseUi'

export default {
  name: 'BaseModal',
  components: {
    BaseButton
  },
  props: {
    modalShow: {
      type: Boolean,
      default: false
    },
    buttonName: {
      type: String,
      default: 'Ok'
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(165, 165, 165, .8);
    border-radius: 20px;
    padding: 20px;
    width: 400px;
  }

  .header,
  .body,
  .footer {
    padding: 0;
  }

  .header {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 1.2;
    color: #ffffff;
  }

  .exit {
    position: absolute;
    top: -35px;
    right: 10px;
    cursor: pointer;
  }
</style>
