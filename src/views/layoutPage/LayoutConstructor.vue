<template>
  <div class="layout-constructor">
    <LayoutConstructorMainMenu class="constructor-left" />
    <LayoutConstructorMainCanvas class="constructor-right" />
  </div>
</template>

<script>
import { LayoutConstructorMainMenu, LayoutConstructorMainCanvas } from '@/components/managerComponents'

export default {
  name: 'LayoutConstructor',
  components: {
    LayoutConstructorMainMenu,
    LayoutConstructorMainCanvas
  }
}
</script>

<style lang="scss" scoped>
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
</style>
