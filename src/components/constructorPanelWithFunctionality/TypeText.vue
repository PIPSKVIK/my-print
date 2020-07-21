<template>
  <div class="type-text">
    <div class="collapse" id="collapseExample4">
      <BaseTextarea
        name="Text"
        v-model="createText"
      />

<!--  <div class="wrapper-top">
        <input type="text" v-model="turn" placeholder="Text rotation">
        <button @click="turn++">+</button>
        <button @click="turn--">-</button>
      </div>
      <div>
        <input type="text" v-model="Y" placeholder="Y">
        <button @click="Y++">+</button>
        <button @click="Y--">-</button>
        <input type="text" v-model="X" placeholder="X">
        <button @click="X++">+</button>
        <button @click="X--">-</button>
      </div>
      <div>
        <input type="range" min="0" max="150" v-model="X">
        <input type="range" min="0" max="180" v-model="Y">
      </div>
      <div class="wrapper">
        <p class="rotate" :style="[changePosition, rotateStyle]">Some text</p>
      </div> -->

      <!-- select выбора цвета -->
      <BaseSelect
        @select="optionsColor"
        :options="allOptionsColors"
        class="type-text"
      >
        <template v-slot:title>
          <span>Цвет текста: </span>
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
          <span>Размер текста: </span>
          <span class="type-size__name"> {{ selectedSize }} </span>
        </template>
      </BaseSelect>

      <!-- checkbox - выбор начертания текста -->
      <div class="typeface">
        <BaseButton
          theme="standart"
          size="standart"
          class="typeface-weight"
          @click="$emit('chengeTextFontWeight'), isButtonWeightActive = !isButtonWeightActive"
          :class="{ standartButtonActive: isButtonWeightActive }"
        >
          B
        </BaseButton>
        <BaseButton
          theme="standart"
          size="standart"
          class="typeface-italic"
          @click="$emit('chengeTextFontStyle'), isButtonItalicActive = !isButtonItalicActive"
          :class="{ standartButtonActive: isButtonItalicActive }"
        >
          I
        </BaseButton>
        <BaseButton
          theme="standart"
          size="standart"
          class="typeface-underline"
          @click="$emit('chengeTextUnderline'), isButtonUnderlineActive = !isButtonUnderlineActive"
          :class="{ standartButtonActive: isButtonUnderlineActive }"
        >
          K
        </BaseButton>
        <BaseButton
          theme="standart"
          size="standart"
          class="typeface-uppercase"
          @click="$emit('chengeTextTransform'), isButtonUppercaseActive = !isButtonUppercaseActive"
          :class="{ standartButtonActive: isButtonUppercaseActive }"
        >
          U
        </BaseButton>
      </div>

    </div>
  </div>
</template>

<script>
import { BaseTextarea, BaseSelect, BaseButton } from '@/components/baseUi'

export default {
  name: 'TypeText',
  components: {
    BaseTextarea,
    BaseSelect,
    BaseButton
  },
  model: {
    prop: 'textarea'
  },
  props: {
    textarea: {
      type: String
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
    selectedName: {
      type: String
    },
    selectedTextValue: {
      type: String,
      default: ''
    },
    selectedSize: {
      type: Number
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
      ],
      turn: null,
      X: null,
      Y: null
    }
  },
  computed: {
    createText: {
      get () {
        return this.textarea
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    rotateStyle () {
      return {
        transform: 'rotate(' + this.turn + 'deg)'
      }
    },
    changePosition () {
      return {
        top: this.Y + 'px',
        left: this.X + 'px'
      }
    }
  },
  methods: {
    optionsColor (option) {
      this.$emit('optionsColor', option)
    },
    optionsSize (option) {
      this.$emit('optionsSize', option)
    }
  }
}
</script>

<style lang="scss" scoped>

  .wrapper {
    margin-top: 30px;
    text-align: center;
    width: 200px;
    height: 200px;
    background: #dfb19f;
    position: relative;
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
    color: #ffffff;
    background: #000000;
    border-color: #000000;
  }

</style>
