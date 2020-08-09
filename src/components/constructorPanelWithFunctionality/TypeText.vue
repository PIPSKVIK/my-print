<template>
  <div class="type-text">
    <div class="collapse" id="collapseExample4">
      <div class="type-text__content-wrapper">
        <div class="type-text__section-textarea">
          <BaseTextarea
            name="Text"
            v-model="createPrintText"
            class="type-text__textarea"
            placeholder="Введите ваш текст"
          />
        </div>
        <!-- кнопки управлением Начертиание -->
        <div class="typeface btn-toolbar" role="toolbar">
          <div class="btn-group btn-group-sm" role="group" aria-label="First group">
            <BaseButton
              theme="secondary"
              class="typeface-weight"
              @click="$emit('chengeTextFontWeight'), isButtonWeightActive = !isButtonWeightActive"
              :class="{ standartButtonActive: isButtonWeightActive }"
            >
              B
            </BaseButton>
            <BaseButton
              theme="secondary"
              class="typeface-italic"
              @click="$emit('chengeTextFontStyle'), isButtonItalicActive = !isButtonItalicActive"
              :class="{ standartButtonActive: isButtonItalicActive }"
            >
              I
            </BaseButton>
            <BaseButton
              theme="secondary"
              class="typeface-underline"
              @click="$emit('chengeTextUnderline'), isButtonUnderlineActive = !isButtonUnderlineActive"
              :class="{ standartButtonActive: isButtonUnderlineActive }"
            >
              K
            </BaseButton>
            <BaseButton
              theme="secondary"
              class="typeface-uppercase"
              @click="$emit('chengeTextTransform'), isButtonUppercaseActive = !isButtonUppercaseActive"
              :class="{ standartButtonActive: isButtonUppercaseActive }"
            >
              U
            </BaseButton>
          </div>
        </div>

        <!-- select выбора цвета -->
        <div class="type-text__section-select">
          <BaseSelect
            @select="optionsColor"
            :options="allOptionsColors"
            class="type-text"
          >
            <template v-slot:title>
              <span>Цвет: </span>
              <div class="type-text__color" :style="{ 'background': selectedTextValue }"></div>
              <span class="tepe-text__name"> {{ selectedName }} </span>
            </template>
          </BaseSelect>
          <!-- select - выбор размера шрифта -->
          <BaseSelect
            @select="optionsSize"
            :options="allOptionsSize"
            class="type-size"
          >
            <template v-slot:title>
              <span>Размер: </span>
              <span class="type-size__name"> {{ selectedSize }} </span>
            </template>
          </BaseSelect>
        </div>

        <!-- Позиционирование текста -->
        <div class="type-text__text-posipion">
          <div class="text-posipion">
            <div class="text-posipion__position-deg">
              <BaseInput
                name="rotate"
                type="text"
                class="text-posipion__input-rotate"
                :placeholder="chengeTextRotate"
                v-model="chengeTextRotate"
              />
              <input class="text-posipion__range" type="range" min="-180" max="180" v-model="chengeTextRotate">
              <span>&#176; {{textRotare}} </span>
            </div>
            <div class="text-posipion__position-x">
              <BaseInput
                name="positioX"
                type="text"
                class="text-posipion__input-positioX"
                :placeholder=" 'X:' + textPositionX"
                v-model="chengeTextPositionX"
              />
              <input class="text-posipion__range" type="range" min="0" max="275" v-model="chengeTextPositionX">
            </div>
            <div class="text-posipion__position-x">
              <BaseInput
                name="positioY"
                type="text"
                class="text-posipion__input-positioY"
                :placeholder=" 'X:' + textPositionY"
                v-model="chengeTextPositionY"
              />
              <input class="text-posipion__range" type="range" min="0" max="275" v-model="chengeTextPositionY">
            </div>
          </div>
        </div>
        <!-- Тип шрифта -->
        <div class="type-text__fonts">
          <BaseSelect
            :options="allTypeFontFamily"
            @select="optionsFont"
          >
            <template v-slot:title>
              <span>Шрифт: </span>
              <span class="type-text__fonts-name"> {{ selectFonts }} </span>
            </template>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseTextarea, BaseSelect, BaseButton, BaseInput } from '@/components/baseUi'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseSelect,
    BaseButton,
    BaseInput
  },
  props: {
    textPositionY: {
      type: String
    },
    textPositionX: {
      type: String
    },
    textRotare: {
      type: String
    },
    printText: {
      type: String,
      required: true
    },
    optionsColors: {
      type: Array
    },
    allOptionsColors: {
      type: Array
    },
    allOptionsSize: {
      type: Array
    },
    allTypeFontFamily: {
      type: Array
    },
    selectedName: {
      type: String
    },
    selectedTextValue: {
      type: String,
      default: ''
    },
    selectedSize: {
      type: Number
    },
    selectFonts: {
      type: String
    }
  },
  data () {
    return {
      isButtonWeightActive: false,
      isButtonItalicActive: false,
      isButtonUnderlineActive: false,
      isButtonUppercaseActive: false,
      selectColors: '',
      options: [
        { text: 'white', color: '#fff' }
      ]
    }
  },
  methods: {
    optionsColor (option) {
      this.$emit('optionsColor', option)
    },
    optionsSize (option) {
      this.$emit('optionsSize', option)
    },
    optionsFont (option) {
      this.$emit('optionsFont', option)
    },
    changeDragPositionY () {
      this.$emit('changeDragPositionY', this.PositionY)
    }
  },
  computed: {
    createPrintText: {
      get () {
        return this.printText
      },
      set (value) {
        this.$emit('update:printText', value)
      }
    },
    chengeTextRotate: {
      get () {
        return this.textRotare
      },
      set (val) {
        this.$emit('update:textRotare', val)
      }
    },
    chengeTextPositionX: {
      get () {
        return this.textPositionX
      },
      set (val) {
        this.$emit('update:textPositionX', val)
      }
    },
    chengeTextPositionY: {
      get () {
        return this.textPositionY
      },
      set (val) {
        this.$emit('update:textPositionY', val)
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

  .text-posipion__input-rotate,
  .text-posipion__input-positioX,
  .text-posipion__input-positioY {
    width: 80px;
  }

  .text-posipion__position-x,
  .text-posipion__position-x,
  .text-posipion__position-deg {
    display: flex;
  }

  .text-posipion__range {
    margin: 20px 0 0 10px;
  }

  .type-text__fonts {
    margin-top: 40px;
  }

  .type-text__fonts-name {
    margin-left: 10px;
  }

</style>
