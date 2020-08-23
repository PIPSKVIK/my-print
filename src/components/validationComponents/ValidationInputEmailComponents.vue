<template>
  <div class="validation">
    <BaseInput
      type="email"
      :label="label"
      :name="name"
      :placeholder="placeholder"
      v-model="watchValue"
      @input="$v.email.$touch()"
      :class="{'is-invalid': $v.email.$error}"
    />
    <slot name="required"></slot>
    <slot name="email"></slot>
  </div>
</template>

<script>
import { BaseInput } from '@/components/baseUi'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'ValidationInputEmailComponents',
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
  },
  validations: {
    email: {
      required,
      email
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
