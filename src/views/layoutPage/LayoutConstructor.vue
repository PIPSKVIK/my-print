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
          :typeSubjectsData="typeSubjects"
        />
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
      <!-- Компонент выбора текста -->
      <div>
        <button class="btn btn-link btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
          Добавить текст
        </button>
        <TypeText
          v-model="typeText"
          :allOptionsColors="allOptionsColors"
          @optionsColor="optionsColor"
          :selectedName="selectedName"
        />
      </div>
    </section>

    <!-- Правая сторона экрана конструктора -->
    <section class="constructor-right">
      <div class="constructor-right__text-block">
        <p
          class="constructor-right__text"
          :style="{ 'color': selected }"
          > {{ typeText }} </p>
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
      selected: '',
      selectedName: 'Select'
    }
  },
  methods: {
    saveCurrentColor () {
      if (!this.currentColors.includes(this.typeColor)) {
        this.currentColors.push(this.typeColor)
      }
    },
    optionsColor (option) {
      this.selected = option.value
      this.selectedName = option.name
    }
  },
  computed: mapGetters(['allOptionsColors'])
}
</script>

<style lang="scss" scoped>

  .constructor-right__text {
    white-space: pre-line;
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
  }

</style>
