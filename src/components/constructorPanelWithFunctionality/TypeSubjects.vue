<template>
  <div class="subjects">
    <div class="subjects-type">
      <BaseRadio
        label="М-Майка"
        value="image-men-t-shirt.jpg"
        v-model="changeSubjects"
      />
      <BaseRadio
        label="Ж-Майка"
        value="image-womens-t-shirt.jpg"
        v-model="changeSubjects"
      />
    </div>
  </div>
</template>

<script>
import { BaseRadio } from '@/components/baseUi'

export default {
  name: 'TypeSubjects',
  components: {
    BaseRadio
  },
  model: {
    prop: 'radio'
  },
  props: {
    radio: {
      type: String
    }
  },
  computed: {
    changeSubjects: {
      get () {
        return this.radio
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .subjects {
    display: flex;
    padding: 10px;
    background: #adccae;
    margin: 10px;
    border-radius: 10px;
  }

</style>
