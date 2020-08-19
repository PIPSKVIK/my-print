<template>
  <div class="type-text">
    <div class="type-text__content-wrapper">
      <div class="type-text__section-textarea">
      <!-- поле ввода основного текста -->
        <BaseTextarea
          name="Text"
          class="type-text__textarea"
          placeholder="Введите ваш текст"
          v-model="chengePrintText"
        />
      </div>
      <!-- кнопки управлением Начертиание -->
      <BaseFontStyleOptionsButton />

      <!-- Позиционирование текста -->
      <managetTextPositionAndRotate class="type-text__text-position"/>

      <!-- select выбора Цветов, Размеров, Шрифтов -->
      <managerBaseSelectTextOptions class="type-text__section-select"/>
    </div>
  </div>
</template>

<script>
import { BaseTextarea } from '@/components/baseUi'
import { BaseFontStyleOptionsButton } from '@/components/baseBootstrapComponents'
import managerBaseSelectTextOptions from '@/components/managerComponents/managerBaseSelectTextOptions'
import managetTextPositionAndRotate from '@/components/managerComponents/managetTextPositionAndRotate'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseFontStyleOptionsButton,
    managerBaseSelectTextOptions,
    managetTextPositionAndRotate
  },
  computed: {
    chengePrintText: {
      get () {
        return this.$store.state.printText
      },
      set (val) {
        this.$store.commit('upgradePrintText', val)
      }
    }
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

  .rotate {
    position: absolute;
    color: #2c161b;
    font-size: 20px;
  }

  .wrapper-top {
    margin-top: 30px;
  }

  .type-text__color {
    width: 10px;
    height: 10px;
    border: 1px solid #000000;
    border-radius: 50%;
    margin-left: 5px;
  }

  .tepe-text__name {
    margin-left: 10px;
  }

  .standartButtonActive {
    background: #515558;
  }

  .typeface {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .type-text__section-textarea {
    margin-bottom: 10px;
  }

</style>
