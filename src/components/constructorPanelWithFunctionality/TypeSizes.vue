<template>
  <div class="collapse" id="collapseExample3">
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
              @input="selectTypeSize"
            />
          </li>
        </ul>
      </div>
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
  inheritAttrs: false,
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
  methods: {
    selectTypeSize () {
      this.$emit('selectTypeSize', this.selectSizes)
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
