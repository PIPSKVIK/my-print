<template>
  <div class="block-options">
    <ul class="block-options__list">
      <li class="block-options__item">
        <p class="block-options__title">Текст: </p>
        <span class="block-options__info"> {{ getPrintText }} </span>
      </li>
      <li class="block-options__item">
        <p class="block-options__title">Угол: </p>
        <span class="block-options__info"> {{ getTextRotate }} </span>
      </li>
      <li class="block-options__item">
        <p class="block-options__title">Координата X: </p>
        <span class="block-options__info"> {{ getTextPositionX }} </span>
      </li>
      <li class="block-options__item">
        <p class="block-options__title">Координата Y:</p>
        <span class="block-options__info"> {{ getTextPositionY }} </span>
      </li>
      <li class="block-options__item">
        <p class="block-options__title">Шрифт: </p>
        <span v-if="getSelectedFonts === ''" class="block-options__info"> Шрифт не выбран </span>
        <span v-else class="block-options__info"> {{ getSelectedFonts }} </span>
      </li>
      <li class="block-options__item">
        <p class="block-options__title">Цвет текста: </p>
        <span class="block-options__info"> {{ getSelectedColor }} </span>
      </li>
      <li class="block-options__item">
        <p class="block-options__title">Размер текста: </p>
        <span class="block-options__info"> {{ getSelectedSize }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BlockWithTextOptionsGenerated',
  computed: {
    ...mapGetters([
      'getPrintText',
      'getTextRotate',
      'getTextPositionX',
      'getTextPositionY',
      'getSelectedFonts',
      'getSelectedColor',
      'getSelectedSize'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .block-options {
    width: 200px;
  }
  .block-options__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .block-options__title {
    margin: 0;
    font-weight: bold;
  }

  .block-options__item {
    display: flex;
  }

  .block-options__info {
    color: #ffffff;
    margin-left: 10px;
  }
</style>
