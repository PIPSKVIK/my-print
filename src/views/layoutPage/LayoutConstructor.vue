<template>
  <div class="layout-constructor">
    <section class="constructor-left">
      <TypeSubjects
        class="constructor-left__subjects"
      />
      <TypeColors
        v-model="typeColor"
      />
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
import { TypeSubjects, TypeSizes, TypeColors } from '@/components/constructorLeftSide'

export default {
  name: 'LayoutConstructor',
  components: {
    TypeSubjects,
    TypeSizes,
    TypeColors
  },
  data () {
    return {
      typeColor: '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>

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
