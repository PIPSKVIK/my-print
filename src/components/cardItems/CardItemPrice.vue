<template>
  <div class="card-price">
    <span>Цена:</span>
    <p
      v-for="cardPrice in cardItemPricesData"
      :key="cardPrice.id"
      class="card-price__item"
    > {{ cardPrice }} </p>
  </div>
</template>

<script>

export default {
  name: 'CardItemPrice',
  props: {
    cardItemPricesData: {
      required: true,
      type: Array
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
