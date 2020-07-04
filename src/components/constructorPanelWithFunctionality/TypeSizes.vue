<template>
  <div class="type-size">
    <h4>Выбрать размер</h4>
    <div>
      <ul>
        <li
        v-for="item in someData" :key="item.id"
        >
          <BaseCheckbox :label="item.name" :item="item.name"  v-model="selectSizes" />
        </li>
      </ul>
    </div>
    <span> {{ selectSizes }} </span>
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
  data () {
    return {
      selectSizes: [],
      someData: [
        {
          id: 1,
          name: 'M'
        },
        {
          id: 2,
          name: 'S'
        },
        {
          id: 3,
          name: 'L'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .test {
    width: 30px;
    height: 30px;
    background: transparent;
    border: 2px solid #000000;
    border-radius: 8px;
    margin-right: 5px;
      &:hover {
        background: #888888;
      }
  }

  .test-active {
    background: #353535;
  }

  .type-size {
    text-align: center;
    padding: 20px 0;
    background: #7878cf;
    color: #ffffff;
  }

</style>>
