<template>
  <div class="layout-constructor">
    <section class="constructor-left">
      <!-- <<< компонент выбора типа одежды -->
      <ConstructorItem
        class="layout-constructor__type-subjects"
        buttonCollapseName="Выбор одежды"
        dataTarget="typeSubjects">
        <template>
          <TypeSubjects
            v-model="changeTypeSubjects"
          />
        </template>
      </ConstructorItem>
      <!-- <<< компонент выбор цыетов -->
      <ConstructorItem
        class="layout-constructor__type-colors"
        buttonCollapseName="Выбор цветов"
        dataTarget="typeColor">
        <template>
          <TypeColors
            v-model="changeTypeColor"
            :currentColors="currentColors"
            @save-current-color="saveCurrentColor"
          />
        </template>
      </ConstructorItem>
      <!-- <<< компонент выбора размера -->
      <ConstructorItem
        class="layout-constructor__type-size"
        buttonCollapseName="Выбор размера"
        dataTarget="typeSize">
        <template>
          <TypeSizes
            class="constructor-left__sizes"
            :allTypeSize="allTypeSize"
            @selectTypeSize="selectTypeSize"
          />
        </template>
      </ConstructorItem>
      <!-- <<< Компонент выбора текста -->
      <ConstructorItem
        class="layout-constructor__type-text"
        buttonCollapseName="Выбор текста"
        dataTarget="typeText">
        <template>
          <TypeTextManager />
        </template>
      </ConstructorItem>
    </section>

    <!-- ПРАВАЯ СТОРОНА ЭКРАНА КОНСТРУКТОРА -->
    <section class="constructor-right">
      <div class="constructor-right__first-block">
        <div class="constructor-right__text-block">
          <div class="constructor-right__subjects-selected">
            <img :src="getImgUrl(getTypeSubjects)" alt="img" width="500" height="450">
            <p class="constructor-right__text"
              :class="{
                'font-weight__active': getTextStyleWeight,
                'font-style__active': getTextStyleItalic,
                'text-underline__active': getTextStyleUnderline,
                'text-transform__active': getTextStyleUppercase
              }"
              :style="[ changeTextColor, changeFontSize, changePosition, changeTextFonts, rotateStyle ]"
              > {{ getPrintText }}
            </p>
          </div>
        </div>
        <div class="constructor-right__block-info">
          <div class="constructor-right__size">
            <h5 class="constructor-right__size-title">Тип размера:</h5>
            <ul class="constructor-right__size-list">
              <li
                v-for="size in getTypeSubjectsSizes"
                :key="size.id"
                class="constructor-right__size-item"
              > {{ size }} </li>
            </ul>
          </div>
          <div class="constructor-right__color">
            <h5 class="constructor-right__color-title">Выбранные цвета:</h5>
            <ul class="constructor-right__colot-list">
              <li
                class="constructor-right__color-item"
                v-for="(color, id) in currentColors"
                :key="id"
              >
                <div
                  class="constructor-right__color-style"
                  :style="{ backgroundColor: color }"
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { TypeSizes, TypeColors, TypeSubjects, ConstructorItem } from '@/components/constructorPanelWithFunctionality'
import TypeTextManager from '@/components/managerComponents/TypeTextManager'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutConstructor',
  components: {
    TypeSizes,
    TypeColors,
    TypeSubjects,
    ConstructorItem,
    TypeTextManager
  },
  data () {
    return {
      currentColors: ['#000000', '#aa55aa', '#ffffff']
    }
  },
  methods: {
    saveCurrentColor () {
      if (!this.currentColors.includes(this.getTypeColor)) {
        this.currentColors.push(this.getTypeColor)
      }
    },
    getImgUrl (img) {
      return require(`@/assets/image/constructor/${img}`)
    },
    selectTypeSize (value) {
      this.$store.commit('changeTypeSubjectSize', value)
    }
  },
  computed: {
    ...mapGetters([
      'allTypeSize',
      'getPrintText',
      'getTextPositionX',
      'getTextPositionY',
      'getTextRotate',
      'getSelectedSize',
      'getSelectedColor',
      'getSelectedFonts',
      'getTextStyleWeight',
      'getTextStyleItalic',
      'getTextStyleUnderline',
      'getTextStyleUppercase',
      'getTypeSubjects',
      'getTypeColor',
      'getTypeSubjectsSizes'
    ]),
    rotateStyle () {
      return {
        transform: 'rotate(' + this.getTextRotate + 'deg)'
      }
    },
    changeTextColor () {
      return {
        color: this.getSelectedColor
      }
    },
    changeFontSize () {
      return {
        'font-size': this.getSelectedSize + 'px'
      }
    },
    changePosition () {
      return {
        top: this.getTextPositionX + 'px',
        left: this.getTextPositionY + 'px'
      }
    },
    changeTextFonts () {
      return {
        'font-family': this.getSelectedFonts
      }
    },
    changeTypeSubjects: {
      get () {
        return this.getTypeSubjects
      },
      set (val) {
        this.$store.commit('updateTypeSubjects', val)
      }
    },
    changeTypeColor: {
      get () {
        return this.getTypeColor
      },
      set (val) {
        this.$store.commit('updateTypeColor', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    display: flex;
    justify-content: center;
  }

  .constructor-right__subjects-selected {
    width: 450px;
    text-align: center;
    position: relative;
  }

  .constructor-right__text {
    white-space: pre-line;
    position: absolute;
    top: 140px;
    left: 130px;
    margin: 0;
  }

  .constructor-right__color {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  .constructor-right__color-style {
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    border-radius: 50%;
    margin: 3px 3px 0 0;
  }

  .constructor-right__colot-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }

  .constructor-right__color-title {
    color: #ffffff;
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

  // лист размеров одежды
  .constructor-right__block-info {
    min-height: 80px;
    background: #7e7d7d;
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: space-around;
  }

  .constructor-right__size {
    width: 50%;
  }

  .constructor-right__size-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .constructor-right__size-item {
    background: #ffffff;
    border-radius: 3px;
    padding: 5px 0;
    width: 30px;
    color: #000000;
    margin: 0 5px;
    font-weight: bold;
  }

  .constructor-right__size-title {
    color: #ffffff;
  }

  .constructor-right__first-block {
    width: 100%;
  }

</style>
