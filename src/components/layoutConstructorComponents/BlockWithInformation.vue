<template>
  <div class="block-info">
    <BlockWithTextOptionsGenerated
      class="block-left"
      :getPrintText="getPrintText"
      :getTextRotate="getTextRotate"
      :getTextPositionX="getTextPositionX"
      :getTextPositionY="getTextPositionY"
      :getSelectedFonts="getSelectedFonts"
      :getSelectedColor="getSelectedColor"
      :getSelectedSize="getSelectedSize"
    />
    <div class="block-right">
      <BlockWithInfoClothingSize
        class="block-right__size"
        :getTypeSubjectsSizes="getTypeSubjectsSizes"
      />
      <BlockWithInfoClothingColor
        class="block-right__color"
        :getCurrentColors="getCurrentColors"
      />
    </div>
  </div>
</template>

<script>
import BlockWithInfoClothingColor from '@/components/layoutConstructorComponents/BlockWithInfoClothingColor'
import BlockWithInfoClothingSize from '@/components/layoutConstructorComponents/BlockWithInfoClothingSize'
import BlockWithTextOptionsGenerated from '@/components/layoutConstructorComponents/BlockWithTextOptionsGenerated'
import { mapGetters } from 'vuex'

export default {
  name: 'BlockWithInformation',
  components: {
    BlockWithInfoClothingSize,
    BlockWithInfoClothingColor,
    BlockWithTextOptionsGenerated
  },
  computed: {
    ...mapGetters([
      'getPrintText',
      'getTextRotate',
      'getTextPositionX',
      'getTextPositionY',
      'getSelectedFonts',
      'getSelectedColor',
      'getSelectedSize',
      'getTypeSubjectsSizes',
      'getCurrentColors'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .block-info {
    min-height: 80px;
    background: #7e7d7d;
    margin-top: 20px;
    padding: 40px;
    text-align: center;
    display: flex;
  }

  .block-right {
    margin-left: 150px;
    width: 250px;
  }

  .block-right__size {
    margin-bottom: 15px;
  }
</style>
