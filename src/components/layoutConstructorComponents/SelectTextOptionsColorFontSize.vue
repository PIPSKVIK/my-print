<template>
  <div class="options">
    <BaseSelect
      class="type-font"
      @select="updateSelectedOptions('Fonts', $event)"
      :options="allTypeFontFamily">
      <template v-slot:title>
        <span>Шрифт</span>
      </template>
    </BaseSelect>

    <BaseSelect
      class="type-color"
      @select="updateSelectedOptions('Color', $event)"
      :options="allOptionsColors">
      <template v-slot:title>
        <span>Цвет</span>
      </template>
    </BaseSelect>

    <BaseSelect
      class="type-size"
      @select="updateSelectedOptions('Size', $event)"
      :options="allOptionsSize">
      <template v-slot:title>
        <span>Размер</span>
      </template>
    </BaseSelect>
  </div>
</template>

<script>
import { BaseSelect } from '@/components/baseUi'

export default {
  name: 'SelectTextOptionsColorFontSize',
  components: {
    BaseSelect
  },
  props: {
    allTypeFontFamily: {
      type: Array,
      required: true
    },
    allOptionsColors: {
      type: Array,
      required: true
    },
    allOptionsSize: {
      type: Array,
      required: true
    },
    changeSelectedOptions: {
      type: Function,
      required: true
    }
  },
  methods: {
    updateSelectedOptions (type, event) {
      this.changeSelectedOptions({ type, event })
    }
  }
}
</script>

<style lang="scss" scoped>
  .options {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
</style>
