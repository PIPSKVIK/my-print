<template>
  <div class="block-info">
    <BlockWithTextOptionsGenerated class="block-info__left" />
    <div class="block-info__right">
      <BlockWithInfoClothingSize />
      <BlockWithInfoClothingColor />
    </div>
  </div>
</template>

<script>
import BlockWithInfoClothingColor from '@/components/layoutConstructorComponents/BlockWithInfoClothingColor'
import BlockWithInfoClothingSize from '@/components/layoutConstructorComponents/BlockWithInfoClothingSize'
import BlockWithTextOptionsGenerated from '@/components/layoutConstructorComponents/BlockWithTextOptionsGenerated'

export default {
  name: 'BlockWithInformation',
  components: {
    BlockWithInfoClothingSize,
    BlockWithInfoClothingColor,
    BlockWithTextOptionsGenerated
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

  .block-info__right {
    margin-left: 150px;
    width: 250px;
  }
</style>
