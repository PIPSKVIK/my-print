<template>
  <div class="subjects">
    <div class="subjects-type">
      <BaseRadio
        v-for="item in getSubjectsList"
        :key="item.id"
        :label="item.label"
        :value="item.img"
        v-model="changeSubjects"
      />
    </div>
  </div>
</template>

<script>
import { BaseRadio } from '@/components/baseUi'
import { mapGetters } from 'vuex'

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
    },
    ...mapGetters([
      'getSubjectsList'
    ])
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
