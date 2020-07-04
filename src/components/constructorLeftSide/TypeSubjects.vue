<template>
  <div class="subjects">
    <div>
      <img class="subject-img subject__tshirt" src="@/assets/image/constructor/tshirt-icon.png" alt="tshirt" width="40" height="40">
      <img class="subject-img subject__sweater" src="@/assets/image/constructor/sweater-icon.png" alt="sweater" width="40" height="40">
    </div>
    <div>
      <BaseRadio
        label="Футболка"
        value="Футболка"
        v-model="subjectsType"
      />
      <BaseRadio
        label="Кофта"
        value="Кофта"
        v-model="subjectsType"
      />
    </div>
    <span> {{ subjectsType }} </span>
  </div>
</template>

<script>
import { BaseRadio } from '@/components/baseUi'

export default {
  name: 'TypeSubjects',
  components: {
    BaseRadio
  },
  data () {
    return {
      subjectsType: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
