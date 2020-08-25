<template>
  <div class="validation">
    <BaseInput
      :type="type"
      :label="label"
      :name="name"
      :placeholder="placeholder"
      v-model.trim="watchValue"
      :сlassBaseInput="validationClass"
    />
    <slot name="first"></slot>
    <slot name="second"></slot>
    <slot name="third"></slot>
  </div>
</template>

<script>
import { BaseInput } from '@/components/baseUi'

export default {
  name: 'BaseValidationInputComponent',
  inheritAttrs: false,
  components: {
    BaseInput
  },
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    validationClass: {
      type: [Object, String]
    }
  },
  computed: {
    watchValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
