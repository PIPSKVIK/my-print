<template>
  <div class="type-color">
    <BaseInput
      type="color"
      v-model="changeColor"
    />
    <BaseButton
      @click="saveCurrentColor"
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

  .type-color {
    text-align: center;
    padding: 20px 0;
    background: #6c6cd4;
    color: #ffffff;
  }

</style>
