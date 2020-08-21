<template>
  <div class="constructor-right__size">
    <h5 class="constructor-right__size-title">Тип размера:</h5>
    <ul class="constructor-right__size-list">
      <li
        v-for="size in getTypeSubjectsSizes"
        :key="size.id"
        class="constructor-right__size-item"
      > {{ size }} </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BlockWithInfoClothingSize',
  computed: {
    ...mapGetters([
      'getTypeSubjectsSizes'
    ])
  }
}
</script>

<style lang="scss" scoped>
   .constructor-right__size {
    width: 50%;
  }

  .constructor-right__size-title {
    color: #ffffff;
  }

  .constructor-right__size-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .constructor-right__size-item {
    background: #ffffff;
    border-radius: 3px;
    padding: 5px 0;
    width: 30px;
    color: #000000;
    margin: 0 5px;
    font-weight: bold;
  }
</style>
