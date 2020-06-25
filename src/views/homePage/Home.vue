<template>
  <div class="home">
    <h1>My Print</h1>
    <div class="home-cards">
      <HomeLayout
        v-for="card in layoutCards"
        :key="card.id"
        :cardData="card"
        class="home-cards__item"
      />
    </div>
  </div>
</template>

<script>
import { HomeLayout } from '@/components/homePage'

export default {
  name: 'Home',
  components: {
    HomeLayout
  },
  data () {
    return {
      layoutCards: [
        {
          id: 1,
          image: '1.jpg',
          name: 'T-short',
          title: 'Макет 1',
          colors: ['#a75b5b', '#5a5454', '#420909', '#420909'],
          prices: [100, 200, 300, 400],
          sizes: ['M', 'L', 'S', 'M']
        },
        {
          id: 2,
          image: '2.jpg',
          name: 'T-short',
          title: 'Макет 2',
          colors: ['#a75b5b'],
          prices: [100],
          sizes: ['M']
        },
        {
          id: 3,
          image: '3.jpg',
          name: 'T-short',
          title: 'Макет 3',
          colors: ['#a75b5b', '#420909'],
          prices: [100, 200],
          sizes: ['M', 'L']
        },
        {
          id: 4,
          image: '4.jpg',
          name: 'T-short',
          title: 'Макет 4',
          colors: ['#a75b5b', '#5a5454', '#420909'],
          prices: [100, 200, 300],
          sizes: ['M', 'L', 'S']
        },
        {
          id: 5,
          image: '5.jpg',
          name: 'T-short',
          title: 'Макет 5',
          colors: ['#a75b5b', '#5a5454', '#420909', '#5a5454', '#5a5454'],
          prices: [100, 200, 300, 400, 500],
          sizes: ['M', 'L', 'S', 'M', 'L']
        },
        {
          id: 6,
          image: '6.jpg',
          name: 'T-short',
          title: 'Макет 6',
          colors: ['#a75b5b', '#420909'],
          prices: [100, 200],
          sizes: ['M', 'L']
        }
      ]
    }
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
