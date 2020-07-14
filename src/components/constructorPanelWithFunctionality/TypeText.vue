<template>
  <div class="type-text">
    <div class="collapse" id="collapseExample4">
      <h3>Введите свой текст</h3>
      <BaseTextarea
        name="Text"
        v-model="createText"
      />
    </div>
  </div>
</template>

<script>
import { BaseTextarea } from '@/components/baseUi'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea
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
