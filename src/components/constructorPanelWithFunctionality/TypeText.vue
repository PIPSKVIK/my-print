<template>
  <div class="type-text">
    <div class="collapse" id="collapseExample4">
      <BaseTextarea
        name="Text"
        v-model="createText"
      />
      <BaseOptions />
    </div>
  </div>
</template>

<script>
import { BaseTextarea, BaseOptions } from '@/components/baseUi'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseOptions
  },
  model: {
    prop: 'textarea'
  },
  props: {
    textarea: {
      type: String,
      default: ''
    }
  },
  computed: {
    createText: {
      get () {
        return this.textarea
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
