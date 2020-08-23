<template>
  <div class="text-position">
    <BaseInput
      :name="nameText"
      type="text"
      :class="classInputText"
      class="text-position__text"
      :placeholder="textPlaceholder"
      v-model="watchValue"
    />
    <BaseInputRange
      class="text-position__range"
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
  .text-position {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text-position__range {
    margin-top: 20px;
  }

  .text-position__text {
    width: 100px;
  }
</style>
