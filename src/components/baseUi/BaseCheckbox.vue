<template>
  <div class="base-caheckbox">
    <label class="base-caheckbox__label"> {{ label }}
      <input
        type="checkbox"
        v-model="checked"
        :value="item"
        class="base-caheckbox__item"
      >
      <span class="base-caheckbox__element-style"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseCheckbox',
  inheritAttrs: false,
  props: {
    value: {
      type: Array
    },
    item: {
      type: String
    },
    label: {
      type: String,
      default: 'Label'
    }
  },
  data () {
    return {
      checkedP: false
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss">

  .base-caheckbox__label {
    margin: 0;
    color: #0a0a0a;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  }

  .base-caheckbox__item {
    width: 30px;
    height: 30px;
  }

</style>
