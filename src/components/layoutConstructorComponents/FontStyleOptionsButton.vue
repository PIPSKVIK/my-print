<template>
  <div class="typeface btn-toolbar" role="toolbar">
    <div class="btn-group btn-group-sm" role="group" aria-label="First group">
      <BaseButton
        v-for="item in items"
        :key="item.name"
        theme="secondary"
        :class="[
          { standartButtonActive: item.prop },
          `typeface-${item.value.toLowerCase()}`
        ]"
        @click="changeTextStyle(item.value)"
      >
        {{ item.name }}
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { BaseButton } from '@/components/baseUi'

export default {
  name: 'FontStyleOptionsButton',
  components: {
    BaseButton
  },
  props: {
    getTextStyleWeight: {
      type: Boolean,
      required: true
    },
    getTextStyleItalic: {
      type: Boolean,
      required: true
    },
    getTextStyleUnderline: {
      type: Boolean,
      required: true
    },
    getTextStyleUppercase: {
      type: Boolean,
      required: true
    },
    changeTextStyle: {
      type: Function,
      required: true
    }
  },
  computed: {
    items () {
      return [
        { name: 'B', value: 'Weight', prop: this.getTextStyleWeight },
        { name: 'I', value: 'Italic', prop: this.getTextStyleItalic },
        { name: 'K', value: 'Underline', prop: this.getTextStyleUnderline },
        { name: 'U', value: 'Uppercase', prop: this.getTextStyleUppercase }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .standartButtonActive {
    background: #515558;
  }

  .typeface-weight {
    font-weight: bold;
  }

  .typeface-italic {
    font-style: italic;
  }

  .typeface-underline {
    text-decoration: underline;
  }

  .typeface-uppercase {
    text-transform: uppercase;
  }
</style>
