<template>
  <div class="type-color">
    <BlockWithInfoClothingColor
      class="color-list"
      :getCurrentColors="getCurrentColors"
    />
    <div class="color-elements">
      <BaseColor
        type="color"
        v-model="changeColor"
        label="Цвет:"
        class="type-color__input"
      />
      <BaseButton
        @click="$emit('save-current-color')"
        size="small"
        class="type-color__button"
        v-if="hideAddColorButton"
      >
        Добавить
      </BaseButton>
    </div>
  </div>
</template>

<script>
import { BaseButton, BaseColor } from '@/components/baseUi'
import BlockWithInfoClothingColor from '@/components/layoutConstructorComponents/BlockWithInfoClothingColor'

export default {
  name: 'TypeColors',
  components: {
    BaseButton,
    BaseColor,
    BlockWithInfoClothingColor
  },
  model: {
    prop: 'color'
  },
  props: {
    color: {
      type: String,
      default: '#000000'
    },
    getCurrentColors: {
      type: Array
    }
  },
  computed: {
    changeColor: {
      get () {
        return this.color
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    hideAddColorButton () {
      return !this.getCurrentColors.includes(this.color)
    }
  }
}
</script>

<style lang="scss" scoped>
  .type-color__button {
    height: 50px;
  }

  .type-color {
    padding: 10px;
    margin: 10px;
    background: #adccae;
    border-radius: 10px;
  }

  .type-color__input {
    width: 100px;
    padding: 10px;
  }

  .color-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  }

  .color-btn {
    border-radius: 50%;
  }

  .current-color {
    width: 20px;
    height: 20px;
    border: 2px solid #000000;
    border-radius: 50%;
    margin: 3px 3px 0 0;
  }

  .color-elements {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>
