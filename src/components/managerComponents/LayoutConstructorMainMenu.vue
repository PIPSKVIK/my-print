<template>
  <div class="constructor-left">
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
            :getCurrentColors="getCurrentColors"
            @save-current-color="$store.commit('saveCurrentColor')"
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
  </div>
</template>

<script>
import { TypeSizes, TypeColors, TypeSubjects, ConstructorItem } from '@/components/constructorPanelWithFunctionality'
import TypeTextManager from '@/components/managerComponents/TypeTextManager'

export default {
  name: 'LayoutConstructorMainMenu',
  components: {
    TypeSizes,
    TypeColors,
    TypeSubjects,
    ConstructorItem,
    TypeTextManager
  }
}
</script>

<style lang="scss" scoped>
  .constructor-left {
    width: 30%;
    background: #c6cccf;
    height: 800px;
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
