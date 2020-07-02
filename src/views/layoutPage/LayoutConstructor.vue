<template>
  <div class="layout-constructor">
    <section class="constructor-left">
      <!-- <компонент выбора типа одежды -->
      <div class="subjects">
        <div>
          <img class="subject-img subject__tshirt" src="@/assets/image/constructor/tshirt-icon.png" alt="tshirt" width="40" height="40">
          <img class="subject-img subject__sweater" src="@/assets/image/constructor/sweater-icon.png" alt="sweater" width="40" height="40">
        </div>
        <div>
          <BaseRadio
            label="Футболка"
            value="Футболка"
            v-model="subjectsType"
          />
          <BaseRadio
            label="Кофта"
            value="Кофта"
            v-model="subjectsType"
          />
        </div>
        <div>
          <span> {{ subjectsType }} </span>
        </div>
      </div>
      <!-- компонент выбора типа одежды> -->

      <!-- <компонент выбор цыетов -->
      <div>
        <TypeColors
          v-model="typeColor"
          @saveCurrentColor="saveCurrentColor"
        />
        <div class="current-color" :style="{ 'background': currentColors }"></div>
      </div>
      <!-- <компонент выбор цыетов> -->
      <TypeSizes
        class="constructor-left__sizes"
      />
    </section>
    <section class="constructor-right">
      <svg :style="{ 'fill': typeColor }" fill="#ffffff" id="tshirt" enable-background="new 0 0 512 512" height="300" width="300" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><path d="m361 37.591v97.409h-90v90h-30v-90h-90v-97.409l-151 40.934v146.475h61v-90h30v377h330v-377h30v90h61v-146.475z"/><path d="m331 105v-79.193l-56.566 79.193z"/><path d="m181 25.807v79.193h56.566z"/><path d="m312.566 0h-113.132l56.566 79.193z"/></g></svg>
    </section>
  </div>
</template>

<script>
import { TypeSizes, TypeColors } from '@/components/constructorLeftSide'
import { BaseRadio } from '@/components/baseUi'

export default {
  name: 'LayoutConstructor',
  components: {
    TypeSizes,
    TypeColors,
    BaseRadio
  },
  data () {
    return {
      typeColor: '#000000',
      subjectsType: '',
      currentColors: ['#745874']
    }
  },
  methods: {
    saveCurrentColor () {
      console.log(this.typeColor)
    }
  }
}
</script>

<style lang="scss" scoped>

  .current-color {
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    border-radius: 50%;
  }

// <компонент выбора типа одежды
  .subjects {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #98be72;
    padding: 10px;
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
