<template>
  <div class="manager">
    <div class="type-text__content-wrapper">
      <!-- поле ввода основного текста -->
      <MainTextField
        class="type-text__section-textarea"
        :getPrintText="getPrintText"
        :updatePrintText="updatePrintText"
      />
      <!-- кнопки управлением Начертиание -->
      <FontStyleOptionsButton
        class="type-text__font-options"
        :getTextStyleWeight="getTextStyleWeight"
        :getTextStyleItalic="getTextStyleItalic"
        :getTextStyleUnderline="getTextStyleUnderline"
        :getTextStyleUppercase="getTextStyleUppercase"
        :changeTextStyle="changeTextStyle"
      />
      <!-- Позиционирование текста -->
      <TextPositionAndRotate
        class="type-text__text-position"
        :getTextRotate="getTextRotate"
        :getTextPositionX="getTextPositionX"
        :getTextPositionY="getTextPositionY"
        :updateTextRotate="updateTextRotate"
        :updateTextPositionX="updateTextPositionX"
        :updateTextPositionY="updateTextPositionY"
      />
      <!-- select выбора Цветов, Размеров, Шрифтов -->
      <SelectTextOptionsColorFontSize
        class="type-text__section-select"
        :allTypeFontFamily="allTypeFontFamily"
        :allOptionsColors="allOptionsColors"
        :allOptionsSize="allOptionsSize"
        :changeSelectedOptions="changeSelectedOptions"
      />
    </div>
  </div>
</template>

<script>
import { MainTextField, FontStyleOptionsButton, TextPositionAndRotate, SelectTextOptionsColorFontSize } from '@/components/layoutConstructorComponents'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TypeTextManager',
  components: {
    FontStyleOptionsButton,
    SelectTextOptionsColorFontSize,
    TextPositionAndRotate,
    MainTextField
  },
  methods: {
    ...mapMutations([
      'updatePrintText',
      'changeTextStyle',
      'updateTextRotate',
      'updateTextPositionX',
      'updateTextPositionY',
      'changeSelectedOptions'
    ])
  },
  computed: {
    ...mapGetters([
      'getPrintText',
      'getTextStyleWeight',
      'getTextStyleItalic',
      'getTextStyleUnderline',
      'getTextStyleUppercase',
      'getTextRotate',
      'getTextPositionX',
      'getTextPositionY',
      'allTypeFontFamily',
      'allOptionsColors',
      'allOptionsSize'
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
