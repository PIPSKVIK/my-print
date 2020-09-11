<template>
  <div class="textarea">
    <BaseTextarea
      name="Text"
      class="type-text__textarea"
      placeholder="Введите ваш текст"
      v-model="chengePrintText"
    />
  </div>
</template>

<script>
import { BaseTextarea } from '@/components/baseUi'

export default {
  name: 'MainTextField',
  components: {
    BaseTextarea
  },
  props: {
    getPrintText: {
      type: String,
      required: true
    },
    updatePrintText: {
      type: Function,
      required: true
    }
  },
  computed: {
    chengePrintText: {
      get () {
        return this.getPrintText
      },
      set (val) {
        this.updatePrintText(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
