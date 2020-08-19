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
      <div class="typeface btn-toolbar" role="toolbar">
        <div class="btn-group btn-group-sm" role="group" aria-label="First group">
          <BaseButton
            theme="secondary"
            class="typeface-weight"
            @click="changeTextStyle('Weight')"
            :class="{ standartButtonActive: textStyleWeight }"
          >
            B
          </BaseButton>
          <BaseButton
            theme="secondary"
            class="typeface-italic"
            @click="changeTextStyle('Italic')"
            :class="{ standartButtonActive: textStyleItalic }"
          >
            I
          </BaseButton>
          <BaseButton
            theme="secondary"
            class="typeface-underline"
            @click="changeTextStyle('Underline')"
            :class="{ standartButtonActive: textStyleUnderline }"
          >
            K
          </BaseButton>
          <BaseButton
            theme="secondary"
            class="typeface-uppercase"
            @click="changeTextStyle('Uppercase')"
            :class="{ standartButtonActive: textStyleUppercase }"
          >
            U
          </BaseButton>
        </div>
      </div>

      <!-- select выбора цвета -->
      <div class="type-text__section-select">
        <BaseSelect
          @select="$store.commit('changeSelectedColor', $event.value)"
          :options="allOptionsColors"
          class="type-text"
        >
          <template v-slot:title>
            <span>Цвет: </span>
            <div class="type-text__color" :style="{ 'background': getSelectedColor }"></div>
            <span class="tepe-text__name"> {{ getSelectedColor }} </span>
          </template>
        </BaseSelect>
        <!-- select - выбор размера шрифта -->
        <BaseSelect
          @select="$store.commit('changeSelectedSize', $event.value)"
          :options="allOptionsSize"
          class="type-size"
        >
          <template v-slot:title>
            <span>Размер: </span>
            <span class="type-size__name"> {{ getSelectedSize }} </span>
          </template>
        </BaseSelect>
      </div>

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
      <!-- Тип шрифта -->
      <div class="type-text__fonts">
        <BaseSelect
          :options="allTypeFontFamily"
          @select="$store.commit('changeSelectedFonts', $event.value)"
        >
          <template v-slot:title>
            <span>Шрифт: </span>
            <span class="type-text__fonts-name"> {{ getSelectedFonts }} </span>
          </template>
        </BaseSelect>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseTextarea, BaseSelect, BaseButton, BaseInput } from '@/components/baseUi'
import { mapGetters } from 'vuex'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseSelect,
    BaseButton,
    BaseInput
  },
  props: {
    allOptionsColors: {
      type: Array
    },
    allOptionsSize: {
      type: Array
    },
    allTypeFontFamily: {
      type: Array
    }
  },
  data () {
    return {
      textStyleWeight: false,
      textStyleItalic: false,
      textStyleUnderline: false,
      textStyleUppercase: false,
      selectColors: ''
    }
  },
  methods: {
    changeTextStyle (type) {
      const prop = this[`textStyle${type}`]
      const value = !prop

      this[`textStyle${type}`] = value
      this.$emit('changeTextStyle', { type, value })
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
      'getTextPositionY',
      'getSelectedSize',
      'getSelectedColor',
      'getSelectedFonts'
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

  .type-text__section-select {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
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

  .type-size__name {
    margin-left: 10px;
  }

  .typeface-weight {
    font-weight: bold;
  }

  .typeface-italic {
    font-style: italic;
  }

  .typeface-underline {
    text-decoration: underline;
  }

  .typeface-uppercase {
    text-transform: uppercase;
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

  .type-text__fonts {
    margin-top: 40px;
  }

  .type-text__fonts-name {
    margin-left: 10px;
  }

</style>
