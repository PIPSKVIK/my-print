<template>
  <div class="type-color">
    <BaseInput
      type="color"
      v-model="changeColor"
    />
    <BaseButton
      @click="saveCurrentColor"
      size="small"
    >
    Сохранить
    </BaseButton>
    <ul class="color-list">
      <li v-for="currentColor in currentColors" :key="currentColor.currentColor">
        <div class="current-color" :style="{ 'background': currentColor }"></div>
        <!-- <button class="color-btn" @click="$emit('removeColor', currentColor.id )">&times;</button> -->
      </li>
    </ul>
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

  .color-list {
    display: flex;
    justify-content: center;
    margin: 0;
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
    padding: 20px 0;
    background: #6c6cd4;
    color: #ffffff;
  }

</style>
