<template>
  <div class="layout-constructor">
    <section class="constructor-left">
      <!-- <<< компонент выбора типа одежды -->
      <div class="layout-constructor__type-subjects">
        <button class="btn btn-info btn-sm btn-block" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="true" aria-controls="collapseExample">
          Выбор одежды
        </button>
        <TypeSubjects
          v-model="typeSubjects"
        />
      </div>
      <!-- <<< компонент выбор цыетов -->
      <div class="layout-constructor__type-colors">
        <button class="btn btn-info btn-sm btn-block" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
          Выбор цвета
        </button>
        <TypeColors
          v-model="typeColor"
          :currentColors="currentColors"
          @saveCurrentColor="saveCurrentColor"
        />
      </div>
      <!-- <<< компонент выбора размера -->
      <div class="layout-constructor__type-size">
        <button class="btn btn-info btn-sm btn-block" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
          Выбор размера
        </button>
        <TypeSizes
          class="constructor-left__sizes"
        />
      </div>
      <!-- Компонент выбора текста -->
      <div class="layout-constructor__type-text">
        <button class="btn btn-info btn-sm btn-block" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
          Добавить текст
        </button>
        <TypeText
          v-model="typeText"
          :allOptionsColors="allOptionsColors"
          :allOptionsSize="allOptionsSize"
          @optionsColor="optionsColor"
          @optionsSize="optionsSize"
          :selectedName="selectedName"
          :selectedTextValue="selectedTextValue"
          :selectedSize="selectedSize"
          @chengeTextFontWeight="isTextFontWeightActive = !isTextFontWeightActive"
          @chengeTextFontStyle="isTextFontStyleActive = !isTextFontStyleActive"
          @chengeTextUnderline="isTextUnderlineActive = !isTextUnderlineActive"
          @chengeTextTransform="isTextTransformActive = !isTextTransformActive"
          @changeTextRotate="changeTextRotate"
          @changeTextX="changeTextX"
          @changeTextY="changeTextY"
        />
      </div>
    </section>

    <!-- Правая сторона экрана конструктора -->
    <section class="constructor-right">
      <div class="constructor-right__text-block">
        <p class="constructor-right__text"
          :class="{
            'font-weight__active': isTextFontWeightActive,
            'font-style__active': isTextFontStyleActive,
            'text-underline__active': isTextUnderlineActive,
            'text-transform__active': isTextTransformActive
          }"
          :style="[ changeTextValue, changeFotSize, rotateStyle, changePosition ]"
          > {{ typeText }}
        </p>
        <div class="constructor-right__subjects-selected">
          <!-- <span> {{ typeSubjects }} </span> -->
          <!-- <img :src="('@/assets/image/constructor/' + typeSubjects)" alt="img" width="300" height="250"> -->
          <img src="@/assets/image/constructor/image-men-t-shirt.jpg" alt="img" width="300" height="250">
        </div>
      </div>
      <div class="constructor-right__clothes-block">
        <svg :style="{ 'fill': typeColor }" fill="#ffffff" id="tshirt" enable-background="new 0 0 512 512" height="300" width="300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m361 37.591v97.409h-90v90h-30v-90h-90v-97.409l-151 40.934v146.475h61v-90h30v377h330v-377h30v90h61v-146.475z"/><path d="m331 105v-79.193l-56.566 79.193z"/><path d="m181 25.807v79.193h56.566z"/><path d="m312.566 0h-113.132l56.566 79.193z"/></g></svg>
      </div>
    </section>
  </div>
</template>

<script>
import { TypeSizes, TypeColors, TypeSubjects, TypeText } from '@/components/constructorPanelWithFunctionality'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutConstructor',
  components: {
    TypeSizes,
    TypeColors,
    TypeSubjects,
    TypeText
  },
  data () {
    return {
      typeColor: '#000000',
      typeSubjects: '',
      currentColors: ['#000000', '#aa55aa', '#ffffff'],
      typeText: '',
      textRotare: null,
      PositionX: null,
      PositionY: null,
      selectedTextValue: '#000000',
      selectedName: 'black',
      selectedSize: 14,
      isTextFontWeightActive: false,
      isTextFontStyleActive: false,
      isTextUnderlineActive: false,
      isTextTransformActive: false
    }
  },
  methods: {
    saveCurrentColor () {
      if (!this.currentColors.includes(this.typeColor)) {
        this.currentColors.push(this.typeColor)
      }
    },
    optionsColor (option) {
      this.selectedTextValue = option.value
      this.selectedName = option.name
    },
    optionsSize (option) {
      this.selectedSize = option.value
    },
    changeTextRotate (value) {
      this.textRotare = value
    },
    changeTextX (value) {
      this.PositionX = value
    },
    changeTextY (value) {
      this.PositionY = value
    }
  },
  computed: {
    ...mapGetters([
      'allOptionsColors', 'allOptionsSize'
    ]),
    rotateStyle () {
      return {
        transform: 'rotate(' + this.textRotare + 'deg)'
      }
    },
    changeTextValue () {
      return {
        color: this.selectedTextValue
      }
    },
    changeFotSize () {
      return {
        'font-size': this.selectedSize + 'px'
      }
    },
    changePosition () {
      return {
        top: this.PositionY + 'px',
        left: this.PositionX + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .constructor-right__text {
    white-space: pre-line;
    position: absolute;
    top: 140px;
    left: 130px;
    // transform: translate(-50%, -50%);
    margin: 0;
  }

// <компонент выбора типа одежды
  .subjects {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #98be72;
  }
// компонент выбора типа одежды>

  .layout-constructor {
    display: flex;
  }

  .constructor-left {
    width: 30%;
    background: #c6cccf;
    height: 800px;
  }

  .constructor-right {
    padding: 10px;
    width: 70%;
    background: #989c9e;
    height: 800px;
    display: flex;
    justify-content: space-between;
  }

  // Холст с текстом
  .constructor-right__text-block {
    width: 300px;
    height: 300px;
    border: 2px dashed green;
    text-align: center;
    position: relative;
  }

  // классы управляющие начертанием текста
  .font-weight__active {
    font-weight: bold;
  }

  .font-style__active {
    font-style: italic;
  }

  .text-underline__active {
    text-decoration: underline;
  }

  .text-transform__active {
    text-transform: uppercase;
  }

  .layout-constructor__type-text,
  .layout-constructor__type-subjects,
  .layout-constructor__type-colors,
  .layout-constructor__type-size {
    border: 2px solid #17a2b8;
    border-radius: 10px;
    margin: 10px;
    background: #17a2b8;
  }

</style>
