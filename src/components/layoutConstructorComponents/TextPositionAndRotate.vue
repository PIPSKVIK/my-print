<template>
  <div class="text-position">
    <TextRotateAndCoordinateComponent
      nameText="textRotate"
      classInputText="text-position__input-rotate"
      min="-180"
      max="180"
      :value.sync="changeTextRotate"
      :textPlaceholder="'Угол: ' + getTextRotate"
    />
    <TextRotateAndCoordinateComponent
      nameText="positionX"
      classInputText="text-position__input-positioX"
      min="153"
      max="500"
      :value.sync="changeTextPositionY"
      :textPlaceholder="'X: ' + getTextPositionY"
    />
    <TextRotateAndCoordinateComponent
      nameText="positionY"
      classInputText="text-position__input-positioY"
      min="0"
      max="470"
      :value.sync="changeTextPositionX"
      :textPlaceholder="'Y: ' + getTextPositionX"
    />
  </div>
</template>

<script>
import TextRotateAndCoordinateComponent from '@/components/layoutConstructorComponents/TextRotateAndCoordinateComponent'
import { mapGetters } from 'vuex'

export default {
  name: 'TextPositionAndRotate',
  components: {
    TextRotateAndCoordinateComponent
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
