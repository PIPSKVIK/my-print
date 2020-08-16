<template>
  <div class="type-color">
    <div>
      <ul class="color-list">
        <li v-for="(currentColor, index) in currentColors" :key="index">
          <div class="current-color" :style="{ 'background': currentColor }"></div>
        </li>
      </ul>
      <BaseButton
        @click="$emit('saveCurrentColor')"
        size="small"
        class="type-color__button"
        v-if="hideAddColorButton"
      >
        Добавить
      </BaseButton>
    </div>
    <BaseColor
      type="color"
      v-model="changeColor"
      label="Цвет:"
      class="type-color__input"
    />
  </div>
</template>

<script>
import { BaseButton, BaseColor } from '@/components/baseUi'

export default {
  name: 'TypeColors',
  components: {
    BaseButton,
    BaseColor
  },
  model: {
    prop: 'color'
  },
  data () {
    return {
      text: []
    }
  },
  props: {
    color: {
      type: String,
      default: '#000000'
    },
    currentColors: {
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
      return !this.currentColors.includes(this.color)
    }
  }
}
</script>

<style lang="scss" scoped>

  .type-color {
    padding: 10px;
    margin: 10px;
    background: #adccae;
    border-radius: 10px;
    color: #ffffff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .type-color__input {
    width: 100px;
    padding: 10px;
  }

  .type-color__button {
    margin-bottom: 20px;
    position: absolute;
    left: 10px;
    bottom: 4px;
  }

  .color-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 0 20px 0;
    padding: 0;
    list-style: none;
    width: 250px;
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

</style>
