<template>
  <div class="constructor-right__color">
    <h5 class="constructor-right__color-title">Выбранные цвета:</h5>
    <ul class="constructor-right__colot-list">
      <li
        class="constructor-right__color-item"
        v-for="(color, id) in getCurrentColors"
        :key="id"
      >
        <div
          class="constructor-right__color-style"
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
  .constructor-right__color {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  .constructor-right__color-title {
    color: #ffffff;
  }

  .constructor-right__colot-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .constructor-right__color-style {
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    border-radius: 50%;
    margin: 3px 3px 0 0;
  }
</style>
