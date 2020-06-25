<template>
  <div class="card-size">
    <p
      class="card-size__item"
      v-for="cardSize in cardItemSizeData.sizes"
      :key="cardSize.id"
    > {{ cardSize }} </p>
  </div>
</template>

<script>

export default {
  name: 'CardItemSize',
  props: {
    cardItemSizeData: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

  .card-size {
    display: flex;
  }

  .card-size__item {
    margin-right: 5px;
    border: 1px solid #ff0000;
    padding: 10px;
    font-size: 18px;
    line-height: 10px;
    cursor: pointer;
      &:hover {
        background: #ff0000;
        color: #ffffff;
      }
  }

</style>
