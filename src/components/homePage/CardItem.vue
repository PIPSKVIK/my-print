<template>
  <div class="card-item">
    <div class="card" style="width: 15rem;">
      <img class="card-img-top" :src="require('@/assets/image/home/' + cardData.image)">
      <div class="card-body">
        <h5 class="card-title"> {{ cardData.title }} </h5>
        <div class="card-item__color">
          <p class="card-item__color-items" :style=" {'background': cardData.color } "></p>
          <p class="card-item__color-items" :style=" {'background': cardData.color } "></p>
          <p class="card-item__color-items" :style=" {'background': cardData.color } "></p>
        </div>
        <p> Price: {{ cardData.price }} P </p>
        <button class="btn btn-primary">Button</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  display: flex;
}

.card-item__color-items {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
  margin: 0 5px;
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
