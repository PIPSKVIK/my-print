<template>
  <div class="card-item">
    <div class="card" style="width: 15rem;">
      <img class="card-img-top" :src="require('@/assets/image/home/' + cardData.image)">
      <div class="card-body">
        <h5 class="card-title"> {{ cardData.title }} </h5>
        <div class="card-item__color">
          <CardItemColor
            :cardItemColorsData="cardData.colors"
          />
        </div>
        <div class="card-item__price">
          <CardItemPrice
            :cardItemPricesData="cardData.price"
          />
        </div>
        <div class="card-item__size">
          <CardItemSize
            :cardItemSizesData="cardData.sizes"
          />
        </div>
        <BaseButton
          theme="info"
          size="small"
          @click="onClick"
        >
          Посмотреть
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { CardItemColor, CardItemPrice, CardItemSize } from '@/components/cardItems'
import { BaseButton } from '@/components/baseUi'

export default {
  name: 'HomeLayout',
  components: {
    CardItemColor,
    CardItemPrice,
    CardItemSize,
    BaseButton
  },
  props: {
    cardData: {
      required: true,
      type: Object
    }
  },
  methods: {
    onClick () {
      console.log('Номер карточки:', this.cardData.id)
    }
  }
}
</script>

<style lang="scss" scoped>

  .card-item {
    display: flex;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-item__color {
    display: flex;
  }

</style>
