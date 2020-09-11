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
      nameText="positionY"
      classInputText="text-position__input-positioY"
      min="153"
      max="500"
      :value.sync="changeTextPositionY"
      :textPlaceholder="'X: ' + getTextPositionY"
    />
    <TextRotateAndCoordinateComponent
      nameText="positionX"
      classInputText="text-position__input-positioX"
      min="0"
      max="470"
      :value.sync="changeTextPositionX"
      :textPlaceholder="'Y: ' + getTextPositionX"
    />
  </div>
</template>

<script>
import TextRotateAndCoordinateComponent from '@/components/layoutConstructorComponents/TextRotateAndCoordinateComponent'

export default {
  name: 'TextPositionAndRotate',
  components: {
    TextRotateAndCoordinateComponent
  },
  props: {
    getTextRotate: {
      type: String,
      required: true
    },
    getTextPositionX: {
      type: String,
      required: true
    },
    getTextPositionY: {
      type: String,
      required: true
    },
    updateTextRotate: {
      type: Function,
      required: true
    },
    updateTextPositionX: {
      type: Function,
      required: true
    },
    updateTextPositionY: {
      type: Function,
      required: true
    }
  },
  computed: {
    changeTextRotate: {
      get () {
        return this.getTextRotate
      },
      set (val) {
        this.updateTextRotate(val)
      }
    },
    changeTextPositionX: {
      get () {
        return this.getTextPositionX
      },
      set (val) {
        this.updateTextPositionX(val)
      }
    },
    changeTextPositionY: {
      get () {
        return this.getTextPositionY
      },
      set (val) {
        this.updateTextPositionY(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
