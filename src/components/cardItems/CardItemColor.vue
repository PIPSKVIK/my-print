<template>
  <div class="card-color">
    <div
      v-for="cardColor in cardItemColorsData"
      :key="cardColor.cardColor"
      :style=" {'background': cardColor} "
      class="card-color__item"
    >
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardItemColor',
  props: {
    cardItemColorsData: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>

  .card-color {
    display: flex;
    margin: 10px 0;
  }

  .card-color__item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    margin: 0 5px;
    cursor: pointer;
  }
</style>
