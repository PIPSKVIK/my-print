<template>
  <div>
    <!-- <<< компонент выбора типа одежды -->
    <ConstructorItem
      class="layout-constructor__type-subjects"
      buttonCollapseName="Выбор одежды"
      dataTarget="typeSubjects"
    >
      <TypeSubjects
        v-model="changeTypeSubjects"
        :getSubjectsList="getSubjectsList"
      />
    </ConstructorItem>
    <!-- <<< компонент выбор цыетов -->
    <ConstructorItem
      class="layout-constructor__type-colors"
      buttonCollapseName="Выбор цветов"
      dataTarget="typeColor"
    >
      <TypeColors
        v-model="changeTypeColor"
        :getCurrentColors="getCurrentColors"
        @save-current-color="saveCurrentColor"
      />
    </ConstructorItem>
    <!-- <<< компонент выбора размера -->
    <ConstructorItem
      class="layout-constructor__type-size"
      buttonCollapseName="Выбор размера"
      dataTarget="typeSize"
    >
      <TypeSizes
        class="constructor-left__sizes"
        :allTypeSize="allTypeSize"
        @selectTypeSize="changeTypeSubjectSize"
      />
    </ConstructorItem>
    <!-- <<< Компонент выбора текста -->
    <ConstructorItem
      class="layout-constructor__type-text"
      buttonCollapseName="Выбор текста"
      dataTarget="typeText"
    >
      <TypeTextManager />
    </ConstructorItem>
  </div>
</template>

<script>
import { TypeSizes, TypeColors, TypeSubjects, ConstructorItem } from '@/components/constructorPanelWithFunctionality'
import TypeTextManager from '@/components/managerComponents/TypeTextManager'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'LayoutConstructorMainMenu',
  components: {
    TypeSizes,
    TypeColors,
    TypeSubjects,
    ConstructorItem,
    TypeTextManager
  },
  methods: {
    ...mapMutations([
      'saveCurrentColor',
      'updateTypeSubjects',
      'updateTypeColor',
      'changeTypeSubjectSize'
    ])
  },
  computed: {
    ...mapGetters([
      'getTypeSubjects',
      'getTypeColor',
      'getCurrentColors',
      'allTypeSize',
      'getSubjectsList'
    ]),
    changeTypeSubjects: {
      get () {
        return this.getTypeSubjects
      },
      set (val) {
        this.updateTypeSubjects(val)
      }
    },
    changeTypeColor: {
      get () {
        return this.getTypeColor
      },
      set (val) {
        this.updateTypeColor(val)
      }
    }
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
