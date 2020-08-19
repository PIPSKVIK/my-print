<template>
  <div class="manager">
    <TypeText
      :allOptionsColors="allOptionsColors"
      :allOptionsSize="allOptionsSize"
      :allTypeFontFamily="allTypeFontFamily"
      @changeTextStyle="changeTextStyle"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { TypeText } from '@/components/constructorPanelWithFunctionality'

export default {
  name: 'managerTypeText',
  components: {
    TypeText
  },
  methods: {
    changeTextStyle ({ type, value }) {
      this[`textStyle${type}`] = value
    }
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
