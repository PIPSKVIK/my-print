<template>
  <div class="type-color">
    <BaseButton
      @click="saveCurrentColor"
      size="small"
      class="type-color__button"
      v-if="hideAddColorButton"
    >
      Добавить
    </BaseButton>
    <ul class="color-list">
      <li v-for="(currentColor, index) in currentColors" :key="index">
        <div class="current-color" :style="{ 'background': currentColor }"></div>
      </li>
    </ul>
    <BaseInput
      type="color"
      v-model="changeColor"
      label="Выберите цвет"
    />
  </div>
</template>

<script>
import { BaseInput, BaseButton } from '@/components/baseUi'

export default {
  name: 'TypeColors',
  components: {
    BaseInput,
    BaseButton
  },
  model: {
    props: 'color'
  },
  props: {
    color: {
      type: String,
      default: '#000000'
    },
    currentColors: {
      type: Array
    },
    hideAddColorButton: {
      type: Boolean
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
    }
  },
  methods: {
    saveCurrentColor () {
      this.$emit('saveCurrentColor')
    }
  }
}
</script>

<style lang="scss" scoped>

  .type-color__button {
    margin-bottom: 20px;
  }

  .color-list {
    display: flex;
    justify-content: center;
    margin: 0 0 20px 0;
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
  }

  .type-color {
    text-align: center;
    padding: 20px;
    background: #4a4a81;
    color: #ffffff;
  }

</style>
