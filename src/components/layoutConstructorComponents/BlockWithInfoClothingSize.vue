<template>
  <div class="constructor-size">
    <h5 class="constructor-size__title">Размер одежды:</h5>
    <p class="constructor-size__default-text" v-if="getTypeSubjectsSizes === ''">Выберите размер</p>
    <ul v-else class="constructor-size__list">
      <li
        v-for="size in getTypeSubjectsSizes"
        :key="size.id"
        class="constructor-size__item"
      > {{ size }} </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'BlockWithInfoClothingSize',
  props: {
    getTypeSubjectsSizes: {
      type: [Array, String],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .constructor-size__title {
    color: #ffffff;
    font-size: 18px;
    line-height: 1;
  }

  .constructor-size__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .constructor-size__item {
    background: #ffffff;
    border-radius: 3px;
    padding: 5px 0;
    width: 30px;
    color: #000000;
    margin: 0 5px;
    font-weight: bold;
  }

  .constructor-size__default-text {
    margin: 0;
    font-weight: bold;
  }
</style>
