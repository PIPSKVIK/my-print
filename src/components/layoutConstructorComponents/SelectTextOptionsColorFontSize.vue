<template>
  <div class="options">
    <BaseSelect
      v-for="item in items"
      :key="item.name"
      :class="`type-${item.prop.toLowerCase()}`"
      @select="updateSelectedOptions(item.prop, $event)"
      :options="item.option"
    >
      <template #title>
        <span>{{ item.name }}</span>
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
  },
  computed: {
    items () {
      return [
        { name: 'Шрифт', prop: 'Fonts', option: this.allTypeFontFamily },
        { name: 'Цвет', prop: 'Color', option: this.allOptionsColors },
        { name: 'Размер', class: 'type-size', prop: 'Size', option: this.allOptionsSize }
      ]
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

  .type-fonts {
    color: #0000ff;
  }

  .type-color {
    color: #008000;
  }

  .type-size {
    color: #ff0000;
  }
</style>
