<template>
  <div class="logo">
    <router-link :to="{ name: 'Home' }">
      <img src="@/assets/image/nav/laundry.png" alt="logo" width="60" height="60">
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'NavLogo'
}
</script>
