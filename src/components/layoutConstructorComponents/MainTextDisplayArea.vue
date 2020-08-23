<template>
  <div class="constructor-right__subjects-selected">
    <img :src="getImgUrl(getTypeSubjects)" alt="img" width="500" height="450">
    <p
      class="constructor-right__text"
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainTextDisplayArea',
  methods: {
    getImgUrl (img) {
      return require(`@/assets/image/constructor/${img}`)
    }
  },
  computed: {
    ...mapGetters([
      'getTextStyleWeight',
      'getTextStyleItalic',
      'getTextStyleUnderline',
      'getTextStyleUppercase',
      'getPrintText',
      'getSelectedColor',
      'getSelectedSize',
      'getTextPositionX',
      'getTextPositionY',
      'getSelectedFonts',
      'getTextRotate',
      'getTypeSubjects'
    ]),
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
    rotateStyle () {
      return {
        transform: 'rotate(' + this.getTextRotate + 'deg)'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .constructor-right__subjects-selected {
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
</style>
