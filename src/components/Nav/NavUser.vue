<template>
  <div class="user">
    <p class="user-title">Пользователь:</p>
    <p class="user-name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: 'NavUser',
  computed: {
    name () {
      return this.$store.getters.info.name
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-name {
    color: #00724c;
    font-size: 14px;
    margin: 0;
    text-transform: uppercase;
  }
  .user {
    background-color: #e7e7e7;
    padding: 5px 10px;
    border-radius: 10px;
  }
  .user-title {
    margin: 0;
  }
</style>
