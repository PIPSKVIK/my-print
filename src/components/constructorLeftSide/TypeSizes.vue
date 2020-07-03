<template>
  <div class="type-size">
    <h4>Выбрать размер</h4>
    <label for="size-M">
      <div class="test">M</div>
    </label>
    <input v-show="hideCheckbox" type="checkbox" name="size" id="size-M" value="M" v-model="sizes" :checked="checked">
    <label for="size-S"></label>
    <BaseCheckbox
      v-model="sizes"
    />
    <ul>
      <li
        v-for="(size, index) in sizes"
        :key="index"
      >
        {{ size }}
      </li>
    </ul>
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
      sizes: [],
      hideCheckbox: false,
      checked: false
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
