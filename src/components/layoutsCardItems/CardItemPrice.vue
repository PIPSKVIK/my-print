<template>
  <div class="card-price">
    <span>Цена:</span>
    <p
      v-for="cardPrice in cardItemPriceData.prices"
      :key="cardPrice.id"
      class="card-price__item"
    > {{ cardPrice }} </p>
  </div>
</template>

<script>

export default {
  name: 'CardItemPrice',
  props: {
    cardItemPriceData: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>

  .card-price {
    display: flex;
  }

  .card-price__item {
    margin-right: 5px;
  }

</style>
