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
      <BaseFontStyleOptionsButton/>

      <!-- Позиционирование текста -->
      <div class="type-text__text-position">
        <div class="text-position">
          <div class="text-position__position-deg">
            <BaseInput
              name="TextRotate"
              type="text"
              class="text-position__input-rotate"
              :placeholder="getTextRotate"
              v-model="changeTextRotate"
            />
            <input class="text-position__range" type="range" min="-180" max="180" v-model="changeTextRotate">
          </div>
          <div class="text-position__position-x">
            <BaseInput
              name="positioX"
              type="text"
              class="text-position__input-positioX"
              :placeholder="getTextPositionX"
              v-model="changeTextPositionX"
            />
            <input class="text-position__range" type="range" min="0" max="420" v-model="changeTextPositionX">
          </div>
          <div class="text-position__position-x">
            <BaseInput
              name="positioY"
              type="text"
              class="text-position__input-positioY"
              :placeholder="getTextPositionY"
              v-model="changeTextPositionY"
            />
            <input class="text-position__range" type="range" min="0" max="300" v-model="changeTextPositionY">
          </div>
        </div>
      </div>

      <!-- select выбора Цветов, Размеров, Шрифтов -->
      <managerBaseSelectTextOptions class="type-text__section-select"/>
    </div>
  </div>
</template>

<script>
import { BaseTextarea, BaseInput } from '@/components/baseUi'
import { BaseFontStyleOptionsButton } from '@/components/baseBootstrapComponents'
import managerBaseSelectTextOptions from '@/components/managerComponents/managerBaseSelectTextOptions'
import { mapGetters } from 'vuex'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseInput,
    BaseFontStyleOptionsButton,
    managerBaseSelectTextOptions
  },
  data () {
    return {
      selectColors: ''
    }
  },
  computed: {
    chengePrintText: {
      get () {
        return this.$store.state.printText
      },
      set (val) {
        this.$store.commit('upgradePrintText', val)
      }
    },
    changeTextPositionX: {
      get () {
        return this.$store.state.textPositionX
      },
      set (val) {
        this.$store.commit('updateTextPositionX', val)
      }
    },
    changeTextPositionY: {
      get () {
        return this.$store.state.textPositionY
      },
      set (val) {
        this.$store.commit('updateTextPositionY', val)
      }
    },
    changeTextRotate: {
      get () {
        return this.$store.state.textRotate
      },
      set (val) {
        this.$store.commit('updateTextRotate', val)
      }
    },
    ...mapGetters([
      'getTextRotate',
      'getTextPositionX',
      'getTextPositionY'
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

  .text-position__input-rotate,
  .text-position__input-positioX,
  .text-position__input-positioY {
    width: 80px;
  }

  .text-position__position-x,
  .text-position__position-x,
  .text-position__position-deg {
    display: flex;
  }

  .text-position__range {
    margin: 20px 0 0 10px;
  }

</style>
