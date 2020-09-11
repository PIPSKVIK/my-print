<template>
  <div class="typeface btn-toolbar" role="toolbar">
    <div class="btn-group btn-group-sm" role="group" aria-label="First group">
      <BaseButton
        theme="secondary"
        class="typeface-weight"
        @click="changeTextStyle('Weight')"
        :class="{ standartButtonActive: getTextStyleWeight }"
      >
        B
      </BaseButton>
      <BaseButton
        theme="secondary"
        class="typeface-italic"
        @click="changeTextStyle('Italic')"
        :class="{ standartButtonActive: getTextStyleItalic }"
      >
        I
      </BaseButton>
      <BaseButton
        theme="secondary"
        class="typeface-underline"
        @click="changeTextStyle('Underline')"
        :class="{ standartButtonActive: getTextStyleUnderline }"
      >
        K
      </BaseButton>
      <BaseButton
        theme="secondary"
        class="typeface-uppercase"
        @click="changeTextStyle('Uppercase')"
        :class="{ standartButtonActive: getTextStyleUppercase }"
      >
        U
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
