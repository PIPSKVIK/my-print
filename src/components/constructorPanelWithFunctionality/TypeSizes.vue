<template>
  <div class="type-size">
    <div class="size">
      <ul class="size__list">
        <li
          v-for="item in allTypeSize"
          :key="item.id"
          class="size__item"
        >
          <BaseCheckbox
            :label="item.name"
            :item="item.name"
            v-model="selectSizes"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { BaseCheckbox } from '@/components/baseUi'

export default {
  name: 'TypeSizes',
  components: {
    BaseCheckbox
  },
  props: {
    allTypeSize: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      selectSizes: []
    }
  },
  watch: {
    selectSizes (val) {
      this.$emit('selectTypeSize', val)
    }
  }
}
</script>

<style lang="scss" scoped>
  .size__list {
    margin: 0;
    padding: 10px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .size__item {
    margin: 0;
  }

  .size__item:not(:last-child) {
    margin-right: 15px;
  }
</style>>
