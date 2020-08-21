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
  computed: {
    chengePrintText: {
      get () {
        return this.$store.state.printText
      },
      set (val) {
        this.$store.commit('upgradePrintText', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
