<template>
  <div class="manager">
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
import { mapGetters } from 'vuex'
import { MainTextField, FontStyleOptionsButton, TextPositionAndRotate, SelectTextOptionsColorFontSize } from '@/components/layoutConstructorComponents'

export default {
  name: 'TypeTextManager',
  components: {
    FontStyleOptionsButton,
    SelectTextOptionsColorFontSize,
    TextPositionAndRotate,
    MainTextField
  },
  computed: {
    ...mapGetters([
      'allOptionsColors',
      'allOptionsSize',
      'allTypeFontFamily'
    ])
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
