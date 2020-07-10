<template>
  <div class="layout-constructor">
    <section class="constructor-left">
      <!-- <<< компонент выбора типа одежды -->
      <div>
        <button class="btn btn-link btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="true" aria-controls="collapseExample">
          Выбор одежды
        </button>
        <TypeSubjects
          v-model="typeSubjects"
        />
        <span> {{ typeSubjects }} </span>
      </div>
      <!-- <<< компонент выбор цыетов -->
      <div>
        <button class="btn btn-link btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
          Выбор цвета
        </button>
        <TypeColors
          v-model="typeColor"
          :currentColors="currentColors"
          @saveCurrentColor="saveCurrentColor"
          @changeColorListener="changeColorListener"
          :hideAddColorButton="hideAddColorButton"
        />
      </div>
      <!-- <<< компонент выбора размера -->
      <div>
        <button class="btn btn-link btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
          Выбор размера
        </button>
        <TypeSizes
          class="constructor-left__sizes"
        />
      </div>
    </section>
    <!-- Правая сторона экрана конструктора -->
    <section class="constructor-right">
      <svg :style="{ 'fill': typeColor }" fill="#ffffff" id="tshirt" enable-background="new 0 0 512 512" height="300" width="300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m361 37.591v97.409h-90v90h-30v-90h-90v-97.409l-151 40.934v146.475h61v-90h30v377h330v-377h30v90h61v-146.475z"/><path d="m331 105v-79.193l-56.566 79.193z"/><path d="m181 25.807v79.193h56.566z"/><path d="m312.566 0h-113.132l56.566 79.193z"/></g></svg>
    </section>
  </div>
</template>

<script>
import { TypeSizes, TypeColors, TypeSubjects } from '@/components/constructorPanelWithFunctionality'

export default {
  name: 'LayoutConstructor',
  components: {
    TypeSizes,
    TypeColors,
    TypeSubjects
  },
  data () {
    return {
      typeColor: '#000000',
      typeSubjects: '',
      currentColors: ['#000000', '#aa55aa', '#ffffff'],
      hideAddColorButton: false
    }
  },
  methods: {
    saveCurrentColor () {
      if (!this.currentColors.includes(this.typeColor)) {
        this.currentColors.push(this.typeColor)
      } else {
        console.log('Такой цвет уже есть')
        this.hideAddColorButton = false
      }
    },
    changeColorListener () {
      if (!this.currentColors.includes(this.typeColor)) {
        this.hideAddColorButton = true
      } else {
        this.hideAddColorButton = false
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

  .constructor-left {
    width: 30%;
    background: #c6cccf;
    height: 800px;
  }

  .constructor-right {
    width: 70%;
    background: #989c9e;
    height: 800px;
  }

</style>
