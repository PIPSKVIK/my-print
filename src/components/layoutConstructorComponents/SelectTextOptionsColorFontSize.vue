<template>
  <div class="options">
    <BaseSelect
      class="type-font"
      @select="changeSelectedOptions('Fonts', $event)"
      :options="allTypeFontFamily">
      <template v-slot:title>
        <span>Шрифт</span>
      </template>
    </BaseSelect>

    <BaseSelect
      class="type-color"
      @select="changeSelectedOptions('Color', $event)"
      :options="allOptionsColors">
      <template v-slot:title>
        <span>Цвет</span>
      </template>
    </BaseSelect>

    <BaseSelect
      class="type-size"
      @select="changeSelectedOptions('Size', $event)"
      :options="allOptionsSize">
      <template v-slot:title>
        <span>Размер</span>
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
  .options {
    margin-top: 20px;
    display: flex;
  }
</style>
