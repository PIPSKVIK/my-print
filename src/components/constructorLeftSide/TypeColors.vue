<template>
  <div class="type-color">
    <BaseInput
      type="color"
      v-model="changeColor"
    />
  </div>
</template>

<script>
import { BaseInput } from '@/components/baseUi'

export default {
  name: 'TypeColors',
  components: {
    BaseInput
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
