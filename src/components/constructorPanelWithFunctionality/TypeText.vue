<template>
  <div class="type-text">
    <div class="type-text__content-wrapper">
      <!-- поле ввода основного текста -->
      <MainTextField class="type-text__section-textarea" />
      <!-- кнопки управлением Начертиание -->
      <FontStyleOptionsButton class="type-text__font-options" />
      <!-- Позиционирование текста -->
      <TextPositionAndRotate class="type-text__text-position"/>
      <!-- select выбора Цветов, Размеров, Шрифтов -->
      <SelectTextOptionsColorFontSize class="type-text__section-select"/>
    </div>
  </div>
</template>

<script>
import { MainTextField, FontStyleOptionsButton, TextPositionAndRotate, SelectTextOptionsColorFontSize } from '@/components/layoutConstructorComponents'

export default {
  name: 'TypeText',
  components: {
    FontStyleOptionsButton,
    SelectTextOptionsColorFontSize,
    TextPositionAndRotate,
    MainTextField
  }
}
</script>

<style lang="scss" scoped>
  .type-text__content-wrapper {
    padding: 10px;
    background: #adccae;
    min-height: 530px;
    margin: 10px;
    border-radius: 10px;
  }

  .type-text__section-textarea {
    margin-bottom: 10px;
  }
</style>
