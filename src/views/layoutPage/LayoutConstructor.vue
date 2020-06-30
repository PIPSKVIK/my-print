<template>
  <div class="layout-constructor">
    <h3 class="layout-constructor__title">
      Layout Constructor
    </h3>
    <div class="content-wrapper">
      <section class="constructor-left">
        <ul class="constructor-left__nav">
          <li class="constructor-left__item">
            <BaseButton theme="constructor" @click="onColor">Цвет</BaseButton>
          </li>
          <li class="constructor-left__item">
            <BaseButton theme="constructor" @click="onPrint">Принты</BaseButton>
          </li>
          <li class="constructor-left__item">
            <BaseButton theme="constructor" @click="onText">Текст</BaseButton>
          </li>
          <li class="constructor-left__item">
            <BaseButton theme="constructor" @click="onPicture">Картинки</BaseButton>
          </li>
          <li class="constructor-left__item">
            <BaseButton theme="constructor" @click="onPainting">Рисование</BaseButton>
          </li>
        </ul>
        <div class="constructor-left__main">
          <SelectColors v-if="colorTrigger" class="constructor-left__main-colors" />
          <SelectPrints v-if="printsTrigger" class="constructor-left__main-prints" />
          <SelectTexts v-if="textsTrigger" class="constructor-left__main-texts" />
          <SelectPictures v-if="picturesTrigger" class="constructor-left__main-pictures" />
          <SelectPainting v-if="paintingTrigger" class="constructor-left__main-painting" />
        </div>
      </section>
      <section class="constructor-main">
        <!-- пока пусто -->
      </section>
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/baseUi'
import { SelectColors, SelectPrints, SelectTexts, SelectPictures, SelectPainting } from '@/components/modal'

export default {
  name: 'LayoutConstructor',
  components: {
    BaseButton,
    SelectColors,
    SelectPrints,
    SelectTexts,
    SelectPictures,
    SelectPainting
  },
  data () {
    return {
      colorTrigger: true,
      printsTrigger: false,
      textsTrigger: false,
      picturesTrigger: false,
      paintingTrigger: false
    }
  },
  methods: {
    onColor () {
      this.colorTrigger = true
      this.printsTrigger = false
      this.textsTrigger = false
      this.picturesTrigger = false
      this.paintingTrigger = false
    },
    onPrint () {
      this.printsTrigger = true
      this.textsTrigger = false
      this.picturesTrigger = false
      this.paintingTrigger = false
      this.colorTrigger = false
    },
    onText () {
      this.textsTrigger = true
      this.picturesTrigger = false
      this.paintingTrigger = false
      this.colorTrigger = false
      this.printsTrigger = false
    },
    onPicture () {
      this.printsTrigger = true
      this.textsTrigger = false
      this.picturesTrigger = false
      this.paintingTrigger = false
      this.colorTrigger = false
    },
    onPainting () {
      this.paintingTrigger = true
      this.colorTrigger = false
      this.printsTrigger = false
      this.textsTrigger = false
      this.picturesTrigger = false
    }
  }
}
</script>

<style lang="scss" scoped>

  .layout-constructor {
    text-align: center;
    margin: 0;
  }

  .content-wrapper {
    display: flex;
  }

  .constructor-left {
    width: 600px;
    height: 793px;
    background: #32343b;
    display: flex;
  }

  .constructor-main {
    width: 100%;
  }

  .constructor-left__nav {
    width: 25%;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 793px;
    background: #17181b;
  }

  .constructor-left__item {
    background: #32343b;
    color: #ffffff;
  }

  .constructor-left__content {
    background: #33353b;
    width: 80%;
  }

  .constructor-left__main {
    width: 85%;
    position: relative;
  }

  .constructor-left__main-colors,
  .constructor-left__main-prints,
  .constructor-left__main-texts,
  .constructor-left__main-pictures,
  .constructor-left__main-painting {
    position: absolute;
    top: 0;
    right: 0;
  }

</style>
