<template>
  <div>
    <BaseInput
      :name="nameText"
      type="text"
      :class="classInputText"
      :placeholder="textPlaceholder"
      v-model="watchValue"
    />
    <BaseInputRange
      :class="classRange"
      :name="nameRange"
      :min="min"
      :max="max"
      v-model="watchValue"
    />
  </div>
</template>

<script>
import { BaseInput, BaseInputRange } from '@/components/baseUi'

export default {
  name: 'TextRotateAndCoordinateComponent',
  components: {
    BaseInput,
    BaseInputRange
  },
  props: {
    value: {
      type: String
    },
    nameText: {
      type: String
    },
    nameRange: {
      type: String
    },
    classInputText: {
      type: String,
      required: true
    },
    min: {
      type: String,
      required: true
    },
    max: {
      type: String,
      required: true
    },
    textPlaceholder: {
      type: String
    },
    classRange: {
      type: String
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
