<template>
  <div class="type-color">
    <div class="collapse" id="collapseExample2">
      <div>
        <ul class="color-list">
          <li v-for="(currentColor, index) in currentColors" :key="index">
            <div class="current-color" :style="{ 'background': currentColor }"></div>
          </li>
        </ul>
        <BaseButton
          @click="saveCurrentColor"
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
        label="Выберите цвет"
        @input="changeColorListener"
        class="type-color__input"
      />
    </div>
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
    },
    changeColorListener () {
      this.$emit('changeColorListener')
    }
  }
}
</script>

<style lang="scss" scoped>

  .type-color__input {
    width: 100px;
  }

  .type-color__button {
    margin-bottom: 20px;
  }

  .color-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 20px 0;
    padding: 0;
    list-style: none;
    width: 100px;
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

  .type-color {
    text-align: center;
    background: #4a4a81;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
  }

</style>
