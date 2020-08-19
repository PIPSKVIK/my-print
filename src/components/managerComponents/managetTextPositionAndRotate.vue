<template>
  <div class="text-position">
    <div class="text-position__position-deg">
      <BaseInput
        name="TextRotate"
        type="text"
        class="text-position__input-rotate"
        v-model="changeTextRotate"
      />
      <input class="text-position__range" type="range" min="-180" max="180" v-model="changeTextRotate">
    </div>
    <div class="text-position__position-x">
      <BaseInput
        name="positioX"
        type="text"
        class="text-position__input-positioX"
        v-model="changeTextPositionX"
      />
      <input class="text-position__range" type="range" min="0" max="420" v-model="changeTextPositionX">
    </div>
    <div class="text-position__position-x">
      <BaseInput
        name="positioY"
        type="text"
        class="text-position__input-positioY"
        v-model="changeTextPositionY"
      />
      <input class="text-position__range" type="range" min="0" max="300" v-model="changeTextPositionY">
    </div>
  </div>
</template>

<script>
import { BaseInput } from '@/components/baseUi'
import { mapGetters } from 'vuex'

export default {
  name: 'managetTextPositionAndRotate',
  components: {
    BaseInput
  },
  computed: {
    changeTextPositionX: {
      get () {
        return this.$store.state.textPositionX
      },
      set (val) {
        this.$store.commit('updateTextPositionX', val)
      }
    },
    changeTextPositionY: {
      get () {
        return this.$store.state.textPositionY
      },
      set (val) {
        this.$store.commit('updateTextPositionY', val)
      }
    },
    changeTextRotate: {
      get () {
        return this.$store.state.textRotate
      },
      set (val) {
        this.$store.commit('updateTextRotate', val)
      }
    },
    ...mapGetters([
      'getTextRotate',
      'getTextPositionX',
      'getTextPositionY'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
