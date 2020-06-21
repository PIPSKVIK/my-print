<template>
  <div class="card-item">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="require('@/assets/Home/' + cardData.image)">
      <div class="card-body">
        <h5 class="card-title"> {{ cardData.title }} </h5>
        <div class="card-item__color" :style=" {'background': cardData.color } "></div>
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

.card-item__color {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
}
</style>
