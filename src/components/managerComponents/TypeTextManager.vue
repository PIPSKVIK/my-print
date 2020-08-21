<template>
  <div class="manager">
    <TypeText
      :allOptionsColors="allOptionsColors"
      :allOptionsSize="allOptionsSize"
      :allTypeFontFamily="allTypeFontFamily"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TypeText } from '@/components/constructorPanelWithFunctionality'

export default {
  name: 'TypeTextManager',
  components: {
    TypeText
  },
  computed: {
    ...mapGetters([
      'allOptionsColors',
      'allOptionsSize',
      'allTypeFontFamily'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
