<template>
  <div class="subjects">
    <div class="collapse" id="collapseExample1">
      <div>
        <img class="subject-img subject__tshirt" src="@/assets/image/constructor/tshirt-icon.png" alt="tshirt" width="40" height="40">
        <img class="subject-img subject__sweater" src="@/assets/image/constructor/sweater-icon.png" alt="sweater" width="40" height="40">
      </div>
      <div>
        <BaseRadio
          label="Футболка"
          value="Футболка"
          v-model="changeSubjects"
        />
        <BaseRadio
          label="Кофта"
          value="Кофта"
          v-model="changeSubjects"
        />
      </div>
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
      type: String,
      default: ''
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

</style>
