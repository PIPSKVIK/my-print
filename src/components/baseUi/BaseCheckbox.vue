<template>
  <div class="base-caheckbox">
    <label class="base-caheckbox__label"> {{ label }}
      <input
        type="checkbox"
        v-model="checked"
        :value="item"
        @change="onChange"
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
        this.checkedP = val
      }
    }
  },
  methods: {
    onChange () {
      this.$emit('input', this.checkedP)
    }
  }
}
</script>

<style lang="scss">

// Кастомный checkbox >>>

  // .base-caheckbox__label {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

  // .base-caheckbox__element-style {
  //   position: relative;
  //   width: 16px;
  //   height: 16px;
  //   border: 1px solid #ccc;
  //   display: inline-block;
  //   border-radius: 50%;
  //   transition: all linear 0.3s;
  //   margin-left: 10px;
  //     &:after {
  //       content: '';
  //       position: absolute;
  //       top: 2px;
  //       left: 5px;
  //       border-bottom: 2px solid #000000;
  //       border-right: 2px solid #000000;
  //       height: 9px;
  //       width: 4px;
  //       transform: rotate(45deg);
  //       visibility: hidden;
  //     }
  // }

  // .base-caheckbox__element {
  //   display: none;
  //     &:checked ~ .base-caheckbox__element-style {
  //       background: #cccccc;
  //         &:after {
  //           visibility: visible;
  //         }
  //     }
  // }

// Кастомный checkbox >>>

</style>
