<template>
  <div class="main-canvas">
    <div class="constructor-right__first-block">
      <MainTextDisplayArea />
      <BlockWithInformation />
    </div>
  </div>
</template>

<script>
import { MainTextDisplayArea, BlockWithInformation } from '@/components/layoutConstructorComponents'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutConstructorMainCanvas',
  components: {
    MainTextDisplayArea,
    BlockWithInformation
  },
  computed: {
    ...mapGetters([
      'getPrintText',
      'getTextPositionX',
      'getTextPositionY',
      'getTextRotate',
      'getSelectedSize',
      'getSelectedColor',
      'getSelectedFonts',
      'getTextStyleWeight',
      'getTextStyleItalic',
      'getTextStyleUnderline',
      'getTextStyleUppercase',
      'getTypeSubjects',
      'getTypeSubjectsSizes',
      'getCurrentColors'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .layout-constructor {
    display: flex;
  }

  .constructor-right {
    padding: 10px;
    width: 70%;
    background: #989c9e;
    height: 800px;
    display: flex;
    justify-content: space-between;
  }

  // Холст с текстом

  .constructor-right__text {
    white-space: pre-line;
    position: absolute;
    top: 140px;
    left: 130px;
    margin: 0;
  }

  .constructor-right__first-block {
    width: 100%;
  }
</style>
