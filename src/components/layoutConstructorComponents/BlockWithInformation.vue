<template>
  <div class="constructor-right__block-info">
    <BlockWithInfoClothingSize />
    <BlockWithInfoClothingColor />
  </div>
</template>

<script>
import BlockWithInfoClothingColor from '@/components/layoutConstructorComponents/BlockWithInfoClothingColor'
import BlockWithInfoClothingSize from '@/components/layoutConstructorComponents/BlockWithInfoClothingSize'

export default {
  name: 'BlockWithInformation',
  components: {
    BlockWithInfoClothingSize,
    BlockWithInfoClothingColor
  }
}
</script>

<style lang="scss" scoped>
  .constructor-right__block-info {
    min-height: 80px;
    background: #7e7d7d;
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }
</style>
