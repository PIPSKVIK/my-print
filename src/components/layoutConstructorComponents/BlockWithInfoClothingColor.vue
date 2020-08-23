<template>
  <div class="constructor-color">
    <h5 class="constructor-color__title">Выбранные цвета:</h5>
    <ul class="constructor-colot__list">
      <li
        class="constructor-color__item"
        v-for="(color, id) in getCurrentColors"
        :key="id"
      >
        <div
          class="constructor-color__style"
          :style="{ backgroundColor: color }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BlockWithInfoClothingColor',
  computed: {
    ...mapGetters([
      'getCurrentColors'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .constructor-color {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .constructor-colot__list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }

  .constructor-color__style {
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    margin: 5px 5px 0 0;
  }

  .constructor-color__title {
    font-size: 18px;
    line-height: 1;
    color: #ffffff;
    margin: 0;
  }
</style>
