<template>
  <div class="home">
    <h1>My Print</h1>
    <div class="home-cards">
      <CardItem
        v-for="cards in cardFromState"
        :key="cards.id"
        :cardData="cards"
        class="home-cards__item"
      />
    </div>
  </div>
</template>

<script>
import { CardItem } from '@/components/homePage'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    CardItem
  },
  computed: {
    ...mapGetters([
      'cardFromState'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
}

.home-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.home-cards__item {
  margin: 20px;
}
</style>
