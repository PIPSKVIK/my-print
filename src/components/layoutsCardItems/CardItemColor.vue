<template>
  <div class="card-color">
    <p
      v-for="cardColor in cardItemColorData.colors"
      :key="cardColor.cardColor"
      :style=" {'background': cardColor} "
      class="card-color__item"
    >
    </p>
  </div>
</template>

<script>

export default {
  name: 'CardItemColor',
  props: {
    cardItemColorData: {
      required: true,
      type: Object
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
