<template>
  <div>
    <BaseSelect
      class="type-font"
      @select="changeSelectedOptions('Fonts', $event)"
      :options="allTypeFontFamily">
      <template v-slot:title>
        <span>Шрифт: </span>
        <span class="type-text__fonts-name"> {{ getSelectedFonts }} </span>
      </template>
    </BaseSelect>

    <BaseSelect
      class="type-color"
      @select="changeSelectedOptions('Color', $event)"
      :options="allOptionsColors">
      <template v-slot:title>
        <span>Цвет: </span>
        <div class="type-text__color" :style="{ 'background': getSelectedColor }"></div>
        <span class="tepe-text__name"> {{ getSelectedColor }} </span>
      </template>
    </BaseSelect>

    <BaseSelect
      class="type-size"
      @select="changeSelectedOptions('Size', $event)"
      :options="allOptionsSize">
      <template v-slot:title>
        <span>Размер: </span>
        <span class="type-size__name"> {{ getSelectedSize }} </span>
      </template>
    </BaseSelect>
  </div>
</template>

<script>
import { BaseSelect } from '@/components/baseUi'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectTextOptionsColorFontSize',
  components: {
    BaseSelect
  },
  methods: {
    changeSelectedOptions (type, event) {
      this.$store.commit('changeSelectedOptions', { type, event })
    }
  },
  computed: {
    ...mapGetters([
      'getSelectedSize',
      'getSelectedColor',
      'getSelectedFonts',
      'allTypeFontFamily',
      'allOptionsColors',
      'allOptionsSize'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
