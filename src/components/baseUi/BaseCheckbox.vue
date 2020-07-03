<template>
  <div class="base-caheckbox">
    <label class="base-caheckbox__label">
      <input
        v-bind="$attrs"
        class="base-caheckbox__element"
        type="checkbox"
        v-on="$listeners"
      >
      <span class="base-caheckbox__element-style"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  props: {
    value: {
      required: false,
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">

  .base-caheckbox__label {
    position: relative;
  }

  .base-caheckbox__element-style {
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    transition: all linear 0.3s;
      &:after {
        content: '';
        position: absolute;
        top: 3px;
        left: 6px;
        border-bottom: 2px solid #000000;
        border-right: 2px solid #000000;
        height: 9px;
        width: 4px;
        transform: rotate(45deg);
        visibility: hidden;
      }
  }

  .base-caheckbox__element {
    display: none;
      &:checked ~ .base-caheckbox__element-style {
        background: #cccccc;
          &:after {
            visibility: visible;
          }
      }
  }

</style>
