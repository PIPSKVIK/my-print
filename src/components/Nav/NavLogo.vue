<template>
  <div class="logo">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/Nav/laundry.png" alt="logo" width="60" height="60">
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>

</style>
